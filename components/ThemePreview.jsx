"use client";

import { useEffect, useState } from "react";
import { Palette, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Live colour-theme switcher for reviewing designs with the client.
// Hidden for normal visitors: open any page with ?preview to turn it on for that
// tab (it stays on while browsing), ?preview=off to turn it off. Choices are only
// a preview — the site's real default is THEME in app/layout.js.
const THEMES = [
  { id: "mocha", label: "Mocha", swatch: ["#161210", "#c8a78a"] },
  { id: "ink", label: "Ink", swatch: ["#111111", "#ebe6dc"] },
  { id: "burgundy", label: "Burgundy", swatch: ["#1c0e11", "#d9a9a2"] },
  { id: "indigo", label: "Indigo", swatch: ["#10121f", "#a9b1ff"] },
];
const KEY = "casa-preview-theme";

export default function ThemePreview() {
  const [theme, setTheme] = useState(null); // set when preview is on
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("preview");
    try {
      if (param === "off") return sessionStorage.removeItem(KEY);
      const saved = sessionStorage.getItem(KEY);
      if (param === null && !saved) return;
      setTheme(saved || document.documentElement.dataset.theme);
    } catch {}
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.dataset.theme = theme;
    try {
      sessionStorage.setItem(KEY, theme);
    } catch {}
  }, [theme]);

  if (!theme) return null;

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open colour preview"
        className="fixed bottom-20 right-4 z-[70] grid size-12 place-items-center rounded-full bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
      >
        <Palette className="size-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-20 right-4 z-[70] w-[min(19rem,calc(100vw-2rem))] rounded-2xl bg-white p-4 text-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold">Colour preview</p>
        <button type="button" onClick={() => setOpen(false)} aria-label="Minimise colour preview" className="grid size-8 place-items-center rounded-full hover:bg-black/5">
          <X className="size-4" />
        </button>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {THEMES.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTheme(t.id)}
            aria-pressed={theme === t.id}
            className={cn("flex flex-col items-center gap-1.5 rounded-xl p-2 text-[0.7rem] font-semibold", theme === t.id ? "bg-black/10" : "hover:bg-black/5")}
          >
            <span className="flex overflow-hidden rounded-full ring-1 ring-black/15">
              <span className="size-5" style={{ background: t.swatch[0] }} />
              <span className="size-5" style={{ background: t.swatch[1] }} />
            </span>
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
