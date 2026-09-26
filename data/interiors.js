import { images } from "./images";

export const featuredInteriors = [
  { title: "Modern Living", location: "Jubilee Hills, Hyderabad", category: "Living Room", image: images.modernLiving },
  { title: "Contemporary Bedroom", location: "Kondapur, Hyderabad", category: "Bedroom", image: images.contemporaryBedroom },
  { title: "Minimal Kitchen", location: "Gachibowli, Hyderabad", category: "Kitchen", image: images.minimalKitchen },
  { title: "Luxury Residence", location: "Kokapet, Hyderabad", category: "Complete Home", image: images.luxuryResidence },
];

// Before/after pairs. Provide a real `before` photo for each room; when it is
// omitted the slider falls back to a desaturated copy of `after` as a placeholder.
export const beforeAfter = [
  { room: "Living Room", location: "Banjara Hills", before: images.beforeShell, after: images.living },
  { room: "Kitchen", location: "Madhapur", before: images.beforeKitchen, after: images.kitchen },
  { room: "Bedroom", location: "Manikonda", before: images.beforeBedroom, after: images.bedroom },
];
