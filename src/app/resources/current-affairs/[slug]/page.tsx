import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import ShareButton from "@/components/ShareButton";
import { currentAffairs } from "@/lib/mockContent";

type Params = { slug: string };

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return currentAffairs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = currentAffairs.find((a) => a.slug === slug);
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
  const item = currentAffairs.find((a) => a.slug === slug);
  if (!item) notFound();

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
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

          <h1 className="mt-3 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
            {item.title}
          </h1>

          <div className="mt-8 flex flex-col gap-4">
            {item.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-navy-900/70">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
