import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import {
  BookOpen, FileText, ScrollText, Library, BookMarked, Headphones,
  Calendar, Eye, Download, Search, ChevronRight, Filter, Clock,
  Star, ArrowRight, Bookmark, TrendingUp,
} from "lucide-react";
import { Breadcrumb } from "../components/shared";
import { COLORS, FONTS, LAYOUT, SHADOWS } from "../constants/theme";

const CATEGORIES = [
  { id: "phap-luat", label: "Văn bản pháp luật", icon: <FileText className="w-4 h-4" />, color: "#C41E2A", count: 234 },
  { id: "van-kien", label: "Văn kiện", icon: <ScrollText className="w-4 h-4" />, color: "#C0891F", count: 86 },
  { id: "tai-lieu", label: "Tài liệu", icon: <BookOpen className="w-4 h-4" />, color: "#2563eb", count: 152 },
  { id: "sach", label: "Sách", icon: <BookMarked className="w-4 h-4" />, color: "#059669", count: 78 },
  { id: "sach-noi", label: "Sách nói", icon: <Headphones className="w-4 h-4" />, color: "#7c3aed", count: 45 },
];

const lawDocs = [
  { id: "l1", title: "Luật Đất đai 2024 (sửa đổi, bổ sung)", number: "Luật số 31/2024/QH15", date: "18/01/2024", type: "Luật", downloads: "45,678", featured: true },
  { id: "l2", title: "Nghị định quy định chi tiết thi hành Luật Đất đai", number: "NĐ 102/2024/NĐ-CP", date: "15/03/2026", type: "Nghị định", downloads: "12,345" },
  { id: "l3", title: "Thông tư hướng dẫn công tác tuyên giáo cơ sở", number: "TT 08/2026/TT-BNV", date: "10/03/2026", type: "Thông tư", downloads: "8,901" },
  { id: "l4", title: "Quyết định ban hành quy chế làm việc Ban Tuyên giáo", number: "QĐ 234/QĐ-TW", date: "08/03/2026", type: "Quyết định", downloads: "6,543" },
  { id: "l5", title: "Chỉ thị về đẩy mạnh học tập tư tưởng Hồ Chí Minh", number: "CT 05-CT/TW", date: "05/03/2026", type: "Chỉ thị", downloads: "15,432" },
  { id: "l6", title: "Nghị quyết 57 về đột phá phát triển KHCN và chuyển đổi số", number: "NQ 57-NQ/TW", date: "22/12/2024", type: "Nghị quyết", downloads: "38,765" },
  { id: "l7", title: "Luật An ninh mạng (sửa đổi, bổ sung 2025)", number: "Luật số 12/2025/QH15", date: "01/01/2026", type: "Luật", downloads: "22,100" },
];

const resolutions = [
  { id: "r1", title: "Văn kiện Đại hội đại biểu toàn quốc lần thứ XIII", date: "02/02/2021", type: "Văn kiện Đại hội", downloads: "98,765", featured: true },
  { id: "r2", title: "Nghị quyết Hội nghị Trung ương 15 khóa XIII", date: "16/03/2026", type: "Nghị quyết TW", downloads: "23,456" },
  { id: "r3", title: "Cương lĩnh xây dựng đất nước (bổ sung, phát triển 2011)", date: "19/01/2011", type: "Cương lĩnh", downloads: "34,567" },
  { id: "r4", title: "Điều lệ Đảng Cộng sản Việt Nam (sửa đổi, bổ sung 2011)", date: "19/01/2011", type: "Điều lệ", downloads: "56,789" },
  { id: "r5", title: "Chiến lược phát triển kinh tế - xã hội 2021-2030", date: "02/02/2021", type: "Chiến lược", downloads: "28,901" },
  { id: "r6", title: "Báo cáo chính trị Đại hội XIII của Đảng", date: "02/02/2021", type: "Báo cáo", downloads: "45,678" },
  { id: "r7", title: "Nghị quyết về tinh gọn bộ máy hệ thống chính trị", date: "25/11/2024", type: "Nghị quyết TW", downloads: "31,200" },
];

const materials = [
  { id: "m1", title: "Tài liệu nghiên cứu, học tập Nghị quyết Đại hội XIII", date: "15/03/2026", type: "Tài liệu học tập", downloads: "34,567", featured: true },
  { id: "m2", title: "Hướng dẫn sinh hoạt chi bộ chuyên đề quý I/2026", date: "10/03/2026", type: "Hướng dẫn", downloads: "18,900" },
  { id: "m3", title: "Đề cương tuyên truyền kỷ niệm 95 năm thành lập Đảng", date: "20/01/2026", type: "Đề cương", downloads: "22,345" },
  { id: "m4", title: "Tài liệu bồi dưỡng nghiệp vụ báo cáo viên 2026", date: "05/03/2026", type: "Bồi dưỡng", downloads: "11,234" },
  { id: "m5", title: "Sổ tay hướng dẫn công tác dân vận chính quyền", date: "01/03/2026", type: "Sổ tay", downloads: "15,678" },
  { id: "m6", title: "Bản tin lý luận chính trị tháng 3/2026", date: "01/03/2026", type: "Bản tin", downloads: "8,901" },
  { id: "m7", title: "Tài liệu hướng dẫn tuyên truyền Nghị quyết 57", date: "15/01/2025", type: "Tài liệu học tập", downloads: "27,890" },
];

const books = [
  { id: "b1", title: "Một số vấn đề lý luận và thực tiễn về CNXH và con đường đi lên CNXH ở Việt Nam", author: "Nguyễn Phú Trọng", year: 2022, image: "https://images.unsplash.com/photo-1709924168698-620ea32c3488?w=300&h=400&fit=crop", featured: true },
  { id: "b2", title: "Kiên quyết, kiên trì đấu tranh phòng, chống tham nhũng, tiêu cực", author: "Nguyễn Phú Trọng", year: 2023, image: "https://images.unsplash.com/photo-1709924168698-620ea32c3488?w=300&h=400&fit=crop&q=90" },
  { id: "b3", title: "Cả nước đồng lòng, tranh thủ mọi thời cơ, vượt qua mọi khó khăn", author: "NXB Chính trị Quốc gia", year: 2024, image: "https://images.unsplash.com/photo-1709924168698-620ea32c3488?w=300&h=400&fit=crop&q=80" },
  { id: "b4", title: "Xây dựng Đảng vững mạnh, nước Việt Nam giàu đẹp", author: "Ban Tuyên giáo TW", year: 2025, image: "https://images.unsplash.com/photo-1709924168698-620ea32c3488?w=300&h=400&fit=crop&q=70" },
  { id: "b5", title: "Đổi mới công tác tuyên giáo trong kỷ nguyên vươn mình", author: "NXB Chính trị Quốc gia", year: 2026, image: "https://images.unsplash.com/photo-1709924168698-620ea32c3488?w=300&h=400&fit=crop&q=60" },
  { id: "b6", title: "100 câu hỏi đáp về Điều lệ Đảng", author: "Ban Tổ chức TW", year: 2024, image: "https://images.unsplash.com/photo-1709924168698-620ea32c3488?w=300&h=400&fit=crop&q=50" },
];

const audioBooks = [
  { id: "a1", title: "Tư tưởng Hồ Chí Minh về xây dựng Đảng", narrator: "NSƯT Minh Hải", duration: "4h 30m", chapters: 12, image: "https://images.unsplash.com/photo-1609348445085-13fc7e652d3b?w=300&h=400&fit=crop", featured: true },
  { id: "a2", title: "Lịch sử Đảng Cộng sản Việt Nam (1930-2025)", narrator: "NSND Trung Hiếu", duration: "8h 15m", chapters: 24, image: "https://images.unsplash.com/photo-1609348445085-13fc7e652d3b?w=300&h=400&fit=crop&q=90" },
  { id: "a3", title: "Di chúc của Chủ tịch Hồ Chí Minh", narrator: "NSƯT Quốc Khánh", duration: "1h 20m", chapters: 5, image: "https://images.unsplash.com/photo-1609348445085-13fc7e652d3b?w=300&h=400&fit=crop&q=80" },
  { id: "a4", title: "Nghị quyết 57 - Phân tích và bình luận", narrator: "TS. Lê Văn Minh", duration: "2h 45m", chapters: 8, image: "https://images.unsplash.com/photo-1609348445085-13fc7e652d3b?w=300&h=400&fit=crop&q=70" },
  { id: "a5", title: "Đạo đức cách mạng trong thời kỳ mới", narrator: "PGS.TS Nguyễn Thị Lan", duration: "3h 10m", chapters: 10, image: "https://images.unsplash.com/photo-1609348445085-13fc7e652d3b?w=300&h=400&fit=crop&q=60" },
  { id: "a6", title: "Dân vận khéo - Bài học từ Bác Hồ", narrator: "NSƯT Thu Hà", duration: "2h 00m", chapters: 7, image: "https://images.unsplash.com/photo-1609348445085-13fc7e652d3b?w=300&h=400&fit=crop&q=50" },
];

function getDocTypeColor(type: string): string {
  const map: Record<string, string> = {
    "Luật": "#C41E2A", "Nghị định": "#2563eb", "Thông tư": "#059669", "Quyết định": "#C0891F",
    "Chỉ thị": "#7c3aed", "Nghị quyết": "#C41E2A", "Văn kiện Đại hội": "#C41E2A",
    "Nghị quyết TW": "#C0891F", "Cương lĩnh": "#7c3aed", "Điều lệ": "#059669",
    "Chiến lược": "#2563eb", "Báo cáo": "#64748b",
  };
  return map[type] || "#64748b";
}

const trendingDocs = [
  { id: "td1", title: "Nghị quyết 57 về KHCN và chuyển đổi số", downloads: "38,765" },
  { id: "td2", title: "Văn kiện Đại hội XIII toàn văn", downloads: "98,765" },
  { id: "td3", title: "Điều lệ Đảng (sửa đổi, bổ sung)", downloads: "56,789" },
  { id: "td4", title: "Luật Đất đai 2024 (sửa đổi)", downloads: "45,678" },
  { id: "td5", title: "Tài liệu học tập NQ Đại hội XIII", downloads: "34,567" },
];

export function DigitalLibraryPage() {
  const [activeCategory, setActiveCategory] = useState("phap-luat");
  const activeCat = CATEGORIES.find((c) => c.id === activeCategory)!;

  const isBookView = activeCategory === "sach" || activeCategory === "sach-noi";

  const getDocItems = () => {
    switch (activeCategory) {
      case "phap-luat": return lawDocs;
      case "van-kien": return resolutions;
      case "tai-lieu": return materials;
      default: return lawDocs;
    }
  };

  const renderDocumentList = () => {
    const docs = getDocItems();
    return (
      <div className="space-y-3">
        {docs.map((doc, i) => (
          <motion.div key={doc.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
            <Link
              to={`/document/${doc.id}`}
              className="group flex items-start gap-4 p-4 bg-white rounded-xl transition-all duration-300 hover:shadow-lg"
              style={{ boxShadow: SHADOWS.card, borderLeft: doc.featured ? `4px solid ${activeCat.color}` : "4px solid transparent" }}
            >
              <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center" style={{ background: `${getDocTypeColor(doc.type)}10`, color: getDocTypeColor(doc.type) }}>
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 mb-1">
                  <span className="shrink-0 px-2 py-0.5 rounded text-[10px]" style={{ background: `${getDocTypeColor(doc.type)}15`, color: getDocTypeColor(doc.type), fontFamily: FONTS.sans, fontWeight: 700 }}>{doc.type}</span>
                  {doc.featured && <Star className="w-3.5 h-3.5 shrink-0" style={{ color: COLORS.gold }} />}
                </div>
                <h3 className="group-hover:text-[#C41E2A] transition-colors line-clamp-2 mb-1" style={{ fontFamily: FONTS.display, fontSize: 14.5, fontWeight: 700, lineHeight: 1.4, color: COLORS.text }}>{doc.title}</h3>
                {"number" in doc && <p className="text-xs mb-1.5" style={{ fontFamily: FONTS.sans, color: COLORS.textMuted }}>{(doc as any).number}</p>}
                <div className="flex items-center flex-wrap gap-3 text-xs" style={{ fontFamily: FONTS.sans, color: COLORS.textLight }}>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{doc.date}</span>
                  <span className="flex items-center gap-1"><Download className="w-3 h-3" />{doc.downloads} lượt tải</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 shrink-0 mt-3 text-gray-300 group-hover:text-[#C41E2A] transition-colors hidden sm:block" />
            </Link>
          </motion.div>
        ))}
      </div>
    );
  };

  const renderBooks = () => {
    const items = activeCategory === "sach-noi" ? audioBooks : books;
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((book, i) => (
          <motion.div key={book.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
            <Link to={`/document/${book.id}`} className="group block bg-white rounded-xl overflow-hidden h-full" style={{ boxShadow: SHADOWS.card }}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={book.image} alt={book.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {book.featured && (
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] text-white" style={{ background: COLORS.gold, fontFamily: FONTS.sans, fontWeight: 700 }}>Nổi bật</span>
                )}
                {"chapters" in book && (
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded flex items-center gap-1 text-[10px] text-white" style={{ background: "rgba(0,0,0,0.6)", fontFamily: FONTS.sans, fontWeight: 600 }}>
                    <Headphones className="w-3 h-3" /> {(book as any).chapters} chương
                  </span>
                )}
              </div>
              <div className="p-3">
                <h3 className="line-clamp-2 mb-1.5 group-hover:text-[#C41E2A] transition-colors" style={{ fontFamily: FONTS.display, fontSize: 13, fontWeight: 700, lineHeight: 1.4 }}>{book.title}</h3>
                {"author" in book && <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: FONTS.sans }}>{(book as any).author}</p>}
                {"narrator" in book && <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: FONTS.sans }}>🎙️ {(book as any).narrator}</p>}
                {"duration" in book && <p className="text-xs flex items-center gap-1" style={{ fontFamily: FONTS.sans, color: COLORS.textLight }}><Clock className="w-3 h-3" />{(book as any).duration}</p>}
                {"year" in book && !("narrator" in book) && <p className="text-xs" style={{ fontFamily: FONTS.sans, color: COLORS.textLight }}>{(book as any).year}</p>}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Breadcrumb items={[{ label: "Trang chủ", to: "/" }, { label: "Thư viện số" }]} showBackButton={false} />

      {/* Mobile Category Selector */}
      <div className="lg:hidden sticky top-0 bg-white/95 backdrop-blur-md border-b" style={{ borderColor: COLORS.border, zIndex: 40 }}>
        <div className="max-w-[1320px] mx-auto px-3">
          <div className="flex items-center gap-1 overflow-x-auto py-2" style={{ scrollbarWidth: "none" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-full cursor-pointer border-none transition-all"
                style={{
                  background: activeCategory === cat.id ? cat.color : "transparent",
                  color: activeCategory === cat.id ? "#fff" : COLORS.textMuted,
                  fontFamily: FONTS.sans,
                  fontSize: 12,
                  fontWeight: activeCategory === cat.id ? 700 : 500,
                }}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1320px] mx-auto px-3 md:px-4 py-5 md:py-7">
        <div className="flex gap-6 lg:gap-7">

          {/* LEFT: Category Sidebar (desktop) */}
          <div className="hidden lg:block shrink-0" style={{ width: 280 }}>
            <div className="sticky" style={{ top: 24 }}>
              {/* Category Box */}
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: SHADOWS.card }}>
                <div className="px-5 py-4 flex items-center gap-2.5" style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDeep})` }}>
                  <Library className="w-5 h-5 text-white" />
                  <h3 className="text-white" style={{ fontFamily: FONTS.display, fontWeight: 700, fontSize: 16 }}>Danh mục thư viện</h3>
                </div>
                <div className="bg-white">
                  {CATEGORIES.map((cat, i) => {
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className="w-full flex items-center gap-3 px-4 py-3.5 cursor-pointer border-none transition-all duration-200 text-left"
                        style={{
                          background: isActive ? `linear-gradient(90deg, ${cat.color}0D, transparent)` : "transparent",
                          borderLeft: isActive ? `3px solid ${cat.color}` : "3px solid transparent",
                          borderBottom: i < CATEGORIES.length - 1 ? `1px solid ${COLORS.borderLight}` : "none",
                        }}
                        onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = `${cat.color}05`; }}
                        onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
                      >
                        <span
                          className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                          style={{ background: isActive ? `${cat.color}15` : COLORS.borderLight, color: isActive ? cat.color : COLORS.textLight }}
                        >
                          {cat.icon}
                        </span>
                        <span
                          className="flex-1"
                          style={{ fontFamily: FONTS.sans, fontSize: 13.5, fontWeight: isActive ? 700 : 500, color: isActive ? cat.color : COLORS.textSecondary }}
                        >
                          {cat.label}
                        </span>
                        <span
                          className="shrink-0 px-2 py-0.5 rounded-full text-[10px]"
                          style={{ background: isActive ? `${cat.color}12` : COLORS.borderLight, color: isActive ? cat.color : COLORS.textLight, fontFamily: FONTS.sans, fontWeight: 700 }}
                        >
                          {cat.count}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 shrink-0" style={{ color: isActive ? cat.color : COLORS.textLight, transform: isActive ? "translateX(2px)" : "none", transition: "all 0.2s" }} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Trending Downloads */}
              <div className="rounded-2xl overflow-hidden mt-5" style={{ boxShadow: SHADOWS.card }}>
                <div className="px-5 py-3.5 flex items-center gap-2" style={{ background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})` }}>
                  <TrendingUp className="w-4 h-4 text-white" />
                  <h3 className="text-white" style={{ fontFamily: FONTS.display, fontWeight: 700, fontSize: 14 }}>Tải nhiều nhất</h3>
                </div>
                <div className="bg-white p-3.5">
                  {trendingDocs.map((item, i) => (
                    <Link key={item.id} to={`/document/${item.id}`} className="group flex items-start gap-2.5 py-2.5 border-b last:border-b-0" style={{ borderColor: COLORS.borderLight }}>
                      <span
                        className="shrink-0 w-6 h-6 rounded-md flex items-center justify-center"
                        style={{
                          background: i < 3 ? `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDeep})` : COLORS.borderLight,
                          color: i < 3 ? "#fff" : COLORS.textMuted, fontFamily: FONTS.condensed, fontWeight: 700, fontSize: 11,
                        }}
                      >
                        {i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4 className="line-clamp-2 group-hover:text-[#C41E2A] transition-colors" style={{ fontFamily: FONTS.sans, fontSize: 12, fontWeight: 600, lineHeight: 1.45, color: COLORS.text }}>
                          {item.title}
                        </h4>
                        <span className="flex items-center gap-1 mt-1 text-[10px]" style={{ color: COLORS.textLight, fontFamily: FONTS.sans }}>
                          <Download className="w-2.5 h-2.5" /> {item.downloads}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {/* Category Title Bar */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b" style={{ borderColor: COLORS.border }}>
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${activeCat.color}10`, color: activeCat.color }}>
                    {activeCat.icon}
                  </span>
                  <div className="flex-1">
                    <h1 style={{ fontFamily: FONTS.display, fontWeight: 700, fontSize: "clamp(20px, 3vw, 26px)", color: COLORS.text, lineHeight: 1.2 }}>
                      {activeCat.label}
                    </h1>
                    <p className="mt-0.5" style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.textLight }}>
                      {activeCat.count} tài liệu
                    </p>
                  </div>
                  <span className="hidden sm:block h-0.5 flex-1 rounded-full" style={{ background: `linear-gradient(90deg, ${activeCat.color}20, transparent)` }} />
                </div>

                {/* Content */}
                {isBookView ? renderBooks() : renderDocumentList()}

                {/* Load More */}
                <div className="text-center pt-6">
                  <button
                    className="px-8 py-3 rounded-full cursor-pointer border-2 transition-all duration-300"
                    style={{ borderColor: activeCat.color, color: activeCat.color, fontFamily: FONTS.sans, fontWeight: 600, fontSize: 14, background: "transparent" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = activeCat.color; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = activeCat.color; }}
                  >
                    Xem thêm
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
