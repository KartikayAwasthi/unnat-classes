import type { Metadata } from "next";
import { FileText, Eye } from "lucide-react";
import Reveal from "@/components/Reveal";
import { notes } from "@/lib/mockContent";

const description =
  "Downloadable subject notes for Class 1 to 12, Humanities, and GS Classes — uploaded and updated by our teachers.";

export const metadata: Metadata = {
  title: "Notes",
  description,
  alternates: { canonical: "/resources/notes" },
  openGraph: { url: "/resources/notes", title: "Notes | Unnat Classes", description },
  twitter: { title: "Notes | Unnat Classes", description },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function NotesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.08]" />
        <Reveal className="relative mx-auto max-w-2xl px-5">
          <span className="text-sm font-bold uppercase tracking-widest text-gold-400">
            Resources
          </span>
          <h1 className="mt-3 font-heading text-4xl font-extrabold sm:text-5xl">Notes</h1>
          <p className="mt-4 text-white/70">
            Subject-wise notes uploaded by our teachers, ready to download.
          </p>
        </Reveal>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {notes.map((note, i) => (
              <Reveal
                key={note.slug}
                delay={i * 0.08}
                className="flex flex-col rounded-2xl border border-navy-900/5 bg-cream p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                    <FileText className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-gold-400/20 px-3 py-1 text-xs font-bold text-gold-600">
                    {note.fileType} · {note.fileSize}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-navy-900/50">{note.subject}</span>
                  <span className="text-navy-900/20">·</span>
                  <span className="text-xs font-semibold text-navy-900/50">
                    {note.classRange}
                  </span>
                </div>

                <h2 className="mt-2 font-heading text-lg font-bold text-navy-900">
                  {note.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-900/60">
                  {note.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-navy-900/10 pt-4">
                  <span className="text-xs text-navy-900/40">
                    Uploaded {formatDate(note.uploadedAt)}
                  </span>
                  <span className="flex cursor-not-allowed items-center gap-1.5 rounded-full bg-navy-900 px-4 py-2 text-xs font-semibold text-white opacity-60">
                    <Eye className="h-3.5 w-3.5 text-gold-400" />
                    View
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
