import PageHeader from "@/components/ui/PageHeader";
import LineReveal from "@/components/ui/LineReveal";
import ImageReveal from "@/components/ui/ImageReveal";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import CTA from "@/components/CTA";
import { images } from "@/data/images";
import { site } from "@/lib/site";

export const metadata = {
  title: "About",
  description: "CasaArt Interiors is an interior design studio creating timeless, personal homes and workplaces.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Designed around you", body: "Every project begins with how you live — your routines, rituals and the things you love. The design follows." },
  { title: "Timeless over trend", body: "We favour honest materials, balanced proportions and quiet detail, so your home still feels right in ten years." },
  { title: "Crafted with care", body: "A dedicated site team and trusted craftsmen bring drawings to life with precision, on time and on budget." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About the studio"
        lines={["Designing Homes", <em key="e" className="text-earth">With Soul</em>]}
        intro="CasaArt Interiors is a multidisciplinary interior design studio shaping calm, characterful spaces for families, professionals and brands."
        image={images.about}
        imageAlt="Sculptural sofa in a calm, softly lit living space"
      />

      <section aria-labelledby="story-title" className="section-y">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <SectionLabel index="01">Our story</SectionLabel>
            </Reveal>
            <LineReveal id="story-title" lines={["A Studio Built", <em key="e" className="text-earth">On Listening</em>]} className="mt-8 font-serif text-headline font-light" />
          </div>
          <Reveal className="space-y-6 text-lg leading-relaxed md:col-span-6 md:col-start-7 md:pt-20" delay={0.1}>
            <p>
              CasaArt began with a simple belief: a home should feel like the people who live in it. Not a showroom, not a catalogue — a place that is
              beautiful, practical and entirely personal.
            </p>
            <p className="text-muted">
              Today our team of designers, architects and project managers works across residences, villas, apartments and commercial spaces. We
              handle everything from the first sketch to the final cushion, so the experience is as considered as the result.
            </p>
            <dl className="grid grid-cols-3 gap-6 border-t border-line pt-10">
              {site.stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-serif text-4xl font-light md:text-5xl">{s.value}</dd>
                  <dd className="mt-2 text-xs text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="values-title" className="section-y bg-ivory">
        <div className="container-x">
          <Reveal>
            <SectionLabel index="02">What guides us</SectionLabel>
          </Reveal>
          <LineReveal id="values-title" lines={["Our Principles"]} className="mt-8 font-serif text-headline font-light" />
          <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 0.1} className="border-t border-ink/15 pt-8">
                <span className="font-serif text-lg italic text-earth">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-title font-light">{v.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{v.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Studio imagery" className="section-y">
        <div className="container-x grid gap-6 md:grid-cols-12 md:gap-8">
          <ImageReveal src={images.introMain} alt="Living room designed by CasaArt Interiors" className="aspect-[4/5] md:col-span-5" sizes="(min-width: 768px) 40vw, 100vw" />
          <ImageReveal src={images.dining} alt="Dining room with warm timber and statement lighting" className="aspect-[4/3] md:col-span-7 md:mt-32" sizes="(min-width: 768px) 58vw, 100vw" delay={0.15} />
        </div>
      </section>

      <CTA />
    </>
  );
}
