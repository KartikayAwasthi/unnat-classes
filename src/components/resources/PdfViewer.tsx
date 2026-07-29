"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import type { PDFDocumentProxy } from "pdfjs-dist";

export default function PdfViewer({ url }: { url: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pdf, setPdf] = useState<PDFDocumentProxy | null>(null);
  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    setPdf(null);

    import("pdfjs-dist").then((pdfjsLib) => {
      if (cancelled) return;
      pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url
      ).toString();

      pdfjsLib
        .getDocument({ url })
        .promise.then((doc) => {
          if (cancelled) return;
          setPdf(doc);
          setNumPages(doc.numPages);
          setPageNum(1);
          setLoading(false);
        })
        .catch(() => {
          if (cancelled) return;
          setError("Couldn't load this PDF.");
          setLoading(false);
        });
    });

    return () => {
      cancelled = true;
    };
  }, [url]);

  useEffect(() => {
    if (!pdf) return;
    let cancelled = false;

    pdf.getPage(pageNum).then((page) => {
      if (cancelled) return;
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const unscaledViewport = page.getViewport({ scale: 1 });
      const scale = (container.clientWidth - 32) / unscaledViewport.width;
      const viewport = page.getViewport({ scale });

      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      page.render({ canvas, canvasContext: ctx, viewport });
    });

    return () => {
      cancelled = true;
    };
  }, [pdf, pageNum]);

  return (
    <div className="flex h-full flex-col" onContextMenu={(e) => e.preventDefault()}>
      <div ref={containerRef} className="flex-1 overflow-auto bg-navy-900/5 p-4">
        {loading && (
          <div className="flex h-full items-center justify-center text-navy-900/40">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        )}
        {error && <p className="mt-8 text-center text-sm text-red-600">{error}</p>}
        <canvas ref={canvasRef} className="mx-auto block select-none shadow-md" />
      </div>
      {numPages > 1 && (
        <div className="flex items-center justify-center gap-4 border-t border-navy-900/10 py-3">
          <button
            type="button"
            onClick={() => setPageNum((p) => Math.max(1, p - 1))}
            disabled={pageNum <= 1}
            className="rounded-full p-1.5 text-navy-900/60 transition-colors hover:bg-navy-900/5 disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-xs font-semibold text-navy-900/60">
            Page {pageNum} of {numPages}
          </span>
          <button
            type="button"
            onClick={() => setPageNum((p) => Math.min(numPages, p + 1))}
            disabled={pageNum >= numPages}
            className="rounded-full p-1.5 text-navy-900/60 transition-colors hover:bg-navy-900/5 disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
