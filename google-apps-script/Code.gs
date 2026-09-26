/**
 * CASAART INTERIORS — Enquiry endpoint
 *
 * Receives enquiries from the website, appends them to Google Sheets,
 * notifies the studio by email and (optionally) confirms to the customer.
 *
 * Setup: see README.md → "Google Sheets + Apps Script".
 */

const CONFIG = {
  SHEET_NAME: "Enquiries",
  // Studio inbox for new-enquiry alerts. Prefer setting a Script Property named
  // NOTIFY_EMAIL (Project Settings → Script Properties) so it lives outside code.
  // Separate multiple addresses with commas.
  NOTIFY_EMAIL: "",
  SEND_CUSTOMER_CONFIRMATION: true,
  BRAND: "CasaArt Interiors",
  // Identical submissions (same email + phone + message) within this window are ignored.
  DEDUPE_SECONDS: 120,
};

const HEADERS = ["Timestamp", "Name", "Phone", "Email", "City", "Service", "Budget", "Message", "Source"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);

    const data = parseBody_(e);

    // Honeypot filled in → almost certainly a bot. Pretend success, store nothing.
    if (data.company) return json_({ result: "success" });

    const errors = validate_(data);
    if (errors.length) return json_({ result: "error", error: "validation", fields: errors });

    if (isDuplicate_(data)) return json_({ result: "success", duplicate: true });

    const now = new Date();
    getSheet_().appendRow([
      now,
      safe_(data.name),
      safe_(data.phone),
      safe_(data.email),
      safe_(data.city),
      safe_(data.service),
      safe_(data.budget),
      safe_(data.message),
      safe_(data.source || "Website"),
    ]);

    // Email failures (e.g. daily quota) must not lose the enquiry, which is already saved.
    try {
      notifyStudio_(data, now);
    } catch (err) {
      console.error("Studio notification failed", err);
    }
    if (CONFIG.SEND_CUSTOMER_CONFIRMATION) {
      try {
        confirmCustomer_(data);
      } catch (err) {
        console.error("Customer confirmation failed", err);
      }
    }

    return json_({ result: "success" });
  } catch (err) {
    console.error(err);
    return json_({ result: "error" });
  } finally {
    lock.releaseLock();
  }
}

// Visiting the /exec URL in a browser is a quick health check.
function doGet() {
  return json_({ status: "ok", service: CONFIG.BRAND + " enquiries" });
}

/** Run once from the editor: creates the sheet/headers and triggers the permission prompt. */
function setup() {
  getSheet_();
  console.log("Sheet ready. Notification email: " + (getNotifyEmail_() || "NOT SET"));
}

/* ---------- helpers ---------- */

function parseBody_(e) {
  if (!e || !e.postData || !e.postData.contents) throw new Error("Empty request");
  const raw = JSON.parse(e.postData.contents);
  const pick = (k, max) => String(raw[k] == null ? "" : raw[k]).trim().slice(0, max);
  return {
    name: pick("name", 120),
    phone: pick("phone", 30),
    email: pick("email", 160),
    city: pick("city", 80),
    service: pick("service", 80),
    budget: pick("budget", 40),
    message: pick("message", 2000),
    source: pick("source", 120),
    company: pick("company", 120),
  };
}

function validate_(d) {
  const errors = [];
  if (d.name.length < 2) errors.push("name");
  const digits = d.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) errors.push("phone");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email)) errors.push("email");
  if (!d.service) errors.push("service");
  return errors;
}

function isDuplicate_(d) {
  const cache = CacheService.getScriptCache();
  const digest = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    [d.email.toLowerCase(), d.phone.replace(/\D/g, ""), d.message].join("|")
  );
  const key = "enq_" + Utilities.base64EncodeWebSafe(digest);
  if (cache.get(key)) return true;
  cache.put(key, "1", CONFIG.DEDUPE_SECONDS);
  return false;
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(CONFIG.SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold").setBackground("#f3eee5");
    sheet.setFrozenRows(1);
    sheet.getRange("A:A").setNumberFormat("dd mmm yyyy, hh:mm am/pm");
  }
  return sheet;
}

// Stops user input from being interpreted as a spreadsheet formula.
function safe_(value) {
  const s = String(value || "");
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function getNotifyEmail_() {
  return PropertiesService.getScriptProperties().getProperty("NOTIFY_EMAIL") || CONFIG.NOTIFY_EMAIL;
}

function formatDate_(date) {
  return Utilities.formatDate(date, Session.getScriptTimeZone(), "dd MMM yyyy, hh:mm a");
}

function escapeHtml_(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function notifyStudio_(d, submittedAt) {
  const to = getNotifyEmail_();
  if (!to) {
    console.warn("NOTIFY_EMAIL is not set — skipping studio notification.");
    return;
  }

  const rows = [
    ["Name", d.name],
    ["Phone", d.phone],
    ["Email", d.email],
    ["City", d.city || "—"],
    ["Service", d.service],
    ["Budget", d.budget || "—"],
    ["Message", d.message || "—"],
    ["Submitted At", formatDate_(submittedAt)],
    ["Source", d.source || "Website"],
  ];

  const body = "New CasaArt Interiors Enquiry\n\n" + rows.map((r) => r[0] + ": " + r[1]).join("\n");

  const htmlBody =
    '<div style="font-family:Georgia,serif;color:#151412;max-width:560px">' +
    '<h2 style="font-weight:400;margin:0 0 16px">New CasaArt Interiors Enquiry</h2>' +
    '<table cellpadding="8" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;width:100%">' +
    rows
      .map(
        (r) =>
          '<tr><td style="border-bottom:1px solid #e6dccd;color:#6b5744;width:140px;vertical-align:top">' +
          r[0] +
          '</td><td style="border-bottom:1px solid #e6dccd;white-space:pre-wrap">' +
          escapeHtml_(r[1]) +
          "</td></tr>"
      )
      .join("") +
    "</table></div>";

  MailApp.sendEmail({
    to: to,
    subject: "New enquiry — " + d.name + " (" + d.service + ")",
    body: body,
    htmlBody: htmlBody,
    replyTo: d.email,
    name: CONFIG.BRAND + " Website",
  });
}

function confirmCustomer_(d) {
  const firstName = d.name.split(/\s+/)[0];
  const body =
    "Dear " + firstName + ",\n\n" +
    "Thank you for contacting CasaArt Interiors.\n\n" +
    "We have received your enquiry.\n\n" +
    "Our team will contact you shortly.\n\n" +
    "CasaArt Interiors";

  const htmlBody =
    '<div style="font-family:Georgia,serif;color:#151412;max-width:520px;line-height:1.6">' +
    '<p style="letter-spacing:4px;font-size:18px;margin:0 0 24px">CASAART <span style="font-size:11px;letter-spacing:6px">INTERIORS</span></p>' +
    "<p>Dear " + escapeHtml_(firstName) + ",</p>" +
    "<p>Thank you for contacting CasaArt Interiors.</p>" +
    "<p>We have received your enquiry.</p>" +
    "<p>Our team will contact you shortly.</p>" +
    '<p style="margin-top:32px">CasaArt Interiors</p></div>';

  MailApp.sendEmail({
    to: d.email,
    subject: "Thank you for contacting CasaArt Interiors",
    body: body,
    htmlBody: htmlBody,
    name: CONFIG.BRAND,
  });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
