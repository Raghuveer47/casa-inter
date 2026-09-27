import { trustedBy } from "@/data/brand";

// "Trusted By" logo marquee on black, as on the client's reference design.
// The logos are drawn for dark backgrounds, so they show in their own colours.
// Pauses on hover and stops moving for visitors who prefer reduced motion.
export default function TrustedStrip() {
  const row = [...trustedBy, ...trustedBy];
  return (
    <section aria-labelledby="trusted-title" className="bg-[#060606] py-12 md:pb-16 md:pt-14">
      <div className="container-x">
        <h2 id="trusted-title" className="text-center font-serif text-2xl text-white md:text-3xl">
          Trusted By
        </h2>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)] md:mt-10">
          <ul className="flex w-max animate-[marquee_34s_linear_infinite] items-center hover:[animation-play-state:paused] motion-reduce:animate-none">
            {row.map((b, i) => (
              <li key={`${b.name}-${i}`} aria-hidden={i >= trustedBy.length} className="flex h-14 shrink-0 items-center pr-14 md:h-16 md:pr-20">
                {b.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={b.logo} alt={b.name} loading="lazy" className="h-10 w-auto max-w-44 object-contain opacity-95 md:h-[42px]" />
                ) : (
                  <span className="whitespace-nowrap text-xl font-semibold tracking-tight text-white md:text-2xl">{b.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
