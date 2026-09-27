import { Star } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { testimonials } from "@/data/brand";

export default function Testimonials() {
  return (
    <section aria-labelledby="reviews-title" className="theme-light section-y bg-ivory">
      <div className="container-x">
        <SectionHeading
          id="reviews-title"
          eyebrow="Happy homeowners"
          lines={["What Our", <em key="e" className="text-earth">Clients Say</em>]}
          intro="We are proud of the trust families across Hyderabad have placed in CasaArt."
        />
        <ul className="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 md:mx-0 md:mt-20 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 lg:gap-8">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 0.08} className="flex w-[85vw] shrink-0 snap-start flex-col rounded-3xl bg-paper p-7 shadow-[0_12px_32px_rgba(0,0,0,0.06)] md:w-auto md:p-9">
              <div className="flex gap-1 text-gold" role="img" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }, (_, s) => (
                  <Star key={s} aria-hidden="true" strokeWidth={0} fill="currentColor" className="size-4" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-cream/85 md:text-lg">“{t.quote}”</blockquote>
              <div className="mt-8 flex items-center gap-3">
                <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-full bg-gold/15 text-sm font-semibold text-gold">
                  {t.name.split(/[\s&]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("")}
                </span>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{t.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
