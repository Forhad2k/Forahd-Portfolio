"use client";

import { categories } from "@/data/projects";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setActiveFilter } from "@/store/uiSlice";
import { cn } from "@/lib/cn";

export default function ProjectFilter() {
  const dispatch = useAppDispatch();
  const active = useAppSelector((s) => s.ui.activeFilter);

  return (
    <div className="mb-12 flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => dispatch(setActiveFilter(cat))}
          data-cursor=""
          className={cn(
            "rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-wide transition-colors duration-300",
            active === cat
              ? "border-ink bg-ink text-canvas"
              : "border-line text-muted hover:text-ink"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
