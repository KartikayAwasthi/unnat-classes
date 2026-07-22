import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { classGroups } from "@/lib/data";

export default function Classes() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-gold-600">
            Courses
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
            For Class 1 to 10
          </h2>
          <p className="mt-4 text-base text-navy-900/60 sm:text-lg">
            A structured path at every stage — from foundation to board-exam readiness.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {classGroups.map((group, i) => (
            <Reveal
              key={group.range}
              delay={i * 0.1}
              className="flex flex-col rounded-2xl border border-navy-900/5 bg-white p-8 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl"
            >
              <span className="inline-block w-fit rounded-full bg-gold-400/20 px-3 py-1 text-xs font-bold text-gold-600">
                {group.range}
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-navy-900">
                {group.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-900/60">
                {group.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <Link
            href="/courses"
            className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-transform hover:scale-105"
          >
            Explore All Courses
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
