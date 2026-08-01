"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Link2, MoreHorizontal, Share2 } from "lucide-react";

type ShareButtonProps = {
  title: string;
  text?: string;
  url?: string;
  className?: string;
  variant?: "default" | "icon";
};

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.34.665 4.523 1.816 6.377L4 29l7.82-1.767A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.356l-.355-.21-4.64 1.047 1.03-4.53-.232-.37A9.7 9.7 0 0 1 5.25 15c0-5.93 4.824-10.75 10.754-10.75S26.758 9.07 26.758 15 21.934 24.75 16.004 24.75Zm5.74-8.06c-.314-.157-1.858-.917-2.146-1.022-.288-.105-.497-.157-.706.157-.209.314-.81 1.022-.993 1.232-.183.21-.366.236-.68.079-.314-.157-1.325-.489-2.523-1.559-.933-.833-1.563-1.862-1.746-2.176-.183-.314-.02-.484.137-.64.14-.14.314-.366.47-.55.157-.183.21-.314.314-.523.105-.21.052-.393-.026-.55-.079-.157-.706-1.703-.968-2.332-.255-.612-.514-.53-.706-.54-.183-.009-.392-.011-.601-.011a1.15 1.15 0 0 0-.836.393c-.288.314-1.098 1.074-1.098 2.62 0 1.546 1.124 3.04 1.28 3.25.157.21 2.212 3.378 5.36 4.737.749.323 1.333.516 1.789.66.751.239 1.434.205 1.974.124.602-.09 1.858-.76 2.12-1.494.262-.733.262-1.362.183-1.494-.078-.131-.287-.209-.601-.366Z" />
    </svg>
  );
}

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.53 2.47h3.4l-7.43 8.49 8.74 11.57h-6.84l-5.36-7.01-6.13 7.01H.5l7.95-9.09L0 2.47h7.01l4.84 6.4Zm-1.2 18.02h1.88L6.77 4.4H4.75Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <defs>
        <radialGradient id="ig-gradient-share" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <path
        fill="url(#ig-gradient-share)"
        d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 3.06a6.74 6.74 0 1 0 0 13.48 6.74 6.74 0 0 0 0-13.48Zm0 11.12a4.38 4.38 0 1 1 0-8.76 4.38 4.38 0 0 1 0 8.76Zm7-11.4a1.57 1.57 0 1 1-3.15 0 1.57 1.57 0 0 1 3.15 0Z"
      />
    </svg>
  );
}

type PlatformOption = {
  label: string;
  bg: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  action: (ctx: { url: string; title: string; text: string; onCopyLink: () => void }) => void;
};

const platforms: PlatformOption[] = [
  {
    label: "WhatsApp",
    bg: "#25D366",
    Icon: WhatsAppIcon,
    action: ({ url, title }) =>
      window.open(
        `https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`,
        "_blank",
        "noopener,noreferrer"
      ),
  },
  {
    label: "Telegram",
    bg: "#29A9EA",
    Icon: TelegramIcon,
    action: ({ url, title }) =>
      window.open(
        `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        "_blank",
        "noopener,noreferrer"
      ),
  },
  {
    label: "Instagram",
    bg: "linear-gradient(45deg,#fdf497,#fd5949,#d6249f,#285AEB)",
    Icon: InstagramIcon,
    // Instagram has no web share intent for feed/DM links — copy the link
    // so it can be pasted into a Story, DM, or bio instead of a dead button.
    action: ({ onCopyLink }) => onCopyLink(),
  },
  {
    label: "Facebook",
    bg: "#1877F2",
    Icon: FacebookIcon,
    action: ({ url }) =>
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        "_blank",
        "noopener,noreferrer"
      ),
  },
  {
    label: "X",
    bg: "#000000",
    Icon: XIcon,
    action: ({ url, title }) =>
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        "_blank",
        "noopener,noreferrer"
      ),
  },
];

export default function ShareButton({
  title,
  text,
  url,
  className,
  variant = "default",
}: ShareButtonProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const canNativeShare = typeof navigator !== "undefined" && !!navigator.share;

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const shareUrl = url ?? (typeof window !== "undefined" ? window.location.href : "");

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setOpen(false);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — nothing more we can do
    }
  }

  async function nativeShare() {
    try {
      await navigator.share({ title, text, url: shareUrl });
      setOpen(false);
    } catch {
      // user cancelled the share sheet — nothing to do
    }
  }

  return (
    <div className="relative inline-block" ref={menuRef}>
      {variant === "icon" ? (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Share"
          className={`rounded-full p-1.5 text-navy-900/50 transition-colors hover:bg-navy-900/5 hover:text-navy-900 ${className ?? ""}`}
        >
          {copied ? <Check className="h-5 w-5 text-gold-600" /> : <Share2 className="h-5 w-5" />}
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
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
      )}

      {open && (
        <div className="absolute right-0 z-20 mt-2 w-56 rounded-2xl border border-navy-900/10 bg-white p-2 shadow-xl">
          <div className="grid grid-cols-1 gap-0.5">
            {platforms.map(({ label, bg, Icon, action }) => (
              <button
                key={label}
                type="button"
                onClick={() =>
                  action({ url: shareUrl, title, text: text ?? "", onCopyLink: copyLink })
                }
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium text-navy-900/80 transition-colors hover:bg-navy-900/5"
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ background: bg }}
                >
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </button>
            ))}
            {canNativeShare && (
              <button
                type="button"
                onClick={nativeShare}
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium text-navy-900/80 transition-colors hover:bg-navy-900/5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-900/10 text-navy-900">
                  <MoreHorizontal className="h-4 w-4" />
                </span>
                More apps…
              </button>
            )}
            <button
              type="button"
              onClick={copyLink}
              className="flex items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium text-navy-900/80 transition-colors hover:bg-navy-900/5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-900/10 text-navy-900">
                <Link2 className="h-4 w-4" />
              </span>
              Copy link
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
