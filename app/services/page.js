import Link from "next/link";
import { Check } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/Services";
import CTA from "@/components/CTA";
import PackageCTA from "@/components/PackageCTA";
import { coreServices, packages, services } from "@/data/services";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Services",
  description: "From factory-made modular kitchens and wardrobes to complete luxury home interiors — one expert team, end to end.",
  alternates: { canonical: "/services" },
};

const supporting = services.filter((s) => !s.core);

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        lines={["Our Interior", <em key="e" className="text-earth">Design Services</em>]}
        intro="From factory-made modular kitchens and wardrobes to complete luxury home interiors — one expert team, end to end."
        image={images.livingLuxury}
        imageAlt="Living room with modular TV unit and storage by CasaArt"
      />

      <section aria-labelledby="modular-title" className="section-y">
        <div className="container-x">
          <SectionHeading id="modular-title" eyebrow="What we do" lines={["Our Interior", <em key="e" className="text-earth">Design Services</em>]} intro="From factory-made modular kitchens and wardrobes to complete luxury home interiors — one expert team, end to end." />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-3 lg:gap-8">
            {coreServices.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={(i % 3) * 0.08}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="supporting-title" className="theme-light section-y bg-ivory">
        <div className="container-x">
          <SectionHeading
            id="supporting-title"
            eyebrow="Also handled by our team"
            lines={["Complete", <em key="e" className="text-earth">Finishing Works</em>]}
            intro="Everything else your home needs, coordinated with your modular work so there is one schedule and one point of contact."
          />
          <ul className="mx-auto mt-14 grid max-w-5xl gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {supporting.map((s) => (
              <li key={s.slug} className="bg-paper">
                <Link href={`/services/${s.slug}`} className="group block h-full p-8 transition-colors hover:bg-ivory">
                  <h3 className="font-serif text-2xl font-light group-hover:text-earth">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.short}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="packages-title" className="section-y">
        <div className="container-x">
          <SectionHeading
            id="packages-title"
            eyebrow="Transparent pricing"
            lines={["Interior", <em key="e" className="text-earth">Packages</em>]}
            intro="Choose a package that suits your home and budget. Final pricing is confirmed after a free site visit."
          />
          <ul className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal
                as="li"
                key={p.name}
                delay={i * 0.08}
                className={cn("relative flex flex-col border p-8 md:p-10", p.featured ? "border-gold bg-night text-cream" : "border-line bg-paper")}
              >
                {p.featured && <span className="eyebrow absolute -top-3 left-8 bg-gold px-3 py-1 text-on-accent">Most popular</span>}
                <h3 className="font-serif text-2xl font-light md:text-3xl">{p.name}</h3>
                <p className={cn("mt-2 text-sm", p.featured ? "text-cream/60" : "text-muted")}>{p.bestFor}</p>
                <p className="mt-6 font-serif text-4xl">
                  <span className={cn("eyebrow mr-2 align-middle", p.featured ? "text-gold-soft" : "text-gold")}>Starting</span>
                  {p.price}
                </p>
                <ul className={cn("mt-8 flex-1 space-y-3 border-t pt-8 text-sm", p.featured ? "border-cream/15" : "border-line")}>
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check aria-hidden="true" strokeWidth={1.5} className={cn("mt-0.5 size-4 shrink-0", p.featured ? "text-gold-soft" : "text-gold")} />
                      {item}
                    </li>
                  ))}
                </ul>
                <PackageCTA featured={p.featured} />
              </Reveal>
            ))}
          </ul>
          <p className="mt-8 text-center text-xs text-muted">*Indicative starting prices. Final quote provided after a free site measurement.</p>
        </div>
      </section>

      <CTA />
    </>
  );
}
