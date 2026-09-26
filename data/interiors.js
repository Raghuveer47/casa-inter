import { images } from "./images";

// Before (bare shell) → after (finished CasaArt interior) pairs for the comparison slider.
// Replace with photos of the same room before and after, or with 3D renders vs final photos.
export const designToReality = [
  { room: "Living Room", project: "The Nagole Villa", before: "/images/before-shell.jpg", after: images.livingLuxury },
  { room: "Kitchen", project: "Elegant Modular Kitchen", before: "/images/before-kitchen.jpg", after: images.kitchen },
  { room: "Bedroom", project: "Luxury Master Bedroom", before: "/images/before-bedroom.jpg", after: images.bedroomSuite },
];
