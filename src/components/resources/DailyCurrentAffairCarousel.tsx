"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

type Props = {
  images: string[];
  alt: string;
  priority?: boolean;
};

export default function DailyCurrentAffairCarousel({ images, alt, priority }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

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
          <button
            key={src + i}
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label="View full size image"
            className="group/image relative aspect-square w-full shrink-0 snap-center"
          >
            <Image
              src={src}
              alt={`${alt} — image ${i + 1} of ${images.length}`}
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-contain"
              priority={priority && i === 0}
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover/image:bg-black/10 group-hover/image:opacity-100">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-950 shadow-md">
                <ZoomIn className="h-4 w-4" />
              </span>
            </span>
          </button>
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

      {lightboxOpen && (
        <ImageLightbox
          images={images}
          index={active}
          alt={alt}
          onClose={() => setLightboxOpen(false)}
          onIndexChange={setActive}
        />
      )}
    </div>
  );
}
