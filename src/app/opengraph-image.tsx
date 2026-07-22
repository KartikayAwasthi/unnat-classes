import { ImageResponse } from "next/og";
import { SITE } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1e45",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 88,
            height: 88,
            borderRadius: 9999,
            background: "#f2a71b",
            marginBottom: 32,
          }}
        />
        <div style={{ display: "flex", fontSize: 72, fontWeight: 800, letterSpacing: -1 }}>
          UNNAT <span style={{ color: "#f2a71b", marginLeft: 20 }}>CLASSES</span>
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 32, color: "rgba(255,255,255,0.75)" }}>
          {SITE.tagline}
        </div>
        <div style={{ display: "flex", marginTop: 12, fontSize: 24, color: "rgba(255,255,255,0.55)" }}>
          {SITE.classesNote}
        </div>
      </div>
    ),
    { ...size }
  );
}
