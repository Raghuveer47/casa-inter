import PageHeader from "@/components/ui/PageHeader";
import LineReveal from "@/components/ui/LineReveal";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import { process } from "@/data/services";
import { images } from "@/data/images";

export const metadata = {
  title: "Services",
  description: "Interior design, space planning, furniture, lighting, kitchens, bedrooms, complete home and commercial interiors by CasaArt Interiors.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        lines={["Everything Your", <em key="e" className="text-earth">Space Needs</em>]}
        intro="From a single room to a complete residence, we design, plan and deliver interiors with one accountable team."
        image={images.luxury}
        imageAlt="Open-plan luxury living and dining interior"
      />

      <Services showHeading={false} linkTo="/contact" />

      <section aria-labelledby="process-title" className="section-y bg-ink text-paper">
        <div className="container-x">
          <Reveal>
            <SectionLabel index="02" light>How we work</SectionLabel>
          </Reveal>
          <LineReveal id="process-title" lines={["A Clear,", <em key="e" className="text-beige">Calm Process</em>]} className="mt-8 font-serif text-headline font-light" />
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {process.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.08} className="border-t border-paper/20 pt-8">
                <span className="font-serif text-5xl font-light text-paper/30">0{i + 1}</span>
                <h3 className="mt-6 font-serif text-2xl font-light">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTA />
    </>
  );
}
