"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Command } from "lucide-react";
import { navLinks, site } from "@/data/site";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MagneticButton from "@/components/ui/MagneticButton";
import { useAppDispatch } from "@/store/hooks";
import { setCommandPaletteOpen } from "@/store/uiSlice";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div
          className={`mx-auto flex max-w-content items-center justify-between px-6 transition-all duration-500 ${
            scrolled
              ? "rounded-full border border-line bg-surface/70 py-2.5 pl-5 pr-3 backdrop-blur-xl shadow-sm max-w-[calc(theme(maxWidth.content)-4rem)]"
              : "px-6"
          }`}
        >
          <a href="#top" data-cursor="" className="font-display text-lg font-semibold tracking-tight">
            {site.name.split(" ")[0]}
            <span className="text-signal">.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor=""
                className="group relative font-mono text-[11px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-signal transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => dispatch(setCommandPaletteOpen(true))}
              data-cursor=""
              className="hidden items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-signal hover:text-ink md:flex"
              aria-label="Open command palette"
            >
              <Command size={12} />K
            </button>
            <ThemeToggle />
            <MagneticButton
              href="#contact"
              cursorLabel="TALK"
              className="hidden rounded-full bg-ink px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.1em] text-canvas md:inline-flex"
            >
              Let&apos;s Talk
            </MagneticButton>
            <button
              className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-line md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[95] flex flex-col bg-canvas px-6 pt-6 md:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between pb-8">
              <span className="font-display text-lg font-semibold">{site.name}</span>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="border-b border-line py-4 font-display text-3xl"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="flex items-center justify-between border-t border-line py-6 font-mono text-xs text-muted">
              <span>{site.availability}</span>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
