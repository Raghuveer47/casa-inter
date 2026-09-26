import { Resend } from "resend";
import { validateEnquiry } from "@/lib/enquiry";
import { appendEnquiry } from "@/lib/enquiries-sheet";
import { appendLiveSheet } from "@/lib/google-sheet";
import { site } from "@/lib/site";

export const runtime = "nodejs";

function text(value, max = 2000) {
  return String(value ?? "").trim().slice(0, max);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ result: "error", error: "Invalid enquiry." }, { status: 400 });
  }

  // Bots fill the hidden website field. Pretend it worked and drop the row.
  if (text(body.website)) {
    console.warn("[enquiry] skipped — hidden website field was filled");
    return Response.json({ result: "success" });
  }

  const entry = {
    name: text(body.name, 120),
    phone: text(body.phone, 30),
    email: text(body.email, 160),
    city: text(body.city, 80),
    service: text(body.service, 80),
    budget: text(body.budget, 40),
    message: text(body.message, 2000),
    source: text(body.source, 80) || "Website",
  };

  const errors = validateEnquiry(entry);
  if (Object.keys(errors).length > 0) {
    console.warn("[enquiry] rejected", errors);
    return Response.json({ result: "error", error: "Please check the form and try again." }, { status: 400 });
  }

  console.log("[enquiry] received", { name: entry.name, email: entry.email, service: entry.service, source: entry.source });

  try {
    await appendEnquiry(entry);
  } catch (err) {
    console.error("[enquiry] could not write the spreadsheet", err);
    return Response.json({ result: "error", error: "Could not save your enquiry." }, { status: 500 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.ENQUIRY_TO_EMAIL || site.contact.email;

  if (!apiKey || !from) {
    console.error("[enquiry] RESEND_API_KEY or RESEND_FROM_EMAIL is not set. The row was saved to storage/enquiries.xlsx.");
    return Response.json({ result: "error", error: "Email is not configured." }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const details = [
    `Name: ${entry.name}`,
    `Phone: ${entry.phone}`,
    `Email: ${entry.email}`,
    `City: ${entry.city || "—"}`,
    `Service: ${entry.service}`,
    `Budget: ${entry.budget || "—"}`,
    `Source: ${entry.source}`,
    "",
    entry.message || "No message.",
  ].join("\n");

  const thankYou = `Hello ${entry.name},\n\nThank you for contacting ${site.name}. We have received your enquiry and a designer will get back to you within one working day.\n\n— ${site.name}\n${site.contact.phone}\n${site.contact.email}`;

  let visitor;
  let owner;
  try {
    [visitor, owner] = await Promise.all([
      resend.emails.send({
        from,
        to: [entry.email],
        replyTo: to,
        subject: `Thank you for contacting ${site.name}`,
        text: thankYou,
      }),
      resend.emails.send({
        from,
        to: [to],
        replyTo: entry.email,
        subject: `New enquiry from ${entry.name}`,
        text: `A new enquiry just came in from the website.\n\n${details}`,
      }),
    ]);
  } catch (err) {
    console.error("[enquiry] email request failed", err);
    return Response.json({ result: "error", error: "Could not send the enquiry email." }, { status: 502 });
  }

  if (visitor.error) {
    console.warn("[enquiry] thank-you email was not delivered.", visitor.error.message || visitor.error);
  } else {
    console.log("[enquiry] thank-you email sent to", entry.email);
  }

  if (owner.error) {
    console.error("[enquiry] owner email failed", owner.error);
    return Response.json({ result: "error", error: "Could not send the enquiry email." }, { status: 502 });
  }

  console.log("[enquiry] owner email sent to", to);

  try {
    const sheet = await appendLiveSheet(entry);
    if (!sheet.ok && !sheet.skipped) {
      console.error("[enquiry] email was sent, but the live Google Sheet was not updated");
    }
  } catch (err) {
    console.error("[enquiry] live sheet request failed", err);
  }

  return Response.json({ result: "success" });
}
