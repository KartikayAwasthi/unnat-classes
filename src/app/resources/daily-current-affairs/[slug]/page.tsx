import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import ShareButton from "@/components/ShareButton";
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

          <div className="mt-4 flex flex-col gap-4">
            {item.images.map((src, i) => (
              <div
                key={src + i}
                className="relative h-[70vh] w-full overflow-hidden rounded-2xl bg-navy-900 sm:h-[560px]"
              >
                <Image
                  src={src}
                  alt={
                    item.caption
                      ? `${item.caption} — image ${i + 1} of ${item.images.length}`
                      : `Daily current affairs — ${formatDate(item.date)} — image ${i + 1} of ${item.images.length}`
                  }
                  fill
                  sizes="(min-width: 1024px) 672px, 100vw"
                  className="object-contain"
                  priority={i === 0}
                />
              </div>
            ))}
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
