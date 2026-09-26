import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import LineReveal from "./ui/LineReveal";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

// Magazine-style composition: each tile gets its own span and proportion.
const layout = [
  { tile: "lg:col-span-7", ratio: "aspect-[4/5] lg:aspect-[7/6]", sizes: "(min-width: 1024px) 58vw, (min-width: 640px) 50vw, 100vw" },
  { tile: "sm:mt-16 lg:col-span-5 lg:mt-32", ratio: "aspect-[4/5]", sizes: "(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw" },
  { tile: "lg:col-span-4", ratio: "aspect-[4/5] lg:aspect-[3/4]", sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" },
  { tile: "sm:mt-16 lg:col-span-4 lg:mt-24", ratio: "aspect-[4/5] lg:aspect-[3/4]", sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" },
  { tile: "lg:col-span-4", ratio: "aspect-[4/5] lg:aspect-[3/4]", sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" },
  { tile: "sm:col-span-2 sm:mt-16 lg:col-span-12 lg:mt-0", ratio: "aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/8]", sizes: "100vw" },
];

export default function Categories() {
  return (
    <section id="interiors" aria-labelledby="categories-title" className="section-y bg-ivory">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel index="02">Interiors</SectionLabel>
            </Reveal>
            <LineReveal
              id="categories-title"
              lines={["Every Room,", <em key="e" className="text-earth">Considered</em>]}
              className="mt-8 font-serif text-headline font-light"
            />
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm leading-relaxed text-muted">
              From a single room to an entire residence, each space is designed with the same attention to light, proportion and material.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 md:mt-24 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-16">
          {categories.map((c, i) => {
            const l = layout[i % layout.length];
            return (
              <Reveal as="li" key={c.slug} className={l.tile} delay={(i % 3) * 0.08}>
                <Link href="/projects" className="group block" aria-label={`${c.title} — view projects`}>
                  <div className={cn("relative overflow-hidden bg-sand", l.ratio)}>
                    <Image
                      src={c.image}
                      alt={`${c.title} interior by CasaArt`}
                      fill
                      sizes={l.sizes}
                      className="object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ink/55 via-ink/5 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
                    <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/15" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-paper md:p-8">
                      <div className="transition-transform duration-700 ease-luxe group-hover:translate-x-2">
                        <span className="eyebrow text-paper/70">0{i + 1}</span>
                        <h3 className="mt-2 font-serif text-title font-light">{c.title}</h3>
                        <p className="mt-2 max-w-xs text-sm text-paper/75">{c.blurb}</p>
                      </div>
                      <span className="grid size-12 shrink-0 place-items-center border border-paper/40 transition-all duration-700 ease-luxe group-hover:border-paper group-hover:bg-paper group-hover:text-ink">
                        <ArrowUpRight aria-hidden="true" strokeWidth={1.25} className="size-5 transition-transform duration-700 ease-luxe group-hover:rotate-45" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
