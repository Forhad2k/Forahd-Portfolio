export type ProjectCategory =
  | "All"
  | "Next.js"
  | "Full-Stack"
  | "Squarespace"
  | "Shopify"
  | "E-commerce";

export interface Project {
  slug: string;
  name: string;
  type: string;
  categories: ProjectCategory[];
  description: string;
  problem: string;
  solution: string;
  challenges: string;
  result: string;
  stack: string[];
  year: string;
  href?: string;
  github?: string;
  placeholder?: boolean;
}

export const projects: Project[] = [
  {
    slug: "medistore",
    name: "MediStore",
    type: "Full-Stack E-commerce",
    categories: ["Full-Stack", "E-commerce", "Next.js"],
    description:
      "A full-stack medicine e-commerce platform with role-based authentication, product management, categories, cart flow and an admin dashboard.",
    problem:
      "Online pharmacies need strict role separation — a customer browsing medicine shouldn't share the same permissions as a seller managing inventory or an admin approving listings.",
    solution:
      "Built a modular backend with three distinct roles (Customer, Seller, Admin), strict route/controller/service separation, and Prisma transactions to keep inventory and order state consistent under concurrent checkouts.",
    challenges:
      "Designing role-based access control that stayed maintainable as the number of protected routes grew, and keeping stock levels accurate across simultaneous orders using database transactions instead of application-level locks.",
    result:
      "A production-shaped reference app now used as a core portfolio piece, demonstrating full ownership of the stack from schema design to role-gated UI.",
    stack: ["React", "Express.js", "Prisma", "PostgreSQL", "JWT"],
    year: "2026",
  },
  {
    slug: "squad-mart",
    name: "Squad Mart",
    type: "Full-Stack E-commerce",
    categories: ["Full-Stack", "E-commerce", "Next.js"],
    description:
      "A modern fashion e-commerce platform — full storefront and admin dashboard — with multi-gateway payments, coupons, wishlists and analytics.",
    problem:
      "A fashion retail client needed a complete commerce stack: browsing, cart, checkout, order history and an internal dashboard to actually run the business day to day.",
    solution:
      "Delivered a TypeScript/Express/Prisma backend (auth with token rotation, catalog, cart, checkout, coupons, wishlist, reviews) alongside a Next.js storefront and admin dashboard built on Redux Toolkit, with a custom 'roster / jersey' visual identity.",
    challenges:
      "Wiring checkout to run cart-to-order atomically in a single Prisma transaction — validating stock, applying coupon discounts, and restocking cleanly on cancellation — while supporting four payment gateways behind one initiate endpoint.",
    result:
      "Shipped a verified, clean production build covering the full storefront, admin dashboard, and analytics (sales charts, top products, order status, visitor tracking).",
    stack: ["Next.js", "Redux Toolkit", "Express.js", "Prisma", "PostgreSQL", "Cloudinary"],
    year: "2026",
  },
  {
    slug: "nova-boulders",
    name: "Nova Boulders",
    type: "Squarespace Development",
    categories: ["Squarespace"],
    description:
      "A climbing-gym website with a suite of custom-built animated UI components layered on top of Squarespace's CMS.",
    problem:
      "Squarespace strips CSS @keyframes declarations, which rules out standard CSS animation for a client who wanted a lively, energetic site to match a climbing gym's brand.",
    solution:
      "Built an animated hero background, a morphing CTA button, a dual-row logo marquee, and a pricing/membership comparison table using JavaScript-driven animation workarounds compatible with Squarespace's CSS restrictions.",
    challenges:
      "Recreating smooth, native-feeling motion inside a platform that actively strips the CSS features those animations would normally rely on.",
    result:
      "A distinctive, animated brand experience for the gym that stayed fully editable through Squarespace's CMS for non-technical updates.",
    stack: ["Squarespace", "JavaScript", "Custom CSS"],
    year: "2026",
  },
  {
    slug: "shopify-storefront",
    name: "Shopify Storefront",
    type: "Shopify Development",
    categories: ["Shopify", "E-commerce"],
    description:
      "Theme customization and storefront development on Shopify — responsive product layouts and e-commerce UX refinements for a client store.",
    problem:
      "Placeholder case study — swap in a real Shopify client project to replace this entry.",
    solution:
      "Placeholder — describe the theme customization, sections, and storefront work delivered.",
    challenges: "Placeholder — describe the theme-layer constraints and how they were solved.",
    result: "Placeholder — describe the measurable outcome for the client.",
    stack: ["Shopify", "Liquid", "JavaScript", "CSS"],
    year: "2026",
    placeholder: true,
  },
];

export const categories: ProjectCategory[] = [
  "All",
  "Next.js",
  "Full-Stack",
  "Squarespace",
  "Shopify",
  "E-commerce",
];
