"use client";

import { useEffect, useState } from "react";
import { PlayCircle, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import ShareButton from "@/components/ShareButton";
import type { Video } from "@/lib/api";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function VideosGrid({ videos }: { videos: Video[] }) {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  useEffect(() => {
    if (!activeVideo) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveVideo(null);
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  if (videos.length === 0) {
    return (
      <p className="text-center text-sm text-navy-900/50">
        No videos published yet — check back soon.
      </p>
    );
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, i) => (
          <Reveal
            key={video.slug}
            delay={i * 0.08}
            className="flex flex-col overflow-hidden rounded-2xl border border-navy-900/5 bg-cream shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl"
          >
            <button
              type="button"
              onClick={() => setActiveVideo(video)}
              className="group relative block aspect-video w-full overflow-hidden bg-navy-950"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-navy-950/30 transition-colors group-hover:bg-navy-950/40">
                <PlayCircle className="h-14 w-14 text-white drop-shadow-lg" strokeWidth={1.5} />
              </span>
            </button>

            <div className="flex flex-1 flex-col p-7">
              <span className="w-fit rounded-full bg-gold-400/20 px-3 py-1 text-xs font-bold text-gold-600">
                {video.category}
              </span>

              <h2 className="mt-3 font-heading text-lg font-bold text-navy-900">{video.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-900/60">
                {video.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-navy-900/10 pt-4">
                <span className="text-xs text-navy-900/40">{formatDate(video.date)}</span>
                <button
                  type="button"
                  onClick={() => setActiveVideo(video)}
                  className="flex items-center gap-1.5 rounded-full bg-navy-900 px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <PlayCircle className="h-3.5 w-3.5 text-gold-400" />
                  Watch
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/70 p-4 sm:p-8"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-navy-900/10 p-4">
              <h3 className="truncate font-heading text-base font-bold text-navy-900">
                {activeVideo.title}
              </h3>
              <div className="flex shrink-0 items-center gap-2">
                <ShareButton
                  title={activeVideo.title}
                  text={`${activeVideo.title} — free video from Unnat Classes`}
                  url={activeVideo.youtubeUrl}
                  variant="icon"
                />
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  aria-label="Close"
                  className="rounded-full p-1.5 text-navy-900/50 transition-colors hover:bg-navy-900/5 hover:text-navy-900"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                key={activeVideo.videoId}
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
