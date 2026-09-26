import { Quote } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { testimonials } from "@/data/brand";

export default function Testimonials() {
  return (
    <section aria-labelledby="reviews-title" className="section-y bg-ivory">
      <div className="container-x">
        <SectionHeading
          id="reviews-title"
          eyebrow="Homeowner stories"
          lines={["What Our", <em key="e" className="text-earth">Clients Say</em>]}
          intro="We are proud of the trust families across Hyderabad have placed in CasaArt."
        />
        <ul className="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 md:mx-0 md:mt-20 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 lg:gap-8">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 0.08} className="flex w-[85vw] shrink-0 snap-start flex-col border border-line bg-paper p-7 md:w-auto md:p-10">
              <Quote aria-hidden="true" strokeWidth={1} className="size-9 text-gold" />
              <blockquote className="mt-6 flex-1 font-serif text-xl font-light leading-snug md:text-[1.4rem]">“{t.quote}”</blockquote>
              <div className="mt-8 border-t border-line pt-6">
                <p className="font-medium">{t.name}</p>
                <p className="mt-1 text-sm text-muted">{t.detail}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
