import { images } from "./images";

// Portfolio. Replace placeholder photos, scope and materials with each project's real details.
// `gallery` can hold any number of photos: project pages preview the first few and
// link to a full gallery page for the rest. Replace placeholders with real CasaArt photos.
export const PROJECT_FILTERS = ["All", "Kitchens", "Wardrobes", "Bedrooms", "Living Rooms", "Luxury", "Minimal", "Contemporary"];

export const projects = [
  {
    slug: "nagole-3bhk-villa",
    title: "The Nagole Villa",
    location: "Nagole, Uppal",
    propertyType: "3BHK Villa",
    area: null,
    style: "Luxury",
    category: "Living Rooms",
    tags: ["Living Rooms", "Bedrooms", "Kitchens", "Luxury"],
    summary:
      "A complete villa interior where warm veneers, soft gold accents and layered lighting tie every room together — from a statement living room to calm, storage-rich bedrooms.",
    scope: ["Living room feature wall and TV unit", "Modular kitchen with tall units", "Wardrobes for three bedrooms", "Pooja unit", "False ceiling with cove lighting"],
    materials: ["Walnut-tone veneer panels", "PU-finish shutters", "BWP plywood carcass", "Soft-close branded hardware"],
    cover: images.livingLuxury,
    gallery: [
      images.livingLuxury,
      images.livingWarm,
      images.livingArched,
      images.kitchenIsland,
      images.bedroomSuite,
      images.bedroomDark,
      images.sideboard,
      images.pooja,
      images.dining,
      images.consoleRattan,
      images.livingLounge,
    ],
  },
  {
    slug: "hayathnagar-family-home",
    title: "Hayathnagar Family Home",
    location: "Hayathnagar, Hyderabad",
    propertyType: "Independent House",
    area: null,
    style: "Contemporary",
    category: "Kitchens",
    tags: ["Kitchens", "Wardrobes", "Bedrooms", "Contemporary"],
    summary:
      "A bright, practical home for a growing family — an easy-to-clean kitchen, wardrobes with room for everything and a kids room that grows with them.",
    scope: ["U-shaped modular kitchen", "Hinged wardrobes with lofts", "Kids room with study unit", "Crockery unit", "Complete painting"],
    materials: ["Matte and textured laminates", "Quartz countertop", "Anti-scratch shutters", "Pull-out baskets and organisers"],
    cover: images.kitchenGallery,
    gallery: [
      images.kitchenGallery,
      images.kitchenBright,
      images.kitchenSink,
      images.bedroomBoho,
      images.bedroomSoft,
      images.storageShelves,
      images.livingWhite,
      images.bedroomWhite,
      images.livingAccent,
    ],
  },
  {
    slug: "magna-solitaire-residence",
    title: "Magna Solitaire Residence",
    location: "Gachibowli, Hyderabad",
    propertyType: "Apartment",
    area: null,
    style: "Minimal",
    category: "Living Rooms",
    tags: ["Living Rooms", "Kitchens", "Minimal", "Contemporary"],
    summary:
      "Quiet luxury in a high-rise apartment — pared-back lines, handle-less storage and a soft neutral palette that lets the city views take centre stage.",
    scope: ["Open kitchen with breakfast counter", "Handle-less living storage", "Fluted glass partition", "Master wardrobe with lofts", "Profile lighting"],
    materials: ["Acrylic high-gloss shutters", "Fluted glass", "Push-to-open hardware", "Light oak laminates"],
    cover: images.livingModern,
    gallery: [
      images.livingModern,
      images.livingCalm,
      images.kitchenMinimal,
      images.livingDouble,
      images.livingGrey,
      images.bedroomLight,
      images.storageWall,
      images.livingBalcony,
      images.diningStair,
      images.consoleMirror,
    ],
  },
  {
    slug: "financial-district-penthouse",
    title: "Financial District Penthouse",
    location: "Financial District, Hyderabad",
    propertyType: "Penthouse",
    area: null,
    style: "Luxury",
    category: "Bedrooms",
    tags: ["Bedrooms", "Wardrobes", "Living Rooms", "Luxury"],
    summary:
      "A penthouse dressed for evenings — deep tones, fluted panelling, hotel-style bedrooms and a walk-in wardrobe finished like fine furniture.",
    scope: ["Master suite with headboard wall", "Walk-in wardrobe", "Lounge and bar unit", "Fluted wall panelling", "Designer false ceiling"],
    materials: ["PU-lacquered shutters", "Fluted veneer panels", "Profile glass shutters", "Warm cove LED"],
    cover: images.bedroomDark,
    gallery: [
      images.bedroomDark,
      images.bedroomGrey,
      images.livingDark,
      images.storageRoom,
      images.bedroomBlue,
      images.livingBrick,
      images.glassVanity,
      images.livingTeal,
      images.bedroomArt,
    ],
  },
  {
    slug: "elegant-modular-kitchen",
    title: "Elegant Modular Kitchen",
    location: "Mumbai",
    propertyType: "Apartment",
    area: "180 sq.ft",
    style: "Contemporary",
    category: "Kitchens",
    tags: ["Kitchens", "Contemporary"],
    summary:
      "A compact kitchen that feels generous — high-gloss shutters bounce the light around, while a tall pantry and soft-close drawers keep everything in reach.",
    scope: ["L-shaped modular kitchen", "Tall pantry unit", "Overhead and loft storage", "Countertop and backsplash"],
    materials: ["High-gloss acrylic shutters", "BWP plywood carcass", "Soft-close drawer systems", "Quartz countertop"],
    cover: images.kitchen,
    gallery: [images.kitchen, images.kitchenGrey, images.kitchenWhite, images.kitchenNavy, images.kitchenBright, images.kitchenSink, images.kitchenGallery],
  },
  {
    slug: "luxury-master-bedroom",
    title: "Luxury Master Bedroom",
    location: "Pune",
    propertyType: "Villa",
    area: "260 sq.ft",
    style: "Luxury",
    category: "Bedrooms",
    tags: ["Bedrooms", "Wardrobes", "Luxury"],
    summary:
      "A boutique-hotel bedroom at home — an upholstered headboard wall, a full-height sliding wardrobe and cove lighting that softens the whole room.",
    scope: ["Upholstered headboard wall", "Sliding wardrobe with loft", "Dresser and side tables", "Cove-lit false ceiling"],
    materials: ["PU-finish sliding shutters", "Fabric headboard panels", "Aluminium sliding track", "Warm cove LED"],
    cover: images.bedroomSuite,
    gallery: [images.bedroomSuite, images.bedroomContemporary, images.bedroomWarm, images.bedroomGrey, images.consoleRattan, images.bedroomBlue, images.storageRoom, images.bedroom],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

// Every photo across the portfolio (each photo once), used by the /gallery page.
const seen = new Set();
export const allPhotos = projects
  .flatMap((p) =>
    p.gallery.map((src, i) => ({ src, project: p.title, slug: p.slug, tags: p.tags, alt: `${p.title}, ${p.location} — photo ${i + 1}` }))
  )
  .filter((photo) => !seen.has(photo.src) && seen.add(photo.src));
