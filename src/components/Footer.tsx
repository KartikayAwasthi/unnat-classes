import Link from "next/link";
import { MapPin, Phone, BookOpen } from "lucide-react";
import Logo from "./Logo";
import { SITE, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-auto bg-navy-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo className="h-10 w-10" variant="light" />
            <span className="font-heading text-lg font-bold tracking-tight">
              UNNAT <span className="text-gold-400">CLASSES</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Building Strong Foundations for a Bright Future.
          </p>
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
