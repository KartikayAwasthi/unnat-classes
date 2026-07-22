"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Phone, Sparkles } from "lucide-react";
import { SITE, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-14 text-white sm:pb-28 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.08]" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-navy-600/40 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-5 sm:px-8 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {SITE.admissionsNote}
          </motion.div>

          <h1 className="font-heading text-4xl font-extrabold leading-tight text-balance sm:text-5xl lg:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mt-4 font-heading text-xl font-semibold text-gold-400 sm:text-2xl">
            {SITE.subTagline}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0">
            {SITE.mission}
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 lg:items-start">
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2.5 text-xs font-bold text-navy-950 shadow-lg shadow-gold-500/20 sm:px-5 sm:text-sm">
                <GraduationCap className="h-4 w-4 shrink-0" />
                For {SITE.classesRange}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-white/10 px-4 py-2.5 text-xs font-bold text-gold-300 backdrop-blur-sm sm:px-5 sm:text-sm">
                <Sparkles className="h-4 w-4 shrink-0" />
                Competition Batch: GS Classes
              </span>
            </div>
            <span className="text-xs font-medium text-white/50 sm:text-sm">
              {SITE.classesNote}
            </span>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold text-navy-950 shadow-lg shadow-gold-500/30 transition-transform hover:scale-105"
            >
              Enroll Today
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-gold-400" />
              Call {SITE.phone}
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                className="text-center lg:text-left"
              >
                <div className="font-heading text-2xl font-bold text-gold-400 sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-white/60 sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-1"
        >
          <div className="relative mx-auto max-w-sm rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm sm:max-w-md">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-xl sm:h-48 sm:w-48"
            >
              <GraduationCap className="h-20 w-20 text-navy-950 sm:h-24 sm:w-24" />
            </motion.div>
            <p className="mt-6 text-center font-heading text-lg font-bold text-white">
              Every Child is Unique
            </p>
            <p className="mt-2 text-center text-sm text-white/60">
              We Nurture Their Potential!
            </p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -left-4 top-6 rounded-2xl bg-white px-4 py-2.5 text-navy-950 shadow-lg sm:-left-8"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wide text-navy-700/60">
                Better Education
              </p>
              <p className="text-sm font-bold text-navy-900">Builds Better Future</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="absolute -right-4 bottom-6 rounded-2xl bg-gold-400 px-4 py-2.5 text-navy-950 shadow-lg sm:-right-8"
            >
              <p className="text-xs font-bold">Admissions Open!</p>
              <p className="text-[10px] font-semibold">Limited Seats</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
