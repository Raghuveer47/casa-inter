import { Factory, Handshake, KeyRound, MessagesSquare, Wrench } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { process } from "@/data/services";
import { cn } from "@/lib/utils";

const icons = [MessagesSquare, Handshake, Factory, Wrench, KeyRound];

// Numbered 01–07 timeline. Horizontal on desktop, vertical on mobile.
export default function ProcessTimeline({ dark = false, heading = true }) {
  return (
    <section aria-labelledby={heading ? "process-title" : undefined} aria-label={heading ? undefined : "Process steps"} className={cn("section-y", dark ? "bg-night text-cream" : "theme-light")}>
      <div className="container-x">
        {heading && (
          <SectionHeading
            id="process-title"
            light={dark}
            eyebrow="How It Works"
            lines={["How It", <em key="e" className={dark ? "text-beige" : "text-earth"}>Works</em>]}
            intro="From the first meeting to move-in, with the payment at each step."
          />
        )}

        <ol className={cn("relative grid gap-10 lg:grid-cols-5 lg:gap-4", heading && "mt-16 md:mt-20")}>
          <span aria-hidden="true" className={cn("absolute left-7 top-0 h-full w-px lg:left-0 lg:top-7 lg:h-px lg:w-full", dark ? "bg-cream/15" : "bg-line")} />
          {process.map((step, i) => {
            const Icon = icons[i];
            return (
              <Reveal as="li" key={step.title} delay={i * 0.07} className="relative grid grid-cols-[3.5rem_1fr] gap-5 lg:block">
                <span className={cn("relative z-10 grid size-14 place-items-center rounded-full border", dark ? "border-gold-soft/60 bg-night text-gold-soft" : "border-gold/50 bg-paper text-gold")}>
                  <Icon aria-hidden="true" strokeWidth={1.2} className="size-6" />
                </span>
                <div className="lg:mt-6 lg:pr-2">
                  <span className={cn("text-sm font-bold", dark ? "text-gold-soft" : "text-gold")}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 text-base font-semibold leading-snug md:text-lg">{step.title}</h3>
                  <p className={cn("mt-2 text-sm leading-relaxed", dark ? "text-cream/60" : "text-muted")}>{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
