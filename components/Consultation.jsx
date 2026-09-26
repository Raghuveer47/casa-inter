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
            <p className="eyebrow text-gold-soft">Book a Consultation</p>
          </Reveal>
          <LineReveal
            id="consultation-title"
            lines={["Let's Design", <em key="e" className="text-beige">Your Home</em>]}
            className="mt-5 font-serif text-headline font-light"
          />
          <Reveal delay={0.1}>
            <Ornament light className="mt-6" />
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/70">
              Share a few details and our designer will call you back. The first consultation and quote are free, with no obligation.
            </p>
            <ul className="mt-10 divide-y divide-cream/10 border-y border-cream/10">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-start gap-4 py-4 transition-colors hover:text-gold-soft"
                  >
                    <c.icon aria-hidden="true" strokeWidth={1.25} className="mt-0.5 size-5 shrink-0 text-gold-soft" />
                    <span>
                      <span className="eyebrow block text-cream/45">{c.label}</span>
                      <span className="mt-1 block text-sm leading-relaxed [overflow-wrap:anywhere]">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="border border-cream/12 p-6 sm:p-10 lg:col-span-7">
          <EnquiryForm source={source} dark />
        </Reveal>
      </div>
    </section>
  );
}
