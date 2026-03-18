import { motion } from "motion/react";
import { FileText, Download, Calendar, Eye, TrendingUp } from "lucide-react";

type Document = {
  id: number;
  title: string;
  number: string;
  date: string;
  issuer: string;
  category: string;
  downloads: string;
  isNew?: boolean;
};

const DOCUMENTS: Document[] = [
  {
    id: 1,
    title: "Nghị quyết về tăng cường công tác tuyên truyền, giáo dục lý luận chính trị trong tình hình mới",
    number: "Số 35-NQ/TW",
    date: "15/01/2026",
    issuer: "Ban Chấp hành Trung ương",
    category: "Nghị quyết",
    downloads: "12.5K",
    isNew: true,
  },
  {
    id: 2,
    title: "Chỉ thị về đổi mới công tác dân vận của hệ thống chính trị trong tình hình mới",
    number: "Số 05-CT/TW",
    date: "10/02/2026",
    issuer: "Ban Bí thư",
    category: "Chỉ thị",
    downloads: "8.2K",
    isNew: true,
  },
  {
    id: 3,
    title: "Kết luận về tiếp tục đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh",
    number: "Số 01-KL/TW",
    date: "05/01/2026",
    issuer: "Bộ Chính trị",
    category: "Kết luận",
    downloads: "15.8K",
    isNew: false,
  },
  {
    id: 4,
    title: "Quy định về công tác quản lý báo chí, xuất bản trong thời kỳ hội nhập quốc tế",
    number: "Số 12-QĐ/TW",
    date: "20/12/2025",
    issuer: "Ban Bí thư",
    category: "Quy định",
    downloads: "6.7K",
    isNew: false,
  },
  {
    id: 5,
    title: "Hướng dẫn triển khai công tác tuyên truyền Nghị quyết Đại hội XIV của Đảng",
    number: "Số 08-HD/BTGTW",
    date: "28/02/2026",
    issuer: "Ban Tuyên giáo TW",
    category: "Hướng dẫn",
    downloads: "9.3K",
    isNew: true,
  },
  {
    id: 6,
    title: "Thông báo về việc nâng cao hiệu quả hoạt động của Mặt trận Tổ quốc và các đoàn thể",
    number: "Số 145-TB/BTGTW",
    date: "12/03/2026",
    issuer: "Ban Tuyên giáo TW",
    category: "Thông báo",
    downloads: "4.1K",
    isNew: true,
  },
];

export function DocumentsSection() {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden"
      style={{ padding: "36px 32px" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 10% 20%, rgba(196,30,42,0.10) 0%, transparent 45%), radial-gradient(ellipse at 90% 80%, rgba(192,137,31,0.08) 0%, transparent 45%), radial-gradient(ellipse at 50% 0%, rgba(196,30,42,0.04) 0%, transparent 35%), linear-gradient(180deg, rgba(255,253,245,0.99) 0%, rgba(255,250,240,0.97) 50%, rgba(255,253,245,0.99) 100%)",
        }}
      />

      {/* Decorative pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(196,30,42,0.3) 35px, rgba(196,30,42,0.3) 36px)",
        }}
      />

      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: 4,
          background: "linear-gradient(90deg, #c41e2a 0%, #d4a853 50%, #c41e2a 100%)",
          borderRadius: "16px 16px 0 0",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-[5px] h-[40px] rounded-full"
                style={{ background: "linear-gradient(180deg, #c41e2a 0%, #8b1a1a 100%)" }}
              />
              <div className="flex flex-col">
                <h2
                  style={{
                    fontFamily: "'Protest Strike', sans-serif",
                    fontSize: "32px",
                    color: "#c41e2a",
                    letterSpacing: "1px",
                    lineHeight: "1.1",
                  }}
                >
                  VĂN BẢN CHỈ ĐẠO
                </h2>
                <span
                  className="text-[#8b6914] mt-1"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  Nghị quyết, Chỉ thị, Kết luận quan trọng
                </span>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="text-[#c41e2a] hover:text-[#8b1a1a] transition-colors uppercase flex items-center gap-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            <TrendingUp className="w-4 h-4" />
            Xem tất cả văn bản →
          </a>
        </motion.div>

        {/* Documents Grid */}
        <div className="grid grid-cols-2 gap-5">
          {DOCUMENTS.map((doc, i) => (
            <motion.a
              key={doc.id}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group/doc relative flex flex-col rounded-xl overflow-hidden cursor-pointer"
              style={{
                background: "#ffffff",
                boxShadow: "0 4px 16px -4px rgba(0,0,0,0.08), 0 2px 8px -2px rgba(0,0,0,0.04)",
                border: "1px solid rgba(196,30,42,0.08)",
                padding: "20px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 16px 40px -8px rgba(196,30,42,0.2), 0 8px 20px -6px rgba(0,0,0,0.12)";
                e.currentTarget.style.borderColor = "rgba(196,30,42,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 16px -4px rgba(0,0,0,0.08), 0 2px 8px -2px rgba(0,0,0,0.04)";
                e.currentTarget.style.borderColor = "rgba(196,30,42,0.08)";
              }}
            >
              {/* New badge */}
              {doc.isNew && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 + 0.2 }}
                  className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-white"
                  style={{
                    background: "linear-gradient(135deg, #c41e2a 0%, #e74c3c 100%)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    boxShadow: "0 2px 8px rgba(196,30,42,0.3)",
                  }}
                >
                  MỚI
                </motion.div>
              )}

              {/* Icon & Category */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center group-hover/doc:scale-110 transition-transform duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(196,30,42,0.1) 0%, rgba(192,137,31,0.08) 100%)",
                    }}
                  >
                    <FileText className="w-5 h-5 text-[#c41e2a]" />
                  </div>
                  <span
                    className="px-2.5 py-1 rounded-md"
                    style={{
                      background: "rgba(196,30,42,0.08)",
                      color: "#c41e2a",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                    }}
                  >
                    {doc.category}
                  </span>
                </div>
              </div>

              {/* Document number */}
              <div
                className="mb-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#8b6914",
                  letterSpacing: "0.3px",
                }}
              >
                {doc.number}
              </div>

              {/* Title */}
              <h3
                className="text-[#1a1a1a] line-clamp-2 mb-3 group-hover/doc:text-[#c41e2a] transition-colors duration-300"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: "22px",
                  minHeight: "44px",
                }}
              >
                {doc.title}
              </h3>

              {/* Issuer */}
              <div
                className="mb-3 text-[#666]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                {doc.issuer}
              </div>

              {/* Footer meta */}
              <div className="flex items-center justify-between pt-3 mt-auto border-t border-[#f0f0f0]">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-[#999]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "11px",
                        fontWeight: 500,
                      }}
                    >
                      {doc.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#999]">
                    <Download className="w-3.5 h-3.5" />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "11px",
                        fontWeight: 500,
                      }}
                    >
                      {doc.downloads}
                    </span>
                  </div>
                </div>

                {/* Download button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #c41e2a 0%, #e74c3c 100%)",
                    color: "white",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    boxShadow: "0 2px 6px rgba(196,30,42,0.2)",
                  }}
                >
                  <Download className="w-3.5 h-3.5" />
                  Tải về
                </motion.div>
              </div>

              {/* Hover accent line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: "linear-gradient(90deg, #c41e2a 0%, #ffd700 50%, #c41e2a 100%)",
                  transformOrigin: "left",
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}