export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "ПРИВЕТ!!!!!",
  navItems: [
    {
      label: "Приют",
      href: "/",
    },
    {
      label: "Наши хвостики",
      href: "/gallery",
    },
    {
      label: "Как помочь?",
      href: "/help",
    },
    {
      label: "Контакты",
      href: "/contacts",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
  ],
  links: {
    insta: "https://github.com/nextui-org/nextui",
    donate: "",
  },
};
