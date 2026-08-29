"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { site } from "@/data/site";
import MagneticButton from "@/components/ui/MagneticButton";
import HeroTerminal from "./HeroTerminal";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center pt-28 pb-16">
      <div className="mx-auto grid w-full max-w-content grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px] tracking-wide text-muted">
              {site.availability}
            </span>
          </motion.div>

          <h1 className="font-display text-[13vw] leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.2rem]">
            {"Building digital".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="mr-4 inline-block"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="mr-4 inline-block italic text-muted"
            >
              experiences
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              that actually work.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-7 max-w-lg text-base leading-relaxed text-muted md:text-lg"
          >
            {site.supporting}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#work"
              cursorLabel="VIEW"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.1em] text-canvas"
            >
              View My Work
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.1em] text-ink"
            >
              Let&apos;s Talk
            </MagneticButton>
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroTerminal />
        </div>
      </div>

      <motion.a
        href="#about"
        data-cursor=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted sm:flex"
      >
        Scroll
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
