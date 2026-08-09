import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, PenSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or may have moved.",
  robots: { index: false, follow: false },
};

const links = [
  { href: "/courses", label: "Courses" },
  { href: "/resources", label: "Resources" },
  { href: "/exams", label: "Exams" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-white py-20">
      <div className="mx-auto max-w-2xl px-5 text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-gold-600">
          404
        </span>
        <h1 className="mt-3 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-navy-900/60 sm:text-lg">
          The page you&apos;re looking for may have been moved or no longer exists.
          Here are a few places to pick up from.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-navy-950 shadow-lg shadow-gold-500/30 transition-transform hover:scale-105"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/resources/posts"
            className="inline-flex items-center gap-2 rounded-full border border-navy-900/10 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900/5"
          >
            <PenSquare className="h-4 w-4" />
            Latest Posts
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1 text-sm font-semibold text-navy-900/60 hover:text-navy-900"
            >
              {link.label}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
