"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  alt: string;
  priority?: boolean;
};

export default function DailyCurrentAffairCarousel({ images, alt, priority }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function scrollToIndex(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, images.length - 1));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  }

  return (
    <div className="group/carousel relative w-full select-none overflow-hidden rounded-2xl bg-navy-900">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="no-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
      >
        {images.map((src, i) => (
          <div key={src + i} className="relative aspect-square w-full shrink-0 snap-center">
            <Image
              src={src}
              alt={`${alt} — image ${i + 1} of ${images.length}`}
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover"
              priority={priority && i === 0}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => scrollToIndex(active - 1)}
            aria-label="Previous image"
            disabled={active === 0}
            className="absolute left-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-navy-950 opacity-0 shadow-md transition-opacity group-hover/carousel:opacity-100 disabled:pointer-events-none disabled:opacity-0 sm:flex"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(active + 1)}
            aria-label="Next image"
            disabled={active === images.length - 1}
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-navy-950 opacity-0 shadow-md transition-opacity group-hover/carousel:opacity-100 disabled:pointer-events-none disabled:opacity-0 sm:flex"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2 py-0.5 text-xs font-semibold text-white">
            {active + 1}/{images.length}
          </span>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-4 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
