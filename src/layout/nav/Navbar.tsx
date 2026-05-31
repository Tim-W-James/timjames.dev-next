"use client";
import logo from "@assets/images/logo.png";
import { NAV_ROUTES } from "@constants/routes";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import styles from "./Navbar.module.scss";
import NavbarBrand from "./NavbarBrand";
import NavbarLink from "./NavbarLink";

const MenuToggle = lazy(() => import("./MenuToggle"));

/**
 * Responsive nav bar
 */
const Navbar: React.FC = () => {
  const [hamburgerMenuIsOpen, openHamburgerMenu] = useState(false);
  const pathname = usePathname();

  const navbarItems = (
    <>
      {Object.values(NAV_ROUTES).map((routeConfig) => (
        <NavbarLink
          inHamburgerMenu={hamburgerMenuIsOpen}
          isSelected={routeConfig.route === pathname}
          key={routeConfig.title}
          label={routeConfig.title}
          order={1}
          to={routeConfig.route}
        />
      ))}
    </>
  );

  const navbarBrand = (
    <NavbarBrand label="TimJames.dev" logo={logo} to={NAV_ROUTES.home.route} />
  );

  useEffect(() => {
    openHamburgerMenu(false);
  }, []);

  const closeHamburgerMenu = useCallback(() => openHamburgerMenu(false), []);
  const toggleHamburgerMenu = useCallback(
    () => openHamburgerMenu((isOpen) => !isOpen),
    [],
  );

  return (
    <>
      <nav
        className={clsx(
          styles._navbar,
          "sticky top-0 left-0 z-50 hidden w-screen min-[1050px]:block",
        )}
      >
        <div className={clsx("container mx-auto")}>
          <div
            className={clsx("flex items-center justify-between", "flex-row")}
          >
            {navbarBrand}
            <div className={clsx("flex justify-around")}>{navbarItems}</div>
          </div>
        </div>
      </nav>

      <div className={clsx("min-[1050px]:hidden")}>
        <ClickAwayListener onClickAway={closeHamburgerMenu}>
          <nav className={clsx("sticky top-0 left-0 z-[100]")}>
            <div
              className={clsx(
                "flex w-screen content-center items-center justify-between py-2",
                "flex-row",
                styles._navbar,
              )}
            >
              {navbarBrand}
              <Suspense>
                <MenuToggle
                  baseColor="hsl(185deg 46% 52%)"
                  hoverColor="hsl(180deg 5% 91%)"
                  isOpen={hamburgerMenuIsOpen}
                  toggle={toggleHamburgerMenu}
                />
              </Suspense>
            </div>

            <div className={clsx(styles._navbarMenu)}>
              {hamburgerMenuIsOpen ? navbarItems : null}
            </div>
          </nav>
        </ClickAwayListener>
      </div>
    </>
  );
};

export default Navbar;
