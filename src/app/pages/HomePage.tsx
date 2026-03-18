import { Container20 as FigmaTickerBar, Container27 as FigmaBanner } from "../../imports/Container-32-255";
import { PartyMilestones } from "../components/PartyMilestones";
import { HeroLeaders } from "../components/HeroLeaders";
import { NewsLayout } from "../components/NewsLayout";
import { HoChiMinhBanner } from "../components/HoChiMinhBanner";
import { NewsCategoriesTabs } from "../components/NewsCategoriesTabs";
import { MultimediaSection } from "../components/MultimediaSection";
import { DocumentsSection } from "../components/DocumentsSection";
import { SectionWrapper } from "../components/shared";
import { LAYOUT } from "../constants/theme";

export function HomePage() {
  return (
    <>
      {/* Figma Ticker Bar & Banner */}
      <div className="relative flex flex-col items-center">
        <FigmaTickerBar />
        <FigmaBanner />
      </div>

      {/* News Content from Figma */}
      <div
        className="relative"
        style={{ maxWidth: LAYOUT.maxWidth, margin: "0 auto", paddingBottom: 40 }}
      >
        <div className="[&_[data-name='Figure']]:rounded-xl [&_[data-name='Figure']]:overflow-hidden [&_[data-name='Article']]:rounded-xl [&_[data-name='Article']]:overflow-hidden">
          <NewsLayout />
        </div>
        {/* Ho Chi Minh Banner */}
        <div className="rounded-2xl overflow-hidden mt-8">
          <HoChiMinhBanner />
        </div>
      </div>

      {/* Hero Leaders - full viewport width */}
      <div className="relative">
        <HeroLeaders />
      </div>

      {/* Party Milestones & Content - inside container */}
      <div
        className="relative"
        style={{ maxWidth: LAYOUT.maxWidth, margin: "0 auto", paddingBottom: 40 }}
      >
        <PartyMilestones />
      </div>

      {/* Tin Dang - full viewport width */}
      <div className="relative">
        <NewsCategoriesTabs />
      </div>

      {/* Van ban chi dao Section */}
      <SectionWrapper variant="red" className="pt-[10px]">
        <DocumentsSection />
      </SectionWrapper>

      {/* Da phuong tien Section */}
      <SectionWrapper variant="gold">
        <MultimediaSection />
      </SectionWrapper>
    </>
  );
}
