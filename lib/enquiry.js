// Enquiry submissions go to /api/enquiry, which emails via Resend and
// appends a row to storage/enquiries.xlsx (and the live Google Sheet if configured).

export const PROPERTY_OPTIONS = ["2 BHK Apartment", "3 BHK Apartment", "4 BHK / Villa", "Independent House", "Commercial", "Other"];

export const REQUIREMENT_OPTIONS = ["Kitchen", "Wardrobe", "Bedroom", "Living Room", "Complete Interior", "Other"];

export const BUDGET_OPTIONS = ["Under ₹3.5 Lakh", "₹3.5 – 5 Lakh", "₹5 – 8 Lakh", "₹8 – 12 Lakh", "Above ₹12 Lakh", "Not sure yet"];

export const START_OPTIONS = ["Immediately", "Within 1 month", "In 1–3 months", "Just exploring"];

export const TIME_OPTIONS = ["Morning (10am – 1pm)", "Afternoon (1pm – 4pm)", "Evening (4pm – 7pm)", "Weekend"];

export const EMPTY_ENQUIRY = {
  name: "",
  phone: "",
  email: "",
  location: "",
  propertyType: "",
  requirement: "",
  area: "",
  budget: "",
  preferredTime: "",
  startTime: "",
  message: "",
  website: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateEnquiry(values) {
  const errors = {};
  const name = values.name.trim();
  const phoneDigits = values.phone.replace(/\D/g, "");
  const email = values.email.trim();

  // The "modal" (quote pop-up) and "cta" (homepage consultation card) forms
  // follow the site design: name optional, and the pop-up has no location field.
  const light = values.form === "modal" || values.form === "cta";
  if (light ? name.length === 1 : name.length < 2) errors.name = "Please enter your full name.";
  if (phoneDigits.length < 10 || phoneDigits.length > 15 || !/^[+\d\s()-]+$/.test(values.phone.trim()))
    errors.phone = "Please enter a valid phone number.";
  if (email && !EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (values.form !== "modal" && values.location.trim().length < 2) errors.location = "Please enter your location.";
  // Only the full enquiry form asks for "requirement".
  if (values.form === "full" && !values.requirement) errors.requirement = "Please choose what you need.";
  if (values.area && !/^\d{2,6}$/.test(values.area.trim())) errors.area = "Please enter the area in sq.ft (numbers only).";
  if (values.message.length > 2000) errors.message = "Please keep your message under 2000 characters.";

  return errors;
}

export async function submitEnquiry(values) {
  const payload = {
    name: values.name.trim(),
    phone: values.phone.trim(),
    email: values.email.trim(),
    location: values.location.trim(),
    propertyType: values.propertyType,
    requirement: values.requirement,
    area: values.area.trim(),
    budget: values.budget,
    preferredTime: values.preferredTime,
    startTime: values.startTime,
    message: values.message.trim(),
    form: values.form || "full",
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
