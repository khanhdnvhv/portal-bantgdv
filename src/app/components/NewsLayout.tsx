import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import svgPaths from "../../imports/svg-jkwxz7y8yy";

// Create a motion-enabled Link component
const MotionLink = motion.create(Link);

// Reuse the same images from the Figma HeaderBottom component
import imgA1Bnd88525050JpgWebp from "figma:asset/5b879d20627781a267f25334f47725b9b1325a38.png";
import imgPhamLinhJpgWebp from "figma:asset/a299edb4780536bd21db27602130e18438a86398.png";
import imgDotPhaChienLuocKhcnCoverJpgWebp from "figma:asset/a5e7b24690cf0e132811cfa5466c5a05871940ff.png";
import imgBnd77388383JpgWebp from "figma:asset/a362b515171b1364f7afc2993de2b7dd2cc0e840.png";
import imgBnd7754JpgWebp from "figma:asset/06551051baeacb9bc38cb95f3cfefc60058e7918.png";

// ── Data ──────────────────────────────────────────────

const mainArticle = {
  id: "article-main-1",
  title:
    "Làm rõ cả ưu điểm và hạn chế trong thể chế hóa các chủ trương lãnh đạo của Đảng",
  summary:
    "Chiều 6/3, tại Hà Nội, Tổng Bí thư Tô Lâm, Trưởng Đoàn Kiểm tra, giám sát số 10 của Bộ Chính trị, Ban Bí thư chủ trì Hội nghị công bố quyết định và triển khai kế hoạch kiểm tra, giám sát của Bộ Chính trị, Ban Bí thư năm 2026 đối với Ban Thường vụ Đảng ủy Quốc hội.",
  image: imgA1Bnd88525050JpgWebp,
  category: "CHÍNH TRỊ",
};

const middleArticles = [
  {
    id: "article-mid-1",
    title:
      "Phát biểu của Tổng Bí thư Tô Lâm tại Hội nghị toàn quốc quán triệt và triển khai thực hiện Nghị quyết",
    image: imgBnd77388383JpgWebp,
    category: "ĐẠI HỘI XIV",
  },
  {
    id: "article-mid-2",
    title:
      "Nhiệm vụ trọng tâm về khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số",
    image: imgDotPhaChienLuocKhcnCoverJpgWebp,
    category: "KHOA HỌC",
  },
];

const freshStories = [
  {
    id: "article-fresh-1",
    title: "Góp ý dự thảo Chương trình hành động của Mặt trận Tổ quốc Việt Nam",
    category: "MẶT TRẬN",
    date: "14/03/2026",
    exclusive: false,
  },
  {
    id: "article-fresh-2",
    title: "Hội nghị toàn quốc quán triệt, triển khai thực hiện Nghị quyết số 79-NQ/TW",
    category: "BỘ CHÍNH TRỊ",
    date: "14/03/2026",
    exclusive: true,
  },
  {
    id: "article-fresh-3",
    title: "Đổi mới phương thức lãnh đạo của Đảng đối với hệ thống chính trị trong giai đoạn mới",
    category: "XÂY DỰNG ĐẢNG",
    date: "13/03/2026",
    exclusive: false,
  },
  {
    id: "article-fresh-4",
    title: "Phát triển kinh tế số và chuyển đổi số quốc gia theo hướng bền vững",
    category: "KINH TẾ",
    date: "13/03/2026",
    exclusive: false,
  },
  {
    id: "article-fresh-5",
    title: "Tăng cường công tác phòng, chống tham nhũng trong tình hình mới",
    category: "CHÍNH TRỊ",
    date: "12/03/2026",
    exclusive: false,
  },
  // ── Page 2 ──
  {
    id: "article-fresh-6",
    title: "Nâng cao chất lượng đội ngũ cán bộ đáp ứng yêu cầu nhiệm vụ mới",
    category: "XÂY DỰNG ĐẢNG",
    date: "12/03/2026",
    exclusive: false,
  },
  {
    id: "article-fresh-7",
    title: "Chiến lược phát triển văn hóa Việt Nam đến năm 2030, tầm nhìn 2045",
    category: "VĂN HÓC",
    date: "11/03/2026",
  },
  {
    id: "article-fresh-8",
    title: "Đẩy mạnh cải cách hành chính, xây dựng chính phủ điện tử phục vụ nhân dân",
    category: "HÀNH CHÍNH",
    date: "11/03/2026",
    exclusive: false,
  },
  {
    id: "article-fresh-9",
    title: "Triển khai Nghị quyết về phát triển kinh tế biển gắn với bảo vệ chủ quyền",
    category: "QUỐC PHÒNG",
    date: "10/03/2026",
    exclusive: false,
  },
  {
    id: "article-fresh-10",
    title: "Hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa",
    category: "KINH TẾ",
    date: "10/03/2026",
    exclusive: true,
  },
];

const popularArticles = [
  {
    id: "article-pop-1",
    title: "Làm rõ cả ưu điểm và hạn chế trong thể chế hóa các chủ trương lãnh đạo của Đảng",
    category: "CHÍNH TRỊ",
    date: "14/03/2026",
    exclusive: false,
  },
  {
    id: "article-pop-2",
    title: "Phát biểu của Tổng Bí thư Tô Lâm tại Hội nghị toàn quốc quán triệt Nghị quyết",
    category: "ĐẠI HỘI XIV",
    date: "14/03/2026",
    exclusive: false,
  },
  {
    id: "article-pop-3",
    title: "Góp ý dự thảo Chương trình hành động của Mặt trận Tổ quốc Việt Nam",
    category: "MẶT TRẬN",
    date: "13/03/2026",
    exclusive: false,
  },
  {
    id: "article-pop-4",
    title: "Nhiệm vụ trọng tâm về khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số",
    category: "KHOA HỌC",
    date: "13/03/2026",
    exclusive: true,
  },
  {
    id: "article-pop-5",
    title: "Hội nghị toàn quốc triển khai Nghị quyết số 79-NQ/TW và số 80-NQ/TW",
    category: "BỘ CHÍNH TRỊ",
    date: "12/03/2026",
    exclusive: true,
  },
  // ── Extra articles (shown after "Xem thêm") ──
  {
    id: "article-pop-6",
    title: "Đối ngoại Đảng góp phần nâng cao vị thế Việt Nam trên trường quốc tế",
    category: "ĐỐI NGOẠI",
    date: "12/03/2026",
    exclusive: false,
  },
  {
    id: "article-pop-7",
    title: "Công tác kiểm tra, giám sát góp phần giữ vững kỷ cương, kỷ luật Đảng",
    category: "XÂY DỰNG ĐẢNG",
    date: "11/03/2026",
    exclusive: false,
  },
  {
    id: "article-pop-8",
    title: "Phát huy vai trò của nhân dân trong xây dựng Đảng và hệ thống chính trị",
    category: "DÂN VẬN",
    date: "11/03/2026",
    exclusive: true,
  },
];

const FRESH_PER_PAGE = 5;

// ── Main Export ────────────────────────────────────────

export function NewsLayout() {
  const [freshPage, setFreshPage] = useState(0);

  const totalFreshPages = Math.ceil(freshStories.length / FRESH_PER_PAGE);
  const visibleFresh = freshStories.slice(
    freshPage * FRESH_PER_PAGE,
    (freshPage + 1) * FRESH_PER_PAGE
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-white overflow-hidden"
    >
      {/* 4-column layout */}
      <div
        className="flex px-[10px] py-[20px]"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #fdfcfa 50%, #f9f7f4 100%)",
          boxShadow:
            "0 25px 50px -12px rgba(0,0,0,0.15), 0 12px 24px -8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(0,0,0,0.04)",
          borderRadius: "16px",
          margin: "0 10px",
          position: "relative",
        }}
      >
        {/* Subtle inner glow for depth */}
        <div
          className="absolute inset-0 rounded-[16px] pointer-events-none"
          style={{
            boxShadow: "inset 0 2px 20px rgba(255,255,255,0.8), inset 0 -2px 15px rgba(0,0,0,0.03)",
          }}
        />

        {/* ═══ Column 1: Fresh Stories (~20%) ═══ */}
        <div className="w-[20%] px-[10px] flex flex-col" style={{ position: "relative", zIndex: 1 }}>
          {/* Title */}
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "28px",
              fontWeight: 700,
              lineHeight: "28px",
              color: "#000",
              letterSpacing: "-0.5px",
            }}
          >
            Tin mới
          </h2>
          <p
            className="uppercase mt-[10px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              lineHeight: "14px",
              color: "#000",
            }}
          >
            Hôm nay: Xem các bài viết
            <br />
            được biên tập viên chọn lọc!
          </p>

          {/* Article list */}
          <div className="flex flex-col mt-[20px]">
            {visibleFresh.map((article, i) => (
              <MotionLink
                key={`fresh-${i}`}
                to={`/article/${article.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
                className="group/fresh block py-[13px] cursor-pointer"
                style={{
                  borderTop: "1px solid #eaeaea",
                }}
              >
                {/* Title with optional EXCLUSIVE badge */}
                <div className="flex items-start gap-[6px]">
                  {article.exclusive && (
                    <span
                      className="inline-block flex-shrink-0 mt-[3px] px-[5px] py-[3px] rounded-sm text-white uppercase"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "10px",
                        fontWeight: 600,
                        backgroundColor: "#c41e2a",
                        lineHeight: "10px",
                        letterSpacing: "0.03em",
                      }}
                    >
                      ĐỘC QUYỀN
                    </span>
                  )}
                  <h4
                    className="text-[#000] group-hover/fresh:text-[#c41e2a] transition-colors line-clamp-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      lineHeight: "19px",
                    }}
                  >
                    {article.title}
                  </h4>
                </div>
                {/* Category + Date */}
                <div className="flex items-center gap-[8px] mt-[8px]">
                  <span
                    className="uppercase"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#c41e2a",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {article.category}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "#000",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {article.date}
                  </span>
                </div>
              </MotionLink>
            ))}
          </div>

          {/* Prev/Next arrows + page indicator */}
          <div className="flex items-center gap-[7px] mt-[10px]">
            <button
              className="flex items-center justify-center w-[25px] h-[25px] cursor-pointer transition-opacity"
              style={{ opacity: freshPage === 0 ? 0.3 : 1 }}
              onClick={() => setFreshPage((prev) => Math.max(prev - 1, 0))}
              disabled={freshPage === 0}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d={svgPaths.p271e5b00} fill="black" />
              </svg>
            </button>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                color: "#555",
              }}
            >
              {freshPage + 1} / {totalFreshPages}
            </span>
            <button
              className="flex items-center justify-center w-[25px] h-[25px] cursor-pointer transition-opacity"
              style={{ opacity: freshPage === totalFreshPages - 1 ? 0.3 : 1 }}
              onClick={() => setFreshPage((prev) => Math.min(prev + 1, totalFreshPages - 1))}
              disabled={freshPage === totalFreshPages - 1}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d={svgPaths.p358b5100} fill="black" />
              </svg>
            </button>
          </div>
        </div>

        {/* ═══ Column 2: Featured Article (~40%) ═══ */}
        <div className="w-[40%] px-[10px]" style={{ position: "relative", zIndex: 1 }}>
          <MotionLink
            to={`/article/${mainArticle.id}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group block relative overflow-hidden cursor-pointer h-full rounded-[10px]"
            style={{
              minHeight: "520px",
              boxShadow: "0 8px 30px -6px rgba(0,0,0,0.2), 0 4px 12px -4px rgba(0,0,0,0.1)",
              transition: "box-shadow 0.4s ease, transform 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 20px 50px -10px rgba(0,0,0,0.35), 0 10px 25px -8px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 30px -6px rgba(0,0,0,0.2), 0 4px 12px -4px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={mainArticle.image}
              alt={mainArticle.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 42%, rgba(0,0,0,0) 61%, rgba(0,0,0,0) 100%)",
              }}
            />

            {/* Content at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-[25px] flex flex-col gap-[8px]">
              <span
                className="inline-block self-start px-[8px] py-[5px] rounded-sm text-white uppercase"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  backgroundColor: "#c41e2a",
                  lineHeight: "13px",
                }}
              >
                {mainArticle.category}
              </span>

              <h3
                className="text-white group-hover:text-[#fbbf24] transition-colors"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "32px",
                  fontWeight: 700,
                  lineHeight: "38px",
                }}
              >
                {mainArticle.title}
              </h3>

              <p
                className="text-white/80"
                style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "15px",
                  fontWeight: 500,
                  lineHeight: "22px",
                }}
              >
                {mainArticle.summary}
              </p>
            </div>
          </MotionLink>
        </div>

        {/* ═══ Column 3: Two stacked image articles (~20%) ═══ */}
        <div className="w-[20%] px-[10px] flex flex-col gap-[20px]" style={{ position: "relative", zIndex: 1 }}>
          {middleArticles.map((article, i) => (
            <MotionLink
              key={`mid-${i}`}
              to={`/article/${article.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
              className="group/mid flex flex-col cursor-pointer flex-1"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-[10px]"
                style={{
                  height: "190px",
                  boxShadow: "0 6px 20px -4px rgba(0,0,0,0.15), 0 3px 8px -3px rgba(0,0,0,0.08)",
                  transition: "box-shadow 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 14px 35px -6px rgba(0,0,0,0.25), 0 6px 16px -4px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 6px 20px -4px rgba(0,0,0,0.15), 0 3px 8px -3px rgba(0,0,0,0.08)";
                }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/mid:scale-105"
                />
              </div>

              {/* Text content */}
              <div className="pt-[14px] pr-[10px] flex flex-col gap-[7px]">
                <span
                  className="uppercase"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#000",
                    letterSpacing: "-0.3px",
                    lineHeight: "12px",
                  }}
                >
                  {article.category}
                </span>
                <h4
                  className="text-[#000] group-hover/mid:text-[#c41e2a] transition-colors line-clamp-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "20.8px",
                  }}
                >
                  {article.title}
                </h4>
              </div>
            </MotionLink>
          ))}
        </div>

        {/* ═══ Column 4: Popular (~20%) ═══ */}
        <div className="w-[20%] px-[10px] flex flex-col">
          {/* Title */}
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "28px",
              fontWeight: 700,
              lineHeight: "28px",
              color: "#000",
              letterSpacing: "-0.5px",
            }}
          >
            Nổi bật
          </h2>

          {/* Article list */}
          <div
            className="flex flex-col mt-[20px] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#c41e2a_#f0f0f0]"
            style={{
              maxHeight: "480px",
            }}
          >
            {popularArticles.map((article, i) => (
              <MotionLink
                key={`pop-${i}`}
                to={`/article/${article.id}`}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
                className="group/pop block py-[13px] cursor-pointer"
                style={{
                  borderTop: "1px solid #eaeaea",
                }}
              >
                {/* Category */}
                <span
                  className="uppercase"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#c41e2a",
                    letterSpacing: "-0.3px",
                    lineHeight: "11px",
                  }}
                >
                  {article.category}
                </span>

                {/* Title with optional badge */}
                <div className="flex items-start gap-[6px] mt-[6px]">
                  {(article as any).exclusive && (
                    <span
                      className="inline-block flex-shrink-0 mt-[3px] px-[5px] py-[3px] rounded-sm text-white uppercase"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "10px",
                        fontWeight: 600,
                        backgroundColor: "#c41e2a",
                        lineHeight: "10px",
                        letterSpacing: "0.03em",
                      }}
                    >
                      ĐỘC QUYỀN
                    </span>
                  )}
                  <h4
                    className="text-[#000] group-hover/pop:text-[#c41e2a] transition-colors line-clamp-2"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "17px",
                    }}
                  >
                    {article.title}
                  </h4>
                </div>

                {/* Date */}
                <span
                  className="block mt-[6px]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "#000",
                    letterSpacing: "-0.3px",
                  }}
                >
                  {article.date}
                </span>
              </MotionLink>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}