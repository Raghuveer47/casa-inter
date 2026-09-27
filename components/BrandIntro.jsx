import { Factory, PencilRuler, ShieldCheck } from "lucide-react";
import LineReveal from "./ui/LineReveal";
import ImageReveal from "./ui/ImageReveal";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { images } from "@/data/images";
import { site } from "@/lib/site";

const points = [
  { icon: PencilRuler, text: "One dedicated designer from sketch to handover" },
  { icon: Factory, text: "Made in our own Neopolis–Kokapet factory" },
  { icon: ShieldCheck, text: "Backed by a warranty of up to 10 years" },
];

function Photo({ label, className, ...props }) {
  return (
    <figure className={`relative ${className ?? ""}`}>
      <ImageReveal {...props} className="frame size-full" />
      <figcaption className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
        {label}
      </figcaption>
    </figure>
  );
}

// "Who we are": copy with three proof points, two photos side by side (no
// overlapping, so it holds up at every screen size) and the key facts below.
export default function BrandIntro() {
  return (
    <section aria-labelledby="intro-title" className="section-y overflow-hidden bg-night text-cream">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-gold-soft">Who we are</p>
          </Reveal>
          <LineReveal
            id="intro-title"
            lines={["Made For Your Home.", <em key="e" className="text-gold-soft">Built In Our Factory.</em>]}
            className="mt-5 font-serif text-headline"
          />
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-cream/85">
              CasaArt brings bespoke design and precise modular engineering together under one roof — so we control the quality, the price and the
              timeline.
            </p>
            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li key={p.text} className="flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-soft">
                    <p.icon aria-hidden="true" strokeWidth={1.6} className="size-5" />
                  </span>
                  <span className="text-cream/90">{p.text}</span>
                </li>
              ))}
            </ul>
            <Button href="/about" variant="gold" className="mt-9">More about us</Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:col-span-7">
          <Photo
            label="Our Workshop"
            src={images.workshop}
            alt="A CasaArt craftsman finishing a wooden panel by hand"
            className="aspect-[3/4]"
            sizes="(min-width: 1024px) 28vw, 50vw"
          />
          <Photo
            label="Our Studio"
            src={images.introMain}
            alt="Styled living space in the CasaArt design studio"
            className="mt-10 aspect-[3/4] sm:mt-16"
            sizes="(min-width: 1024px) 28vw, 50vw"
            delay={0.15}
          />
        </div>
      </div>

      <div className="container-x mt-16 md:mt-24">
        <dl className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {site.facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.06} className="rounded-3xl border border-white/8 bg-white/[0.04] px-4 py-7 text-center md:py-10">
              <dt className="sr-only">{f.label}</dt>
              <dd className="font-serif text-4xl text-gold-soft md:text-5xl">{f.value}</dd>
              <dd className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-cream/70">{f.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
