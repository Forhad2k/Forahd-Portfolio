import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading index="03" label="Services" heading="What I do." />

        <div>
          {services.map((service, i) => (
            <Reveal key={service.index} delay={i * 0.05}>
              <div className="group grid grid-cols-1 items-start gap-4 border-t border-line py-8 last:border-b md:grid-cols-[80px_1fr_1fr] md:gap-8">
                <span className="font-mono text-sm text-muted">{service.index}</span>
                <h3 className="font-display text-2xl transition-colors duration-300 group-hover:text-signal md:text-3xl">
                  {service.title}
                </h3>
                <div>
                  <p className="max-w-md text-muted leading-relaxed">{service.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
