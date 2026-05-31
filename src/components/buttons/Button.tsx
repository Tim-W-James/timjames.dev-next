"use client";
import useMediaQuery, { useTouchInputQuery } from "@hooks/useMediaQuery";
import { setMouseHoverCssProperties } from "@utils/mouseHover";
import { clsx } from "clsx";
import Link from "next/link";
import { type JSX, useCallback } from "react";
import { isMobileSafari, isSafari } from "react-device-detect";
import styles from "./Button.module.scss";

type ButtonProps = {
  /**
   * Label display text
   */
  label?: string;
  /**
   * Title to display on hover
   */
  tooltip?: string;
  /**
   * Icon element to display next to the label
   */
  icon?: JSX.Element;
  /**
   * Whether to use the light or dark theme
   */
  isLight?: boolean;
  /**
   * Hide the label on mobile devices
   */
  shrinkLabelOnMobile?: boolean;
  /**
   * Position the icon to the right, left by default
   */
  iconRight?: boolean;
  /**
   * Disable the button
   */
  disabled?: boolean;
  /**
   * Appear disabled, but still interactive for accessibility reasons
   */
  appearInactive?: boolean;
  /**
   * Custom class names to append to the defaults
   */
  className?: string;
} & (
  | {
      /**
       * Whether to route to a SPA route or an external link
       */
      mode?: "route" | "anchor";
      /**
       * href or link for the anchor or route respectively
       */
      to?: string;
    }
  | {
      /**
       * Treat as a primitive HTML button with an onClick
       */
      mode: "button";
      /**
       * Click event
       */
      onClick?: React.MouseEventHandler<HTMLButtonElement>;
      /**
       * Props to pass to the HTML button
       */
      childProps?: React.ComponentPropsWithoutRef<"button">;
    }
);

/**
 * Custom button component
 */
const Button = ({
  label,
  tooltip,
  icon,
  isLight,
  shrinkLabelOnMobile,
  iconRight,
  disabled,
  appearInactive,
  className: additionalClassName,
  ...otherProps
  // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: inflated by clsx
}: ButtonProps) => {
  const deviceIsTouch = useTouchInputQuery();
  const shouldShrinkButtons = useMediaQuery("(max-width: 670px)");
  const isLabelHidden = shrinkLabelOnMobile && shouldShrinkButtons;

  const className = clsx(
    label && !isLabelHidden ? "px-8" : "px-4 h-fit text-4xl!",
    styles._acrylicButton,
    isLight && !disabled ? "acrylic-light" : "acrylic-dark",
    isLight && !disabled ? styles._light : styles._dark,
    // Radial border doesn't work with Safari
    // biome-ignore lint/style/noNonNullAssertion: untyped CSS
    { [styles._safari!]: isSafari || isMobileSafari },
    // biome-ignore lint/style/noNonNullAssertion: untyped CSS
    { [styles._appearInactive!]: Boolean(appearInactive) },
    additionalClassName,
  );

  const setHoverEffects = useCallback(
    (e: React.MouseEvent<HTMLElement>) =>
      setMouseHoverCssProperties(e, false, deviceIsTouch),
    [deviceIsTouch],
  );

  // biome-ignore lint/complexity/noUselessFragments: Conditional rendering of label component
  const labelComponent = isLabelHidden ? <></> : label;
  const inner = (
    <span className={clsx("flex items-center justify-between gap-2")}>
      {iconRight ? (
        <>
          {labelComponent}
          {icon}
        </>
      ) : (
        <>
          {icon}
          {labelComponent}
        </>
      )}
    </span>
  );

  switch (otherProps.mode) {
    case "route":
      return (
        <Link
          aria-label={label}
          className={className}
          href={otherProps.to ?? "/"}
          onMouseMove={setHoverEffects}
          // eslint-disable-next-line react/jsx-no-leaked-render
          title={label && tooltip}
          type="button"
        >
          {inner}
        </Link>
      );

    case "button":
      return (
        <button
          aria-label={label}
          className={className}
          disabled={disabled}
          onClick={otherProps.onClick}
          onMouseMove={setHoverEffects}
          // eslint-disable-next-line react/jsx-no-leaked-render
          title={label && tooltip}
          type="button"
          {...otherProps.childProps}
        >
          {inner}
        </button>
      );

    default:
      return (
        <Link
          aria-label={label}
          className={className}
          href={otherProps.to ?? "/"}
          onMouseMove={setHoverEffects}
          rel="noreferrer"
          target="_blank"
          // eslint-disable-next-line react/jsx-no-leaked-render
          title={label && tooltip}
          type="button"
        >
          {inner}
        </Link>
      );
  }
};

export default Button;
