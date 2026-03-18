import { motion } from "motion/react";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Breadcrumb } from "../components/shared";
import { COLORS, FONTS, LAYOUT, SHADOWS } from "../constants/theme";

const articles = [
  {
    id: "1",
    title: "Đổi mới phương thức lãnh đạo của Đảng đối với hệ thống chính trị trong giai đoạn mới",
    date: "15/03/2026",
    category: "Công tác xây dựng Đảng",
    image: "https://images.unsplash.com/photo-1708352549266-d8e6d73e1e59?w=600&h=400&fit=crop",
    excerpt: "Tiếp tục đổi mới, nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng trong tình hình mới.",
  },
  {
    id: "2",
    title: "Tăng cường công tác kiểm tra, giám sát và kỷ luật Đảng",
    date: "14/03/2026",
    category: "Kiểm tra giám sát",
    image: "https://images.unsplash.com/photo-1725335739089-21b454c097a6?w=600&h=400&fit=crop",
    excerpt: "Công tác kiểm tra, giám sát góp phần giữ vững kỷ cương, kỷ luật Đảng, xây dựng Đảng trong sạch.",
  },
  {
    id: "1",
    title: "Nâng cao chất lượng đội ngũ cán bộ đáp ứng yêu cầu nhiệm vụ mới",
    date: "13/03/2026",
    category: "Công tác cán bộ",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    excerpt: "Chuẩn hóa tiêu chuẩn lãnh đạo cấp chiến lược, nâng cao năng lực đội ngũ cán bộ các cấp.",
  },
  {
    id: "2",
    title: "Phát huy vai trò của nhân dân trong xây dựng Đảng và hệ thống chính trị",
    date: "12/03/2026",
    category: "Dân vận",
    image: "https://images.unsplash.com/photo-1756806481284-d7c9342c5afd?w=600&h=400&fit=crop",
    excerpt: "Tăng cường mối quan hệ mật thiết giữa Đảng với nhân dân, phát huy quyền làm chủ của nhân dân.",
  },
];

export function PartyBuildingPage() {
  return (
    <div className="relative" style={{ maxWidth: LAYOUT.maxWidth, margin: "0 auto", padding: "40px 20px" }}>
      <Breadcrumb items={[{ label: "Trang chủ", to: "/" }, { label: "Xây dựng Đảng" }]} />

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl mb-8" style={{ fontFamily: FONTS.display, fontWeight: 700, color: COLORS.primary }}>
          Xây dựng Đảng
        </h1>
      </motion.div>

      <div className="space-y-6">
        {articles.map((item, i) => (
          <motion.div
            key={`${item.id}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to={`/article/${item.id}`}
              className="group flex gap-6 bg-white rounded-xl overflow-hidden transition-all"
              style={{ boxShadow: SHADOWS.card }}
            >
              <div className="w-72 h-48 shrink-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center">
                <span
                  className="text-xs uppercase tracking-wider mb-2 inline-block"
                  style={{ color: COLORS.primary, fontFamily: FONTS.sans, fontWeight: 600 }}
                >
                  {item.category}
                </span>
                <h3
                  className="mb-2 group-hover:text-[#C41E2A] transition-colors"
                  style={{ fontFamily: FONTS.display, fontSize: "20px", fontWeight: 700, lineHeight: 1.4 }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3 line-clamp-2" style={{ fontFamily: FONTS.body, fontSize: "15px" }}>
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5" /> {item.date}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-[#C41E2A] opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontFamily: FONTS.sans, fontWeight: 600 }}>
                    Đọc tiếp <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
