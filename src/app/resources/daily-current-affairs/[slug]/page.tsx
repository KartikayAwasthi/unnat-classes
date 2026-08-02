import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import ShareButton from "@/components/ShareButton";
import DailyCurrentAffairCarousel from "@/components/resources/DailyCurrentAffairCarousel";
import { getDailyCurrentAffairBySlug, getDailyCurrentAffairs } from "@/lib/api";

type Params = { slug: string };

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function generateStaticParams() {
  const entries = await getDailyCurrentAffairs();
  return entries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await getDailyCurrentAffairBySlug(slug);
  if (!item) return {};
  const title = item.caption ?? `Daily Current Affairs — ${formatDate(item.date)}`;
  const description = item.caption ?? `Daily current affairs update for ${formatDate(item.date)}.`;
  return {
    title,
    description,
    alternates: { canonical: `/resources/daily-current-affairs/${slug}` },
    openGraph: {
      url: `/resources/daily-current-affairs/${slug}`,
      title: `${title} | Unnat Classes`,
      description,
      images: item.images[0] ? [item.images[0]] : undefined,
    },
    twitter: { title: `${title} | Unnat Classes`, description },
  };
}

export default async function DailyCurrentAffairDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = await getDailyCurrentAffairBySlug(slug);
  if (!item) notFound();

  return (
    <section className="bg-white py-10 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-8">
        <Reveal>
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/resources/daily-current-affairs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900/60 hover:text-navy-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Daily Current Affairs
            </Link>
            <ShareButton
              title={item.caption ?? "Daily Current Affairs — Unnat Classes"}
              text={item.caption ?? undefined}
            />
          </div>

          <span className="mt-6 block text-xs font-semibold text-navy-900/40">
            {formatDate(item.date)}
          </span>

          <div className="mt-4 overflow-hidden rounded-2xl">
            <DailyCurrentAffairCarousel
              images={item.images}
              alt={item.caption ?? `Daily current affairs — ${formatDate(item.date)}`}
              priority
            />
          </div>

          {item.caption && (
            <p className="mt-6 text-[15px] leading-relaxed text-navy-900/70 sm:text-lg">
              {item.caption}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
