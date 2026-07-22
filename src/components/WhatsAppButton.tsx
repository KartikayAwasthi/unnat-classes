import { SITE } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] sm:h-16 sm:w-16 md:bottom-8 md:right-8"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40 group-hover:opacity-0" />
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="relative h-8 w-8 sm:h-9 sm:w-9"
        fill="currentColor"
      >
        <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.34.665 4.523 1.816 6.377L4 29l7.82-1.767A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.356l-.355-.21-4.64 1.047 1.03-4.53-.232-.37A9.7 9.7 0 0 1 5.25 15c0-5.93 4.824-10.75 10.754-10.75S26.758 9.07 26.758 15 21.934 24.75 16.004 24.75Zm5.74-8.06c-.314-.157-1.858-.917-2.146-1.022-.288-.105-.497-.157-.706.157-.209.314-.81 1.022-.993 1.232-.183.21-.366.236-.68.079-.314-.157-1.325-.489-2.523-1.559-.933-.833-1.563-1.862-1.746-2.176-.183-.314-.02-.484.137-.64.14-.14.314-.366.47-.55.157-.183.21-.314.314-.523.105-.21.052-.393-.026-.55-.079-.157-.706-1.703-.968-2.332-.255-.612-.514-.53-.706-.54-.183-.009-.392-.011-.601-.011a1.15 1.15 0 0 0-.836.393c-.288.314-1.098 1.074-1.098 2.62 0 1.546 1.124 3.04 1.28 3.25.157.21 2.212 3.378 5.36 4.737.749.323 1.333.516 1.789.66.751.239 1.434.205 1.974.124.602-.09 1.858-.76 2.12-1.494.262-.733.262-1.362.183-1.494-.078-.131-.287-.209-.601-.366Z" />
      </svg>
    </a>
  );
}
