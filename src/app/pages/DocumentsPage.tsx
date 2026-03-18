import { motion } from "motion/react";
import { FileText, Download, Calendar, Search, Filter } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Breadcrumb } from "../components/shared";
import { COLORS, FONTS, LAYOUT, SHADOWS } from "../constants/theme";

const documents = [
  { id: 1, title: "Nghị quyết về tăng cường công tác tuyên truyền, giáo dục lý luận chính trị", number: "Số 35-NQ/TW", date: "15/01/2026", issuer: "Ban Chấp hành Trung ương", category: "Nghị quyết", isNew: true },
  { id: 2, title: "Chỉ thị về đổi mới công tác dân vận của hệ thống chính trị", number: "Số 05-CT/TW", date: "10/02/2026", issuer: "Ban Bí thư", category: "Chỉ thị", isNew: true },
  { id: 3, title: "Kết luận về tiếp tục đẩy mạnh học tập và làm theo tư tưởng Hồ Chí Minh", number: "Số 01-KL/TW", date: "05/01/2026", issuer: "Bộ Chính trị", category: "Kết luận", isNew: false },
  { id: 4, title: "Quy định về công tác quản lý báo chí, xuất bản", number: "Số 12-QĐ/TW", date: "20/12/2025", issuer: "Ban Bí thư", category: "Quy định", isNew: false },
  { id: 5, title: "Hướng dẫn triển khai công tác tuyên truyền Nghị quyết Đại hội XIV", number: "Số 08-HD/BTGTW", date: "28/02/2026", issuer: "Ban Tuyên giáo TW", category: "Hướng dẫn", isNew: true },
  { id: 6, title: "Thông báo về việc nâng cao hiệu quả hoạt động của Mặt trận Tổ quốc", number: "Số 145-TB/BTGTW", date: "12/03/2026", issuer: "Ban Tuyên giáo TW", category: "Thông báo", isNew: true },
  { id: 7, title: "Nghị quyết về phát triển khoa học công nghệ và đổi mới sáng tạo", number: "Số 57-NQ/TW", date: "22/12/2024", issuer: "Bộ Chính trị", category: "Nghị quyết", isNew: false },
  { id: 8, title: "Chỉ thị về công tác phòng, chống tham nhũng, tiêu cực", number: "Số 04-CT/TW", date: "02/11/2025", issuer: "Ban Bí thư", category: "Chỉ thị", isNew: false },
];

const categories = ["Tất cả", "Nghị quyết", "Chỉ thị", "Kết luận", "Quy định", "Hướng dẫn", "Thông báo"];

export function DocumentsPage() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = documents.filter((doc) => {
    const matchCategory = activeCategory === "Tất cả" || doc.category === activeCategory;
    const matchSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || doc.number.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="relative px-3 md:px-5" style={{ maxWidth: LAYOUT.maxWidth, margin: "0 auto", paddingTop: 40, paddingBottom: 40 }}>
      <Breadcrumb items={[{ label: "Trang chủ", to: "/" }, { label: "Văn bản mới" }]} />

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl mb-6" style={{ fontFamily: FONTS.display, fontWeight: 700, color: COLORS.primary }}>
          Văn bản mới
        </h1>
      </motion.div>

      {/* Search & filter bar */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="relative flex-1 min-w-0 sm:min-w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm văn bản..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#C41E2A] focus:outline-none transition-colors"
            style={{ fontFamily: FONTS.sans }}
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-5 h-5 text-gray-500" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-lg text-sm transition-all cursor-pointer"
              style={{
                fontFamily: FONTS.sans,
                fontWeight: 600,
                background: activeCategory === cat ? COLORS.primary : "#f3f4f6",
                color: activeCategory === cat ? "white" : "#4b5563",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Documents list */}
      <div className="space-y-4">
        {filtered.map((doc, i) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              to={`/document/${doc.id}`}
              className="group flex items-start gap-5 p-5 bg-white rounded-xl transition-all cursor-pointer"
              style={{ boxShadow: SHADOWS.card, border: "1px solid rgba(0,0,0,0.04)" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = SHADOWS.cardHover; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = SHADOWS.card; }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, rgba(196,30,42,0.1) 0%, rgba(192,137,31,0.08) 100%)" }}
              >
                <FileText className="w-6 h-6 text-[#C41E2A]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold" style={{ fontFamily: FONTS.sans, color: COLORS.goldDark }}>
                    {doc.number}
                  </span>
                  <span className="px-2 py-0.5 rounded text-xs" style={{ background: "rgba(196,30,42,0.08)", color: COLORS.primary, fontFamily: FONTS.sans, fontWeight: 600 }}>
                    {doc.category}
                  </span>
                  {doc.isNew && (
                    <span className="px-2 py-0.5 rounded-full text-white text-[10px] font-bold" style={{ background: COLORS.primary }}>
                      MỚI
                    </span>
                  )}
                </div>
                <h3
                  className="mb-1 group-hover:text-[#C41E2A] transition-colors"
                  style={{ fontFamily: FONTS.display, fontSize: "16px", fontWeight: 700, lineHeight: 1.4 }}
                >
                  {doc.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-gray-500" style={{ fontFamily: FONTS.sans }}>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {doc.date}</span>
                  <span>{doc.issuer}</span>
                </div>
              </div>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: COLORS.primary, fontFamily: FONTS.sans, fontSize: "12px", fontWeight: 600 }}
                onClick={(e) => e.preventDefault()}
              >
                <Download className="w-4 h-4" />
                Tải về
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}