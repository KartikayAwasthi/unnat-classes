"use client";

import { motion } from "framer-motion";
import { Phone, Sparkles } from "lucide-react";
import { SITE } from "@/lib/data";

export default function AdmissionCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 py-16 text-white sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.06]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-5 text-center sm:px-8">
        <motion.div
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500"
        >
          <Sparkles className="h-7 w-7 text-navy-950" />
        </motion.div>

        <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">
          {SITE.admissionsNote}
        </h2>
        <p className="max-w-xl text-white/70">
          Give your child the foundation they deserve. Reach out today and secure a
          seat at Unnat Classes.
        </p>

        <a
          href={SITE.phoneHref}
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-4 text-base font-bold text-navy-950 shadow-lg shadow-gold-500/30 transition-transform hover:scale-105"
        >
          <Phone className="h-5 w-5" />
          Call Us Now — {SITE.phone}
        </a>
      </div>
    </section>
  );
}
