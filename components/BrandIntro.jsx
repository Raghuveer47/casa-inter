import LineReveal from "./ui/LineReveal";
import ImageReveal from "./ui/ImageReveal";
import Reveal from "./ui/Reveal";
import ArrowLink from "./ui/ArrowLink";
import { Ornament } from "./ui/SectionHeading";
import { images } from "@/data/images";
import { site } from "@/lib/site";

function Captioned({ label, ...props }) {
  return (
    <figure className="relative">
      <ImageReveal {...props} />
      <figcaption className="eyebrow absolute bottom-4 left-4 bg-paper/90 px-3 py-2 text-gold backdrop-blur-sm">{label}</figcaption>
    </figure>
  );
}

export default function BrandIntro() {
  return (
    <section aria-labelledby="intro-title" className="theme-light section-y overflow-hidden">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-5 lg:order-2 lg:col-start-8">
          <Reveal>
            <p className="eyebrow text-gold">Who we are</p>
          </Reveal>
          <LineReveal
            id="intro-title"
            lines={["Made For Your Home.", <em key="e" className="text-gold-soft">Built In Our Factory.</em>]}
            className="mt-5 font-serif text-headline font-light"
          />
          <Reveal delay={0.15}>
            <Ornament className="mt-6" />
            <p className="mt-6 text-lg leading-relaxed">
              CasaArt brings bespoke design and precise modular engineering together under one roof.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Every kitchen, wardrobe and panel is made in our own facility at Neopolis–Kokapet. That means we control the quality, the price and the
              timeline — from your first sketch to the last hinge. You work with one dedicated designer throughout, and your home is backed by a warranty
              of up to 10 years.
            </p>
            <ArrowLink href="/about" className="mt-8">More about us</ArrowLink>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-5 lg:order-1 lg:col-span-6">
          <Captioned
            label="Our Factory"
            src={images.kitchenIsland}
            alt="Modular kitchen units finished in the CasaArt factory"
            className="frame aspect-[3/4]"
            sizes="(min-width: 1024px) 25vw, 50vw"
          />
          <Captioned
            label="Our Studio"
            src={images.introMain}
            alt="Styled living space in the CasaArt design studio"
            className="frame mt-10 aspect-[3/4] md:mt-16"
            sizes="(min-width: 1024px) 25vw, 50vw"
            delay={0.15}
          />
        </div>
      </div>

      <div className="container-x mt-16 md:mt-24">
        <dl className="grid grid-cols-2 border-l border-t border-line md:grid-cols-4">
          {site.facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.06} className="border-b border-r border-line px-4 py-7 text-center md:py-10">
              <dt className="sr-only">{f.label}</dt>
              <dd className="font-serif text-4xl font-light text-gold-soft md:text-6xl">{f.value}</dd>
              <dd className="eyebrow mt-2 text-muted">{f.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
