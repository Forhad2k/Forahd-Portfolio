"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { hydrateTheme, type Theme } from "@/store/themeSlice";

export default function ThemeInitializer() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const stored = window.localStorage.getItem("forhad-theme") as Theme | null;
    const initial: Theme = stored ?? "dark";
    document.documentElement.classList.toggle("dark", initial === "dark");
    dispatch(hydrateTheme(initial));
  }, [dispatch]);

  return null;
}
