import { motion } from "motion/react";
import { Zap, Target, Lightbulb, Cpu, Globe, TrendingUp } from "lucide-react";
import { Breadcrumb, ContentCard, ContentCardTitle } from "../components/shared";
import { COLORS, FONTS, LAYOUT } from "../constants/theme";

const keyPoints = [
  { icon: <Cpu className="w-6 h-6" />, title: "Khoa học công nghệ", desc: "Phát triển khoa học, công nghệ là quốc sách hàng đầu, là động lực quan trọng nhất để phát triển đất nước." },
  { icon: <Lightbulb className="w-6 h-6" />, title: "Đổi mới sáng tạo", desc: "Xây dựng hệ sinh thái đổi mới sáng tạo quốc gia, khuyến khích nghiên cứu và ứng dụng công nghệ mới." },
  { icon: <Globe className="w-6 h-6" />, title: "Chuyển đổi số", desc: "Đẩy mạnh chuyển đổi số quốc gia, phát triển kinh tế số, xã hội số, chính phủ số." },
  { icon: <Target className="w-6 h-6" />, title: "Nhân lực chất lượng cao", desc: "Đào tạo, phát triển nguồn nhân lực chất lượng cao trong lĩnh vực khoa học, công nghệ." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Hạ tầng số", desc: "Đầu tư xây dựng hạ tầng số quốc gia đồng bộ, hiện đại, bảo đảm an toàn, an ninh mạng." },
  { icon: <Zap className="w-6 h-6" />, title: "Năng lượng sạch", desc: "Phát triển năng lượng sạch, năng lượng tái tạo, hướng tới phát triển bền vững." },
];

export function Resolution57Page() {
  return (
    <div className="relative px-3 md:px-5" style={{ maxWidth: LAYOUT.maxWidth, margin: "0 auto", paddingTop: 40, paddingBottom: 40 }}>
      <Breadcrumb items={[{ label: "Trang chủ", to: "/" }, { label: "NGHỊ QUYẾT 57-NQ/TW" }]} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        {/* Hero */}
        <div
          className="rounded-2xl overflow-hidden p-6 sm:p-8 md:p-12 text-center text-white relative"
          style={{
            background: "linear-gradient(135deg, #C41E2A 0%, #1a1a2e 50%, #C0891F 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px)" }} />
          <div className="relative z-10">
            <Zap className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-80" />
            <h1 className="mb-2" style={{ fontFamily: FONTS.display, fontWeight: 700, fontSize: "clamp(24px, 4vw, 36px)" }}>
              NGHỊ QUYẾT 57-NQ/TW
            </h1>
            <p className="text-white/90 mb-4" style={{ fontFamily: FONTS.body, fontSize: "clamp(16px, 2.5vw, 20px)" }}>
              Về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia
            </p>
            <p className="text-white/60 text-sm" style={{ fontFamily: FONTS.sans }}>
              Ban hành ngày 22/12/2024 bởi Bộ Chính trị
            </p>
          </div>
        </div>

        {/* Overview */}
        <ContentCard>
          <ContentCardTitle>Tổng quan</ContentCardTitle>
          <div style={{ fontFamily: FONTS.body, lineHeight: 1.8, color: COLORS.textSecondary }}>
            <p className="mb-4">
              Nghị quyết số 57-NQ/TW ngày 22/12/2024 của Bộ Chính trị về đột phá phát triển khoa học, công nghệ, 
              đổi mới sáng tạo và chuyển đổi số quốc gia là một văn kiện có ý nghĩa chiến lược, tạo nền tảng vững chắc 
              cho sự phát triển bền vững của đất nước trong kỷ nguyên mới.
            </p>
            <p>
              Nghị quyết xác định rõ: Khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số là đột phá quan trọng nhất, 
              có ý nghĩa quyết định để đưa đất nước phát triển nhanh, bền vững.
            </p>
          </div>
        </ContentCard>

        {/* Key points grid */}
        <div>
          <h2 className="text-2xl mb-6" style={{ fontFamily: FONTS.display, fontWeight: 700, color: COLORS.primary }}>
            Nội dung trọng tâm
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 group hover:shadow-lg transition-all cursor-pointer"
                style={{
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(196,30,42,0.06)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: "linear-gradient(135deg, rgba(196,30,42,0.1) 0%, rgba(192,137,31,0.08) 100%)" }}
                >
                  <span style={{ color: COLORS.primary }}>{point.icon}</span>
                </div>
                <h3
                  className="mb-2 group-hover:text-[#C41E2A] transition-colors"
                  style={{ fontFamily: FONTS.display, fontSize: "17px", fontWeight: 700 }}
                >
                  {point.title}
                </h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: FONTS.body, lineHeight: 1.6 }}>
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}