// Appends one enquiry to the live Google Sheet via the Apps Script web app.

export async function appendLiveSheet(entry) {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!url) {
    console.warn("[enquiry] live sheet skipped — set GOOGLE_SHEET_WEBHOOK_URL in .env");
    return { ok: false, skipped: true };
  }

  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour12: true,
  });

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    redirect: "follow",
    body: JSON.stringify({
      secret: process.env.GOOGLE_SHEET_SECRET || "",
      submittedAt,
      name: entry.name,
      phone: entry.phone,
      email: entry.email,
      location: entry.location,
      propertyType: entry.propertyType,
      requirement: entry.requirement,
      area: entry.area,
      budget: entry.budget,
      preferredTime: entry.preferredTime,
      startTime: entry.startTime,
      message: entry.message,
      source: entry.source,
    }),
  });

  const raw = await res.text();
  let json = null;
  try {
    json = JSON.parse(raw);
  } catch {
    json = null;
  }

  if (!res.ok || json?.result !== "success") {
    if (res.status === 403 || /access denied/i.test(raw)) {
      console.error(
        "[enquiry] live sheet blocked by Google. In Apps Script open Deploy → Manage deployments → Edit, set Who has access to Anyone, choose New version, then Deploy again."
      );
    } else {
      console.error("[enquiry] live sheet rejected the row", { status: res.status, body: (json?.error || raw).slice(0, 300) });
    }
    return { ok: false };
  }

  console.log("[enquiry] live sheet row saved");
  return { ok: true };
}
