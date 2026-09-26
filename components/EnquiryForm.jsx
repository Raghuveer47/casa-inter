"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Loader2 } from "lucide-react";
import { BUDGET_OPTIONS, SERVICE_OPTIONS, submitEnquiry, validateEnquiry } from "@/lib/enquiry";
import { site } from "@/lib/site";
import { cn, EASE } from "@/lib/utils";

const EMPTY = { name: "", phone: "", email: "", city: "", service: "", budget: "", message: "", website: "" };
const FIELD_ORDER = ["name", "phone", "email", "service", "message"];

export default function EnquiryForm({ source = "Website", dark = false, onDone }) {
  const uid = useId();
  const formRef = useRef(null);
  const submittingRef = useRef(false);
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const id = (name) => `${uid}-${name}`;

  function update(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
    if (status === "error") setStatus("idle");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (submittingRef.current) return; // guards against double clicks / double Enter

    const found = validateEnquiry(values);
    setErrors(found);
    const firstInvalid = FIELD_ORDER.find((f) => found[f]);
    if (firstInvalid) {
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    submittingRef.current = true;
    setStatus("submitting");
    try {
      await submitEnquiry({ ...values, source });
      setStatus("success");
      setValues(EMPTY);
    } catch (err) {
      console.error("[enquiry]", err);
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  }

  const tone = dark
    ? { text: "text-paper", muted: "text-paper/60", line: "border-paper/25 focus:border-paper", option: "text-ink" }
    : { text: "text-ink", muted: "text-muted", line: "border-ink/20 focus:border-ink", option: "" };

  const fieldClass = cn(
    "w-full appearance-none rounded-none border-0 border-b bg-transparent px-0 py-3 text-base outline-none transition-colors duration-300 placeholder:text-current placeholder:opacity-35 focus-visible:outline-none",
    tone.line
  );
  const labelClass = cn("eyebrow block", tone.muted);

  function Field({ name, label, required, children, className }) {
    return (
      <div className={className}>
        <label htmlFor={id(name)} className={labelClass}>
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
        {children}
        {errors[name] && (
          <p id={`${id(name)}-error`} className="mt-2 text-sm text-[#b4533f]" role="alert">
            {errors[name]}
          </p>
        )}
      </div>
    );
  }

  const a11y = (name, required) => ({
    id: id(name),
    name,
    value: values[name],
    onChange: update,
    "aria-required": required || undefined,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id(name)}-error` : undefined,
  });

  return (
    <div className={tone.text} aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="py-10"
          >
            <p className="font-serif text-headline font-light">Thank you.</p>
            <p className="mt-6 max-w-md text-lg leading-relaxed">Your enquiry has been received.</p>
            <p className={cn("mt-2 max-w-md leading-relaxed", tone.muted)}>Our team will contact you shortly.</p>
            <div className="mt-10 flex flex-wrap gap-6">
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className={cn("eyebrow border-b pb-1.5", dark ? "border-paper/40" : "border-ink/30")}
              >
                Send another enquiry
              </button>
              {onDone && (
                <button type="button" onClick={onDone} className={cn("eyebrow border-b pb-1.5", dark ? "border-paper/40" : "border-ink/30")}>
                  Close
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative grid gap-x-8 gap-y-8 sm:grid-cols-2"
          >
            {Field({
              name: "name",
              label: "Full Name",
              required: true,
              className: "sm:col-span-2",
              children: <input type="text" autoComplete="name" className={fieldClass} placeholder="Your name" {...a11y("name", true)} />,
            })}
            {Field({
              name: "phone",
              label: "Phone Number",
              required: true,
              children: <input type="tel" inputMode="tel" autoComplete="tel" className={fieldClass} placeholder="+91" {...a11y("phone", true)} />,
            })}
            {Field({
              name: "email",
              label: "Email",
              required: true,
              children: <input type="email" inputMode="email" autoComplete="email" className={fieldClass} placeholder="you@email.com" {...a11y("email", true)} />,
            })}
            {Field({
              name: "city",
              label: "City",
              children: <input type="text" autoComplete="address-level2" className={fieldClass} placeholder="Hyderabad" {...a11y("city")} />,
            })}
            {Field({
              name: "service",
              label: "Service",
              required: true,
              children: (
                <div className="relative">
                  <select className={cn(fieldClass, "pr-8", !values.service && "opacity-60")} {...a11y("service", true)}>
                    <option value="" disabled className={tone.option}>Select a service</option>
                    {SERVICE_OPTIONS.map((o) => (
                      <option key={o} value={o} className={tone.option}>{o}</option>
                    ))}
                  </select>
                  <ChevronDown aria-hidden="true" strokeWidth={1.5} className="pointer-events-none absolute right-0 top-1/2 size-4 -translate-y-1/2 opacity-60" />
                </div>
              ),
            })}
            {Field({
              name: "budget",
              label: "Budget",
              className: "sm:col-span-2",
              children: (
                <div className="relative">
                  <select className={cn(fieldClass, "pr-8", !values.budget && "opacity-60")} {...a11y("budget")}>
                    <option value="" className={tone.option}>Select a range (optional)</option>
                    {BUDGET_OPTIONS.map((o) => (
                      <option key={o} value={o} className={tone.option}>{o}</option>
                    ))}
                  </select>
                  <ChevronDown aria-hidden="true" strokeWidth={1.5} className="pointer-events-none absolute right-0 top-1/2 size-4 -translate-y-1/2 opacity-60" />
                </div>
              ),
            })}
            {Field({
              name: "message",
              label: "Message",
              className: "sm:col-span-2",
              children: (
                <textarea rows={4} maxLength={2000} className={cn(fieldClass, "resize-none")} placeholder="Tell us about your space, timeline and what you have in mind" {...a11y("message")} />
              ),
            })}

            {/* Honeypot: hidden from people, tempting for bots */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor={id("website")}>Website</label>
              <input type="text" id={id("website")} name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={update} />
            </div>

            <div className="flex flex-col gap-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "submitting"}
                aria-disabled={status === "submitting"}
                className={cn(
                  "group inline-flex min-h-14 items-center justify-center gap-3 px-9 text-[0.8rem] font-medium uppercase tracking-[0.16em] transition-colors duration-500 disabled:cursor-wait disabled:opacity-70",
                  dark ? "bg-paper text-ink hover:bg-ivory" : "bg-ink text-paper hover:bg-charcoal"
                )}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 aria-hidden="true" className="size-4 animate-spin" strokeWidth={1.5} />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Enquiry
                    <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
              <p className={cn("text-xs leading-relaxed", tone.muted)}>* Required fields. We reply within one working day.</p>
            </div>

            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  role="alert"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={cn("border-l-2 border-[#b4533f] pl-4 sm:col-span-2")}
                >
                  <p className="font-medium">Something went wrong.</p>
                  <p className={cn("mt-1 text-sm", tone.muted)}>
                    Please try again or contact us directly at{" "}
                    <a className="underline underline-offset-4" href={`tel:${site.contact.phone.replace(/\s/g, "")}`}>{site.contact.phone}</a>.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
