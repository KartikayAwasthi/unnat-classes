import Link from "next/link";
import { MapPin, Phone, Mail, BookOpen } from "lucide-react";
import Logo from "./Logo";
import { SITE, navLinks } from "@/lib/data";

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="#FF0000"
        d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.87.56 9.38.56 9.38.56s7.51 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8Z"
      />
      <path fill="#fff" d="M9.6 15.6V8.4l6.27 3.6-6.27 3.6Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <defs>
        <radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <path
        fill="url(#ig-gradient)"
        d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 3.06a6.74 6.74 0 1 0 0 13.48 6.74 6.74 0 0 0 0-13.48Zm0 11.12a4.38 4.38 0 1 1 0-8.76 4.38 4.38 0 0 1 0 8.76Zm7-11.4a1.57 1.57 0 1 1-3.15 0 1.57 1.57 0 0 1 3.15 0Z"
      />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect width="24" height="24" rx="5" fill="#000" />
      <path
        fill="#fff"
        d="M17.3 5.5h2.4l-5.2 6 6.1 8h-4.8l-3.8-4.9-4.3 4.9H5.3l5.6-6.4-5.9-7.6h4.9l3.4 4.5 4-4.5Zm-.85 12.6h1.33L8.6 6.83H7.17L16.45 18.1Z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto bg-navy-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo className="h-[75px] w-[75px]" />
            <span className="font-heading text-lg font-bold tracking-tight">
              UNNAT <span className="text-gold-400">CLASSES</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Building Strong Foundations for a Bright Future.
          </p>
          <div className="mt-5 flex items-center gap-4">
            <a
              href={SITE.youtubeHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Unnat Classes on YouTube"
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              <YoutubeIcon className="h-6 w-6" />
            </a>
            <a
              href={SITE.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Unnat Classes on Instagram"
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              <InstagramIcon className="h-6 w-6 rounded-md" />
            </a>
            <a
              href={SITE.twitterHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Unnat Classes on X"
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              <XIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold-400">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold-400">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a
                href={SITE.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {SITE.address}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={SITE.phoneHref} className="hover:text-white">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={SITE.emailHref} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <BookOpen className="h-4 w-4 shrink-0 text-gold-400" />
              Let&apos;s Learn Today to Lead Tomorrow!
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Unnat Classes. All rights reserved.
      </div>
    </footer>
  );
}
