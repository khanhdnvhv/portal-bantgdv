import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";
import { COLORS, FONTS } from "../constants/theme";

export function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div
          className="text-[120px] leading-none mb-4"
          style={{
            fontFamily: FONTS.display,
            fontWeight: 700,
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.gold})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </div>
        <h1
          className="text-2xl mb-4"
          style={{ fontFamily: FONTS.display, fontWeight: 700, color: COLORS.text }}
        >
          Không tìm thấy trang
        </h1>
        <p className="text-gray-500 mb-8" style={{ fontFamily: FONTS.body }}>
          Trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-white transition-all hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})` }}
          >
            <Home className="w-4 h-4" />
            Trang chủ
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 transition-all hover:scale-105 cursor-pointer"
            style={{ borderColor: COLORS.primary, color: COLORS.primary, fontFamily: FONTS.sans }}
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại
          </button>
        </div>
      </motion.div>
    </div>
  );
}
