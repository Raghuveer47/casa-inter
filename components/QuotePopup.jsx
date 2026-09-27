"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import EnquiryForm from "./EnquiryForm";
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
        <div className="fixed inset-0 z-[65] flex items-center justify-center p-4 md:p-6">
          <motion.div
            className="absolute inset-0 bg-night/45 backdrop-blur-[2px]"
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
            className="relative grid max-h-[78svh] w-full max-w-md overflow-y-auto overscroll-contain rounded-3xl border border-gold/25 bg-paper shadow-[0_30px_80px_rgba(0,0,0,0.6)] md:max-w-4xl md:grid-cols-[0.9fr_1.1fr]"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: EASE }}
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

            <div className="p-5 pb-7 sm:p-9">
              <button
                type="button"
                data-close
                onClick={() => setOpen(false)}
                aria-label="Close quote form"
                className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full border border-cream/15 bg-paper/80 text-cream/80 transition-colors hover:border-gold hover:text-gold-soft"
              >
                <X strokeWidth={1.5} className="size-5" />
              </button>
              <p className="inline-flex rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold-soft">Free design consultation</p>
              <h2 id="quote-popup-title" className="mt-3 pr-10 font-serif text-3xl font-light leading-tight sm:mt-4 sm:text-4xl">
                Get a <em className="text-gold-soft">Free Quote</em>
              </h2>
              <p className="mt-3 hidden text-sm leading-relaxed text-muted sm:block">A personalised 3D concept and factory-direct estimate for your home — no obligation.</p>
              <div className="mt-4 sm:mt-5">
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
