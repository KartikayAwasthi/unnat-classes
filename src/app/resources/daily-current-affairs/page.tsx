import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";
import Reveal from "@/components/Reveal";
import ShareButton from "@/components/ShareButton";
import DailyCurrentAffairCarousel from "@/components/resources/DailyCurrentAffairCarousel";
import { getDailyCurrentAffairs } from "@/lib/api";
import { SITE } from "@/lib/data";

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
            Quick, image-first updates — swipe through each day&apos;s highlights.
          </p>
        </Reveal>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {entries.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-16 text-center text-navy-900/50">
              <Images className="h-10 w-10 text-gold-400" strokeWidth={1.5} />
              <p>No updates posted yet — check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
              {entries.map((entry, i) => (
                <Reveal key={entry.slug} delay={i * 0.06}>
                  <article className="overflow-hidden rounded-2xl border border-navy-900/5 bg-cream shadow-sm">
                    <DailyCurrentAffairCarousel
                      images={entry.images}
                      alt={entry.caption ?? `Daily current affairs — ${formatDate(entry.date)}`}
                      priority={i === 0}
                    />
                    <div className="flex flex-col gap-2 p-6">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs font-semibold text-navy-900/40">
                          {formatDate(entry.date)}
                        </span>
                        <ShareButton
                          variant="icon"
                          title={entry.caption ?? "Daily Current Affairs — Unnat Classes"}
                          text={entry.caption ?? undefined}
                          url={`${SITE.url}/resources/daily-current-affairs/${entry.slug}`}
                        />
                      </div>
                      {entry.caption && (
                        <p className="text-sm leading-relaxed text-navy-900/70">{entry.caption}</p>
                      )}
                      <Link
                        href={`/resources/daily-current-affairs/${entry.slug}`}
                        className="mt-1 inline-flex items-center gap-1 self-start text-sm font-semibold text-gold-600 transition-transform hover:translate-x-1"
                      >
                        View post <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
