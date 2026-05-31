"use client";
import type { ReactNode } from "react";
import FadeIn from "react-fade-in";

type FadeInClientProps = {
  children: ReactNode;
  transitionDuration?: number;
};

const FadeInClient: React.FC<FadeInClientProps> = ({
  children,
  transitionDuration = 200,
}) => <FadeIn transitionDuration={transitionDuration}>{children}</FadeIn>;

export default FadeInClient;
