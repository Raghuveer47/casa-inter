import LineReveal from "./ui/LineReveal";
import ImageReveal from "./ui/ImageReveal";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";
import { heritageDesigns, heritageCrafts } from "@/data/heritage";
import { cn } from "@/lib/utils";

export default function IndianHeritage() {
  const [lead, ...rest] = heritageDesigns;

  return (
    <section id="indian-luxury" aria-labelledby="heritage-title" className="section-y bg-ivory">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel index="04">Indian Luxury</SectionLabel>
            </Reveal>
            <LineReveal
              id="heritage-title"
              lines={["Rooted In India,", <em key="e" className="text-earth">Made For Today</em>]}
              className="mt-8 font-serif text-headline font-light"
            />
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm leading-relaxed text-muted">
              Our design language began with India&rsquo;s palaces, havelis and craft traditions. We bring that heritage into modern homes with a light, considered hand.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-12 lg:gap-16">
          <div className="group lg:col-span-8">
            <ImageReveal
              src={lead.image}
              alt={`${lead.title}: Indian palace-style interior by CasaArt`}
              className="aspect-[4/5] sm:aspect-[16/11]"
              sizes="(min-width: 1024px) 64vw, 100vw"
              hover
            />
          </div>
          <Reveal className="flex flex-col lg:col-span-4" delay={0.1}>
            <p className="eyebrow text-earth">{lead.region}</p>
            <h3 className="mt-4 font-serif text-title font-light">{lead.title}</h3>
            <p className="mt-4 leading-relaxed text-muted">{lead.blurb}</p>

            <div className="mt-10 border-t border-line pt-8 lg:mt-auto">
              <p className="eyebrow text-muted">Crafts we work with</p>
              <ul className="mt-5 flex flex-wrap gap-2" role="list">
                {heritageCrafts.map((craft) => (
                  <li key={craft} className="border border-line px-3 py-1.5 text-sm text-charcoal">
                    {craft}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 md:mt-24 lg:grid-cols-3 lg:gap-y-20" role="list">
          {rest.map((d, i) => (
            <li key={d.title} className={cn("group", i % 3 === 1 && "lg:mt-24")}>
              <ImageReveal
                src={d.image}
                alt={`${d.title}: ${d.region.toLowerCase()} interior design`}
                className="aspect-[4/5]"
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                delay={(i % 3) * 0.08}
                hover
              />
              <Reveal className="mt-6 border-t border-line pt-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl font-light md:text-[1.9rem]">{d.title}</h3>
                  <span className="font-serif text-sm italic text-muted">0{i + 2}</span>
                </div>
                <p className="eyebrow mt-3 text-earth">{d.region}</p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{d.blurb}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
