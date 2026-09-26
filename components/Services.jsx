import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LineReveal from "./ui/LineReveal";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";
import { services } from "@/data/services";

export default function Services({ index = "06", showHeading = true, linkTo = "/services" }) {
  return (
    <section aria-labelledby={showHeading ? "services-title" : undefined} aria-label={showHeading ? undefined : "Services"} className="section-y">
      <div className="container-x">
        {showHeading && (
          <div className="mb-16 grid gap-8 md:mb-24 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Reveal>
                <SectionLabel index={index}>Services</SectionLabel>
              </Reveal>
              <LineReveal
                id="services-title"
                lines={["Design Services,", <em key="e" className="text-earth">End to End</em>]}
                className="mt-8 font-serif text-headline font-light"
              />
            </div>
            <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
              <p className="leading-relaxed text-muted">
                Whether you need a single room refreshed or a complete home delivered, our studio brings design, planning and execution together under one roof.
              </p>
            </Reveal>
          </div>
        )}

        <ul className="border-b border-line">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 4) * 0.05} className="border-t border-line">
              <Link
                href={linkTo}
                className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-2 py-7 md:grid-cols-12 md:gap-x-8 md:py-9"
              >
                <span aria-hidden="true" className="absolute inset-0 origin-bottom scale-y-0 bg-ivory transition-transform duration-700 ease-luxe group-hover:scale-y-100" />
                <span className="relative font-serif text-lg italic text-earth md:col-span-1">{s.number}</span>
                <h3 className="relative font-serif text-[clamp(1.6rem,3.2vw,3rem)] font-light leading-tight transition-transform duration-700 ease-luxe group-hover:translate-x-3 md:col-span-5">
                  {s.title}
                </h3>
                <p className="relative col-span-3 col-start-2 row-start-2 max-w-md text-sm leading-relaxed text-muted md:col-span-5 md:col-start-auto md:row-start-auto md:text-[0.95rem]">
                  {s.description}
                </p>
                <span className="relative col-start-3 row-start-1 grid size-11 place-items-center border border-ink/15 transition-all duration-700 ease-luxe group-hover:border-ink group-hover:bg-ink group-hover:text-paper md:col-span-1 md:col-start-auto md:row-start-auto md:justify-self-end">
                  <ArrowRight aria-hidden="true" strokeWidth={1.25} className="size-4 transition-transform duration-700 ease-luxe group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
