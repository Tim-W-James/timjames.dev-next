"use client";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import FadeIn from "react-fade-in";

type FadeInClientProps = {
  children: ReactNode;
  transitionDuration?: number;
  animationKey?: string | number;
};

const FadeInClient: React.FC<FadeInClientProps> = ({
  children,
  transitionDuration = 200,
  animationKey,
}) => {
  const pathname = usePathname();

  return (
    <FadeIn
      key={animationKey ?? pathname ?? "fade-in"}
      transitionDuration={transitionDuration}
    >
      {children}
    </FadeIn>
  );
};

export default FadeInClient;
