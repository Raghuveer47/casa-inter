import { images } from "./images";

// `core` services are the modular offering from the brief; the rest are
// supporting works CasaArt also lists on casaartinteriors.com.
export const services = [
  {
    slug: "modular-kitchens",
    title: "Modular Kitchens",
    short: "Kitchens planned around how you cook — every drawer, corner and appliance in its place.",
    description:
      "CasaArt designs and manufactures ergonomic modular kitchens in our own factory — soft-close hardware, moisture-resistant materials and premium finishes tailored to how you cook.",
    features: ["L, U, parallel and island layouts", "Tall pantry and corner solutions", "Moisture-resistant carcass", "Soft-close drawers and hinges", "Countertop and backsplash options"],
    image: images.kitchen,
    core: true,
    featured: true,
  },
  {
    slug: "modular-wardrobes",
    title: "Modular Wardrobes",
    short: "Sliding or hinged wardrobes with interiors organised for the way you dress.",
    description:
      "Custom sliding and hinged wardrobes with smart internal storage, loft units and premium shutters, factory-finished for durability and a flawless look.",
    features: ["Sliding and hinged shutters", "Loft and full-height units", "Drawers, trays and hanging zones", "Mirror, glass and PU finishes", "Soft-close and sliding hardware"],
    image: images.bedroomContemporary,
    core: true,
    featured: true,
  },
  {
    slug: "bedroom-interiors",
    title: "Bedroom Interiors",
    short: "Calm, restful bedrooms with headboard walls, storage and soft layered light.",
    description:
      "Complete bedrooms designed as one — wardrobe, bed and headboard, TV unit, dresser and study — in coordinated finishes that make the room feel calm and complete.",
    features: ["Wardrobes and lofts", "Beds and headboard walls", "TV units and dressers", "Study and work nooks", "Cove and ambient lighting"],
    image: images.bedroomSuite,
    core: true,
    featured: true,
  },
  {
    slug: "living-room-interiors",
    title: "Living Room Interiors",
    short: "Welcoming living rooms with feature walls, TV units and hidden storage.",
    description:
      "Living and dining spaces with feature walls, TV units, crockery and display storage — planned so everyday clutter disappears and the room stays welcoming.",
    features: ["TV and feature walls", "Crockery and display units", "Shoe and foyer storage", "Pooja units", "False ceiling and lighting"],
    image: images.livingLuxury,
    core: true,
    featured: true,
  },
  {
    slug: "dining-rooms",
    title: "Dining Rooms",
    short: "Crockery units, bar counters and dining spaces made for long family meals.",
    description:
      "Dining areas that feel like the heart of the home — crockery and display units, bar counters and lighting that make every meal an occasion.",
    features: ["Crockery and display units", "Bar and buffet counters", "Wall panelling", "Pendant and cove lighting", "Space-saving layouts for compact homes"],
    image: images.dining,
    core: true,
    featured: true,
  },
  {
    slug: "pooja-rooms",
    title: "Pooja Rooms",
    short: "Serene pooja units and rooms with backlit panels, jaali and brass accents.",
    description:
      "A peaceful corner for prayer, designed with care — from compact wall units to full pooja rooms with backlit panels, CNC jaali, drawers for essentials and brass detailing.",
    features: ["Wall-mounted and floor units", "CNC jaali and backlit panels", "Storage for puja essentials", "Marble-look and veneer finishes", "Bells, brass and warm lighting"],
    image: images.pooja,
    core: true,
    featured: true,
  },
  {
    slug: "study-rooms",
    title: "Study Rooms",
    short: "Focused, clutter-free study corners with desks, shelving and good light.",
    description:
      "Study and work-from-home spaces built for concentration — desks at the right height, shelving that keeps books in order, cable management and lighting that is easy on the eyes.",
    features: ["Custom desks and shelving", "Book and file storage", "Cable management", "Task lighting", "Kids study units"],
    image: images.office,
    core: true,
    featured: true,
  },
  {
    slug: "partitions",
    title: "Partitions",
    short: "Fluted, glass and jaali partitions that divide space without closing it off.",
    description:
      "Partitions that separate living, dining and foyer zones while keeping light flowing — in fluted glass, wooden slats, CNC jaali or metal frames.",
    features: ["Fluted and frosted glass", "Wooden slat screens", "CNC jaali panels", "Sliding and fixed options", "Foyer and pooja dividers"],
    image: images.livingDouble,
    core: true,
  },
  {
    slug: "office-spaces",
    title: "Office Spaces",
    short: "Workspaces and cabins that look professional and help teams do their best work.",
    description:
      "Offices, cabins and studios designed to reflect your brand — workstations, storage, meeting rooms and reception areas made in our own factory.",
    features: ["Workstations and cabins", "Reception and meeting rooms", "Storage and filing", "Acoustic and glass partitions", "Lighting and electrical planning"],
    image: images.workspace,
    core: true,
  },
  {
    slug: "storage-solutions",
    title: "Storage Solutions",
    short: "Lofts, utility units and clever pull-outs that make every square foot work.",
    description:
      "From utility and study rooms to under-stair and loft storage, we plan storage around what you own and how you use each space — especially valuable in compact homes.",
    features: ["Utility and laundry units", "Study and book storage", "Loft and overhead storage", "Pull-outs and organisers", "Space-saving multi-use furniture"],
    image: images.storageShelves,
    core: true,
  },
  {
    slug: "full-home-interiors",
    title: "Complete Modular Interiors",
    short: "Every room designed and delivered together — one team, one timeline, keys in hand.",
    description:
      "From design to handover, CasaArt executes your complete home interiors — kitchen, wardrobes, ceilings, painting, electrical and decor — on time, with one team accountable for everything.",
    features: ["Single point of contact", "Coordinated design across rooms", "Modular, civil and finishing works", "Transparent itemised quote", "Handover-ready home"],
    image: images.livingModern,
    core: true,
    featured: true,
  },
  {
    slug: "false-ceiling",
    title: "False Ceiling",
    short: "Designer POP and gypsum ceilings with cove lighting.",
    description: "POP and gypsum false ceilings with layered cove lighting that add depth, elegance and a premium finish to every room.",
    features: ["Gypsum and POP ceilings", "Cove and profile lighting", "Room-specific designs", "Concealed AC and wiring provision"],
    image: images.livingArched,
  },
  {
    slug: "painting-works",
    title: "Painting Works",
    short: "Premium interior painting, textures and accent walls.",
    description: "Flawless painting with premium emulsions, textures and accent walls, executed by skilled painters for a rich, long-lasting finish.",
    features: ["Premium emulsions", "Texture and accent walls", "Surface preparation", "Clean, protected site"],
    image: images.livingCalm,
  },
  {
    slug: "electrical-works",
    title: "Electrical Works",
    short: "Safe, planned electrical and lighting layouts.",
    description: "Complete electrical planning, concealed wiring, smart switches and designer lighting layouts handled by certified professionals.",
    features: ["Lighting layout planning", "Concealed wiring", "Modular and smart switches", "Appliance points planned with the kitchen"],
    image: images.livingDark,
  },
  {
    slug: "glass-works",
    title: "Glass Works",
    short: "Elegant glass partitions, shower screens and mirrors.",
    description: "Toughened glass partitions, shower enclosures, mirrors and railings that bring a modern, luxurious touch to your interiors.",
    features: ["Toughened glass partitions", "Shower enclosures", "Mirrors and back-painted glass", "Glass shutters for units"],
    image: images.glassShower,
  },
  {
    slug: "sofas-and-beds",
    title: "Sofas and Beds",
    short: "Custom-made sofas, beds and upholstery.",
    description: "Bespoke sofas, beds, headboards and upholstery crafted to your dimensions and style with premium fabrics and foam.",
    features: ["Made to your dimensions", "Headboards and upholstery", "Premium fabrics and foam", "Storage beds"],
    image: images.bedroomGrey,
  },
].map((s, i) => ({ ...s, number: String(i + 1).padStart(2, "0") }));

export const coreServices = services.filter((s) => s.core);
export const featuredServices = services.filter((s) => s.featured);
export const getService = (slug) => services.find((s) => s.slug === slug);

// Process from the brief (01–07).
export const process = [
  { title: "Consultation", description: "We start by listening — your routine, your taste, your budget. The first meeting is free, at our studio or yours." },
  { title: "Site Measurement", description: "Our team visits your home and records exact laser measurements, so every module fits to the millimetre." },
  { title: "Design & 3D Visualization", description: "Your designer builds realistic 3D views and a mood board, so you can walk through each room before anything is made." },
  { title: "Material Selection", description: "Pick finishes, hardware and countertops with real samples, then sign off a clear, itemised quote." },
  { title: "Manufacturing", description: "Panels are CNC-cut and edge-banded in our Kokapet factory, with checks at every stage." },
  { title: "Installation", description: "Our own installers assemble everything on site — no sub-contractors — and fine-tune every hinge and shutter." },
  { title: "Final Handover", description: "A detailed quality walkthrough, a deep clean and the keys. Your warranty and after-sales support start here." },
];

// Payment milestones as published on casaartinteriors.com.
export const paymentMilestones = [
  { step: "Meet a Designer", note: "Free" },
  { step: "Book Your Project", note: "5% payment" },
  { step: "Execution Begins", note: "60% payment" },
  { step: "Final Installations", note: "100% payment" },
  { step: "Move In and Enjoy", note: "" },
];

// Indicative packages from casaartinteriors.com. Final pricing follows a site visit.
export const packages = [
  {
    name: "Essential Interior Package",
    bestFor: "Compact 1–2BHK homes",
    price: "₹3.9 Lakh*",
    items: ["Factory-made modular kitchen", "1 modular wardrobe", "Basic false ceiling in living", "Premium laminate finishes", "Painting for key areas", "1 year warranty"],
  },
  {
    name: "Premium Home Interior Package",
    bestFor: "Most popular for 2–3BHK homes",
    price: "₹5.9 Lakh*",
    featured: true,
    items: ["Full modular kitchen with tall unit", "2–3 modular wardrobes", "False ceiling with cove lighting", "TV unit & crockery unit", "Complete painting & electrical", "Glass works", "5 year warranty"],
  },
  {
    name: "Luxury Complete Home Package",
    bestFor: "3BHK, villas & luxury apartments",
    price: "₹9.6 Lakh*",
    items: ["Designer modular kitchen", "Custom wardrobes for all rooms", "Full home false ceiling & lighting", "Custom sofas, beds & decor", "Imported premium finishes", "Full painting, electrical & glass works", "10 year warranty"],
  },
];
