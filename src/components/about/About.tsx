import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const stack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
  Backend: ["Node.js", "Express", "PostgreSQL", "Prisma"],
};

const focus = [
  "Frontend development",
  "Backend development",
  "CMS development",
  "E-commerce",
  "API development",
  "Database architecture",
];

export default function About() {
  return (
    <section id="about" className="border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          index="01"
          label="About"
          heading="A developer who understands both design and code."
        />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">
                I&apos;m Forhad, a full-stack developer based in Dhaka. My work spans two
                worlds most developers pick one of — custom software built from scratch with
                Next.js and PostgreSQL, and real client websites shipped fast on Squarespace
                and Shopify. Both require the same thing: understanding what the end user
                actually needs, then building it cleanly.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
              {focus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-wide text-muted"
                >
                  {item}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-line bg-surface p-8">
              <span className="eyebrow">Working across</span>
              <div className="mt-6 grid grid-cols-2 gap-8">
                {Object.entries(stack).map(([group, items]) => (
                  <div key={group}>
                    <h3 className="font-display text-lg">{group}</h3>
                    <ul className="mt-4 space-y-2.5">
                      {items.map((item) => (
                        <li key={item} className="font-mono text-[13px] text-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-wide text-muted">
                <span className="text-signal">+</span> Squarespace &amp; Shopify, production-shipped
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
