import { site } from "@/lib/site";

const INK = "#1a1612";
const MUTED = "#6b6258";
const GOLD = "#c5a161";
const CREAM = "#f7f3ec";
const NIGHT = "#0c0b0a";
const LINE = "#e6dfd4";

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function filled(rows) {
  return rows.filter(([, value]) => String(value ?? "").trim());
}

function detailRows(entry, { includeSource = false } = {}) {
  return filled([
    ["Name", entry.name],
    ["Phone", entry.phone],
    ["Email", entry.email],
    ["Location", entry.location],
    ["Property type", entry.propertyType],
    ["Requirement", entry.requirement],
    ["Approx. area", entry.area ? `${entry.area} sq.ft` : ""],
    ["Budget", entry.budget],
    ["Planning to start", entry.startTime],
    ["Preferred time", entry.preferredTime],
    ["Message", entry.message],
    ...(includeSource ? [["Source", entry.source]] : []),
  ]);
}

function rowsHtml(rows) {
  if (!rows.length) return "";
  const cells = rows
    .map(
      ([label, value], i) => `
        <tr>
          <td style="padding:14px 0;${i ? `border-top:1px solid ${LINE};` : ""}font-family:Georgia,'Times New Roman',serif;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:${GOLD};width:38%;vertical-align:top;">${esc(label)}</td>
          <td style="padding:14px 0;${i ? `border-top:1px solid ${LINE};` : ""}font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:${INK};vertical-align:top;">${esc(value).replace(/\n/g, "<br>")}</td>
        </tr>`
    )
    .join("");
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0 8px;border-top:1px solid ${LINE};border-bottom:1px solid ${LINE};">
      ${cells}
    </table>`;
}

function button(label, href, { solid = true } = {}) {
  const style = solid
    ? `background:${GOLD};color:${NIGHT};border:1px solid ${GOLD};`
    : `background:#ffffff;color:${INK};border:1px solid ${GOLD};`;
  return `<a href="${esc(href)}" style="display:inline-block;margin:0 8px 8px 0;padding:12px 22px;border-radius:999px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;${style}">${esc(label)}</a>`;
}

function layout({ preheader, kicker, title, paragraphs, rows, actions }) {
  const copy = paragraphs.map((p) => `<p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.65;color:${INK};">${esc(p)}</p>`).join("");
  const actionRow = actions?.length
    ? `<div style="margin-top:28px;">${actions.map((a) => button(a.label, a.href, a)).join("")}</div>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${esc(title)}</title>
</head>
<body style="margin:0;padding:0;background:${CREAM};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM};padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:18px;overflow:hidden;">
          <tr>
            <td style="background:${NIGHT};padding:36px 40px 28px;text-align:center;">
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:28px;letter-spacing:0.28em;color:${CREAM};">CASAART</p>
              <p style="margin:10px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:14px;font-style:italic;color:${GOLD};">${esc(site.tagline)}</p>
            </td>
          </tr>
          <tr>
            <td style="height:3px;background:${GOLD};font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:36px 40px 32px;">
              <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:${GOLD};">${esc(kicker)}</p>
              <h1 style="margin:0 0 18px;font-family:Georgia,'Times New Roman',serif;font-size:32px;font-weight:500;line-height:1.15;color:${INK};">${esc(title)}</h1>
              ${copy}
              ${rowsHtml(rows)}
              ${actionRow}
            </td>
          </tr>
          <tr>
            <td style="background:${NIGHT};padding:28px 40px;text-align:center;">
              <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:${CREAM};">
                <a href="${esc(site.contact.phoneHref)}" style="color:${CREAM};text-decoration:none;">${esc(site.contact.phone)}</a>
                &nbsp;·&nbsp;
                <a href="mailto:${esc(site.contact.email)}" style="color:${CREAM};text-decoration:none;">${esc(site.contact.email)}</a>
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#a89f92;">${esc(site.contact.address)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function textBody({ title, paragraphs, rows }) {
  const lines = [title, "", ...paragraphs.map((p) => p.replace(/<[^>]+>/g, "")), ""];
  for (const [label, value] of rows) lines.push(`${label}: ${value}`);
  lines.push("", site.name, site.contact.phone, site.contact.email, site.contact.address);
  return lines.join("\n");
}

export function visitorMail(entry) {
  const paragraphs = [
    `Hello ${entry.name}, thank you for contacting CasaArt. We have received your enquiry and a designer will call you on the number you shared.`,
    "The first design consultation and quote are completely free, with no obligation.",
  ];
  const rows = detailRows(entry);
  const title = `Thank you, ${entry.name.split(" ")[0] || entry.name}`;
  return {
    subject: `Thank you for contacting ${site.name}`,
    html: layout({
      preheader: "Your enquiry is with CasaArt. The first design consultation and quote are free.",
      kicker: "Enquiry received",
      title,
      paragraphs,
      rows,
      actions: [
        { label: "Call us", href: site.contact.phoneHref },
        { label: "Chat on WhatsApp", href: site.whatsapp.href, solid: false },
      ],
    }),
    text: textBody({
      title: `Thank you, ${entry.name.split(" ")[0] || entry.name}`,
      paragraphs: [
        `Hello ${entry.name}, thank you for contacting CasaArt. We have received your enquiry and a designer will call you on the number you shared.`,
        "The first design consultation and quote are completely free, with no obligation.",
      ],
      rows,
    }),
  };
}

export function ownerMail(entry) {
  const paragraphs = [`A new consultation request just came in from the website${entry.source ? ` (${entry.source})` : ""}.`];
  const rows = detailRows(entry, { includeSource: true });
  const title = `${entry.name} requested a consultation`;
  const actions = [{ label: "Call", href: `tel:${String(entry.phone).replace(/\s/g, "")}` }];
  if (entry.email) actions.push({ label: "Reply", href: `mailto:${entry.email}`, solid: false });
  return {
    subject: `New consultation request from ${entry.name}`,
    html: layout({
      preheader: `${entry.name} · ${entry.phone} · ${entry.location || "Hyderabad"}`,
      kicker: "New enquiry",
      title,
      paragraphs,
      rows,
      actions,
    }),
    text: textBody({
      title,
      paragraphs: [`A new consultation request just came in from the website${entry.source ? ` (${entry.source})` : ""}.`],
      rows,
    }),
  };
}
