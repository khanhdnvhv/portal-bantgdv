import React from "react";
import { motion } from "motion/react";
import imgKHCN from "figma:asset/479b8b11fdceb8dd8e8b3a231157e5e6b0b07739.png";
import imgChinhTri from "figma:asset/e7030a48e25622fe856f20b82a1819395ebba7e0.png";
import imgTinMoi from "figma:asset/f6158e48d49b2c0e9fe6fbbd2ac8e8dddc5d34d2.png";

/* ── data ────────────────────────────────────── */

const columns = [
  {
    label: "BẢO VỆ NỀN TẢNG TƯ TƯỞNG CỦA ĐẢNG",
    articles: [
      {
        image: imgKHCN,
        title: "Ứng dụng di động Tuyên giáo và Dân vận: Sức lan tỏa mạnh mẽ trên không gian số",
      },
      {
        image: imgChinhTri,
        title: "100% cử tri nơi cư trú biểu quyết, nhất trí tín nhiệm đồng chí Trịnh Văn Quyết tham gia ứng cử đại biểu Quốc hội khóa XVI",
      },
      {
        image: imgTinMoi,
        title: "Thống nhất 217 người của các cơ quan Trung ương đủ điều kiện lập danh sách ứng cử đại biểu Quốc hội khóa XVI",
      },
      {
        image: imgKHCN,
        title: "Nhận diện và đấu tranh phản bác các quan điểm sai trái, thù địch trên không gian mạng",
      },
    ],
  },
  {
    label: "TIN HOẠT ĐỘNG NGÀNH",
    articles: [
      {
        image: imgChinhTri,
        title: "Đồng chí Trịnh Văn Quyết giám sát, kiểm tra công tác bầu cử tại Gia Lai",
      },
      {
        image: imgTinMoi,
        title: "Hội nghị toàn quốc học tập, quán triệt các Nghị quyết số 79 và 80 của Bộ Chính trị",
      },
      {
        image: imgKHCN,
        title: "Những vấn đề mới, cốt lõi trong Nghị quyết 80 của Bộ Chính trị về phát triển văn hóa",
      },
      {
        image: imgChinhTri,
        title: "Hội nghị tổng kết công tác tuyên giáo và dân vận năm 2025, triển khai nhiệm vụ năm 2026",
      },
    ],
  },
];

/* ── sub-components ──────────────────────────── */

function CategoryLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="w-[4px] h-[18px] bg-[#C41E2A] rounded-sm flex-shrink-0" />
      <span
        className="uppercase text-[#C41E2A] text-[16px]"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
      >
        {text}
      </span>
    </div>
  );
}

function ArticleCard({ image, title }: { image: string; title: string }) {
  return (
    <div className="flex gap-3 cursor-pointer group">
      <div className="w-[130px] h-[85px] flex-shrink-0 overflow-hidden rounded">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h4
        className="flex-1 text-[14px] leading-[20px] text-[#1a1a1a] m-0 group-hover:text-[#C41E2A] transition-colors line-clamp-3"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
      >
        {title}
      </h4>
    </div>
  );
}

/* ── main export ─────────────────────────────── */

export function NewsEventsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="w-full mx-auto mt-6 px-4 md:px-6 lg:px-0"
      style={{ maxWidth: 1360 }}
    >
      {/* 2-column grid */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-0">
        {columns.map((col, i) => (
          <div
            key={col.label}
            className={`flex-1 px-0 md:px-6 ${i > 0 ? "border-t border-[rgba(34,34,34,0.14)] pt-5 md:border-t-0 md:pt-0 md:border-l" : ""}`}
          >
            <CategoryLabel text={col.label} />

            <div className="flex flex-col gap-4">
              {col.articles.map((article, idx) => (
                <ArticleCard
                  key={idx}
                  image={article.image}
                  title={article.title}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}