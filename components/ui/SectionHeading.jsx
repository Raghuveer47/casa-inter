import LineReveal from "./LineReveal";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

// Classic ornament: hairline — diamond — hairline.
export function Ornament({ light = false, className }) {
  return (
    <span aria-hidden="true" className={cn("inline-flex items-center gap-3", light ? "text-gold-soft" : "text-gold", className)}>
      <span className="h-px w-10 bg-current opacity-60" />
      <span className="size-1.5 rotate-45 border border-current" />
      <span className="h-px w-10 bg-current opacity-60" />
    </span>
  );
}

// Centred, classic section heading: eyebrow, serif title, ornament and intro.
export default function SectionHeading({ eyebrow, lines, intro, id, light = false, align = "center", as = "h2", className }) {
  const centered = align === "center";
  return (
    <div className={cn(centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl", className)}>
      {eyebrow && (
        <Reveal>
          <p className={cn("eyebrow", light ? "text-gold-soft" : "text-gold")}>{eyebrow}</p>
        </Reveal>
      )}
      <LineReveal as={as} id={id} lines={lines} className={cn("mt-5 font-serif text-headline font-light", light ? "text-cream" : "text-cream")} />
      <Reveal delay={0.15}>
        <Ornament light={light} className="mt-6" />
        {intro && <p className={cn("mt-6 text-base leading-relaxed md:text-lg", light ? "text-cream/70" : "text-muted", centered && "mx-auto max-w-xl")}>{intro}</p>}
      </Reveal>
    </div>
  );
}
