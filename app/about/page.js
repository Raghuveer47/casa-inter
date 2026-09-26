import { MapPin } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading, { Ornament } from "@/components/ui/SectionHeading";
import ImageReveal from "@/components/ui/ImageReveal";
import Reveal from "@/components/ui/Reveal";
import CTA from "@/components/CTA";
import { communities } from "@/data/brand";
import { images } from "@/data/images";
import { site } from "@/lib/site";

export const metadata = {
  title: "About CASART",
  description: "CasaArt designs and executes premium modular interiors in Hyderabad, backed by its own modular factory. Our story, vision, mission and design philosophy.",
  alternates: { canonical: "/about" },
};

const pillars = [
  { title: "Vision", body: "To make beautifully designed, well-built interiors honest and within reach for every family." },
  { title: "Mission", body: "Design and execute complete home interiors tailored to each lifestyle and budget — on time, with factory-made quality." },
  { title: "Design Philosophy", body: "Beauty that works. Every layout starts with how you live, what you store and how you move through the space." },
  { title: "Quality Commitment", body: "Factory-made modules, premium materials, rigorous checks and installation by our own team — backed by warranties of up to 10 years." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        lines={["About", <em key="e" className="text-earth">CASART</em>]}
        intro="Design partners you can trust — design, manufacturing, installation and after-sales support, all under one roof."
        image={images.about}
        imageAlt="Calm, softly lit living space"
      />

      <section aria-labelledby="story-title" className="section-y">
        <div className="container-x grid gap-12 md:grid-cols-12 md:items-center">
          <ImageReveal src={images.introDetail} alt="Styled interior detail" className="frame aspect-[4/5] md:col-span-5" sizes="(min-width: 768px) 40vw, 100vw" />
          <Reveal className="md:col-span-6 md:col-start-7">
            <p className="eyebrow text-gold">Our story</p>
            <h2 id="story-title" className="mt-5 font-serif text-headline font-light">
              Beautiful, honest <em className="text-earth">& within reach</em>
            </h2>
            <Ornament className="mt-6" />
            <p className="mt-6 text-lg leading-relaxed">
              CasaArt started with a simple belief: great interior design should be beautiful, honest and within reach.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              We combine expert designers, quality materials and transparent pricing to deliver homes people love to live in. From modular kitchens to full home
              interiors, we handle everything under one roof — and our own modular factory means we control every stage, from raw material to final installation.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="pillars-title" className="theme-light section-y bg-ivory">
        <div className="container-x">
          <SectionHeading id="pillars-title" eyebrow="What guides us" lines={["Vision, Mission", <em key="e" className="text-earth">& Values</em>]} />
          <ul className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
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
            <p className="eyebrow text-gold">In-house manufacturing</p>
            <h2 id="factory-title" className="mt-5 font-serif text-headline font-light">
              Our Modular <em className="text-earth">Factory</em>
            </h2>
            <Ornament className="mt-6" />
            <p className="mt-6 leading-relaxed text-muted">
              Owning our production means nothing is left to chance. It gives you better finishes, faster production and reliable timelines.
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
          <SectionHeading id="areas-title" light eyebrow="Service areas" lines={["Where", <em key="e" className="text-beige">We Work</em>]} intro={`Based in Neopolis–Kokapet, serving homes across ${site.contact.city}.`} />
          <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
            {site.serviceAreas.map((a) => (
              <li key={a} className="inline-flex items-center gap-2 border border-cream/20 px-5 py-2.5 text-sm">
                <MapPin aria-hidden="true" strokeWidth={1.25} className="size-4 text-gold-soft" /> {a}
              </li>
            ))}
          </ul>
          <div className="mt-14 text-center">
            <p className="eyebrow text-gold-soft">Projects worked at</p>
            <p className="mx-auto mt-5 max-w-3xl font-serif text-xl font-light leading-relaxed text-cream/85 md:text-2xl">{communities.join(" · ")}</p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
