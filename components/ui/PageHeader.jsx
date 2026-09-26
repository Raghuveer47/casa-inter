import LineReveal from "./LineReveal";
import ImageReveal from "./ImageReveal";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function PageHeader({ label, lines, intro, image, imageAlt }) {
  return (
    <header className="bg-ivory pt-36 md:pt-44">
      <div className="container-x">
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
        </Reveal>
        <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
          <LineReveal as="h1" onMount lines={lines} delay={0.1} className="font-serif text-display font-light md:col-span-8" />
          {intro && (
            <Reveal delay={0.4} className="md:col-span-4 md:pb-3">
              <p className="max-w-md text-base leading-relaxed text-muted">{intro}</p>
            </Reveal>
          )}
        </div>
      </div>
      {image && (
        <div className="container-x mt-14 md:mt-20">
          <ImageReveal src={image} alt={imageAlt} priority className="aspect-[4/3] md:aspect-[21/9]" sizes="(min-width: 1600px) 1500px, 100vw" />
        </div>
      )}
    </header>
  );
}
