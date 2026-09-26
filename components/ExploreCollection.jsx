"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LineReveal from "./ui/LineReveal";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";
import { collections } from "@/data/collections";
import { cn, EASE } from "@/lib/utils";

export default function ExploreCollection() {
  const [active, setActive] = useState(0);
  const current = collections[active];

  return (
    <section aria-labelledby="collection-title" className="section-y">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col lg:col-span-5">
          <Reveal>
            <SectionLabel index="08">Collections</SectionLabel>
          </Reveal>
          <LineReveal
            id="collection-title"
            lines={["Explore Our", <em key="e" className="text-earth">Collections</em>]}
            className="mt-8 font-serif text-headline font-light"
          />

          <ul className="mt-12 border-t border-line lg:mt-auto lg:pt-0" role="list">
            {collections.map((c, i) => {
              const on = i === active;
              return (
                <li key={c.title} className="border-b border-line">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className="group flex w-full items-center gap-5 py-4 text-left md:py-5"
                  >
                    <span className={cn("w-6 font-serif text-sm italic transition-colors duration-500", on ? "text-earth" : "text-muted")}>
                      0{i + 1}
                    </span>
                    <span
                      className={cn(
                        "flex-1 font-serif text-[clamp(1.75rem,3.4vw,3rem)] font-light leading-none transition-[color,transform] duration-700 ease-luxe",
                        on ? "translate-x-2 text-ink" : "text-ink/50 group-hover:text-ink/80"
                      )}
                    >
                      {c.title}
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      strokeWidth={1.25}
                      className={cn(
                        "size-5 transition-all duration-700 ease-luxe",
                        on ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="order-first lg:order-none lg:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand sm:aspect-[4/3] lg:aspect-[5/6]">
            <AnimatePresence initial={false}>
              <motion.div
                key={current.title}
                className="absolute inset-0"
                initial={{ clipPath: "inset(0% 0% 0% 100%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                exit={{ opacity: 1 }}
                transition={{ duration: 1, ease: EASE }}
              >
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.12 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.4, ease: EASE }}
                >
                  <Image src={current.image} alt={`${current.title} collection`} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
                </motion.div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/60 to-transparent p-6 text-paper md:p-8">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={current.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="flex items-baseline justify-between gap-6"
                  aria-live="polite"
                >
                  <span className="font-serif text-2xl font-light md:text-3xl">{current.title}</span>
                  <span className="text-right text-sm text-paper/75">{current.description}</span>
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
