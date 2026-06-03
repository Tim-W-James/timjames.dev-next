"use client";
import logo from "@assets/images/logo.png";
import { ROUTES } from "@constants/routes";
import { clsx } from "clsx";
import { Suspense, useCallback, useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import ActiveNavbarLinks from "./ActiveNavbarLinks";
import LoadingNavbarLinks from "./LoadingNavbarLinks";
import MenuToggle from "./MenuToggle";
import styles from "./Navbar.module.scss";
import NavbarBrand from "./NavbarBrand";

/**
 * Responsive nav bar
 */
const Navbar: React.FC = () => {
  const [hamburgerMenuIsOpen, openHamburgerMenu] = useState(false);
  const navbarBrand = (
    <NavbarBrand label="TimJames.dev" logo={logo} to={ROUTES.home.route} />
  );

  useEffect(() => {
    openHamburgerMenu(false);
  }, []);

  const closeHamburgerMenu = useCallback(() => openHamburgerMenu(false), []);
  const toggleHamburgerMenu = useCallback(
    () => openHamburgerMenu((isOpen) => !isOpen),
    [],
  );

  const navbarItems = (
    <Suspense fallback={<LoadingNavbarLinks />}>
      <ActiveNavbarLinks inHamburgerMenu={hamburgerMenuIsOpen} />
    </Suspense>
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

      <ClickAwayListener onClickAway={closeHamburgerMenu}>
        <nav
          className={clsx("sticky top-0 left-0 z-[100] min-[1050px]:hidden")}
        >
          <div
            className={clsx(
              "flex w-screen content-center items-center justify-between py-2",
              "flex-row",
              styles._navbar,
            )}
          >
            {navbarBrand}
            <MenuToggle
              baseColor="hsl(185deg 46% 52%)"
              hoverColor="hsl(180deg 5% 91%)"
              isOpen={hamburgerMenuIsOpen}
              toggle={toggleHamburgerMenu}
            />
          </div>

          <div className={clsx(styles._navbarMenu)}>
            {hamburgerMenuIsOpen ? navbarItems : null}
          </div>
        </nav>
      </ClickAwayListener>
    </>
  );
};

export default Navbar;
