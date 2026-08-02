type Props = {
  date: string | null;
  size?: "sm" | "lg";
};

export default function ExamDateChip({ date, size = "sm" }: Props) {
  const dims = size === "lg" ? "px-4 py-2.5" : "px-3 py-1.5";
  const dayText = size === "lg" ? "text-3xl" : "text-xl";
  const labelText = size === "lg" ? "text-xs" : "text-[10px]";

  if (!date) {
    return (
      <div className={`flex flex-col items-center justify-center rounded-xl bg-white/95 leading-none shadow-md ${dims}`}>
        <span className={`${labelText} font-bold uppercase tracking-wide text-navy-900/50`}>Date</span>
        <span className={`${size === "lg" ? "text-base" : "text-sm"} font-extrabold text-navy-900`}>TBA</span>
      </div>
    );
  }

  const parsed = new Date(date);
  const day = parsed.getDate();
  const month = parsed.toLocaleDateString("en-IN", { month: "short" });

  return (
    <div className={`flex flex-col items-center justify-center rounded-xl bg-gold-400 leading-none shadow-md ${dims}`}>
      <span className={`${dayText} font-extrabold text-navy-950`}>{day}</span>
      <span className={`${labelText} font-bold uppercase tracking-wide text-navy-950`}>{month}</span>
    </div>
  );
}
