"use client";

import { useEffect, useState } from "react";
import { Eye, FileText, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import PdfViewer from "@/components/resources/PdfViewer";
import type { Note } from "@/lib/api";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function NotesGrid({ notes }: { notes: Note[] }) {
  const [activeNote, setActiveNote] = useState<Note | null>(null);

  useEffect(() => {
    if (!activeNote) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveNote(null);
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeNote]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((note, i) => {
          const isPdf = note.fileType.toUpperCase() === "PDF";
          return (
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
                <span className="text-xs font-semibold text-navy-900/50">{note.classRange}</span>
              </div>

              <h2 className="mt-2 font-heading text-lg font-bold text-navy-900">{note.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-900/60">
                {note.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-navy-900/10 pt-4">
                <span className="text-xs text-navy-900/40">Uploaded {formatDate(note.uploadedAt)}</span>
                {isPdf ? (
                  <button
                    type="button"
                    onClick={() => setActiveNote(note)}
                    className="flex items-center gap-1.5 rounded-full bg-navy-900 px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    <Eye className="h-3.5 w-3.5 text-gold-400" />
                    View
                  </button>
                ) : (
                  <a
                    href={note.fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-full bg-navy-900 px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    <Eye className="h-3.5 w-3.5 text-gold-400" />
                    View
                  </a>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>

      {activeNote && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/70 p-4 sm:p-8"
          onClick={() => setActiveNote(null)}
        >
          <div
            className="flex h-full w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-navy-900/10 p-4">
              <h3 className="truncate font-heading text-base font-bold text-navy-900">
                {activeNote.title}
              </h3>
              <button
                type="button"
                onClick={() => setActiveNote(null)}
                aria-label="Close"
                className="shrink-0 rounded-full p-1.5 text-navy-900/50 transition-colors hover:bg-navy-900/5 hover:text-navy-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <PdfViewer url={activeNote.fileUrl} />
          </div>
        </div>
      )}
    </>
  );
}
