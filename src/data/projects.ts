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
  image?: string;
  adminNote?: string;
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
    href: "https://medistorebd.netlify.app/",
    github: "https://github.com/Forhad2k/medistore-frontend",
    image:
      "https://res.cloudinary.com/xrh3dd7l/image/upload/v1791370231/screencapture-medistorebd-netlify-app-2026-10-07-16_50_08.png",
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
    github: "https://github.com/Forhad2k",
  },
  {
    slug: "citylights-black-truck",
    name: "City Lights Black Truck",
    type: "Squarespace Website",
    categories: ["Squarespace"],
    description:
      "Luxury-style Squarespace website focused on presenting a premium black-truck brand with a clean editorial layout and strong conversion flow.",
    problem:
      "The brand needed a polished, premium online presence that felt elevated without sacrificing ease of editing inside Squarespace.",
    solution:
      "Built a refined Squarespace experience with custom styling, section flow, and visual hierarchy tailored to the brand's premium positioning and service messaging.",
    challenges:
      "Balancing an upscale visual aesthetic with the platform's layout and CMS limitations while keeping the content simple to maintain for the client.",
    result:
      "A clean, conversion-focused Squarespace site that presents the business with a high-end feel and a strong first impression for visitors.",
    stack: ["Squarespace", "Custom CSS", "Brand Styling"],
    year: "2026",
    href: "https://www.citylightsblacktruck.com/",
    github: "https://github.com/Forhad2k",
    image:
      "https://res.cloudinary.com/xrh3dd7l/image/upload/v1791367965/screencapture_parsnip_vibraphone_d7en_squarespace_2026_02_02_18.png",
    adminNote: "If this website is password protected, the access password is in the admin area.",
  },
  {
    slug: "good-ohm-electric",
    name: "Good Ohm Electric",
    type: "Squarespace Website",
    categories: ["Squarespace"],
    description:
      "A professional service website for an electrical company, built to communicate trust, expertise, and fast response with a clean Squarespace structure.",
    problem:
      "The client needed a credible, local-business look that communicated professionalism and made it easy for visitors to contact the business quickly.",
    solution:
      "Designed and implemented a clean Squarespace layout with service-focused messaging, polished visual sections, and mobile-friendly presentation tailored to the client profile.",
    challenges:
      "Maintaining a straightforward, conversion-friendly experience while staying within the limits of Squarespace's built-in tools and styling system.",
    result:
      "A polished and trustworthy website presence that is easy to manage and aligns with the service brand and local market positioning.",
    stack: ["Squarespace", "Custom CSS", "Responsive Design"],
    year: "2026",
    href: "https://www.goodohmselectric.com/",
    github: "https://github.com/Forhad2k",
    image:
      "https://res.cloudinary.com/xrh3dd7l/image/upload/v1791368063/screencapture-goodohmselectric-2026-02-19-10_23_22_2.png",
    adminNote: "If this website is password protected, the access password is in the admin area.",
  },
  {
    slug: "salamander-pufferfish",
    name: "Salamander Pufferfish",
    type: "Squarespace Website",
    categories: ["Squarespace"],
    description:
      "A creative brand website for a design-focused business, using a distinct visual tone and flexible content layout inside Squarespace.",
    problem:
      "The client wanted a brand-forward website that felt artistic and memorable without becoming difficult to manage in a CMS-driven workflow.",
    solution:
      "Delivered a custom-styled Squarespace experience with strong visual storytelling, structured content blocks, and a user-friendly admin setup.",
    challenges:
      "Creating a distinctive identity within straight-forward Squarespace templates while preserving clear content management for future updates.",
    result:
      "A flexible, polished online presence that gives the client a more premium and memorable brand presentation.",
    stack: ["Squarespace", "Custom CSS", "Brand Design"],
    year: "2026",
    href: "https://salamander-pufferfish-2fc9.squarespace.com/",
    github: "https://github.com/Forhad2k",
    image:
      "https://res.cloudinary.com/xrh3dd7l/image/upload/v1791368321/screencapture_salamander_pufferfish_2fc9_squarespace_2026_03_07_2.png",
    adminNote: "If this website is password protected, the access password is in the admin area.",
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
    href: "https://www.novaboulders.com/",
    github: "https://github.com/Forhad2k",
    image:
      "https://res.cloudinary.com/xrh3dd7l/image/upload/v1791368661/screencapture_hawk_trout_al6k_squarespace_2026_07_15_07_23_44_2.png",
    adminNote: "If this website is password protected, the access password is in the admin area.",
  },
  {
    slug: "belancer-landing-page",
    name: "Belancer",
    type: "Landing Page Website",
    categories: ["Next.js"],
    description:
      "A custom landing page for a business site, designed to present the service clearly and convert visitors with a polished, modern structure.",
    problem:
      "The brand needed a clean and high-impact landing page that communicated value quickly and worked well for marketing-focused traffic.",
    solution:
      "Built a custom, responsive landing page with strong content hierarchy, conversion-oriented sections, and a polished visual system tailored to the brand.",
    challenges:
      "Creating a premium presentation while keeping the page lightweight, conversion-focused, and easy to maintain for future updates.",
    result:
      "A crisp, modern landing page that delivers a strong first impression and better marketing clarity for the brand.",
    stack: ["Next.js", "Custom CSS", "Responsive Design"],
    year: "2026",
    href: "https://belancer.netlify.app/",
    github: "https://github.com/Forhad2k/belancer",
    image:
      "https://res.cloudinary.com/xrh3dd7l/image/upload/v1791369879/screencapture-belancer-netlify-app-2026-10-07-16_41_28.png",
  },
  {
    slug: "bytespace-landing-page",
    name: "Bytespace",
    type: "Landing Page Website",
    categories: ["Next.js"],
    description:
      "A modern landing page for a digital brand, focused on strong messaging, polished visuals, and a clean conversion path for visitors.",
    problem:
      "The client needed a sleek marketing site that quickly explained the value proposition and presented the brand in a premium light.",
    solution:
      "Created a layered landing page with standout typography, coherent content sections, and a refined visual rhythm designed for quick audience engagement.",
    challenges:
      "Crafting a modern, high-end presentation while keeping the layout fast, readable, and aligned with conversion-focused design priorities.",
    result:
      "A clean and compelling landing page that feels polished and supports stronger brand recognition and first-click engagement.",
    stack: ["Next.js", "Custom CSS", "Landing Page Design"],
    year: "2026",
    href: "https://bytespace-ochre.vercel.app/",
    github: "https://github.com/Forhad2k/bytespace",
    image:
      "https://res.cloudinary.com/xrh3dd7l/image/upload/v1791369974/screencapture-bytespace-ochre-vercel-app-2026-10-07-16_45_52.png",
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
