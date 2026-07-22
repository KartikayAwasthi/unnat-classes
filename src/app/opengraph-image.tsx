import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";
import { SITE } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/images/logo.png"),
    "base64"
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

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
        <img
          src={logoSrc}
          width={120}
          height={120}
          style={{ borderRadius: 9999, marginBottom: 32 }}
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
