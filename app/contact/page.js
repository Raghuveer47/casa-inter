import PageHeader from "@/components/ui/PageHeader";
import Consultation from "@/components/Consultation";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Book a free design consultation with CasaArt Interiors. Call, WhatsApp or visit our Neopolis–Kokapet facility in Hyderabad.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        lines={["Visit or", <em key="e" className="text-earth">Get in Touch</em>]}
        intro={`Experience CasaArt quality in person at our Neopolis–Kokapet facility, or reach us on ${site.contact.phone}. ${site.contact.hours}.`}
      />
      <Consultation source="Contact page" />
      <section aria-label="Map" className="bg-ivory">
        <iframe
          title="CasaArt location — Neopolis, Kokapet, Hyderabad"
          src={site.contact.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[420px] w-full border-0 grayscale-[0.4] sepia-[0.15]"
        />
      </section>
    </>
  );
}
