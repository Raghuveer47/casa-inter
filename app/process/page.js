import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { paymentMilestones } from "@/data/services";

export const metadata = {
  title: "Our Process",
  description: "How CasaArt delivers modular interiors: consultation, site measurement, 3D design, material selection, manufacturing, installation and handover.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        label="Process"
        lines={["Our", <em key="e" className="text-earth">Process</em>]}
        intro="Seven clear stages from your first conversation to the day you move in — with one team accountable at every step."
      />

      <ProcessTimeline heading={false} />

      <section aria-labelledby="payments-title" className="section-y bg-night text-cream">
        <div className="container-x">
          <SectionHeading
            id="payments-title"
            light
            eyebrow="Transparent payments"
            lines={["Pay As Your", <em key="e" className="text-beige">Home Takes Shape</em>]}
            intro="Clear payment milestones, so you always know what you pay for and when."
          />
          <ol className="mx-auto mt-14 grid max-w-5xl gap-px border border-cream/12 bg-cream/12 sm:grid-cols-5">
            {paymentMilestones.map((m, i) => (
              <Reveal as="li" key={m.step} delay={i * 0.06} className="bg-night p-6 text-center">
                <span className="font-serif text-3xl italic text-gold-soft">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 font-serif text-xl font-light">{m.step}</p>
                {m.note && <p className="eyebrow mt-3 text-cream/55">{m.note}</p>}
              </Reveal>
            ))}
          </ol>
          <p className="mt-6 text-center text-xs text-cream/45">Percentages are cumulative, as published by CasaArt.</p>
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
