import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import svgPaths from "../../imports/svg-jkwxz7y8yy";

// Create a motion-enabled Link component
const MotionLink = motion.create(Link);

// Reuse the same images from the Figma HeaderBottom component
import imgA1Bnd88525050JpgWebp from "figma:asset/5b879d20627781a267f25334f47725b9b1325a38.png";
import imgPhamLinhJpgWebp from "figma:asset/a299edb4780536bd21db27602130e18438a86398.png";
import imgDotPhaChienLuocKhcnCoverJpgWebp from "figma:asset/a5e7b24690cf0e132811cfa5466c5a05871940ff.png";
import imgBnd77388383JpgWebp from "figma:asset/a362b515171b1364f7afc2993de2b7dd2cc0e840.png";
import imgBnd7754JpgWebp from "figma:asset/06551051baeacb9bc38cb95f3cfefc60058e7918.png";

// Hot news slideshow images
import imgHotLehoi from "figma:asset/ffec645979a0cec0f2d971c4b3576b2060c34a1d.png";
import imgHotTolam from "figma:asset/128fddc487232c7529009042de914e433b865d98.png";
import imgHotBaucu from "figma:asset/6b719e091cb1ae6d3c3b43c519034fbb4381851d.png";
import imgHotBaucu2 from "figma:asset/14887d3af6d2ed3953e654a771d53fe62ec4515f.png";
import imgHotConcert from "figma:asset/33740906578b9554ba1973e8ec2e05875f7ccd43.png";

// ── Data ──────────────────────────────────────────────

const mainArticle = {
  id: "article-main-1",
  title:
    "Làm rõ cả ưu điểm và hạn chế trong thể chế hóa các chủ trương lãnh đạo của Đảng",
  summary:
    "Chiều 6/3, tại Hà Nội, Tổng Bí thư Tô Lâm, Trưởng Đoàn Kiểm tra, giám sát số 10 của Bộ Chính trị, Ban Bí thư chủ trì Hội nghị công bố quyết định và triển khai kế hoạch kiểm tra, giám sát của Bộ Chính trị, Ban Bí thư năm 2026 đối với Ban Thường vụ Đảng ủy Quốc hội.",
  image: imgA1Bnd88525050JpgWebp,
  category: "CHÍNH TRỊ",
};

const middleArticles = [
  {
    id: "article-mid-1",
    title:
      "Phát biểu của Tổng Bí thư Tô Lâm tại Hội nghị toàn quốc quán triệt và triển khai thực hiện Nghị quyết",
    image: imgBnd77388383JpgWebp,
    category: "ĐẠI HỘI XIV",
  },
  {
    id: "article-mid-2",
    title:
      "Nhiệm vụ trọng tâm về khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số",
    image: imgDotPhaChienLuocKhcnCoverJpgWebp,
    category: "KHOA HỌC",
  },
];

const freshStories = [
  {
    id: "article-fresh-1",
    title:
      "Góp ý dự thảo Chương trình hành động của Mặt trận Tổ quốc Việt Nam",
    category: "MẶT TRẬN",
    date: "14/03/2026",
    exclusive: false,
  },
  {
    id: "article-fresh-2",
    title:
      "Hội nghị toàn quốc quán triệt, triển khai thực hiện Nghị quyết số 79-NQ/TW",
    category: "BỘ CHÍNH TRỊ",
    date: "14/03/2026",
    exclusive: true,
  },
  {
    id: "article-fresh-3",
    title:
      "Đổi mới phương thức lãnh đạo của Đảng đối với hệ thống chính trị trong giai đoạn mới",
    category: "XÂY DỰNG ĐẢNG",
    date: "13/03/2026",
    exclusive: false,
  },
  {
    id: "article-fresh-4",
    title:
      "Phát triển kinh tế số và chuyển đổi số quốc gia theo hướng bền vững",
    category: "KINH TẾ",
    date: "13/03/2026",
    exclusive: false,
  },
  {
    id: "article-fresh-5",
    title:
      "Tăng cường công tác phòng, chống tham nhũng trong tình hình mới",
    category: "CHÍNH TRỊ",
    date: "12/03/2026",
    exclusive: false,
  },
  // ── Page 2 ──
  {
    id: "article-fresh-6",
    title:
      "Nâng cao chất lượng đội ngũ cán bộ đáp ứng yêu cầu nhiệm vụ mới",
    category: "XÂY DỰNG ĐẢNG",
    date: "12/03/2026",
    exclusive: false,
  },
  {
    id: "article-fresh-7",
    title:
      "Chiến lợc phát triển văn hóa Việt Nam đến năm 2030, tầm nhìn 2045",
    category: "VĂN HÓC",
    date: "11/03/2026",
  },
  {
    id: "article-fresh-8",
    title:
      "Đẩy mạnh cải cách hành chính, xây dựng chính phủ điện tử phục vụ nhân dân",
    category: "HÀNH CHÍNH",
    date: "11/03/2026",
    exclusive: false,
  },
  {
    id: "article-fresh-9",
    title:
      "Triển khai Nghị quyết về phát triển kinh tế biển gắn với bảo vệ chủ quyền",
    category: "QUỐC PHÒNG",
    date: "10/03/2026",
    exclusive: false,
  },
  {
    id: "article-fresh-10",
    title:
      "Hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa",
    category: "KINH TẾ",
    date: "10/03/2026",
    exclusive: true,
  },
];

const popularArticles = [
  {
    id: "article-pop-1",
    title:
      "Làm rõ cả ưu điểm và hạn chế trong thể chế hóa các chủ trương lãnh đạo của Đảng",
    category: "CHÍNH TRỊ",
    date: "14/03/2026",
    exclusive: false,
  },
  {
    id: "article-pop-2",
    title:
      "Phát biểu của Tổng Bí thư Tô Lâm tại Hội nghị toàn quốc quán triệt Nghị quyết",
    category: "ĐẠI HỘI XIV",
    date: "14/03/2026",
    exclusive: false,
  },
  {
    id: "article-pop-3",
    title:
      "Góp ý dự thảo Chương trình hành đng của Mặt trận Tổ quốc Việt Nam",
    category: "MẶT TRẬN",
    date: "13/03/2026",
    exclusive: false,
  },
  {
    id: "article-pop-4",
    title:
      "Nhiệm vụ trọng tâm về khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số",
    category: "KHOA HỌC",
    date: "13/03/2026",
    exclusive: true,
  },
  {
    id: "article-pop-5",
    title:
      "Hội nghị toàn quốc triển khai Nghị quyết số 79-NQ/TW và số 80-NQ/TW",
    category: "BỘ CHÍNH TRỊ",
    date: "12/03/2026",
    exclusive: true,
  },
  // ── Extra articles (shown after "Xem thêm") ──
  {
    id: "article-pop-6",
    title:
      "Đối ngoại Đảng góp phần nâng cao vị thế Việt Nam trên trường quốc tế",
    category: "ĐỐI NGOẠI",
    date: "12/03/2026",
    exclusive: false,
  },
  {
    id: "article-pop-7",
    title:
      "Công tác kiểm tra, giám sát góp phần giữ vững kỷ cương, kỷ luật Đảng",
    category: "XÂY DỰNG ĐẢNG",
    date: "11/03/2026",
    exclusive: false,
  },
  {
    id: "article-pop-8",
    title:
      "Phát huy vai trò của nhân dân trong xây dựng Đảng và hệ thống chính trị",
    category: "DÂN VẬN",
    date: "11/03/2026",
    exclusive: true,
  },
];

const FRESH_PER_PAGE = 5;

// Hot news slideshow
const hotNewsSlides = [
  {
    id: "hot-1",
    title:
      "Thông báo Kết luận của Tổng Bí thư Tô Lâm tại phiên họp lần thứ nhất năm 2026 của Thường trực Ban Chỉ đạo Trung ương về phát triển khoa học, công nghệ và chuyển đổi số",
    summary:
      "Tổng Bí thư Tô Lâm chủ trì phiên họp lần thứ nhất năm 2026, nhấn mạnh yêu cầu đẩy mạnh phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia.",
    image:
      "https://cdn.nhandan.vn/images/736104fe94546f221b0d9690722f4bd499f89e39b4a6d5762fe88cf973bc1e93f0559b521d6f31c0243a314df3be570f/a4-bnd-4036.jpg",
    category: "KHOA HỌC CÔNG NGHỆ",
    url: "https://nhandan.vn/thong-bao-ket-luan-cua-tong-bi-thu-to-lam-tai-phien-hop-lan-thu-nhat-nam-2026-cua-thuong-truc-ban-chi-dao-trung-uong-ve-phat-trien-khoa-hoc-cong-nghe-va-chuyen-doi-so-post949128.html",
  },
  {
    id: "hot-2",
    title:
      'Đẩy mạnh phong trào thi đua "Dân vận khéo", huy động nguồn lực to lớn của nhân dân, đưa đất nước vững bước tiến vào kỷ nguyên mới',
    summary:
      'Phong trào thi đua "Dân vận khéo" tiếp tục phát huy vai trò, huy động sức mnh tổng hợp của nhân dân trong xây dựng và phát triển đất nước.',
    image:
      "https://tapchicongsan.org.vn/documents/20182/470021101/vna_potal_doan_vien_thanh_nien_lao_cai.jpg/30c6f428-bd9e-4861-8d0c-f76b6ada9643?t=1741678014210",
    category: "DÂN VẬN",
    url: "https://tapchicongsan.org.vn/web/guest/chinh-tri-xay-dung-dang/-/2018/1061602/day-manh-phong-trao-thi-dua-%E2%80%9Cdan-van-kheo%E2%80%9D%2C-huy-dong-nguon-luc-to-lon-cua-nhan-dan%2C-dua-dat-nuoc-vung-buoc-tien-vao-ky-nguyen-moi%2C-ky-nguyen-vuon-minh-cua-dan-toc.aspx",
  },
  {
    id: "hot-3",
    title:
      "Văn hóa với vai trò hệ điều tiết trong mô hình phát triển quốc gia",
    summary:
      "Văn hóa đóng vai trò nền tảng, là hệ điều tiết quan trọng trong mô hình phát triển bền vững của quốc gia trong giai đoạn mới.",
    image:
      "https://bvhttdl.gov.vn/uploads/images/2026/03/17/external-1773732448487.jpeg",
    category: "VĂN HÓC",
    url: "https://bvhttdl.gov.vn/van-hoa-voi-vai-tro-he-ieu-tiet-trong-mo-hinh-phat-trien-quoc-gia.htm",
  },
  {
    id: "hot-4",
    title:
      "Infographic: Bộ Giáo dục và Đào tạo sửa đổi, bổ sung một số điều Quy chế thi tốt nghiệp THPT",
    summary:
      "Bộ GD&ĐT ban hành quy định sửa đổi, bổ sung một số điều trong Quy chế thi tốt nghiệp trung học phổ thông nhằm hoàn thiện công tác tổ chức thi.",
    image:
      "https://cdn.nhandan.vn/images/afb1db2ed0e88f6532b075e558cb04aefa4d0b3fcac2b8d245f525101f38e9025cfacd5ee898d181029010948d9846a0/thi-1.jpg",
    category: "GIÁO DỤC",
    url: "https://nhandan.vn/infographic-bo-giao-duc-va-dao-tao-sua-doi-bo-sung-mot-so-dieu-quy-che-thi-tot-nghiep-trung-hoc-pho-thong-post948461.html",
  },
];

// ── Main Export ────────────────────────────────────────

export function NewsLayout() {
  const [hotNewsIndex, setHotNewsIndex] = useState(0);

  // Guard against stale index after HMR
  const safeIndex =
    hotNewsIndex < hotNewsSlides.length ? hotNewsIndex : 0;
  const currentSlide = hotNewsSlides[safeIndex];

  useEffect(() => {
    if (hotNewsIndex >= hotNewsSlides.length) {
      setHotNewsIndex(0);
    }
  }, [hotNewsIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHotNewsIndex(
        (prevIndex) => (prevIndex + 1) % hotNewsSlides.length,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-white overflow-hidden"
    >
      <div
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #fdfcfa 50%, #f9f7f4 100%)",
          position: "relative",
        }}
      >
        {/* Subtle inner glow removed */}

        {/* ═══ Hot News Slideshow (full width) ═══ */}
        <div
          className="w-full"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div
            className="relative overflow-hidden"
            style={{
              minHeight: "300px",
              height: "clamp(300px, 55vw, 720px)",
            }}
          >
            {/* Slides */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={hotNewsIndex}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute inset-0"
              >
                <a
                  href={currentSlide.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block absolute inset-0 cursor-pointer"
                >
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.15) 80%, rgba(0,0,0,0) 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-[30px] flex flex-col gap-[8px] sm:gap-[10px]">
                    <span
                      className="inline-block self-start px-[8px] py-[5px] rounded-sm text-white uppercase"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "13px",
                        fontWeight: 600,
                        backgroundColor: "#c41e2a",
                        lineHeight: "13px",
                      }}
                    >
                      {currentSlide.category}
                    </span>
                    <h3
                      className="text-white group-hover:text-[#fbbf24] transition-colors"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(20px, 3vw, 32px)",
                        fontWeight: 700,
                        lineHeight: "1.25",
                      }}
                    >
                      {currentSlide.title}
                    </h3>
                    <p
                      className="text-white/80 hidden sm:block"
                      style={{
                        fontFamily: "'Lora', serif",
                        fontSize: "15px",
                        fontWeight: 500,
                        lineHeight: "22px",
                        maxWidth: "700px",
                      }}
                    >
                      {currentSlide.summary}
                    </p>
                  </div>
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div
              className="absolute bottom-3 sm:bottom-[30px] right-3 sm:right-[30px] flex items-center gap-[8px]"
              style={{ zIndex: 2 }}
            >
              {hotNewsSlides.map((_, i) => (
                <button
                  key={`dot-${i}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setHotNewsIndex(i);
                  }}
                  className="w-[10px] h-[10px] rounded-full cursor-pointer transition-all duration-300"
                  style={{
                    backgroundColor:
                      i === hotNewsIndex
                        ? "#fff"
                        : "rgba(255,255,255,0.4)",
                    transform:
                      i === hotNewsIndex
                        ? "scale(1.3)"
                        : "scale(1)",
                  }}
                />
              ))}
            </div>

            {/* Slide counter */}
            <div
              className="absolute top-[10px] sm:top-[15px] right-[10px] sm:right-[15px] px-[10px] py-[5px] rounded-full"
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: "#fff",
                zIndex: 2,
              }}
            >
              {hotNewsIndex + 1} / {hotNewsSlides.length}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}