import imgBackground from "figma:asset/b27ec5d37cff4c48aed7c27a316a50622e9ec94d.png";
import imgLogo from "figma:asset/8c2368a33e17d2fd5c3f2943522a29ef905597e1.png";

const COLUMN_1 = [
  "Trưởng Ban Tuyên giáo TW",
  "Các Phó Trưởng Ban",
  "Trưởng Ban Dân vận TW",
  "Các Phó Trưởng Ban Dân vận",
  "Giới thiệu chung",
];

const COLUMN_2 = [
  "Vụ Tuyên truyền",
  "Vụ Giáo dục lý luận",
  "Vụ Văn hóa - Văn nghệ",
  "Vụ Báo chí - Xuất bản",
  "Vụ Tôn giáo",
];

const COLUMN_3 = [
  "Công tác dân vận",
  "Mặt trận Tổ quốc",
  "Các đoàn thể chính trị - xã hội",
  "Thi đua - Khen thưởng",
  "Văn bản mới",
];

const COLUMN_4 = [
  "Tin hoạt động",
  "Nghị quyết Đại hội XIV",
  "Học tập và làm theo Bác",
  "Văn bản chỉ đạo",
];

export function Footer() {
  return (
    <footer className="relative w-full">
      {/* Background layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#fffafa] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            className="absolute h-full left-0 max-w-none top-0 w-full object-cover"
            src={imgBackground}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative pt-8 px-3" style={{ maxWidth: 1360, margin: "0 auto" }}>
        {/* Main footer content */}
        <div className="flex items-start w-full">
          {/* Left column - Logo & Info */}
          <div className="flex flex-col gap-4 pb-2.5 px-3 shrink-0" style={{ width: 400 }}>
            {/* Logo & Title */}
            <div className="flex items-center">
              <div className="h-[50px] w-[76.27px] shrink-0 relative">
                <img alt="Logo" className="absolute inset-0 w-full h-full" src={imgLogo} />
              </div>
              <div className="flex flex-col pl-4">
                <span
                  className="text-[#c0891f] uppercase"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    lineHeight: "24px",
                  }}
                >
                  Cổng thông tin điện tử
                </span>
                <span
                  className="text-[#db0713] uppercase"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 18,
                    fontWeight: 800,
                    lineHeight: "22px",
                  }}
                >
                  Ban Tuyên giáo TW
                </span>
                <span
                  className="text-[#db0713] uppercase"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 18,
                    fontWeight: 800,
                    lineHeight: "22px",
                  }}
                >
                  Ban Dân vận TW
                </span>
              </div>
            </div>

            {/* Combobox */}
            <div className="relative w-full">
              <div
                className="bg-white rounded-lg h-9 flex items-center px-2.5 pr-8 w-full"
                style={{
                  border: "1px solid #9d9d9d",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 16,
                  lineHeight: "22.86px",
                  color: "#101828",
                }}
              >
                -- Chọn liên kết --
              </div>
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2">
                <div
                  className="w-0 h-0"
                  style={{
                    borderLeft: "4px solid transparent",
                    borderRight: "4px solid transparent",
                    borderTop: "5px solid #888",
                  }}
                />
              </div>
            </div>

            {/* Address & Email */}
            <div className="flex flex-col gap-2.5">
              <p
                className="text-[#101828]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  lineHeight: "24px",
                }}
              >
                Trụ sở: 1A Hùng Vương, Ba Đình, Hà Nội
              </p>
              <p
                className="text-[#101828]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  lineHeight: "24px",
                }}
              >
                E-mail: congdcsvn@vptw.dcs.vn
              </p>
            </div>
          </div>

          {/* Right columns */}
          <div className="flex items-start flex-1">
            {/* Column 1 */}
            <FooterColumn items={COLUMN_1} width={243} />
            {/* Column 2 */}
            <FooterColumn items={COLUMN_2} width={240} px={4} />
            {/* Column 3 */}
            <FooterColumn items={COLUMN_3} width={192} />
            {/* Column 4 */}
            <FooterColumn items={COLUMN_4} width={288} px={4} gap={12} />
          </div>
        </div>

        {/* Bottom border & copyright */}
        <div className="relative flex flex-col items-center pt-[17px] pb-4">
          <div
            className="absolute top-0 left-0 right-0 h-0"
            style={{ borderTop: "1px solid #ffe5e5" }}
          />
          <p
            className="text-[#676767] text-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              lineHeight: "24px",
            }}
          >
            © Bản quyền thuộc Cục Chuyển đổi số - Cơ yếu.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  items,
  width,
  px = 0,
  gap = 16,
}: {
  items: string[];
  width: number;
  px?: number;
  gap?: number;
}) {
  return (
    <div
      className="flex flex-col items-start shrink-0 pb-6"
      style={{ width, paddingLeft: px, paddingRight: px }}
    >
      {items.map((text, i) => (
        <div key={i} className="w-full" style={{ paddingBottom: gap === 12 ? 12 : 16 }}>
          <a
            href="#"
            className="block px-2 text-[#101828] hover:text-[#c41e2a] transition-colors duration-200"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              lineHeight: "24px",
            }}
          >
            {text}
          </a>
        </div>
      ))}
    </div>
  );
}