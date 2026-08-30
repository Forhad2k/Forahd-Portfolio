"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import { viewportOnce } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading index="05" label="Experience" heading="Where I've worked." />

        <div className="relative max-w-2xl">
          <div className="absolute left-[7px] top-2 h-full w-px bg-line" aria-hidden="true">
            <motion.div
              className="w-px bg-signal"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={viewportOnce}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="space-y-14">
            {experience.map((item, i) => (
              <motion.div
                key={item.org}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-signal bg-canvas" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-2xl md:text-3xl">{item.role}</h3>
                  <span className="font-mono text-xs text-signal">{item.period}</span>
                </div>
                <p className="mt-1 font-mono text-sm text-muted">{item.org}</p>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
