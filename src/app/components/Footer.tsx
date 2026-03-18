import imgBackground from "figma:asset/b27ec5d37cff4c48aed7c27a316a50622e9ec94d.png";
import imgLogo from "figma:asset/a1b448eec962bfc9fdad215f53d6e6f7c17d8634.png";

export function Footer() {
  return (
    <footer className="relative w-full">
      {/* Background layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#fffafa] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            className="absolute h-full left-0 max-w-none top-0 w-full object-cover opacity-35"
            src={imgBackground}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative pt-8 px-4 sm:px-6" style={{ maxWidth: 1360, margin: "0 auto" }}>
        {/* Main footer content */}
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center gap-4 pb-2.5 px-0 sm:px-3 w-full">
            {/* Logo & Title - matching header style */}
            <div className="flex items-center justify-center gap-6">
              <div className="h-[70px] w-[70px] shrink-0 relative overflow-hidden rounded-sm">
                <img alt="Logo" className="absolute inset-0 w-full h-full object-cover" src={imgLogo} />
              </div>
              <div className="flex flex-col items-center">
                <span
                  className="text-[#db0713] uppercase text-center"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 20,
                    fontWeight: 700,
                    lineHeight: "28px",
                  }}
                >
                  Hệ thống thông tin
                </span>
                <span
                  className="text-[#db0713] uppercase text-center"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 28,
                    fontWeight: 800,
                    lineHeight: "40px",
                  }}
                >
                  Tuyên giáo và Dân vận
                </span>
              </div>
            </div>

            {/* Address & Email */}
            <div className="flex flex-col items-center gap-2.5 text-center">
              <p
                className="text-[#101828]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  lineHeight: "24px",
                }}
              >
                Trụ sở: 6C Hoàng Diệu, Ba Đình, Hà Nội
              </p>
              <p
                className="text-[#101828]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  lineHeight: "24px",
                }}
              >
                Điện thoại: 080.44511 &nbsp;|&nbsp; Fax: 080.45416
              </p>
              <p
                className="text-[#101828]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  lineHeight: "24px",
                }}
              >
                E-mail: tuyengiaovadanvan@btgdvtw.dcs.vn
              </p>
            </div>
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
            © Bản quyền thuộc về Ban Tuyên giáo và Dân vận Trung ương.
          </p>
        </div>
      </div>
    </footer>
  );
}