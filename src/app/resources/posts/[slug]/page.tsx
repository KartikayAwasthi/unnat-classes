import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import ShareButton from "@/components/ShareButton";
import StructuredData from "@/components/StructuredData";
import { getPostBySlug, getPosts } from "@/lib/api";
import { renderMarkdown } from "@/lib/markdown";
import { articleSchema, breadcrumbList } from "@/lib/structuredData";

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
    <section className="bg-white py-10 sm:py-24">
      <StructuredData
        data={[
          articleSchema({
            type: "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            path: `/resources/posts/${slug}`,
            datePublished: post.date,
            image: post.coverImageUrl,
            author: post.author,
          }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "Posts", path: "/resources/posts" },
            { name: post.title, path: `/resources/posts/${slug}` },
          ]),
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-8 lg:px-10">
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

          <h1 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {post.coverImageUrl && (
            <div className="relative mt-6 h-[280px] w-full overflow-hidden rounded-2xl bg-navy-900/5 sm:h-[420px] lg:h-[520px]">
              <Image
                src={post.coverImageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
                priority
              />
            </div>
          )}

          <div
            className="prose-content mt-8 text-[15px] leading-relaxed text-navy-900/70 sm:text-lg"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />
        </Reveal>
      </div>
    </section>
  );
}
