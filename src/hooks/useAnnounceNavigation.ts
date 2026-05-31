"use client";
import { ariaAnnounce } from "@utils/ariaAnnounce";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Create an ARIA live region for announcing navigation events.
 */
export const useAnnounceNavigation = () => {
  const isInitialLoad = useRef<boolean>(true);
  const pathname = usePathname();

  // Announce the new page title when the URL changes.
  // biome-ignore lint/correctness/useExhaustiveDependencies: run only on URL change
  useEffect(() => {
    // Ignore the initial page load.
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
    } else {
      // biome-ignore lint/nursery/noFloatingPromises: ariaAnnounce does not need to be awaited
      ariaAnnounce(document.title);
    }
    // We only want to announce when the URL changes.
  }, [pathname]);
};
