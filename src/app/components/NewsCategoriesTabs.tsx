import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import svgArrow from "../../imports/svg-bp86new6yc";
import svgClock from "../../imports/svg-95m8p0kz4t";

// Featured images from original 4 columns
import imgXacDinh from "figma:asset/e8269cf208b581136071b28a838b8838e6eec6c5.png";
import imgVanPhong from "figma:asset/17e2dee254ab09edc385a7a7a363d0ba79b1fcb1.png";
import imgBoNhiem from "figma:asset/081a1acff60fac21d55db84118d38d21c625275b.png";
import imgCuTri from "figma:asset/37db94d609ac68b9501abb3daff7016238ab1647.png";

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

// ── Tab data ─────────────────────────────────────────

const tabs: TabData[] = [
  {
    label: "Tin mới",
    featured: {
      id: 100,
      image: imgXacDinh,
      title:
        "Tổng Bí thư chủ trì phiên họp đầu tiên của Tiểu ban Nhân sự Đại hội XIV của Đảng",
      source: "BTGĐV",
      date: "18/03/2026",
    },
    smallArticles: [
      {
        id: 101,
        image: IMG_MEETING,
        title: "Thủ tướng chủ trì phiên họp Chính phủ thường kỳ tháng 3/2026",
        source: "BTGĐV",
        date: "18/03/2026",
      },
      {
        id: 102,
        image: IMG_CONFERENCE,
        title: "Quốc hội khai mạc kỳ họp bất thường lần thứ 9, khóa XV",
        source: "BTGĐV",
        date: "17/03/2026",
      },
      {
        id: 103,
        image: IMG_EDUCATION,
        title: "Chính phủ ban hành Nghị định mới về quản lý đô thị thông minh",
        source: "BTGĐV",
        date: "17/03/2026",
      },
      {
        id: 104,
        image: IMG_HANOI,
        title: "Hà Nội đón nhận danh hiệu Thành phố sáng tạo của UNESCO năm 2026",
        source: "BTGĐV",
        date: "16/03/2026",
      },
    ],
  },
  {
    label: "Chính trị",
    featured: {
      id: 1,
      image: imgVanPhong,
      title:
        "Tổng Bí thư chủ trì Hội nghị toàn quốc về công tác xây dựng, chỉnh đốn Đảng năm 2026",
      source: "BTGĐV",
      date: "17/03/2026",
    },
    smallArticles: [
      {
        id: 1,
        image: IMG_MEETING,
        title:
          "Quốc hội thảo luận về dự thảo Luật sửa đổi, bổ sung một số điều của Luật Tổ chc Chính phủ",
        source: "BTGĐV",
        date: "16/03/2026",
      },
      {
        id: 2,
        image: IMG_CONFERENCE,
        title:
          "Thủ tướng chỉ đạo đẩy mạnh cải cách hành chính, nâng cao hiệu lực quản lý nhà nước",
        source: "BTGĐV",
        date: "15/03/2026",
      },
      {
        id: 3,
        image: IMG_EDUCATION,
        title:
          "Hội nghị Trung ương ban hành Nghị quyết về đổi mới phương thức lãnh đạo của Đảng",
        source: "BTGĐV",
        date: "14/03/2026",
      },
      {
        id: 4,
        image: IMG_HANOI,
        title:
          "Chủ tịch nước tiếp đoàn đại biểu người có công với cách mạng tiêu biểu toàn quốc",
        source: "BTGĐV",
        date: "13/03/2026",
      },
    ],
  },
  {
    label: "Thế giới",
    featured: {
      id: 2,
      image: imgBoNhiem,
      title:
        "Việt Nam tham dự Hội nghị Cấp cao ASEAN lần thứ 46, thúc đẩy hợp tác khu vực toàn diện",
      source: "BTGĐV",
      date: "16/03/2026",
    },
    smallArticles: [
      {
        id: 5,
        image: IMG_HCMC,
        title:
          "Liên Hợp Quốc thông qua nghị quyết về ứng phó biến đổi khí hậu toàn cầu",
        source: "BTGĐV",
        date: "15/03/2026",
      },
      {
        id: 6,
        image: IMG_CITY,
        title:
          "Quan hệ Việt Nam – Nhật Bản nâng tầm đối tác chiến lược toàn diện",
        source: "BTGĐV",
        date: "14/03/2026",
      },
      {
        id: 7,
        image: IMG_ELECTION,
        title:
          "Hội nghị G20 tập trung vào phục hồi kinh tế và phát triển bền vững",
        source: "BTGĐV",
        date: "13/03/2026",
      },
      {
        id: 8,
        image: IMG_CONFERENCE,
        title:
          "Diễn đàn kinh tế thế giới Davos 2026: Định hình tương lai hợp tác quốc tế",
        source: "BTGĐV",
        date: "12/03/2026",
      },
    ],
  },
  {
    label: "Kinh tế",
    featured: {
      id: 200,
      image: imgCuTri,
      title:
        "GDP quý I/2026 tăng trưởng 7,2%, vượt kỳ vọng nhờ xuất khẩu và đầu tư công",
      source: "BTGĐV",
      date: "17/03/2026",
    },
    smallArticles: [
      {
        id: 201,
        image: IMG_CITY,
        title:
          "Thị trường chứng khoán Việt Nam hướng tới nâng hạng thị trường mới nổi",
        source: "BTGĐV",
        date: "16/03/2026",
      },
      {
        id: 202,
        image: IMG_HCMC,
        title: "FDI vào Việt Nam đạt kỷ lục 5,8 tỷ USD trong quý đầu năm 2026",
        source: "BTGĐV",
        date: "15/03/2026",
      },
      {
        id: 203,
        image: IMG_CONFERENCE,
        title:
          "Ngân hàng Nhà nước giữ ổn định lãi suất, hỗ trợ doanh nghiệp phục hồi",
        source: "BTGĐV",
        date: "14/03/2026",
      },
      {
        id: 204,
        image: IMG_MEETING,
        title: "Đường sắt tốc độ cao Bắc – Nam khởi công đoạn Hà Nội – Vinh",
        source: "BTGĐV",
        date: "13/03/2026",
      },
    ],
  },
  {
    label: "QPAN",
    featured: {
      id: 300,
      image: imgXacDinh,
      title:
        "Bộ Quốc phòng tổ chức diễn tập phòng thủ dân sự kết hợp cứu hộ cứu nạn quy mô lớn",
      source: "BTGĐV",
      date: "17/03/2026",
    },
    smallArticles: [
      {
        id: 301,
        image: IMG_MEETING,
        title:
          "Bộ Công an triển khai Đề án 06 giai đoạn 2, nâng cao hiệu quả quản lý dân cư",
        source: "BTGĐV",
        date: "16/03/2026",
      },
      {
        id: 302,
        image: IMG_ELECTION,
        title:
          "Hải quân Việt Nam tham gia diễn tập đa phương ASEAN tại Biển Đông",
        source: "BTGĐV",
        date: "15/03/2026",
      },
      {
        id: 303,
        image: IMG_CONFERENCE,
        title:
          "Tăng cường hợp tác quốc phòng Việt Nam – Hàn Quốc trong lĩnh vực công nghiệp",
        source: "BTGĐV",
        date: "14/03/2026",
      },
      {
        id: 304,
        image: IMG_HANOI,
        title:
          "Công an TP.HCM triệt phá đường dây lừa đảo công nghệ cao xuyên quốc gia",
        source: "BTGĐV",
        date: "13/03/2026",
      },
    ],
  },
  {
    label: "Xã hội",
    featured: {
      id: 3,
      image: imgBoNhiem,
      title:
        "Triển khai chương trình mục tiêu quốc gia giảm nghèo bền vững giai đoạn 2026–2030",
      source: "BTGĐV",
      date: "17/03/2026",
    },
    smallArticles: [
      {
        id: 9,
        image: IMG_EDUCATION,
        title:
          "Bộ Giáo dục công bố phương án thi tốt nghiệp THPT năm 2026 với nhiều đổi mới",
        source: "BTGĐV",
        date: "15/03/2026",
      },
      {
        id: 10,
        image: IMG_MEETING,
        title:
          "Tăng cường bảo hiểm y tế toàn dân, nâng cao chất lượng khám chữa bệnh tuyến cơ sở",
        source: "BTGĐV",
        date: "14/03/2026",
      },
      {
        id: 11,
        image: IMG_CITY,
        title:
          "Hà Nội triển khai dự án nhà ở xã hội quy mô lớn cho công nhân lao động",
        source: "BTGĐV",
        date: "13/03/2026",
      },
      {
        id: 12,
        image: IMG_HANOI,
        title:
          "Đề án chuyển đổi số trong lĩnh vực y tế, giáo dục đạt nhiều kết quả tích cực",
        source: "BTGĐV",
        date: "12/03/2026",
      },
    ],
  },
  {
    label: "Pháp luật",
    featured: {
      id: 400,
      image: imgVanPhong,
      title:
        "Quốc hội thông qua Luật Đt đai sửa đổi, tạo hành lang pháp lý mới cho phát triển",
      source: "BTGĐV",
      date: "16/03/2026",
    },
    smallArticles: [
      {
        id: 401,
        image: IMG_CONFERENCE,
        title: "Tòa án nhân dân tối cao hướng dẫn áp dụng Bộ luật Hình sự sửa đổi",
        source: "BTGĐV",
        date: "15/03/2026",
      },
      {
        id: 402,
        image: IMG_MEETING,
        title:
          "Bộ Tư pháp đẩy mạnh cải cách thủ tục hành chính trong lĩnh vực hộ tịch",
        source: "BTGĐV",
        date: "14/03/2026",
      },
      {
        id: 403,
        image: IMG_ELECTION,
        title: "Xét xử đại án tham nhũng: Nghiêm minh nhưng đảm bảo nhân đạo",
        source: "BTGĐV",
        date: "13/03/2026",
      },
      {
        id: 404,
        image: IMG_HANOI,
        title:
          "Luật Nhà ở sửa đổi chính thức có hiệu lực, tác động lớn đến thị trường BĐS",
        source: "BTGĐV",
        date: "12/03/2026",
      },
    ],
  },
  {
    label: "Văn hóa",
    featured: {
      id: 500,
      image: imgCuTri,
      title:
        "Festival Huế 2026 thu hút hơn 2 triệu lượt khách, khẳng định thương hiệu văn hóa quốc gia",
      source: "BTGĐV",
      date: "17/03/2026",
    },
    smallArticles: [
      {
        id: 501,
        image: IMG_HCMC,
        title:
          "Di sản văn hóa phi vật thể Việt Nam được UNESCO vinh danh lần thứ 16",
        source: "BTGĐV",
        date: "16/03/2026",
      },
      {
        id: 502,
        image: IMG_CITY,
        title:
          "Phát triển cng nghiệp văn hóa: Mục tiêu đóng góp 7% GDP vào năm 2030",
        source: "BTGĐV",
        date: "15/03/2026",
      },
      {
        id: 503,
        image: IMG_EDUCATION,
        title:
          "Liên hoan phim quốc tế Hà Nội lần thứ VII thu hút 500 tác phẩm tham dự",
        source: "BTGĐV",
        date: "14/03/2026",
      },
      {
        id: 504,
        image: IMG_CONFERENCE,
        title:
          "Bảo tồn và phát huy giá trị văn hóa các dân tộc thiểu số vùng Tây Bắc",
        source: "BTGĐV",
        date: "13/03/2026",
      },
    ],
  },
  {
    label: "Giáo dục",
    featured: {
      id: 600,
      image: imgXacDinh,
      title:
        "Bộ Giáo dục công bố Chương trình giáo dục phổ thông mới, áp dụng từ năm học 2026–2027",
      source: "BTGĐV",
      date: "17/03/2026",
    },
    smallArticles: [
      {
        id: 601,
        image: IMG_EDUCATION,
        title: "Đại học Quốc gia Hà Nội lọt top 300 đại học tốt nhất châu Á",
        source: "BTGĐV",
        date: "16/03/2026",
      },
      {
        id: 602,
        image: IMG_CONFERENCE,
        title: "Triển khai chương trình học bổng du học cho 1.000 sinh viên xuất sắc",
        source: "BTGĐV",
        date: "15/03/2026",
      },
      {
        id: 603,
        image: IMG_MEETING,
        title: "Tăng cường giáo dục STEM trong trường phổ thông từ năm học mới",
        source: "BTGĐV",
        date: "14/03/2026",
      },
      {
        id: 604,
        image: IMG_HANOI,
        title: "Chính sách hỗ trợ giáo viên vùng khó khăn được nâng mức trợ cấp",
        source: "BTGĐV",
        date: "13/03/2026",
      },
    ],
  },
  {
    label: "KHCN",
    featured: {
      id: 700,
      image: imgVanPhong,
      title:
        "Việt Nam ra mắt vệ tinh quan sát trái đất VNREDSat-2, nâng cao năng lực giám sát",
      source: "BTGĐV",
      date: "16/03/2026",
    },
    smallArticles: [
      {
        id: 701,
        image: IMG_CITY,
        title: "Trung tâm đổi mới sáng tạo quốc gia NIC đón 200 startup công nghệ",
        source: "BTGĐV",
        date: "15/03/2026",
      },
      {
        id: 702,
        image: IMG_CONFERENCE,
        title:
          "Ứng dụng AI trong y tế: Việt Nam phát triển hệ thống chẩn đoán hình ảnh",
        source: "BTGĐV",
        date: "14/03/2026",
      },
      {
        id: 703,
        image: IMG_HCMC,
        title: "Khu công nghệ cao TP.HCM thu hút 3 tỷ USD đầu tư bán dẫn",
        source: "BTGĐV",
        date: "13/03/2026",
      },
      {
        id: 704,
        image: IMG_MEETING,
        title: "Chương trình chuyển đổi số quốc gia đạt 85% mục tiêu giai đoạn I",
        source: "BTGĐV",
        date: "12/03/2026",
      },
    ],
  },
  {
    label: "Thể thao",
    featured: {
      id: 800,
      image: imgBoNhiem,
      title:
        "Đội tuyển Việt Nam giành vé dự vòng loại cuối cùng World Cup 2030 khu vực châu Á",
      source: "BTGĐV",
      date: "17/03/2026",
    },
    smallArticles: [
      {
        id: 801,
        image: IMG_HCMC,
        title: "SEA Games 34: Việt Nam đặt mục tiêu top 2 toàn đoàn tại Philippines",
        source: "BTGĐV",
        date: "16/03/2026",
      },
      {
        id: 802,
        image: IMG_ELECTION,
        title: "VĐV Nguyễn Thị Oanh phá kỷ lục châu Á ở nội dung 1500m nữ",
        source: "BTGĐV",
        date: "15/03/2026",
      },
      {
        id: 803,
        image: IMG_CONFERENCE,
        title: "V-League 2026 áp dụng công nghệ VAR toàn diện từ vòng 1",
        source: "BTGĐV",
        date: "14/03/2026",
      },
      {
        id: 804,
        image: IMG_CITY,
        title: "Hà Nội đăng cai tổ chức giải Marathon quốc tế lần thứ V",
        source: "BTGĐV",
        date: "13/03/2026",
      },
    ],
  },
];

// ── Clock Icon ────────────────────────────────────────

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

// Create motion components
const MotionLink = motion.create(Link);

// ── Main Component ────────────────────────────────────

export function NewsCategoriesTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const currentTab = tabs[activeTab];

  const scrollTabs = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 200;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
    <div className="relative w-full overflow-hidden rounded-xl px-3 lg:px-0" style={{ maxWidth: 1360, margin: "24px auto 0" }}>
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
      <div className="relative z-10 py-6 sm:py-8 px-3 sm:px-6 max-w-[1320px] mx-auto">
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
              fontSize: "clamp(28px, 5vw, 44px)",
              lineHeight: 1.3,
              textShadow: "3px 2px 8px rgba(0,0,0,0.5)",
            }}
          >TIN TỨC</h2>
          <div className="w-[160px] h-[2px] bg-gradient-to-r from-transparent via-[#d4a853] to-transparent mt-3" />
        </motion.div>

        {/* ── Tab Bar (on dark bg) ── */}
        <div className="relative flex items-center justify-center pb-[10px]">
          {/* Left arrow */}
          <button
            onClick={() => scrollTabs("left")}
            className="shrink-0 flex items-center justify-center cursor-pointer border-none outline-none mr-2 transition-all duration-300 hover:scale-110 hover:brightness-125"
            style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #d4a853, #c0891f)", boxShadow: "0 2px 6px rgba(212,168,83,0.5)" }}
            aria-label="Cuộn trái"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Scrollable tabs container */}
          <div
            ref={scrollRef}
            className="flex items-start gap-[4px] overflow-x-auto"
            style={{
              maxWidth: 900,
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>{`[data-tab-scroll]::-webkit-scrollbar { display: none; }`}</style>
            <div data-tab-scroll="" className="contents" />
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className="relative cursor-pointer bg-transparent border-none outline-none shrink-0"
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

          {/* Right arrow */}
          <button
            onClick={() => scrollTabs("right")}
            className="shrink-0 flex items-center justify-center cursor-pointer border-none outline-none ml-2 transition-all duration-300 hover:scale-110 hover:brightness-125"
            style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #d4a853, #c0891f)", boxShadow: "0 2px 6px rgba(212,168,83,0.5)" }}
            aria-label="Cuộn phải"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
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
              className="flex flex-col md:flex-row"
            >
              {/* ── LEFT: Featured article ── */}
              <MotionLink
                to={`/article/${currentTab.featured.id}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="group/feat flex flex-col flex-1 cursor-pointer mb-4 md:mb-0 md:pr-[15px]"
              >
                {/* Large image with hover overlay */}
                <div
                  className="relative overflow-hidden shrink-0 w-full rounded-[10px]"
                  style={{ height: "clamp(260px, 40vw, 460px)" }}
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
                      fontSize: "clamp(18px, 3vw, 26px)",
                      fontWeight: 400,
                      lineHeight: "1.4",
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

              {/* ── Vertical divider ── */}
              <div
                className="shrink-0 mx-0 hidden md:block"
                style={{ width: 1, backgroundColor: "#e2e2e2" }}
              />

              {/* ── RIGHT: 2×2 small article grid ── */}
              <div
                className="shrink-0 flex flex-col w-full md:w-[40.5%] md:pl-[15px]"
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
                        style={{ height: "clamp(120px, 20vw, 175px)" }}
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
                        style={{ height: "clamp(120px, 20vw, 175px)" }}
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
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ═══ Đại hội XIII / XIV Section ═══ */}
    </div>
    </>
  );
}