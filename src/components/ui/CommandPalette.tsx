"use client";

import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  User,
  Wrench,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  SunMoon,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCommandPaletteOpen, toggleCommandPalette } from "@/store/uiSlice";
import { toggleTheme } from "@/store/themeSlice";
import { site } from "@/data/site";

interface Command {
  label: string;
  icon: React.ElementType;
  action: () => void;
  group: string;
}

export default function CommandPalette() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((s) => s.ui.commandPaletteOpen);

  const close = useCallback(() => dispatch(setCommandPaletteOpen(false)), [dispatch]);

  const goTo = useCallback(
    (id: string) => {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
      close();
    },
    [close]
  );

  const commands: Command[] = [
    { label: "Go Home", icon: Home, action: () => goTo("#top"), group: "Navigate" },
    { label: "About", icon: User, action: () => goTo("#about"), group: "Navigate" },
    { label: "Skills", icon: Wrench, action: () => goTo("#skills"), group: "Navigate" },
    { label: "Work", icon: Briefcase, action: () => goTo("#work"), group: "Navigate" },
    { label: "Contact", icon: Mail, action: () => goTo("#contact"), group: "Navigate" },
    {
      label: "Toggle Theme",
      icon: SunMoon,
      action: () => {
        dispatch(toggleTheme());
        close();
      },
      group: "Action",
    },
    {
      label: "Open GitHub",
      icon: Github,
      action: () => window.open(site.github, "_blank"),
      group: "Links",
    },
    {
      label: "Open LinkedIn",
      icon: Linkedin,
      action: () => window.open(site.linkedin, "_blank"),
      group: "Links",
    },
  ];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        dispatch(toggleCommandPalette());
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [dispatch, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-start justify-center pt-[14vh] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={close}
          />
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-xl border border-line bg-surface shadow-2xl"
            role="dialog"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-2 border-b border-line px-4 py-3 font-mono text-xs text-muted">
              <span>⌘K</span>
              <span>·</span>
              <span>Jump anywhere</span>
            </div>
            <div className="max-h-[50vh] overflow-y-auto p-2">
              {commands.map((cmd) => (
                <button
                  key={cmd.label}
                  onClick={cmd.action}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-ink transition-colors hover:bg-canvas"
                >
                  <cmd.icon size={15} className="text-signal" />
                  {cmd.label}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
