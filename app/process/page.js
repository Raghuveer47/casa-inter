import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { paymentMilestones } from "@/data/services";

export const metadata = {
  title: "Our Process",
  description: "How CasaArt works: meet a designer, book your project, execution, final installations, then move in and enjoy.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        label="Process"
        lines={["How It", <em key="e" className="text-earth">Works</em>]}
        intro="Meet a designer, book your project, begin execution, finish the installations, then move in and enjoy."
      />

      <ProcessTimeline heading={false} />

      <section aria-labelledby="payments-title" className="section-y bg-night text-cream">
        <div className="container-x">
          <SectionHeading
            id="payments-title"
            light
            eyebrow="How It Works"
            lines={["Payment At", <em key="e" className="text-beige">Each Step</em>]}
            intro="5% to book your project, 60% when execution begins, and 100% at final installations."
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
