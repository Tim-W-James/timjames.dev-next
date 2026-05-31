"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxMountains from "./background/ParallaxMountains";

const ParallaxProviderClient: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <ParallaxProvider>
    <ParallaxMountains />
    {children}
  </ParallaxProvider>
);

export default ParallaxProviderClient;
