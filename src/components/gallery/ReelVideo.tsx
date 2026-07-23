"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play, Volume2, VolumeX, X } from "lucide-react";

type ReelVideoProps = {
  src: string;
  poster: string;
  alt: string;
  width: number;
  height: number;
};

export default function ReelVideo({ src, poster, alt, width, height }: ReelVideoProps) {
  const [open, setOpen] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full"
        aria-label={`Play video: ${alt}`}
      >
        <Image
          src={poster}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-navy-950 shadow-lg">
            <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
          </span>
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
          <video
            src={src}
            poster={poster}
            autoPlay
            loop
            playsInline
            muted={muted}
            onClick={() => setMuted((m) => !m)}
            className="h-full max-h-screen w-full object-contain sm:mx-auto sm:aspect-[9/16] sm:w-auto"
          />

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close video"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? "Unmute video" : "Mute video"}
            className="absolute bottom-6 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </div>
      )}
    </>
  );
}
