import HashLink from "@components/HashLink";
import { clsx } from "clsx";
import type { ReactNode } from "react";

const kebabCase = (string: string) =>
  string
    .replace(/([a-z])([A-Z])/gu, "$1-$2")
    .replace(/[\s_]+/gu, "-")
    .toLowerCase();

const Header: React.FC<{
  children?: ReactNode | undefined;
  level?: number | undefined;
}> = ({ children, level }) => {
  const id = encodeURIComponent(kebabCase(children?.toString() || ""));
  // biome-ignore lint/style/noMagicNumbers: h3
  return level === 3 ? (
    <h3 id={id || undefined}>
      <HashLink
        className={clsx("hash-link-right", "no-underline", "after:ml-2")}
        fragment={id}
      >
        {children}
      </HashLink>
    </h3>
  ) : (
    // h1 should not be rendered within markdown content, so is mapped to a h2
    <h2 id={id || undefined}>
      <HashLink
        className={clsx("hash-link-right", "no-underline", "after:ml-2")}
        fragment={id}
      >
        {children}
      </HashLink>
    </h2>
  );
};

export default Header;
