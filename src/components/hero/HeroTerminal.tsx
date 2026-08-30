"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { prompt: "~/forhad", cmd: "whoami" },
  { output: "full-stack developer" },
  { prompt: "~/forhad", cmd: "cat stack.json" },
  {
    output: `{
  "frontend": ["Next.js", "React", "TypeScript"],
  "backend": ["Node.js", "Express", "Prisma"],
  "database": "PostgreSQL",
  "also": ["Squarespace", "Shopify"]
}`,
  },
  { prompt: "~/forhad", cmd: "status --availability" },
  { output: "● available for freelance & remote work" },
];

export default function HeroTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= lines.length) return;
    const delay = lines[visibleLines]?.cmd ? 420 : 260;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), delay);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 1.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="relative w-full max-w-md rounded-2xl border border-line bg-surface shadow-2xl shadow-ink/5"
    >
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
        <span className="ml-3 font-mono text-[11px] text-muted">forhad@dev — zsh</span>
      </div>
      <div className="min-h-[280px] p-5 font-mono text-[12.5px] leading-relaxed">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="mb-1.5">
            {line.cmd ? (
              <div>
                <span className="text-signal">{line.prompt}</span>
                <span className="text-muted"> $ </span>
                <span className="text-ink">{line.cmd}</span>
              </div>
            ) : (
              <pre className="whitespace-pre-wrap text-muted">{line.output}</pre>
            )}
          </div>
        ))}
        {visibleLines < lines.length ? (
          <span className="inline-block h-3.5 w-1.5 animate-blink bg-signal align-middle" />
        ) : (
          <div className="mt-1">
            <span className="text-signal">~/forhad</span>
            <span className="text-muted"> $ </span>
            <span className="inline-block h-3.5 w-1.5 animate-blink bg-signal align-middle" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
