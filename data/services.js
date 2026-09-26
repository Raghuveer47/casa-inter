export const services = [
  { title: "Interior Design", description: "Thoughtful interiors designed around your lifestyle, personality and space." },
  { title: "Space Planning", description: "Layouts that make every square foot work harder, flow better and feel generous." },
  { title: "Furniture Selection", description: "Curated and bespoke pieces chosen for comfort, proportion and longevity." },
  { title: "Lighting Design", description: "Layered natural and artificial light that shapes mood from morning to night." },
  { title: "Kitchen Design", description: "Kitchens that balance precise ergonomics with warm, lasting materials." },
  { title: "Bedroom Design", description: "Calm, restorative rooms layered in texture, softness and quiet detail." },
  { title: "Complete Home Interiors", description: "One team from concept to handover, with every room designed as a whole." },
  { title: "Commercial Interiors", description: "Workplaces, studios and hospitality spaces that express your brand." },
].map((s, i) => ({ ...s, number: String(i + 1).padStart(2, "0") }));

export const process = [
  { title: "Consultation", description: "We visit your space, listen closely and understand how you live, your budget and timeline." },
  { title: "Concept", description: "Mood, material palette and spatial ideas come together as a clear design direction." },
  { title: "Design Development", description: "Detailed layouts, 3D visuals, joinery drawings and specifications for every room." },
  { title: "Execution", description: "Our site team manages craftsmen, vendors and quality — you receive weekly updates." },
  { title: "Handover", description: "Styling, a final walkthrough and a home that is ready to be lived in." },
];
