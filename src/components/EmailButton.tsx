import { Mail } from "lucide-react";
import { SITE } from "@/lib/data";

export default function EmailButton() {
  return (
    <a
      href={SITE.emailHref}
      aria-label="Email us"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-900 sm:h-16 sm:w-16 md:bottom-8 md:right-8"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-navy-900 opacity-40 group-hover:opacity-0" />
      <Mail className="relative h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
    </a>
  );
}
