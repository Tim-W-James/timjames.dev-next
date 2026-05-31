"use client";
import { useCallback } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Button from "./buttons/Button";

const ScrollToTopButton: React.FC = () => {
  const scrollToTop = useCallback(
    () => window.scrollTo({ top: 0, behavior: "smooth" }),
    [],
  );
  return (
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
