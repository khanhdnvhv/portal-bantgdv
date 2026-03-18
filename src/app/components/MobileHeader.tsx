import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Search, Home } from "lucide-react";
import { LiveSearchButton } from "./LiveSearchButton";
import imgLogo from "figma:asset/a1b448eec962bfc9fdad215f53d6e6f7c17d8634.png";

const menuItems = [
  { label: "Trang chủ", to: "/", icon: true },
  { label: "Tin tức", to: "/tin-tuc" },
  { label: "Đa phương tiện", to: "/da-phuong-tien" },
  { label: "Thư viện số", to: "/thu-vien-so" },
  { label: "Thông tin đối ngoại", to: "/thong-tin-doi-ngoai" },
  { label: "Báo cáo viên", to: "/bao-cao-vien" },
  { label: "Lý luận chính trị", to: "/ly-luan-chinh-tri" },
  { label: "Tuyên giáo dân vận", to: "/tuyen-giao-dan-van" },
];

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Sticky on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`lg:hidden sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
      {/* Top bar */}
      <div
        className="bg-white flex items-center justify-between px-3 py-2"
        style={{ borderBottom: "1px solid #eee" }}
      >
        <Link to="/" className="flex items-center gap-2 no-underline">
          <img src={imgLogo} alt="Logo" className="w-[40px] h-[40px] object-contain" />
          <div className="flex flex-col">
            <span
              className="text-[#c0891f] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, lineHeight: "14px" }}
            >
              Cổng thông tin điện tử
            </span>
            <span
              className="text-[#db0713] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 800, lineHeight: "16px" }}
            >
              Tuyên giáo và Dân vận
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <LiveSearchButton />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#db0713] text-white border-none cursor-pointer"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-[#db0713]"
          >
            <nav className="flex flex-col">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="no-underline flex items-center gap-2 px-4 py-3 text-white transition-colors hover:bg-[#a01018]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: location.pathname === item.to ? 700 : 500,
                    borderBottom: "1px solid rgba(255,255,255,0.15)",
                    backgroundColor: location.pathname === item.to ? "rgba(0,0,0,0.15)" : "transparent",
                  }}
                >
                  {item.icon && <Home size={16} />}
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}