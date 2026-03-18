import { motion } from "motion/react";
import { COLORS, FONTS } from "../../constants/theme";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  /** Use Protest Strike font (default) or Playfair Display */
  font?: "accent" | "display";
  /** Color for the title */
  color?: string;
  /** Show vertical accent bar */
  showBar?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  font = "accent",
  color = COLORS.primary,
  showBar = true,
  className = "",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-4 ${className}`}
    >
      <div className="flex items-center gap-3">
        {showBar && (
          <div
            className="w-[5px] h-[40px] rounded-full"
            style={{ background: "linear-gradient(180deg, #c41e2a 0%, #8b1a1a 100%)" }}
          />
        )}
        <div className="flex flex-col">
          <h2
            style={{
              fontFamily: font === "accent" ? FONTS.accent : FONTS.display,
              fontSize: "32px",
              color,
              letterSpacing: "1px",
              lineHeight: "1.1",
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <span
              className="mt-1"
              style={{
                fontFamily: FONTS.sans,
                fontSize: "13px",
                fontWeight: 500,
                color: COLORS.goldDark,
              }}
            >
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
