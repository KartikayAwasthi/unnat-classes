import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import { teacher } from "@/lib/data";

export default function TeacherPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <span className="text-sm font-bold uppercase tracking-widest text-gold-600">
              Meet Your Teacher
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
              {teacher.name}
            </h2>
            <p className="mt-1 text-sm font-semibold text-navy-900/50">
              {teacher.role}
            </p>

            <blockquote className="relative mt-6 border-l-4 border-gold-400 pl-5">
              <Quote className="absolute -left-1.5 -top-2 h-6 w-6 -scale-x-100 text-gold-400/40" />
              <p className="text-lg font-medium italic leading-relaxed text-navy-900/80">
                &ldquo;{teacher.quote}&rdquo;
              </p>
            </blockquote>

            <p className="mt-6 text-base leading-relaxed text-navy-900/60">
              {teacher.bio[0]}
            </p>

            <Link
              href="/teacher"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-transform hover:scale-105"
            >
              Read Full Story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={0.15} className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gold-400/20 blur-2xl" />
              <div className="flex aspect-[4/5] items-center justify-center rounded-[2rem] bg-gradient-to-br from-navy-800 to-navy-950 shadow-2xl">
                <span className="font-heading text-7xl font-extrabold text-gold-400/90">
                  {teacher.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-white px-5 py-4 text-center shadow-xl">
                <p className="font-heading text-sm font-bold text-navy-900">
                  {teacher.name}
                </p>
                <p className="text-xs text-navy-900/50">Founder, Unnat Classes</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
