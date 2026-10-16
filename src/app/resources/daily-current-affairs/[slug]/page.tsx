import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DailyCurrentAffairsReels from "@/components/resources/DailyCurrentAffairsReels";
import StructuredData from "@/components/StructuredData";
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
  const [item, entries] = await Promise.all([
    getDailyCurrentAffairBySlug(slug),
    getDailyCurrentAffairs(),
  ]);
  if (!item) notFound();

  const title = item.caption ?? `Daily Current Affairs — ${formatDate(item.date)}`;

  return (
    <>
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
      <h1 className="sr-only">{title}</h1>
      <DailyCurrentAffairsReels
        entries={entries.some((e) => e.slug === slug) ? entries : [item, ...entries]}
        initialSlug={slug}
      />
    </>
  );
}
