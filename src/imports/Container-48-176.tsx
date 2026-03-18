import imgFigureBanChpHanhTrungng from "figma:asset/af17ccfc8165436f9b9d6f2c068efd1c576abb18.png";
import imgFigureDiHiDng from "figma:asset/578c9bec41b2ea3686e67ea18d2161f07a515524.png";
import imgFigureBChinhTr from "figma:asset/7db5108bae895f9e441418cf9c2fa47481e1d797.png";
import imgFigureBanBiTh from "figma:asset/d66924fd691198666a6f8b9e9d5664d168c77277.png";

function FigureBanChpHanhTrungng() {
  return (
    <div className="aspect-[315/100] relative shrink-0 w-full" data-name="Figure → Ban chấp hành trung ương">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFigureBanChpHanhTrungng} />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Roboto_Condensed:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ce0e1b] text-[20px] text-center uppercase whitespace-nowrap">
        <p className="leading-[22px]">Ban chấp hành trung ương</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[39%_0] items-start px-[10px]" data-name="Container">
      <Heading />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <FigureBanChpHanhTrungng />
      <Container2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] px-[10px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function FigureDiHiDng() {
  return (
    <div className="aspect-[315/100] relative shrink-0 w-full" data-name="Figure → Đại hội Đảng">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFigureDiHiDng} />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Roboto_Condensed:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ce0e1b] text-[20px] text-center uppercase whitespace-nowrap">
        <p className="leading-[22px]">Đại hội Đảng</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[39%_0] items-start px-[10px]" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <FigureDiHiDng />
      <Container4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Container">
      <Link1 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] px-[10px] relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function FigureBChinhTr() {
  return (
    <div className="aspect-[315/100] relative shrink-0 w-full" data-name="Figure → Bộ Chính trị">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFigureBChinhTr} />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Roboto_Condensed:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ce0e1b] text-[20px] text-center uppercase whitespace-nowrap">
        <p className="leading-[22px]">Bộ Chính trị</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[39%_0] items-start px-[10px]" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <FigureBChinhTr />
      <Container6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Container">
      <Link2 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] px-[10px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function FigureBanBiTh() {
  return (
    <div className="aspect-[315/100] relative shrink-0 w-full" data-name="Figure → Ban Bí thư">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFigureBanBiTh} />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Roboto_Condensed:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ce0e1b] text-[20px] text-center uppercase whitespace-nowrap">
        <p className="leading-[22px]">Ban Bí thư</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[39%_0] items-start px-[10px]" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <FigureBanBiTh />
      <Container8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Container">
      <Link3 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] px-[10px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 items-start justify-center pt-[2px] relative size-full" data-name="Container">
      <Margin />
      <Margin1 />
      <Margin2 />
      <Margin3 />
    </div>
  );
}