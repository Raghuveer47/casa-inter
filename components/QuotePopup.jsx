"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import EnquiryForm from "./EnquiryForm";
import { Ornament } from "./ui/SectionHeading";
import { images } from "@/data/images";
import { EASE } from "@/lib/utils";

const DELAY_MS = 15000;
export const ENQUIRY_SENT_KEY = "casa-enquiry-sent";

function alreadySent() {
  try {
    return sessionStorage.getItem(ENQUIRY_SENT_KEY) === "1";
  } catch {
    return false;
  }
}

// "Get a Free Quote" pop-up. Appears 15 seconds after the page loads and again
// 15 seconds after every close, on every page. The only thing that stops it is
// the visitor submitting an enquiry (this form or any other form on the site).
export default function QuotePopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const panelRef = useRef(null);
  const returnFocus = useRef(null);

  useEffect(() => {
    if (open || done) return;
    const timer = setTimeout(() => {
      if (alreadySent()) return setDone(true);
      returnFocus.current = document.activeElement;
      setOpen(true);
    }, DELAY_MS);
    return () => clearTimeout(timer);
  }, [open, done]);

  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const t = setTimeout(() => panelRef.current?.querySelector("button[data-close]")?.focus({ preventScroll: true }), 200);
    return () => {
      html.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
      returnFocus.current?.focus?.({ preventScroll: true });
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[65] flex items-end justify-center md:items-center md:p-6">
          <motion.div
            className="absolute inset-0 bg-night/75 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-popup-title"
            className="relative grid max-h-[92svh] w-full max-w-4xl overflow-y-auto border-t border-gold/40 bg-paper md:grid-cols-[0.9fr_1.1fr] md:border"
            initial={{ y: "100%", opacity: 0.6 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <div className="relative hidden md:block">
              <Image src={images.livingLuxury} alt="" fill sizes="40vw" className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-night/90 via-night/30 to-transparent" />
              <ul className="absolute inset-x-8 bottom-8 space-y-2 text-sm text-cream/85">
                {["Free site visit & 3D concept", "Factory-direct, itemised quote", "Up to 10-year warranty"].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <Check aria-hidden="true" strokeWidth={1.5} className="size-4 text-gold-soft" /> {x}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 pb-8 sm:p-9">
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-cream/20 md:hidden" aria-hidden="true" />
              <button
                type="button"
                data-close
                onClick={() => setOpen(false)}
                aria-label="Close quote form"
                className="absolute right-3 top-3 grid size-11 place-items-center text-cream/70 transition-colors hover:text-gold-soft"
              >
                <X strokeWidth={1.25} className="size-6" />
              </button>
              <p className="eyebrow text-gold">Free design consultation</p>
              <h2 id="quote-popup-title" className="mt-3 font-serif text-4xl font-light leading-tight">
                Get a <em className="text-gold-soft">Free Quote</em>
              </h2>
              <Ornament className="mt-4" />
              <p className="mt-4 text-sm leading-relaxed text-muted">A personalised 3D concept and factory-direct estimate for your home — no obligation.</p>
              <div className="mt-6">
                <EnquiryForm
                  compact
                  source={`Pop-up — ${pathname}`}
                  onSuccess={() => setDone(true)}
                  onDone={() => setOpen(false)}
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
