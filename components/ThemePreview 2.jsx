"use client";

import { useEffect, useState } from "react";
import { Palette, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Live theme/font switcher for reviewing designs with the client.
// Hidden for normal visitors: open any page with ?preview to turn it on for that
// tab (it stays on while browsing), ?preview=off to turn it off. Choices are only
// a preview — the site's real defaults are THEME and FONT in app/layout.js.
const THEMES = [
  { id: "mocha", label: "Mocha", swatch: ["#161210", "#c8a78a"] },
  { id: "slate", label: "Slate", swatch: ["#11151a", "#9db4cf"] },
  { id: "ocean", label: "Ocean", swatch: ["#0a1822", "#4fb4d4"] },
  { id: "plum", label: "Plum", swatch: ["#170e15", "#d99bc2"] },
  { id: "walnut", label: "Walnut", swatch: ["#141517", "#b8723f"] },
  { id: "gold", label: "Gold", swatch: ["#0c0b0a", "#c5a161"] },
  { id: "navy", label: "Navy", swatch: ["#0f1522", "#c9a46a"] },
];
const FONTS = [
  { id: "modern", label: "Modern", sample: "font-[family-name:var(--font-jakarta)] font-bold" },
  { id: "classic", label: "Classic", sample: "font-[family-name:var(--font-playfair)] font-semibold" },
  { id: "elegant", label: "Elegant", sample: "font-[family-name:var(--font-cormorant)] font-medium" },
];
const KEY = "casa-preview";

function read() {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || "null");
  } catch {
    return null;
  }
}
function write(v) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(v));
  } catch {}
}

export default function ThemePreview() {
  const [state, setState] = useState(null); // { theme, font } when preview is on
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("preview");
    if (param === "off") {
      try {
        sessionStorage.removeItem(KEY);
      } catch {}
      return;
    }
    const html = document.documentElement;
    const saved = read();
    if (param === null && !saved) return;
    setState(saved || { theme: html.dataset.theme, font: html.dataset.font });
  }, []);

  useEffect(() => {
    if (!state) return;
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.dataset.font = state.font;
    write(state);
  }, [state]);

  if (!state) return null;
  const pick = (patch) => setState((s) => ({ ...s, ...patch }));

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open design preview"
        className="fixed bottom-20 right-4 z-[70] grid size-12 place-items-center rounded-full bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
      >
        <Palette className="size-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-20 right-4 z-[70] w-[min(20rem,calc(100vw-6rem))] rounded-2xl bg-white p-4 text-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold">Design preview</p>
        <button type="button" onClick={() => setOpen(false)} aria-label="Minimise design preview" className="grid size-8 place-items-center rounded-full hover:bg-black/5">
          <X className="size-4" />
        </button>
      </div>

      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-black/50">Colours</p>
      <div className="mt-2 grid grid-cols-4 gap-1.5">
        {THEMES.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => pick({ theme: t.id })}
            aria-pressed={state.theme === t.id}
            className={cn("flex flex-col items-center gap-1 rounded-xl p-1.5 text-[0.7rem] font-semibold", state.theme === t.id ? "bg-black/10" : "hover:bg-black/5")}
          >
            <span className="flex overflow-hidden rounded-full ring-1 ring-black/15">
              <span className="size-4" style={{ background: t.swatch[0] }} />
              <span className="size-4" style={{ background: t.swatch[1] }} />
            </span>
            {t.label}
          </button>
        ))}
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-black/50">Headings</p>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {FONTS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => pick({ font: f.id })}
            aria-pressed={state.font === f.id}
            className={cn("rounded-xl p-2 text-center", state.font === f.id ? "bg-black/10" : "hover:bg-black/5")}
          >
            <span className={cn("block text-xl leading-none", f.sample)}>Aa</span>
            <span className="mt-1 block text-[0.7rem] font-semibold">{f.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
