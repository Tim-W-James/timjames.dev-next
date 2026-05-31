"use client";
import { clsx } from "clsx";
import { useEffect, useMemo, useState } from "react";

const CredlyBadges: React.FC<{ badgeIds: readonly string[] }> = ({
  badgeIds,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  const badgeStyles = useMemo(
    () =>
      [
        "acrylic-white",
        "rounded-lg",
        "shrink",
        "grow",
        "basis-0",
        "w-auto",
        "h-auto",
      ] as const,
    [],
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const activeTimeouts: number[] = [];

    const setBadgeLoading = (iframe: HTMLElement) => {
      iframe.className = clsx(...badgeStyles, "animate-pulse");
    };

    const setBadgeLoaded = (iframe: HTMLElement) => {
      iframe.className = clsx(...badgeStyles);
    };

    const wireBadgeIframe = (badgeId: string, retries = 20) => {
      // biome-ignore lint/nursery/useDomQuerySelector: explicit ID selector for reliability
      const iframe = document.getElementById(`embedded-badge-${badgeId}`);

      if (iframe === null) {
        if (retries <= 0) {
          return;
        }

        const retryTimeout = window.setTimeout(() => {
          wireBadgeIframe(badgeId, retries - 1);
          // biome-ignore lint/style/noMagicNumbers: retry timeout for badge loading
        }, 100);

        activeTimeouts.push(retryTimeout);
        return;
      }

      setBadgeLoading(iframe);

      const markLoaded = () => {
        setBadgeLoaded(iframe);
      };

      iframe.addEventListener("load", markLoaded, { once: true });

      const loadFallbackTimeout = window.setTimeout(() => {
        setBadgeLoaded(iframe);
        // biome-ignore lint/style/noMagicNumbers: fallback timeout for badge loading
      }, 3000);

      activeTimeouts.push(loadFallbackTimeout);
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "//cdn.credly.com/assets/utilities/embed.js";

    document.body.appendChild(script);

    script.onload = () => {
      badgeIds.forEach((badgeId) => {
        wireBadgeIframe(badgeId);
      });
    };

    return () => {
      activeTimeouts.forEach((timeoutId) => {
        window.clearTimeout(timeoutId);
      });

      if (script.parentElement === document.body) {
        document.body.removeChild(script);
      }
    };
  }, [badgeIds, badgeStyles, isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={clsx("flex items-center justify-between gap-2", "flex-wrap")}
    >
      {badgeIds.map((badgeId) => (
        <div
          data-iframe-height="240"
          data-iframe-width="150"
          data-share-badge-host="https://www.credly.com"
          data-share-badge-id={badgeId}
          key={badgeId}
        />
      ))}
    </div>
  );
};

export default CredlyBadges;
