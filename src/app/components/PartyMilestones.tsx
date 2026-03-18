import { motion } from "motion/react";
import { QuickLinksSection } from "./QuickLinksSection";
import imgBannerCuocThi from "figma:asset/44d74b5f14d9905fa311d0a0996de1255f237751.png";

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
            src={imgBannerCuocThi}
            alt="Cuộc thi trực tuyến tìm hiểu bầu cử Quốc hội và Hội đồng nhân dân các cấp"
            className="w-full h-auto object-cover max-w-[1360px] mx-auto"
          />
        </div>
      </div>




    </section>
  );
}