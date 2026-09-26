import Link from "next/link";
import LineReveal from "./LineReveal";
import ImageReveal from "./ImageReveal";
import Reveal from "./Reveal";
import { Ornament } from "./SectionHeading";

// Classic centred page header with optional breadcrumb trail and banner image.
// `crumbs`: [{ label, href? }] — the current page is added automatically from `label`.
export default function PageHeader({ label, lines, intro, image, imageAlt, crumbs = [] }) {
  const trail = [{ label: "Home", href: "/" }, ...crumbs, { label }];
  return (
    <header className="bg-ivory pb-4 pt-36 md:pt-44">
      <div className="container-x text-center">
        <Reveal onMount duration={0.5} y={10}>
          <nav aria-label="Breadcrumb">
            <ol className="eyebrow flex flex-wrap items-center justify-center gap-2 text-muted">
              {trail.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true" className="text-gold">/</span>}
                  {c.href ? (
                    <Link href={c.href} className="hover:text-cream">{c.label}</Link>
                  ) : (
                    <span aria-current="page" className="text-gold">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </Reveal>
        <LineReveal as="h1" onMount lines={lines} delay={0.1} className="mx-auto mt-6 max-w-5xl font-serif text-display font-light" />
        <Reveal onMount delay={0.35}>
          <Ornament className="mt-7" />
          {intro && <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{intro}</p>}
        </Reveal>
      </div>
      {image && (
        <div className="container-x mt-14 md:mt-16">
          <ImageReveal src={image} alt={imageAlt} priority onMount className="frame aspect-[4/3] md:aspect-[21/9]" sizes="(min-width: 1440px) 1340px, 100vw" />
        </div>
      )}
    </header>
  );
}
