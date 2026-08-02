"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

type Props = {
  images: string[];
  alt: string;
};

export default function DailyCurrentAffairImageStack({ images, alt }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const singleImage = images.length === 1;

  return (
    <div className={singleImage ? "" : "grid grid-cols-2 gap-2.5 sm:grid-cols-3"}>
      {images.map((src, i) => (
        <button
          key={src + i}
          type="button"
          onClick={() => setLightboxIndex(i)}
          aria-label={`View image ${i + 1} of ${images.length} full size`}
          className={
            singleImage
              ? "group/image relative h-[70vh] w-full overflow-hidden rounded-2xl bg-navy-900 sm:h-[560px]"
              : "group/image relative aspect-square w-full overflow-hidden rounded-xl bg-navy-900"
          }
        >
          <Image
            src={src}
            alt={`${alt} — image ${i + 1} of ${images.length}`}
            fill
            sizes={singleImage ? "(min-width: 1024px) 672px, 100vw" : "(min-width: 1024px) 220px, 33vw"}
            className={singleImage ? "object-contain" : "object-cover"}
            priority={i === 0}
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover/image:bg-black/10 group-hover/image:opacity-100">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy-950 shadow-md">
              <ZoomIn className="h-5 w-5" />
            </span>
          </span>
        </button>
      ))}

      {lightboxIndex !== null && (
        <ImageLightbox
          images={images}
          index={lightboxIndex}
          alt={alt}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </div>
  );
}
