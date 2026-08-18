import type { Metadata } from "next";
import { Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import StructuredData from "@/components/StructuredData";
import { SITE, classGroups, features } from "@/lib/data";
import { breadcrumbList, courseListSchema } from "@/lib/structuredData";

const description =
  "Unnat Classes offers structured GS Classes coaching — a Competition Batch for competitive exam aspirants, with complete syllabus coverage, regular tests, and personalized attention.";

export const metadata: Metadata = {
  title: "Courses",
  description,
  alternates: { canonical: "/courses" },
  openGraph: { url: "/courses", title: "Courses | Unnat Classes", description },
  twitter: { title: "Courses | Unnat Classes", description },
};

export default function CoursesPage() {
  return (
    <>
      <StructuredData
        data={[
          ...courseListSchema(classGroups),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Courses", path: "/courses" },
          ]),
        ]}
      />
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.08]" />
        <Reveal className="relative mx-auto max-w-2xl px-5">
          <span className="text-sm font-bold uppercase tracking-widest text-gold-400">
            Courses
          </span>
          <h1 className="mt-3 font-heading text-4xl font-extrabold sm:text-5xl">
            For {SITE.classesRange}
          </h1>
          <p className="mt-4 text-white/70">{SITE.classesNote}</p>
        </Reveal>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              Our Program
            </h2>
          </Reveal>

          <div className="mx-auto mt-10 max-w-md">
            {classGroups.map((group) => (
              <Reveal
                key={group.range}
                className="flex flex-col rounded-2xl border border-navy-900/5 bg-cream p-8 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-block w-fit rounded-full bg-gold-400/20 px-3 py-1 text-xs font-bold text-gold-600">
                    {group.range}
                  </span>
                  <span className="inline-block w-fit rounded-full bg-navy-900/5 px-3 py-1 text-xs font-semibold text-navy-900/60">
                    {group.subjects}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-navy-900">
                  {group.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-900/60">
                  {group.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-gold-600">
              Included in Every Course
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
              What Every Student Gets
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Reveal
                key={feature.title}
                delay={i * 0.08}
                className="rounded-2xl border border-navy-900/5 bg-white p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-navy-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/60">
                  {feature.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 py-16 text-center text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.06]" />
        <Reveal className="relative mx-auto max-w-2xl px-5">
          <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">
            {SITE.admissionsNote}
          </h2>
          <a
            href={SITE.emailHref}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-4 text-base font-bold text-navy-950 shadow-lg shadow-gold-500/30 transition-transform hover:scale-105"
          >
            <Mail className="h-5 w-5" />
            Email Us — {SITE.email}
          </a>
        </Reveal>
      </section>
    </>
  );
}
