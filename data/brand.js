// Brand content: why CasaArt, communities, testimonials, FAQ, materials.
// Everything here is drawn from casaartinteriors.com — keep claims to what CasaArt can substantiate.
import { images } from "./images";

export const whyCasart = [
  { title: "Creative Design", body: "Custom designs tailored for every client and lifestyle, with detailed 3D visualisation." },
  { title: "Superior Quality", body: "Factory-made modular units and premium materials for a flawless, lasting finish." },
  { title: "Great Guarantee", body: "Confident warranties across our packages for total peace of mind." },
  { title: "Timely Delivery", body: "Our own factory means faster production and reliable, on-time handover." },
  { title: "Transparent Pricing", body: "Clear, itemised quotes with no hidden costs — luxury within your budget." },
  { title: "Premium Materials", body: "Only high-grade boards, hardware and finishes, installed by our expert team." },
];

// "Designed here. Built here." — what owning the factory changes.
export const differentiators = [
  { title: "Superior finishes and consistent quality" },
  { title: "Faster production and reliable timelines" },
  { title: "Premium, moisture-resistant materials" },
  { title: "Professional installation by our own team" },
];

// Builders and communities shown in the homepage "Trusted By" logo marquee.
// Entries without a logo render as a text wordmark.
export const trustedBy = [
  { name: "INDIS", logo: "/assets/companies_trusted/indis-logo-light.svg" },
  { name: "LODHA", logo: "/assets/companies_trusted/asbl-lodha-logo.png" },
  { name: "Aparna Constructions", logo: "/assets/companies_trusted/aparna-logo.svg" },
  { name: "Janapriya UPSCALE", logo: "/assets/companies_trusted/janapriya-logo.png" },
  { name: "My Home Bhooja", logo: "/assets/companies_trusted/bhooja_logo.png" },
  { name: "Prestige High Fields" },
];

export const communities = ["Prestige High Fields", "My Home Mangala", "My Home Tridasa", "Raja Pushpa Provincia", "Indis One City", "Indis Viva City", "Aparna Zenon"];

// Brands CasaArt lists as materials it works with. These are materials used — not claimed partnerships.
export const materialBrands = [
  { group: "Plywood & boards", names: ["Century", "Greenply", "Austin", "Action Tesa", "Sylvan", "Architect Ply"] },
  { group: "Hardware", names: ["Hettich", "Hafele", "Blum", "Nimmi", "Ebco"] },
  { group: "POP / Ceiling", names: ["Saint-Gobain Gyproc", "Gypsoman"] },
  { group: "Electrical", names: ["Polycab", "Finolex", "Havells", "Wipro", "Jaquar"] },
];

// Testimonials as published on casaartinteriors.com. Confirm client permission before launch.
export const testimonials = [
  {
    quote:
      "Casa Art delivered our 3BHK interiors on time and within budget. Their own factory really shows - the modular kitchen finish is superb and the team was highly professional.",
    name: "Sandeep Reddy",
    detail: "Kokapet, Hyderabad",
  },
  {
    quote: "From 3D design to handover the process was transparent. The false ceiling and wardrobes turned out exactly as promised. Truly premium quality.",
    name: "Divya Rao",
    detail: "Gachibowli, Hyderabad",
  },
  {
    quote: "Excellent end-to-end execution - kitchen, painting, electrical and glass works all handled by one team. Great value for a luxury finish.",
    name: "Imran Khan",
    detail: "Neopolis, Hyderabad",
  },
];

export const faqs = [
  {
    q: "How long does a full home interior take?",
    a: "A typical 2-3BHK full home interior takes 45-60 days after design sign-off, depending on scope and site conditions.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes. Our packages include warranties ranging from 1 to 10 years depending on the materials and package you choose.",
  },
  {
    q: "Can I get a design within my budget?",
    a: "Absolutely. Share your budget in the quote form and our designers will tailor a solution that fits it.",
  },
  {
    q: "Do you provide free design consultation?",
    a: "Yes, the first design consultation and quote are completely free with no obligation.",
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
