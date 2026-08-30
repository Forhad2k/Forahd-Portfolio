"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-line bg-surface p-8 sm:rounded-2xl sm:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} case study`}
          >
            <button
              onClick={onClose}
              data-cursor=""
              className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors hover:border-signal"
              aria-label="Close case study"
            >
              <X size={16} />
            </button>

            <span className="eyebrow">{project.type}</span>
            <h3 className="mt-3 font-display text-4xl md:text-5xl">{project.name}</h3>
            {project.placeholder && (
              <p className="mt-3 rounded-lg border border-signal/30 bg-signal/5 px-3 py-2 font-mono text-[11px] text-signal">
                Placeholder case study — swap in your real project details here.
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-9 space-y-7">
              {[
                { label: "Overview", body: project.description },
                { label: "Problem", body: project.problem },
                { label: "Solution", body: project.solution },
                { label: "Challenges", body: project.challenges },
                { label: "Result", body: project.result },
              ].map((block) => (
                <div key={block.label}>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-signal">
                    {block.label}
                  </span>
                  <p className="mt-2 leading-relaxed text-muted">{block.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3 border-t border-line pt-6">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 font-mono text-[11px] uppercase tracking-wide text-canvas"
                >
                  Live Demo <ArrowUpRight size={13} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 font-mono text-[11px] uppercase tracking-wide text-ink"
                >
                  <Github size={13} /> GitHub
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
