import imgImage from "figma:asset/8f9c3c1d6fba01bde04b84f1099230d7c46ef0d3.png";
import imgLink from "figma:asset/91f1105cb6bb09387351e4016845ebdd0b7b3ed2.png";
import imgLink1 from "figma:asset/0b724ae99cec0e206d42c64033b489bcafb14216.png";
import imgLink2 from "figma:asset/e04c72eb5d6742c20941eb2254e015e0cc4c98d0.png";
import imgLink3 from "figma:asset/e8929a074824ecdb7dff6ee1e1c42db316dc0384.png";

function Background() {
  return <div className="absolute bg-white inset-0" data-name="Background" />;
}

function Container2() {
  return (
    <div className="h-[600px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="absolute h-[600px] left-0 top-0 w-[547.5px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-32.08%] max-w-none top-0 w-[164.15%]" src={imgImage} />
        </div>
      </div>
      <div className="absolute h-[600px] left-0 top-0 w-[547.5px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 42%, rgba(0, 0, 0, 0) 61%, rgba(0, 0, 0, 0) 100%)" }} />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#ec3535] content-stretch flex items-start left-0 px-[8px] py-[5px] rounded-[2px] top-[14.5px] w-[87.14px]" data-name="Background">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[13px] text-white uppercase whitespace-nowrap">
        <p className="leading-[13px]">EXCLUSIVE</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[127px] relative shrink-0 w-[462.14px]" data-name="Link">
      <Background1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] left-[97.16px] text-[40px] text-white top-[23.5px] w-[365.322px]">
        <p className="leading-[40px]">10 Outfits Inspired</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold h-[80px] justify-center leading-[40px] left-0 text-[40px] text-white top-[83.5px] w-[456.67px]">
        <p className="mb-0">by Famous Art are Sold</p>
        <p>in London</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_black]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <Link />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[22.4px] relative shrink-0 text-[16px] text-white w-full">
        <p className="mb-0">Find people with high expectations and a low tolerance for</p>
        <p className="mb-0">{`excuses. They'll have higher expectations for you than you`}</p>
        <p>{`have for yourself. Don't flatter yourself...`}</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bottom-[0.28px] content-stretch flex flex-col gap-[7.895px] items-start left-0 min-h-[17px] pb-[25px] px-[25px] right-0" data-name="Container">
      <Heading />
      <Container4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Background2() {
  return <div className="absolute bg-[#ec3535] inset-0" data-name="Background" />;
}

function Container7() {
  return (
    <div className="content-stretch flex items-start pb-[10px] pl-[14px] pr-[16px] pt-[8px] relative shrink-0" data-name="Container">
      <Background2 />
      <div className="flex flex-col font-['PT_Serif:Bold_Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[28px]">Exclusive content</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[20px] pr-[293.23px] relative w-full">
        <Container7 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-14px] px-[24px] top-[-32px] w-[567.5px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px px-[10px] relative shrink-0 w-[567.5px]" data-name="Container">
      <Container1 />
      <Container5 />
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[203.7px] relative shrink-0 w-full" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[106.7%] left-0 max-w-none top-[-3.35%] w-full" src={imgLink} />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link1 />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#ec3535] content-stretch flex items-start left-0 px-[6px] py-[4px] rounded-[2px] top-px w-[77.67px]" data-name="Background">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">
        <p className="leading-[12px]">EXCLUSIVE</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[42.8px] relative shrink-0 w-[370.13px]" data-name="Link">
      <Background3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['PT_Serif:Bold',sans-serif] h-[21px] justify-center leading-[0] left-[85.67px] not-italic text-[16px] text-black top-[11px] w-[284.761px]">
        <p className="leading-[20.8px]">Customer Engagement: New Strategy</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['PT_Serif:Bold',sans-serif] h-[21px] justify-center leading-[0] left-0 not-italic text-[16px] text-black top-[31.8px] w-[126.085px]">
        <p className="leading-[20.8px]">for the Economy</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_black]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <Link2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[13px] text-black tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[13px]">Marketing</p>
      </div>
      <Heading1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[10px] right-[407.25px] top-0" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[203.7px] relative shrink-0 w-full" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[123.47%] left-0 max-w-none top-[-11.73%] w-full" src={imgLink1} />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link3 />
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[#ec3535] content-stretch flex items-start left-0 px-[6px] py-[4px] rounded-[2px] top-px w-[77.67px]" data-name="Background">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">
        <p className="leading-[12px]">EXCLUSIVE</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[42.8px] relative shrink-0 w-[339.38px]" data-name="Link">
      <Background4 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['PT_Serif:Bold',sans-serif] h-[21px] justify-center leading-[0] left-[85.67px] not-italic text-[16px] text-black top-[11px] w-[254.097px]">
        <p className="leading-[20.8px]">Things to Look For in a Financial</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['PT_Serif:Bold',sans-serif] h-[21px] justify-center leading-[0] left-0 not-italic text-[16px] text-black top-[31.8px] w-[237.665px]">
        <p className="leading-[20.8px]">Trading Platform Environment</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_black]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <Link4 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[13px] text-black tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[13px]">Finance</p>
      </div>
      <Heading2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[407.25px] right-[10px] top-0" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[203.7px] relative shrink-0 w-full" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[123.47%] left-0 max-w-none top-[-11.73%] w-full" src={imgLink2} />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link5 />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#ec3535] content-stretch flex items-start left-0 px-[6px] py-[4px] rounded-[2px] top-px w-[77.67px]" data-name="Background">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">
        <p className="leading-[12px]">EXCLUSIVE</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[42.8px] relative shrink-0 w-[339.36px]" data-name="Link">
      <Background5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['PT_Serif:Bold',sans-serif] h-[21px] justify-center leading-[0] left-[85.67px] not-italic text-[16px] text-black top-[11px] w-[254.087px]">
        <p className="leading-[20.8px]">New Harvard Student Candidates</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['PT_Serif:Bold',sans-serif] h-[21px] justify-center leading-[0] left-0 not-italic text-[16px] text-black top-[31.79px] w-[257.39px]">
        <p className="leading-[20.8px]">Presented Minutes Before Results</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_black]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <Link6 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[13px] text-black tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[13px]">Politics</p>
      </div>
      <Heading3 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[0.01px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[10px] right-1/2 top-[312.29px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[203.7px] relative shrink-0 w-full" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[104.31%] left-0 max-w-none top-[-2.15%] w-full" src={imgLink3} />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link7 />
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-[#ec3535] content-stretch flex items-start left-0 px-[6px] py-[4px] rounded-[2px] top-px w-[77.67px]" data-name="Background">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">
        <p className="leading-[12px]">EXCLUSIVE</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[42.8px] relative shrink-0 w-[360.84px]" data-name="Link">
      <Background6 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['PT_Serif:Bold',sans-serif] h-[21px] justify-center leading-[0] left-[85.67px] not-italic text-[16px] text-black top-[11px] w-[275.477px]">
        <p className="leading-[20.8px]">New Soundboard from Bose Review:</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['PT_Serif:Bold',sans-serif] h-[21px] justify-center leading-[0] left-0 not-italic text-[16px] text-black top-[31.79px] w-[295.475px]">
        <p className="leading-[20.8px]">Pricing is Not Always the Only Criteria</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_black]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <Link8 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[13px] text-black tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[13px]">Tech</p>
      </div>
      <Heading4 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[0.01px] items-start relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 px-[10px] right-0 top-[312.29px]" data-name="Container">
      <Container21 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[594.59px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container13 />
      <Container16 />
      <Container20 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px relative shrink-0 w-[794.5px]" data-name="Container">
      <Container9 />
    </div>
  );
}

export default function OverlayShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[15px] py-[24px] relative shadow-[0px_4px_20px_0px_rgba(0,0,0,0.09)] size-full" data-name="Overlay+Shadow">
      <Background />
      <Container />
      <Container8 />
    </div>
  );
}