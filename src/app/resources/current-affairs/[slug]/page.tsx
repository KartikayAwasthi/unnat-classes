import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import ShareButton from "@/components/ShareButton";
import { getCurrentAffairBySlug, getCurrentAffairs } from "@/lib/api";
import { renderMarkdown } from "@/lib/markdown";

type Params = { slug: string };

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function generateStaticParams() {
  const currentAffairs = await getCurrentAffairs();
  return currentAffairs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await getCurrentAffairBySlug(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/resources/current-affairs/${slug}` },
    openGraph: {
      url: `/resources/current-affairs/${slug}`,
      title: `${item.title} | Unnat Classes`,
      description: item.summary,
    },
    twitter: { title: `${item.title} | Unnat Classes`, description: item.summary },
  };
}

export default async function CurrentAffairDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = await getCurrentAffairBySlug(slug);
  if (!item) notFound();

  return (
    <section className="bg-white py-10 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-8 lg:px-10">
        <Reveal>
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/resources/current-affairs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900/60 hover:text-navy-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Current Affairs
            </Link>
            <ShareButton title={item.title} text={item.summary} />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-gold-400/20 px-3 py-1 text-xs font-bold text-gold-600">
              {item.category}
            </span>
            <span className="text-xs font-semibold text-navy-900/40">
              {formatDate(item.date)}
            </span>
          </div>

          <h1 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-4xl lg:text-5xl">
            {item.title}
          </h1>

          {item.coverImageUrl && (
            <div className="relative mt-6 h-[280px] w-full overflow-hidden rounded-2xl bg-navy-900/5 sm:h-[420px] lg:h-[520px]">
              <Image
                src={item.coverImageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
                priority
              />
            </div>
          )}

          <div
            className="prose-content mt-8 text-[15px] leading-relaxed text-navy-900/70 sm:text-lg"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(item.content) }}
          />
        </Reveal>
      </div>
    </section>
  );
}
