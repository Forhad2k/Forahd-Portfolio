export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    org: "Softvence",
    period: "Current",
    points: [
      "Frontend development across a rotating slate of client projects",
      "Squarespace development — custom layouts, CSS, animation",
      "Shopify development — theme and storefront customization",
      "React / Next.js development for custom client builds",
      "Responsive UI implementation and cross-browser QA",
      "Team collaboration inside an order-based delivery workflow",
    ],
  },
];
