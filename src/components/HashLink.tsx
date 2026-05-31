"use client";
import { clsx } from "clsx";
import Link from "next/link";
import { useCallback } from "react";

const HashLink: React.FC<{
  fragment: string;
  className?: string;
  children: React.ReactNode;
}> = ({ fragment, className, children }) => {
  const copyFragment = useCallback(
    () => navigator.clipboard.writeText(`${location.href}#${fragment}`),
    [fragment],
  );

  return (
    <Link
      className={className ?? clsx("hash-link")}
      href={`#${fragment}`}
      onClick={copyFragment}
      replace
    >
      {children}{" "}
    </Link>
  );
};

export default HashLink;
