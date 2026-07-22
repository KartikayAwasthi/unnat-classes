import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE, classGroups } from "@/lib/data";

export default function Classes() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-gold-600">
            Courses
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
            For {SITE.classesRange}
          </h2>
          <p className="mt-4 text-base text-navy-900/60 sm:text-lg">
            {SITE.classesNote}
          </p>
        </Reveal>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {classGroups.map((group, i) => (
            <Reveal
              key={group.range}
              delay={i * 0.1}
              className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-navy-900/5 bg-white shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-gold-400 to-gold-600 transition-all group-hover:from-navy-700 group-hover:to-navy-900" />
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400 shadow-md transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                    <group.icon className="h-6 w-6" />
                  </div>
                  <span className="text-right text-xs font-bold uppercase tracking-widest text-navy-900/40">
                    {group.range}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-navy-900">
                  {group.title}
                </h3>
                <span className="mt-3 inline-block w-fit rounded-full bg-gold-400/20 px-3 py-1 text-xs font-semibold text-gold-600">
                  {group.subjects}
                </span>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-900/60">
                  {group.description}
                </p>
              </div>
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
