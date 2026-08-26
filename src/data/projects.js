export const GITHUB_URL = "https://github.com/kseniche";

export const FIGMA_URLS = {
  promptly:
    "https://www.figma.com/design/Ok5c4n6HTynuxw9zeKTe3e/Promptly-AI?node-id=91-319&t=tazqdTQj0n3IcKWw-1",
  crm: "https://www.figma.com/design/062byklUZsOkvseGyoW2Tb/Beauty-CRM?node-id=0-1&t=sEdwGy4PJiASyDgs-1",
};

const projects = [
  {
    id: "promptly",
    title: "Promptly AI",
    category: "UI/UX · Landing page",
    description:
      "A conceptual SaaS landing page exploring visual hierarchy, product presentation and conversion-oriented layout.",
    image: "/images/promptly/cover.png",
    role: "UX/UI Designer",
    tools: ["Figma", "Photoshop"],
    year: "2026",
    duration: "5 days",
    platform: "Desktop & mobile concept",
    subtitle: "A landing page concept for an AI-assisted content platform.",
    figmaUrl: FIGMA_URLS.promptly,
    coverImage: "/images/promptly/cover.png",
    coverAlt: "Promptly AI landing page concept",
    mobileImage: "/images/promptly/mobile.png",
    wireframes: [
      "/images/promptly/wireframe-01.png",
      "/images/promptly/wireframe-02.png",
    ],
    finalImages: [
      "/images/promptly/final-01.png",
      "/images/promptly/final-02.png",
      "/images/promptly/final-03.png",
    ],
  },
  {
    id: "crm",
    title: "BeautyCRM",
    category: "UI/UX · Desktop CRM",
    description:
      "A desktop CRM interface concept for beauty salons, focused on customer retention, risk segmentation and campaign analytics.",
    image: "/images/crm/dashboard.png",
    role: "UX/UI Designer",
    tools: ["Figma"],
    year: "2026",
    duration: "Concept",
    platform: "Desktop",
    type: "B2B CRM concept",
    product: "Customer retention CRM concept",
    subtitle:
      "A desktop CRM concept for customer retention in beauty businesses.",
    figmaUrl: FIGMA_URLS.crm,
    coverImage: "/images/crm/cover.png",
    coverAlt: "BeautyCRM dashboard concept in a desktop mockup",
    wireframes: [
      "/images/crm/wireframe-risk.png",
      "/images/crm/wireframe-profile.png",
    ],
    wireframeLabels: ["Customer & Risk", "Customer Profile"],
    screens: [
      {
        id: "dashboard",
        label: "01 / Dashboard",
        title: "Start with the bigger picture.",
        description:
          "The dashboard concept gathers at-risk customers, retention dynamics, acquisition and key revenue indicators into a single overview.",
        image: "/images/crm/dashboard.png",
        alt: "BeautyCRM dashboard overview concept",
      },
      {
        id: "risk",
        label: "02 / Customer & Risk",
        title: "Turn customer risk into an action.",
        description:
          "The interface explores how segmentation and filters could help an administrator narrow a customer group and prepare a retention campaign.",
        image: "/images/crm/client-risk.png",
        alt: "BeautyCRM Customer and Risk screen concept",
      },
      {
        id: "profile",
        label: "03 / Customer Profile",
        title: "Understand the customer in context.",
        description:
          "The concept explores how visit history, spending, notes and AI-assisted insights could sit together in one customer profile.",
        image: "/images/crm/customer-profile.png",
        alt: "BeautyCRM customer profile concept",
      },
      {
        id: "analytics",
        label: "04 / Campaign Analytics",
        title: "Close the loop with performance data.",
        description:
          "Campaign results are presented conceptually through bookings, conversion, revenue, ROI and distribution metrics.",
        image: "/images/crm/campaign-analytics.png",
        alt: "BeautyCRM campaign analytics concept",
      },
    ],
  },
];

export function getProject(id) {
  return projects.find((project) => project.id === id);
}

export default projects;
