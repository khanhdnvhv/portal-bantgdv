import { motion } from "motion/react";
import { Link } from "react-router";

// Container-48-307 assets
import imgBackground from "figma:asset/498e1eb97b3b6e86b8cd5c08ef37d3743b4d1b80.png";
import imgIc01 from "figma:asset/4fb7dfcd26d7d2c1febdd7f92edd510c156c43d5.png";
import imgIc02 from "figma:asset/c17634e36a6f385d5dc0fab3598e893e323927ec.png";
import imgIc03 from "figma:asset/f3c60c04ff71709c18f5178205db9d714f5188bf.png";
import imgIc04 from "figma:asset/914ba75fc3d27e444857fd30e956c29c7075b8f0.png";
import imgBanner1 from "figma:asset/47c03e65a0d324e001caafab26e66aa3d7bfb669.png";
import imgBanner2 from "figma:asset/128ce081a9fa745fb8e841f1b6d1b7c8c79d029c.png";
import imgBanner3 from "figma:asset/045e114fd8e22890a4269a86c59da4140f1ef08b.png";
import imgBanner4 from "figma:asset/2b05dbb17fedfe3a8d0701e7b96f9ebd24a1eb33.png";

// Container-48-326 assets
import imgSystem1 from "figma:asset/4d31f4e128e2cbe4564ffcb8c48cc843d5e58487.png";
import imgSystem2 from "figma:asset/81a27e27f69d15912adf92238387feaa538aa39c.png";
import imgSystem3 from "figma:asset/7788ceff2366e886337195a47d679e4d0d7faa09.png";
import imgSystem4 from "figma:asset/9c3c22fff02d5fe1ac82def7fc11e93e44f4a474.png";
import imgSystem5 from "figma:asset/c7eb67349873862f45f82f1aa43168e2795db0b4.png";
import imgSystem6 from "figma:asset/d1f48cc456b87ce93aa80b2026ada81746a4e07e.png";
import imgSystem7 from "figma:asset/a52c5b8ebf8be8278fac03194d9138de3cf98305.png";

// Container-49-507 assets (News section)
import imgArrow from "figma:asset/59c7c4bec55305ba484e0f206690da9a3d69fe65.png";
import imgNewsFeatured1 from "figma:asset/ec51da1f99eb307114937378fdf8da71bea074bd.png";
import imgNewsSmall1 from "figma:asset/a9ec66ad75e4313880d5959563e06cdeabc50e99.png";
import imgNewsSmall2 from "figma:asset/10e83c4f778d8702031f776247023f9e9f3b522c.png";
import imgNewsFeatured2 from "figma:asset/ef973c841227057d46a18c0cf88f8f0e597655a0.png";
import imgNewsSmall3 from "figma:asset/65e44dce6542c69681022799eb84a9920d21817f.png";
import imgNewsSmall4 from "figma:asset/143585ffb862275d9930f577bd17610d32fe118d.png";
import svgPaths from "../../imports/svg-hy4dw1gk0f";

const quickLinks = [
  {
    icon: imgIc01,
    title: "Phát biểu của lãnh đạo Đảng, Nhà nước",
    to: "/tin-tuc",
  },
  {
    icon: imgIc02,
    title: "Hệ thống theo dõi tình hình, thực hiện nghị quyết, chỉ thị, kết luận của Trung Ương",
    to: "/van-ban",
  },
  {
    icon: imgIc03,
    title: "Sổ tay Kế hoạch 02-KH/BCĐTW: Sức mạnh liên thông, hiệu quả đồng bộ",
    to: "/van-ban",
  },
  {
    icon: imgIc04,
    title: "Nghị quyết 57 - Động lực phát triển, Đổi mới sáng tạo",
    to: "/nghi-quyet-57",
  },
];

const sideBanners = [imgBanner1, imgBanner2, imgBanner3, imgBanner4];

const systemBanners = [
  { image: imgSystem1, alt: "Thư Điện Tử" },
  { image: imgSystem2, alt: "Hội Nghị - Hội Thảo" },
  { image: imgSystem3, alt: "Đăng Ký Xe" },
  { image: imgSystem4, alt: "Báo Cáo Viên" },
  { image: imgSystem5, alt: "Dư Luận Xã Hội" },
  { image: imgSystem6, alt: "Ban Chỉ Đạo Chuyển Đổi Số" },
  { image: imgSystem7, alt: "Ban Tuyên Giáo Và Dân Vận Địa Phương" },
];

const newsColumns = [
  {
    title: "Vấn đề quan tâm",
    featured: {
      image: imgNewsFeatured1,
      title: "Giải pháp giúp hộ kinh doanh kê khai thuế đúng, an tâm tuân thủ, phát triển bền vững",
      description: "(ĐCSVN) - Chiều 12/3, tại Hà Nội, Cổng Thông tin điện tử Chính phủ và Cục Thuế chủ trì, phối hợp với Công ty Cổ phần Công nghệ Sapo tổ chức Hội ...",
      source: "ĐCSVN",
      date: "12/03/2026",
    },
    articles: [
      {
        image: imgNewsSmall1,
        title: "Công tác chuẩn bị cho Ngày bầu cử cơ bản hoàn thành",
        source: "ĐCSVN",
        date: "12/03/2026",
      },
      {
        image: imgNewsSmall2,
        title: "Bảo đảm cung ứng xăng dầu cho sản xuất, kinh doanh và tiêu dùng của người dân, doanh nghiệp",
        source: "ĐCSVN",
        date: "12/03/2026",
      },
    ],
  },
  {
    title: "Hướng dẫn công tác Đảng",
    featured: {
      image: imgNewsFeatured2,
      title: "Quy định về chức năng, nhiệm vụ của Ban Chỉ đạo Trung Ương về phát triển văn hoá Việt Nam",
      description: "(ĐCSVN) - Thay mặt Bộ Chính trị, đồng chí Trần Cẩm Tú, Ủy viên Bộ Chính trị, Thường trực Ban Bí thư đã ký ban hành Quy định số 08-QĐ/TW ngày ...",
      source: "ĐCSVN",
      date: "06/03/2026",
    },
    articles: [
      {
        image: imgNewsSmall3,
        title: "Tiếp tục thực hiện Chỉ thị của Bộ Chính trị về lãnh đạo cuộc bầu cử đại biểu Quốc hội khoá XVI và bầu cử đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2026 - 2031",
        source: "ĐCSVN",
        date: "26/02/2026",
      },
      {
        image: imgNewsSmall4,
        title: "Thành lập Ban Chỉ đạo Trung Ương về phát triển văn hoá Việt Nam",
        source: "ĐCSVN",
        date: "26/02/2026",
      },
    ],
  },
];

function ClockIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
      <path d={svgPaths.p2c630800} fill="#515869" />
    </svg>
  );
}

export function QuickLinksSection() {
  return (
    <div className="bg-white py-6">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-0">
        {/* Main layout: left links panel + right banners */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Left Panel - Quick Links with background */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[340px] shrink-0 rounded-xl overflow-hidden relative"
            style={{
              backgroundImage: `url('${imgBackground}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Subtle overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.92) 100%)",
              }}
            />
            <div className="relative z-10 flex flex-col p-4 gap-0 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #fdf6ee 0%, #fef9f3 40%, #fff5eb 100%)",
                boxShadow:
                  "0 20px 40px -10px rgba(139,90,43,0.12), 0 8px 20px -6px rgba(139,90,43,0.08), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(196,30,42,0.04)",
                border: "1px solid rgba(224,201,176,0.35)",
              }}
            >
              {quickLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.to}
                  className="group flex items-center gap-3.5 py-3.5 px-2 border-b border-[#e0c9b0]/40 last:border-b-0 cursor-pointer rounded-lg hover:bg-white/50 transition-all duration-300"
                >
                  <div className="w-[40px] h-[40px] shrink-0 rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <img
                      src={link.icon}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span
                    className="text-[#c41e2a] text-[13.5px] uppercase leading-[1.5] group-hover:text-[#a01520] transition-colors duration-300"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Banners grid */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Top row: 2x2 banner images */}
            <div className="grid grid-cols-2 gap-3 flex-1">
              {sideBanners.map((banner, i) => (
                <Link
                  key={i}
                  to="#"
                  className="group relative block rounded-xl overflow-hidden cursor-pointer"
                  style={{
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  <img
                    src={banner}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-black/5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* News section */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-0">
            {newsColumns.map((column, colIdx) => (
              <div
                key={colIdx}
                className={`flex-1 ${colIdx > 0 ? "md:border-l md:border-[#ededed] md:pl-5 md:ml-0" : ""}`}
                style={{
                  paddingRight: colIdx < newsColumns.length - 1 ? 20 : 0,
                }}
              >
                {/* Column header */}
                <div className="bg-[#f9fafb] border-t border-b border-[#ededed] py-3 px-4 flex items-center justify-between mb-4">
                  <span
                    className="text-[#101828] text-[18px] uppercase"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    {column.title}
                  </span>
                  <Link to="/tin-tuc" className="shrink-0">
                    <img src={imgArrow} alt="" className="w-[25px] h-[24px]" />
                  </Link>
                </div>

                {/* Featured article */}
                <Link to="/tin-tuc" className="group flex flex-col sm:flex-row gap-3 pb-4 border-b border-[#ebebeb] mb-4 cursor-pointer">
                  <div className="w-full sm:w-[312px] shrink-0 overflow-hidden rounded">
                    <img
                      src={column.featured.image}
                      alt={column.featured.title}
                      className="w-full h-[208px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-3 pl-3">
                    <h4
                      className="text-[#101828] text-[18px] leading-[24px] group-hover:text-[#c41e2a] transition-colors duration-300"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                    >
                      {column.featured.title}
                    </h4>
                    <p
                      className="text-[#101828] text-[16px] leading-[24px]"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                    >
                      {column.featured.description}
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                      <span
                        className="text-[#515869] text-[14px]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {column.featured.source}
                      </span>
                      <span className="flex items-center -scale-y-100">
                        <ClockIcon />
                      </span>
                      <span
                        className="text-[#515869] text-[14px]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {column.featured.date}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Small articles */}
                {column.articles.map((article, j) => (
                  <Link
                    key={j}
                    to="/tin-tuc"
                    className="group flex gap-3 pb-4 border-b border-[#ebebeb] mb-4 last:border-b-0 last:mb-0 cursor-pointer"
                  >
                    <div className="w-[120px] sm:w-[148px] shrink-0 overflow-hidden rounded">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-[80px] sm:h-[99px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-2.5 pl-1">
                      <p
                        className="text-[#101828] text-[16px] leading-[24px] group-hover:text-[#c41e2a] transition-colors duration-300"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                      >
                        {article.title}
                      </p>
                      <div className="flex items-center gap-2 mt-auto">
                        <span
                          className="text-[#515869] text-[14px]"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {article.source}
                        </span>
                        <span className="flex items-center -scale-y-100">
                          <ClockIcon />
                        </span>
                        <span
                          className="text-[#515869] text-[14px]"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {article.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom row: 3 system banners - separated */}
      </div>

      <div className="max-w-[1320px] mx-auto mt-6 px-4 lg:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {systemBanners.slice(0, 4).map((banner, i) => (
            <Link
              key={i}
              to="#"
              className="group relative block rounded-xl overflow-hidden cursor-pointer"
              style={{
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-black/5" />
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
          {systemBanners.slice(4).map((banner, i) => (
            <Link
              key={i + 4}
              to="#"
              className="group relative block rounded-xl overflow-hidden cursor-pointer"
              style={{
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-black/5" />
            </Link>
          ))}
        </div>
      </div>

      {/* News Categories Section removed - now rendered at App level for full viewport width */}
    </div>
  );
}