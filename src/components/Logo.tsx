import Image from "next/image";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "h-10 w-10" }: LogoProps) {
  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden rounded-full ${className}`}
    >
      <Image
        src="/images/logo.png"
        alt="Unnat Classes logo"
        fill
        sizes="64px"
        className="object-cover"
        priority
      />
    </span>
  );
}
