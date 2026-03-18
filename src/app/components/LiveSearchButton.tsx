import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-fcfupgu55t";

// Mock searchable data
const searchableItems = [
  { id: "1", title: "Khai mạc Hội nghị lần thứ 15 Ban Chấp hành Trung ương Đảng khóa XIII", type: "article", url: "/article/1" },
  { id: "2", title: "Đẩy mạnh công tác tuyên truyền về xây dựng Đảng trong tình hình mới", type: "article", url: "/article/2" },
  { id: "3", title: "Tổng Bí thư Tô Lâm chủ trì phiên họp Bộ Chính trị về chiến lược phát triển kinh tế", type: "article", url: "/article/3" },
  { id: "4", title: "Hội nghị Trung ương lần thứ 3 khóa XIV: Xác định đột phá chiến lược", type: "article", url: "/article/4" },
  { id: "5", title: "Ban Chấp hành Trung ương ban hành Nghị quyết mới về xây dựng đội ngũ cán bộ", type: "article", url: "/article/5" },
  { id: "6", title: "Nghị quyết 57-NQ/TW về đột phá phát triển khoa học, công nghệ", type: "article", url: "/nghi-quyet-57" },
  { id: "7", title: "Nghị quyết về tăng cường công tác tuyên truyền, giáo dục lý luận chính trị", type: "document", url: "/document/1" },
  { id: "8", title: "Chỉ thị về đổi mới công tác dân vận trong tình hình mới", type: "document", url: "/document/2" },
  { id: "9", title: "Kết luận về tiếp tục thực hiện Nghị quyết Trung ương 5 khóa XII", type: "document", url: "/document/3" },
  { id: "10", title: "Hướng dẫn triển khai công tác tuyên truyền Nghị quyết Đại hội XIV", type: "document", url: "/document/5" },
  { id: "11", title: "Giới thiệu Ban Tuyên giáo và Dân vận", type: "page", url: "/gioi-thieu" },
  { id: "12", title: "Tin tức hoạt động", type: "page", url: "/tin-tuc" },
  { id: "13", title: "Văn bản mới", type: "page", url: "/van-ban" },
  { id: "14", title: "Xây dựng Đảng", type: "page", url: "/xay-dung-dang" },
  { id: "15", title: "Đại hội Đảng toàn quốc lần thứ XIV - Tầm nhìn và khát vọng", type: "article", url: "/article/6" },
  { id: "16", title: "Công tác dân vận góp phần xây dựng hệ thống chính trị vững mạnh", type: "article", url: "/article/7" },
];

const typeLabels: Record<string, string> = {
  article: "Bài viết",
  document: "Văn bản",
  page: "Trang",
};

const typeColors: Record<string, string> = {
  article: "#C41E2A",
  document: "#C0891F",
  page: "#2563eb",
};

export function LiveSearchButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof searchableItems>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const search = useCallback((q: string) => {
    if (!q.trim()) {
      setResults([]);
      setSelectedIndex(-1);
      return;
    }
    const lower = q.toLowerCase();
    const filtered = searchableItems.filter((item) =>
      item.title.toLowerCase().includes(lower)
    );
    setResults(filtered.slice(0, 8));
    setSelectedIndex(-1);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Calculate dropdown position when opening
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        buttonRef.current && buttonRef.current.contains(e.target as Node)
      ) return;
      if (
        containerRef.current && containerRef.current.contains(e.target as Node)
      ) return;
      setIsOpen(false);
      setQuery("");
      setResults([]);
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === "Enter" && selectedIndex >= 0 && results[selectedIndex]) {
      navigate(results[selectedIndex].url);
      setIsOpen(false);
      setQuery("");
      setResults([]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setQuery("");
      setResults([]);
    }
  };

  const goTo = (url: string) => {
    navigate(url);
    setIsOpen(false);
    setQuery("");
    setResults([]);
  };

  const highlightMatch = (text: string, q: string) => {
    if (!q.trim()) return text;
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <span style={{ background: "rgba(196, 30, 42, 0.15)", fontWeight: 600 }}>
          {text.slice(idx, idx + q.length)}
        </span>
        {text.slice(idx + q.length)}
      </>
    );
  };

  return (
    <div className="relative" style={{ zIndex: 999 }}>
      {/* Search icon button */}
      <div
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[rgba(229,141,144,0.5)] content-stretch flex items-start justify-center pb-[7px] pt-[8px] relative rounded-[20px] shrink-0 w-[36px] cursor-pointer hover:bg-[rgba(229,141,144,0.7)] transition-colors"
        data-name="Button"
      >
        <div className="content-stretch flex items-start relative shrink-0">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none">
              <div className="h-[21px] relative w-[20px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
                  <g id="Icon">
                    <path d={svgPaths.p2e834800} fill="var(--fill-0, white)" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search dropdown via Portal */}
      {isOpen && createPortal(
        <div
          ref={containerRef}
          style={{
            position: "fixed",
            top: dropdownPos.top,
            right: dropdownPos.right,
            width: 480,
            background: "#ffffff",
            borderRadius: 12,
            boxShadow: "0 12px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)",
            overflow: "hidden",
            animation: "searchDropIn 0.2s ease-out",
            zIndex: 10000,
          }}
        >
          {/* Input area */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 16px",
              borderBottom: "1px solid #f0f0f0",
              background: "#fafafa",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 20 21" fill="none" style={{ flexShrink: 0, opacity: 0.5 }}>
              <path d={svgPaths.p2e834800} fill="#333" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                search(e.target.value);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Tìm kiếm bài viết, văn bản..."
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: 15,
                fontFamily: "'Inter', sans-serif",
                color: "#1a1a1a",
              }}
            />
            {query && (
              <button
                onClick={() => {
                  setQuery("");
                  setResults([]);
                  inputRef.current?.focus();
                }}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 18,
                  color: "#999",
                  lineHeight: 1,
                  padding: "0 2px",
                }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Results */}
          <div style={{ maxHeight: 380, overflowY: "auto" }}>
            {query && results.length === 0 && (
              <div
                style={{
                  padding: "24px 16px",
                  textAlign: "center",
                  color: "#999",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                }}
              >
                Không tìm thấy kết quả cho "{query}"
              </div>
            )}

            {results.length > 0 && (
              <div style={{ padding: "6px 0" }}>
                {results.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => goTo(item.url)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      padding: "10px 16px",
                      cursor: "pointer",
                      background: selectedIndex === idx ? "#f5f5f5" : "transparent",
                      transition: "background 0.1s",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        marginTop: 3,
                        fontSize: 11,
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        color: typeColors[item.type] || "#666",
                        background: `${typeColors[item.type] || "#666"}15`,
                        padding: "2px 8px",
                        borderRadius: 4,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {typeLabels[item.type] || item.type}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontFamily: "'Inter', sans-serif",
                        color: "#1a1a1a",
                        lineHeight: 1.5,
                      }}
                    >
                      {highlightMatch(item.title, query)}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {!query && (
              <div style={{ padding: "12px 16px" }}>
                <div
                  style={{
                    fontSize: 12,
                    fontFamily: "'Inter', sans-serif",
                    color: "#999",
                    marginBottom: 8,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  Gợi ý tìm kiếm
                </div>
                {["Nghị quyết 57", "Xây dựng Đảng", "Tuyên truyền", "Dân vận"].map((tag) => (
                  <span
                    key={tag}
                    onClick={() => {
                      setQuery(tag);
                      search(tag);
                    }}
                    style={{
                      display: "inline-block",
                      padding: "5px 12px",
                      margin: "0 6px 6px 0",
                      background: "#f5f5f5",
                      borderRadius: 16,
                      fontSize: 13,
                      fontFamily: "'Inter', sans-serif",
                      color: "#555",
                      cursor: "pointer",
                      border: "1px solid #e5e5e5",
                      transition: "all 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.background = "#C41E2A";
                      (e.target as HTMLElement).style.color = "#fff";
                      (e.target as HTMLElement).style.borderColor = "#C41E2A";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.background = "#f5f5f5";
                      (e.target as HTMLElement).style.color = "#555";
                      (e.target as HTMLElement).style.borderColor = "#e5e5e5";
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Footer hint */}
          {results.length > 0 && (
            <div
              style={{
                borderTop: "1px solid #f0f0f0",
                padding: "8px 16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#fafafa",
              }}
            >
              <span style={{ fontSize: 12, color: "#999", fontFamily: "'Inter', sans-serif" }}>
                {results.length} kết quả
              </span>
              <span style={{ fontSize: 11, color: "#bbb", fontFamily: "'Inter', sans-serif" }}>
                ↑↓ di chuyển · Enter chọn · Esc đóng
              </span>
            </div>
          )}
        </div>,
        document.body
      )}

      <style>{`
        @keyframes searchDropIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}