import { useState } from "react";
import { motion } from "motion/react";

import imgDaiHoiMonument from "figma:asset/771a91d7cb9f564b5f1e4a3fbbd5485526f5c504.png";

// ── Milestones Data ───────────────────────────────────

const milestones = [
  {
    year: "1930",
    image: "https://images.unsplash.com/photo-1764000858269-28d9f0f72894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwY29tbXVuaXN0JTIwcGFydHklMjBjb25ncmVzcyUyMG1lZXRpbmclMjAxOTMwfGVufDF8fHx8MTc3MzYwNDkzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Thành lập Đảng Cộng sản Việt Nam",
    desc: "Đánh dấu sự ra đời của công tác tuyên truyền, vận động cách mạng trong quần chúng nhân dân",
  },
  {
    year: "1945",
    image: "https://images.unsplash.com/photo-1773071883313-c825e64bbcdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwaW5kZXBlbmRlbmNlJTIwY2VsZWJyYXRpb24lMjBmbGFnfGVufDF8fHx8MTc3MzYwNDkzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Cách mạng Tháng Tám thành công",
    desc: "Công tác tuyên giáo và dân vận đóng vai trò then chốt trong việc vận động toàn dân đứng lên giành chính quyền",
  },
  {
    year: "1954",
    image: "https://images.unsplash.com/photo-1727096665427-020d43e77ade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwd2FyJTIwdmljdG9yeSUyMHJldW5pZmljYXRpb24lMjAxOTc1fGVufDF8fHx8MTc3MzYwNDkzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Chiến thắng Điện Biên Phủ",
    desc: "Tuyên truyền tinh thần kháng chiến, vận động nhân dân hậu phương chi viện cho tiền tuyến",
  },
  {
    year: "1960",
    image: "https://images.unsplash.com/photo-1747625119730-5e46501418b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwZWR1Y2F0aW9uJTIweG91dGglMjBwYXRyaW90aWN8ZW58MXx8fHwxNzczNjA0OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Đại hội lần thứ III của Đảng",
    desc: "Xây dựng chủ nghĩa xã hội ở miền Bắc, đẩy mạnh công tác dân vận phục vụ hai nhiệm vụ chiến lược",
  },
  {
    year: "1975",
    image: "https://images.unsplash.com/photo-1598544919456-fcb105fa7a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwSG8lMjBDaGklMjBNaW5oJTIwY2l0eSUyMHNreWxpbmUlMjBhZXJpYWx8ZW58MXx8fHwxNzczNjA0OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Giải phóng miền Nam, thống nhất đất nước",
    desc: "Thắng lợi vĩ đại của công tác tuyên truyền, vận động quần chúng trong sự nghiệp giải phóng dân tộc",
  },
  {
    year: "1986",
    image: "https://images.unsplash.com/photo-1768364636467-f7a161e43af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwbW9kZXJuJTIwZGV2ZWxvcG1lbnQlMjBIYW5vaXxlbnwxfHx8fDE3NzM2MDQ5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Đại hội VI – Khởi đầu công cuộc Đổi mới",
    desc: "Đổi mới tư duy tuyên giáo, mở rộng dân chủ, tăng cường vận động quần chúng tham gia xây dựng đất nước",
  },
  {
    year: "1996",
    image: "https://images.unsplash.com/photo-1742888827024-6d85caf1d09b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwbmF0iionYWwlMjBhc3NlbWJseSUyMHBhcmxpYW1lbnR8ZW58MXx8fHwxNzczNjA0OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Đại hội VIII – Đẩy mạnh CNH-HĐH",
    desc: "Nâng cao vai trò tuyên giáo trong công nghiệp hóa, hiện đại hóa, đổi mới công tác dân vận cơ sở",
  },
  {
    year: "2007",
    image: "https://images.unsplash.com/photo-1747625119757-1b5c92aec5e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwZ292ZXJubWVudCUyMGRpZ2l0YWwlMjB0cmFuc2Zvcm1hdGlvbnxlbnwxfHx8fDE3NzM2MDQ5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Hội nhập WTO – Bước ngoặt lớn",
    desc: "Tuyên truyền hội nhập quốc tế, vận động nhân dân thích ứng với kinh tế thị trường định hướng XHCN",
  },
  {
    year: "2016",
    image: "https://images.unsplash.com/photo-1708352549266-d8e6d73e1e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwZ292ZXJubWVudCUyMG1lZXRpbmclMjBvZmZpY2lhbHxlbnwxfHx8fDE3NzM0NzMzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Đại hội XII – Xây dựng Đảng trong sạch",
    desc: "Tăng cường công tác tuyên giáo gắn với xây dựng, chỉnh đốn Đảng và phòng chống tham nhũng",
  },
  {
    year: "2021",
    image: "https://images.unsplash.com/photo-1725335739089-21b454c097a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwY29uZmVyZW5jZSUyMHNlbWluYXIlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzczNDczMzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Đại hội XIII – Kỷ nguyên mới",
    desc: "Đẩy mạnh chuyển đổi số trong tuyên giáo, đổi mới công tác dân vận trong bối cảnh cách mạng 4.0",
  },
];

const CARD_W = 220;
const GAP = 4;
const STRIP_ITEM = CARD_W + GAP;
const TOTAL_W = milestones.length * STRIP_ITEM;

// ── Filmstrip Milestones Component ────────────────────

function FilmstripMilestones() {
  const [paused, setPaused] = useState(false);

  const sprocketRow = (prefix: string) => (
    <div className="flex items-center w-full" style={{ height: 26, background: "#f0e4d0" }}>
      <div className="flex items-center gap-[2px] w-full px-[6px]">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={`${prefix}-${i}`}
            className="shrink-0 rounded-full"
            style={{
              width: 12,
              height: 12,
              background: "#e8d5b8",
              border: "1.5px solid #d4a853",
              boxShadow: "inset 0 1px 2px rgba(163,0,0,0.12)",
              marginRight: i < 49 ? "calc((100% - 50*12px) / 49)" : 0,
              flex: "0 0 12px",
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        background: "#f0e4d0",
        boxShadow: "0 8px 40px rgba(163,0,0,0.12), inset 0 0 60px rgba(212,168,83,0.1)",
      }}
    >
      {sprocketRow("top")}
      <div style={{ height: 3, background: "linear-gradient(90deg, #d4a853, #a30000, #d4a853)" }} />

      <div className="relative overflow-hidden" style={{ height: 380 }}>
        <div
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{ width: 80, background: "linear-gradient(to right, #f0e4d0 0%, transparent 100%)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{ width: 80, background: "linear-gradient(to left, #f0e4d0 0%, transparent 100%)" }}
        />

        <div
          className="absolute inset-0 z-20 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')",
          }}
        />

        <style>{`
          @keyframes filmScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${TOTAL_W}px); }
          }
          .film-track {
            animation: filmScroll ${milestones.length * 4}s linear infinite;
          }
          .film-track:hover, .film-track.paused {
            animation-play-state: paused;
          }
        `}</style>

        <div
          className={`flex items-stretch ${paused ? "paused" : ""} film-track`}
          style={{ width: TOTAL_W * 2, gap: GAP }}
        >
          {[...milestones, ...milestones].map((m, i) => (
            <div
              key={`frame-${i}`}
              className="shrink-0 relative group cursor-pointer"
              style={{
                width: CARD_W,
                height: 380,
                background: "#fffcf4",
                borderLeft: "3px solid #d4a853",
                borderRight: "3px solid #d4a853",
                overflow: "hidden",
              }}
            >
              <div className="relative overflow-hidden" style={{ height: 190 }}>
                <img
                  src={m.image}
                  alt={m.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  style={{ filter: "sepia(0.25) contrast(1.1) brightness(0.95)" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 40px rgba(0,0,0,0.3)" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 pointer-events-none"
                  style={{ height: 60, background: "linear-gradient(to top, #fffcf4, transparent)" }}
                />
                <div className="absolute inset-0 bg-[#a30000]/0 group-hover:bg-[#a30000]/10 transition-all duration-400 pointer-events-none" />
              </div>

              <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #a30000, transparent)" }} />

              <div className="text-center pt-[8px]">
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: 44,
                    lineHeight: "44px",
                    color: "#a30000",
                    textShadow: "0 1px 2px rgba(163,0,0,0.15)",
                  }}
                >
                  {m.year}
                </span>
              </div>

              <div className="px-[10px] pt-[4px]">
                <p
                  className="text-center group-hover:text-[#a30000] transition-colors duration-300"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: 13.5,
                    lineHeight: "19px",
                    color: "#1a1a1a",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {m.title}
                </p>
              </div>

              <div className="px-[10px] pt-[4px]">
                <p
                  className="text-center"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    lineHeight: "17px",
                    color: "#666",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {m.desc}
                </p>
              </div>

              <div
                className="absolute bottom-[6px] right-[8px] opacity-30"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 10,
                  color: "#6f3706",
                }}
              >
                ▶ {String(i % milestones.length + 1).padStart(2, "0")}A
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 3, background: "linear-gradient(90deg, #d4a853, #a30000, #d4a853)" }} />
      {sprocketRow("bot")}

      <div className="absolute bottom-[32px] left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {paused && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-1 px-3 py-1 rounded-full"
            style={{ background: "rgba(26,18,9,0.85)", backdropFilter: "blur(8px)" }}
          >
            <span style={{ color: "#d4a853", fontSize: 11, fontFamily: "'Inter', sans-serif" }}>
              ⏸ Đã tạm dừng
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────

export function MilestonesSection() {
  return (
    <div className="relative z-10 w-full overflow-hidden bg-transparent">
    </div>
  );
}