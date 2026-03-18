import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import {
  Play, Camera, Headphones, Calendar, Eye, Clock, ChevronRight,
  Video, Image, Mic2, TrendingUp, MonitorPlay, ArrowRight,
} from "lucide-react";
import { Breadcrumb } from "../components/shared";
import { COLORS, FONTS, LAYOUT, SHADOWS } from "../constants/theme";

const CATEGORIES = [
  { id: "video", label: "Video", icon: <Video className="w-4 h-4" />, color: "#C41E2A", count: 156 },
  { id: "tin-anh", label: "Tin ảnh", icon: <Image className="w-4 h-4" />, color: "#2563eb", count: 89 },
  { id: "podcast", label: "Podcast", icon: <Headphones className="w-4 h-4" />, color: "#7c3aed", count: 64 },
];

const videoItems = [
  { id: "v1", title: "Toàn cảnh Hội nghị Trung ương 15: Những quyết sách quan trọng", duration: "15:32", date: "16/03/2026", views: "12,450", image: "https://images.unsplash.com/photo-1761850215840-2775d7229cad?w=600&h=400&fit=crop", featured: true },
  { id: "v2", title: "Phóng sự: Đổi mới công tác tuyên giáo trong kỷ nguyên số", duration: "08:45", date: "15/03/2026", views: "8,234", image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?w=600&h=400&fit=crop" },
  { id: "v3", title: "Tọa đàm: Vai trò của công tác dân vận trong phát triển bền vững", duration: "22:10", date: "14/03/2026", views: "5,670", image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=600&h=400&fit=crop" },
  { id: "v4", title: "Bản tin tuyên giáo tuần 11-16/03/2026", duration: "12:00", date: "14/03/2026", views: "4,321", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop" },
  { id: "v5", title: "Phỏng vấn: Ứng dụng AI trong công tác quản lý Đảng", duration: "18:25", date: "13/03/2026", views: "6,789", image: "https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?w=600&h=400&fit=crop" },
  { id: "v6", title: "Tài liệu: 95 năm Đảng Cộng sản Việt Nam - Hành trình lịch sử", duration: "45:00", date: "12/03/2026", views: "15,234", image: "https://images.unsplash.com/photo-1771813967683-b7f08025073c?w=600&h=400&fit=crop" },
  { id: "v7", title: "Phóng sự đặc biệt: Kỷ nguyên vươn mình của dân tộc", duration: "32:15", date: "11/03/2026", views: "9,876", image: "https://images.unsplash.com/photo-1710702418104-6bf5419ab03d?w=600&h=400&fit=crop" },
];

const photoItems = [
  { id: "p1", title: "Ảnh: Hội nghị toàn quốc tổng kết công tác tuyên giáo 2025", count: 24, date: "16/03/2026", views: "3,450", image: "https://images.unsplash.com/photo-1692930675044-d1309a0e6b18?w=600&h=400&fit=crop", featured: true },
  { id: "p2", title: "Phóng sự ảnh: Vùng cao đổi mới sau 5 năm thực hiện Nghị quyết", count: 18, date: "15/03/2026", views: "2,890", image: "https://images.unsplash.com/photo-1761502341707-723591e5921b?w=600&h=400&fit=crop" },
  { id: "p3", title: "Khoảnh khắc ấn tượng tại Đại hội Thể thao toàn quốc 2026", count: 32, date: "14/03/2026", views: "4,567", image: "https://images.unsplash.com/photo-1764050359179-517599dab87b?w=600&h=400&fit=crop" },
  { id: "p4", title: "Ảnh: Lễ kỷ niệm 95 năm thành lập Đảng Cộng sản Việt Nam", count: 40, date: "13/03/2026", views: "7,890", image: "https://images.unsplash.com/photo-1710702418104-6bf5419ab03d?w=600&h=400&fit=crop" },
  { id: "p5", title: "Chùm ảnh: Xuân yêu thương - Tết vì người nghèo 2026", count: 15, date: "12/03/2026", views: "5,432", image: "https://images.unsplash.com/photo-1771813967683-b7f08025073c?w=600&h=400&fit=crop" },
  { id: "p6", title: "Ảnh: Hội thảo quốc tế về chuyển đổi số trong quản lý nhà nước", count: 20, date: "11/03/2026", views: "2,345", image: "https://images.unsplash.com/photo-1725031854270-6833fadb5a09?w=600&h=400&fit=crop" },
  { id: "p7", title: "Phóng sự ảnh: Nông thôn mới kiểu mẫu tại Đồng bằng sông Cửu Long", count: 28, date: "10/03/2026", views: "3,678", image: "https://images.unsplash.com/photo-1653289755997-1b028ff8ace8?w=600&h=400&fit=crop" },
];

const podcastItems = [
  { id: "pc1", title: "Tuyên giáo số: Chuyển đổi số - Từ nhận thức đến hành động", duration: "35:20", date: "16/03/2026", views: "2,345", image: "https://images.unsplash.com/photo-1608613108344-07ce970d61da?w=600&h=400&fit=crop", featured: true },
  { id: "pc2", title: "Bàn tròn: Công tác dân vận trong thời kỳ mới", duration: "28:15", date: "15/03/2026", views: "1,890", image: "https://images.unsplash.com/photo-1608613108344-07ce970d61da?w=600&h=400&fit=crop&q=80" },
  { id: "pc3", title: "Tư tưởng Hồ Chí Minh: Ánh sáng soi đường cho dân tộc", duration: "42:00", date: "14/03/2026", views: "3,456", image: "https://images.unsplash.com/photo-1608613108344-07ce970d61da?w=600&h=400&fit=crop&q=70" },
  { id: "pc4", title: "Phân tích: Tình hình thế giới và tác động đến Việt Nam", duration: "31:45", date: "13/03/2026", views: "2,100", image: "https://images.unsplash.com/photo-1608613108344-07ce970d61da?w=600&h=400&fit=crop&q=60" },
  { id: "pc5", title: "Kinh nghiệm: Xây dựng Đảng trong doanh nghiệp tư nhân", duration: "25:30", date: "12/03/2026", views: "1,567", image: "https://images.unsplash.com/photo-1608613108344-07ce970d61da?w=600&h=400&fit=crop&q=50" },
  { id: "pc6", title: "Góc nhìn: Giáo dục lý tưởng cách mạng cho thế hệ trẻ", duration: "38:10", date: "11/03/2026", views: "1,234", image: "https://images.unsplash.com/photo-1608613108344-07ce970d61da?w=600&h=400&fit=crop&q=40" },
  { id: "pc7", title: "Đối thoại: Vai trò báo cáo viên trong kỷ nguyên số", duration: "29:50", date: "10/03/2026", views: "1,678", image: "https://images.unsplash.com/photo-1608613108344-07ce970d61da?w=600&h=400&fit=crop&q=30" },
];

function getItems(tab: string) {
  if (tab === "tin-anh") return photoItems;
  if (tab === "podcast") return podcastItems;
  return videoItems;
}

const trendingMedia = [
  { id: "tm1", title: "Toàn cảnh Hội nghị TW 15 - Video đặc biệt", views: "12,450", type: "video" },
  { id: "tm2", title: "Ảnh: Lễ kỷ niệm 95 năm thành lập Đảng", views: "7,890", type: "photo" },
  { id: "tm3", title: "95 năm Đảng CSVN - Hành trình lịch sử", views: "15,234", type: "video" },
  { id: "tm4", title: "Podcast: Chuyển đổi số trong tuyên giáo", views: "3,456", type: "podcast" },
  { id: "tm5", title: "Phóng sự ảnh: Vùng cao đổi mới", views: "2,890", type: "photo" },
];

export function MultimediaPage() {
  const [activeCategory, setActiveCategory] = useState("video");
  const items = getItems(activeCategory);
  const featured = items[0];
  const rest = items.slice(1);
  const activeCat = CATEGORIES.find((c) => c.id === activeCategory)!;

  return (
    <div style={{ minHeight: "100vh" }}>
      <Breadcrumb items={[{ label: "Trang chủ", to: "/" }, { label: "Đa phương tiện" }]} showBackButton={false} />

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
                  <MonitorPlay className="w-5 h-5 text-white" />
                  <h3 className="text-white" style={{ fontFamily: FONTS.display, fontWeight: 700, fontSize: 16 }}>Chuyên mục</h3>
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
                          style={{ fontFamily: FONTS.sans, fontSize: 14, fontWeight: isActive ? 700 : 500, color: isActive ? cat.color : COLORS.textSecondary }}
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

              {/* Trending Box */}
              <div className="rounded-2xl overflow-hidden mt-5" style={{ boxShadow: SHADOWS.card }}>
                <div className="px-5 py-3.5 flex items-center gap-2" style={{ background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})` }}>
                  <TrendingUp className="w-4 h-4 text-white" />
                  <h3 className="text-white" style={{ fontFamily: FONTS.display, fontWeight: 700, fontSize: 14 }}>Xem nhiều nhất</h3>
                </div>
                <div className="bg-white p-3.5">
                  {trendingMedia.map((item, i) => (
                    <Link key={item.id} to={`/media/${item.id}`} className="group flex items-start gap-2.5 py-2.5 border-b last:border-b-0" style={{ borderColor: COLORS.borderLight }}>
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
                          <Eye className="w-2.5 h-2.5" /> {item.views}
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
                      {activeCat.count} nội dung
                    </p>
                  </div>
                  <span className="hidden sm:block h-0.5 flex-1 rounded-full" style={{ background: `linear-gradient(90deg, ${activeCat.color}20, transparent)` }} />
                </div>

                {/* Featured */}
                {featured && (
                  <Link to={activeCategory === "video" ? `/video/${featured.id}` : `/gallery/${featured.id}`} className="group block rounded-2xl overflow-hidden mb-5" style={{ boxShadow: SHADOWS.card }}>
                    <div className="relative h-48 sm:h-56 md:h-72 overflow-hidden">
                      <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)" }} />

                      {/* Play button */}
                      {(activeCategory === "video" || activeCategory === "podcast") && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div whileHover={{ scale: 1.1 }} className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center" style={{ background: `${activeCat.color}dd`, backdropFilter: "blur(8px)", boxShadow: `0 8px 30px ${activeCat.color}50` }}>
                            <Play className="w-6 h-6 md:w-7 md:h-7 text-white ml-0.5" />
                          </motion.div>
                        </div>
                      )}

                      {/* Photo count */}
                      {activeCategory === "tin-anh" && "count" in featured && (
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full flex items-center gap-1.5" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}>
                          <Camera className="w-3.5 h-3.5 text-white" />
                          <span className="text-white text-xs" style={{ fontFamily: FONTS.sans, fontWeight: 600 }}>{(featured as any).count} ảnh</span>
                        </div>
                      )}

                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <span className="inline-block px-3 py-1 rounded-full text-white text-xs mb-2.5" style={{ background: activeCat.color, fontFamily: FONTS.sans, fontWeight: 600 }}>
                          {activeCat.label}
                        </span>
                        <h2 className="text-white mb-1.5 line-clamp-2" style={{ fontFamily: FONTS.display, fontWeight: 700, fontSize: "clamp(16px, 2.5vw, 22px)", lineHeight: 1.35 }}>
                          {featured.title}
                        </h2>
                        <div className="flex items-center gap-4 text-xs text-white/50" style={{ fontFamily: FONTS.sans }}>
                          {"duration" in featured && <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{(featured as any).duration}</span>}
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{featured.date}</span>
                          <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{featured.views}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}

                {/* Item List */}
                <div className="space-y-3.5">
                  {rest.map((item, i) => (
                    <motion.div key={item.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                      <Link
                        to={activeCategory === "video" ? `/video/${item.id}` : `/gallery/${item.id}`}
                        className="group flex gap-4 bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                        style={{ boxShadow: SHADOWS.card }}
                      >
                        {/* Thumbnail */}
                        <div className="shrink-0 w-28 sm:w-36 md:w-48 h-24 sm:h-28 md:h-32 overflow-hidden relative">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          {(activeCategory === "video" || activeCategory === "podcast") && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${activeCat.color}cc` }}>
                                <Play className="w-4 h-4 text-white ml-0.5" />
                              </div>
                            </div>
                          )}
                          {"duration" in item && (
                            <span className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded text-white text-[10px]" style={{ background: "rgba(0,0,0,0.7)", fontFamily: FONTS.sans, fontWeight: 600 }}>
                              {(item as any).duration}
                            </span>
                          )}
                          {"count" in item && (
                            <span className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded flex items-center gap-1 text-white text-[10px]" style={{ background: "rgba(0,0,0,0.7)", fontFamily: FONTS.sans, fontWeight: 600 }}>
                              <Camera className="w-2.5 h-2.5" /> {(item as any).count}
                            </span>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 py-2.5 sm:py-3 pr-3 sm:pr-4 flex flex-col justify-between">
                          <h3 className="line-clamp-2 group-hover:text-[#C41E2A] transition-colors mb-1.5" style={{ fontFamily: FONTS.display, fontSize: "clamp(13px, 1.5vw, 15.5px)", fontWeight: 700, lineHeight: 1.45, color: COLORS.text }}>
                            {item.title}
                          </h3>
                          <div className="flex items-center justify-between mt-auto pt-1.5">
                            <div className="flex items-center gap-3 text-xs text-gray-400" style={{ fontFamily: FONTS.sans }}>
                              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{item.date}</span>
                              <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{item.views}</span>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-[#C41E2A] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center pt-6">
                  <button
                    className="px-8 py-3 rounded-full cursor-pointer border-2 transition-all duration-300"
                    style={{ borderColor: activeCat.color, color: activeCat.color, fontFamily: FONTS.sans, fontWeight: 600, fontSize: 14, background: "transparent" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = activeCat.color; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = activeCat.color; }}
                  >
                    Xem thêm {activeCat.label.toLowerCase()}
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
