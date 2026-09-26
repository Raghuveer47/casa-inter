import { mkdir, access } from "fs/promises";
import path from "path";
import ExcelJS from "exceljs";

const FILE = path.join(process.cwd(), "storage", "enquiries.xlsx");
// New sheet name so older rows with the previous columns stay intact.
const SHEET = "Consultations";
const HEADERS = ["Submitted at", "Name", "Phone", "Email", "Location", "Property type", "Requirement", "Area (sq.ft)", "Budget", "Preferred time", "Start", "Message", "Source"];

// Stops a cell that starts with = + - @ from being treated as a formula.
function cell(value) {
  const text = String(value ?? "").trim();
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}

let queue = Promise.resolve();

async function writeRow(entry) {
  await mkdir(path.dirname(FILE), { recursive: true });

  const workbook = new ExcelJS.Workbook();
  try {
    await access(FILE);
    await workbook.xlsx.readFile(FILE);
  } catch {
    // First enquiry creates the workbook.
  }

  let sheet = workbook.getWorksheet(SHEET);
  if (!sheet) {
    sheet = workbook.addWorksheet(SHEET);
    const header = sheet.addRow(HEADERS);
    header.font = { bold: true };
    sheet.views = [{ state: "frozen", ySplit: 1 }];
    sheet.columns = [
      { width: 22 },
      { width: 24 },
      { width: 18 },
      { width: 32 },
      { width: 24 },
      { width: 18 },
      { width: 20 },
      { width: 14 },
      { width: 18 },
      { width: 22 },
      { width: 16 },
      { width: 48 },
      { width: 22 },
    ];
  }

  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour12: true,
  });

  sheet.addRow([
    submittedAt,
    cell(entry.name),
    cell(entry.phone),
    cell(entry.email),
    cell(entry.location),
    cell(entry.propertyType),
    cell(entry.requirement),
    cell(entry.area),
    cell(entry.budget),
    cell(entry.preferredTime),
    cell(entry.startTime),
    cell(entry.message),
    cell(entry.source),
  ]);

  await workbook.xlsx.writeFile(FILE);
  console.log("[enquiry] excel row saved", { file: FILE, rows: sheet.rowCount - 1 });
  return FILE;
}

export function appendEnquiry(entry) {
  const run = queue.then(() => writeRow(entry));
  queue = run.then(() => undefined, () => undefined);
  return run;
}
