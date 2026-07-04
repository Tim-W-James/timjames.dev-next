"use client";
import { ROUTES } from "@constants/routes";
import NavbarLink from "./NavbarLink";

const LoadingNavbarLinks = () => (
  <>
    {Object.values(ROUTES).map((routeConfig, index) => (
      <NavbarLink
        // Hardcoding to allow caching
        isSelected={false}
        key={routeConfig.title}
        label={routeConfig.title}
        order={index + 1}
        to={routeConfig.route}
      />
    ))}
  </>
);

export default LoadingNavbarLinks;
