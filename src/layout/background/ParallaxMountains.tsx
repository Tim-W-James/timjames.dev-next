"use client";
import { useMobileQuery } from "@hooks/useMediaQuery";
import FadeInClient from "@layout/FadeInClient";
import { clsx } from "clsx";
import { Parallax } from "react-scroll-parallax";
import styles from "./ParallaxMountains.module.scss";

/**
 * Background component with parallax effect.
 */
const ParallaxMountains: React.FC = () => {
  const isDeviceMobile = useMobileQuery();

  return (
    <>
      <div className={clsx("gradient-background")} />
      <div
        className={clsx(
          "sticky left-0 -z-[5] w-full bg-dark-shades",
          "top-3/4",
          "h-1/4",
        )}
      />
      <FadeInClient transitionDuration={200}>
        {isDeviceMobile ? (
          <div className={clsx("flex w-full justify-center")}>
            <div className={clsx(styles._mountainMiddleMobile)} />
            <div className={clsx(styles._mountainBackgroundFiller)} />
          </div>
        ) : (
          <div className={clsx("flex w-full justify-center")}>
            <div className={clsx(styles._mountainMiddle)} />
            <Parallax speed={-13} style={{ zIndex: -2 }}>
              <div className={clsx(styles._mountainLeft)} />
            </Parallax>
            <Parallax speed={-13} style={{ zIndex: -3 }}>
              <div className={clsx(styles._mountainRight)} />
            </Parallax>
          </div>
        )}
      </FadeInClient>
    </>
  );
};

export default ParallaxMountains;
