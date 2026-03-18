import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import {
  Calendar, Eye, ArrowRight, Clock, TrendingUp, ChevronRight,
  Flame, Globe2, Landmark, DollarSign, ShieldAlert, Users, Scale, Palette,
  GraduationCap, Cpu, Trophy, Newspaper,
} from "lucide-react";
import { Breadcrumb } from "../components/shared";
import { COLORS, FONTS, LAYOUT, SHADOWS } from "../constants/theme";

const CATEGORIES = [
  { id: "all", label: "Tin mới", icon: <Flame className="w-4 h-4" />, count: 128 },
  { id: "chinh-tri", label: "Chính trị", icon: <Landmark className="w-4 h-4" />, count: 86 },
  { id: "the-gioi", label: "Thế giới", icon: <Globe2 className="w-4 h-4" />, count: 64 },
  { id: "kinh-te", label: "Kinh tế", icon: <DollarSign className="w-4 h-4" />, count: 72 },
  { id: "qpan", label: "QP-AN", icon: <ShieldAlert className="w-4 h-4" />, count: 45 },
  { id: "xa-hoi", label: "Xã hội", icon: <Users className="w-4 h-4" />, count: 93 },
  { id: "phap-luat", label: "Pháp luật", icon: <Scale className="w-4 h-4" />, count: 57 },
  { id: "van-hoa", label: "Văn hóa", icon: <Palette className="w-4 h-4" />, count: 41 },
  { id: "giao-duc", label: "Giáo dục", icon: <GraduationCap className="w-4 h-4" />, count: 38 },
  { id: "khcn", label: "KH-CN", icon: <Cpu className="w-4 h-4" />, count: 52 },
  { id: "the-thao", label: "Thể thao", icon: <Trophy className="w-4 h-4" />, count: 67 },
];

const IMAGES = {
  "all": "https://images.unsplash.com/photo-1556761175-129418cb2dfe?w=800&h=500&fit=crop",
  "chinh-tri": "https://images.unsplash.com/photo-1710702418104-6bf5419ab03d?w=800&h=500&fit=crop",
  "the-gioi": "https://images.unsplash.com/photo-1653289755997-1b028ff8ace8?w=800&h=500&fit=crop",
  "kinh-te": "https://images.unsplash.com/photo-1725031854270-6833fadb5a09?w=800&h=500&fit=crop",
  "qpan": "https://images.unsplash.com/photo-1759167625071-069dc252702f?w=800&h=500&fit=crop",
  "xa-hoi": "https://images.unsplash.com/photo-1761502341707-723591e5921b?w=800&h=500&fit=crop",
  "phap-luat": "https://images.unsplash.com/photo-1769029265788-d7921a103403?w=800&h=500&fit=crop",
  "van-hoa": "https://images.unsplash.com/photo-1771813967683-b7f08025073c?w=800&h=500&fit=crop",
  "giao-duc": "https://images.unsplash.com/photo-1603726574690-cc3138bfec8c?w=800&h=500&fit=crop",
  "khcn": "https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?w=800&h=500&fit=crop",
  "the-thao": "https://images.unsplash.com/photo-1764050359179-517599dab87b?w=800&h=500&fit=crop",
} as Record<string, string>;

function generateArticles(catId: string) {
  const titles: Record<string, string[]> = {
    "all": [
      "Khai mạc Hội nghị lần thứ 15 Ban Chấp hành Trung ương Đảng khóa XIII",
      "Thủ tướng chủ trì phiên họp Chính phủ thường kỳ tháng 3/2026",
      "Đẩy mạnh chuyển đổi số trong công tác tuyên giáo cơ sở",
      "Hội nghị toàn quốc triển khai nhiệm vụ năm 2026 ngành Tuyên giáo",
      "Tổng Bí thư tiếp đoàn đại biểu quốc tế dự Diễn đàn Kinh tế",
      "Quốc hội thảo luận về dự án Luật sửa đổi, bổ sung Luật Đất đai",
      "Hội thảo khoa học về tư tưởng Hồ Chí Minh trong thời kỳ mới",
      "Nâng cao chất lượng công tác dân vận trong tình hình mới",
    ],
    "chinh-tri": [
      "Tổng Bí thư chủ trì họp Bộ Chính trị về công tác cán bộ",
      "Ban Bí thư ban hành Chỉ thị về nâng cao chất lượng sinh hoạt chi bộ",
      "Hội nghị Trung ương 15 thảo luận nhân sự Đại hội XIV",
      "Đảng đoàn Quốc hội làm việc với Ban Tuyên giáo Trung ương",
      "Phó Thủ tướng kiểm tra công tác chuẩn bị Đại hội Đảng các cấp",
      "Ban Chỉ đạo Trung ương về phòng, chống tham nhũng họp phiên thứ 28",
      "Đổi mới phương thức lãnh đạo của Đảng đối với hệ thống chính trị",
      "Tăng cường xây dựng Đảng trong sạch, vững mạnh về chính trị",
    ],
    "the-gioi": [
      "Diễn đàn Kinh tế Thế giới Davos 2026: Những thông điệp nổi bật",
      "ASEAN củng cố đoàn kết, thống nhất trong giải quyết các vấn đề khu vực",
      "Liên Hợp Quốc thông qua Nghị quyết về biến đổi khí hậu toàn cầu",
      "Quan hệ Việt Nam - Hoa Kỳ đạt nhiều bước phát triển mới",
      "Hội nghị Thượng đỉnh G20 tại Brazil: Việt Nam đóng vai trò tích cực",
      "Các nước BRICS mở rộng hợp tác kinh tế và công nghệ",
      "Tình hình Biển Đông và lập trường nhất quán của Việt Nam",
      "Ngoại giao đa phương: Việt Nam khẳng định vị thế trên trường quốc tế",
    ],
    "kinh-te": [
      "GDP quý I/2026 tăng trưởng ấn tượng 7.2%",
      "Chính phủ ban hành gói hỗ trợ phục hồi kinh tế giai đoạn 2026-2027",
      "Việt Nam thu hút 5.8 tỷ USD vốn FDI trong quý I/2026",
      "Xuất khẩu nông sản đạt kỷ lục mới trong tháng 3/2026",
      "Thị trường chứng khoán Việt Nam hướng đến nâng hạng quốc tế",
      "Phát triển kinh tế xanh: Cơ hội và thách thức cho doanh nghiệp",
      "Ngân hàng Nhà nước điều chỉnh lãi suất điều hành",
      "Đẩy nhanh giải ngân vốn đầu tư công các dự án trọng điểm",
    ],
    "qpan": [
      "Quân đội nhân dân Việt Nam tăng cường hiện đại hóa lực lượng",
      "Bộ Quốc phòng triển khai nhiệm vụ bảo vệ chủ quyền biển đảo 2026",
      "Diễn tập phòng thủ dân sự kết hợp ứng phó thiên tai quy mô lớn",
      "Công an nhân dân đẩy mạnh chuyển đổi số trong đảm bảo an ninh",
      "Hợp tác quốc phòng Việt Nam - các nước ASEAN ngày càng sâu rộng",
      "Lực lượng Cảnh sát biển tăng cường tuần tra vùng biển phía Nam",
      "Bộ Công an triệt phá nhiều đường dây tội phạm công nghệ cao",
      "An ninh mạng: Thách thức mới trong bảo vệ an ninh quốc gia",
    ],
    "xa-hoi": [
      "Chương trình xóa nhà tạm, nhà dột nát hoàn thành vượt kế hoạch",
      "Dân số Việt Nam vượt mốc 105 triệu người",
      "Đổi mới công tác an sinh xã hội trong giai đoạn mới",
      "Phong trào thi đua yêu nước lan tỏa sâu rộng trong nhân dân",
      "Chính sách hỗ trợ đồng bào dân tộc thiểu số phát huy hiệu quả",
      "Giải quyết vấn đề nhà ở xã hội cho công nhân khu công nghiệp",
      "Nâng cao chất lượng cuộc sống người dân vùng nông thôn mới",
      "Đẩy mạnh phong trào Toàn dân đoàn kết xây dựng đời sống văn hóa",
    ],
    "phap-luat": [
      "Quốc hội thông qua Luật sửa đổi, bổ sung một số điều của Luật Đất đai",
      "Tòa án nhân dân tối cao hướng dẫn áp dụng pháp luật mới",
      "Bộ Tư pháp đẩy mạnh cải cách thủ tục hành chính",
      "Tăng cường phổ biến, giáo dục pháp luật cho người dân",
      "Nghị định mới về xử phạt vi phạm hành chính trong lĩnh vực giao thông",
      "Luật An ninh mạng: Những điểm mới cần lưu ý",
      "Cải cách tư pháp góp phần xây dựng Nhà nước pháp quyền",
      "Hoàn thiện hệ thống pháp luật về phòng, chống tham nhũng",
    ],
    "van-hoa": [
      "Festival văn hóa các dân tộc Việt Nam 2026 tại Đắk Lắk",
      "Bảo tồn và phát huy giá trị di sản văn hóa phi vật thể",
      "Ngày Sách và Văn hóa đọc Việt Nam 2026: Lan tỏa tri thức",
      "Phim Việt Nam lần đầu đoạt giải tại Liên hoan phim quốc tế",
      "Đưa văn hóa Việt Nam ra thế giới qua ngoại giao văn hóa",
      "Khai mạc triển lãm mỹ thuật toàn quốc lần thứ XV",
      "Âm nhạc truyền thống trong dòng chảy đương đại",
      "Phát triển công nghiệp văn hóa trở thành ngành kinh tế mũi nhọn",
    ],
    "giao-duc": [
      "Bộ Giáo dục công bố phương án thi tốt nghiệp THPT 2026",
      "Đổi mới chương trình giáo dục phổ thông: Kết quả sau 5 năm",
      "Tăng cường giáo dục đạo đức, lối sống cho học sinh sinh viên",
      "Việt Nam đạt thành tích xuất sắc tại Olympic Toán quốc tế 2026",
      "Phát triển giáo dục STEM trong trường phổ thông",
      "Xây dựng xã hội học tập suốt đời trong kỷ nguyên số",
      "Nâng cao chất lượng đào tạo sau đại học đáp ứng yêu cầu phát triển",
      "Giáo dục nghề nghiệp: Cầu nối giữa đào tạo và thị trường lao động",
    ],
    "khcn": [
      "Nghị quyết 57: Bước đột phá trong phát triển KHCN và chuyển đổi số",
      "Việt Nam đặt mục tiêu trở thành trung tâm AI của khu vực vào 2030",
      "Ứng dụng AI trong quản lý hành chính công: Kết quả bước đầu",
      "Startup công nghệ Việt Nam thu hút kỷ lục vốn đầu tư",
      "Phát triển chip bán dẫn: Cơ hội vàng cho Việt Nam",
      "Chuyển đổi số quốc gia: Tiến bộ vượt bậc trong năm 2026",
      "Nghiên cứu khoa học cơ bản: Nền tảng cho phát triển bền vững",
      "Công nghệ xanh và phát triển bền vững tại Việt Nam",
    ],
    "the-thao": [
      "Đội tuyển Việt Nam giành vé dự Vòng chung kết World Cup 2026",
      "SEA Games 34: Đoàn Thể thao Việt Nam đặt mục tiêu top 2",
      "VĐV Việt Nam phá kỷ lục châu Á tại giải điền kinh trong nhà",
      "Phát triển thể thao quần chúng và thể thao thành tích cao",
      "Bóng đá nữ Việt Nam tiếp tục khẳng định vị thế châu lục",
      "Việt Nam đăng cai tổ chức Đại hội Thể thao châu Á 2034",
      "Các VĐV trẻ tài năng: Tương lai của thể thao Việt Nam",
      "Đầu tư cơ sở vật chất thể thao đáp ứng tiêu chuẩn quốc tế",
    ],
  };
  const catTitles = titles[catId] || titles["all"];
  const img = IMAGES[catId] || IMAGES["all"];
  return catTitles.map((title, i) => ({
    id: `${catId}-${i + 1}`,
    title,
    category: CATEGORIES.find((c) => c.id === catId)?.label || "Tin mới",
    date: `${18 - i}/03/2026`,
    views: `${Math.floor(Math.random() * 2000 + 300)}`,
    image: i === 0 ? img : `${img}&q=${60 + i * 5}`,
    excerpt: `Nội dung tóm tắt bài viết về ${title.toLowerCase()}. Đây là thông tin quan trọng được cập nhật mới nhất từ Ban Tuyên giáo và Dân vận.`,
  }));
}

export function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const articles = generateArticles(activeCategory);
  const featured = articles[0];
  const rest = articles.slice(1);
  const activeCat = CATEGORIES.find((c) => c.id === activeCategory)!;

  return (
    <div style={{ minHeight: "100vh" }}>
      <Breadcrumb
        items={[
          { label: "Trang chủ", to: "/" },
          { label: "Tin tức" },
        ]}
        showBackButton={false}
      />

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
                  background: activeCategory === cat.id ? COLORS.primary : "transparent",
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

          {/* LEFT: Category Sidebar (desktop only) */}
          <div className="hidden lg:block shrink-0" style={{ width: 280 }}>
            <div className="sticky" style={{ top: 24 }}>
              {/* Category Box */}
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: SHADOWS.card }}>
                {/* Header */}
                <div className="px-5 py-4 flex items-center gap-2.5" style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDeep})` }}>
                  <Newspaper className="w-5 h-5 text-white" />
                  <h3 className="text-white" style={{ fontFamily: FONTS.display, fontWeight: 700, fontSize: 16 }}>Chuyên mục tin tức</h3>
                </div>

                {/* Category List */}
                <div className="bg-white">
                  {CATEGORIES.map((cat, i) => {
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 cursor-pointer border-none transition-all duration-200 text-left"
                        style={{
                          background: isActive ? `linear-gradient(90deg, ${COLORS.primary}0D, transparent)` : "transparent",
                          borderLeft: isActive ? `3px solid ${COLORS.primary}` : "3px solid transparent",
                          borderBottom: i < CATEGORIES.length - 1 ? `1px solid ${COLORS.borderLight}` : "none",
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) e.currentTarget.style.background = `${COLORS.primary}05`;
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) e.currentTarget.style.background = "transparent";
                        }}
                      >
                        <span
                          className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                          style={{
                            background: isActive ? `${COLORS.primary}15` : `${COLORS.borderLight}`,
                            color: isActive ? COLORS.primary : COLORS.textLight,
                          }}
                        >
                          {cat.icon}
                        </span>
                        <span
                          className="flex-1"
                          style={{
                            fontFamily: FONTS.sans,
                            fontSize: 13.5,
                            fontWeight: isActive ? 700 : 500,
                            color: isActive ? COLORS.primary : COLORS.textSecondary,
                          }}
                        >
                          {cat.label}
                        </span>
                        <span
                          className="shrink-0 px-2 py-0.5 rounded-full text-[10px]"
                          style={{
                            background: isActive ? `${COLORS.primary}12` : COLORS.borderLight,
                            color: isActive ? COLORS.primary : COLORS.textLight,
                            fontFamily: FONTS.sans,
                            fontWeight: 700,
                          }}
                        >
                          {cat.count}
                        </span>
                        <ChevronRight
                          className="w-3.5 h-3.5 shrink-0 transition-all"
                          style={{
                            color: isActive ? COLORS.primary : COLORS.textLight,
                            transform: isActive ? "translateX(2px)" : "none",
                          }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Trending Box */}
              <div className="rounded-2xl overflow-hidden mt-5" style={{ boxShadow: SHADOWS.card }}>
                <div className="px-5 py-3.5 flex items-center gap-2" style={{ background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})` }}>
                  <TrendingUp className="w-4 h-4 text-white" />
                  <h3 className="text-white" style={{ fontFamily: FONTS.display, fontWeight: 700, fontSize: 14 }}>Đọc nhiều nhất</h3>
                </div>
                <div className="bg-white p-3.5">
                  {[
                    { id: "t1", title: "Nghị quyết 57 về đột phá KHCN và chuyển đổi số", views: "5,432" },
                    { id: "t2", title: "Đại hội XIV sẽ diễn ra vào tháng 1/2027", views: "4,891" },
                    { id: "t3", title: "GDP quý I/2026 tăng trưởng ấn tượng 7.2%", views: "3,210" },
                    { id: "t4", title: "Chủ tịch nước tiếp Đại sứ các nước ASEAN", views: "2,876" },
                    { id: "t5", title: "Phong trào dân vận khéo lan tỏa mạnh mẽ", views: "2,543" },
                  ].map((item, i) => (
                    <Link key={item.id} to={`/article/${item.id}`} className="group flex items-start gap-2.5 py-2.5 border-b last:border-b-0" style={{ borderColor: COLORS.borderLight }}>
                      <span
                        className="shrink-0 w-6 h-6 rounded-md flex items-center justify-center"
                        style={{
                          background: i < 3 ? `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDeep})` : COLORS.borderLight,
                          color: i < 3 ? "#fff" : COLORS.textMuted,
                          fontFamily: FONTS.condensed,
                          fontWeight: 700,
                          fontSize: 11,
                        }}
                      >
                        {i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4
                          className="line-clamp-2 group-hover:text-[#C41E2A] transition-colors"
                          style={{ fontFamily: FONTS.sans, fontSize: 12, fontWeight: 600, lineHeight: 1.45, color: COLORS.text }}
                        >
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

          {/* RIGHT: News List */}
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
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${COLORS.primary}10`, color: COLORS.primary }}>
                    {activeCat.icon}
                  </span>
                  <div className="flex-1">
                    <h1 style={{ fontFamily: FONTS.display, fontWeight: 700, fontSize: "clamp(20px, 3vw, 26px)", color: COLORS.text, lineHeight: 1.2 }}>
                      {activeCat.label}
                    </h1>
                    <p className="mt-0.5" style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.textLight }}>
                      {activeCat.count} bài viết
                    </p>
                  </div>
                  <span className="hidden sm:block h-0.5 flex-1 rounded-full" style={{ background: `linear-gradient(90deg, ${COLORS.primary}20, transparent)` }} />
                </div>

                {/* Featured Article */}
                {featured && (
                  <Link to={`/article/${featured.id}`} className="group block rounded-2xl overflow-hidden mb-5" style={{ boxShadow: SHADOWS.card }}>
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }} />
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <span className="inline-block px-3 py-1 rounded-full text-white text-xs mb-2.5" style={{ background: COLORS.primary, fontFamily: FONTS.sans, fontWeight: 600 }}>
                          {featured.category}
                        </span>
                        <h2 className="text-white mb-1.5 line-clamp-2" style={{ fontFamily: FONTS.display, fontWeight: 700, fontSize: "clamp(16px, 2.5vw, 22px)", lineHeight: 1.35 }}>
                          {featured.title}
                        </h2>
                        <p className="text-white/65 text-sm line-clamp-2 hidden sm:block mb-2" style={{ fontFamily: FONTS.body, fontSize: 13 }}>{featured.excerpt}</p>
                        <div className="flex items-center gap-4 text-xs text-white/50" style={{ fontFamily: FONTS.sans }}>
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {featured.date}</span>
                          <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {featured.views} lượt xem</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}

                {/* Article List */}
                <div className="space-y-3.5">
                  {rest.map((item, i) => (
                    <motion.div key={item.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                      <Link
                        to={`/article/${item.id}`}
                        className="group flex gap-4 bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                        style={{ boxShadow: SHADOWS.card }}
                      >
                        {/* Thumbnail */}
                        <div className="shrink-0 w-28 sm:w-36 md:w-44 h-24 sm:h-28 md:h-32 overflow-hidden">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 py-2.5 sm:py-3 pr-3 sm:pr-4 flex flex-col justify-between">
                          <div>
                            <h3
                              className="line-clamp-2 group-hover:text-[#C41E2A] transition-colors mb-1.5"
                              style={{ fontFamily: FONTS.display, fontSize: "clamp(13px, 1.5vw, 15.5px)", fontWeight: 700, lineHeight: 1.45, color: COLORS.text }}
                            >
                              {item.title}
                            </h3>
                            <p className="text-gray-500 line-clamp-2 hidden sm:block" style={{ fontFamily: FONTS.body, fontSize: 12, lineHeight: 1.5 }}>
                              {item.excerpt}
                            </p>
                          </div>
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
                    style={{ borderColor: COLORS.primary, color: COLORS.primary, fontFamily: FONTS.sans, fontWeight: 600, fontSize: 14, background: "transparent" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = COLORS.primary; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = COLORS.primary; }}
                  >
                    Xem thêm tin tức
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
