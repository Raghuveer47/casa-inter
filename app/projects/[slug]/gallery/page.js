import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import CTA from "@/components/CTA";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Photo Gallery`,
    description: `All ${project.gallery.length} photos of ${project.title}, ${project.location}, by CasaArt Interiors.`,
    alternates: { canonical: `/projects/${slug}/gallery` },
  };
}

// The "extra page" behind a project's "+N more" tile: every photo, with a lightbox.
export default async function ProjectGalleryPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const photos = project.gallery.map((src, i) => ({ src, alt: `${project.title}, ${project.location} — photo ${i + 1}` }));

  return (
    <>
      <PageHeader
        label="Gallery"
        crumbs={[
          { label: "Projects", href: "/projects" },
          { label: project.title, href: `/projects/${slug}` },
        ]}
        lines={[project.title]}
        intro={`${[`${project.gallery.length} photographs`, project.location, project.area].filter(Boolean).join(" · ")}. Tap any photo to view it full screen.`}
      />
      <section aria-label="All photos" className="bg-ivory pb-[clamp(5rem,11vw,9rem)] pt-10">
        <div className="container-x">
          <GalleryGrid photos={photos} />
          <div className="mt-12 text-center">
            <Link href={`/projects/${slug}`} className="eyebrow inline-flex items-center gap-2 border-b border-cream/30 pb-1.5 hover:border-gold">
              <ArrowLeft aria-hidden="true" strokeWidth={1.5} className="size-3.5" /> Back to project details
            </Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
