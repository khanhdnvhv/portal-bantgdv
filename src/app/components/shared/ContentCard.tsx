import { ReactNode } from "react";
import { SHADOWS, FONTS, COLORS } from "../../constants/theme";

interface ContentCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Standard white card with shadow, used in detail pages (ArticleDetail, LeaderDetail).
 */
export function ContentCard({ children, className = "" }: ContentCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-8 ${className}`}
      style={{ boxShadow: SHADOWS.card }}
    >
      {children}
    </div>
  );
}

interface ContentCardTitleProps {
  children: ReactNode;
  icon?: ReactNode;
}

/**
 * Title for ContentCard with the standard Playfair Display + gold border bottom.
 */
export function ContentCardTitle({ children, icon }: ContentCardTitleProps) {
  return (
    <h3
      className="text-2xl font-bold mb-6 pb-3 border-b-2 flex items-center gap-3"
      style={{
        fontFamily: FONTS.display,
        color: COLORS.primary,
        borderColor: COLORS.goldAccent,
      }}
    >
      {icon}
      {children}
    </h3>
  );
}
