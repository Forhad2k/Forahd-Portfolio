import { marqueeSkills } from "@/data/skills";

export default function Marquee() {
  const track = [...marqueeSkills, ...marqueeSkills];

  return (
    <div className="relative overflow-hidden border-y border-line py-6">
      <div className="marquee-track">
        {track.map((skill, i) => (
          <div key={i} className="flex items-center px-6 shrink-0">
            <span className="font-display text-2xl md:text-4xl tracking-tight text-muted/70">
              {skill}
            </span>
            <span className="mx-6 h-1.5 w-1.5 rounded-full bg-signal" />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-canvas to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-canvas to-transparent" />
    </div>
  );
}
