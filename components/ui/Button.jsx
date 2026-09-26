import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  dark: "bg-cream text-night hover:bg-beige",
  gold: "bg-gold text-night hover:bg-clay",
  light: "bg-cream text-night hover:bg-beige",
  outlineLight: "border border-cream/50 text-cream hover:bg-cream hover:text-night",
  outlineDark: "border border-cream/30 text-cream hover:border-gold hover:text-gold-soft",
};

// Renders a Link when `href` is given, otherwise a <button>.
export default function Button({ href, variant = "dark", icon = true, className, children, ...rest }) {
  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-3 whitespace-nowrap px-7 text-[0.8rem] font-medium uppercase tracking-[0.16em] transition-colors duration-500 ease-luxe disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className
  );
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          aria-hidden="true"
          strokeWidth={1.5}
          className="size-4 transition-transform duration-500 ease-luxe group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );
  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
