import { focusElement } from "@utils/focusElement";
import { useUpdateEffect } from "ahooks";
import { usePathname } from "next/navigation";
import { isSafari } from "react-device-detect";

/**
 * Reset focus to the heading when navigating to a new route.
 */
export const useResetFocusNavigation = () => {
  const pathname = usePathname();

  // Reset focus when the URL changes.
  useUpdateEffect(() => {
    // Focus the page heading, if it exists, otherwise clear focus to avoid an
    // error.
    // @see https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/
    // biome-ignore lint/suspicious/noUnusedExpressions: Focus is the side effect
    isSafari
      ? focusElement(document.body)
      : focusElement(document.querySelector("h1") ?? document.body);
  }, [pathname]);
};
