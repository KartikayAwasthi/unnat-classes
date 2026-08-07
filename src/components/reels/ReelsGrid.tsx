"use client";

import { useEffect, useState } from "react";
import { Camera, Film, Play, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import type { ReelItem } from "@/lib/reels";
import InstagramEmbed from "./InstagramEmbed";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function ReelsGrid({ items }: { items: ReelItem[] }) {
  const [activeItem, setActiveItem] = useState<ReelItem | null>(null);

  useEffect(() => {
    if (!activeItem) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveItem(null);
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  if (items.length === 0) {
    return (
      <p className="text-center text-sm text-navy-900/50">
        No reels published yet — check back soon.
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal
            key={item.id}
            delay={i * 0.06}
            className="flex flex-col overflow-hidden rounded-2xl border border-navy-900/5 bg-cream shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl"
          >
            <button
              type="button"
              onClick={() => setActiveItem(item)}
              className="group relative block aspect-[9/16] w-full overflow-hidden bg-navy-950"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.thumbnailUrl}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-navy-950/25 transition-colors group-hover:bg-navy-950/40">
                {(item.source === "youtube" || item.kind === "reel") && (
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-navy-950 shadow-lg">
                    <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
                  </span>
                )}
              </span>
              <span className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-navy-950 shadow">
                {item.source === "instagram" ? <Camera className="h-3.5 w-3.5" /> : <Film className="h-3.5 w-3.5" />}
              </span>
            </button>

            <div className="flex flex-1 flex-col p-3">
              <p className="line-clamp-2 text-xs font-semibold text-navy-900">{item.title}</p>
              <span className="mt-auto pt-2 text-[11px] text-navy-900/40">{formatDate(item.date)}</span>
            </div>
          </Reveal>
        ))}
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/80 p-4 sm:p-8"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-navy-900/10 p-4">
              <h3 className="truncate font-heading text-base font-bold text-navy-900">{activeItem.title}</h3>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                aria-label="Close"
                className="shrink-0 rounded-full p-1.5 text-navy-900/50 transition-colors hover:bg-navy-900/5 hover:text-navy-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {activeItem.source === "instagram" ? (
              <div className="p-2">
                <InstagramEmbed permalink={activeItem.permalink} />
                {activeItem.caption && (
                  <p className="px-3 pb-3 pt-1 text-sm leading-relaxed text-navy-900/70">{activeItem.caption}</p>
                )}
              </div>
            ) : (
              <>
                <div className="aspect-[9/16] w-full bg-black">
                  <iframe
                    key={activeItem.videoId}
                    src={`https://www.youtube.com/embed/${activeItem.videoId}?autoplay=1`}
                    title={activeItem.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                {activeItem.description && (
                  <p className="px-4 pb-4 pt-3 text-sm leading-relaxed text-navy-900/70">{activeItem.description}</p>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
