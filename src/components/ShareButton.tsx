"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

type ShareButtonProps = {
  title: string;
  text?: string;
  className?: string;
};

export default function ShareButton({ title, text, className }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch {
        // user cancelled the share sheet — nothing to do
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — nothing more we can do
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className={`inline-flex items-center gap-1.5 rounded-full border border-navy-900/10 bg-white px-4 py-2 text-sm font-semibold text-navy-900/70 shadow-sm transition-colors hover:border-navy-900/20 hover:text-navy-900 ${className ?? ""}`}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-gold-600" />
          Link copied
        </>
      ) : (
        <>
          <Share2 className="h-4 w-4 text-gold-600" />
          Share
        </>
      )}
    </button>
  );
}
