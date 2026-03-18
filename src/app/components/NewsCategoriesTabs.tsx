import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import svgArrow from "../../imports/svg-bp86new6yc";
import svgClock from "../../imports/svg-95m8p0kz4t";

// Featured images from original 4 columns
import imgXacDinh from "figma:asset/e8269cf208b581136071b28a838b8838e6eec6c5.png";
import imgVanPhong from "figma:asset/17e2dee254ab09edc385a7a7a363d0ba79b1fcb1.png";
import imgBoNhiem from "figma:asset/081a1acff60fac21d55db84118d38d21c625275b.png";
import imgCuTri from "figma:asset/37db94d609ac68b9501abb3daff7016238ab1647.png";

// Đại hội XIII / XIV section images
import imgDaiHoiMonument from "figma:asset/771a91d7cb9f564b5f1e4a3fbbd5485526f5c504.png";
import imgArticleTanTay from "figma:asset/a133d10643cf8e866591923722d87cae0275fc44.png";
import imgArticleRachKien from "figma:asset/7110425e0c240f65c8de56f2a609d24bb7d7a3de.png";
import imgArticleTanDong from "figma:asset/6f6eee82ef7b2d8e23fd8f7987ca802248b51e69.png";

// ── Types ──────────────────────────────────────────────

interface SmallArticle {
  id: number;
  image: string;
  title: string;
  source: string;
  date: string;
}

interface TabData {
  label: string;
  featured: {
    id: number;
    image: string;
    title: string;
    source: string;
    date: string;
  };
  smallArticles: SmallArticle[];
}

// ── Unsplash images for small article thumbnails ──────

const IMG_BG_SECTION =
  "https://images.unsplash.com/photo-1750231211588-53a860ea7b4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwcmVkJTIwZmxhZyUyMHBhdHJpb3RpYyUyMGJhY2tncm91bmQlMjB0ZXh0dXJlfGVufDF8fHx8MTc3MzQ3OTY5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const IMG_MEETING =
  "https://images.unsplash.com/photo-1708352549266-d8e6d73e1e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwZ292ZXJubWVudCUyMG1lZXRpbmclMjBvZmZpY2lhbHxlbnwxfHx8fDE3NzM0NzMzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_HANOI =
  "https://images.unsplash.com/photo-1769072060091-1fd730e213a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwSGFub2klMjBnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzczNDczMzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_ELECTION =
  "https://images.unsplash.com/photo-1710702418104-6bf5419ab03d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwZWxlY3Rpb24lMjB2b3RpbmclMjBiYWxsb3R8ZW58MXx8fHwxNzczNDczMzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_CITY =
  "https://images.unsplash.com/photo-1768364636467-f7a161e43af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwY2l0eSUyMGRldmVsb3BtZW50JTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzczNDczMzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_EDUCATION =
  "https://images.unsplash.com/photo-1773394089827-1de1879cabc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwZWR1Y2F0aW9uJTIwc2Nob29sJTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3NzM0NzMzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_HCMC =
  "https://images.unsplash.com/photo-1472146936668-d987bf0a6e38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwSG8lMjBDaGklMjBNaW5oJTIwY2l0eSUyMGFlcmlhbHxlbnwxfHx8fDE3NzM0NzMzMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_CONFERENCE =
  "https://images.unsplash.com/photo-1725335739089-21b454c097a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwY29uZmVyZW5jZSUyMHNlbWluYXIlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzczNDczMzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

// ── Tab data ──────────────────────────���───────────────

const tabs: TabData[] = [
  {
    label: "Tin hoạt động",
    featured: {
      id: 1,
      image: imgXacDinh,
      title:
        "Tăng cường công tác tuyên truyền, giáo dục lý luận chính trị trong tình hình mới",
      source: "BTGĐV",
      date: "14/03/2026",
    },
    smallArticles: [
      {
        id: 1,
        image: IMG_MEETING,
        title:
          "Hội nghị toàn quốc tổng kết công tác tuyên giáo năm 2025",
        source: "BTGĐV",
        date: "12/03/2026",
      },
      {
        id: 2,
        image: IMG_CONFERENCE,
        title:
          "Đẩy mạnh công tác tuyên truyền các nghị quyết của Đảng đến cơ sở",
        source: "BTGĐV",
        date: "10/03/2026",
      },
      {
        id: 3,
        image: IMG_EDUCATION,
        title:
          "Nâng cao chất lượng giảng dạy lý luận chính trị tại các trường Đảng",
        source: "BTGĐV",
        date: "08/03/2026",
      },
      {
        id: 4,
        image: IMG_HANOI,
        title:
          "Tập huấn nghiệp vụ tuyên giáo cho cán bộ cơ sở",
        source: "BTGĐV",
        date: "06/03/2026",
      },
    ],
  },
  {
    label: "Xây dựng đảng",
    featured: {
      id: 2,
      image: imgVanPhong,
      title:
        "Đổi mới công tác dân vận trong tình hình mới, gắn kết mật thiết với nhân dân",
      source: "BTGĐV",
      date: "13/03/2026",
    },
    smallArticles: [
      {
        id: 5,
        image: IMG_MEETING,
        title:
          "Hội nghị giao ban công tác dân vận quý I/2026",
        source: "BTGĐV",
        date: "11/03/2026",
      },
      {
        id: 6,
        image: IMG_CITY,
        title:
          "Triển khai Quy chế dân chủ ở cơ sở tại các địa phương",
        source: "BTGĐV",
        date: "09/03/2026",
      },
      {
        id: 7,
        image: IMG_ELECTION,
        title:
          "Tăng cường vai trò của Mặt trận Tổ quốc trong công tác dân vận",
        source: "BTGĐV",
        date: "07/03/2026",
      },
      {
        id: 8,
        image: IMG_HCMC,
        title:
          "Nâng cao hiệu quả công tác tiếp dân, đối thoại trực tiếp với nhân dân",
        source: "BTGĐV",
        date: "05/03/2026",
      },
    ],
  },
  {
    label: "Học tập và làm theo lời Bác",
    featured: {
      id: 3,
      image: imgBoNhiem,
      title:
        "Đổi mới phương pháp giáo dục lý luận chính trị, tư tưởng Hồ Chí Minh",
      source: "BTGĐV",
      date: "12/03/2026",
    },
    smallArticles: [
      {
        id: 9,
        image: IMG_CONFERENCE,
        title:
          "Hội thảo khoa học về tư tưởng Hồ Chí Minh trong thời kỳ mới",
        source: "BTGĐV",
        date: "10/03/2026",
      },
      {
        id: 10,
        image: IMG_EDUCATION,
        title:
          "Tổ chức các lớp bồi dưỡng lý luận chính trị cho cán bộ trẻ",
        source: "BTGĐV",
        date: "08/03/2026",
      },
      {
        id: 11,
        image: IMG_MEETING,
        title:
          "Xây dựng chương trình giáo dục chính trị trong trường học",
        source: "BTGĐV",
        date: "06/03/2026",
      },
      {
        id: 12,
        image: IMG_HANOI,
        title:
          "Đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh",
        source: "BTGĐV",
        date: "04/03/2026",
      },
    ],
  },
  {
    label: "NGHỊ QUYẾT 57-NQ/TW",
    featured: {
      id: 4,
      image: imgCuTri,
      title:
        "Nâng cao chất lượng công tác báo chí, xuất bản phục vụ sự nghiệp đổi mới",
      source: "BTGĐV",
      date: "11/03/2026",
    },
    smallArticles: [
      {
        id: 13,
        image: IMG_CONFERENCE,
        title:
          "Hội nghị toàn quốc về công tác báo chí - xuất bản",
        source: "BTGĐV",
        date: "09/03/2026",
      },
      {
        id: 14,
        image: IMG_MEETING,
        title:
          "Tăng cường quản lý nhà nước về hoạt động báo chí",
        source: "BTGĐV",
        date: "07/03/2026",
      },
      {
        id: 15,
        image: IMG_HANOI,
        title:
          "Xây dựng đội ngũ cán bộ báo chí có bản lĩnh chính trị vững vàng",
        source: "BTGĐV",
        date: "05/03/2026",
      },
      {
        id: 16,
        image: IMG_CITY,
        title:
          "Phát triển báo chí điện tử theo hướng chuyên nghiệp",
        source: "BTGĐV",
        date: "03/03/2026",
      },
    ],
  },
];

// ── Clock Icon ─────────────────────────────────────────

function ClockIcon({ color = "#888" }: { color?: string }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      className="shrink-0"
      style={{ transform: "scaleY(-1)" }}
    >
      <path d={svgClock.p10eca80} fill={color} />
    </svg>
  );
}

// ── Source + Date ─────────────────────────────────────

function SourceDate({
  source,
  date,
  color = "#888",
}: {
  source: string;
  date: string;
  color?: string;
}) {
  return (
    <div className="flex items-center gap-[6px]">
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          fontWeight: 400,
          color,
          whiteSpace: "nowrap",
        }}
      >
        {source}
      </span>
      <ClockIcon color={color} />
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          fontWeight: 400,
          color,
          whiteSpace: "nowrap",
        }}
      >
        {date}
      </span>
    </div>
  );
}

// ── Milestone Filmstrip Data ──────────────────────────

const milestones = [
  {
    year: "1930",
    image: "https://images.unsplash.com/photo-1764000858269-28d9f0f72894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwY29tbXVuaXN0JTIwcGFydHklMjBjb25ncmVzcyUyMG1lZXRpbmclMjAxOTMwfGVufDF8fHx8MTc3MzYwNDkzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Thành lập Đảng Cộng sản Việt Nam",
    desc: "Đánh dấu sự ra đời của công tác tuyên truyền, v���n động cách mạng trong quần chúng nhân dân",
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

// ── Filmstrip Milestones Component ────────────────────

const CARD_W = 220;
const GAP = 4;
const STRIP_ITEM = CARD_W + GAP;
const TOTAL_W = milestones.length * STRIP_ITEM;

function FilmstripMilestones() {
  const [paused, setPaused] = useState(false);

  /* ── sprocket holes (shared top & bottom) ── */
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
      {/* ── Top sprocket strip ── */}
      {sprocketRow("top")}

      {/* ── Film strip border top ── */}
      <div style={{ height: 3, background: "linear-gradient(90deg, #d4a853, #a30000, #d4a853)" }} />

      {/* ── Scrolling film frames ── */}
      <div className="relative overflow-hidden" style={{ height: 380 }}>
        {/* Edge fade overlays */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{ width: 80, background: "linear-gradient(to right, #f0e4d0 0%, transparent 100%)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{ width: 80, background: "linear-gradient(to left, #f0e4d0 0%, transparent 100%)" }}
        />

        {/* Film grain overlay */}
        <div
          className="absolute inset-0 z-20 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')",
          }}
        />

        {/* CSS animation keyframes */}
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

        {/* The sliding track: 2 copies for seamless loop */}
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
              {/* ── Image with sepia tint ── */}
              <div className="relative overflow-hidden" style={{ height: 190 }}>
                <img
                  src={m.image}
                  alt={m.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  style={{ filter: "sepia(0.25) contrast(1.1) brightness(0.95)" }}
                />
                {/* Vignette on image */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 40px rgba(0,0,0,0.3)" }}
                />
                {/* Bottom gradient fade */}
                <div
                  className="absolute bottom-0 left-0 right-0 pointer-events-none"
                  style={{
                    height: 60,
                    background: "linear-gradient(to top, #fffcf4, transparent)",
                  }}
                />
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[#a30000]/0 group-hover:bg-[#a30000]/10 transition-all duration-400 pointer-events-none" />
              </div>

              {/* ── Red divider ── */}
              <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #a30000, transparent)" }} />

              {/* ── Year ── */}
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

              {/* ── Title ── */}
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

              {/* ── Description ── */}
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

              {/* ── Film frame number (bottom-right, like real film) ── */}
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

      {/* ── Film strip border bottom ── */}
      <div style={{ height: 3, background: "linear-gradient(90deg, #d4a853, #a30000, #d4a853)" }} />

      {/* ── Bottom sprocket strip ── */}
      {sprocketRow("bot")}

      {/* ── Playback indicator ── */}
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

// Create motion components
const MotionLink = motion.create(Link);

// ── Main Component ────────────────────────────────────

export function NewsCategoriesTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = tabs[activeTab];

  return (
    <>
    <div className="relative w-full overflow-hidden" style={{ minHeight: 720 }}>
      {/* ═══ Background Image ═══ */}
      <img
        src={IMG_BG_SECTION}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.35) saturate(1.3)" }}
      />
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(120,15,20,0.55) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.85) 100%)",
        }}
      />
      {/* Subtle pattern overlay for texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1758091353603-4e669bcbbd62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwcmVkJTIwZmxhZyUyMGNlbGVicmF0aW9uJTIwcGFyYWRlfGVufDF8fHx8MTc3MzU5MTc3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.45,
          filter: "saturate(1.8) contrast(1.2) brightness(0.9)",
        }}
      />

      {/* ═══ Floating Content ═══ */}
      <div className="relative z-10 py-10 px-6 max-w-[1320px] mx-auto">
        {/* ── Title: "Tin Đảng" centered with Protest Strike font ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mb-6"
        >
          <h2
            className="text-white uppercase text-center"
            style={{
              fontFamily: "'Protest Strike', sans-serif",
              fontSize: 44,
              lineHeight: 1.3,
              textShadow: "3px 2px 8px rgba(0,0,0,0.5)",
            }}
          >BẢNG TIN</h2>
          <div className="w-[160px] h-[2px] bg-gradient-to-r from-transparent via-[#d4a853] to-transparent mt-3" />
        </motion.div>

        {/* ── Tab Bar (on dark bg) ── */}
        <div className="relative flex items-center justify-center pb-[10px]">
          <div className="flex items-start gap-[4px]">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className="relative cursor-pointer bg-transparent border-none outline-none"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  fontWeight: activeTab === i ? 700 : 400,
                  lineHeight: "26px",
                  color: activeTab === i ? "#fff" : "rgba(255,255,255,0.6)",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  paddingBottom: 10,
                  paddingRight: i < tabs.length - 1 ? 25 : 0,
                  transition: "color 0.25s ease",
                }}
              >
                {tab.label}
                {activeTab === i && (
                  <motion.div
                    layoutId="tab-indicator-cats"
                    className="absolute bottom-0 left-0 h-[3px] rounded-full"
                    style={{
                      backgroundColor: "#d4a853",
                      right: i < tabs.length - 1 ? 25 : 0,
                      boxShadow: "0 0 10px rgba(212,168,83,0.5)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Floating white content card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-xl overflow-hidden"
          style={{
            backgroundColor: "rgba(255,255,255,0.97)",
            boxShadow:
              "0 30px 60px -15px rgba(0,0,0,0.5), 0 15px 35px -10px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 0 rgba(255,255,255,0.3)",
            padding: "20px",
          }}
        >
          {/* ═══ Content: 2×2 grid LEFT + featured RIGHT ═══ */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex"
            >
              {/* ── LEFT: 2×2 small article grid ── */}
              <div
                className="shrink-0 flex flex-col"
                style={{ width: "40.5%" }}
              >
                {/* Row 1 */}
                <div className="flex pb-[12px] border-b border-[#e2e2e2]">
                  {currentTab.smallArticles.slice(0, 2).map((article, i) => (
                    <MotionLink
                      key={`${activeTab}-r0-${i}`}
                      to={`/article/${article.id}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.06 }}
                      className="group/small flex flex-col cursor-pointer flex-1 relative"
                      style={{
                        paddingLeft: i === 1 ? 15 : 0,
                        paddingRight: i === 0 ? 16 : 0,
                        borderRight: i === 0 ? "1px solid #e2e2e2" : "none",
                      }}
                    >
                      {/* Image with hover overlay */}
                      <div
                        className="relative overflow-hidden shrink-0 w-full rounded-[8px]"
                        style={{ height: 175 }}
                      >
                        <img
                          src={article.image}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/small:scale-105"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover/small:bg-black/15 transition-all duration-400 pointer-events-none" />
                      </div>
                      {/* Title */}
                      <div className="pt-[6px] pr-[10px] pb-[4px]">
                        <p
                          className="group-hover/small:text-[#c41e2a] transition-colors"
                          style={{
                            fontFamily: "'Protest Strike', sans-serif",
                            fontSize: 15,
                            fontWeight: 400,
                            lineHeight: "22px",
                            color: "#333",
                            letterSpacing: "0.32px",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {article.title}
                        </p>
                      </div>
                      {/* Source + Date */}
                      <div className="mt-auto pt-[2px]">
                        <SourceDate source={article.source} date={article.date} />
                      </div>
                    </MotionLink>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="flex pt-[12px]">
                  {currentTab.smallArticles.slice(2, 4).map((article, i) => (
                    <MotionLink
                      key={`${activeTab}-r1-${i}`}
                      to={`/article/${article.id}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: (i + 2) * 0.06 }}
                      className="group/small flex flex-col cursor-pointer flex-1 relative"
                      style={{
                        paddingLeft: i === 1 ? 15 : 0,
                        paddingRight: i === 0 ? 16 : 0,
                        borderRight: i === 0 ? "1px solid #e2e2e2" : "none",
                      }}
                    >
                      {/* Image with hover overlay */}
                      <div
                        className="relative overflow-hidden shrink-0 w-full rounded-[8px]"
                        style={{ height: 175 }}
                      >
                        <img
                          src={article.image}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/small:scale-105"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover/small:bg-black/15 transition-all duration-400 pointer-events-none" />
                      </div>
                      {/* Title */}
                      <div className="pt-[6px] pr-[10px] pb-[4px]">
                        <p
                          className="group-hover/small:text-[#c41e2a] transition-colors"
                          style={{
                            fontFamily: "'Protest Strike', sans-serif",
                            fontSize: 15,
                            fontWeight: 400,
                            lineHeight: "22px",
                            color: "#333",
                            letterSpacing: "0.32px",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {article.title}
                        </p>
                      </div>
                      {/* Source + Date */}
                      <div className="mt-auto pt-[2px]">
                        <SourceDate source={article.source} date={article.date} />
                      </div>
                    </MotionLink>
                  ))}
                </div>
              </div>

              {/* ── Vertical divider ── */}
              <div
                className="shrink-0 mx-0"
                style={{ width: 1, backgroundColor: "#e2e2e2" }}
              />

              {/* ── RIGHT: Featured article ── */}
              <MotionLink
                to={`/article/${currentTab.featured.id}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="group/feat flex flex-col flex-1 cursor-pointer"
                style={{ paddingLeft: 15 }}
              >
                {/* Large image with hover overlay */}
                <div
                  className="relative overflow-hidden shrink-0 w-full rounded-[10px]"
                  style={{ height: 460 }}
                >
                  <img
                    src={currentTab.featured.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/feat:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover/feat:bg-black/15 transition-all duration-500 pointer-events-none" />
                </div>
                {/* Title */}
                <div className="pt-[10px] pr-[15px] pb-[6px]">
                  <p
                    className="group-hover/feat:text-[#c41e2a] transition-colors"
                    style={{
                      fontFamily: "'Protest Strike', sans-serif",
                      fontSize: 26,
                      fontWeight: 400,
                      lineHeight: "38px",
                      color: "#333",
                      letterSpacing: "0.32px",
                    }}
                  >
                    {currentTab.featured.title}
                  </p>
                </div>
                {/* Source + Date */}
                <div className="mt-auto">
                  <SourceDate
                    source={currentTab.featured.source}
                    date={currentTab.featured.date}
                    color="#777"
                  />
                </div>
              </MotionLink>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ═══ Đại hội XIII / XIV Section ═══ */}
    </div>
      <div className="relative z-10 w-full overflow-hidden bg-transparent">
        <div className="relative flex items-start max-w-[1360px] mx-auto" style={{ minHeight: 420 }}>
          {/* Left: Large decorative monument image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-[-80px] top-[18px] z-0 pointer-events-none"
            style={{ width: 580 }}
          >
            <img
              src={imgDaiHoiMonument}
              alt="Đại hội XIII"
              className="w-full h-auto object-contain"
              style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.15))" }}
            />
          </motion.div>

          {/* Right content area */}
          <div className="relative z-10 flex-1 flex flex-col gap-[50px] pt-[50px] pb-[30px]" style={{ marginLeft: 420 }}>
            {/* Headers: Đại hội XIII + Đại hội XIV side by side */}
            <div className="flex items-center justify-start">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-start overflow-hidden"
                style={{ width: 700 }}
              >
                <div className="flex items-center w-full gap-0">
                  <span
                    className="shrink-0 text-left pr-3"
                    style={{
                      fontFamily: "'Protest Strike', sans-serif",
                      fontSize: 30,
                      color: "#a30000",
                    }}
                  >
                    Nhìn lại những
                  </span>
                  <div className="flex-1 h-[1px] bg-[#d4a853]" />
                </div>
                <h3
                  className="text-left uppercase mt-1"
                  style={{
                    fontFamily: "'Protest Strike', sans-serif",
                    fontWeight: 400,
                    fontSize: 50,
                    lineHeight: "65px",
                    color: "#a30000",
                  }}
                >
                  Cột mốc đáng nhớ
                </h3>
                <div className="flex items-center justify-end w-full gap-0">
                  <div className="flex-1 h-[1px] bg-[#d4a853]" />
                </div>
              </motion.div>
            </div>

            {/* Article cards row */}
            <FilmstripMilestones />
          </div>
        </div>
      </div>
    </>
  );
}