"use client";

import { Logo } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const [isNavbarColored, setIsNavbarColored] = useState<boolean>(false);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <NextUINavbar
      classNames={{
        item: ["navbar-item"],
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      position="sticky"
      isBlurred={true}
      disableScrollHandler={false}
      onScrollPositionChange={(scrollPosition) => {
        setIsNavbarColored(scrollPosition > 0);
      }}
      className="drop-shadow-lg bg-background"
    // className={`drop-shadow-lg ${isNavbarColored ? "bg-background/70" : "bg-transparent"} transition delay-0 duration-300`}
    >
      <NavbarBrand as="li" className="gap-3 max-w-fit">
        <NextLink className="flex justify-start items-center gap-1" href="/">
          <Logo viewBox="0 0 145 144" />
          <div className="font-bold text-inherit">Дом Cобачьей Надежды</div>
        </NextLink>
      </NavbarBrand>

      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <ul className="hidden lg:flex items-center ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem isActive={pathname === item.href} key={item.href}>
              <NextLink href={item.href}>{item.label}</NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent>
        {/* <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem> */}

        {/* <NavbarItem>
          <Button
            isExternal
            isIconOnly
            as={Link}
            className="bg-accentYellow-50"
            href={siteConfig.links.insta}
            variant="shadow"
          >
            <HeartIcon className="fill-accentYellow-500" />
          </Button>
        </NavbarItem> */}
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-md font-normal text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
            href={siteConfig.links.insta}
            variant="flat"
          >
            Наш Instagram
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <ThemeSwitch /> */}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu >
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem isActive={pathname === item.href} key={item.href}>
              <NextLink onClick={() => setIsMenuOpen(false)} href={item.href}>{item.label}</NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
