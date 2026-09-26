// Central brand + contact details. Update these values and they flow through
// the navbar, footer, contact page, floating buttons and metadata.
const phone = "+91 88979 69521";
const whatsappNumber = "918897969521";
const whatsappMessage = "Hi, I found CASART online and I'm interested in modular interiors.";

export const site = {
  name: "CasaArt Interiors",
  wordmark: "CASAART",
  tagline: "Beautifully Designed. Expertly Crafted.",
  description:
    "Bespoke home interiors, designed by our team and built in our own modular factory at Neopolis–Kokapet — for homes across Hyderabad that fit perfectly and last for years.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  contact: {
    phone,
    phoneHref: `tel:${phone.replace(/\s/g, "")}`,
    email: "casaartinteriors@gmail.com",
    address: "Plot No. 291/E2, Beside Delhivery Warehouse, Khanapur Village Road, Neopolis–Kokapet, Hyderabad",
    city: "Hyderabad, Telangana",
    hours: "Mon – Sat, 10am – 7pm",
    mapEmbed: "https://www.google.com/maps?q=Neopolis+Kokapet+Hyderabad&output=embed",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Neopolis+Kokapet+Hyderabad",
  },
  whatsapp: {
    number: whatsappNumber,
    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  },
  socials: [
    { label: "Instagram", href: "https://instagram.com/casaartinteriors" },
    { label: "LinkedIn", href: "https://linkedin.com/company/casaartinteriors" },
  ],
  instagramHandle: "@casaartinteriors",
  // Figures CasaArt publishes about itself. Keep these in line with what can be substantiated.
  facts: [
    { value: "200+", label: "Homes completed" },
    { value: "10+", label: "Years of craft" },
    { value: "100%", label: "Made in-house" },
    { value: "10 yr", label: "Warranty, up to" },
  ],
  // Only list places CasaArt actually serves. Add new ones here as the business grows.
  serviceAreas: ["Kokapet", "Neopolis", "Narsingi", "Gachibowli", "Financial District", "Hitec City", "Madhapur", "Jubilee Hills", "Banjara Hills", "Kondapur", "Tellapur", "Manikonda"],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Materials", href: "/materials" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];
