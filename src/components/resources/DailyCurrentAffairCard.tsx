"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Copy } from "lucide-react";
import type { DailyCurrentAffair } from "@/lib/api";

const SWIPE_THRESHOLD = 30;
const AXIS_DEADZONE = 8;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

type Props = {
  entry: DailyCurrentAffair;
  priority: boolean;
};

export default function DailyCurrentAffairCard({ entry, priority }: Props) {
  const total = entry.images.length;
  const [previewIndex, setPreviewIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  function step(delta: 1 | -1) {
    setPreviewIndex((v) => Math.max(0, Math.min(total - 1, v + delta)));
  }

  // Lets a multi-image card be browsed by swipe without opening the post —
  // native listeners (not React's onTouchMove) so preventDefault actually
  // works, stopping the page from scrolling while the thumbnail is swiped.
  useEffect(() => {
    const el = cardRef.current;
    if (!el || total <= 1) return;

    const start = { x: 0, y: 0 };
    let axis: "x" | "y" | null = null;

    function onTouchStart(e: TouchEvent) {
      const t = e.touches[0];
      start.x = t.clientX;
      start.y = t.clientY;
      axis = null;
    }

    function onTouchMove(e: TouchEvent) {
      const t = e.touches[0];
      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;
      if (axis === null) {
        if (Math.abs(dx) < AXIS_DEADZONE && Math.abs(dy) < AXIS_DEADZONE) return;
        axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      }
      if (axis === "x") e.preventDefault();
    }

    function onTouchEnd(e: TouchEvent) {
      if (axis !== "x") return;
      const t = e.changedTouches[0];
      const dx = t.clientX - start.x;
      if (dx <= -SWIPE_THRESHOLD) step(1);
      else if (dx >= SWIPE_THRESHOLD) step(-1);
    }

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  const label = entry.caption ?? `Daily current affairs — ${formatDate(entry.date)}`;

  return (
    <div
      ref={cardRef}
      className="group relative aspect-square overflow-hidden rounded-lg border border-navy-900/10 bg-navy-900"
    >
      <Link href={`/resources/daily-current-affairs/${entry.slug}`} className="absolute inset-0 z-0" aria-label={label}>
        <Image
          src={entry.images[previewIndex]}
          alt={label}
          fill
          sizes="(min-width: 1024px) 280px, 33vw"
          priority={priority && previewIndex === 0}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          draggable={false}
        />
      </Link>

      {total > 1 && (
        <>
          {previewIndex > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
              className="absolute inset-y-0 left-0 z-10 flex w-1/4 items-center justify-start pl-1"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-white opacity-70 transition-opacity group-hover:opacity-100">
                <ChevronLeft className="h-4 w-4" />
              </span>
            </button>
          )}
          {previewIndex < total - 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
              className="absolute inset-y-0 right-0 z-10 flex w-1/4 items-center justify-end pr-1"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-white opacity-70 transition-opacity group-hover:opacity-100">
                <ChevronRight className="h-4 w-4" />
              </span>
            </button>
          )}

          <span className="pointer-events-none absolute right-2 top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm">
            <Copy className="h-3.5 w-3.5" />
          </span>

          <div className="pointer-events-none absolute inset-x-0 bottom-1.5 z-10 flex justify-center gap-1">
            {entry.images.map((_, j) => (
              <span
                key={j}
                className={`h-1 rounded-full transition-all ${
                  j === previewIndex ? "w-3 bg-white" : "w-1 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 bg-gradient-to-t from-black/75 to-transparent px-2.5 py-2 opacity-0 transition-opacity group-hover:opacity-100">
        <span className="text-[11px] font-semibold text-white">{formatDate(entry.date)}</span>
      </div>
    </div>
  );
}
