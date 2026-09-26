import Image from "next/image";
import Link from "next/link";
import { Images } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project, index, className, ratio = "aspect-[4/5]", sizes = "(min-width: 768px) 40vw, 85vw", priority }) {
  return (
    <article className={cn("group", className)}>
      <Link href={`/projects/${project.slug}`} className="block">
        <div className={cn("frame relative overflow-hidden bg-sand", ratio)}>
          <Image
            src={project.cover}
            alt={`${project.title}, ${project.category.toLowerCase()} interior in ${project.location}`}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.04]"
          />
          {index !== undefined && (
            <span className="absolute left-5 top-5 font-serif text-lg italic text-cream drop-shadow">{String(index + 1).padStart(2, "0")}</span>
          )}
          <span className="eyebrow absolute bottom-5 right-5 inline-flex items-center gap-1.5 bg-night/65 px-3 py-2 text-cream backdrop-blur-sm">
            <Images aria-hidden="true" strokeWidth={1.5} className="size-3.5" />
            {project.gallery.length} photos
          </span>
        </div>
        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl font-light leading-tight md:text-3xl">{project.title}</h3>
            <p className="mt-1.5 text-sm text-muted">
              {[project.location, project.area].filter(Boolean).join(" · ")}
            </p>
          </div>
          <div className="shrink-0 pt-1 text-right">
            <p className="eyebrow text-gold">{project.category}</p>
            <p className="mt-1.5 text-xs text-muted">{project.style}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}
