import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { Ornament } from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Consultation from "@/components/Consultation";
import { getService, services } from "@/data/services";
import { projects } from "@/data/projects";

// Which portfolio tag best represents each service.
const serviceTag = {
  "modular-kitchens": "Kitchens",
  "modular-wardrobes": "Wardrobes",
  "bedroom-interiors": "Bedrooms",
  "living-room-interiors": "Living Rooms",
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} in Hyderabad`,
    description: service.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { title: service.title, description: service.description, images: [service.image] },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const tag = serviceTag[slug];
  const related = (tag ? projects.filter((p) => p.tags.includes(tag)) : projects).slice(0, 3);
  const others = services.filter((s) => s.slug !== slug).slice(0, 6);

  return (
    <>
      <PageHeader
        label={service.title}
        crumbs={[{ label: "Services", href: "/services" }]}
        lines={[service.title]}
        intro={service.short}
        image={service.image}
        imageAlt={`${service.title} by CasaArt Interiors`}
      />

      <section aria-label="Service details" className="theme-light section-y">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="font-serif text-2xl font-light leading-snug md:text-3xl">{service.description}</p>
            <ul className="mt-10 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
              {["Free 3D design & layout", "Premium branded fittings", "Transparent itemised quote", "Warranty & after-sales support"].map((b) => (
                <li key={b} className="flex gap-3 text-sm">
                  <Check aria-hidden="true" strokeWidth={1.5} className="mt-0.5 size-4 shrink-0 text-gold" /> {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="border border-line bg-ivory p-8 md:p-10 lg:col-span-5 lg:col-start-8">
            <h2 className="font-serif text-title font-light">What&apos;s included</h2>
            <Ornament className="mt-4" />
            <ul className="mt-6 space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex gap-3 text-muted">
                  <Check aria-hidden="true" strokeWidth={1.5} className="mt-0.5 size-4 shrink-0 text-gold" /> {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="related-title" className="section-y bg-ivory">
        <div className="container-x">
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <p className="eyebrow text-gold">Related work</p>
            <h2 id="related-title" className="font-serif text-headline font-light">
              See It <em className="text-earth">Delivered</em>
            </h2>
            <Ornament />
          </div>
          <ul className="grid gap-10 md:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug}>
                <ProjectCard project={p} ratio="aspect-[4/3]" sizes="(min-width: 768px) 30vw, 100vw" />
              </li>
            ))}
          </ul>
          <div className="mt-16 border-t border-line pt-10 text-center">
            <p className="eyebrow text-muted">Other services</p>
            <ul className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3 font-serif text-xl">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-gold">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Consultation source={`Service — ${service.title}`} />
    </>
  );
}
