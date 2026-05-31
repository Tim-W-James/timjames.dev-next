export const NAV_ROUTES = {
  home: {
    title: "Home",
    description: undefined,
    route: "/",
  },
  projects: {
    title: "Projects",
    description: "View my past projects, career events, and more.",
    route: "/projects",
  },
  blog: {
    title: "Blog",
    description: "View my blog - web development, tech tips, and more.",
    route: "/blog",
  },
  contact: {
    title: "Contact",
    description: "Find me on social media, or send me an email.",
    route: "/contact",
  },
} as const;
