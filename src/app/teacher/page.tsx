import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  ArrowRight,
  GraduationCap,
  Phone,
  Quote,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE, teacher } from "@/lib/data";

const description = `Meet ${teacher.name}, Founder & Lead Teacher of Unnat Classes — dedicated to concept-based learning for Class 1 to 12.`;

export const metadata: Metadata = {
  title: teacher.name,
  description,
  alternates: { canonical: "/teacher" },
  openGraph: { url: "/teacher", title: `${teacher.name} | Unnat Classes`, description },
  twitter: { title: `${teacher.name} | Unnat Classes`, description },
};

export default function TeacherPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.08]" />
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-widest text-gold-400">
              Our Teacher
            </span>
            <h1 className="mt-3 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
              {teacher.name}
            </h1>
            <p className="mt-2 text-base font-medium text-white/60 sm:text-lg">
              {teacher.role}
            </p>

            <blockquote className="relative mt-8 border-l-4 border-gold-400 pl-5">
              <Quote className="absolute -left-1.5 -top-2 h-6 w-6 -scale-x-100 text-gold-400/40" />
              <p className="text-xl font-medium italic leading-relaxed text-white/90">
                &ldquo;{teacher.quote}&rdquo;
              </p>
            </blockquote>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold text-navy-950 shadow-lg shadow-gold-500/30 transition-transform hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                Call {SITE.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Book a Free Session
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6">
              <div>
                <p className="font-heading text-2xl font-extrabold text-gold-400">8+</p>
                <p className="text-xs text-white/50">Years Experience</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-extrabold text-gold-400">CTET & NET</p>
                <p className="text-xs text-white/50">Qualified Educator</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-extrabold text-gold-400">Founder</p>
                <p className="text-xs text-white/50">& Lead Teacher</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gold-400/15 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-navy-950 shadow-2xl ring-1 ring-white/10">
                <Image
                  src={teacher.photo}
                  alt={`${teacher.name}, ${teacher.role}`}
                  fill
                  sizes="(max-width: 640px) 90vw, 400px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 flex w-[88%] -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-5 py-4 text-navy-900 shadow-xl">
                <GraduationCap className="h-8 w-8 shrink-0 text-gold-500" />
                <div>
                  <p className="font-heading text-sm font-bold">Founder & Lead Teacher</p>
                  <p className="text-xs text-navy-900/50">Unnat Classes</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-gold-600">
              Certified & Trusted
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
              A Dedicated Educator
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-navy-900/5">
              <Image
                src="/images/teacher-banner.jpg"
                alt={`${teacher.name} — Founder & Owner Teacher, Unnat Classes`}
                width={1536}
                height={1024}
                sizes="(max-width: 768px) 90vw, 896px"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-widest text-gold-600">
              Her Story
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Teaching with Purpose
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5">
            {teacher.bio.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-base leading-relaxed text-navy-900/70 sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-gold-600">
              Qualifications
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Education & Certifications
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Reveal className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-navy-900">
                Education
              </h3>
              <ul className="mt-3 space-y-2.5">
                {teacher.education.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-navy-900/65"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-navy-900">
                Certifications
              </h3>
              <ul className="mt-3 space-y-2.5">
                {teacher.certifications.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-navy-900/65"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-gold-600">
              Teaching Philosophy
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
              What Guides Her Classroom
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {teacher.philosophy.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.1}
                className="rounded-2xl border border-navy-900/5 bg-white p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/60">
                  {item.description}
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
              Highlights
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Why Students & Parents Trust Her
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {teacher.highlights.map((highlight, i) => {
              const HighlightIcon = [GraduationCap, Sparkles, Award][i % 3];
              return (
                <Reveal
                  key={highlight}
                  delay={i * 0.1}
                  className="rounded-2xl border border-navy-900/5 bg-white p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                    <HighlightIcon className="h-6 w-6" />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-navy-900/70">
                    {highlight}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 py-16 text-center text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.06]" />
        <Reveal className="relative mx-auto max-w-2xl px-5">
          <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">
            Ready for your child to learn from {teacher.name}?
          </h2>
          <p className="mt-4 text-white/70">{SITE.admissionsNote}</p>
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
