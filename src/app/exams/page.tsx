import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import ExamDateChip from "@/components/exams/ExamDateChip";
import { getExams } from "@/lib/api";

const description =
  "Competitive exam notifications — UPSC, SSC, Banking, State PSC and more — with syllabus, exam pattern, and key dates for GS Classes aspirants.";

export const metadata: Metadata = {
  title: "Exams",
  description,
  alternates: { canonical: "/exams" },
  openGraph: {
    url: "/exams",
    title: "Exams | Unnat Classes",
    description,
  },
  twitter: { title: "Exams | Unnat Classes", description },
};

export default async function ExamsPage() {
  const exams = await getExams();

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.08]" />
        <Reveal className="relative mx-auto max-w-2xl px-5">
          <span className="text-sm font-bold uppercase tracking-widest text-gold-400">
            Exam Alerts
          </span>
          <h1 className="mt-3 font-heading text-4xl font-extrabold sm:text-5xl">
            Exams
          </h1>
          <p className="mt-4 text-white/70">
            Competitive exam notifications, syllabus, and pattern — all in one place.
          </p>
        </Reveal>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {exams.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-16 text-center text-navy-900/50">
              <GraduationCap className="h-10 w-10 text-gold-400" strokeWidth={1.5} />
              <p>No exam notifications posted yet — check back soon.</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {exams.map((exam, i) => (
                <Reveal key={exam.slug} delay={i * 0.08}>
                  <Link
                    href={`/exams/${exam.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/5 bg-cream shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl"
                  >
                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-navy-900">
                      {exam.coverImageUrl ? (
                        <Image
                          src={exam.coverImageUrl}
                          alt={exam.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <GraduationCap className="h-12 w-12 text-gold-400" />
                        </div>
                      )}
                      <span className="absolute left-4 top-4 rounded-full bg-gold-400/95 px-3 py-1 text-xs font-bold text-navy-950 shadow-sm">
                        {exam.category}
                      </span>
                      <div className="absolute right-4 top-4">
                        <ExamDateChip date={exam.examDate} />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h2 className="font-heading text-lg font-bold text-navy-900">
                        {exam.title}
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-900/60">
                        {exam.summary}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-600 transition-transform group-hover:translate-x-1">
                        View Details <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
