// Central brand + contact details. Update these values and they flow through
// the navbar, footer, contact page and metadata.
export const site = {
  name: "CasaArt Interiors",
  wordmark: "CASAART",
  tagline: "Beautiful Spaces, Thoughtfully Designed",
  description:
    "CasaArt Interiors creates timeless, beautiful and personalized interior spaces designed around the way you live.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  // Placeholder contact details — replace with the studio's real ones.
  contact: {
    phone: "+91 98765 43210",
    email: "hello@casaartinteriors.com",
    location: "Hyderabad, Telangana, India",
    hours: "Mon – Sat, 10am – 7pm",
  },
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "Pinterest", href: "https://pinterest.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
  ],
  // Placeholder studio figures — replace with real numbers before launch.
  stats: [
    { value: "12+", label: "Years of practice" },
    { value: "350+", label: "Spaces delivered" },
    { value: "9", label: "Cities served" },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Interiors", href: "/#interiors" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const footerServices = [
  "Interior Design",
  "Residential Interiors",
  "Commercial Interiors",
  "Furniture",
  "Space Planning",
];
