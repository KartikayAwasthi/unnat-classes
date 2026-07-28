import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PenSquare } from "lucide-react";
import Reveal from "@/components/Reveal";
import { posts } from "@/lib/mockContent";

const description =
  "Announcements, study tips, and updates from Unnat Classes, posted by our teachers.";

export const metadata: Metadata = {
  title: "Posts",
  description,
  alternates: { canonical: "/resources/posts" },
  openGraph: { url: "/resources/posts", title: "Posts | Unnat Classes", description },
  twitter: { title: "Posts | Unnat Classes", description },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function PostsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.08]" />
        <Reveal className="relative mx-auto max-w-2xl px-5">
          <span className="text-sm font-bold uppercase tracking-widest text-gold-400">
            Resources
          </span>
          <h1 className="mt-3 font-heading text-4xl font-extrabold sm:text-5xl">Posts</h1>
          <p className="mt-4 text-white/70">
            Announcements, tips, and updates from Unnat Classes.
          </p>
        </Reveal>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link
                  href={`/resources/posts/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-navy-900/5 bg-cream p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                    <PenSquare className="h-6 w-6" />
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-gold-400/20 px-3 py-1 text-xs font-bold text-gold-600">
                      {post.tag}
                    </span>
                    <span className="text-xs font-semibold text-navy-900/40">
                      {formatDate(post.date)}
                    </span>
                  </div>

                  <h2 className="mt-3 font-heading text-lg font-bold text-navy-900">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-900/60">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-navy-900/10 pt-4">
                    <span className="text-xs text-navy-900/40">By {post.author}</span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-gold-600 transition-transform group-hover:translate-x-1">
                      Read <ArrowRight className="h-4 w-4" />
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
