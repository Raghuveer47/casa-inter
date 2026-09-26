import { BadgeCheck, ClipboardList, Gem, Hammer, LayoutGrid, LifeBuoy, PenTool, Sparkles } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { whyCasart } from "@/data/brand";

const icons = [PenTool, Gem, LayoutGrid, Hammer, ClipboardList, Sparkles, BadgeCheck, LifeBuoy];

export default function WhyCasart() {
  return (
    <section aria-labelledby="why-title" className="section-y bg-night text-cream">
      <div className="container-x">
        <SectionHeading
          id="why-title"
          light
          eyebrow="Why CASART"
          lines={["Why Homeowners", <em key="e" className="text-gold-soft">Choose Us</em>]}
          intro="Owning the whole journey — design, factory and installation — is what lets us promise quality, price and time."
        />

        <ul className="mt-12 grid grid-cols-2 border-l border-t border-cream/12 md:mt-16 lg:grid-cols-4">
          {whyCasart.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal as="li" key={item.title} delay={(i % 4) * 0.06} className="border-b border-r border-cream/12 p-4 sm:p-7 md:p-9">
                <Icon aria-hidden="true" strokeWidth={1.1} className="size-6 text-gold-soft sm:size-8" />
                <h3 className="mt-4 font-serif text-lg font-light leading-tight sm:mt-6 sm:text-2xl">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-cream/60 sm:mt-3 sm:text-sm">{item.body}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
