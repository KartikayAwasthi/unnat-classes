"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function DocViewer({ url }: { url: string }) {
  const [loading, setLoading] = useState(true);
  const officeViewerSrc = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}`;

  return (
    <div className="relative h-full bg-navy-900/5">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-navy-900/40" />
        </div>
      )}
      <iframe
        src={officeViewerSrc}
        title="Document preview"
        className="h-full w-full border-0"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
