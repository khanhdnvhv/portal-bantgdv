import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { GovInfoSections } from "../components/GovInfoSections";
import { Link } from "react-router";
import { motion } from "motion/react";

import imgMap from "figma:asset/a41e22abebfd404b69dfc38b0d41b2db25fc2f2c.png";
import imgTBT from "figma:asset/7b2bf2892efd8ee6019c31f1d9299fe2382cf28c.png";
import imgTTCP from "figma:asset/acbfaa062cac0cd295fd5cf1839149f9aef4049f.png";
import imgCamNang from "figma:asset/5b5f78b215b5324ef61b56be9f0ec80321186a6c.png";
import imgFeatured from "figma:asset/96a96fd0375592f0fbc58dbdf8322d7f3494e3fb.png";
import imgChiDaoDieuHanh from "figma:asset/c86a01163ad6125935d48456e22136d1d46d513f.png";
import imgThongCaoBaoChi from "figma:asset/3eeaeef6db46c3c2a709718bb8e6a9e55141e3ce.png";

// ── Data ──────────────────────────────────────────────────
const FEATURED = {
  title: "Thông báo Kết luận của Tổng Bí thư Tô Lâm, Trưởng Ban Chỉ đạo Trung ương về hoàn thiện thể chế, pháp luật tại Phiên họp quý I/2026",
  summary: "(Chinhphu.vn) - Ban Chỉ đạo Trung ương về hoàn thiện thể chế, pháp luật vừa ban hành Thông báo số 15-TB/BCĐTW, ngày 17/3/2026 về Kết luận của đồng chí Tổng Bí...",
  date: "17/03/2026",
};

const BULLET_NEWS = [
  "Tổng Bí thư Tô Lâm: Kiên quyết ngăn chặn, đẩy lùi tham nhũng, lãng phí, tiêu cực",
  "Thủ tướng: Bảo đảm tiến độ, nâng cao chất lượng các dự án đường sắt và cương quyết phòng chống tham nhũng, tiêu cực",
  "Sửa đổi Luật Thi đua, khen thưởng: Tạo động lực cho đổi mới, sáng tạo",
  "Bảo đảm bộ máy chính quyền địa phương nhiệm kỳ 2026–2031 đi vào hoạt động chậm nhất ngày 1/4/2026",
  "Thủ tướng Phạm Minh Chính: Xăng dầu và năng lượng cho sản xuất, tiêu dùng được bảo đảm",
  "Tổng Bí thư Tô Lâm: Cần có chiến lược cụ thể nhằm tái cơ cấu nền kinh tế",
];

const HEADLINE_NEWS = [
  "Phó Thủ tướng Phạm Thị Thanh Trà giao nhiệm vụ trọng tâm, cấp bách cho Bộ Nội vụ",
  "Tăng cường phối hợp, nâng cao hiệu quả xây dựng pháp luật và giám sát",
  "Thủ tướng Phạm Minh Chính tiếp Đoàn Quỹ Eisenhower của Hoa Kỳ",
  "Thủ tướng Phạm Minh Chính đề nghị Qatar đẩy mạnh hợp tác năng lượng với Việt Nam",
  "Thủ tướng thúc đẩy UAE cung cấp dầu khí cho Việt Nam theo nhu cầu, an toàn và đúng hạn",
  "Thủ tướng Phạm Minh Chính đề nghị Nhật Bản hỗ trợ Việt Nam đảm bảo an ninh năng lượng",
  "Tổng Bí thư Tô Lâm: Học viện Kỹ thuật quân sự phát huy mạnh mẽ tinh thần \"Đoàn kết, bản lĩnh; đổi mới, sáng tạo\"",
];

const BANNERS = [
  { img: imgTBT, alt: "Bài viết, phát biểu của Tổng Bí thư Tô Lâm", link: "#" },
  { img: imgTTCP, alt: "Trang tin Thủ tướng Chính phủ", link: "#" },
  { img: imgCamNang, alt: "Cẩm nang chính quyền địa phương cấp xã", link: "#" },
];

const BOTTOM_BANNERS = [
  {
    text: "GÓP Ý - HIẾN KẾ",
    subtext: "GÓP Ý, HIẾN KẾ, KIẾN NGHỊ GỬI ĐẾN CHÍNH PHỦ, THỦ TƯỚNG CHÍNH PHỦ",
    gradient: "linear-gradient(135deg, #e8b400 0%, #c8960a 100%)",
    link: "#",
  },
  {
    text: "THANH NIÊN HIẾN KẾ",
    subtext: "PHÁT TRIỂN KHCN, ĐỔI MỚI SÁNG TẠO, CHUYỂN ĐỔI SỐ",
    gradient: "linear-gradient(135deg, #1a3a6c 0%, #0d2340 100%)",
    link: "#",
  },
];

const CHI_DAO_DIEU_HANH = {
  title: "Tổ chức và hoạt động của Quỹ Đổi mới công nghệ quốc gia",
  summary: "(Chinhphu.vn) - Chính phủ ban hành Nghị định số 77/2026/NĐ-CP ngày 17/3/2026 quy định về tổ chức và hoạt động của Quỹ Đổi mới công nghệ quốc gia.",
  img: imgChiDaoDieuHanh,
  items: [
    { time: "23:59", title: "Bảo đảm bộ máy chính quyền địa phương nhiệm kỳ 2026–2031 đi vào hoạt động chậm nhất ngày 1/4/2026" },
    { time: "17:25", title: "Bổ nhiệm ông Tạ Anh Tuấn giữ chức Thứ trưởng Bộ Tài chính" },
    { time: "17:24", title: "Kế hoạch hoạt động năm 2026 của BCĐ rà soát và tổ chức thực hiện việc xử lý vướng mắc trong hệ..." },
  ],
};

const THONG_CAO_BAO_CHI = {
  title: "Chỉ đạo, điều hành của Chính phủ, Thủ tướng Chính phủ ngày 18/3/2026",
  summary: "(Chinhphu.vn) - Văn phòng Chính phủ vừa có Thông cáo báo chí chỉ đạo, điều hành của Chính phủ, Thủ tướng Chính phủ ngày 18/3/2026.",
  img: imgThongCaoBaoChi,
  items: [
    { time: "23:58", title: "Chỉ thị của Thủ tướng Chính phủ về tổ chức kỳ họp thứ nhất của Hội đồng nhân dân các cấp nhiệm kỳ..." },
    { time: "18:25", title: "Chỉ đạo, điều hành của Chính phủ, Thủ tướng chính ph ngày 17/3/2026" },
    { time: "21:54", title: "Công điện của Thủ tướng Chính phủ về một số nhiệm vụ, giải pháp để tiếp tục thúc đẩy xuất khẩu năm..." },
  ],
};

// ── Components ───────────────────────────────────────────

function FeaturedArticle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-3"
    >
      <h2
        className="text-[#111] cursor-pointer hover:text-[#C41E2A] transition-colors"
        style={{ fontFamily: "'Merriweather', 'Playfair Display', serif", fontSize: 27, lineHeight: "42px", fontWeight: 700 }}
      >
        <Link to="/article/featured-thong-bao" className="text-inherit no-underline hover:text-[#C41E2A]">
          {FEATURED.title}
        </Link>
      </h2>

      <div className="relative w-full h-[330px] overflow-hidden border border-[#eee]">
        <img src={imgFeatured} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 14, lineHeight: "21px", color: "#3b4e68" }}>
        {FEATURED.summary}
      </p>
    </motion.div>
  );
}

function BulletNewsList() {
  return (
    <div className="flex flex-col gap-[5px]">
      {BULLET_NEWS.map((title, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * i, duration: 0.3 }}
          className="pl-5 relative"
        >
          <span
            className="absolute left-0 top-0"
            style={{ fontFamily: "'Roboto', sans-serif", fontSize: 13, lineHeight: "22px", color: "#99a5b5" }}
          >
            ■
          </span>
          <Link
            to={`/article/bullet-${i}`}
            className="no-underline hover:text-[#C41E2A] transition-colors"
            style={{ fontFamily: "'Roboto', sans-serif", fontSize: 15, lineHeight: "22px", color: "#000e26" }}
          >
            {title}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

function HeadlineNewsList() {
  return (
    <div className="flex flex-col">
      {HEADLINE_NEWS.map((title, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.08 * i, duration: 0.3 }}
          className={`pl-5 relative py-[20px] ${i > 0 ? "border-t border-[#eee]" : ""}`}
        >
          <span
            className="absolute left-0 top-[22px]"
            style={{ fontFamily: "'Roboto', sans-serif", fontSize: 13, lineHeight: "20.8px", color: "#da251c" }}
          >
            ■
          </span>
          <Link
            to={`/article/headline-${i}`}
            className="no-underline hover:text-[#C41E2A] transition-colors"
            style={{ fontFamily: "'Merriweather', serif", fontSize: 15, lineHeight: "23px", fontWeight: 700, color: "#031739" }}
          >
            {title}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

function MapSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="border border-[#eee] bg-white overflow-hidden"
    >
      <div
        className="py-2 px-4 text-center"
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: 16,
          fontWeight: 700,
          color: "#003082",
          textTransform: "uppercase",
        }}
      >
        Bản đồ hành chính
      </div>
      <div className="relative">
        <img src={imgMap} alt="Bản đồ nước CHXHCN Việt Nam" className="w-full h-auto object-contain" />
        <div className="absolute bottom-2 right-2 bg-white/80 px-2 py-1 text-xs text-gray-500">
          © Cổng TTĐT Chính phủ
        </div>
      </div>
    </motion.div>
  );
}

function SidebarBanners() {
  return (
    <div className="flex flex-col gap-3 mt-4">
      {BANNERS.map((b, i) => (
        <motion.a
          key={i}
          href={b.link}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
          className="block overflow-hidden border border-[#eee] hover:shadow-md transition-shadow"
        >
          <img src={b.img} alt={b.alt} className="w-full h-auto object-cover" />
        </motion.a>
      ))}
    </div>
  );
}

function BottomBanners() {
  return (
    <div className="flex flex-col gap-3 mt-6">
      {BOTTOM_BANNERS.map((b, i) => (
        <motion.a
          key={i}
          href={b.link}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
          className="block rounded overflow-hidden hover:shadow-lg transition-shadow"
          style={{ background: b.gradient }}
        >
          <div className="py-4 px-6 text-center">
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 24,
                fontWeight: 700,
                color: i === 0 ? "#C41E2A" : "#fff",
                textTransform: "uppercase",
              }}
            >
              {b.text}
            </div>
            <div
              className="mt-1"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: i === 0 ? "#8b1a1a" : "#e0d6c2",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              {b.subtext}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}

interface NewsSectionBlockProps {
  heading: string;
  data: typeof CHI_DAO_DIEU_HANH;
  delay: number;
}

function NewsSectionBlock({ heading, data, delay }: NewsSectionBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex-1 min-w-0 bg-white"
    >
      {/* Section header */}
      <div className="border-t-2 border-b border-[#eee] rounded-t-[2px] py-[14px]">
        <h3
          style={{
            fontFamily: "'Merriweather', serif",
            fontSize: 17,
            fontWeight: 700,
            color: "#031739",
            textTransform: "uppercase",
            lineHeight: "21px",
            margin: 0,
          }}
        >
          {heading}
        </h3>
      </div>

      {/* Featured article: image left + text right */}
      <div className="flex flex-col sm:flex-row gap-0 mt-4">
        <div className="w-full sm:w-[275px] sm:shrink-0">
          <div className="relative w-full h-[172px] overflow-hidden border border-[#eee]">
            <img
              src={data.img}
              alt={data.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 min-w-0 sm:pl-[15px] mt-3 sm:mt-0">
          <Link
            to="#"
            className="no-underline hover:text-[#C41E2A] transition-colors block"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 18,
              fontWeight: 500,
              lineHeight: "24px",
              color: "#031739",
            }}
          >
            {data.title}
          </Link>
          <p
            className="mt-2"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 14,
              lineHeight: "21px",
              color: "#3b4e68",
              margin: 0,
              marginTop: 8,
            }}
          >
            {data.summary}
          </p>
        </div>
      </div>

      {/* Time-based news list */}
      <div className="flex flex-col mt-6">
        {data.items.map((item, i) => (
          <div
            key={i}
            className="flex items-start border-t border-[#eee] py-[13px]"
          >
            <div
              className="shrink-0 pr-[9px]"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: 14,
                lineHeight: "22.4px",
                color: "#62748d",
              }}
            >
              {item.time}
            </div>
            <div className="border-l border-[#eee] pl-[12px] flex-1 min-w-0">
              <Link
                to="#"
                className="no-underline hover:text-[#C41E2A] transition-colors"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  lineHeight: "20px",
                  color: "#182940",
                }}
              >
                {item.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─ Main Page ─────────────────────────────────────────────

export function ForeignInfoPage() {
  return (
    <div className="w-full">
      {/* Main Content */}
      <div
        className="w-full px-4 pb-8"
        style={{ maxWidth: 1320, margin: "0 auto" }}
      >
        <div className="flex flex-col lg:flex-row gap-6">
          {/* ── Left + Center: 3-column layout ── */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col md:flex-row gap-0">
              {/* Left column: Featured + bullets */}
              <div className="md:w-[540px] md:shrink-0 md:pr-5 md:border-r md:border-[#eee]">
                <FeaturedArticle />
                <div className="mt-4">
                  <BulletNewsList />
                </div>
              </div>

              {/* Center column: headline news list */}
              <div className="flex-1 min-w-0 mt-6 md:mt-0 md:pl-0">
                <HeadlineNewsList />
              </div>
            </div>

            {/* Bottom banners */}
            <BottomBanners />
          </div>

          {/* ── Right sidebar ── */}
          <div className="w-full lg:w-[280px] lg:shrink-0">
            <MapSection />
            <SidebarBanners />
          </div>
        </div>

        {/* ── Chỉ đạo điều hành + Thông cáo báo chí ── */}
        <div className="flex flex-col md:flex-row gap-[30px] mt-5 pb-5">
          <NewsSectionBlock heading="Chỉ đạo điều hành" data={CHI_DAO_DIEU_HANH} delay={0.6} />
          <NewsSectionBlock heading="Thông cáo báo chí" data={THONG_CAO_BAO_CHI} delay={0.7} />
        </div>
      </div>

      {/* ── Gov Info Sections ── */}
      <GovInfoSections />
    </div>
  );
}