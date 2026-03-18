import { motion } from "motion/react";
import { QuickLinksSection } from "./QuickLinksSection";
import imgBannerWeb293E28Png from "figma:asset/c88c8fcb05fe005ff55eded587daf13d62afe845.png";

// Category card images
import imgCategoryBanner1 from "figma:asset/fb021212093e8fb39568a7614b69a59813ca28cd.png";
import imgCategoryBanner2 from "figma:asset/9c81e01a08ca42ffecc095d90db220f9b88089ec.png";
import imgCategoryBanner3 from "figma:asset/4d8cd56e7b46203211890a95b7c1456b1e162724.png";
import imgCategoryBanner4 from "figma:asset/19349bcf47fc4007dd70d6caf8078ff9b730b93d.png";

const categoryCards = [
  { name: "Cuộc thi trực tuyến", image: imgCategoryBanner1 },
  { name: "Chương trình công tác năm", image: imgCategoryBanner2 },
  { name: "Sổ tay chuyển đổi số", image: imgCategoryBanner3 },
  { name: "Hệ thống thông tin điều hành", image: imgCategoryBanner4 },
];

export function PartyMilestones() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* ===== BANNER ===== */}
      <div className="flex justify-center w-full bg-white pb-4">
        <div className="w-full overflow-hidden">
          <img
            src={imgBannerWeb293E28Png}
            alt="Banner Quyết tâm thực hiện thắng lợi Nghị quyết Đại hội XIV"
            className="w-full h-auto object-cover max-w-[1360px] mx-auto"
          />
        </div>
      </div>

      {/* ===== CATEGORY CARDS ===== */}
      <div className="bg-white py-6">
        <div className="w-full mx-auto px-0">
          <div className="grid grid-cols-4 gap-3 max-w-[1320px] mx-auto">
            {categoryCards.map((card, i) => (
              <motion.a
                key={card.name}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative block rounded-xl overflow-hidden cursor-pointer"
                style={{
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                <div className="relative aspect-[320/195] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, rgba(196,30,42,0.2) 0%, rgba(0,0,0,0.1) 100%)",
                    }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c41e2a] via-[#d4a853] to-[#c41e2a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#d4a853] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-sm" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#d4a853] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-sm" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#d4a853] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-sm" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#d4a853] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-sm" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* ===== QUICK LINKS SECTION ===== */}
      <QuickLinksSection />
    </section>
  );
}
