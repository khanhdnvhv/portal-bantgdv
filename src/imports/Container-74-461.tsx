import svgPaths from "./svg-jkwxz7y8yy";
import imgImage from "figma:asset/1f3c6a80fd75dc09594e7753a303f11f8a9e419a.png";
import imgLink from "figma:asset/726fae6da627f85e2256ba6c10dfdde9f255b7f8.png";
import imgLink1 from "figma:asset/8c119a96c10a578a9d73ad6b93162a1536267e9f.png";

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-7px] pb-[7px] pt-[10px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[32px] text-black tracking-[-1px] w-full">
        <p className="leading-[32px]">Fresh stories</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-7px] pb-[6.895px] pt-[9.295px] relative shrink-0 w-[236.14px]" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[15.6px] relative shrink-0 text-[13px] text-black uppercase whitespace-nowrap">
        <p className="mb-0">{`Today: Browse our editor's`}</p>
        <p>hand picked articles!</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[38.59px] relative shrink-0 w-[260.3px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['PT_Serif:Bold',sans-serif] h-[40px] justify-center leading-[19.6px] left-0 not-italic text-[14px] text-black top-[19.3px] w-[260.5px]">
        <p className="mb-0">Cover Girl Announces Star Shine</p>
        <p>Makeup Line is Due for Next December</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_black]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="Heading 3">
      <Link />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex gap-[8.41px] items-start leading-[0] py-[2px] relative shrink-0 text-[12px] tracking-[-0.5px] w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#ec3535] uppercase">
        <p className="leading-[12px]">Make-up</p>
      </div>
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-black">
        <p className="leading-[12px]">September 29, 2021</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative w-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Container6 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#ec3535] content-stretch flex items-start left-0 px-[5px] py-[3px] rounded-[2px] top-[0.5px] w-[70.81px]" data-name="Background">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">EXCLUSIVE</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[38.59px] relative shrink-0 w-[232.59px]" data-name="Link">
      <Background />
      <div className="-translate-y-1/2 absolute flex flex-col font-['PT_Serif:Bold',sans-serif] h-[20px] justify-center leading-[0] left-[75.81px] not-italic text-[14px] text-black top-[9.5px] w-[157.102px]">
        <p className="leading-[19.6px]">Customer Engagement:</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['PT_Serif:Bold',sans-serif] h-[20px] justify-center leading-[0] left-0 not-italic text-[14px] text-black top-[29.09px] w-[202.447px]">
        <p className="leading-[19.6px]">New Strategy for the Economy</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_black]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="Heading 3">
      <Link1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex gap-[8.41px] items-start leading-[0] py-[2px] relative shrink-0 text-[12px] tracking-[-0.5px] w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#ec3535] uppercase">
        <p className="leading-[12px]">Marketing</p>
      </div>
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-black">
        <p className="leading-[12px]">September 29, 2021</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative w-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Container7 />
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[38.59px] relative shrink-0 w-[256.77px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['PT_Serif:Bold',sans-serif] h-[40px] justify-center leading-[19.6px] left-0 not-italic text-[14px] text-black top-[19.3px] w-[256.97px]">
        <p className="mb-0">Social Media Marketing for Franchises</p>
        <p>is Meant for Women</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_black]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="Heading 3">
      <Link2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex gap-[8.41px] items-start leading-[0] py-[2px] relative shrink-0 text-[12px] tracking-[-0.5px] w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#ec3535] uppercase">
        <p className="leading-[12px]">Marketing</p>
      </div>
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-black">
        <p className="leading-[12px]">September 29, 2021</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative w-full">
        <Heading2 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Container8 />
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[38.59px] relative shrink-0 w-[222.7px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['PT_Serif:Bold',sans-serif] h-[40px] justify-center leading-[19.6px] left-0 not-italic text-[14px] text-black top-[19.3px] w-[222.9px]">
        <p className="mb-0">Entrepreneurial Advertising: The</p>
        <p>Future Of Marketing</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_black]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="Heading 3">
      <Link3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex gap-[8.41px] items-start leading-[0] py-[2px] relative shrink-0 text-[12px] tracking-[-0.5px] w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#ec3535] uppercase">
        <p className="leading-[12px]">Marketing</p>
      </div>
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-black">
        <p className="leading-[12px]">September 29, 2021</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[9.99px] items-start relative w-full">
        <Heading3 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Container9 />
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[38.59px] relative shrink-0 w-[230.73px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['PT_Serif:Bold',sans-serif] h-[40px] justify-center leading-[19.6px] left-0 not-italic text-[14px] text-black top-[19.3px] w-[230.93px]">
        <p className="mb-0">Mobile Marketing is Said to Be the</p>
        <p>Future of E-Commerce</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_black]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="Heading 3">
      <Link4 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex gap-[8.41px] items-start leading-[0] py-[2px] relative shrink-0 text-[12px] tracking-[-0.5px] w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#ec3535] uppercase">
        <p className="leading-[12px]">Marketing</p>
      </div>
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-black">
        <p className="leading-[12px]">September 29, 2021</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative w-full">
        <Heading4 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
      <Container10 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start pt-px relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder />
      <HorizontalBorder1 />
      <HorizontalBorder2 />
      <HorizontalBorder3 />
      <HorizontalBorder4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[22px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon">
          <path d={svgPaths.p271e5b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function LinkPrevPage() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-[25px] min-w-[25px] opacity-50 pb-[3px] pl-px pr-[2px] relative shrink-0" data-name="Link - prev-page">
      <Container12 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative size-[22px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon">
          <path d={svgPaths.p358b5100} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function LinkNextPage() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-[25px] min-w-[25px] pb-[3px] pl-[2.5px] pr-[0.5px] relative shrink-0" data-name="Link - next-page">
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full" data-name="Container">
      <LinkPrevPage />
      <LinkNextPage />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start mb-[-7px] pt-[31.99px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container11 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[10px] pb-[7px] right-[1139.61px] top-[-10px]" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[600px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="absolute h-[600px] left-0 top-0 w-[544.8px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-23.42%] max-w-none top-0 w-[146.84%]" src={imgImage} />
        </div>
      </div>
      <div className="absolute h-[600px] left-0 top-0 w-[544.8px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 42%, rgba(0, 0, 0, 0) 61%, rgba(0, 0, 0, 0) 100%)" }} />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute bg-[#ec3535] content-stretch flex items-start left-[25px] px-[8px] py-[5px] rounded-[2px] top-0" data-name="Link">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[13px] text-white uppercase whitespace-nowrap">
        <p className="leading-[13px]">Marketing</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start py-[3.5px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[40px] relative shrink-0 text-[40px] text-white whitespace-nowrap">
        <p className="mb-0">Social Media Marketing</p>
        <p className="mb-0">for Franchises is Meant</p>
        <p>for Women</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_black]" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[35px]" data-name="Heading 3">
      <Link6 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[169.89px]" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[22.4px] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="mb-0">Find people with high expectations and a low tolerance for</p>
        <p className="mb-0">{`excuses. They'll have higher expectations for you than you`}</p>
        <p>{`have for yourself. Don't flatter yourself...`}</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bottom-[0.01px] h-[263.17px] left-0 min-h-[17px] right-0" data-name="Container">
      <Link5 />
      <Heading5 />
      <Container18 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20%] min-h-px px-[10px] right-[40%] top-0" data-name="Container">
      <Container15 />
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[188.91px] relative shrink-0 w-full" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-4%] max-w-none top-0 w-[107.99%]" src={imgLink} />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start pb-[0.29px] pt-[0.3px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['PT_Serif:Bold',sans-serif] justify-center leading-[20.8px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="mb-0">{`A Look at How Social Media &`}</p>
        <p className="mb-0">Mobile Gaming Can Increase</p>
        <p>Sales</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_black]" />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <Link8 />
    </div>
  );
}

function Container23() {
  return (
    <div className="mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[7px] items-start pr-[30px] pt-[16px] relative w-full">
        <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[13px] text-black tracking-[-0.5px] uppercase whitespace-nowrap">
          <p className="leading-[13px]">Finance</p>
        </div>
        <Heading6 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.01px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[188.91px] relative shrink-0 w-full" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-4%] max-w-none top-0 w-[107.99%]" src={imgLink1} />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link9 />
    </div>
  );
}

function Link10() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start py-[0.295px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['PT_Serif:Bold',sans-serif] justify-center leading-[20.8px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="mb-0">The Secret to Your Company’s</p>
        <p className="mb-0">Financial Health is Very</p>
        <p>Important</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_black]" />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <Link10 />
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[7px] items-start pr-[30px] pt-[16px] relative w-full">
        <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[13px] text-black tracking-[-0.5px] uppercase whitespace-nowrap">
          <p className="leading-[13px]">Finance</p>
        </div>
        <Heading7 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[19.99px] items-start relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container24 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[60%] min-h-px px-[10px] right-[20%] top-0" data-name="Container">
      <Container20 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] pt-[10px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[32px] text-black tracking-[-1px] w-full">
        <p className="leading-[32px]">Popular</p>
      </div>
    </div>
  );
}

function Background1() {
  return <div className="absolute bg-white inset-0" data-name="Background" />;
}

function Link11() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[32.8px] relative shrink-0 w-[216.53px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[34px] justify-center leading-[16.8px] left-0 text-[14px] text-black top-[16.39px] w-[216.73px]">
        <p className="mb-0">Social Media Marketing for</p>
        <p>Franchises is Meant for Women</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_black]" />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.79px] relative shrink-0 w-full" data-name="Heading 3">
      <Link11 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.5px] w-full">
        <p className="leading-[12px]">September 29, 2021</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ec3535] text-[12px] tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">Marketing</p>
      </div>
      <Heading8 />
      <Container31 />
    </div>
  );
}

function Link12() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[49.59px] relative shrink-0 w-[203.59px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[51px] justify-center leading-[16.8px] left-0 text-[14px] text-black top-[24.8px] w-[203.79px]">
        <p className="mb-0">{`A Look at How Social Media &`}</p>
        <p className="mb-0">Mobile Gaming Can Increase</p>
        <p>Sales</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_black]" />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
      <Link12 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.5px] w-full">
        <p className="leading-[12px]">September 29, 2021</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ec3535] text-[12px] tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">Finance</p>
      </div>
      <Heading9 />
      <Container33 />
    </div>
  );
}

function Link13() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[49.59px] relative shrink-0 w-[200.95px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[51px] justify-center leading-[16.8px] left-0 text-[14px] text-black top-[24.8px] w-[201.15px]">
        <p className="mb-0">Cover Girl Announces Star</p>
        <p className="mb-0">Shine Makeup Line is Due for</p>
        <p>Next December</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_black]" />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
      <Link13 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.5px] w-full">
        <p className="leading-[12px]">September 29, 2021</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ec3535] text-[12px] tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">Make-up</p>
      </div>
      <Heading10 />
      <Container35 />
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#ec3535] content-stretch flex items-start left-0 px-[5px] py-[3px] rounded-[2px] top-[-1.5px] w-[70.81px]" data-name="Background">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">EXCLUSIVE</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[49.59px] relative shrink-0 w-[209.8px]" data-name="Link">
      <Background2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[75.81px] text-[14px] text-black top-[8px] w-[67.614px]">
        <p className="leading-[16.8px]">Customer</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[34px] justify-center leading-[16.8px] left-0 text-[14px] text-black top-[33.19px] w-[210px]">
        <p className="mb-0">Engagement: New Strategy for</p>
        <p>the Economy</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_black]" />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
      <Link14 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.5px] w-full">
        <p className="leading-[12px]">September 29, 2021</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ec3535] text-[12px] tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">Marketing</p>
      </div>
      <Heading11 />
      <Container37 />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#ec3535] content-stretch flex items-start left-0 px-[5px] py-[3px] rounded-[2px] top-[-1.5px] w-[70.81px]" data-name="Background">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">EXCLUSIVE</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[49.59px] relative shrink-0 w-[202.86px]" data-name="Link">
      <Background3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[75.81px] text-[14px] text-black top-[8px] w-[127.447px]">
        <p className="leading-[16.8px]">10 Outfits Inspired</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[34px] justify-center leading-[16.8px] left-0 text-[14px] text-black top-[33.19px] w-[176.87px]">
        <p className="mb-0">by Famous Art are Sold in</p>
        <p>London</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_black]" />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 3">
      <Link15 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.5px] w-full">
        <p className="leading-[12px]">September 29, 2021</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ec3535] text-[12px] tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">Make-up</p>
      </div>
      <Heading12 />
      <Container39 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pt-[6px] relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container32 />
      <Container34 />
      <Container36 />
      <Container38 />
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shadow-[0px_0px_16px_0px_rgba(0,0,0,0.09)] shrink-0 w-full" data-name="Overlay+Shadow">
      <div className="content-stretch flex flex-col items-start pb-[18.01px] pt-[15px] px-[20px] relative w-full">
        <Background1 />
        <Container29 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-[1139.58px] right-[10.03px] top-[-10px]" data-name="Container">
      <Container28 />
      <OverlayShadow />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container1 />
      <Container14 />
      <Container19 />
      <Container27 />
    </div>
  );
}