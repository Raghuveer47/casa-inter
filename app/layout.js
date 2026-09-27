import { Cormorant_Garamond, Manrope, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryProvider from "@/components/EnquiryProvider";
import FloatingContact from "@/components/FloatingContact";
import QuotePopup from "@/components/QuotePopup";
import CustomCursor from "@/components/CustomCursor";
import { site } from "@/lib/site";
import "./globals.css";

// Heading fonts — one per FONT option below. Only the active one is preloaded.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
  preload: false,
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: false,
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

// Colour theme for the whole site — see the [data-theme] blocks in app/globals.css.
// Options: "mocha" (client's current pick), "ink", "burgundy", "indigo".
// Open any page with ?preview to compare them live.
const THEME = "mocha";

// Heading style — see the [data-font] blocks in app/globals.css.
// Options: "modern" (bold sans), "classic" (bold serif), "elegant" (fine serif).
const FONT = "modern";

const title = "CasaArt - Design Better. Build Better. Live Better.";

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | CasaArt" },
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
  themeColor: { mocha: "#161210", ink: "#111111", burgundy: "#1c0e11", indigo: "#10121f" }[THEME],
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
    <html lang="en" data-theme={THEME} data-font={FONT} className={`${jakarta.variable} ${playfair.variable} ${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
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
