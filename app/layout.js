import { Cormorant_Garamond, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryProvider from "@/components/EnquiryProvider";
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

const title = "CasaArt Interiors | Beautiful Spaces, Thoughtfully Designed";

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | CasaArt Interiors" },
  description: site.description,
  keywords: ["interior design", "interior designers Hyderabad", "home interiors", "luxury interiors", "furniture", "CasaArt Interiors"],
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
  themeColor: "#faf8f4",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.contact.phone,
  email: site.contact.email,
  address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">Skip to content</a>
        <EnquiryProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </EnquiryProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
