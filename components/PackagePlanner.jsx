"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Home, Building2, Castle, ShieldCheck } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import ArrowLink from "./ui/ArrowLink";
import { useEnquiry } from "./EnquiryProvider";
import { packages } from "@/data/services";
import { cn, EASE } from "@/lib/utils";

// Home types map onto the three indicative packages in data/services.js.
const HOMES = [
  { label: "1–2 BHK", note: "Compact homes", icon: Home },
  { label: "2–3 BHK", note: "Family apartments", icon: Building2 },
  { label: "3 BHK / Villa", note: "Luxury homes", icon: Castle },
];

// Interactive "find your package": pick a home type and see the matching
// package, its starting price and what is included.
export default function PackagePlanner() {
  const [active, setActive] = useState(1);
  const { openEnquiry } = useEnquiry();
  const pkg = packages[active];
  const warranty = pkg.items.find((i) => /warranty/i.test(i));
  const items = pkg.items.filter((i) => i !== warranty);

  return (
    <section aria-labelledby="planner-title" className="theme-light section-y">
      <div className="container-x">
        <SectionHeading
          id="planner-title"
          eyebrow="Plan your budget"
          lines={["Find Your", <em key="e" className="text-earth">Interior Package</em>]}
          intro="Tell us your home size and see what's included, with an indicative starting price. Your exact quote follows a free site visit."
        />

        <div className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <p className="text-sm font-semibold text-muted" id="home-type-label">Your home</p>
            <div role="radiogroup" aria-labelledby="home-type-label" className="mt-3 grid grid-cols-3 gap-3 lg:grid-cols-1">
              {HOMES.map((h, i) => {
                const on = i === active;
                return (
                  <button
                    key={h.label}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    onClick={() => setActive(i)}
                    className={cn(
                      "flex flex-col items-center gap-2 rounded-2xl border p-4 text-center transition-colors duration-300 lg:flex-row lg:gap-4 lg:p-5 lg:text-left",
                      on ? "border-gold bg-gold text-on-accent" : "border-line bg-ivory hover:border-gold"
                    )}
                  >
                    <span className={cn("grid size-10 shrink-0 place-items-center rounded-full", on ? "bg-on-accent/15" : "bg-paper text-gold")}>
                      <h.icon aria-hidden="true" strokeWidth={1.6} className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold sm:text-base">{h.label}</span>
                      <span className={cn("hidden text-xs sm:block", on ? "opacity-85" : "text-muted")}>{h.note}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="h-full rounded-3xl bg-night p-6 text-[#f4f5f2] shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-9"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f4f5f2]/60">{pkg.bestFor}</p>
                    <h3 className="mt-2 text-2xl font-bold sm:text-3xl">{pkg.name}</h3>
                  </div>
                  <p className="sm:text-right">
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#f4f5f2]/60">Starting from</span>
                    <span className="font-serif text-4xl text-accent-bright sm:text-5xl">{pkg.price}</span>
                  </p>
                </div>

                <ul className="mt-7 grid gap-3 border-t border-white/10 pt-7 sm:grid-cols-2">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-[#f4f5f2]/90 sm:text-base">
                      <Check aria-hidden="true" strokeWidth={2} className="mt-0.5 size-4 shrink-0 text-accent-bright" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  {warranty && (
                    <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#f4f5f2]">
                      <ShieldCheck aria-hidden="true" strokeWidth={1.75} className="size-5 text-accent-bright" />
                      {warranty}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={openEnquiry}
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent-bright px-7 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-night transition-opacity hover:opacity-90"
                  >
                    Get my exact quote
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
            <p className="mt-4 text-xs text-muted">*Indicative starting prices. Final pricing depends on size, finishes and scope, confirmed after a free site visit.</p>
          </Reveal>
        </div>

        <div className="mt-10 text-center">
          <ArrowLink href="/services">Compare all packages</ArrowLink>
        </div>
      </div>
    </section>
  );
}
