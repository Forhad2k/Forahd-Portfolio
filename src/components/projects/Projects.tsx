"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/data/projects";
import { useAppSelector } from "@/store/hooks";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export default function Projects() {
  const activeFilter = useAppSelector((s) => s.ui.activeFilter);
  const [open, setOpen] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="work" className="border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          index="04"
          label="Selected Work"
          heading="Real builds, not templates."
          description="A mix of full-stack applications and production client sites — the same care goes into both."
        />

        <ProjectFilter />

        <motion.div
          layout
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} onOpen={setOpen} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="py-16 text-center font-mono text-sm text-muted">
            No projects in this category yet.
          </p>
        )}
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
