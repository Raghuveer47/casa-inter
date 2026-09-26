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
            <div className="fixed inset-0 z-[60]" key={pathname}>
              <motion.div
                className="absolute inset-0 bg-night/60"
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
                className="absolute inset-y-0 right-0 flex w-full max-w-2xl flex-col overflow-y-auto bg-paper will-change-transform"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.38, ease: EASE }}
              >
                <div className="flex items-center justify-between px-6 pt-6 sm:px-12 sm:pt-10">
                  <p className="eyebrow text-gold">Book a consultation</p>
                  <button
                    type="button"
                    onClick={closeEnquiry}
                    className="-mr-2 grid size-11 place-items-center transition-transform duration-500 hover:rotate-90"
                    aria-label="Close enquiry form"
                  >
                    <X strokeWidth={1.25} className="size-6" />
                  </button>
                </div>
                <div className="px-6 pb-12 pt-6 sm:px-12">
                  <h2 id="enquiry-title" className="font-serif text-headline font-light">
                    Tell us about <em className="text-earth">your space</em>
                  </h2>
                  <div className="mt-10">
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
