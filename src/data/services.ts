export interface Service {
  index: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    index: "01",
    title: "Custom Web Development",
    description:
      "Modern, scalable web applications built with Next.js, React and TypeScript — from first commit to production deploy.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    index: "02",
    title: "Full-Stack Development",
    description:
      "Complete applications end to end: Next.js on the front, Node.js/Express on the back, PostgreSQL and Prisma underneath.",
    tags: ["Node.js", "Express", "PostgreSQL", "Prisma"],
  },
  {
    index: "03",
    title: "Squarespace Development",
    description:
      "Custom Squarespace builds — custom CSS, responsive layouts, animation workarounds, and CMS customization for non-technical clients.",
    tags: ["Squarespace", "Custom CSS", "Animation"],
  },
  {
    index: "04",
    title: "Shopify Development",
    description:
      "Custom Shopify storefronts and theme customization, tuned for responsive layouts and real e-commerce conversion.",
    tags: ["Shopify", "Liquid", "E-commerce"],
  },
  {
    index: "05",
    title: "API & Backend Development",
    description:
      "REST APIs, authentication flows, database architecture and backend integrations that hold up under real traffic.",
    tags: ["REST", "JWT", "Architecture"],
  },
];
