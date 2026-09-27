"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import ArrowLink from "./ui/ArrowLink";
import { featuredServices } from "@/data/services";
import { cn, EASE } from "@/lib/utils";

// Rounded photo with a light card overlapping its lower edge. The card uses fixed
// ivory/ink colours so it reads the same on dark and light sections.
export function ServiceCard({ service }) {
  return (
    <Link href={`/services/${service.slug}`} className="group flex h-full flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sand">
        <Image
          src={service.image}
          alt={`${service.title} by CasaArt`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 80vw"
          className="object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.06]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-night/60 px-3 py-1 text-xs font-semibold text-cream backdrop-blur-sm">{service.number}</span>
      </div>
      <div className="relative z-10 mx-3 -mt-14 flex flex-1 flex-col rounded-2xl bg-card p-5 text-card-ink shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-luxe group-hover:-translate-y-1.5 sm:p-6">
        <h3 className="text-lg font-semibold">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-card-muted">{service.short}</p>
        <span className="mt-5 grid size-10 place-items-center rounded-full border border-card-ink/25 transition-colors duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-on-accent">
          <ArrowRight aria-hidden="true" strokeWidth={1.75} className="size-4" />
          <span className="sr-only">Learn more about {service.title}</span>
        </span>
      </div>
    </Link>
  );
}

// "Explore by room": a list of rooms beside one large photo. Click or tap a room
// to see its photo, description and key features. On phones the list becomes a
// row of swipeable chips above the photo.
export default function Services() {
  const [active, setActive] = useState(0);
  const s = featuredServices[active];

  return (
    <section aria-labelledby="services-title" className="section-y overflow-hidden bg-night text-cream">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="services-title"
            light
            align="left"
            eyebrow="What we do"
            lines={["Our Interior", <em key="e" className="text-gold-soft">Design Services</em>]}
            intro="From factory-made modular kitchens and wardrobes to complete luxury home interiors — one expert team, end to end."
          />
          <Reveal delay={0.1} className="shrink-0">
            <ArrowLink href="/services">View All Services</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 md:mt-14 lg:grid-cols-12 lg:gap-10">
          {/* Room list: chips on phones/tablets, a numbered list on desktop */}
          <div role="tablist" aria-label="Rooms" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:col-span-4 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0">
            {featuredServices.map((room, i) => {
              const on = i === active;
              return (
                <button
                  key={room.slug}
                  type="button"
                  role="tab"
                  id={`room-tab-${i}`}
                  aria-selected={on}
                  aria-controls="room-panel"
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={cn(
                    "group flex shrink-0 items-center gap-4 rounded-full border px-4 py-2.5 text-left text-sm font-semibold transition-colors duration-300 lg:rounded-2xl lg:border-transparent lg:px-5 lg:py-4 lg:text-lg",
                    on ? "border-gold bg-gold text-on-accent lg:border-transparent" : "border-cream/15 text-cream/75 hover:text-cream lg:hover:bg-white/[0.04]"
                  )}
                >
                  <span className={cn("hidden text-xs font-bold tabular-nums lg:inline", on ? "opacity-80" : "text-gold-soft")}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="whitespace-nowrap lg:flex-1">{room.title}</span>
                  <ArrowRight aria-hidden="true" strokeWidth={1.75} className={cn("hidden size-4 transition-transform duration-300 lg:block", on ? "translate-x-0" : "-translate-x-2 opacity-0")} />
                </button>
              );
            })}
          </div>

          <div id="room-panel" role="tabpanel" aria-labelledby={`room-tab-${active}`} className="relative lg:col-span-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sand sm:aspect-[16/11]">
              {/* All photos stay mounted so switching rooms is instant. */}
              {featuredServices.map((room, i) => (
                <Image
                  key={room.slug}
                  src={room.image}
                  alt={i === active ? `${room.title} by CasaArt` : ""}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className={cn("object-cover transition-opacity duration-700", i === active ? "opacity-100" : "opacity-0")}
                />
              ))}
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8"
                >
                  <h3 className="text-2xl font-bold sm:text-3xl">{s.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/85 sm:hidden">{s.short}</p>
                  <p className="mt-2 hidden max-w-xl leading-relaxed text-white/85 sm:block">{s.description}</p>
                  <ul className="mt-4 hidden flex-wrap gap-2 sm:flex">
                    {s.features.slice(0, 4).map((f) => (
                      <li key={f} className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                        <Check aria-hidden="true" strokeWidth={2} className="size-3.5 text-accent-bright" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${s.slug}`}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-black transition-colors hover:bg-accent-bright"
                  >
                    Explore {s.title}
                    <ArrowUpRight aria-hidden="true" strokeWidth={1.75} className="size-4" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
