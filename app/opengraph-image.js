import { ImageResponse } from "next/og";

export const alt = "CasaArt — Design Better. Build Better. Live Better.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#1c1814",
          color: "#f3eee5",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 44, letterSpacing: 10 }}>CASAART</div>
          <div style={{ fontSize: 16, letterSpacing: 18, marginTop: 6, color: "#c9a86a" }}>INTERIORS</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 92, lineHeight: 1, fontWeight: 300 }}>
          <div>Design Better.</div>
          <div style={{ fontStyle: "italic", color: "#c9a86a" }}>Build Better.</div>
        </div>
      </div>
    ),
    size
  );
}
