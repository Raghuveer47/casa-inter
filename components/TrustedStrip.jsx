import { communities } from "@/data/brand";

// Slow, looping marquee of communities CasaArt has worked in. Pauses on hover
// and stops moving for visitors who prefer reduced motion.
export default function TrustedStrip() {
  const row = [...communities, ...communities];
  return (
    <section aria-label="Communities we have worked in" className="border-y border-line bg-night py-6">
      <div className="container-x flex items-center gap-6">
        <p className="eyebrow shrink-0 text-gold">Trusted in</p>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <ul className="flex w-max animate-[marquee_38s_linear_infinite] gap-10 hover:[animation-play-state:paused] motion-reduce:animate-none">
            {row.map((c, i) => (
              <li key={`${c}-${i}`} aria-hidden={i >= communities.length} className="flex items-center gap-10 whitespace-nowrap font-serif text-xl text-cream/80 md:text-2xl">
                {c}
                <span aria-hidden="true" className="size-1.5 rotate-45 bg-gold/70" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
