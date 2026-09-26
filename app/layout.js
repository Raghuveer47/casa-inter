import { Cormorant_Garamond, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryProvider from "@/components/EnquiryProvider";
import FloatingContact from "@/components/FloatingContact";
import QuotePopup from "@/components/QuotePopup";
import CustomCursor from "@/components/CustomCursor";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const title = "CasaArt Interiors | Premium Modular Interiors in Hyderabad";

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | CasaArt Interiors" },
  description: site.description,
  keywords: ["modular kitchen Hyderabad", "modular wardrobes", "modular interiors Hyderabad", "home interiors Kokapet", "interior designers Hyderabad", "CasaArt Interiors"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description: site.description,
    url: "/",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0c0b0a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.contact.phone,
  email: site.contact.email,
  image: `${site.url}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 291/E2, Beside Delhivery Warehouse, Khanapur Village Road, Neopolis–Kokapet",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  areaServed: "Hyderabad",
  sameAs: site.socials.map((s) => s.href),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="pb-16 font-sans antialiased md:pb-0">
        <a href="#main" className="skip-link">Skip to content</a>
        <EnquiryProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <FloatingContact />
          <QuotePopup />
        </EnquiryProvider>
        <CustomCursor />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
