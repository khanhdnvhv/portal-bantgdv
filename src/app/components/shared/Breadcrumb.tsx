import { Link } from "react-router";
import { motion } from "motion/react";
import { ChevronLeft } from "lucide-react";
import { COLORS } from "../../constants/theme";

interface BreadcrumbItem {
  label: string;
  path?: string; // Support both 'path' and 'to' for flexibility
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  backTo?: string;
  backLabel?: string;
  showBackButton?: boolean;
}

export function Breadcrumb({ 
  items, 
  backTo = "/", 
  backLabel = "Quay lại",
  showBackButton = true 
}: BreadcrumbProps) {
  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-[1320px] mx-auto px-4 py-4">
        {/* Breadcrumb trail */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm"
        >
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-gray-400">/</span>}
              {(item.to || item.path) ? (
                <Link
                  to={item.to || item.path || "/"}
                  className="transition-colors"
                  style={{ color: COLORS.gold }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.primary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.gold)}
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-600">{item.label}</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Back button */}
        {showBackButton && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-3"
          >
            <Link
              to={backTo}
              className="inline-flex items-center gap-2 font-semibold transition-colors text-sm"
              style={{ 
                color: COLORS.primary,
                fontFamily: "'Inter', sans-serif" 
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.primary)}
            >
              <ChevronLeft className="w-4 h-4" />
              {backLabel}
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}