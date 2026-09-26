import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description: "How CasaArt Interiors collects, uses and protects the information you share with us.",
  alternates: { canonical: "/privacy-policy" },
};

// Template wording — have CasaArt review before launch.
export default function PrivacyPage() {
  return (
    <LegalPage
      label="Privacy Policy"
      title="Privacy Policy"
      intro="Your details are safe with us. This page explains what we collect and why."
      sections={[
        {
          heading: "Information we collect",
          body: [
            "When you submit a consultation request we collect the details you enter: your name, phone number, location, property type, requirement, approximate area, budget range, preferred consultation time, message and, if you provide it, your email address.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "We use your details only to respond to your enquiry, schedule a consultation, prepare a quote and deliver your project. We do not sell or rent your information to anyone.",
          ],
        },
        {
          heading: "Storage and security",
          body: ["Enquiries are stored securely and accessed only by the CasaArt team. We keep them only as long as needed to serve you."],
        },
        {
          heading: "Contact",
          body: [`To update or delete your information, email ${site.contact.email} or call ${site.contact.phone}.`],
        },
      ]}
    />
  );
}
