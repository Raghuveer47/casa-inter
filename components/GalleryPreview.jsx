import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Shows the first few photos in a classic mosaic. When there are more photos than
// tiles, the last tile shows "+N more" and links to the full gallery page.
export default function GalleryPreview({ photos, href, alt, visible = 5, className }) {
  const tiles = photos.slice(0, visible);
  const hidden = photos.length - tiles.length;
  const layout = ["md:col-span-2 md:row-span-2", "", "", "", ""];

  return (
    <ul className={cn("grid auto-rows-[42vw] grid-cols-2 gap-3 sm:auto-rows-[30vw] md:auto-rows-[15vw] md:grid-cols-4 md:gap-4 min-[1440px]:auto-rows-[216px]", className)}>
      {tiles.map((src, i) => {
        const isLast = i === tiles.length - 1 && hidden > 0;
        return (
          <li key={src} className={cn("relative overflow-hidden bg-sand", i === 0 && "col-span-2", layout[i])}>
            <Link href={href} className="group block size-full" aria-label={isLast ? `View all ${photos.length} photos` : `Open gallery — ${alt} photo ${i + 1}`}>
              <Image src={src} alt={`${alt} — photo ${i + 1}`} fill sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"} className="object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.05]" />
              {isLast && (
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-night/60 text-cream transition-colors duration-500 group-hover:bg-night/70">
                  <span className="font-serif text-5xl font-light md:text-6xl">+{hidden}</span>
                  <span className="eyebrow text-gold-soft">View all photos</span>
                </span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
