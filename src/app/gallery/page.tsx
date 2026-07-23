import type { Metadata } from "next";
import Image from "next/image";
import { Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/data";

const description =
  "A glimpse into the classroom at Unnat Classes — real moments from lessons and teaching sessions.";

export const metadata: Metadata = {
  title: "Gallery",
  description,
  alternates: { canonical: "/gallery" },
  openGraph: { url: "/gallery", title: "Gallery | Unnat Classes", description },
  twitter: { title: "Gallery | Unnat Classes", description },
};

const media = [
  {
    type: "image" as const,
    src: "/images/gallery/classroom-1.jpg",
    width: 960,
    height: 1280,
    alt: "Tanuja Singh teaching in the classroom",
  },
  {
    type: "video" as const,
    src: "/videos/gallery/teachers-day.mp4",
    poster: "/images/gallery/teachers-day-poster.jpg",
    width: 720,
    height: 1280,
    alt: "Tanuja Singh speaking at the Teacher's Day celebration",
  },
  {
    type: "image" as const,
    src: "/images/gallery/classroom-2.jpg",
    width: 720,
    height: 1280,
    alt: "Tanuja Singh at her desk between classes",
  },
  {
    type: "image" as const,
    src: "/images/gallery/classroom-4.jpg",
    width: 786,
    height: 1280,
    alt: "Tanuja Singh at the Teacher's Day celebration",
  },
  {
    type: "image" as const,
    src: "/images/gallery/classroom-3.jpg",
    width: 720,
    height: 1280,
    alt: "Tanuja Singh at the lectern during a lesson",
  },
  {
    type: "image" as const,
    src: "/images/gallery/classroom-5.jpg",
    width: 1280,
    height: 960,
    alt: "Tanuja Singh celebrating a student's birthday with the class",
  },
  {
    type: "image" as const,
    src: "/images/gallery/classroom-6.jpg",
    width: 720,
    height: 1280,
    alt: "Tanuja Singh sharing cake with a student",
  },
  {
    type: "image" as const,
    src: "/images/gallery/classroom-7.jpg",
    width: 720,
    height: 1280,
    alt: "Tanuja Singh being fed cake by a student",
  },
  {
    type: "image" as const,
    src: "/images/gallery/classroom-8.jpg",
    width: 720,
    height: 1280,
    alt: "Tanuja Singh giving a gift to a student",
  },
  {
    type: "image" as const,
    src: "/images/gallery/classroom-9.jpg",
    width: 720,
    height: 1280,
    alt: "Tanuja Singh with students at a class celebration",
  },
  {
    type: "image" as const,
    src: "/images/gallery/classroom-10.jpg",
    width: 1280,
    height: 720,
    alt: "Tanuja Singh posing with a group of students",
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.08]" />
        <Reveal className="relative mx-auto max-w-2xl px-5">
          <span className="text-sm font-bold uppercase tracking-widest text-gold-400">
            Gallery
          </span>
          <h1 className="mt-3 font-heading text-4xl font-extrabold sm:text-5xl">
            Life at Unnat Classes
          </h1>
          <p className="mt-4 text-white/70">
            Real moments from our classroom, lessons, and teaching sessions.
          </p>
        </Reveal>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {media.map((item, i) => (
              <Reveal
                key={item.src}
                delay={i * 0.08}
                className="group mb-6 block break-inside-avoid overflow-hidden rounded-2xl shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl"
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    poster={item.poster}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-auto w-full"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 py-16 text-center text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.06]" />
        <Reveal className="relative mx-auto max-w-2xl px-5">
          <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">
            {SITE.admissionsNote}
          </h2>
          <a
            href={SITE.phoneHref}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-4 text-base font-bold text-navy-950 shadow-lg shadow-gold-500/30 transition-transform hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            Call Us Now — {SITE.phone}
          </a>
        </Reveal>
      </section>
    </>
  );
}
