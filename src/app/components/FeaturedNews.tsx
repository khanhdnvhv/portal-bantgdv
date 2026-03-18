import { motion } from "motion/react";
import { Link } from "react-router";
import { Clock, ChevronRight, Flame, TrendingUp } from "lucide-react";

const MotionLink = motion.create(Link);

const featuredMain = {
  id: 1,
  title:
    "Tổng Bí thư Tô Lâm chủ trì phiên họp Bộ Chính trị về chiến lược phát triển kinh tế - xã hội giai đoạn 2026-2030",
  summary:
    "Bộ Chính trị đã thảo luận và thống nhất các định hướng lớn về phát triển kinh tế - xã hội, xây dựng Đảng và hệ thống chính trị, quốc phòng - an ninh, đối ngoại trong giai đoạn mới, hướng tới mục tiêu đưa Việt Nam trở thành nước phát triển.",
  image:
    "https://images.unsplash.com/photo-1708352549266-d8e6d73e1e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwZ292ZXJubWVudCUyMG1lZXRpbmclMjBvZmZpY2lhbHxlbnwxfHx8fDE3NzM0NjA0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  category: "Tin nóng",
  date: "14/03/2026",
  time: "08:30",
};

const latestNews = [
  {
    id: 2,
    title:
      "Thủ tướng Phạm Minh Chính: Đẩy mạnh chuyển đổi số quốc gia, phấn đấu top 30 thế giới về chính phủ điện tử",
    date: "14/03/2026",
    time: "10:15",
    category: "Chính trị",
  },
  {
    id: 3,
    title:
      "Quốc hội thông qua Luật Đất đai sửa đổi, có hiệu lực từ ngày 01/07/2026",
    date: "14/03/2026",
    time: "09:45",
    category: "Pháp luật",
  },
  {
    id: 4,
    title:
      "GDP quý I/2026 tăng trưởng 7.8%, cao nhất trong 5 năm qua - động lực từ xuất khẩu và đầu tư công",
    date: "13/03/2026",
    time: "16:00",
    category: "Kinh tế",
  },
  {
    id: 5,
    title:
      "Việt Nam - Nhật Bản nâng cấp quan hệ lên Đối tác Chiến lược Toàn diện vì hòa bình và thịnh vượng",
    date: "13/03/2026",
    time: "14:30",
    category: "Đối ngoại",
  },
  {
    id: 6,
    title:
      "Ban Chấp hành Trung ương ban hành Nghị quyết mới về xây dựng đội ngũ cán bộ chiến lược",
    date: "13/03/2026",
    time: "11:20",
    category: "Xây dựng Đảng",
  },
  {
    id: 7,
    title:
      "Chủ tịch nước Lương Cường tiếp đoàn đại biểu người có công với cách mạng tiêu biểu toàn quốc",
    date: "12/03/2026",
    time: "15:00",
    category: "Chính trị",
  },
];

const hotNews = [
  {
    id: 8,
    title:
      "Đại hội XIV của Đảng: Khát vọng đưa Việt Nam bước vào kỷ nguyên mới của dân tộc",
    image:
      "https://images.unsplash.com/photo-1710702418104-6bf5419ab03d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwZWNvbm9teSUyMGRldmVsb3BtZW50JTIwaW5kdXN0cnl8ZW58MXx8fHwxNzczNDYxNzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Đại hội Đảng",
    date: "13/03/2026",
  },
  {
    id: 9,
    title:
      "Đổi mới giáo dục đại học: 5 trường đại học Việt Nam lọt top 500 châu Á năm 2026",
    image:
      "https://images.unsplash.com/photo-1743327572772-eca3c63b029e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwZWR1Y2F0aW9uJTIwdW5pdmVyc2l0eSUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MzQ2MTcyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Giáo dục",
    date: "12/03/2026",
  },
  {
    id: 10,
    title:
      "Khánh thành cầu Mỹ Thuận 2: Nối liền tuyến cao tốc Bắc - Nam phía Đông hoàn chỉnh",
    image:
      "https://images.unsplash.com/photo-1772373484237-4d4c3a5f2096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwaW5mcmFzdHJ1Y3R1cmUlMjBicmlkZ2UlMjBtb2Rlcm58ZW58MXx8fHwxNzczNDYxNzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Hạ tầng",
    date: "12/03/2026",
  },
  {
    id: 11,
    title:
      "Nông nghiệp thông minh: Xuất khẩu nông sản Việt Nam đạt kỷ lục 65 tỷ USD trong năm 2025",
    image:
      "https://images.unsplash.com/photo-1556762163-542910c8765d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwYWdyaWN1bHR1cmUlMjByaWNlJTIwZmllbGQlMjBydXJhbHxlbnwxfHx8fDE3NzM0NjE3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Nông nghiệp",
    date: "11/03/2026",
  },
  {
    id: 12,
    title:
      "Trung tâm AI quốc gia chính thức hoạt động, đặt mục tiêu đưa Việt Nam vào top 3 ASEAN về AI",
    image:
      "https://images.unsplash.com/photo-1768364635815-01516ab502f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWwlMjBzbWFydCUyMGNpdHl8ZW58MXx8fHwxNzczNDYxNzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Công nghệ",
    date: "11/03/2026",
  },
  {
    id: 13,
    title:
      "Hội nghị Trung ương lần thứ 3 khóa XIV: Xác định đột phá chiến lược về thể chế và nhân lực",
    image:
      "https://images.unsplash.com/photo-1708352549266-d8e6d73e1e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwZ292ZXJubWVudCUyMG1lZXRpbmclMjBvZmZpY2lhbHxlbnwxfHx8fDE3NzM0NjA0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Xây dựng Đảng",
    date: "10/03/2026",
  },
];

const categoryColors: Record<string, string> = {
  "Tin nóng": "#c41e2a",
  "Chính trị": "#c41e2a",
  "Pháp luật": "#1e40af",
  "Kinh tế": "#b45309",
  "Đối ngoại": "#047857",
  "Xây dựng Đảng": "#7c2d12",
  "Đại hội Đảng": "#c41e2a",
  "Giáo dục": "#6d28d9",
  "Hạ tầng": "#0369a1",
  "Nông nghiệp": "#15803d",
  "Công nghệ": "#7c3aed",
};

export function FeaturedNews() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-[1320px] mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div
            className="w-[5px] h-[36px] rounded-sm"
            style={{
              background:
                "linear-gradient(180deg, #c41e2a 0%, #d4a853 100%)",
            }}
          />
          <h2
            className="text-[#1a1a1a] uppercase tracking-[0.04em]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "28px",
              fontWeight: 800,
            }}
          >
            Tin tiêu điểm
          </h2>
          <Flame size={22} className="text-[#c41e2a] ml-1" />
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#c41e2a]/30 to-transparent ml-3" />
        </motion.div>

        {/* Top Row: Featured Main (70%) + Latest News List (30%) */}
        <div className="flex gap-5 mb-6">
          {/* Left - Main Featured */}
          <MotionLink
            to={`/article/${featuredMain.id}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-[70%] group cursor-pointer block"
          >
            <div className="relative rounded-xl overflow-hidden h-[420px]">
              <img
                src={featuredMain.image}
                alt={featuredMain.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.05) 100%)",
                }}
              />

              {/* Category badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span
                  className="px-3 py-1 rounded-md text-white text-[12px] uppercase tracking-wider flex items-center gap-1.5"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    backgroundColor:
                      categoryColors[featuredMain.category] || "#c41e2a",
                    boxShadow: "0 2px 8px rgba(196,30,42,0.4)",
                  }}
                >
                  <Flame size={12} />
                  {featuredMain.category}
                </span>
              </div>

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="text-white mb-3 group-hover:text-[#fbbf24] transition-colors duration-300"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "24px",
                    fontWeight: 700,
                    lineHeight: 1.35,
                    textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                  }}
                >
                  {featuredMain.title}
                </h3>
                <p
                  className="text-white/80 mb-3 line-clamp-2"
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {featuredMain.summary}
                </p>
                <div className="flex items-center gap-3 text-white/60 text-[12px]">
                  <Clock size={13} />
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>
                    {featuredMain.time} - {featuredMain.date}
                  </span>
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#d4a853]/50 transition-all duration-500" />
            </div>
          </MotionLink>

          {/* Right - Latest News List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-[30%] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-[#c41e2a]" />
                <span
                  className="text-[#c41e2a] uppercase tracking-wider text-[13px]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Mới cập nhật
                </span>
              </div>
              <Link
                to="/tin-tuc"
                className="text-[#c41e2a] text-[12px] flex items-center gap-1 hover:underline"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              >
                Xem tất cả
                <ChevronRight size={14} />
              </Link>
            </div>

            {/* News list */}
            <div
              className="flex-1 flex flex-col rounded-xl overflow-hidden border border-gray-100"
              style={{
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              {latestNews.map((item, i) => (
                <MotionLink
                  key={item.id}
                  to={`/article/${item.id}`}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group/item flex-1 flex items-start gap-3 px-4 py-3 border-b border-gray-50 last:border-b-0 hover:bg-[#fff8f0] transition-colors duration-200 cursor-pointer"
                >
                  {/* Number index */}
                  <span
                    className="flex-shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center text-[11px] mt-0.5"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 800,
                      backgroundColor:
                        i < 3 ? "#c41e2a" : "#e5e7eb",
                      color: i < 3 ? "#fff" : "#6b7280",
                    }}
                  >
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        color: categoryColors[item.category] || "#666",
                        backgroundColor: `${categoryColors[item.category] || "#666"}10`,
                      }}
                    >
                      {item.category}
                    </span>
                    <h4
                      className="text-[#1a1a1a] mt-1 line-clamp-2 group-hover/item:text-[#c41e2a] transition-colors duration-200"
                      style={{
                        fontFamily: "'Lora', serif",
                        fontSize: "13px",
                        fontWeight: 600,
                        lineHeight: 1.45,
                      }}
                    >
                      {item.title}
                    </h4>
                    <span
                      className="text-gray-400 text-[11px] mt-1 inline-block"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.time} - {item.date}
                    </span>
                  </div>
                </MotionLink>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: 6 Hot News Cards - 2 rows x 3 cols */}
        <div className="grid grid-cols-3 gap-5">
          {hotNews.map((item, i) => (
            <MotionLink
              key={item.id}
              to={`/article/${item.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group/card cursor-pointer rounded-xl overflow-hidden"
              style={{
                boxShadow:
                  "0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              {/* Image */}
              <div className="relative h-[180px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover/card:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
                  }}
                />
                {/* Category */}
                <span
                  className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-white text-[10px] uppercase tracking-wider"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    backgroundColor:
                      categoryColors[item.category] || "#c41e2a",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                  }}
                >
                  {item.category}
                </span>
              </div>

              {/* Text content */}
              <div className="p-4 bg-white">
                <h4
                  className="text-[#1a1a1a] line-clamp-2 group-hover/card:text-[#c41e2a] transition-colors duration-200 mb-2"
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: 1.45,
                  }}
                >
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 text-gray-400 text-[11px]">
                  <Clock size={12} />
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.date}
                  </span>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="h-[2px] bg-gradient-to-r from-[#c41e2a] via-[#d4a853] to-[#c41e2a] transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-center" />
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}