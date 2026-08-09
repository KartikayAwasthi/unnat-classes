import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import ShareButton from "@/components/ShareButton";
import StructuredData from "@/components/StructuredData";
import DailyCurrentAffairImageStack from "@/components/resources/DailyCurrentAffairImageStack";
import { getDailyCurrentAffairBySlug, getDailyCurrentAffairs } from "@/lib/api";
import { articleSchema, breadcrumbList } from "@/lib/structuredData";

type Params = { slug: string };

export const dynamic = "force-dynamic";

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

  const title = item.caption ?? `Daily Current Affairs — ${formatDate(item.date)}`;

  return (
    <section className="bg-white py-10 sm:py-24">
      <StructuredData
        data={[
          articleSchema({
            type: "NewsArticle",
            headline: title,
            description: item.caption ?? `Daily current affairs update for ${formatDate(item.date)}.`,
            path: `/resources/daily-current-affairs/${slug}`,
            datePublished: item.date,
            image: item.images[0] ?? null,
          }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "Daily Current Affairs", path: "/resources/daily-current-affairs" },
            { name: title, path: `/resources/daily-current-affairs/${slug}` },
          ]),
        ]}
      />
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

          <div className="mt-4">
            <DailyCurrentAffairImageStack
              images={item.images}
              alt={item.caption ?? `Daily current affairs — ${formatDate(item.date)}`}
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
