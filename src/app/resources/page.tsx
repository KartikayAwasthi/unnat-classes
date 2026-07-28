import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Newspaper, PenSquare, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { notes, currentAffairs, posts } from "@/lib/mockContent";

const description =
  "Study notes, current affairs updates, and posts shared by our teachers — all in one place.";

export const metadata: Metadata = {
  title: "Resources",
  description,
  alternates: { canonical: "/resources" },
  openGraph: { url: "/resources", title: "Resources | Unnat Classes", description },
  twitter: { title: "Resources | Unnat Classes", description },
};

const sections = [
  {
    href: "/resources/notes",
    icon: FileText,
    label: "Notes",
    description: "Downloadable subject notes uploaded by our teachers.",
    count: notes.length,
  },
  {
    href: "/resources/current-affairs",
    icon: Newspaper,
    label: "Current Affairs",
    description: "Regular updates on national and international events for GS students.",
    count: currentAffairs.length,
  },
  {
    href: "/resources/posts",
    icon: PenSquare,
    label: "Posts",
    description: "Announcements, study tips, and updates from Unnat Classes.",
    count: posts.length,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.08]" />
        <Reveal className="relative mx-auto max-w-2xl px-5">
          <span className="text-sm font-bold uppercase tracking-widest text-gold-400">
            Resources
          </span>
          <h1 className="mt-3 font-heading text-4xl font-extrabold sm:text-5xl">
            Notes, Current Affairs &amp; Posts
          </h1>
          <p className="mt-4 text-white/70">
            Shared directly by our teachers — updated regularly.
          </p>
        </Reveal>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {sections.map((section, i) => (
              <Reveal key={section.href} delay={i * 0.1}>
                <Link
                  href={section.href}
                  className="group flex h-full flex-col rounded-2xl border border-navy-900/5 bg-cream p-8 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                    <section.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 font-heading text-xl font-bold text-navy-900">
                    {section.label}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-900/60">
                    {section.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-navy-900/40">
                      {section.count} posted
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-gold-600 transition-transform group-hover:translate-x-1">
                      View all <ArrowRight className="h-4 w-4" />
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
