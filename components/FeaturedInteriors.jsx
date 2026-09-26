import LineReveal from "./ui/LineReveal";
import ImageReveal from "./ui/ImageReveal";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";
import { featuredInteriors } from "@/data/interiors";
import { cn } from "@/lib/utils";

const ratios = ["aspect-[4/5]", "aspect-[4/5] md:aspect-[5/6]", "aspect-[4/5] md:aspect-[5/6]", "aspect-[4/5]"];

export default function FeaturedInteriors() {
  return (
    <section aria-labelledby="featured-title" className="section-y">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <SectionLabel index="03">Featured Interiors</SectionLabel>
            </Reveal>
            <LineReveal
              id="featured-title"
              lines={["Designed For", <em key="e" className="text-earth">The Way You Live</em>]}
              className="mt-8 font-serif text-headline font-light"
            />
          </div>
        </div>

        <ul className="mt-16 grid gap-x-8 gap-y-14 md:mt-20 md:grid-cols-2 md:gap-x-16 md:gap-y-24">
          {featuredInteriors.map((item, i) => (
            <li key={item.title} className={cn("group", i % 2 === 1 && "md:mt-48")}>
              <ImageReveal
                src={item.image}
                alt={`${item.title} — ${item.category} in ${item.location}`}
                className={ratios[i % ratios.length]}
                sizes="(min-width: 768px) 45vw, 100vw"
                hover
              />
              <Reveal className="mt-6 flex items-start justify-between gap-6 border-t border-line pt-5">
                <div>
                  <h3 className="font-serif text-title font-light">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.location}</p>
                </div>
                <p className="eyebrow shrink-0 pt-2 text-earth">{item.category}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
