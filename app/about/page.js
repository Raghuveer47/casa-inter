import PageHeader from "@/components/ui/PageHeader";
import SectionHeading, { Ornament } from "@/components/ui/SectionHeading";
import ImageReveal from "@/components/ui/ImageReveal";
import Reveal from "@/components/ui/Reveal";
import CTA from "@/components/CTA";
import ParallaxBand from "@/components/ParallaxBand";
import { communities, whyCasart } from "@/data/brand";
import { images } from "@/data/images";

export const metadata = {
  title: "About",
  description: "CasaArt designs and executes complete luxury home interiors in Hyderabad with factory-made modular quality, premium materials and on-time delivery.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        lines={["About", <em key="e" className="text-earth">CasaArt</em>]}
        intro="Design and execution under one roof, backed by our own modular factory for complete control over quality."
        image={images.about}
        imageAlt="Calm, softly lit living space"
      />

      <section aria-labelledby="story-title" className="section-y">
        <div className="container-x grid gap-12 md:grid-cols-12 md:items-center">
          <ImageReveal src={images.introDetail} alt="Styled interior detail" className="frame aspect-[4/5] md:col-span-5" sizes="(min-width: 768px) 40vw, 100vw" />
          <Reveal className="md:col-span-6 md:col-start-7">
            <p className="eyebrow text-gold">The CasaArt difference</p>
            <h2 id="story-title" className="mt-5 font-serif text-headline font-light">
              Design Better. <em className="text-earth">Build Better. Live Better.</em>
            </h2>
            <Ornament className="mt-6" />
            <p className="mt-6 text-lg leading-relaxed">
              We design and execute complete home interiors tailored to your lifestyle and budget.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              We have our own modular factory for better finishes, superior quality and on-time delivery. Owning our production means we control every stage — from raw material to final installation — so nothing is left to chance.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="pillars-title" className="theme-light section-y bg-ivory">
        <div className="container-x">
          <SectionHeading id="pillars-title" eyebrow="The CasaArt difference" lines={["Why Choose", <em key="e" className="text-earth">CasaArt?</em>]} />
          <ul className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {whyCasart.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.07} className="bg-paper p-8 text-center md:p-10">
                <span className="font-serif text-lg italic text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-2xl font-light">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="factory-title" className="section-y">
        <div className="container-x grid gap-12 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-5">
            <p className="eyebrow text-gold">In-house Manufacturing</p>
            <h2 id="factory-title" className="mt-5 font-serif text-headline font-light">
              Our Modular <em className="text-earth">Factory</em>
            </h2>
            <Ornament className="mt-6" />
            <p className="mt-6 leading-relaxed text-muted">
              We have our own modular factory for better finishes, superior quality and on-time delivery. Owning our production means we control every stage — from raw material to final installation — so nothing is left to chance.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {["Superior finishes and consistent quality", "Faster production and reliable timelines", "Premium, moisture-resistant materials", "Professional installation by our own team"].map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold" /> {x}
                </li>
              ))}
            </ul>
          </Reveal>
          <ImageReveal src={images.kitchenIsland} alt="Factory-finished modular kitchen" className="frame aspect-[4/3] md:col-span-6 md:col-start-7" sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      </section>

      <section aria-labelledby="areas-title" className="section-y bg-night text-cream">
        <div className="container-x">
          <SectionHeading id="areas-title" light eyebrow="Trusted execution" lines={["Projects", <em key="e" className="text-beige">Worked At</em>]} intro="Premium interior execution experience across reputed residential communities." />
          <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
            {communities.map((a) => (
              <li key={a} className="border border-cream/20 px-5 py-2.5 text-sm">
                {a}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center font-serif text-xl font-light text-cream/80">And many more — premium communities across Hyderabad.</p>
        </div>
      </section>

      <ParallaxBand />
      <CTA />
    </>
  );
}
