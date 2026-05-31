"use client";
import { clsx } from "clsx";
import { useCallback } from "react";
import { BsArrowUpCircle, BsFillArrowUpCircleFill } from "react-icons/bs";
import Button from "./buttons/Button";

const ScrollToTopButton: React.FC<{ isArticle?: boolean }> = ({
  isArticle,
}) => {
  const scrollToTop = useCallback(
    () => window.scrollTo({ top: 0, behavior: "smooth" }),
    [],
  );
  return isArticle ? (
    <button
      className={clsx(
        "flex items-center gap-2 hover:text-light-accent",
        "cursor-pointer active:text-dark-accent",
      )}
      onClick={scrollToTop}
      title="Back to top"
      type="button"
    >
      Top
      <BsArrowUpCircle />
    </button>
  ) : (
    <Button
      childProps={{ onClick: scrollToTop }}
      icon={<BsFillArrowUpCircleFill />}
      isLight
      label="Back to top"
      mode="button"
      tooltip="Back to top"
    />
  );
};

export default ScrollToTopButton;
