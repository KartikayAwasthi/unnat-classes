import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import NotesGrid from "@/components/resources/NotesGrid";
import StructuredData from "@/components/StructuredData";
import { getNotes, resolveFileUrl } from "@/lib/api";
import { breadcrumbList } from "@/lib/structuredData";

const description =
  "Downloadable subject notes for Class 11 to 12, Humanities, and GS Classes — uploaded and updated by our teachers.";

export const metadata: Metadata = {
  title: "Notes",
  description,
  alternates: { canonical: "/resources/notes" },
  openGraph: { url: "/resources/notes", title: "Notes | Unnat Classes", description },
  twitter: { title: "Notes | Unnat Classes", description },
};

export default async function NotesPage() {
  const notes = await getNotes();
  const notesWithResolvedUrls = notes.map((note) => ({
    ...note,
    fileUrl: resolveFileUrl(note.fileUrl),
  }));

  return (
    <>
      <StructuredData
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Notes", path: "/resources/notes" },
        ])}
      />
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
          <NotesGrid notes={notesWithResolvedUrls} />
        </div>
      </section>
    </>
  );
}
