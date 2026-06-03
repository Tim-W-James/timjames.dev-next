"use client";
import { useAnnounceNavigation } from "@hooks/useAnnounceNavigation";
import { useResetFocusNavigation } from "@hooks/useFocusElement";

const AccessibilityProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  // Accessibility hooks
  useAnnounceNavigation();
  useResetFocusNavigation();

  return <>{children}</>;
};

export default AccessibilityProvider;
