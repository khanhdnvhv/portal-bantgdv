import { motion } from "motion/react";
import { Calendar, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Breadcrumb } from "../components/shared";
import { COLORS, FONTS, LAYOUT, SHADOWS } from "../constants/theme";

const newsItems = [
  {
    id: "1",
    title: "Khai mạc Hội nghị lần thứ 15 Ban Chấp hành Trung ương Đảng khóa XIII",
    category: "Tin tức chính",
    date: "16/03/2026",
    views: "1,234",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=600&h=400&fit=crop",
    excerpt: "Sáng 16/3/2026, tại Hội trường Diên Hồng, Hội nghị lần thứ 15 Ban Chấp hành Trung ương Đảng khóa XIII đã chính thức khai mạc.",
  },
  {
    id: "2",
    title: "Tổng Bí thư chủ trì họp Bộ Chính trị về công tác cán bộ",
    category: "Công tác Đảng",
    date: "15/03/2026",
    views: "987",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    excerpt: "Tổng Bí thư đã chủ trì phiên họp Bộ Chính trị bàn về công tác cán bộ, một trong những nhiệm vụ then chốt.",
  },
  {
    id: "3",
    title: "Hội nghị toàn quốc triển khai nhiệm vụ năm 2026",
    category: "Hoạt động",
    date: "14/03/2026",
    views: "756",
    image: "https://images.unsplash.com/photo-1708352549266-d8e6d73e1e59?w=600&h=400&fit=crop",
    excerpt: "Hội nghị triển khai các nhiệm vụ trọng tâm trong công tác tuyên giáo và dân vận năm 2026.",
  },
  {
    id: "4",
    title: "Đẩy mạnh công tác tuyên truyền Nghị quyết Đại hội XIV",
    category: "Tuyên truyền",
    date: "13/03/2026",
    views: "1,102",
    image: "https://images.unsplash.com/photo-1725335739089-21b454c097a6?w=600&h=400&fit=crop",
    excerpt: "Tập trung tuyên truyền sâu rộng các nội dung Nghị quyết Đại hội XIV của Đảng đến mọi tầng lớp nhân dân.",
  },
  {
    id: "5",
    title: "Nâng cao chất lượng công tác dân vận trong tình hình mới",
    category: "Dân vận",
    date: "12/03/2026",
    views: "643",
    image: "https://images.unsplash.com/photo-1756806481284-d7c9342c5afd?w=600&h=400&fit=crop",
    excerpt: "Đổi mới nội dung, phương thức công tác dân vận, tăng cường mối quan hệ mật thiết giữa Đảng với nhân dân.",
  },
  {
    id: "6",
    title: "Hội thảo khoa học về tư tưởng Hồ Chí Minh trong thời kỳ mới",
    category: "Giáo dục",
    date: "11/03/2026",
    views: "521",
    image: "https://images.unsplash.com/photo-1707132940730-00deb43f7b2a?w=600&h=400&fit=crop",
    excerpt: "Hội thảo nhằm làm sáng tỏ giá trị thời đại của tư tưởng Hồ Chí Minh đối với sự nghiệp đổi mới.",
  },
];

export function NewsActivitiesPage() {
  return (
    <div className="relative px-3 md:px-5" style={{ maxWidth: LAYOUT.maxWidth, margin: "0 auto", paddingTop: 40, paddingBottom: 40 }}>
      <Breadcrumb
        items={[
          { label: "Trang chủ", to: "/" },
          { label: "Tin tức hoạt động" },
        ]}
      />

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl mb-8" style={{ fontFamily: FONTS.display, fontWeight: 700, color: COLORS.primary }}>
          Tin tức hoạt động
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              to={`/article/${item.id}`}
              className="group block bg-white rounded-xl overflow-hidden h-full"
              style={{ boxShadow: SHADOWS.card }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute top-3 left-3 px-3 py-1 rounded text-white text-xs uppercase"
                  style={{ background: COLORS.primary, fontFamily: FONTS.sans, fontWeight: 600 }}
                >
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <h3
                  className="mb-2 line-clamp-2 group-hover:text-[#C41E2A] transition-colors"
                  style={{ fontFamily: FONTS.display, fontSize: "17px", fontWeight: 700, lineHeight: 1.4 }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3" style={{ fontFamily: FONTS.body }}>
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" /> {item.views}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C41E2A] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}