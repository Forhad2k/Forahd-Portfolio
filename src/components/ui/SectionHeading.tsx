import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  label,
  heading,
  description,
}: {
  index: string;
  label: string;
  heading: string;
  description?: string;
}) {
  return (
    <div className="mb-14 md:mb-20">
      <Reveal>
        <div className="flex items-center gap-3 mb-5">
          <span className="eyebrow">{index}</span>
          <span className="h-px w-8 bg-line" />
          <span className="eyebrow">{label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight max-w-3xl leading-[1.05]">
          {heading}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-muted max-w-xl text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
