import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";

const MotionLink = motion.create(Link);

// Leader portrait images
import imgLeaderHead from "figma:asset/946d2cc7f80da0d513b0c3c5ddd062bc6e165b1f.png";
import imgLeader1 from "figma:asset/c4a08a3040b1f26ec084b5ca94d7fe5d850de0c1.png";
import imgLeader2 from "figma:asset/5c33fea94ac9a91154dc31cc837ac43a13246038.png";
import imgLeader3 from "figma:asset/14014738289fad25004c8c9a0b1e226fa1ed0e08.png";
import imgLeader4 from "figma:asset/51ba6fc55d95397c456e9429d6da24523b72191a.png";
import imgLeader5 from "figma:asset/c7132adc8e22e55bdea45ba237b6876a7fde292e.png";
import imgLeader6 from "figma:asset/8570baf431a87b6b19489371bc9fd1c85b889798.png";
import imgLeader7 from "figma:asset/f94a54b920cf1705633d5fc0267259282d6cfc0b.png";
import imgLeader8 from "figma:asset/55198c5299e28cc060bf3a747aecb1213b2beb37.png";

const HERO_BG_URL = "https://images.unsplash.com/photo-1625737251459-017c301457d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBnb2xkJTIwZWxlZ2FudCUyMGZvcm1hbCUyMGN1cnRhaW4lMjBzdGFnZXxlbnwxfHx8fDE3NzM2MDA0Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

interface LeaderInfo {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  image: string;
  accent: string;
  isHead: boolean;
}

const leaders: LeaderInfo[] = [
  {
    id: "1",
    name: "Trịnh Văn Quyết",
    title: "Trưởng ban",
    subtitle: "Ủy viên Bộ Chính trị, Bí thư Trung ương Đảng",
    image: imgLeaderHead,
    accent: "#c41e2a",
    isHead: true,
  },
  {
    id: "2",
    name: "Phạm Tất Thắng",
    title: "Phó trưởng ban",
    subtitle: "Ủy viên Trung ương Đảng",
    image: imgLeader1,
    accent: "#1259a0",
    isHead: false,
  },
  {
    id: "3",
    name: "Ngô Đông Hải",
    title: "Phó trưởng ban",
    subtitle: "Ủy viên Trung ương Đảng",
    image: imgLeader2,
    accent: "#1259a0",
    isHead: false,
  },
  {
    id: "4",
    name: "Nguyễn Quang Đức",
    title: "Phó trưởng ban",
    subtitle: "Ủy viên Trung ương Đảng",
    image: imgLeader3,
    accent: "#1259a0",
    isHead: false,
  },
  {
    id: "5",
    name: "Trần Thanh Lâm",
    title: "Phó trưởng ban",
    subtitle: "Ủy viên Trung ương Đảng",
    image: imgLeader4,
    accent: "#1259a0",
    isHead: false,
  },
  {
    id: "6",
    name: "Triệu Tài Vinh",
    title: "Phó trưởng ban",
    subtitle: "",
    image: imgLeader5,
    accent: "#1259a0",
    isHead: false,
  },
  {
    id: "7",
    name: "Phan Xuân Thuỷ",
    title: "Phó trưởng ban",
    subtitle: "",
    image: imgLeader6,
    accent: "#1259a0",
    isHead: false,
  },
  {
    id: "8",
    name: "Vũ Thanh Mai",
    title: "Phó trưởng ban",
    subtitle: "",
    image: imgLeader7,
    accent: "#1259a0",
    isHead: false,
  },
  {
    id: "9",
    name: "Đinh Thị Mai",
    title: "Phó trưởng ban",
    subtitle: "",
    image: imgLeader8,
    accent: "#1259a0",
    isHead: false,
  },
];

// ── Head Leader Card ────────────────────────────────────

function HeadLeaderCard({ leader }: { leader: LeaderInfo }) {
  return (
    <motion.div
      key={leader.name}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex-shrink-0"
    >
      <Link to={`/leader/${leader.id}`} className="block">
        <motion.div
          whileHover={{ scale: 1.03, y: -10, rotateX: 2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative overflow-hidden rounded-2xl cursor-pointer bg-white"
          style={{
            width: 340,
            transformStyle: "preserve-3d",
            boxShadow: `0 30px 60px -15px rgba(0,0,0,0.6),
              0 18px 36px -10px ${leader.accent}50,
              0 8px 16px -4px rgba(0,0,0,0.3),
              0 0 0 1px rgba(255,255,255,0.08),
              0 0 0 3px ${leader.accent}35,
              inset 0 1px 0 0 rgba(255,255,255,0.2)`,
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-[5px] z-10"
            style={{
              background: `linear-gradient(90deg, ${leader.accent}, #d4a853, ${leader.accent})`,
              boxShadow: `0 2px 12px ${leader.accent}60`,
            }}
          />
          <div className="relative w-full overflow-hidden" style={{ height: 400 }}>
            <img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-top" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/60 to-transparent" />
          </div>
          <div className="relative z-10 p-6 text-center bg-white" style={{ boxShadow: "inset 0 1px 0 0 rgba(0,0,0,0.04)" }}>
            <p className="uppercase tracking-[0.12em] mb-1.5 text-[14px]" style={{ fontFamily: "'Lora', serif", fontWeight: 600, color: leader.accent }}>
              {leader.title}
            </p>
            <p className="text-[#1a1a1a] text-[22px]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
              Đồng chí {leader.name}
            </p>
            {leader.subtitle && (
              <p className="text-[#666] text-[13px] mt-2" style={{ fontFamily: "'Lora', serif" }}>
                {leader.subtitle}
              </p>
            )}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

// ── Deputy Leader Card ──────────────────────────────────

function DeputyLeaderCard({ leader, row, index }: { leader: LeaderInfo; row: number; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (row * 4 + index) * 0.08 }}
      className="relative"
      style={{ zIndex: isHovered ? 20 : 1 }}
    >
      <Link to={`/leader/${leader.id}`} className="block">
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.08, y: -12, rotateX: 3 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative cursor-pointer overflow-hidden rounded-xl flex flex-col items-center bg-white"
          style={{
            width: 220,
            transformStyle: "preserve-3d",
            boxShadow: isHovered
              ? `0 28px 50px -12px rgba(0,0,0,0.6), 0 14px 28px -7px ${leader.accent}50, 0 6px 12px -3px rgba(0,0,0,0.25), 0 0 0 2.5px ${leader.accent}60, inset 0 1px 0 0 rgba(255,255,255,0.25)`
              : `0 14px 32px -10px rgba(0,0,0,0.5), 0 8px 18px -6px rgba(0,0,0,0.25), 0 3px 8px -2px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 0 rgba(255,255,255,0.15)`,
          }}
        >
          {isHovered && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              className="absolute top-0 left-0 h-[3px] z-10"
              style={{ backgroundColor: leader.accent, boxShadow: `0 3px 12px ${leader.accent}70` }}
            />
          )}
          <div className="relative w-full overflow-hidden" style={{ height: 180 }}>
            <motion.img
              src={leader.image}
              alt={leader.name}
              className="w-full h-full object-cover object-top"
              animate={{ scale: isHovered ? 1.1 : 1, filter: isHovered ? "none" : "grayscale(10%)" }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/50 to-transparent" />
          </div>
          <div className="relative z-10 py-4 px-3 text-center bg-white w-full" style={{ boxShadow: "inset 0 1px 0 0 rgba(0,0,0,0.03)" }}>
            <p className="uppercase tracking-[0.06em] text-[10px] mb-1" style={{ fontFamily: "'Lora', serif", fontWeight: 500, color: leader.accent }}>
              {leader.title}
            </p>
            <p className="text-[#1a1a1a] text-[14px]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
              {leader.name}
            </p>
            {leader.subtitle && (
              <p className="text-[#888] text-[10px] mt-1" style={{ fontFamily: "'Lora', serif" }}>
                {leader.subtitle}
              </p>
            )}
          </div>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 rounded-xl border-2 pointer-events-none"
              style={{ borderColor: leader.accent, boxShadow: `0 0 25px ${leader.accent}40, inset 0 0 25px ${leader.accent}20` }}
            />
          )}
        </motion.div>
      </Link>
    </motion.div>
  );
}

// ── Main Export ──────────────────────────────────────────

export function HeroLeaders() {
  const headLeader = leaders.find((l) => l.isHead)!;
  const deputies = leaders.filter((l) => !l.isHead);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_BG_URL} alt="Hội trường Đại hội Đảng" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(180,20,30,0.25) 0%, rgba(140,10,20,0.15) 50%, rgba(100,0,10,0.3) 100%)" }} />
      </div>

      {/* Content */}
    </div>
  );
}