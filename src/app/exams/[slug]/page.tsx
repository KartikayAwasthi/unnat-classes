import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import ShareButton from "@/components/ShareButton";
import ExamDateChip from "@/components/exams/ExamDateChip";
import { getExamBySlug, getExams } from "@/lib/api";
import { renderMarkdown } from "@/lib/markdown";

type Params = { slug: string };

export async function generateStaticParams() {
  const exams = await getExams();
  return exams.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await getExamBySlug(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/exams/${slug}` },
    openGraph: {
      url: `/exams/${slug}`,
      title: `${item.title} | Unnat Classes`,
      description: item.summary,
      images: item.coverImageUrl ? [item.coverImageUrl] : undefined,
    },
    twitter: { title: `${item.title} | Unnat Classes`, description: item.summary },
  };
}

export default async function ExamDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = await getExamBySlug(slug);
  if (!item) notFound();

  return (
    <section className="bg-white py-10 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-8 lg:px-10">
        <Reveal>
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/exams"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900/60 hover:text-navy-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Exams
            </Link>
            <ShareButton title={item.title} text={item.summary} />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-gold-400/20 px-3 py-1 text-xs font-bold text-gold-600">
              {item.category}
            </span>
          </div>

          <h1 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-4xl lg:text-5xl">
            {item.title}
          </h1>

          <p className="mt-4 text-[15px] leading-relaxed text-navy-900/60 sm:text-lg">
            {item.summary}
          </p>

          <div className="relative mt-6 h-[280px] w-full overflow-hidden rounded-2xl bg-navy-900 sm:h-[420px] lg:h-[480px]">
            {item.coverImageUrl ? (
              <Image
                src={item.coverImageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <GraduationCap className="h-14 w-14 text-gold-400" />
              </div>
            )}
            <div className="absolute right-4 top-4">
              <ExamDateChip date={item.examDate} size="lg" />
            </div>
          </div>

          {item.officialLink && (
            <a
              href={item.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold text-navy-950 shadow-lg shadow-gold-500/30 transition-transform hover:scale-105"
            >
              Official Notification
              <ExternalLink className="h-4 w-4" />
            </a>
          )}

          <div className="mt-10 space-y-10">
            <div>
              <h2 className="font-heading text-xl font-bold text-navy-900 sm:text-2xl">
                About the Exam
              </h2>
              <div
                className="prose-content mt-4 text-[15px] leading-relaxed text-navy-900/70 sm:text-lg"
                dangerouslySetInnerHTML={{ __html: renderMarkdown([item.aboutExam]) }}
              />
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-navy-900 sm:text-2xl">
                Exam Pattern
              </h2>
              <div
                className="prose-content mt-4 text-[15px] leading-relaxed text-navy-900/70 sm:text-lg"
                dangerouslySetInnerHTML={{ __html: renderMarkdown([item.examPattern]) }}
              />
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-navy-900 sm:text-2xl">
                Syllabus
              </h2>
              <div
                className="prose-content mt-4 text-[15px] leading-relaxed text-navy-900/70 sm:text-lg"
                dangerouslySetInnerHTML={{ __html: renderMarkdown([item.syllabus]) }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
