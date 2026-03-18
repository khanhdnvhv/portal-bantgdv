import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  GraduationCap,
  Lightbulb,
  Shield,
  X,
  BookOpen,
  Building2,
  Landmark,
  Scale,
  MessageSquarePlus,
  AlertCircle,
  Bot,
  BarChart3,
  IdCard,
  Settings2,
  FileText,
  ShieldCheck,
  Mic,
  BookMarked,
  ChevronRight,
  Layers,
} from "lucide-react";

interface UtilityItem {
  icon: React.ReactNode;
  label: string;
  href?: string;
}

interface UtilityGroup {
  id: string;
  icon: React.ReactNode;
  label: string;
  color: string;
  colorEnd: string;
  bgLight: string;
  items: UtilityItem[];
}

const groups: UtilityGroup[] = [
  {
    id: "hoc-tap",
    icon: <GraduationCap className="w-5 h-5" />,
    label: "Học tập số",
    color: "#C41E2A",
    colorEnd: "#8b1a1a",
    bgLight: "rgba(196,30,42,0.06)",
    items: [
      { icon: <BookOpen className="w-4 h-4" />, label: "Học tập số Ban TG&DV" },
      { icon: <Building2 className="w-4 h-4" />, label: "Nền tảng học tập số Bộ Công an" },
      { icon: <Shield className="w-4 h-4" />, label: "Nền tảng học tập số Bộ Quốc phòng" },
      { icon: <Landmark className="w-4 h-4" />, label: "Nền tảng học tập số Quốc hội" },
    ],
  },
  {
    id: "sang-kien",
    icon: <Lightbulb className="w-5 h-5" />,
    label: "Sáng kiến, góp ý",
    color: "#C0891F",
    colorEnd: "#8b6914",
    bgLight: "rgba(192,137,31,0.06)",
    items: [
      { icon: <MessageSquarePlus className="w-4 h-4" />, label: "Góp ý ứng dụng" },
      { icon: <AlertCircle className="w-4 h-4" />, label: "Phản ánh kiến nghị" },
      { icon: <Bot className="w-4 h-4" />, label: "Trợ lý ảo" },
    ],
  },
  {
    id: "nghiep-vu",
    icon: <Scale className="w-5 h-5" />,
    label: "Nghiệp vụ Đảng",
    color: "#7B1F1F",
    colorEnd: "#4a1111",
    bgLight: "rgba(123,31,31,0.06)",
    items: [
      { icon: <BarChart3 className="w-4 h-4" />, label: "Thăm dò dư luận" },
      { icon: <IdCard className="w-4 h-4" />, label: "Sổ tay đảng viên" },
      { icon: <Settings2 className="w-4 h-4" />, label: "Điều hành tác nghiệp" },
      { icon: <FileText className="w-4 h-4" />, label: "Văn bản hướng dẫn, chỉ đạo" },
      { icon: <ShieldCheck className="w-4 h-4" />, label: "Bảo vệ nền tảng tư tưởng của Đảng" },
      { icon: <Mic className="w-4 h-4" />, label: "Báo cáo viên" },
      { icon: <BookMarked className="w-4 h-4" />, label: "Lý luận chính trị" },
    ],
  },
];

export function FloatingUtilities() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setExpandedGroup(null);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [isOpen]);

  useEffect(() => {
    function handle(e: KeyboardEvent) {
      if (e.key === "Escape") { setIsOpen(false); setExpandedGroup(null); }
    }
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 10 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="absolute bottom-[62px] right-0 w-[300px] sm:w-[340px]"
            style={{
              transformOrigin: "bottom right",
              borderRadius: 16,
              background: "#ffffff",
              boxShadow: "0 20px 60px -12px rgba(0,0,0,0.25), 0 8px 24px -8px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              className="px-5 py-4 flex items-center justify-between"
              style={{ background: "linear-gradient(135deg, #C41E2A 0%, #8b1a1a 60%, #C0891F 100%)" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)" }}>
                  <Layers className="w-4.5 h-4.5 text-white" />
                </div>
                <div>
                  <h3 className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 15, lineHeight: "20px" }}>Tiện ích</h3>
                  <p className="text-white/60" style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, lineHeight: "14px" }}>Truy cập nhanh các công cụ</p>
                </div>
              </div>
              <button onClick={() => { setIsOpen(false); setExpandedGroup(null); }} className="w-7 h-7 rounded-full flex items-center justify-center cursor-pointer border-none" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)" }}>
                <X className="w-3.5 h-3.5 text-white/80" />
              </button>
            </div>

            {/* Groups */}
            <div className="p-3 space-y-1.5 max-h-[55vh] overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
              {groups.map((group, gi) => {
                const isExpanded = expandedGroup === group.id;
                return (
                  <motion.div key={group.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: gi * 0.06 }}>
                    <button
                      onClick={() => setExpandedGroup(isExpanded ? null : group.id)}
                      className="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl cursor-pointer border-none transition-all duration-200"
                      style={{ background: isExpanded ? `linear-gradient(135deg, ${group.color}10 0%, ${group.colorEnd}08 100%)` : "transparent" }}
                      onMouseEnter={(e) => { if (!isExpanded) e.currentTarget.style.background = "rgba(0,0,0,0.03)"; }}
                      onMouseLeave={(e) => { if (!isExpanded) e.currentTarget.style.background = "transparent"; }}
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200" style={{ background: isExpanded ? `linear-gradient(135deg, ${group.color}, ${group.colorEnd})` : group.bgLight, color: isExpanded ? "#fff" : group.color, boxShadow: isExpanded ? `0 4px 12px ${group.color}30` : "none" }}>
                        {group.icon}
                      </div>
                      <span className="flex-1 text-left" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13.5, fontWeight: isExpanded ? 700 : 600, color: isExpanded ? group.color : "#333", letterSpacing: "0.01em" }}>{group.label}</span>
                      <span className="text-[11px] shrink-0 mr-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: isExpanded ? group.color : "#aaa" }}>{group.items.length}</span>
                      <motion.div animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronRight className="w-3.5 h-3.5" style={{ color: isExpanded ? group.color : "#bbb" }} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="overflow-hidden">
                          <div className="pl-4 pr-1 pb-1 pt-1">
                            {group.items.map((item, ii) => (
                              <motion.a key={ii} href={item.href || "#"} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: ii * 0.04 }} className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg cursor-pointer no-underline transition-all duration-150 group/item" style={{ background: "transparent" }} onMouseEnter={(e) => { e.currentTarget.style.background = group.bgLight; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }} onClick={(e) => e.preventDefault()}>
                                <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0" style={{ background: `${group.color}0D`, color: group.color }}>{item.icon}</div>
                                <span className="flex-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, fontWeight: 500, color: "#444", lineHeight: "16px" }}>{item.label}</span>
                                <ChevronRight className="w-3 h-3 opacity-0 group-hover/item:opacity-60 transition-opacity" style={{ color: group.color }} />
                              </motion.a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {gi < groups.length - 1 && !isExpanded && (
                      <div className="mx-4 h-px" style={{ background: "rgba(0,0,0,0.05)" }} />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="px-5 py-2.5 text-center" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.03) 100%)", borderTop: "1px solid rgba(0,0,0,0.04)" }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10.5, color: "#aaa", letterSpacing: "0.02em" }}>Ban Tuyên giáo và Dân vận Trung ương</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => { setIsOpen(!isOpen); if (isOpen) setExpandedGroup(null); }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center cursor-pointer border-none outline-none"
        style={{
          background: isOpen ? "linear-gradient(135deg, #333 0%, #1a1a1a 100%)" : "linear-gradient(135deg, #C41E2A 0%, #8b1a1a 60%, #C0891F 100%)",
          boxShadow: isOpen ? "0 6px 20px rgba(0,0,0,0.3)" : "0 6px 24px rgba(196,30,42,0.4), 0 2px 8px rgba(0,0,0,0.1)",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-5.5 h-5.5 text-white" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <Layers className="w-5.5 h-5.5 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full animate-ping pointer-events-none" style={{ background: "rgba(196,30,42,0.25)", animationDuration: "2.5s" }} />
        )}

        {/* Badge */}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center pointer-events-none" style={{ background: "linear-gradient(135deg, #C0891F, #d4a853)", boxShadow: "0 2px 6px rgba(192,137,31,0.5)" }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, fontWeight: 700, color: "#fff" }}>{groups.length}</span>
          </span>
        )}
      </motion.button>
    </div>
  );
}
