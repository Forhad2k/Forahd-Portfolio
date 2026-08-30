"use client";

import { Moon, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleTheme } from "@/store/themeSlice";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((s) => s.theme.mode);

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => dispatch(toggleTheme())}
      data-cursor=""
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-signal"
    >
      <Sun
        size={16}
        className={`absolute transition-all duration-300 ${
          mode === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      />
      <Moon
        size={16}
        className={`absolute transition-all duration-300 ${
          mode === "light" ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      />
    </button>
  );
}
