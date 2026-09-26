// Brand content: why CasaArt, communities, testimonials, FAQ, materials.
// Everything here is drawn from casaartinteriors.com — keep claims to what CasaArt can substantiate.
import { images } from "./images";

export const whyCasart = [
  { title: "Factory-Direct Pricing", body: "Everything is made in our own Kokapet facility, so you pay for craftsmanship — not for middlemen or outsourced workshops." },
  { title: "Made in About 45 Days", body: "Modular work is typically manufactured and delivered within 45 days of design sign-off, with a timeline agreed up front." },
  { title: "Precision Craftsmanship", body: "CNC-cut panels and seamless edge banding give crisp lines, tight joints and finishes that stay beautiful." },
  { title: "Fully Customised", body: "Sizes, finishes, handles and interiors are chosen for your home — nothing is forced to fit a catalogue." },
  { title: "3D Walkthroughs", body: "See your rooms in realistic 3D, with your finishes and lighting, before a single panel is cut." },
  { title: "One Dedicated Designer", body: "The same designer guides you from the first sketch to handover, so nothing gets lost along the way." },
  { title: "Own Installation Team", body: "Trained CasaArt installers — never sub-contractors — assemble, align and finish every unit on site." },
  { title: "Up to 10-Year Warranty", body: "Long warranties on modular work and a responsive after-sales team whenever you need us." },
];

// "Designed here. Built here." — what owning the factory changes.
export const differentiators = [
  { title: "Sharper Finish", body: "Millimetre-accurate CNC cutting and zero-gap edge banding for clean lines and smooth shutters." },
  { title: "Consistent Quality", body: "Calibrated BWP plywood and branded hardware, used the same way in every home we build." },
  { title: "One Accountable Team", body: "Design, manufacturing and installation under one roof — one point of contact from 3D to keys." },
];

export const communities = ["Prestige High Fields", "My Home Mangala", "My Home Tridasa", "Raja Pushpa Provincia", "Indis One City", "Indis Viva City", "Aparna Zenon"];

// Brands CasaArt lists as materials it works with. These are materials used — not claimed partnerships.
export const materialBrands = [
  { group: "Plywood & boards", names: ["Century", "Greenply", "Austin", "Action Tesa", "Sylvan", "Architect Ply"] },
  { group: "Hardware", names: ["Hettich", "Hafele", "Blum", "Nimmi", "Ebco"] },
  { group: "Ceiling", names: ["Saint-Gobain Gyproc", "Gypsoman"] },
  { group: "Electrical", names: ["Polycab", "Finolex", "Havells", "Wipro", "Jaquar"] },
];

// Testimonials as published on casaartinteriors.com. Confirm client permission before launch.
export const testimonials = [
  {
    quote:
      "Casa Art delivered our 3BHK interiors on time and within budget. Their own factory really shows — the modular kitchen finish is superb and the team was highly professional.",
    name: "Sandeep Reddy",
    detail: "3BHK interiors · Kokapet, Hyderabad",
  },
  {
    quote: "From 3D design to handover the process was transparent. The false ceiling and wardrobes turned out exactly as promised. Truly premium quality.",
    name: "Divya Rao",
    detail: "Wardrobes & ceiling · Gachibowli, Hyderabad",
  },
  {
    quote: "Excellent end-to-end execution — kitchen, painting, electrical and glass works all handled by one team. Great value for a luxury finish.",
    name: "Imran Khan",
    detail: "Complete interiors · Neopolis, Hyderabad",
  },
];

export const faqs = [
  {
    q: "What modular interior services does CASART provide?",
    a: "Modular kitchens, wardrobes, bedrooms, living and dining rooms, pooja units, study rooms, partitions, storage and complete homes — plus false ceilings, painting, electrical, glass works and custom furniture, all handled by one team.",
  },
  {
    q: "How much does a complete home interior cost?",
    a: "It depends on the size of your home, the finishes and the scope of woodwork. As a guide, complete interiors for a 2BHK or 3BHK usually fall between ₹8 and ₹25 lakh. Because we manufacture in our own factory, you get an itemised, factory-direct quote with no hidden costs.",
  },
  {
    q: "How long does a modular project take?",
    a: "Modular kitchens, wardrobes and TV units usually take 35–45 working days after the design is final. A complete turnkey home — with ceilings, painting, glass and electrical — is typically handed over in 45–60 days.",
  },
  {
    q: "How does the design process work?",
    a: "A free consultation, laser site measurement, 3D design, material selection with samples, manufacturing in our factory, installation by our own team and a final quality walkthrough before handover.",
  },
  {
    q: "Do you provide 3D designs?",
    a: "Yes. After measuring your home, your designer prepares realistic 3D views of every room so you can see layouts, textures and lighting before production begins.",
  },
  {
    q: "Do you manufacture your own modular interiors?",
    a: "Yes. Our modular manufacturing unit is at Neopolis–Kokapet, Hyderabad. You are welcome to visit and see your interiors being made.",
  },
  {
    q: "What materials and finishes are available?",
    a: "Laminates, acrylic, PU, veneer and glass shutters on BWP plywood, with branded hardware, a choice of handles and several countertop options. See Materials & Finishes for details.",
  },
  { q: "Do you provide installation and site visits?", a: "Yes. Site visits and floor-plan evaluations are free across Hyderabad, and every project is installed by our own team." },
  {
    q: "Which areas in Hyderabad do you serve?",
    a: "Homes across Hyderabad, including Kokapet, Neopolis, Narsingi, Gachibowli, Financial District, Hitec City, Madhapur, Jubilee Hills, Banjara Hills, Kondapur, Tellapur and Manikonda.",
  },
  {
    q: "How do I book a consultation?",
    a: "Tap Get a Free Quote, message us on WhatsApp or call us. Share your floor plan if you have one, and we will set up a consultation — and a factory visit if you would like one.",
  },
];

export const materials = [
  {
    slug: "laminates",
    title: "Laminates",
    image: images.materialLaminate,
    body: "Durable, easy to maintain and available in hundreds of colours, woodgrains and textures. Matte, suede and high-gloss options suit almost any style.",
    bestFor: "Everyday kitchens, wardrobes, kids rooms",
  },
  {
    slug: "acrylic",
    title: "Acrylic",
    image: images.materialAcrylic,
    body: "A seamless, mirror-like high-gloss surface with rich colour depth. Reflects light beautifully and makes compact kitchens feel larger.",
    bestFor: "Contemporary kitchens, statement shutters",
  },
  {
    slug: "pu-finishes",
    title: "PU Finishes",
    image: images.materialPU,
    body: "Polyurethane-painted shutters with a smooth, luxurious finish in matte or gloss, in almost any colour. Allows profiled and curved designs.",
    bestFor: "Premium kitchens, luxury wardrobes",
  },
  {
    slug: "veneer",
    title: "Veneer",
    image: images.materialVeneer,
    body: "Thin slices of natural wood that bring genuine grain and warmth. Each panel is unique — ideal for feature walls and statement furniture.",
    bestFor: "TV walls, headboards, living spaces",
  },
  {
    slug: "glass",
    title: "Glass",
    image: images.materialGlass,
    body: "Toughened, fluted, frosted and back-painted glass for shutters, partitions and shower enclosures. Adds lightness and a refined touch.",
    bestFor: "Crockery units, partitions, bathrooms",
  },
  {
    slug: "hardware",
    title: "Hardware",
    image: images.materialHardware,
    body: "Soft-close hinges, drawer channels, lift-ups and sliding systems from reputed hardware brands — the part you use every day.",
    bestFor: "Every modular unit",
  },
  {
    slug: "handles",
    title: "Handles",
    image: images.materialHandles,
    body: "Profile handles, G-profiles, knobs and handle-less push-to-open options, in finishes from brushed steel to antique brass.",
    bestFor: "Kitchens, wardrobes, vanities",
  },
  {
    slug: "countertops",
    title: "Countertops",
    image: images.materialCountertop,
    body: "Granite, quartz and other surfaces chosen for durability, stain resistance and the look you want, matched to your shutters.",
    bestFor: "Kitchens, vanities, bar units",
  },
  {
    slug: "boards",
    title: "Plywood & Boards",
    image: images.materialPlywood,
    body: "Moisture-resistant plywood and boards form the carcass of every unit. The right grade in the right place makes interiors last.",
    bestFor: "Carcasses, lofts, wet areas",
  },
];

export const materialComparison = [
  { finish: "Laminate", look: "Matte, textured or gloss", care: "Very easy", budget: "₹" },
  { finish: "Acrylic", look: "Seamless high-gloss", care: "Easy, shows fingerprints", budget: "₹₹" },
  { finish: "PU", look: "Smooth painted, any colour", care: "Moderate", budget: "₹₹₹" },
  { finish: "Veneer", look: "Natural wood grain", care: "Moderate, polish over time", budget: "₹₹₹" },
];
