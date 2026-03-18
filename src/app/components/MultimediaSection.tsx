import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import svgClock from "../../imports/svg-95m8p0kz4t";

// ── Figma images ──
import imgHero from "figma:asset/876df38b896f6a6fff5f178ee69a673984c3547c.png";
import imgVideo1 from "figma:asset/4888778fe6409dd0a44b75838a90d69c05d0b394.png";
import imgVideo2 from "figma:asset/0bf0fc60e90374bf875a53d77ac98fb6ca7e0d98.png";
import imgVideo3 from "figma:asset/f5748723ce05fcdb0c8cdc8f53b8e0052ae11448.png";
import imgVideo4 from "figma:asset/cef7bc4e598bbbff2688086ba17b69bdafee2e8c.png";
import imgVoices from "figma:asset/959553473d9c0e73e908adfe0824ce30e12a7163.png";
import imgLongform from "figma:asset/a63b39b3fd24e67228f787e772605ccdf0c32053.png";
import imgRightVideo from "figma:asset/8cbbb3bfede365de449248e500ac37cd6f0b327b.png";
import imgAudioBg from "figma:asset/973907db79fef4efb39d08096884edcc57ae2b32.png";

// ── Types ──
interface CardData {
  id: number;
  image: string;
  title: string;
  source: string;
  date: string;
}

interface TabData {
  label: string;
  featured: CardData;
  small: [CardData, CardData];
}

// ── Tab data ──
const tabs: TabData[] = [
  {
    label: "Video",
    featured: {
      id: 2001,
      image: imgHero,
      title: "Không để thiếu năng lượng cho sản xuất, kinh doanh, tiêu dùng",
      source: "BTGĐV",
      date: "18/03/2026",
    },
    small: [
      { id: 2002, image: imgVideo1, title: "Năm 2026, doanh thu hộ kinh doanh giảm dưới 3 tỷ đồng nộp thuế thế nào?", source: "BTGĐV", date: "17/03/2026" },
      { id: 2003, image: imgVideo2, title: "Tư duy mới: Từ 'quản lý già hóa' sang 'phát triển kinh tế bạc'", source: "BTGĐV", date: "17/03/2026" },
    ],
  },
  {
    label: "Tin ảnh",
    featured: {
      id: 2010,
      image: imgVideo4,
      title: "Chùm ảnh: Thủ tướng tiếp Đoàn Quỹ Eisenhower của Hoa Kỳ",
      source: "BTGĐV",
      date: "18/03/2026",
    },
    small: [
      { id: 2011, image: imgVoices, title: "Phóng sự ảnh: Vùng cao đổi mới sau 5 năm thực hiện Nghị quyết", source: "BTGĐV", date: "16/03/2026" },
      { id: 2012, image: imgLongform, title: "Chùm ảnh: Xuân yêu thương - Tết vì người nghèo 2026", source: "BTGĐV", date: "15/03/2026" },
    ],
  },
  {
    label: "Podcast",
    featured: {
      id: 2020,
      image: imgAudioBg,
      title: "Ban hành quy định về việc quản lý, sử dụng, khai thác tài sản kết cấu hạ tầng thủy lợi",
      source: "BTGĐV",
      date: "17/03/2026",
    },
    small: [
      { id: 2021, image: imgRightVideo, title: "Podcast: Đổi mới công tác tuyên giáo trong kỷ nguyên số", source: "BTGĐV", date: "16/03/2026" },
      { id: 2022, image: imgVideo3, title: "Bản tin Audio: Phát triển kinh tế xanh - Xu hướng tất yếu", source: "BTGĐV", date: "15/03/2026" },
    ],
  },
];

// ── Clock Icon ──
function ClockIcon({ color = "#888" }: { color?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="shrink-0" style={{ transform: "scaleY(-1)" }}>
      <path d={svgClock.p10eca80} fill={color} />
    </svg>
  );
}

// ── Source + Date ──
function SourceDate({ source, date, color = "#888" }: { source: string; date: string; color?: string }) {
  return (
    <div className="flex items-center gap-[6px]">
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color, whiteSpace: "nowrap" }}>{source}</span>
      <ClockIcon color={color} />
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color, whiteSpace: "nowrap" }}>{date}</span>
    </div>
  );
}

const MotionLink = motion.create(Link);

const IMG_BG_GOLD = "https://images.unsplash.com/photo-1700547949736-024ad8cb56cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjBzaWxrJTIwZmFicmljJTIwbHV4dXJ5JTIwdGV4dHVyZXxlbnwxfHx8fDE3NzM4Mzc5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

// ── Small Card (horizontal: image left, text right) ──
function SmallCard({ article, index, activeTab }: { article: CardData; index: number; activeTab: number }) {
  return (
    <MotionLink
      key={`${activeTab}-s-${index}`}
      to={`/da-phuong-tien/${article.id}`}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.15 + index * 0.08 }}
      className="group/small flex flex-row gap-2 sm:gap-3 cursor-pointer flex-1 min-w-0"
    >
      {/* Thumbnail */}
      <div
        className="relative overflow-hidden shrink-0 rounded-[6px] sm:rounded-[8px]"
        style={{ width: "clamp(100px, 28vw, 200px)", height: "clamp(70px, 19vw, 130px)" }}
      >
        <img
          src={article.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/small:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover/small:bg-black/10 transition-all duration-400 pointer-events-none" />
      </div>
      {/* Text */}
      <div className="flex flex-col justify-center min-w-0 flex-1 py-0 sm:py-1">
        <p
          className="group-hover/small:text-[#c41e2a] transition-colors"
          style={{
            fontFamily: "'Protest Strike', sans-serif",
            fontSize: "clamp(13px, 1.5vw, 16px)",
            fontWeight: 400,
            lineHeight: "20px",
            color: "#333",
            letterSpacing: "0.32px",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            margin: 0,
          }}
        >
          {article.title}
        </p>
        <div className="mt-auto pt-[4px]">
          <SourceDate source={article.source} date={article.date} />
        </div>
      </div>
    </MotionLink>
  );
}

// ── Main Component ──
export function MultimediaSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = tabs[activeTab];

  return (
    <div className="relative w-full overflow-hidden rounded-none sm:rounded-xl px-0 sm:px-3 lg:px-0" style={{ maxWidth: 1360, margin: "16px auto 0" }}>
      {/* ═══ Background ═══ */}
      <img src={IMG_BG_GOLD} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(1.1) saturate(0.5)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(255,252,240,0.92) 0%, rgba(255,250,235,0.94) 50%, rgba(255,252,240,0.92) 100%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(212,168,83,0.03) 0%, transparent 70%)" }} />

      {/* ═══ Content ═══ */}
      <div className="relative z-10 py-5 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 max-w-[1320px] mx-auto">
        {/* ── Title ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mb-4 sm:mb-6"
        >
          <h2
            className="uppercase text-center"
            style={{
              fontFamily: "'Protest Strike', sans-serif",
              fontSize: "clamp(22px, 5vw, 44px)",
              lineHeight: 1.3,
              color: "#5a3e10",
              textShadow: "1px 1px 4px rgba(212,168,83,0.3)",
            }}
          >
            ĐA PHƯƠNG TIỆN
          </h2>
          <div className="w-[100px] sm:w-[160px] h-[2px] bg-gradient-to-r from-transparent via-[#c0891f] to-transparent mt-2 sm:mt-3" />
        </motion.div>

        {/* ── Tab Bar ── */}
        <div className="flex items-center justify-center gap-0 sm:gap-1 pb-[8px] sm:pb-[10px]">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className="relative cursor-pointer bg-transparent border-none outline-none shrink-0 px-3 sm:px-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(13px, 2vw, 15px)",
                fontWeight: activeTab === i ? 700 : 400,
                lineHeight: "26px",
                color: activeTab === i ? "#5a3e10" : "rgba(90,62,16,0.55)",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                paddingBottom: 10,
                transition: "color 0.25s ease",
              }}
            >
              {tab.label}
              {activeTab === i && (
                <motion.div
                  layoutId="tab-indicator-multimedia"
                  className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full"
                  style={{
                    backgroundColor: "#c0891f",
                    boxShadow: "0 0 10px rgba(192,137,31,0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* ── Floating white content card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-lg sm:rounded-xl overflow-hidden"
          style={{
            backgroundColor: "rgba(255,255,255,0.97)",
            boxShadow: "0 15px 30px -10px rgba(120,90,30,0.2), 0 8px 20px -8px rgba(120,90,30,0.12), 0 0 0 1px rgba(212,168,83,0.15)",
            padding: "clamp(10px, 3vw, 20px)",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-3 sm:gap-4"
            >
              {/* ── Row 1: Featured large card ── */}
              <MotionLink
                to={`/da-phuong-tien/${currentTab.featured.id}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="group/feat flex flex-col cursor-pointer"
              >
                <div
                  className="relative overflow-hidden w-full rounded-[8px] sm:rounded-[10px]"
                  style={{ height: "clamp(180px, 45vw, 420px)" }}
                >
                  <img
                    src={currentTab.featured.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/feat:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/feat:bg-black/15 transition-all duration-500 pointer-events-none" />
                  {/* Gradient bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-2/5 sm:h-1/3 bg-gradient-to-t from-black/60 sm:from-black/50 to-transparent pointer-events-none" />
                </div>
                <div className="pt-[6px] sm:pt-[10px] pb-[4px]">
                  <p
                    className="group-hover/feat:text-white/90 transition-colors"
                    style={{
                      fontFamily: "'Barlow Condensed', 'Inter', sans-serif",
                      fontSize: "clamp(15px, 3.5vw, 26px)",
                      fontWeight: 700,
                      lineHeight: 1.35,
                      color: "#fff",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      margin: 0,
                      position: "relative",
                      marginTop: "clamp(-50px, -10vw, -70px)",
                      zIndex: 2,
                      textShadow: "0 2px 8px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)",
                      paddingLeft: "clamp(8px, 2vw, 16px)",
                      paddingRight: "clamp(8px, 2vw, 16px)",
                    }}
                  >
                    {currentTab.featured.title}
                  </p>
                </div>
                <SourceDate source={currentTab.featured.source} date={currentTab.featured.date} color="#777" />
              </MotionLink>

              {/* ── Divider ── */}
              <div className="w-full h-[1px] bg-[#e2e2e2]" />

              {/* ── Row 2: 2 small cards – stack on mobile, side by side on sm+ ── */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {currentTab.small.map((article, i) => (
                  <div
                    key={`${activeTab}-sm-${i}`}
                    className="flex-1 min-w-0"
                  >
                    <div
                      className={i === 0 ? "sm:border-r sm:border-[#e2e2e2] sm:pr-4" : "sm:pl-4"}
                    >
                      <SmallCard article={article} index={i} activeTab={activeTab} />
                    </div>
                    {/* Mobile divider between cards */}
                    {i === 0 && <div className="sm:hidden w-full h-[1px] bg-[#e2e2e2] mt-3" />}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}