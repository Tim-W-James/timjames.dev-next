import { clsx } from "clsx";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useCallback } from "react";

type NavbarBrandProps = {
  label: string;
  logo: StaticImageData;
  to: string;
};

/**
 * Brand for the navbar with a logo
 */
const NavbarBrand: React.FC<NavbarBrandProps> = ({
  label,
  to: route,
  logo,
}) => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Link
      className={clsx("subtitle whitespace-nowrap")}
      href={route}
      onClick={scrollToTop}
      type="button"
    >
      <Image
        alt="brand"
        className={clsx(
          "inline-block",
          "text-[8px]",
          "rounded-full",
          "h-8 align-bottom",
        )}
        data-chromatic="ignore"
        height={32}
        src={logo}
        width={32}
      />{" "}
      {label}
    </Link>
  );
};

export default NavbarBrand;
