import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import ShareButton from "@/components/ShareButton";
import { getPostBySlug, getPosts } from "@/lib/api";
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
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/resources/posts/${slug}` },
    openGraph: {
      url: `/resources/posts/${slug}`,
      title: `${post.title} | Unnat Classes`,
      description: post.excerpt,
    },
    twitter: { title: `${post.title} | Unnat Classes`, description: post.excerpt },
  };
}

export default async function PostDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/resources/posts"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900/60 hover:text-navy-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Posts
            </Link>
            <ShareButton title={post.title} text={post.excerpt} />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-gold-400/20 px-3 py-1 text-xs font-bold text-gold-600">
              {post.tag}
            </span>
            <span className="text-xs font-semibold text-navy-900/40">
              {formatDate(post.date)} · By {post.author}
            </span>
          </div>

          <h1 className="mt-3 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
            {post.title}
          </h1>

          {post.coverImageUrl && (
            <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-2xl bg-navy-900/5">
              <Image src={post.coverImageUrl} alt={post.title} fill className="object-contain" />
            </div>
          )}

          <div
            className="prose-content mt-8 text-base text-navy-900/70"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />
        </Reveal>
      </div>
    </section>
  );
}
