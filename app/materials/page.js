import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CTA from "@/components/CTA";
import { materialBrands, materialComparison, materials } from "@/data/brand";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Materials & Finishes",
  description: "Laminates, acrylic, PU finishes, veneer, glass, hardware, handles and countertops used in CasaArt modular interiors — and how they differ.",
  alternates: { canonical: "/materials" },
};

export default function MaterialsPage() {
  return (
    <>
      <PageHeader
        label="Materials & Finishes"
        lines={["Materials", <em key="e" className="text-earth">& Finishes</em>]}
        intro="The finish you choose shapes how your interiors look, feel and age. Here is what we offer — and where each works best."
      />

      <section aria-label="Materials" className="section-y">
        <div className="container-x space-y-20 md:space-y-28">
          {materials.map((m, i) => (
            <Reveal key={m.slug} className="grid items-center gap-8 md:grid-cols-12 md:gap-14">
              <div className={cn("frame relative aspect-[4/3] overflow-hidden bg-sand md:col-span-6", i % 2 && "md:order-2 md:col-start-7")}>
                <Image src={m.image} alt={`${m.title} — close-up of the finish`} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
              </div>
              <div className={cn("md:col-span-5", i % 2 ? "md:order-1 md:col-start-1" : "md:col-start-8")}>
                <span className="font-serif text-lg italic text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-2 font-serif text-headline font-light">{m.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted">{m.body}</p>
                <p className="mt-6 border-t border-line pt-5 text-sm">
                  <span className="eyebrow mr-2 text-gold">Best for</span> {m.bestFor}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="compare-title" className="theme-light section-y bg-ivory">
        <div className="container-x">
          <SectionHeading id="compare-title" eyebrow="At a glance" lines={["Comparing", <em key="e" className="text-earth">Shutter Finishes</em>]} />
          <div className="mx-auto mt-12 max-w-4xl overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-gold/50">
                  {["Finish", "Look", "Care", "Budget"].map((h) => (
                    <th key={h} scope="col" className="eyebrow py-4 pr-4 text-gold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {materialComparison.map((row) => (
                  <tr key={row.finish} className="border-b border-line">
                    <th scope="row" className="py-5 pr-4 font-serif text-xl font-normal">{row.finish}</th>
                    <td className="py-5 pr-4 text-muted">{row.look}</td>
                    <td className="py-5 pr-4 text-muted">{row.care}</td>
                    <td className="py-5 font-medium text-earth">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section aria-labelledby="brands-title" className="section-y">
        <div className="container-x">
          <SectionHeading
            id="brands-title"
            eyebrow="Quality you can trust"
            lines={["Our Trusted", <em key="e" className="text-earth">Material Brands</em>]}
            intro="We work with reputed material and hardware brands to deliver long-lasting interiors."
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {materialBrands.map((g) => (
              <div key={g.group} className="border-t border-gold/40 pt-6 text-center">
                <h3 className="eyebrow text-gold">{g.group}</h3>
                <ul className="mt-5 space-y-2 font-serif text-xl">
                  {g.names.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
