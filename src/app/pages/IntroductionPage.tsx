import { motion } from "motion/react";
import { Building2, Users, Target, BookOpen } from "lucide-react";
import { Breadcrumb, ContentCard, ContentCardTitle } from "../components/shared";
import { COLORS, FONTS, LAYOUT } from "../constants/theme";

const orgUnits = [
  "Vụ Tuyên truyền",
  "Vụ Giáo dục lý luận",
  "Vụ Văn hóa - Văn nghệ",
  "Vụ Báo chí - Xuất bản",
  "Vụ Tôn giáo",
  "Vụ Công tác dân vận",
  "Vụ Mặt trận Tổ quốc",
  "Văn phòng Ban",
];

export function IntroductionPage() {
  return (
    <div className="relative" style={{ maxWidth: LAYOUT.maxWidth, margin: "0 auto", padding: "40px 20px" }}>
      <Breadcrumb
        items={[
          { label: "Trang chủ", to: "/" },
          { label: "Giới thiệu" },
        ]}
      />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        {/* Hero banner */}
        <div
          className="rounded-2xl overflow-hidden p-12 text-center text-white"
          style={{
            background: "linear-gradient(135deg, #C41E2A 0%, #8b1a1a 50%, #C0891F 100%)",
          }}
        >
          <Building2 className="w-16 h-16 mx-auto mb-4 opacity-80" />
          <h1
            className="text-4xl mb-4"
            style={{ fontFamily: FONTS.display, fontWeight: 700 }}
          >
            Giới thiệu
          </h1>
          <p
            className="text-white/80 max-w-3xl mx-auto"
            style={{ fontFamily: FONTS.body, fontSize: "18px", lineHeight: 1.7 }}
          >
            Ban Tuyên giáo và Dân vận Trung ương Đảng Cộng sản Việt Nam
          </p>
        </div>

        {/* Mission */}
        <ContentCard>
          <ContentCardTitle icon={<Target className="w-6 h-6" />}>
            Chức năng, nhiệm vụ
          </ContentCardTitle>
          <div style={{ fontFamily: FONTS.body, lineHeight: 1.8, color: COLORS.textSecondary }}>
            <p className="mb-4">
              Ban Tuyên giáo và Dân vận Trung ương là cơ quan tham mưu, giúp việc của Ban Chấp hành Trung ương, 
              trực tiếp và thường xuyên là Bộ Chính trị, Ban Bí thư về công tác tuyên giáo và dân vận của Đảng.
            </p>
            <p className="mb-4">
              Ban có chức năng nghiên cứu, đề xuất các chủ trương, chính sách lớn thuộc lĩnh vực tuyên truyền, 
              giáo dục lý luận chính trị, văn hóa - văn nghệ, báo chí - xuất bản, công tác tôn giáo, dân vận, 
              mặt trận và các đoàn thể chính trị - xã hội.
            </p>
          </div>
        </ContentCard>

        {/* Organization structure */}
        <ContentCard>
          <ContentCardTitle icon={<Users className="w-6 h-6" />}>
            Cơ cấu tổ chức
          </ContentCardTitle>
          <div className="grid grid-cols-2 gap-4">
            {orgUnits.map((unit, i) => (
              <motion.div
                key={unit}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: COLORS.primary }} />
                <span style={{ fontFamily: FONTS.body }}>{unit}</span>
              </motion.div>
            ))}
          </div>
        </ContentCard>

        {/* History */}
        <ContentCard>
          <ContentCardTitle icon={<BookOpen className="w-6 h-6" />}>
            Lịch sử hình thành
          </ContentCardTitle>
          <div style={{ fontFamily: FONTS.body, lineHeight: 1.8, color: COLORS.textSecondary }}>
            <p className="mb-4">
              Công tác tuyên giáo và dân vận là hai lĩnh vực có truyền thống lâu đời, gắn liền với sự ra đời 
              và phát triển của Đảng Cộng sản Việt Nam từ ngày 3/2/1930.
            </p>
            <p>
              Trải qua gần một thế kỷ, công tác tuyên giáo và dân vận đã không ngừng được đổi mới, phát triển, 
              đóng góp quan trọng vào sự nghiệp cách mạng của Đảng và dân tộc.
            </p>
          </div>
        </ContentCard>
      </motion.div>
    </div>
  );
}
