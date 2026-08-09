import type { Metadata } from "next";
import { Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import ReelsGrid from "@/components/reels/ReelsGrid";
import StructuredData from "@/components/StructuredData";
import { SITE } from "@/lib/data";
import { getInstagramPosts, getVideos } from "@/lib/api";
import { buildReelFeed } from "@/lib/reels";
import { breadcrumbList } from "@/lib/structuredData";

const description =
  "Reels and posts from the Unnat Classes Instagram and YouTube Shorts — watch them right here on the site.";

export const metadata: Metadata = {
  title: "Reels",
  description,
  alternates: { canonical: "/reels" },
  openGraph: { url: "/reels", title: "Reels | Unnat Classes", description },
  twitter: { title: "Reels | Unnat Classes", description },
};

// Re-render on every request so new Instagram/Shorts entries show up without a rebuild.
export const dynamic = "force-dynamic";

export default async function ReelsPage() {
  const [instagramPosts, videos] = await Promise.all([getInstagramPosts(), getVideos()]);
  const items = buildReelFeed(instagramPosts, videos);

  return (
    <>
      <StructuredData
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Reels", path: "/reels" },
        ])}
      />
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.08]" />
        <Reveal className="relative mx-auto max-w-2xl px-5">
          <span className="text-sm font-bold uppercase tracking-widest text-gold-400">
            Reels
          </span>
          <h1 className="mt-3 font-heading text-4xl font-extrabold sm:text-5xl">
            Reels &amp; Shorts
          </h1>
          <p className="mt-4 text-white/70">
            Watch our latest reels from{" "}
            <a
              href={SITE.instagramHref}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-gold-400 underline-offset-4 hover:text-gold-400"
            >
              Instagram
            </a>{" "}
            and Shorts from our YouTube channel, all in one place.
          </p>
        </Reveal>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <ReelsGrid items={items} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 py-16 text-center text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.06]" />
        <Reveal className="relative mx-auto max-w-2xl px-5">
          <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">
            {SITE.admissionsNote}
          </h2>
          <a
            href={SITE.phoneHref}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-4 text-base font-bold text-navy-950 shadow-lg shadow-gold-500/30 transition-transform hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            Call Us Now — {SITE.phone}
          </a>
        </Reveal>
      </section>
    </>
  );
}
