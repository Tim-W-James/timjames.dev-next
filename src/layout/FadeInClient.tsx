"use client";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import FadeIn from "react-fade-in";

type FadeInClientProps = {
  children: ReactNode;
  transitionDuration?: number;
  animationKey?: string | number;
  delay?: number;
};

const FadeInClient: React.FC<FadeInClientProps> = ({
  children,
  transitionDuration = 200,
  delay,
  animationKey,
}) => {
  const pathname = usePathname();

  return (
    <FadeIn
      delay={delay ?? 0}
      key={animationKey ?? pathname ?? "fade-in"}
      transitionDuration={transitionDuration}
    >
      {children}
    </FadeIn>
  );
};

export default FadeInClient;
