import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { Ornament } from "@/components/ui/SectionHeading";
import GalleryPreview from "@/components/GalleryPreview";
import ProjectCard from "@/components/ProjectCard";
import Consultation from "@/components/Consultation";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title}, ${project.location}`,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { title: project.title, description: project.summary, images: [project.cover] },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const related = projects.filter((p) => p.slug !== slug && p.tags.some((t) => project.tags.includes(t))).slice(0, 3);

  const details = [
    { label: "Location", value: project.location },
    { label: "Property type", value: project.propertyType },
    { label: "Area", value: project.area },
    { label: "Design style", value: project.style },
  ].filter((d) => d.value);

  return (
    <>
      <PageHeader
        label={project.title}
        crumbs={[{ label: "Projects", href: "/projects" }]}
        lines={[project.title]}
        intro={project.summary}
        image={project.cover}
        imageAlt={`${project.title} — ${project.category.toLowerCase()} interior in ${project.location}`}
      />

      <section aria-label="Project details" className="theme-light section-y">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <dl className="divide-y divide-line border-y border-line">
              {details.map((d) => (
                <div key={d.label} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="eyebrow text-gold">{d.label}</dt>
                  <dd className="text-right font-serif text-xl">{d.value}</dd>
                </div>
              ))}
            </dl>
            <Button variant="gold" href="#consultation" className="mt-8 w-full">Book a Consultation</Button>
          </Reveal>

          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            <Reveal>
              <h2 className="font-serif text-title font-light">Project scope</h2>
              <Ornament className="mt-4" />
              <ul className="mt-6 space-y-3">
                {project.scope.map((s) => (
                  <li key={s} className="flex gap-3 text-muted">
                    <Check aria-hidden="true" strokeWidth={1.5} className="mt-0.5 size-4 shrink-0 text-gold" /> {s}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-title font-light">Materials & finishes</h2>
              <Ornament className="mt-4" />
              <ul className="mt-6 space-y-3">
                {project.materials.map((m) => (
                  <li key={m} className="flex gap-3 text-muted">
                    <Check aria-hidden="true" strokeWidth={1.5} className="mt-0.5 size-4 shrink-0 text-gold" /> {m}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="gallery-title" className="section-y bg-ivory">
        <div className="container-x">
          <div className="mb-10 flex flex-col items-center gap-4 text-center md:mb-14">
            <p className="eyebrow text-gold">Project gallery</p>
            <h2 id="gallery-title" className="font-serif text-headline font-light">
              {project.gallery.length} <em className="text-earth">Photographs</em>
            </h2>
            <Ornament />
          </div>
          <GalleryPreview photos={project.gallery} href={`/projects/${slug}/gallery`} alt={project.title} />
          <div className="mt-10 text-center">
            <Button href={`/projects/${slug}/gallery`} variant="outlineDark">View Full Gallery</Button>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="section-y">
          <div className="container-x">
            <div className="mb-12 flex flex-col items-center gap-4 text-center">
              <p className="eyebrow text-gold">Keep exploring</p>
              <h2 id="related-title" className="font-serif text-headline font-light">
                More <em className="text-earth">Projects</em>
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
            <nav aria-label="Project navigation" className="mt-16 flex items-center justify-between border-t border-line pt-8">
              <Link href="/projects" className="eyebrow inline-flex items-center gap-2 text-muted hover:text-cream">
                <ArrowLeft aria-hidden="true" strokeWidth={1.5} className="size-3.5" /> All projects
              </Link>
              <Link href={`/projects/${next.slug}`} className="eyebrow inline-flex items-center gap-2 text-right hover:text-gold">
                Next: {next.title} <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-3.5" />
              </Link>
            </nav>
          </div>
        </section>
      )}

      <Consultation source={`Project — ${project.title}`} />
    </>
  );
}
