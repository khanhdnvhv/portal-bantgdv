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
      className={`relative ${className}`}
      style={{ maxWidth: LAYOUT.maxWidth, margin: "0 auto", paddingBottom: 50 }}
    >
      <div style={{ padding: "20px 20px 0" }}>
        <div
          className="relative"
          style={{
            borderRadius: 20,
            background: isGold
              ? "linear-gradient(145deg, rgba(192,137,31,0.05) 0%, rgba(255,253,245,0.98) 30%, rgba(196,30,42,0.03) 70%, rgba(255,253,245,0.97) 100%)"
              : "linear-gradient(145deg, rgba(196,30,42,0.04) 0%, rgba(255,253,245,0.98) 30%, rgba(192,137,31,0.03) 70%, rgba(255,253,245,0.97) 100%)",
            boxShadow: isGold ? SHADOWS.sectionGold : SHADOWS.section,
            padding: 4,
          }}
        >
          <div
            style={{
              borderRadius: 18,
              border: isGold
                ? "1.5px solid rgba(192,137,31,0.10)"
                : "1.5px solid rgba(196,30,42,0.10)",
              overflow: "hidden",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
