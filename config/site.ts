export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Dog Shelter",
  description: "Приют Собачьей Надежды",
  navItems: [
    {
      label: "Приют",
      href: "/",
    },
    {
      label: "Наши хвостики",
      href: "/catalog",
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
    insta: "https://www.instagram.com/doghopeorg/",
    donate: "",
  },
};
