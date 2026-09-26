import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ArrowLink({ href, children, className, light = false, ...rest }) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 border-b pb-1.5 text-sm font-medium tracking-wide transition-colors",
        light ? "border-cream/40 text-cream hover:border-cream" : "border-cream/30 text-cream hover:border-cream",
        className
      )}
      {...rest}
    >
      {children}
      <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-500 ease-luxe group-hover:translate-x-1.5" strokeWidth={1.5} />
    </Link>
  );
}
