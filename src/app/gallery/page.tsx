import type { Metadata } from "next";
import Image from "next/image";
import { Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import ReelVideo from "@/components/gallery/ReelVideo";
import StructuredData from "@/components/StructuredData";
import { SITE } from "@/lib/data";
import { galleryMedia } from "@/lib/gallery";
import { breadcrumbList } from "@/lib/structuredData";

const description =
  "A glimpse into the classroom at Unnat Classes — real moments from lessons and teaching sessions.";

export const metadata: Metadata = {
  title: "Gallery",
  description,
  alternates: { canonical: "/gallery" },
  openGraph: { url: "/gallery", title: "Gallery | Unnat Classes", description },
  twitter: { title: "Gallery | Unnat Classes", description },
};

// Re-render on every request (instead of serving a statically built page)
// so the shuffled order below is actually different on each page load.
export const dynamic = "force-dynamic";

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function GalleryPage() {
  const shuffledMedia = shuffle(galleryMedia);

  return (
    <>
      <StructuredData
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
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
            {shuffledMedia.map((item, i) => (
              <Reveal
                key={item.src}
                delay={i * 0.08}
                className="group mb-6 block break-inside-avoid overflow-hidden rounded-2xl shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl"
              >
                {item.type === "video" ? (
                  <ReelVideo
                    src={item.src}
                    poster={item.poster!}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
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
            href={SITE.emailHref}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-4 text-base font-bold text-navy-950 shadow-lg shadow-gold-500/30 transition-transform hover:scale-105"
          >
            <Mail className="h-5 w-5" />
            Email Us — {SITE.email}
          </a>
        </Reveal>
      </section>
    </>
  );
}
