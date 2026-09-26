import LineReveal from "./ui/LineReveal";
import ImageReveal from "./ui/ImageReveal";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";
import ArrowLink from "./ui/ArrowLink";
import { images } from "@/data/images";
import { site } from "@/lib/site";

export default function BrandIntro() {
  return (
    <section aria-labelledby="intro-title" className="section-y overflow-hidden">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <SectionLabel index="01">The Studio</SectionLabel>
            </Reveal>
            <LineReveal
              id="intro-title"
              lines={["Spaces That", <em key="e" className="text-earth">Feel Like Home</em>]}
              className="mt-8 font-serif text-headline font-light"
            />
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pt-20">
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed md:text-xl">
                At CasaArt Interiors, we believe great interiors are more than beautiful rooms.
              </p>
              <p className="mt-5 leading-relaxed text-muted">
                They are carefully considered spaces designed around the way you live, work and experience life.
              </p>
              <ArrowLink href="/about" className="mt-10">Our Story</ArrowLink>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-12 md:gap-8">
          <ImageReveal
            src={images.introMain}
            alt="Warm, minimal living space with natural light and soft furnishings"
            className="aspect-[4/5] md:col-span-7 md:aspect-[6/5]"
            sizes="(min-width: 768px) 58vw, 100vw"
          />
          <div className="flex flex-col justify-between gap-12 md:col-span-4 md:col-start-9">
            <ImageReveal
              src={images.introDetail}
              alt="Styled interior detail with plants and a sculptural lamp"
              className="aspect-[4/5] md:mt-40"
              sizes="(min-width: 768px) 33vw, 100vw"
              delay={0.15}
            />
            <dl className="grid grid-cols-3 gap-4 border-t border-line pt-8">
              {site.stats.map((s, i) => (
                <Reveal key={s.label} delay={0.1 * i}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-serif text-4xl font-light md:text-5xl">{s.value}</dd>
                  <dd className="mt-2 text-xs leading-snug text-muted">{s.label}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
