import { Container20 as FigmaTickerBar, Container27 as FigmaBanner } from "../../imports/Container-32-255";
import { PartyMilestones } from "../components/PartyMilestones";
import { HeroLeaders } from "../components/HeroLeaders";
import { NewsLayout } from "../components/NewsLayout";
import { NewsCategoriesTabs } from "../components/NewsCategoriesTabs";
import { MilestonesSection } from "../components/MilestonesSection";
import { MultimediaSection } from "../components/MultimediaSection";
import { NewsEventsSection } from "../components/NewsEventsSection";
import { FeaturedSlideshow } from "../components/FeaturedSlideshow";
import { SectionWrapper } from "../components/shared";
import { LAYOUT } from "../constants/theme";
import { UtilityBar } from "../components/UtilityBar";

export function HomePage() {
  return (
    <>
      {/* Figma Ticker Bar & Banner */}
      <div className="relative flex-col items-center overflow-x-auto hidden lg:flex">
        <UtilityBar />
        <div className="min-w-[1360px]">
          <FigmaBanner />
        </div>
      </div>

      {/* Mobile Utility Bar */}
      <div className="lg:hidden">
        <UtilityBar />
      </div>

      {/* News Content - full width */}
      <NewsLayout />

      {/* News Categories - full width */}
      <NewsCategoriesTabs />

      {/* Hero Leaders - full viewport width */}
      <div className="relative">
        <HeroLeaders />
      </div>

      {/* ===== MULTIMEDIA ===== */}
      <div className="mt-6 md:mt-8 lg:mt-10">
        <MultimediaSection />
      </div>

      {/* ===== TIN TỨC, SỰ KIỆN ===== */}
      <div className="w-full mb-8 mt-8">
        <FeaturedSlideshow />
        <NewsEventsSection />
      </div>
    </>
  );
}