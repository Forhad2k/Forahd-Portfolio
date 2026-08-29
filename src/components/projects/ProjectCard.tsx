"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { fadeUp } from "@/lib/motion";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.button
      layout
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -12, transition: { duration: 0.3 } }}
      onClick={() => onOpen(project)}
      data-cursor="VIEW"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface p-8 text-left transition-colors duration-300 hover:border-signal/50"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-[11px] text-muted">{project.year}</span>
        <ArrowUpRight
          size={18}
          className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
        />
      </div>

      <div className="mt-16">
        <span className="eyebrow">{project.type}</span>
        <h3 className="mt-3 font-display text-3xl transition-transform duration-300 group-hover:translate-x-1 md:text-4xl">
          {project.name}
        </h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
          {project.description}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2 border-t border-line pt-6">
        {project.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-signal/0 blur-3xl transition-colors duration-500 group-hover:bg-signal/10" />
    </motion.button>
  );
}
