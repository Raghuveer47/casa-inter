"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import EnquiryForm from "./EnquiryForm";
import { EASE } from "@/lib/utils";

const EnquiryContext = createContext({ openEnquiry: () => {}, closeEnquiry: () => {} });

export const useEnquiry = () => useContext(EnquiryContext);

export default function EnquiryProvider({ children }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const returnFocus = useRef(null);
  const panelRef = useRef(null);

  const openEnquiry = useCallback(() => {
    returnFocus.current = document.activeElement;
    setOpen(true);
  }, []);
  const closeEnquiry = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";

    const focusTimer = setTimeout(() => {
      panelRef.current?.querySelector("input, select, textarea, button")?.focus({ preventScroll: true });
    }, 280);

    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && panelRef.current) {
        const nodes = panelRef.current.querySelectorAll('a[href], button:not([disabled]), input:not([tabindex="-1"]), select, textarea');
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = prev;
      clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKey);
      returnFocus.current?.focus?.();
    };
  }, [open]);

  return (
    <MotionConfig reducedMotion="user">
      <EnquiryContext.Provider value={{ openEnquiry, closeEnquiry }}>
        {children}
        <AnimatePresence>
          {open && (
            // Centred, Bootstrap-style modal on every screen size — the page stays visible behind it.
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6" key={pathname}>
              <motion.div
                className="absolute inset-0 bg-night/45 backdrop-blur-[2px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                onClick={closeEnquiry}
              />
              <motion.div
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="enquiry-title"
                className="relative max-h-[78svh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-3xl border border-gold/25 bg-paper shadow-[0_30px_80px_rgba(0,0,0,0.6)] will-change-transform"
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.97 }}
                transition={{ duration: 0.32, ease: EASE }}
              >
                <button
                  type="button"
                  onClick={closeEnquiry}
                  className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full border border-cream/15 bg-paper/80 transition-colors hover:border-gold hover:text-gold-soft"
                  aria-label="Close enquiry form"
                >
                  <X strokeWidth={1.5} className="size-5" />
                </button>
                <div className="px-5 pb-7 pt-6 sm:px-10 sm:pb-10 sm:pt-9">
                  <p className="inline-flex rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold-soft">
                    Book a consultation
                  </p>
                  <h2 id="enquiry-title" className="mt-3 pr-10 font-serif text-3xl font-light leading-tight sm:mt-4 sm:text-5xl">
                    Tell us about <em className="text-earth">your space</em>
                  </h2>
                  <div className="mt-6 sm:mt-8">
                    <EnquiryForm source={`Modal — ${pathname}`} onDone={closeEnquiry} />
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </EnquiryContext.Provider>
    </MotionConfig>
  );
}
