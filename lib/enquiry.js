// Enquiry submissions go to /api/enquiry, which emails via Resend and
// appends a row to storage/enquiries.xlsx.

export const SERVICE_OPTIONS = [
  "Interior Design",
  "Complete Home Interiors",
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Commercial Interiors",
  "Furniture",
  "Other",
];

export const BUDGET_OPTIONS = [
  "Under ₹5 Lakhs",
  "₹5–10 Lakhs",
  "₹10–20 Lakhs",
  "₹20–30 Lakhs",
  "₹30 Lakhs+",
  "Not Sure Yet",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateEnquiry(values) {
  const errors = {};
  const name = values.name.trim();
  const phoneDigits = values.phone.replace(/\D/g, "");

  if (name.length < 2) errors.name = "Please enter your full name.";
  if (phoneDigits.length < 10 || phoneDigits.length > 15 || !/^[+\d\s()-]+$/.test(values.phone.trim()))
    errors.phone = "Please enter a valid phone number.";
  if (!EMAIL_RE.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!values.service) errors.service = "Please choose a service.";
  if (values.message.length > 2000) errors.message = "Please keep your message under 2000 characters.";

  return errors;
}

export async function submitEnquiry(values) {
  const payload = {
    name: values.name.trim(),
    phone: values.phone.trim(),
    email: values.email.trim(),
    city: values.city.trim(),
    service: values.service,
    budget: values.budget,
    message: values.message.trim(),
    source: values.source || "Website",
    website: values.website || "", // honeypot — real visitors leave this empty
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    const json = await res.json().catch(() => null);
    if (!res.ok || !json || json.result !== "success") {
      throw new Error(json?.error || "Could not send your enquiry");
    }
    return json;
  } finally {
    clearTimeout(timeout);
  }
}
