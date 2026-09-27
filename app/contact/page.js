import PageHeader from "@/components/ui/PageHeader";
import Consultation from "@/components/Consultation";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Visit CasaArt at our Kokapet–Neopolis facility in Hyderabad, or call and WhatsApp +91 8897969521.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        lines={["Visit Our", <em key="e" className="text-earth">Facility</em>]}
        intro={`Experience CasaArt quality in person at our Kokapet–Neopolis facility in Hyderabad. Call ${site.contact.phone} or email ${site.contact.email}.`}
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
