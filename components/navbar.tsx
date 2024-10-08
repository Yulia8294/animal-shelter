"use client";
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
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import NextLink from "next/link";
import { useState } from "react";

import { GithubIcon, HeartFilledIcon, Logo } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [isNavbarColored, setIsNavbarColored] = useState<boolean>(false);

  return (
    <NextUINavbar
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
        <ul className="hidden lg:flex gap-4 items-center ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent>
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-md rounded-full font-normal text-white bg-accentYellow-500"
            href={siteConfig.links.donate}
            startContent={<HeartFilledIcon className="text-white" />}
            variant="flat"
          >
            Помочь
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.insta}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
