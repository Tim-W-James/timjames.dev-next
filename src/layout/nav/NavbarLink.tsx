import type { RoutePaths } from "@constants/routes";
import { useTouchInputQuery } from "@hooks/useMediaQuery";
import { setMouseHoverCssProperties } from "@utils/mouseHover";
import { clsx } from "clsx";
import Link from "next/link";
import { useCallback } from "react";
import { isMobileSafari, isSafari } from "react-device-detect";
import styles from "./NavbarLink.module.scss";

type NavbarLinkProps = {
  label: string;
  to?: RoutePaths;
  order: 1 | 2 | 3 | 4 | 5;
  isSelected?: boolean;
  inHamburgerMenu?: boolean;
};

const NavbarLink: React.FC<NavbarLinkProps> = ({
  label,
  to: route,
  order,
  isSelected,
  inHamburgerMenu,
}) => {
  const deviceIsTouch = useTouchInputQuery();
  const scrollToTop = useCallback(
    () =>
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 0),
    [],
  );
  const mouseHoverEffects = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) =>
      setMouseHoverCssProperties(e, true, deviceIsTouch),
    [deviceIsTouch],
  );

  return (
    <Link
      className={clsx(
        "subtitle px-8 py-2",
        styles._navbarLink,
        {
          [styles._selected]: Boolean(isSelected),
        },
        inHamburgerMenu ? styles[`_dropdownItem${order}`] : "",
        // Animation doesn't work with Safari
        { [styles._safari]: isSafari || isMobileSafari },
      )}
      href={route ?? "/"}
      onClick={scrollToTop}
      onMouseMove={mouseHoverEffects}
      type="button"
    >
      {label}
    </Link>
  );
};

export default NavbarLink;
