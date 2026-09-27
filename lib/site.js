// Central brand + contact details. Update these values and they flow through
// the navbar, footer, contact page, floating buttons and metadata.
const phone = "+91 8897969521";
const whatsappNumber = "918897969521";
const whatsappMessage = "Hi, I found CasaArt online and I'd like a free design quote.";

export const site = {
  name: "CasaArt",
  wordmark: "CASAART",
  tagline: "Design Better. Build Better. Live Better.",
  description:
    "CasaArt designs and executes complete luxury home interiors in Hyderabad with factory-made modular quality, premium materials and on-time delivery.",
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
    { value: "Complete", label: "Home Interiors" },
    { value: "Own", label: "Modular Factory" },
    { value: "Premium", label: "Materials & Finishes" },
    { value: "On-time", label: "Delivery" },
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
