// Paste this into Extensions → Apps Script on your Google Sheet, then deploy it
// as a web app (Execute as: Me, Who has access: Anyone).
// GOOGLE_SHEET_SECRET in .env must match SECRET below.

const SECRET = "csa_live_7kQ2mN9pR4wX";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.secret !== SECRET) {
      return json({ result: "error", error: "Unauthorized" });
    }

    const ss = SpreadsheetApp.getActive();
    let sheet = ss.getSheetByName("Consultations");
    if (!sheet) sheet = ss.insertSheet("Consultations");

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Submitted at", "Name", "Phone", "Email", "Location", "Property type", "Requirement", "Area (sq.ft)", "Budget", "Preferred time", "Start", "Message", "Source"]);
      sheet.getRange(1, 1, 1, 13).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      data.submittedAt || new Date(),
      data.name || "",
      "'" + String(data.phone || ""),
      data.email || "",
      data.location || "",
      data.propertyType || "",
      data.requirement || "",
      data.area || "",
      data.budget || "",
      data.preferredTime || "",
      data.startTime || "",
      data.message || "",
      data.source || "",
    ]);

    return json({ result: "success" });
  } catch (err) {
    return json({ result: "error", error: String(err) });
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
