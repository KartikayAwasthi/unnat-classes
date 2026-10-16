"use client";

import { useMemo, useState } from "react";
import { Calendar, Images, X } from "lucide-react";
import DailyCurrentAffairCard from "./DailyCurrentAffairCard";
import type { DailyCurrentAffair } from "@/lib/api";

type SortOrder = "latest" | "oldest";

type Props = {
  entries: DailyCurrentAffair[];
};

export default function DailyCurrentAffairsGrid({ entries }: Props) {
  const [sortOrder, setSortOrder] = useState<SortOrder>("latest");
  const [dateFilter, setDateFilter] = useState("");

  const { minDate, maxDate } = useMemo(() => {
    const dates = entries.map((e) => e.date).sort();
    return { minDate: dates[0], maxDate: dates[dates.length - 1] };
  }, [entries]);

  const visible = useMemo(() => {
    const filtered = dateFilter ? entries.filter((e) => e.date === dateFilter) : entries;
    return [...filtered].sort((a, b) =>
      sortOrder === "latest" ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)
    );
  }, [entries, sortOrder, dateFilter]);

  if (entries.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 py-16 text-center text-navy-900/50">
        <Images className="h-10 w-10 text-gold-400" strokeWidth={1.5} />
        <p>No updates posted yet — check back soon.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-full border border-navy-900/10 bg-cream p-1">
          <button
            type="button"
            onClick={() => setSortOrder("latest")}
            aria-pressed={sortOrder === "latest"}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
              sortOrder === "latest" ? "bg-navy-900 text-white" : "text-navy-900/60 hover:text-navy-900"
            }`}
          >
            Latest first
          </button>
          <button
            type="button"
            onClick={() => setSortOrder("oldest")}
            aria-pressed={sortOrder === "oldest"}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
              sortOrder === "oldest" ? "bg-navy-900 text-white" : "text-navy-900/60 hover:text-navy-900"
            }`}
          >
            Oldest first
          </button>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-navy-900/10 bg-cream px-3 py-1.5">
          <Calendar className="h-4 w-4 shrink-0 text-navy-900/40" />
          <input
            type="date"
            value={dateFilter}
            min={minDate}
            max={maxDate}
            onChange={(e) => setDateFilter(e.target.value)}
            aria-label="Jump to a specific date"
            className="bg-transparent text-xs font-semibold text-navy-900 outline-none [color-scheme:light]"
          />
          {dateFilter && (
            <button
              type="button"
              onClick={() => setDateFilter("")}
              aria-label="Clear date filter"
              className="rounded-full p-0.5 text-navy-900/40 transition-colors hover:text-navy-900"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-16 text-center text-navy-900/50">
          <Calendar className="h-10 w-10 text-gold-400" strokeWidth={1.5} />
          <p>No update posted on that date.</p>
          <button type="button" onClick={() => setDateFilter("")} className="text-sm font-semibold text-gold-600">
            Clear date filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-1 sm:gap-2 lg:grid-cols-4">
          {visible.map((entry, i) => (
            <DailyCurrentAffairCard key={entry.slug} entry={entry} priority={i < 6} />
          ))}
        </div>
      )}
    </div>
  );
}
