"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

const EMBED_SCRIPT_SRC = "https://www.instagram.com/embed.js";

function loadEmbedScript(): Promise<void> {
  if (window.instgrm) return Promise.resolve();

  const existing = document.querySelector<HTMLScriptElement>(`script[src="${EMBED_SCRIPT_SRC}"]`);
  if (existing) {
    return new Promise((resolve) => {
      if (window.instgrm) resolve();
      else existing.addEventListener("load", () => resolve());
    });
  }

  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = EMBED_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
}

export default function InstagramEmbed({ permalink }: { permalink: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    loadEmbedScript().then(() => {
      if (!cancelled) window.instgrm?.Embeds.process();
    });
    return () => {
      cancelled = true;
    };
  }, [permalink]);

  return (
    <div ref={containerRef} className="flex w-full justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
        style={{ margin: 0, width: "100%", maxWidth: 540, minWidth: 280 }}
      />
    </div>
  );
}
