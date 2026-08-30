export interface SkillGroup {
  label: string;
  index: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    index: "FE",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    index: "BE",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Authentication"],
  },
  {
    label: "Database",
    index: "DB",
    skills: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    label: "CMS & Commerce",
    index: "CMS",
    skills: ["Squarespace", "Shopify", "Wix"],
  },
  {
    label: "Tooling",
    index: "TL",
    skills: ["Git", "GitHub", "Vite", "VS Code", "Figma", "Photoshop"],
  },
];

export const marqueeSkills = [
  "NEXT.JS",
  "REACT",
  "NODE.JS",
  "TYPESCRIPT",
  "POSTGRESQL",
  "PRISMA",
  "SHOPIFY",
  "SQUARESPACE",
  "EXPRESS.JS",
  "TAILWIND CSS",
];
