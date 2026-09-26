"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { faqs } from "@/data/brand";
import { cn, EASE } from "@/lib/utils";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section aria-labelledby="faq-title" className="theme-light section-y">
      <div className="container-x">
        <SectionHeading id="faq-title" eyebrow="Good to know" lines={["Frequently Asked", <em key="e" className="text-earth">Questions</em>]} />
        <ul className="mx-auto mt-14 max-w-3xl border-b border-line md:mt-16">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="border-t border-line">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-serif text-xl font-light md:text-2xl"
                  >
                    {f.q}
                    <Plus aria-hidden="true" strokeWidth={1.25} className={cn("size-5 shrink-0 text-gold transition-transform duration-500", isOpen && "rotate-45")} />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 leading-relaxed text-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
