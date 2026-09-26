import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footerServices, navLinks, site } from "@/lib/site";

const footerNav = navLinks.filter((l) => l.label !== "Interiors");

function Column({ title, children }) {
  return (
    <div>
      <h2 className="eyebrow text-paper/45">{title}</h2>
      <ul className="mt-6 space-y-3 text-[0.95rem] text-paper/80">{children}</ul>
    </div>
  );
}

const linkClass = "transition-colors duration-300 hover:text-paper";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-ink text-paper">
      <div className="container-x pt-20 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="CasaArt Modulars — home" className="inline-block">
              <Image src="/logo.png" alt="" width={433} height={336} className="h-28 w-auto" />
            </Link>
            <p className="mt-8 font-serif text-3xl font-light leading-tight md:text-4xl">
              Timeless spaces,
              <br />
              <em className="text-beige">designed to be lived in.</em>
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/55">{site.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-[1fr_1.2fr_1.7fr_1fr] lg:col-span-8">
            <Column title="Navigate">
              {footerNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>{l.label}</Link>
                </li>
              ))}
            </Column>
            <Column title="Services">
              {footerServices.map((s) => (
                <li key={s}>
                  <Link href="/services" className={linkClass}>{s}</Link>
                </li>
              ))}
            </Column>
            <Column title="Contact">
              <li>
                <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className={linkClass}>{site.contact.phone}</a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className={`${linkClass} [overflow-wrap:anywhere]`}>{site.contact.email}</a>
              </li>
              <li className="text-paper/55">{site.contact.location}</li>
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
      </div>

      <div className="container-x mt-20 md:mt-28" aria-hidden="true">
        <p className="select-none whitespace-nowrap text-center font-serif text-[17.5vw] font-light leading-[0.78] tracking-[0.02em] text-paper/[0.07] min-[1600px]:text-[17rem]">
          {site.wordmark}
        </p>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-x flex flex-col gap-3 py-7 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CasaArt Interiors. All Rights Reserved Raghuveer.</p>
          <p className="tracking-[0.3em]">CASAART INTERIORS</p>
        </div>
      </div>
    </footer>
  );
}
