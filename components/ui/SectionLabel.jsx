import { cn } from "@/lib/utils";

export default function SectionLabel({ index, children, className, light = false }) {
  return (
    <p className={cn("eyebrow flex items-center gap-3", light ? "text-cream/70" : "text-earth", className)}>
      {index && <span className="font-serif text-sm italic tracking-normal normal-case">({index})</span>}
      <span aria-hidden="true" className={cn("h-px w-8", light ? "bg-cream/40" : "bg-earth/40")} />
      <span>{children}</span>
    </p>
  );
}
