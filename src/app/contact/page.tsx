import type { Metadata } from "next";
import { MapPin, Phone, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | Unnat Classes",
  description:
    "Get in touch with Unnat Classes to enroll your child for Class 1 to 12. Limited seats available.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.08]" />
        <Reveal className="relative mx-auto max-w-2xl px-5">
          <span className="text-sm font-bold uppercase tracking-widest text-gold-400">
            Get In Touch
          </span>
          <h1 className="mt-3 font-heading text-4xl font-extrabold sm:text-5xl">
            Let&apos;s Learn Today, Lead Tomorrow
          </h1>
          <p className="mt-4 text-white/70">{SITE.admissionsNote}</p>
        </Reveal>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-3xl bg-navy-950 p-8 text-white shadow-lg">
              <div>
                <h2 className="font-heading text-2xl font-bold">
                  Contact Information
                </h2>
                <p className="mt-2 text-sm text-white/60">
                  Reach out for admissions, fee details, or a free introductory
                  session.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                        Call Us Now
                      </p>
                      <a
                        href={SITE.phoneHref}
                        className="text-lg font-bold text-white hover:text-gold-400"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                        Visit Us
                      </p>
                      <a
                        href={SITE.mapsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/80 underline decoration-white/30 underline-offset-2 transition-colors hover:text-gold-400"
                      >
                        {SITE.address}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                        Classes For
                      </p>
                      <p className="text-sm text-white/80">{SITE.classesRange}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold text-navy-950 shadow-lg shadow-gold-500/30 transition-transform hover:scale-105"
                >
                  <Phone className="h-4 w-4" />
                  Call {SITE.phone}
                </a>
                <a
                  href={SITE.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <MapPin className="h-4 w-4 text-gold-400" />
                  Get Directions
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
