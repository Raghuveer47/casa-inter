import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import EnquiryForm from "./EnquiryForm";
import LineReveal from "./ui/LineReveal";
import Reveal from "./ui/Reveal";
import { Ornament } from "./ui/SectionHeading";
import { site } from "@/lib/site";

// Inline consultation form with direct contact options beside it.
export default function Consultation({ source = "Homepage" }) {
  const contacts = [
    { icon: Phone, label: "Call", value: site.contact.phone, href: site.contact.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: site.contact.phone, href: site.whatsapp.href, external: true },
    { icon: Mail, label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
    { icon: MapPin, label: "Visit", value: site.contact.address, href: site.contact.mapLink, external: true },
  ];

  return (
    <section id="consultation" aria-labelledby="consultation-title" className="section-y bg-night text-cream">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-gold-soft">Come say hello</p>
          </Reveal>
          <LineReveal
            id="consultation-title"
            lines={["Visit Our", <em key="e" className="text-beige">Facility</em>]}
            className="mt-5 font-serif text-headline font-light"
          />
          <Reveal delay={0.1}>
            <Ornament light className="mt-6" />
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/70">
              Experience CasaArt quality in person at our Kokapet–Neopolis facility in Hyderabad. The first design consultation and quote are completely free with no obligation.
            </p>
            <ul className="mt-10 grid gap-3">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-start gap-4 rounded-2xl bg-cream/[0.04] p-4 transition-colors hover:bg-cream/[0.07] hover:text-gold-soft"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-soft">
                      <c.icon aria-hidden="true" strokeWidth={1.5} className="size-[1.1rem]" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-cream/45">{c.label}</span>
                      <span className="mt-1 block text-sm leading-relaxed [overflow-wrap:anywhere]">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="rounded-3xl border border-cream/10 bg-ivory p-5 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:p-10 lg:col-span-7">
          <EnquiryForm source={source} dark />
        </Reveal>
      </div>
    </section>
  );
}
