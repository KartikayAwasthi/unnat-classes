"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { SITE } from "@/lib/data";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const name = (data.get("name") as string).trim();
    const phone = (data.get("phone") as string).trim();
    const studentClass = data.get("class") as string;
    const message = (data.get("message") as string).trim();

    if (!name || !phone) {
      setError("Please fill in your name and phone number before sending.");
      return;
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setError(null);

    const lines = [
      "New enquiry from the website:",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Class Interested In: ${studentClass}`,
      message ? `Message: ${message}` : null,
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/91${SITE.phone}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
  }

  return (
    <div className="relative rounded-3xl border border-navy-900/5 bg-white p-6 shadow-lg sm:p-8">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center gap-3 py-16 text-center"
          >
            <CheckCircle2 className="h-14 w-14 text-gold-500" />
            <h3 className="font-heading text-xl font-bold text-navy-900">
              Almost done!
            </h3>
            <p className="max-w-xs text-sm text-navy-900/60">
              We&apos;ve opened WhatsApp with your details filled in — just hit
              send there and we&apos;ll get back to you shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-semibold text-navy-900"
                >
                  Parent / Student Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-navy-900/10 bg-cream px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-1.5 block text-sm font-semibold text-navy-900"
                >
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  required
                  type="tel"
                  autoComplete="tel"
                  placeholder="Your phone number"
                  className="w-full rounded-xl border border-navy-900/10 bg-cream px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-class"
                className="mb-1.5 block text-sm font-semibold text-navy-900"
              >
                Class Interested In
              </label>
              <select
                id="contact-class"
                name="class"
                className="w-full rounded-xl border border-navy-900/10 bg-cream px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((c) => (
                  <option key={c} value={c}>
                    Class {c}
                  </option>
                ))}
                {[11, 12].map((c) => (
                  <option key={c} value={c}>
                    Class {c} (Humanities)
                  </option>
                ))}
                <option value="gs-competition">Competition Batch (GS Classes)</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-sm font-semibold text-navy-900"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Tell us how we can help..."
                className="w-full resize-none rounded-xl border border-navy-900/10 bg-cream px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30"
              />
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  key="error"
                  role="alert"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
                >
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-navy-800 sm:w-auto"
            >
              <Send className="h-4 w-4 text-gold-400" />
              Send Message
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
