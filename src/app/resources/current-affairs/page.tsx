import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getCurrentAffairs } from "@/lib/api";

const description =
  "Regular current affairs updates for GS Classes and competitive exam aspirants, posted by our teachers.";

export const metadata: Metadata = {
  title: "Current Affairs",
  description,
  alternates: { canonical: "/resources/current-affairs" },
  openGraph: {
    url: "/resources/current-affairs",
    title: "Current Affairs | Unnat Classes",
    description,
  },
  twitter: { title: "Current Affairs | Unnat Classes", description },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function CurrentAffairsPage() {
  const currentAffairs = await getCurrentAffairs();

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.08]" />
        <Reveal className="relative mx-auto max-w-2xl px-5">
          <span className="text-sm font-bold uppercase tracking-widest text-gold-400">
            Resources
          </span>
          <h1 className="mt-3 font-heading text-4xl font-extrabold sm:text-5xl">
            Current Affairs
          </h1>
          <p className="mt-4 text-white/70">
            Stay updated with the latest events — curated for GS Classes students.
          </p>
        </Reveal>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {currentAffairs.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.08}>
                <Link
                  href={`/resources/current-affairs/${item.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/5 bg-cream shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-navy-900">
                    {item.coverImageUrl ? (
                      <Image
                        src={item.coverImageUrl}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <Newspaper className="h-12 w-12 text-gold-400" />
                      </div>
                    )}
                    <span className="absolute left-4 top-4 rounded-full bg-gold-400/95 px-3 py-1 text-xs font-bold text-navy-950 shadow-sm">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="text-xs font-semibold text-navy-900/40">
                      {formatDate(item.date)}
                    </span>
                    <h2 className="mt-2 font-heading text-lg font-bold text-navy-900">
                      {item.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-900/60">
                      {item.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-600 transition-transform group-hover:translate-x-1">
                      Read more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
