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
        <SectionHeading
          id="faq-title"
          eyebrow="Good to know"
          lines={["Frequently Asked", <em key="e" className="text-earth">Questions</em>]}
          intro="Everything you need to know before starting your interior project."
        />
        <ul className="mx-auto mt-14 max-w-3xl space-y-3 md:mt-16">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className={cn("rounded-2xl px-5 transition-colors duration-300 sm:px-7", isOpen ? "bg-ivory" : "bg-ivory/60 hover:bg-ivory")}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-semibold md:py-6 md:text-lg"
                  >
                    {f.q}
                    <span className={cn("grid size-9 shrink-0 place-items-center rounded-full transition-colors duration-300", isOpen ? "bg-gold text-paper" : "bg-paper text-gold")}>
                      <Plus aria-hidden="true" strokeWidth={1.75} className={cn("size-4 transition-transform duration-500", isOpen && "rotate-45")} />
                    </span>
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
                      <p className="max-w-2xl pb-6 leading-relaxed text-muted">{f.a}</p>
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
