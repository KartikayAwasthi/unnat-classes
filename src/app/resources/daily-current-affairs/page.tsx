import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import StructuredData from "@/components/StructuredData";
import DailyCurrentAffairsGrid from "@/components/resources/DailyCurrentAffairsGrid";
import { getDailyCurrentAffairs } from "@/lib/api";
import { breadcrumbList } from "@/lib/structuredData";

const description =
  "Daily current affairs updates in pictures — quick, image-first snapshots posted by our teachers for GS Classes students.";

export const metadata: Metadata = {
  title: "Daily Current Affairs",
  description,
  alternates: { canonical: "/resources/daily-current-affairs" },
  openGraph: {
    url: "/resources/daily-current-affairs",
    title: "Daily Current Affairs | Unnat Classes",
    description,
  },
  twitter: { title: "Daily Current Affairs | Unnat Classes", description },
};

export default async function DailyCurrentAffairsPage() {
  const entries = await getDailyCurrentAffairs();

  return (
    <>
      <StructuredData
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Daily Current Affairs", path: "/resources/daily-current-affairs" },
        ])}
      />
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.08]" />
        <Reveal className="relative mx-auto max-w-2xl px-5">
          <span className="text-sm font-bold uppercase tracking-widest text-gold-400">
            Resources
          </span>
          <h1 className="mt-3 font-heading text-4xl font-extrabold sm:text-5xl">
            Daily Current Affairs
          </h1>
          <p className="mt-4 text-white/70">
            Quick, image-first updates — tap a card to open it, swipe through the images, scroll for the next one.
          </p>
        </Reveal>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-3 sm:px-6">
          <DailyCurrentAffairsGrid entries={entries} />
        </div>
      </section>
    </>
  );
}
