type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export default function Logo({ className = "h-10 w-10", variant = "dark" }: LogoProps) {
  const navy = variant === "dark" ? "#0b1e45" : "#ffffff";
  const gold = "#f2a71b";

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Unnat Classes emblem"
    >
      <path
        d="M50 30 L58 46 L76 48 L62 60 L66 78 L50 68 L34 78 L38 60 L24 48 L42 46 Z"
        fill={gold}
      />
      <circle cx="50" cy="14" r="4" fill={gold} />
      <path
        d="M50 46 C50 46 46 34 38 30 C33 27.5 28 28 28 28 C28 28 29 34 34 38 C39 42 50 46 50 46 Z"
        fill={navy}
      />
      <path
        d="M50 46 C50 46 54 34 62 30 C67 27.5 72 28 72 28 C72 28 71 34 66 38 C61 42 50 46 50 46 Z"
        fill={navy}
      />
      <path
        d="M14 66 C14 66 30 58 50 58 C70 58 86 66 86 66 L86 74 C86 74 70 66 50 66 C30 66 14 74 14 74 Z"
        fill={navy}
      />
      <path
        d="M14 66 C14 66 30 58 50 58 L50 66 C30 66 14 74 14 74 Z"
        fill={navy}
        opacity="0.85"
      />
      <path
        d="M50 58 C70 58 86 66 86 66 L86 74 C86 74 70 66 50 66 Z"
        fill={gold}
        opacity="0.9"
      />
    </svg>
  );
}
