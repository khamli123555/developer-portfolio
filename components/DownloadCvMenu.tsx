"use client";

import { useEffect, useRef, useState } from "react";
import { Download, ChevronDown } from "lucide-react";

export default function DownloadCvMenu({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!boxRef.current) return;
      if (!boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const download = (lang: "fr" | "en" | "de") => {
    const link = document.createElement("a");
    link.href = `/cv-${lang}.pdf`;
    link.download = `CV_${lang}.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setOpen(false);
  };

  return (
    <div ref={boxRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="px-8 py-3 border border-white/20 text-white font-medium rounded-full flex items-center gap-2 hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
      >
        <Download size={18} />
        {label}
        <ChevronDown size={16} className="opacity-80" />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 right-0 w-48 rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-xl overflow-hidden">
          <button
            type="button"
            onClick={() => download("fr")}
            className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition"
          >
            🇫🇷 Français
          </button>
          <button
            type="button"
            onClick={() => download("en")}
            className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition"
          >
            🇬🇧 English
          </button>
          <button
            type="button"
            onClick={() => download("de")}
            className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition"
          >
            🇩🇪 Deutsch
          </button>
        </div>
      )}
    </div>
  );
}
