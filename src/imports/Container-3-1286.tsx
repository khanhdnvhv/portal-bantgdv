import imgHeading3 from "figma:asset/f9b869945cbe191b3fe0aa4bb22b31945da94fca.png";
import imgTngBiTh from "figma:asset/4698a4bc23081cf3f17bcfe2906afd15d9ed29f4.png";
import imgChTchNc from "figma:asset/aaa5c055ba4df5991896d68d0561a39a1509eae8.png";
import imgThTngChinhPh from "figma:asset/a267333fa82f609bab06ddcf67c1bc5a186c75f0.png";
import imgChTchQucHi from "figma:asset/bf250f87b1caf9e9854a79714717cb1f886a40df.png";
import imgDngChiThngTrcBanBiTh from "figma:asset/b69b40d193e66d58d583e66e49215512646f1f9d.png";

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[90%] left-0 max-w-none top-[5%] w-[6.16%]" src={imgHeading3} />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pl-[30px] relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[18px] text-center uppercase whitespace-nowrap">
          <p className="leading-[20px]">Lãnh đạo Đảng, Nhà nước</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-center pb-[13px] pt-[12.5px] relative shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-[#ededed] border-b border-solid border-t inset-0 pointer-events-none" />
      <Heading />
    </div>
  );
}

function TngBiTh() {
  return (
    <div className="h-[198.39px] max-w-[248px] relative shrink-0 w-[248px]" data-name="Tổng Bí Thư">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-0 w-full" src={imgTngBiTh} />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <TngBiTh />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto_Condensed:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#101828] text-[15px] text-center uppercase whitespace-nowrap">
        <p className="leading-[24px]">Tổng Bí Thư</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto_Condensed:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#db0713] text-[20px] text-center uppercase whitespace-nowrap">
        <p className="leading-[24px]">Tô Lâm</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#fef7f1] content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-name="Link">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Link1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[10px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function ChTchNc() {
  return (
    <div className="h-[198.39px] max-w-[248px] relative shrink-0 w-[248px]" data-name="Chủ tịch nước">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-0 w-full" src={imgChTchNc} />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <ChTchNc />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto_Condensed:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#101828] text-[15px] text-center uppercase whitespace-nowrap">
        <p className="leading-[24px]">Chủ tịch nước</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto_Condensed:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#db0713] text-[20px] text-center uppercase whitespace-nowrap">
        <p className="leading-[24px]">Lương Cường</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[#fef7f1] content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-name="Link">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Link3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[10px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function ThTngChinhPh() {
  return (
    <div className="h-[198.39px] max-w-[248px] relative shrink-0 w-[248px]" data-name="Thủ tướng chính phủ">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-0 w-full" src={imgThTngChinhPh} />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <ThTngChinhPh />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link4 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto_Condensed:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#101828] text-[15px] text-center uppercase whitespace-nowrap">
        <p className="leading-[24px]">Thủ tướng chính phủ</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto_Condensed:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#db0713] text-[20px] text-center uppercase whitespace-nowrap">
        <p className="leading-[24px]">Phạm Minh Chính</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-[#fef7f1] content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-name="Link">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Link5 />
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[10px] relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] relative size-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function ChTchQucHi() {
  return (
    <div className="h-[199.19px] max-w-[248px] relative shrink-0 w-[248px]" data-name="Chủ tịch Quốc hội">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgChTchQucHi} />
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <ChTchQucHi />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link6 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto_Condensed:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#101828] text-[15px] text-center uppercase whitespace-nowrap">
        <p className="leading-[24px]">Chủ tịch Quốc hội</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto_Condensed:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#db0713] text-[20px] text-center uppercase whitespace-nowrap">
        <p className="leading-[24px]">Trần Thanh Mẫn</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-[#fef7f1] content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-name="Link">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Link7 />
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[10px] relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] relative size-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function DngChiThngTrcBanBiTh() {
  return (
    <div className="h-[199.19px] max-w-[248px] relative shrink-0 w-[248px]" data-name="Đồng chí Thường trực ban bí thư">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDngChiThngTrcBanBiTh} />
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <DngChiThngTrcBanBiTh />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link8 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto_Condensed:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#101828] text-[15px] text-center uppercase whitespace-nowrap">
        <p className="leading-[24px]">Đồng chí Thường trực ban bí thư</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto_Condensed:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#db0713] text-[20px] text-center uppercase whitespace-nowrap">
        <p className="leading-[24px]">Trần Cẩm Tú</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="bg-[#fef7f1] content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-name="Link">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Link9 />
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[10px] relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] relative size-full">
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 h-[295.19px] items-start justify-center relative shrink-0 w-[1340px]" data-name="Container">
      <Margin />
      <Margin1 />
      <Margin2 />
      <Margin3 />
      <Margin4 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative size-full" data-name="Container">
      <BackgroundBorder />
      <Container1 />
    </div>
  );
}