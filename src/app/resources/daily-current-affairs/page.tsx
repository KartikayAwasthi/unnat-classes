import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Copy, Images } from "lucide-react";
import Reveal from "@/components/Reveal";
import StructuredData from "@/components/StructuredData";
import { getDailyCurrentAffairs } from "@/lib/api";
import { breadcrumbList } from "@/lib/structuredData";

const description =
  "Daily current affairs updates in pictures — quick, image-first snapshots posted by our teachers for GS Classes students.";

export const metadata: Metadata = {
  title: "Daily Current Affairs",
  description,
  alternates: { canonical: "/resources/daily-current-affairs" },
  openGraph: {
    url: "/resources/daily-current-affairs",
    title: "Daily Current Affairs | Unnat Classes",
    description,
  },
  twitter: { title: "Daily Current Affairs | Unnat Classes", description },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function DailyCurrentAffairsPage() {
  const entries = await getDailyCurrentAffairs();

  return (
    <>
      <StructuredData
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Daily Current Affairs", path: "/resources/daily-current-affairs" },
        ])}
      />
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.08]" />
        <Reveal className="relative mx-auto max-w-2xl px-5">
          <span className="text-sm font-bold uppercase tracking-widest text-gold-400">
            Resources
          </span>
          <h1 className="mt-3 font-heading text-4xl font-extrabold sm:text-5xl">
            Daily Current Affairs
          </h1>
          <p className="mt-4 text-white/70">
            Quick, image-first updates — tap a card to open it, swipe through the images, scroll for the next one.
          </p>
        </Reveal>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-3 sm:px-6">
          {entries.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-16 text-center text-navy-900/50">
              <Images className="h-10 w-10 text-gold-400" strokeWidth={1.5} />
              <p>No updates posted yet — check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-1 sm:gap-2 lg:grid-cols-4">
              {entries.map((entry, i) => (
                <Link
                  key={entry.slug}
                  href={`/resources/daily-current-affairs/${entry.slug}`}
                  className="group relative aspect-square overflow-hidden bg-navy-900"
                >
                  <Image
                    src={entry.images[0]}
                    alt={entry.caption ?? `Daily current affairs — ${formatDate(entry.date)}`}
                    fill
                    sizes="(min-width: 1024px) 280px, 33vw"
                    priority={i < 6}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {entry.images.length > 1 && (
                    <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm">
                      <Copy className="h-3.5 w-3.5" />
                    </span>
                  )}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-2.5 py-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-[11px] font-semibold text-white">
                      {formatDate(entry.date)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
