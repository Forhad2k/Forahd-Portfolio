import type { IconType } from "react-icons";
import {
  FaCode,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaPalette,
  FaReact,
} from "react-icons/fa6";
import {
  SiAuth0,
  SiExpress,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiOpenapiinitiative,
  SiPostgresql,
  SiPrisma,
  SiShopify,
  SiSquarespace,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWix,
} from "react-icons/si";

export interface SkillItem {
  name: string;
  icon: IconType;
}

export interface SkillGroup {
  label: string;
  index: string;
  skills: SkillItem[];
}

const skill = (name: string, icon: IconType): SkillItem => ({ name, icon });

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    index: "FE",
    skills: [
      skill("HTML", FaHtml5),
      skill("CSS", FaCss3Alt),
      skill("JavaScript", SiJavascript),
      skill("TypeScript", SiTypescript),
      skill("React", FaReact),
      skill("Next.js", SiNextdotjs),
      skill("Tailwind CSS", SiTailwindcss),
    ],
  },
  {
    label: "Backend",
    index: "BE",
    skills: [
      skill("Node.js", FaNodeJs),
      skill("Express.js", SiExpress),
      skill("REST APIs", SiOpenapiinitiative),
      skill("JWT", SiJsonwebtokens),
      skill("Authentication", SiAuth0),
    ],
  },
  {
    label: "Database",
    index: "DB",
    skills: [
      skill("MongoDB", SiMongodb),
      skill("PostgreSQL", SiPostgresql),
      skill("Prisma", SiPrisma),
    ],
  },
  {
    label: "CMS & Commerce",
    index: "CMS",
    skills: [
      skill("Squarespace", SiSquarespace),
      skill("Shopify", SiShopify),
      skill("Wix", SiWix),
    ],
  },
  {
    label: "Tooling",
    index: "TL",
    skills: [
      skill("Git", FaGitAlt),
      skill("GitHub", FaGithub),
      skill("Vite", SiVite),
      skill("VS Code", FaCode),
      skill("Figma", FaFigma),
      skill("Photoshop", FaPalette),
    ],
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
