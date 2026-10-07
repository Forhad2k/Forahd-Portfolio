import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Marquee from "./Marquee";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          index="02"
          label="Skills"
          heading="Tools I reach for, and trust."
          description="A consistent, production-tested stack — not a checklist of every framework I've ever opened."
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.06}>
              <div className="group">
                <div className="mb-5 flex items-baseline gap-2 border-b border-line pb-3">
                  <span className="font-mono text-[10px] text-signal">{group.index}</span>
                  <h3 className="font-display text-xl">{group.label}</h3>
                </div>
                <ul className="space-y-2.5">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <li
                        key={skill.name}
                        className="flex items-center gap-2.5 text-sm text-muted transition-colors duration-200 hover:text-ink"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-card/60">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>{skill.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <Marquee />
      </div>
    </section>
  );
}
