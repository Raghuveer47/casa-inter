import { images } from "./images";

export const articles = [
  {
    slug: "make-your-living-room-feel-larger",
    category: "Living",
    title: "5 Ways To Make Your Living Room Feel Larger",
    date: "2026-08-18",
    readTime: "4 min read",
    image: images.articleLiving,
    excerpt: "Scale, light and restraint do more for a compact living room than any single piece of furniture.",
    body: [
      "Choose furniture that sits off the floor. Sofas and consoles on slender legs let the eye travel beneath them, which reads as more floor area and a lighter room.",
      "Keep a tight, tonal palette. When walls, curtains and large upholstery share a family of warm neutrals, edges soften and the room feels continuous rather than divided.",
      "Hang curtains high and wide. Mounting rods close to the ceiling and extending them past the window frame makes both the window and the ceiling height feel generous.",
      "Use one large rug instead of several small ones. A rug that holds the front legs of every seat anchors the arrangement and visually widens the room.",
      "Edit, then edit again. Fewer, better objects with room to breathe will always feel more spacious than a crowded shelf.",
    ],
  },
  {
    slug: "choose-the-right-lighting",
    category: "Lighting",
    title: "How To Choose The Right Lighting For Your Home",
    date: "2026-07-29",
    readTime: "5 min read",
    image: images.articleLighting,
    excerpt: "Good lighting is layered: ambient, task and accent working together through the day.",
    body: [
      "Start with ambient light. Cove lighting, ceiling fixtures or well-placed downlights provide an even base so the room never feels gloomy.",
      "Add task lighting where you work, read or cook. Under-cabinet strips in the kitchen and a focused reading lamp beside a chair make everyday tasks comfortable.",
      "Finish with accent light. Wall washers, picture lights and a single sculptural lamp create depth and draw attention to texture and art.",
      "Mind the colour temperature. Warm white (2700K–3000K) suits living spaces and bedrooms; slightly cooler light can work in kitchens and studies.",
      "Put everything on dimmers. The same room can feel bright and practical at noon and calm and intimate in the evening.",
    ],
  },
  {
    slug: "modern-interior-trends",
    category: "Trends",
    title: "Modern Interior Trends For Contemporary Homes",
    date: "2026-07-02",
    readTime: "6 min read",
    image: images.articleTrends,
    excerpt: "Warm minimalism, honest materials and softer silhouettes are shaping the contemporary home.",
    body: [
      "Warm minimalism has replaced stark white interiors. Expect clean lines paired with oak, travertine, linen and limewashed walls.",
      "Curves are softening rooms. Rounded sofas, arched openings and pill-shaped mirrors balance the geometry of modern architecture.",
      "Materials are being celebrated honestly. Fluted wood, textured plaster and natural stone are left visible rather than hidden behind glossy finishes.",
      "Homes are becoming more flexible. Studies that double as guest rooms and dining tables that work as desks reflect how we now live.",
      "Craft matters again. Handmade lighting, locally made furniture and one-off objects give a home character that cannot be bought off a shelf.",
    ],
  },
];

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}
