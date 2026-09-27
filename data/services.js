import { images } from "./images";

// `core` services are the modular offering from the brief; the rest are
// supporting works CasaArt also lists on casaartinteriors.com.
export const services = [
  {
    slug: "modular-kitchens",
    title: "Modular Kitchens",
    short: "Factory-made modular kitchens with premium finishes.",
    description: "Factory-made modular kitchens with premium finishes.",
    features: ["L, U, parallel and island layouts", "Tall pantry and corner solutions", "Moisture-resistant carcass", "Soft-close drawers and hinges", "Countertop and backsplash options"],
    image: images.kitchen,
    core: true,
    featured: true,
  },
  {
    slug: "modular-wardrobes",
    title: "Modular Wardrobes",
    short: "Sleek sliding & hinged wardrobes that maximise space.",
    description: "Sleek sliding & hinged wardrobes that maximise space.",
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
    title: "Full Home Interiors",
    short: "End-to-end interiors, one design partner.",
    description: "End-to-end interiors, one design partner.",
    features: ["Single point of contact", "Coordinated design across rooms", "Modular, civil and finishing works", "Transparent itemised quote", "Handover-ready home"],
    image: images.livingModern,
    core: true,
    featured: true,
  },
  {
    slug: "false-ceiling",
    title: "False Ceiling",
    short: "Designer false ceilings with cove lighting.",
    description: "Designer false ceilings with cove lighting.",
    featured: true,
    features: ["Gypsum and POP ceilings", "Cove and profile lighting", "Room-specific designs", "Concealed AC and wiring provision"],
    image: images.livingArched,
  },
  {
    slug: "painting-works",
    title: "Painting Works",
    short: "Premium interior & exterior painting.",
    description: "Premium interior & exterior painting.",
    featured: true,
    features: ["Premium emulsions", "Texture and accent walls", "Surface preparation", "Clean, protected site"],
    image: images.livingCalm,
  },
  {
    slug: "electrical-works",
    title: "Electrical Works",
    short: "Safe, planned electrical & lighting.",
    description: "Safe, planned electrical & lighting.",
    featured: true,
    features: ["Lighting layout planning", "Concealed wiring", "Modular and smart switches", "Appliance points planned with the kitchen"],
    image: images.livingDark,
  },
  {
    slug: "glass-works",
    title: "Glass Works",
    short: "Elegant glass partitions & shower screens.",
    description: "Elegant glass partitions & shower screens.",
    featured: true,
    features: ["Toughened glass partitions", "Shower enclosures", "Mirrors and back-painted glass", "Glass shutters for units"],
    image: images.glassShower,
  },
  {
    slug: "sofas-and-beds",
    title: "Sofas and Beds",
    short: "Custom-made sofas, beds & upholstery.",
    description: "Custom-made sofas, beds & upholstery.",
    featured: true,
    features: ["Made to your dimensions", "Headboards and upholstery", "Premium fabrics and foam", "Storage beds"],
    image: images.bedroomGrey,
  },
].map((s, i) => ({ ...s, number: String(i + 1).padStart(2, "0") }));

export const coreServices = services.filter((s) => s.core);
export const featuredServices = services.filter((s) => s.featured);
export const getService = (slug) => services.find((s) => s.slug === slug);

// How it works, as published on casaartinteriors.com.
export const process = [
  { title: "Meet a Designer", description: "Free" },
  { title: "Book Your Project", description: "5% payment" },
  { title: "Execution Begins", description: "60% payment" },
  { title: "Final Installations", description: "100% payment" },
  { title: "Move In and Enjoy", description: "Move in and enjoy!" },
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
    bestFor: "Best for 2BHK homes",
    price: "₹4.9 Lakh*",
    items: ["Factory-made modular kitchen", "1 modular wardrobe", "Basic false ceiling in living", "Premium laminate finishes", "Painting for key areas", "1 year warranty"],
  },
  {
    name: "Premium Home Interior Package",
    bestFor: "Most popular for 3BHK homes",
    price: "₹6.9 Lakh*",
    featured: true,
    items: ["Full modular kitchen with tall unit", "2–3 modular wardrobes", "False ceiling with cove lighting", "TV unit & crockery unit", "Complete painting & electrical", "Glass works", "5 year warranty"],
  },
  {
    name: "Luxury Complete Home Package",
    bestFor: "3BHK villas and luxury apartments",
    price: "₹10.6 Lakh*",
    items: ["Designer modular kitchen", "Custom wardrobes for all rooms", "Full home false ceiling & lighting", "Custom sofas, beds & decor", "Imported premium finishes", "Full painting, electrical & glass works", "10 year warranty"],
  },
];
