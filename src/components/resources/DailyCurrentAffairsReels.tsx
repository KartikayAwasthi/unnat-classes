"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUp, ArrowDown, Sparkles } from "lucide-react";
import ShareButton from "@/components/ShareButton";
import { SITE } from "@/lib/data";
import type { DailyCurrentAffair } from "@/lib/api";

const SWIPE_THRESHOLD = 60;
const AXIS_DEADZONE = 8;

type Props = {
  entries: DailyCurrentAffair[];
  initialSlug?: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function DailyCurrentAffairsReels({ entries, initialSlug }: Props) {
  const initialIndex = Math.max(
    0,
    initialSlug ? entries.findIndex((e) => e.slug === initialSlug) : 0
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const slide = slideRefs.current[initialIndex];
    if (container && slide) {
      container.scrollTop = slide.offsetTop;
    }
    // Intentionally only runs once on mount to jump straight to the shared slide.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (observed) => {
        for (const o of observed) {
          if (o.isIntersecting) {
            const index = slideRefs.current.indexOf(o.target as HTMLDivElement);
            if (index !== -1) setActiveIndex(index);
          }
        }
      },
      { root: container, threshold: 0.6 }
    );
    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [entries.length]);

  function goTo(index: number) {
    const clamped = Math.max(0, Math.min(index, entries.length - 1));
    slideRefs.current[clamped]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowDown") goTo(activeIndex + 1);
      if (e.key === "ArrowUp") goTo(activeIndex - 1);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, entries.length]);

  return (
    <div className="fixed inset-0 z-[70] bg-black">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-30 flex items-center justify-between gap-3 bg-gradient-to-b from-black/60 to-transparent px-4 pb-8 pt-[max(1rem,env(safe-area-inset-top))] sm:px-6">
        <Link
          href="/resources/daily-current-affairs"
          className="pointer-events-auto flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/50"
        >
          <ArrowLeft className="h-4 w-4" />
          Daily Current Affairs
        </Link>
        <span className="pointer-events-auto rounded-full bg-black/30 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur-sm">
          {activeIndex + 1} / {entries.length}
        </span>
      </div>

      <div className="hidden sm:flex sm:flex-col sm:gap-2 sm:fixed sm:right-5 sm:top-1/2 sm:z-30 sm:-translate-y-1/2">
        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous update"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 disabled:pointer-events-none disabled:opacity-20"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          disabled={activeIndex === entries.length - 1}
          aria-label="Next update"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 disabled:pointer-events-none disabled:opacity-20"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={containerRef}
        role="region"
        aria-label="Daily current affairs"
        className="no-scrollbar h-full w-full snap-y snap-mandatory overflow-y-scroll overscroll-y-contain"
      >
        {entries.map((entry, i) => (
          <ReelSlide
            key={entry.slug}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            entry={entry}
            isActive={i === activeIndex}
            priority={i === initialIndex}
          />
        ))}
      </div>
    </div>
  );
}

type SlideProps = {
  entry: DailyCurrentAffair;
  isActive: boolean;
  priority: boolean;
};

function ReelSlide({ ref, entry, isActive, priority }: SlideProps & { ref: (el: HTMLDivElement | null) => void }) {
  const [imageIndex, setImageIndex] = useState(0);
  const total = entry.images.length;

  // Reset to the first image whenever this slide (re)becomes active, following
  // React's "adjust state during render" pattern instead of an effect.
  const [wasActive, setWasActive] = useState(isActive);
  if (isActive !== wasActive) {
    setWasActive(isActive);
    if (isActive) setImageIndex(0);
  }

  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const axisLock = useRef<"x" | "y" | null>(null);
  const pendingStep = useRef<1 | -1 | 0>(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el || total <= 1) return;
    const observer = new ResizeObserver(([e]) => setTrackWidth(e.contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, [total]);

  function handlePointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    if (total <= 1) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    dragStart.current = { x: e.clientX, y: e.clientY };
    axisLock.current = null;
    setIsDragging(true);
  }

  function handlePointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;

    if (axisLock.current === null) {
      if (Math.abs(dx) < AXIS_DEADZONE && Math.abs(dy) < AXIS_DEADZONE) return;
      axisLock.current = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
    }
    if (axisLock.current !== "x") return;

    const atLeadingEdge = dx > 0 && imageIndex === 0;
    const atTrailingEdge = dx < 0 && imageIndex === total - 1;
    setDragOffset(atLeadingEdge || atTrailingEdge ? dx * 0.3 : dx);
  }

  function endDrag() {
    if (!isDragging) return;
    setIsDragging(false);

    if (axisLock.current === "x") {
      if (dragOffset <= -SWIPE_THRESHOLD && imageIndex < total - 1) {
        pendingStep.current = 1;
        setDragOffset(-trackWidth);
      } else if (dragOffset >= SWIPE_THRESHOLD && imageIndex > 0) {
        pendingStep.current = -1;
        setDragOffset(trackWidth);
      } else {
        setDragOffset(0);
      }
    } else {
      setDragOffset(0);
    }
    axisLock.current = null;
  }

  function settleTransitionEnd() {
    if (pendingStep.current !== 0) {
      setImageIndex((v) => v + pendingStep.current);
      pendingStep.current = 0;
      setDragOffset(0);
    }
  }

  const visible = [imageIndex - 1, imageIndex, imageIndex + 1].filter(
    (j) => j >= 0 && j < total
  );

  return (
    <div
      ref={ref}
      className="relative h-full w-full shrink-0 snap-start snap-always overflow-hidden bg-navy-950"
      aria-roledescription="slide"
      aria-label={entry.caption ?? `Daily current affairs — ${formatDate(entry.date)}`}
    >
      <div
        ref={trackRef}
        className="absolute inset-0 touch-pan-y"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {visible.map((j) => (
          <div
            key={j}
            onTransitionEnd={j === imageIndex ? settleTransitionEnd : undefined}
            className="absolute inset-0"
            style={{
              transform: `translateX(${(j - imageIndex) * trackWidth + dragOffset}px)`,
              transition: isDragging ? "none" : "transform 260ms ease-out",
            }}
          >
            <Image
              src={entry.images[j]}
              alt=""
              fill
              aria-hidden="true"
              sizes="100vw"
              className="scale-110 object-cover opacity-40 blur-2xl"
              draggable={false}
            />
            <Image
              src={entry.images[j]}
              alt={
                entry.caption ??
                `Daily current affairs — ${formatDate(entry.date)} — image ${j + 1} of ${total}`
              }
              fill
              sizes="100vw"
              priority={priority && j === 0}
              className="object-contain"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {total > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-28 z-20 flex justify-center gap-1.5 sm:bottom-32">
          {entry.images.map((_, j) => (
            <span
              key={j}
              className={`h-1.5 w-1.5 rounded-full transition-all ${
                j === imageIndex ? "w-4 bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-16 sm:px-8">
        <div className="pointer-events-auto flex items-end justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gold-400">
              <Sparkles className="h-3.5 w-3.5" />
              {formatDate(entry.date)}
            </div>
            {entry.caption && (
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
                {entry.caption}
              </p>
            )}
          </div>
          <ShareButton
            variant="icon"
            title={entry.caption ?? "Daily Current Affairs — Unnat Classes"}
            text={entry.caption ?? undefined}
            url={`${SITE.url}/resources/daily-current-affairs/${entry.slug}`}
            className="shrink-0 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
          />
        </div>
      </div>
    </div>
  );
}
