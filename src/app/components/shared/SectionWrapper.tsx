import { ReactNode } from "react";
import { LAYOUT, SHADOWS } from "../../constants/theme";

interface SectionWrapperProps {
  children: ReactNode;
  /** "red" | "gold" - determines shadow/border tint */
  variant?: "red" | "gold";
  className?: string;
}

/**
 * Wraps a section in the standard decorated card with shadow, border, rounded corners.
 * Used for DocumentsSection, MultimediaSection, etc.
 */
export function SectionWrapper({ children, variant = "red", className = "" }: SectionWrapperProps) {
  const isGold = variant === "gold";

  return (
    <div
      className={`relative px-3 md:px-0 ${className}`}
      style={{ maxWidth: LAYOUT.maxWidth, margin: "0 auto", paddingBottom: 24 }}
    >
      {children}
    </div>
  );
}