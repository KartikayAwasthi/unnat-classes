import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import VideosGrid from "@/components/resources/VideosGrid";
import StructuredData from "@/components/StructuredData";
import { getVideos } from "@/lib/api";
import { breadcrumbList } from "@/lib/structuredData";

const description =
  "Free videos from the Unnat Classes YouTube channel — watch lessons and explainers right on the site.";

export const metadata: Metadata = {
  title: "Videos",
  description,
  alternates: { canonical: "/resources/videos" },
  openGraph: { url: "/resources/videos", title: "Videos | Unnat Classes", description },
  twitter: { title: "Videos | Unnat Classes", description },
};

export default async function VideosPage() {
  const videos = await getVideos();

  return (
    <>
      <StructuredData
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Videos", path: "/resources/videos" },
        ])}
      />
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.08]" />
        <Reveal className="relative mx-auto max-w-2xl px-5">
          <span className="text-sm font-bold uppercase tracking-widest text-gold-400">
            Resources
          </span>
          <h1 className="mt-3 font-heading text-4xl font-extrabold sm:text-5xl">Free Videos</h1>
          <p className="mt-4 text-white/70">
            Watch lessons from our{" "}
            <a
              href="https://www.youtube.com/@UnnatClasses-Tannu"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-gold-400 underline-offset-4 hover:text-gold-400"
            >
              YouTube channel
            </a>{" "}
            right here on the site.
          </p>
        </Reveal>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <VideosGrid videos={videos} />
        </div>
      </section>
    </>
  );
}
