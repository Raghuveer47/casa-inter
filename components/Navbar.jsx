"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEnquiry } from "./EnquiryProvider";
import { navLinks, site } from "@/lib/site";
import { cn, EASE } from "@/lib/utils";

// The logo artwork is dark, so it always sits on an ivory box — over the hero,
// on the scrolled black bar and in the mobile menu alike.
function Wordmark({ compact }) {
  return (
    <span className="inline-flex items-center justify-center rounded-lg bg-[#f7f3ec] px-3 py-1.5 shadow-[0_10px_28px_rgba(0,0,0,0.35)] transition-[padding] duration-500">
      <Image
        src="/logo.png"
        alt="CasaArt Interiors"
        width={433}
        height={336}
        priority
        className={cn("w-auto transition-[height] duration-500", compact ? "h-10" : "h-14")}
      />
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > prev && y > 480);
  });

  // Close the mobile menu on navigation
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;
    const html = document.documentElement;
    html.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const overHero = pathname === "/" && !scrolled;
  const light = overHero || menuOpen;

  const isActive = (href) => (href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href));

  return (
    <>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color,box-shadow] duration-500 ease-luxe",
          light ? "text-cream" : "text-cream",
          !overHero && !menuOpen ? "border-b border-cream/5 bg-paper/90 backdrop-blur-md" : "border-b border-transparent"
        )}
        animate={{ y: hidden && !menuOpen ? "-100%" : "0%" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <nav aria-label="Main" className={cn("container-x flex items-center justify-between transition-[height] duration-500", scrolled ? "h-18" : "h-22")}>
          <Link href="/" aria-label="CasaArt Modulars — home" className="relative z-10">
            <Wordmark compact={scrolled} />
          </Link>

          <ul className="hidden items-center gap-7 xl:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="group relative py-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em]"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-current transition-transform duration-500 ease-luxe",
                      isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative z-10 flex items-center gap-3">
            <button
              type="button"
              onClick={openEnquiry}
              className={cn(
                "hidden min-h-11 items-center px-6 text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-500 sm:inline-flex",
                light ? "border border-gold-soft text-cream hover:bg-gold hover:border-gold hover:text-night" : "bg-gold text-night hover:bg-clay"
              )}
            >
              Book a Consultation
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="-mr-2 grid size-11 place-items-center xl:hidden"
            >
              <span className="relative block h-3 w-7">
                <span className={cn("absolute left-0 top-0 h-px w-full bg-current transition-transform duration-500 ease-luxe", menuOpen && "translate-y-1.5 rotate-45")} />
                <span className={cn("absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-500 ease-luxe", menuOpen && "-translate-y-1.5 -rotate-45")} />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-night text-cream xl:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <nav aria-label="Mobile" className="container-x flex flex-1 flex-col justify-center pt-24">
              <ul className="space-y-1">
                {navLinks.map((link, i) => (
                  <li key={link.href} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ duration: 0.7, ease: EASE, delay: 0.15 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        aria-current={isActive(link.href) ? "page" : undefined}
                        className="flex items-baseline gap-4 py-1 font-serif text-[clamp(2rem,9vw,3.75rem)] font-light leading-tight"
                      >
                        <span className="font-sans text-xs tracking-widest text-cream/40">0{i + 1}</span>
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              className="container-x flex flex-col gap-6 border-t border-cream/10 py-8 sm:flex-row sm:items-center sm:justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
            >
              <div className="space-y-1 text-sm text-cream/60">
                <a href={site.contact.phoneHref} className="block hover:text-cream">{site.contact.phone}</a>
                <a href={`mailto:${site.contact.email}`} className="block hover:text-cream">{site.contact.email}</a>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openEnquiry();
                }}
                className="inline-flex min-h-12 items-center justify-center bg-gold px-7 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-night"
              >
                Book a Consultation
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
