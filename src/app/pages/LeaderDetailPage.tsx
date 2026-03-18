import { useParams } from "react-router";
import { motion } from "motion/react";
import { Mail, Phone, Award, Calendar, MapPin, Briefcase } from "lucide-react";
import { Breadcrumb, ContentCard, ContentCardTitle } from "../components/shared";
import { leadersData, type Leader } from "../data/leaders";
import { COLORS, FONTS, SHADOWS, LAYOUT } from "../constants/theme";

export function LeaderDetailPage() {
  const { id } = useParams();
  const leader = leadersData[id || "1"] || leadersData["1"];

  return (
    <div className="relative" style={{ maxWidth: LAYOUT.maxWidth, margin: "0 auto", padding: "40px 20px" }}>
      <Breadcrumb
        items={[
          { label: "Trang chủ", to: "/" },
          { label: "Lãnh đạo", to: "/" },
          { label: leader.name },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar - Profile card */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1"
        >
          <ProfileCard leader={leader} />
        </motion.aside>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Bio */}
          <ContentCard>
            <ContentCardTitle>Tiểu sử</ContentCardTitle>
            <div
              className="leader-bio"
              style={{ fontFamily: FONTS.body, color: COLORS.textSecondary, lineHeight: 1.8 }}
              dangerouslySetInnerHTML={{ __html: leader.bio }}
            />
          </ContentCard>

          {/* Education */}
          <ContentCard>
            <ContentCardTitle>Học vấn</ContentCardTitle>
            <BulletList items={leader.education} />
          </ContentCard>

          {/* Career */}
          <ContentCard>
            <ContentCardTitle icon={<Briefcase className="w-6 h-6" />}>
              Quá trình công tác
            </ContentCardTitle>
            <CareerTimeline career={leader.career} />
          </ContentCard>

          {/* Achievements */}
          <ContentCard>
            <ContentCardTitle>Khen thưởng</ContentCardTitle>
            <AchievementsList achievements={leader.achievements} />
          </ContentCard>
        </motion.div>
      </div>

      <LeaderBioStyles />
    </div>
  );
}

// ── Sub-components ──────────────────────────────────────

function ProfileCard({ leader }: { leader: Leader }) {
  const contactItems = [
    { icon: <Calendar className="w-5 h-5" />, label: "Ngày sinh", value: leader.birthDate },
    { icon: <MapPin className="w-5 h-5" />, label: "Quê quán", value: leader.birthPlace },
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: leader.email, breakAll: true },
    { icon: <Phone className="w-5 h-5" />, label: "Điện thoại", value: leader.phone },
  ];

  return (
    <div className="bg-white rounded-2xl overflow-hidden sticky top-8" style={{ boxShadow: SHADOWS.cardGold }}>
      <div className="h-32" style={{ background: "linear-gradient(135deg, #C41E2A 0%, #C0891F 100%)" }} />
      <div className="relative px-6 -mt-16 mb-4">
        <div
          className="w-32 h-32 rounded-full overflow-hidden mx-auto"
          style={{ border: "4px solid white", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
        >
          <img src={leader.avatar} alt={leader.name} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="px-6 pb-6">
        <h2 className="text-2xl font-bold text-center mb-2" style={{ fontFamily: FONTS.display, color: COLORS.primary }}>
          {leader.name}
        </h2>
        <p className="text-center mb-1" style={{ fontFamily: FONTS.body, color: COLORS.gold, fontWeight: 600 }}>
          {leader.position}
        </p>
        <p className="text-center text-sm text-gray-600 mb-6">{leader.rank}</p>
        <div className="space-y-3 border-t border-gray-200 pt-4">
          {contactItems.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0" style={{ color: COLORS.gold }}>{item.icon}</span>
              <div className="text-sm">
                <div className="text-gray-500">{item.label}</div>
                <div className={`font-semibold ${item.breakAll ? "break-all" : ""}`}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="flex items-start gap-3"
          style={{ fontFamily: FONTS.body }}
        >
          <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: COLORS.gold }} />
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}

function CareerTimeline({ career }: { career: { year: string; position: string }[] }) {
  return (
    <div className="space-y-4">
      {career.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="flex gap-4 pb-4 border-b border-gray-100 last:border-0"
        >
          <div className="font-bold shrink-0" style={{ fontFamily: FONTS.body, color: COLORS.gold, minWidth: 120 }}>
            {item.year}
          </div>
          <div style={{ fontFamily: FONTS.body }}>{item.position}</div>
        </motion.div>
      ))}
    </div>
  );
}

function AchievementsList({ achievements }: { achievements: string[] }) {
  return (
    <ul className="space-y-3">
      {achievements.map((achievement, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="flex items-start gap-3"
          style={{ fontFamily: FONTS.body }}
        >
          <Award className="w-5 h-5 mt-1 shrink-0" style={{ color: COLORS.gold }} />
          <span>{achievement}</span>
        </motion.li>
      ))}
    </ul>
  );
}

function LeaderBioStyles() {
  return (
    <style>{`
      .leader-bio h2 {
        font-family: 'Playfair Display', serif;
        font-size: 1.5rem;
        font-weight: 700;
        color: #C0891F;
        margin-top: 2rem;
        margin-bottom: 1rem;
      }
      .leader-bio p {
        margin-bottom: 1rem;
      }
    `}</style>
  );
}
