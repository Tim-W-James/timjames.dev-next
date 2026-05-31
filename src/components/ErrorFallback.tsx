import { clsx } from "clsx";
import { type JSX, useEffect } from "react";
import type { FallbackProps } from "react-error-boundary";
import { RiRefreshFill } from "react-icons/ri";
import Button from "./buttons/Button";

/**
 * Fallback error display for any unrecoverable errors.
 */
export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps): JSX.Element => {
  useEffect(() => {
    console.error(new Error("Error loading page:", { cause: error }));
  }, [error]);

  return (
    <>
      <div
        className={clsx("fixed -z-10 -mt-5 h-screen w-screen bg-dark-shades")}
      />
      <div className={clsx("mt-8 text-center")}>
        {/** biome-ignore lint/correctness/useUniqueElementIds: explicit fragment */}
        <h1 className={clsx("font-bold text-8xl text-light-accent")} id="error">
          Error
        </h1>
        <h2>
          <span className={clsx("text-danger")}>Oops!</span> Something went
          wrong.
        </h2>
        <h3>Please reload the page and try again.</h3>
        <br />
        <div className={clsx("flex items-center justify-center")}>
          <Button
            childProps={{ onClick: resetErrorBoundary }}
            icon={<RiRefreshFill />}
            isLight
            label="Reload"
            mode="button"
            tooltip="Reload the page"
          />
        </div>
      </div>
    </>
  );
};
