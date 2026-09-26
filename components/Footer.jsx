import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Ornament } from "./ui/SectionHeading";
import { navLinks, site } from "@/lib/site";
import { coreServices } from "@/data/services";

function Column({ title, children }) {
  return (
    <div>
      <h2 className="eyebrow text-gold-soft">{title}</h2>
      <ul className="mt-6 space-y-3 text-[0.95rem] text-cream/75">{children}</ul>
    </div>
  );
}

const linkClass = "transition-colors duration-300 hover:text-cream";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-night text-cream">
      <div className="container-x pt-20 md:pt-24">
        <div className="flex flex-col items-center text-center">
          <Link href="/" aria-label="CasaArt Interiors — home" className="inline-block rounded-lg bg-cream px-4 py-2">
            <Image src="/logo.png" alt="" width={433} height={336} className="h-20 w-auto" />
          </Link>
          <p className="mt-8 font-serif text-3xl font-light leading-tight md:text-4xl">
            Beautifully designed. <em className="text-beige">Expertly crafted.</em>
          </p>
          <Ornament light className="mt-6" />
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/55">{site.description}</p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-cream/10 pt-14 md:grid-cols-4">
          <Column title="Quick Links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/gallery" className={linkClass}>Gallery</Link>
            </li>
          </Column>
          <Column title="Services">
            {coreServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className={linkClass}>{s.title}</Link>
              </li>
            ))}
          </Column>
          <Column title="Contact">
            <li>
              <a href={site.contact.phoneHref} className={linkClass}>{site.contact.phone}</a>
            </li>
            <li>
              <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer" className={linkClass}>WhatsApp us</a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className={`${linkClass} [overflow-wrap:anywhere]`}>{site.contact.email}</a>
            </li>
            <li>
              <a href={site.contact.mapLink} target="_blank" rel="noopener noreferrer" className={`${linkClass} text-sm leading-relaxed text-cream/55`}>
                {site.contact.address}
              </a>
            </li>
          </Column>
          <Column title="Follow">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className={`group inline-flex items-center gap-1.5 ${linkClass}`}>
                  {s.label}
                  <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="size-3.5 opacity-50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </Column>
        </div>
      </div>

      <div className="mt-16 border-t border-cream/10">
        <div className="container-x flex flex-col gap-3 py-7 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CasaArt Interiors. All rights reserved.</p>
          <p className="flex gap-5">
            <Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link>
            <Link href="/terms" className={linkClass}>Terms &amp; Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
