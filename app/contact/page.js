import LineReveal from "@/components/ui/LineReveal";
import ImageReveal from "@/components/ui/ImageReveal";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import EnquiryForm from "@/components/EnquiryForm";
import { images } from "@/data/images";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Start your project with CasaArt Interiors. Tell us about your space and our team will contact you shortly.",
  alternates: { canonical: "/contact" },
};

const details = [
  { label: "Phone", value: site.contact.phone, href: `tel:${site.contact.phone.replace(/\s/g, "")}` },
  { label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
  { label: "Studio", value: site.contact.location },
  { label: "Hours", value: site.contact.hours },
];

export default function ContactPage() {
  return (
    <section aria-labelledby="contact-title" className="bg-ivory pb-[clamp(5rem,11vw,10rem)] pt-36 md:pt-44">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal onMount duration={0.45} y={12}>
            <SectionLabel>Contact</SectionLabel>
          </Reveal>
          <LineReveal
            as="h1"
            id="contact-title"
            onMount
            delay={0.04}
            stagger={0.05}
            duration={0.55}
            lines={["Let's Talk", <em key="e" className="text-earth">About Your Space</em>]}
            className="mt-8 font-serif text-headline font-light"
          />
          <Reveal onMount delay={0.08} duration={0.45} y={12}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
              Share a few details and a designer will get back to you within one working day to arrange a consultation.
            </p>
          </Reveal>

          <Reveal onMount delay={0.12} duration={0.45} y={12}>
            <dl className="mt-14 divide-y divide-line border-y border-line">
              {details.map((d) => (
                <div key={d.label} className="flex items-baseline justify-between gap-6 py-5">
                  <dt className="eyebrow text-earth">{d.label}</dt>
                  <dd className="text-right">
                    {d.href ? (
                      <a href={d.href} className="break-all underline-offset-4 hover:underline">{d.value}</a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <ImageReveal
            src={images.contact}
            alt="Soft neutral sofa in a sunlit room"
            className="mt-14 hidden aspect-[4/3] lg:block"
            sizes="40vw"
            delay={0.08}
            duration={0.65}
            onMount
          />
        </div>

        <Reveal id="enquiry" onMount delay={0.06} duration={0.45} y={12} className="bg-paper p-6 sm:p-10 lg:col-span-7 lg:p-14">
          <h2 className="font-serif text-title font-light">Project enquiry</h2>
          <p className="mt-3 text-sm text-muted">It only takes a minute.</p>
          <div className="mt-10">
            <EnquiryForm source="Contact page" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
