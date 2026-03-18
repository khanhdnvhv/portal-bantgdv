import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ChevronRight,
  ChevronDown,
  FileText,
  Globe,
  Shield,
  CreditCard,
  Landmark,
  Building2,
  Users,
  Search,
  ExternalLink,
} from "lucide-react";

// ── Figma images ──
import imgCongDVCQG from "figma:asset/7422e3c6f14680d7b2054e930e2f18443243aea0.png";
import imgHopBao from "figma:asset/7df829f48d5e24823ae74f8b32eb5739bae3f933.png";
import imgXDCPDT from "figma:asset/3683caa222b591d39aa9e3474ee225cbb78d36ee.png";
import imgCDDH from "figma:asset/4ce292be32c497954ac6046bc081ff7ef5bf0d7e.png";
import imgKTXH from "figma:asset/05bc774598153cf44e0cbd2469ff9e975c18f991.png";
import imgChinhSachMoi from "figma:asset/161aa3a92550bdafb20a78d6f7d7ccb48c3d8a74.png";
import imgTaQuangBuu from "figma:asset/793996950f28432c10706987eff08d1767f70185.png";
import imgBoDamBMay from "figma:asset/5094cc54ea7eab7f7666211680ace591e8bd1570.png";
import imgItem from "figma:asset/89c1dafe4a837c19a84a4237404b2af249e54aa8.png";
import imgBHXH from "figma:asset/abeac0de486ff442acdcb80a325b298861340f5d.png";
import imgPhaSan from "figma:asset/faf729e707745ff738f8449b08865f75d4b4dd04.png";
import imgDoanhNghiep from "figma:asset/f5beed3b25768bf176dec1fb04652ccc393def7e.png";
import imgGiaiDap from "figma:asset/6232e5d9f9c1e348ee4a074ce547d71a254acc53.png";
import imgHaNoi from "figma:asset/6ec4bca6d7f46c8da53a89d0e6ac85a6f720abff.png";
import imgHCM from "figma:asset/e8bf16c507b88b4fd44ba6bf85122e799f8230c5.png";
import imgCanhTranh from "figma:asset/b0d05404522423650d0c6240b42418b92aef8167.png";
import imgTiengChuong from "figma:asset/7ddd0bf1cd78cda1019284e1bbcb03e11d748849.png";

// ── Shared components ──
const CONTENT_MAX = 1320;

function SectionHeading({ title, borderColor = "#da251c" }: { title: string; borderColor?: string }) {
  return (
    <div className="py-[14px] border-t-2 w-full" style={{ borderColor }}>
      <h2
        style={{
          fontFamily: "'Merriweather', serif",
          fontSize: 17,
          fontWeight: 700,
          color: "#031739",
          textTransform: "uppercase",
          lineHeight: "26px",
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function BulletLink({ children, bold = false }: { children: string; bold?: boolean }) {
  return (
    <Link
      to="#"
      className="flex items-start gap-2 py-[6px] no-underline hover:text-[#C41E2A] transition-colors"
    >
      <span className="text-[#da251c] mt-[2px] shrink-0" style={{ fontSize: 8 }}>■</span>
      <span
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: 15,
          fontWeight: bold ? 600 : 400,
          lineHeight: "22px",
          color: "#031739",
        }}
      >
        {children}
      </span>
    </Link>
  );
}

// ═══════════════════════════════════════════════════════
// 1. HỆ THỐNG VĂN BẢN
// ═══════════════════════════════════════════════════════
const VAN_BAN = [
  { code: "2285/VPCP-CN", date: "17/03/2026", title: "V/v rà soát, đầu tư nâng cấp hoàn thiện các tuyến đường bộ cao tốc đã đầu tư theo quy mô phân kỳ" },
  { code: "452/QĐ-TTg", date: "17/03/2026", title: "Ban hành Kế hoạch triển khai thi hành Luật Bảo vệ bí mật nhà nước" },
  { code: "453/QĐ-TTg", date: "17/03/2026", title: "Về bổ sung, điều chỉnh, bổ nhiệm ông Tạ Anh Tuấn giữ chức Thứ trưởng Bộ Tài chính" },
];

const DICH_VU_CONG = [
  { icon: Globe, label: "Dịch vụ công trực tuyến" },
  { icon: FileText, label: "Thủ tục hành chính" },
  { icon: CreditCard, label: "Phản ánh kiến nghị" },
];

function HeThongVanBan() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading title="Hệ thống văn bản" />
      <div className="flex flex-col lg:flex-row gap-5 mt-3">
        {/* Table */}
        <div className="flex-1 min-w-0">
          <table className="w-full border-collapse" style={{ fontFamily: "'Roboto', sans-serif" }}>
            <thead>
              <tr className="bg-[#f6f6f6]">
                <th className="text-center py-3 px-4 border border-[#eee] w-[151px]" style={{ fontSize: 14, fontWeight: 400, color: "#3b4e68", lineHeight: "16px" }}>
                  Số ký hiệu<br />Ngày ban hành
                </th>
                <th className="text-center py-3 px-4 border border-[#eee]" style={{ fontSize: 14, fontWeight: 400, color: "#3b4e68" }}>
                  Trích yếu
                </th>
              </tr>
            </thead>
            <tbody>
              {VAN_BAN.map((vb, i) => (
                <tr key={i} className="border-b border-[#eee] hover:bg-[#fafafa] transition-colors">
                  <td className="py-3 px-4 border-r border-[#eee] align-top">
                    <Link to="#" className="no-underline" style={{ fontSize: 15, color: "#0084f3", lineHeight: "18px" }}>
                      {vb.code}
                    </Link>
                    <div style={{ fontSize: 15, color: "#182940", marginTop: 6 }}>{vb.date}</div>
                  </td>
                  <td className="py-3 px-4 align-top">
                    <Link to="#" className="no-underline hover:text-[#C41E2A] transition-colors" style={{ fontSize: 15, color: "#031739", lineHeight: "22px" }}>
                      {vb.title}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link
            to="#"
            className="flex items-center gap-1 mt-3 no-underline hover:text-[#C41E2A] transition-colors"
            style={{ fontFamily: "'Roboto', sans-serif", fontSize: 14, color: "#0084f3" }}
          >
            Xem thêm <ChevronRight size={14} />
          </Link>
        </div>

        {/* Sidebar: CỔNG DỊCH VỤ CÔNG QUỐC GIA */}
        <div className="w-full lg:w-[320px] shrink-0">
          <div className="bg-[#003082] rounded overflow-hidden">
            <div className="p-4 text-center">
              <img src={imgCongDVCQG} alt="Cổng dịch vụ công quốc gia" className="w-full h-auto max-h-[100px] object-contain" />
            </div>
            <div className="bg-white mx-2 mb-2 rounded">
              {DICH_VU_CONG.map((dv, i) => (
                <Link
                  key={i}
                  to="#"
                  className="flex items-center gap-3 py-3 px-4 no-underline hover:bg-gray-50 transition-colors border-b border-[#eee] last:border-0"
                >
                  <dv.icon size={20} className="text-[#003082] shrink-0" />
                  <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: 14, color: "#182940" }}>
                    {dv.label}
                  </span>
                  <ChevronRight size={14} className="text-gray-400 ml-auto" />
                </Link>
              ))}
            </div>
          </div>
          {/* Service icons grid */}
          <div className="grid grid-cols-2 gap-2 mt-3">
            {[
              { img: imgHopBao, alt: "Họp báo Chính phủ" },
              { img: imgXDCPDT, alt: "Xây dựng Chính phủ điện tử" },
              { img: imgCDDH, alt: "Thông tin chỉ đạo, điều hành" },
              { img: imgKTXH, alt: "Thông tin kinh tế - xã hội" },
            ].map((item, i) => (
              <Link key={i} to="#" className="block overflow-hidden border border-[#eee] rounded hover:shadow-md transition-shadow">
                <img src={item.img} alt={item.alt} className="w-full h-auto object-cover" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════
// 2. CÔNG BÁO NƯỚC CHXHCN VIỆT NAM
// ═══════════════════════════════════════════════════════
const CONG_BAO = [
  { code: "Công báo số 151-152", date: "17/03/2026", title: "Nghị định số 63/2025/NĐ-CP quy định chi tiết một số điều và biện pháp thi hành Luật Quản lý, sử dụng vũ khí, vật liệu nổ và công cụ hỗ trợ..." },
  { code: "Công báo số 149-150", date: "17/03/2026", title: "Văn bản hợp nhất số 07/VBHN/BXD ngày 7/3/2026: Quy định đào tạo, bồi dưỡng kiến thức chuyên môn, nghiệp vụ quản lý vận hành nhà chung cư..." },
  { code: "Công báo số 147-148", date: "14/03/2026", title: "Văn bản hợp nhất số 67/VBHN/BXD ngày/3/2026: Quy định bồi thường, hỗ trợ các đợn vị Luật bổ sung các quy phạm pháp luật. Lao động và Giấy chứng nhận Lao động hải ngoại" },
];

function CongBao() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mt-8"
    >
      <SectionHeading title="Công báo nước CHXHCN Việt Nam" />
      <div className="mt-1 mb-3 flex items-center gap-3">
        <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: 14, fontWeight: 700, color: "#182940" }}>
          Tháng 3/2026
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ fontFamily: "'Roboto', sans-serif" }}>
          <thead>
            <tr className="bg-[#f6f6f6]">
              <th className="text-left py-3 px-4 border border-[#eee]" style={{ fontSize: 14, fontWeight: 700, color: "#031739", textTransform: "uppercase" }}>
                Văn bản hành chính đăng công báo
              </th>
            </tr>
          </thead>
          <tbody>
            {CONG_BAO.map((cb, i) => (
              <tr key={i} className="border-b border-[#eee] hover:bg-[#fafafa] transition-colors">
                <td className="py-3 px-4">
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <div className="shrink-0 sm:w-[200px]">
                      <Link to="#" className="no-underline" style={{ fontSize: 14, color: "#0084f3" }}>{cb.code}</Link>
                      <div style={{ fontSize: 13, color: "#62748d", marginTop: 2 }}>{cb.date}</div>
                    </div>
                    <Link to="#" className="no-underline hover:text-[#C41E2A] transition-colors mt-1 sm:mt-0" style={{ fontSize: 15, color: "#031739", lineHeight: "22px" }}>
                      {cb.title}
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="#" className="flex items-center gap-1 mt-3 no-underline" style={{ fontFamily: "'Roboto', sans-serif", fontSize: 14, color: "#0084f3" }}>
        Xem thêm <ChevronRight size={14} />
      </Link>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════
// 3. XÂY DỰNG CHÍNH SÁCH
// ═══════════════════════════════════════════════════════
function XayDungChinhSach() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="mt-8"
    >
      <SectionHeading title="Xây dựng chính sách" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
        {/* CHÍNH SÁCH MỚI */}
        <div>
          <h3
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              color: "#182940",
              textTransform: "uppercase",
              borderBottom: "1px solid #ddd",
              paddingBottom: 10,
              marginBottom: 12,
            }}
          >
            Chính sách mới
          </h3>
          <div className="relative w-full h-[160px] overflow-hidden rounded mb-3">
            <img src={imgChinhSachMoi} alt="" className="w-full h-full object-cover" />
          </div>
          <Link
            to="#"
            className="no-underline hover:text-[#C41E2A] transition-colors block"
            style={{ fontFamily: "'Merriweather', serif", fontSize: 15, fontWeight: 700, lineHeight: "23px", color: "#182940" }}
          >
            Quy định mới về miễn, giảm tiền thuê đất đối với một số trường hợp
          </Link>
          <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 13, lineHeight: "20px", color: "#62748d", marginTop: 6 }}>
            (Chinhphu.vn) - Bộ Tài chính ban hành Thông tư số 11/TT-BTC về các biện pháp...
          </p>
          <div className="mt-3 flex flex-col gap-1">
            <BulletLink>Trình tự, thủ tục cấp phép nhập, xuất khẩu giống Đồng sản</BulletLink>
            <BulletLink>Nhiều chính sách mới trong Quý đối với ngành thương mại phố tăng phần năm 2026</BulletLink>
          </div>
        </div>

        {/* THÀNH VIÊN CHÍNH PHỦ */}
        <div>
          <h3
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              color: "#182940",
              textTransform: "uppercase",
              borderBottom: "1px solid #ddd",
              paddingBottom: 10,
              marginBottom: 12,
            }}
          >
            Thành viên chính phủ
          </h3>
          <div className="relative w-full h-[160px] overflow-hidden rounded mb-3">
            <img src={imgItem} alt="" className="w-full h-full object-cover" />
          </div>
          <Link
            to="#"
            className="no-underline hover:text-[#C41E2A] transition-colors block"
            style={{ fontFamily: "'Merriweather', serif", fontSize: 15, fontWeight: 700, lineHeight: "23px", color: "#182940" }}
          >
            Đề xuất về 2 phương án tăng lương hưu, trợ cấp bảo hiểm xã hội từ 1/7/2026
          </Link>
          <div className="mt-3 flex flex-col gap-1">
            <BulletLink>Đẩy mạnh quỹ đầu tư phát triển và hầu đòn đầu tư kín hành hàng hóa, cung cấp điện</BulletLink>
          </div>
        </div>

        {/* Đề xuất tiêu chuẩn xét tặng Giải thưởng Tạ Quang Bửu */}
        <div>
          <h3
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              color: "#182940",
              textTransform: "uppercase",
              borderBottom: "1px solid #ddd",
              paddingBottom: 10,
              marginBottom: 12,
            }}
          >
            Đề xuất tiêu chuẩn nổi bật
          </h3>
          <div className="relative w-full h-[160px] overflow-hidden rounded mb-3">
            <img src={imgTaQuangBuu} alt="" className="w-full h-full object-cover" />
          </div>
          <Link
            to="#"
            className="no-underline hover:text-[#C41E2A] transition-colors block"
            style={{ fontFamily: "'Merriweather', serif", fontSize: 15, fontWeight: 700, lineHeight: "23px", color: "#182940" }}
          >
            Đề xuất tiêu chuẩn xét tặng Giải thưởng Tạ Quang Bửu
          </Link>
          <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 13, lineHeight: "20px", color: "#62748d", marginTop: 6 }}>
            (Chinhphu.vn) - Bộ Khoa học và Công nghệ đang lấy ý kiến góp ý...
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════
// 4. GÓP Ý DỰ THẢO
// ═══════════════════════════════════════════════════════
const GOP_Y = [
  "Dự thảo Thông tư quy định chi tiết về hướng dẫn viên du lịch, soi cấp đổi, bổ sung thẻ hướng dẫn viên, cấp giấy phép kinh doanh du lịch, du lịch cộng đồng, khu du lịch...",
  "Dự thảo Thông tư quy định chi tiết về hướng dẫn viên du lịch, soi cấp đổi, bổ sung thẻ hướng dẫn viên, cấp giấy phép kinh doanh du lịch...",
  "Dự thảo Thông tư quy định chi tiết về quan hệ xác lập quỹ và phát huy, sản xuất, sản xuất, kinh doanh và tuyển dụng tuyên phát luật, hỗ trợ tuyên nghiệp...",
  "Dự thảo Thông tư quy định chi tiết về xây dựng, thành lập và tuyển dụng hành chính để thương mại, ngân hàng, kể từ quan điểm thương mại và đại gia quan - Các nguyên khoa và Phát triển và kinh tế hóa cách 2025 - 2035...",
];

function GopYDuThao() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-8"
    >
      <SectionHeading title="Góp ý dự thảo" />
      <div className="mt-3 flex flex-col">
        {GOP_Y.map((text, i) => (
          <div key={i} className="py-3 border-b border-[#eee]">
            <BulletLink>{text}</BulletLink>
          </div>
        ))}
      </div>
      <Link to="#" className="flex items-center gap-1 mt-3 no-underline" style={{ fontFamily: "'Roboto', sans-serif", fontSize: 14, color: "#0084f3" }}>
        Xem thêm <ChevronRight size={14} />
      </Link>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════
// 5. BỘ, CƠ QUAN CHÍNH PHỦ + TỈNH, THÀNH PHỐ
// ═══════════════════════════════════════════════════════
function BoCoQuanChinhPhu() {
  return (
    <div className="flex-1 min-w-0">
      <SectionHeading title="Bộ, cơ quan chính phủ" />
      <div className="mt-4 flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <div className="relative w-full h-[160px] overflow-hidden rounded mb-3">
            <img src={imgTaQuangBuu} alt="" className="w-full h-full object-cover" />
          </div>
          <Link to="#" className="no-underline hover:text-[#C41E2A] transition-colors block" style={{ fontFamily: "'Merriweather', serif", fontSize: 15, fontWeight: 700, lineHeight: "23px", color: "#182940" }}>
            Đề xuất tiêu chuẩn xét tặng Giải thưởng Tạ Quang Bửu
          </Link>
          <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 13, color: "#62748d", marginTop: 6, lineHeight: "20px" }}>
            (Chinhphu.vn) - Bộ Khoa học và Công nghệ lấy ý kiến đối với dự thảo...
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col gap-1">
          <BulletLink>Quy định mới về miễn, giảm tiền thuê đất đối với một số trường hợp</BulletLink>
          <BulletLink>Dự kiến quy định mới về hạn đòn đầu tư kín bảo hàng hóa, cung cấp điện và vụ</BulletLink>
          <BulletLink>Bổ nhiệm ông Tạ Anh Tuấn giữ chức Thứ trưởng Bộ Tài chính</BulletLink>
          <BulletLink>Mạnh dạn dào tạo bồi dưỡng, coi trọng và cần trọng kỹ sở cán bộ và cỡ sở</BulletLink>
        </div>
      </div>
    </div>
  );
}

function TinhThanhPho() {
  return (
    <div className="flex-1 min-w-0">
      <SectionHeading title="Tỉnh, thành phố" />
      <div className="mt-4 flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <div className="relative w-full h-[160px] overflow-hidden rounded mb-3">
            <img src={imgBoDamBMay} alt="" className="w-full h-full object-cover" />
          </div>
          <Link to="#" className="no-underline hover:text-[#C41E2A] transition-colors block" style={{ fontFamily: "'Merriweather', serif", fontSize: 15, fontWeight: 700, lineHeight: "23px", color: "#182940" }}>
            Bảo đảm bộ máy chính quyền địa phương nhiệm kỳ 2026–2031 đi vào hoạt động chậm nhất ngày 1/4/2026
          </Link>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col gap-1">
          <BulletLink>Triển khai Chương trình cải cách hành chính tại các tỉnh thành</BulletLink>
          <BulletLink>Lâm đồng xử lý các quyết định Cao tốc Đa Nẵng (Quận Đắc Nông)</BulletLink>
          <BulletLink>Thành lập các trường mở tự ấn đường đường bộ cán Vinh - Thanh Hóa</BulletLink>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 6. THÔNG TIN CÁC BỘ + CÁC TỈNH (Link grids)
// ═══════════════════════════════════════════════════════
const BO_CO_QUAN = {
  "Các bộ và cơ quan ngang bộ": ["Bộ Quốc phòng", "Bộ Nội vụ, Thể thao và Du lịch", "Bộ Công an", "Bộ Xây dựng và Cong nặng", "Bộ Ngoại giao", "Bộ Giáo dục và Đào tạo", "Bộ Công nghệ", "Bộ Kế hoạch và Tài nguyên"],
  "Các cơ quan thuộc Chính phủ": ["Bộ Nông nghiệp", "Bộ Tài chính"],
};

const TINH_TP = {
  "Thành phố Hà Nội": ["Bình Dương", "Tây Ninh", "TP Hồ Chí Minh", "Tay Do Mới", "Đà Nẵng", "Hải Phòng"],
  "Thành phố Đà Nẵng": ["Bắc Giang", "Long An", "Cần Thơ"],
};

function ThongTinCacBo() {
  return (
    <div className="flex-1 min-w-0">
      <SectionHeading title="Thông tin các bộ, cơ quan chính phủ" />
      <div className="mt-3">
        {Object.entries(BO_CO_QUAN).map(([group, items]) => (
          <div key={group} className="mb-3">
            <div
              className="py-2 px-3 bg-[#f6f6f6] rounded-t"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: 13, fontWeight: 700, color: "#182940", textTransform: "uppercase" }}
            >
              {group}
            </div>
            <div className="grid grid-cols-2 gap-0">
              {items.map((item, i) => (
                <Link
                  key={i}
                  to="#"
                  className="py-2 px-3 no-underline hover:text-[#C41E2A] hover:bg-[#fafafa] transition-colors border-b border-[#eee]"
                  style={{ fontFamily: "'Roboto', sans-serif", fontSize: 14, color: "#0084f3" }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ThongTinCacTinh() {
  return (
    <div className="flex-1 min-w-0">
      <SectionHeading title="Thông tin các tỉnh, thành phố" />
      <div className="mt-3">
        {Object.entries(TINH_TP).map(([group, items]) => (
          <div key={group} className="mb-3">
            <div
              className="py-2 px-3 bg-[#f6f6f6] rounded-t"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: 13, fontWeight: 700, color: "#182940", textTransform: "uppercase" }}
            >
              {group}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-0">
              {items.map((item, i) => (
                <Link
                  key={i}
                  to="#"
                  className="py-2 px-3 no-underline hover:text-[#C41E2A] hover:bg-[#fafafa] transition-colors border-b border-[#eee]"
                  style={{ fontFamily: "'Roboto', sans-serif", fontSize: 14, color: "#0084f3" }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 7. CHÍNH PHỦ VỚI CÔNG DÂN + DOANH NGHIỆP
// ═══════════════════════════════════════════════════════
function ChinhPhuVoiCongDan() {
  return (
    <div className="flex-1 min-w-0">
      <SectionHeading title="Chính phủ với công dân" />
      <div className="mt-4">
        <div className="relative w-full h-[160px] overflow-hidden rounded mb-3">
          <img src={imgBHXH} alt="" className="w-full h-full object-cover" />
        </div>
        <Link to="#" className="no-underline hover:text-[#C41E2A] transition-colors block" style={{ fontFamily: "'Merriweather', serif", fontSize: 15, fontWeight: 700, lineHeight: "23px", color: "#182940" }}>
          Thiếu thời gian đóng BHXH trên VssID, liên hệ cơ quan nào?
        </Link>
        <div className="mt-3 flex flex-col gap-1">
          <BulletLink>Các cơ sở y tế làm giám định về việc hành chức</BulletLink>
          <BulletLink>Cách tính số dập thay sự trong thống kê nhận lực</BulletLink>
          <BulletLink>Chính sách tiêu dùng kinh tế hội đại gia cung thầm quyến</BulletLink>
        </div>
      </div>
    </div>
  );
}

function ChinhPhuVoiDoanhNghiep() {
  return (
    <div className="flex-1 min-w-0">
      <SectionHeading title="Chính phủ với doanh nghiệp" />
      <div className="mt-4">
        <div className="relative w-full h-[160px] overflow-hidden rounded mb-3">
          <img src={imgPhaSan} alt="" className="w-full h-full object-cover" />
        </div>
        <Link to="#" className="no-underline hover:text-[#C41E2A] transition-colors block" style={{ fontFamily: "'Merriweather', serif", fontSize: 15, fontWeight: 700, lineHeight: "23px", color: "#182940" }}>
          Quy định về thủ tục thi hành quyết định tuyên bố doanh nghiệp, hợp tác xã phá sản
        </Link>
        <div className="mt-3 flex flex-col gap-1">
          <BulletLink>Ban hành Chương trình hành động của thực hiện Nghị quyết 73-NQ/TW về phát triển kinh tế nhiều cấu</BulletLink>
          <BulletLink>Biến đổi cơ sở lý thực một ĐN thước thực hiện chính sách hội, công</BulletLink>
          <BulletLink>Chính sách đối với người lao động hội hóa doanh nghiệp</BulletLink>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 8. CÁC TRANG THÀNH PHẦN (bottom sub-portals)
// ═══════════════════════════════════════════════════════
const SUB_PORTALS = [
  { img: imgDoanhNghiep, label: "Trang thông tin doanh nghiệp" },
  { img: imgGiaiDap, label: "Giải đáp chính sách Online" },
  { img: imgHaNoi, label: "Chuyên trang Thủ đô Hà Nội" },
  { img: imgHCM, label: "Chuyên trang Thành phố Hồ Chí Minh" },
  { img: imgCanhTranh, label: "Diễn đàn Cạnh tranh quốc gia" },
  { img: imgTiengChuong, label: "Tiếng chuông" },
];

function CacTrangThanhPhan() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-8"
    >
      <SectionHeading title="Các trang thành phần" />
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {SUB_PORTALS.map((p, i) => (
          <Link
            key={i}
            to="#"
            className="flex flex-col items-center gap-2 p-3 rounded border border-[#eee] hover:shadow-md hover:border-[#ccc] transition-all no-underline group"
          >
            <div className="w-full h-[50px] flex items-center justify-center overflow-hidden">
              <img src={p.img} alt={p.label} className="max-w-full max-h-full object-contain" />
            </div>
            <span
              className="text-center group-hover:text-[#C41E2A] transition-colors"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: "#182940",
                lineHeight: "15px",
              }}
            >
              {p.label}
            </span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════
// MAIN EXPORT
// ═══════════════════════════════════════════════════════
export function GovInfoSections() {
  return (
    <div className="w-full px-4 pb-10" style={{ maxWidth: CONTENT_MAX, margin: "0 auto" }}>
      <HeThongVanBan />
      <CongBao />
      <XayDungChinhSach />
      <GopYDuThao />

      {/* Bộ + Tỉnh side by side */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-8 flex flex-col lg:flex-row gap-8"
      >
        <BoCoQuanChinhPhu />
        <TinhThanhPho />
      </motion.div>

      {/* Thông tin các bộ + tỉnh side by side */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-8 flex flex-col lg:flex-row gap-8"
      >
        <ThongTinCacBo />
        <ThongTinCacTinh />
      </motion.div>

      {/* Chính phủ với công dân + doanh nghiệp */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-8 flex flex-col lg:flex-row gap-8"
      >
        <ChinhPhuVoiCongDan />
        <ChinhPhuVoiDoanhNghiep />
      </motion.div>

      <CacTrangThanhPhan />
    </div>
  );
}
