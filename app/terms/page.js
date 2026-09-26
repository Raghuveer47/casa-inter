import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms for using the CasaArt Interiors website and requesting quotes.",
  alternates: { canonical: "/terms" },
};

// Template wording — have CasaArt review before launch.
export default function TermsPage() {
  return (
    <LegalPage
      label="Terms & Conditions"
      title="Terms & Conditions"
      intro="Please read these terms before using this website."
      sections={[
        {
          heading: "Website content",
          body: [
            "Photographs, designs and text on this website are for illustration. Actual materials, colours and finishes may vary slightly and are confirmed in your approved design and quote.",
          ],
        },
        {
          heading: "Quotes and pricing",
          body: [
            "Package prices shown are indicative starting prices. A final, itemised quote is provided after a free site measurement and design discussion.",
          ],
        },
        {
          heading: "Payments and warranty",
          body: ["Payment milestones, timelines and warranty terms for your project are set out in your project agreement."],
        },
        {
          heading: "Contact",
          body: [`Questions about these terms? Email ${site.contact.email} or call ${site.contact.phone}.`],
        },
      ]}
    />
  );
}
