"use client";
import { ROUTES } from "@constants/routes";
import { usePathname } from "next/navigation";
import type React from "react";
import NavbarLink from "./NavbarLink";

const ActiveNavbarLinks: React.FC<{ inHamburgerMenu: boolean }> = ({
  inHamburgerMenu,
}) => {
  const pathname = usePathname();

  const selectedRoute =
    Object.values(ROUTES).find((routeConfig) =>
      routeConfig.route === "/"
        ? pathname === "/" || pathname === ""
        : pathname.startsWith(routeConfig.route),
    ) ?? ROUTES.home; // Default to home if no match is found

  return (
    <>
      {Object.values(ROUTES).map((routeConfig, index) => (
        <NavbarLink
          inHamburgerMenu={inHamburgerMenu}
          isSelected={selectedRoute.route === routeConfig.route}
          key={routeConfig.title}
          label={routeConfig.title}
          order={index + 1}
          to={routeConfig.route}
        />
      ))}
    </>
  );
};

export default ActiveNavbarLinks;
