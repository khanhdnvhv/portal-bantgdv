import svgPaths from "./svg-f1i8cognxs";
import imgPhamLinhJpgWebp from "figma:asset/a299edb4780536bd21db27602130e18438a86398.png";
import imgDotPhaChienLuocKhcnCoverJpgWebp from "figma:asset/a5e7b24690cf0e132811cfa5466c5a05871940ff.png";
import imgA1Bnd88525050JpgWebp from "figma:asset/5b879d20627781a267f25334f47725b9b1325a38.png";
import imgImageOverlay from "figma:asset/de8a13c08956322f5a8c73ccc0f303a9e5b8ffc0.png";
import imgCoverNhiemVuChuYeuJpgWebp from "figma:asset/33fe7bc8ec23112c63e7f0760a68dfa93d290ef5.png";
import imgBnd77388383JpgWebp from "figma:asset/a362b515171b1364f7afc2993de2b7dd2cc0e840.png";
import imgBnd7754JpgWebp from "figma:asset/06551051baeacb9bc38cb95f3cfefc60058e7918.png";

function PhamLinhJpgWebp() {
  return (
    <div className="aspect-[270/180] min-h-[180px] relative shrink-0 w-full" data-name="pham-linh.jpg.webp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPhamLinhJpgWebp} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Container">
      <PhamLinhJpgWebp />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-[#fff1e5] inset-0" data-name="Link">
      <Container2 />
    </div>
  );
}

function Figure() {
  return (
    <div className="bg-[#fffcf4] h-[180px] overflow-clip relative shrink-0 w-full" data-name="Figure">
      <Link />
    </div>
  );
}

function Heading3Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3 → Link">
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[22.4px] relative shrink-0 text-[#1a1a1a] text-[14.1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Góp ý dự thảo Chương trình hành</p>
        <p className="mb-0">động của Mặt trận Tổ quốc Việt Nam</p>
        <p>thực hiện Nghị quyết Đại hội Đảng</p>
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className="content-stretch flex flex-col gap-[14.905px] items-start relative shrink-0 w-full" data-name="Article">
      <Figure />
      <Heading3Link />
    </div>
  );
}

function DotPhaChienLuocKhcnCoverJpgWebp() {
  return (
    <div className="aspect-[270/180] min-h-[180px] relative shrink-0 w-full" data-name="dot-pha-chien-luoc-khcn-cover.jpg.webp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDotPhaChienLuocKhcnCoverJpgWebp} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Container">
      <DotPhaChienLuocKhcnCoverJpgWebp />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-[#fff1e5] inset-0" data-name="Link">
      <Container4 />
    </div>
  );
}

function Figure1() {
  return (
    <div className="bg-[#fffcf4] h-[180px] overflow-clip relative shrink-0 w-full" data-name="Figure">
      <Link1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[25px] relative w-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 25">
        <g id="Icon">
          <path d={svgPaths.p16d39cf0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-[25px] items-start relative shrink-0 w-[24px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(163,0,0,0.8)] content-stretch flex items-center justify-center pb-[8px] pt-[7px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container6 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[25px] relative w-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 25">
        <g id="Icon">
          <path d={svgPaths.p2f8cff80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col h-[25px] items-start relative shrink-0 w-[24px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(163,0,0,0.8)] content-stretch flex items-center justify-center pb-[8px] pt-[7px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container7 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bottom-[10px] content-stretch flex gap-[6px] items-center left-[10px]" data-name="Container">
      <Overlay />
      <Overlay1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Figure1 />
      <Container5 />
    </div>
  );
}

function Heading3Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3 → Link">
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[22.4px] relative shrink-0 text-[#1a1a1a] text-[14.1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">[Infographic] Nhiệm vụ trọng tâm về</p>
        <p className="mb-0">khoa học, công nghệ, đổi mới sáng tạo</p>
        <p>và chuyển đổi số</p>
      </div>
    </div>
  );
}

function Article1() {
  return (
    <div className="content-stretch flex flex-col gap-[14.905px] items-start relative shrink-0 w-full" data-name="Article">
      <Container3 />
      <Heading3Link1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[27.75px] relative row-1 self-start shrink-0" data-name="Container">
      <Article />
      <Article1 />
    </div>
  );
}

function A1Bnd88525050JpgWebp() {
  return (
    <div className="aspect-[570/380] min-h-[380px] relative shrink-0 w-full" data-name="a1-bnd-8852-5050.jpg.webp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-9.29%] max-w-none top-0 w-[118.58%]" src={imgA1Bnd88525050JpgWebp} />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Container">
      <A1Bnd88525050JpgWebp />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute bg-[#fff1e5] inset-0" data-name="Link">
      <Container8 />
    </div>
  );
}

function Figure2() {
  return (
    <div className="absolute bg-[#fffcf4] h-[380px] left-0 overflow-clip right-0 top-0" data-name="Figure">
      <Link2 />
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Time">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#929292] text-[12.2px] tracking-[0.26px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">13:29 06/03/2026</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-center flex flex-wrap items-center left-0 right-0 top-[396px]" data-name="Container">
      <Time />
    </div>
  );
}

function Heading3Link2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[425.3px]" data-name="Heading 3 → Link">
      <div className="flex flex-col font-['Barlow_Condensed:SemiBold',sans-serif] justify-center leading-[39.6px] not-italic relative shrink-0 text-[36px] text-[rgba(26,26,26,0.9)] whitespace-nowrap">
        <p className="mb-0">Làm rõ cả ưu điểm và hạn chế trong thể chế</p>
        <p>hóa các chủ trương lãnh đạo của Đảng</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[515.19px]" data-name="Container">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[0px] text-[12.1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">
          <span className="leading-[21px] text-[#666]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Chiều 6/3, tại Hà Nội, `}</span>
          <span className="leading-[21px] text-[#0d7680]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Tổng Bí thư Tô Lâm
          </span>
          <span className="leading-[21px] text-[#666]" style={{ fontVariationSettings: "'wdth' 100" }}>
            , Trưởng Đoàn Kiểm tra, giám sát số 10 của Bộ Chính trị,
          </span>
        </p>
        <p className="leading-[21px] mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          Ban Bí thư chủ trì Hội nghị công bố quyết định và triển khai kế hoạch kiểm tra, giám sát của Bộ
        </p>
        <p className="leading-[21px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Chính trị, Ban Bí thư năm 2026 đối với Ban Thường vụ Đảng ủy Quốc hội.
        </p>
      </div>
    </div>
  );
}

function Article2() {
  return (
    <div className="col-[2/span_2] h-[578.19px] justify-self-stretch relative row-1 shrink-0" data-name="Article">
      <Figure2 />
      <Container9 />
      <Heading3Link2 />
      <Container10 />
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="Link">
      <div className="-translate-y-1/2 absolute left-0 rounded-[17px] size-[34px] top-1/2" data-name="Image+Overlay">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[17px]">
          <div className="absolute bg-[rgba(237,28,36,0.1)] inset-0 rounded-[17px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[17px]">
            <img alt="" className="absolute left-[14.71%] max-w-none size-[70.59%] top-[14.71%]" src={imgImageOverlay} />
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[20px] justify-center leading-[0] left-[39px] text-[#a30000] text-[12.8px] top-[calc(50%-0.8px)] uppercase w-[130.75px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[19.6px]">Thông tin báo chí</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] gap-px items-start leading-[0] relative shrink-0 text-[#1a1a1a] whitespace-nowrap" data-name="Link">
      <div className="flex flex-col justify-center relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">Ban Bí thư quy định về quản lý và sử</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[14.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">dụng thẻ đảng viên</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative w-full">
        <Link4 />
      </div>
    </div>
  );
}

function Article3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[17px] right-[20px] top-0" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#f2dfce] border-b border-solid inset-0 pointer-events-none" />
      <Heading />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1bd0ab00} fill="var(--fill-0, #A30000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container16 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p163fe440} fill="var(--fill-0, #A30000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 top-[-1px]" data-name="Container">
      <Container15 />
      <Container17 />
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[67px] relative shrink-0 w-[249.05px]" data-name="Link">
      <Container14 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-[52px] text-[#1a1a1a] text-[14.1px] top-[9.5px] w-[197.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">[Infographic] Nhiệm vụ trọng</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[14.1px] top-[33.5px] w-[236.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">tâm về tăng cường quốc phòng, an</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[13.9px] top-[57.5px] w-[99.14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">ninh, đối ngoại</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3px] pt-[4px] relative w-full">
        <Link5 />
      </div>
    </div>
  );
}

function Article4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[17px] right-[20px] top-[81px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#f2dfce] border-b border-solid inset-0 pointer-events-none" />
      <Heading1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1bd0ab00} fill="var(--fill-0, #A30000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container21 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p163fe440} fill="var(--fill-0, #A30000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 top-[-1px]" data-name="Container">
      <Container20 />
      <Container22 />
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[91px] relative shrink-0 w-[249.05px]" data-name="Link">
      <Container19 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-[52px] text-[#1a1a1a] text-[14.1px] top-[9.5px] w-[197.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">[Infographic] Nhiệm vụ trọng</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[14.1px] top-[33.5px] w-[246.95px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">tâm về xây dựng, chỉnh đốn Đảng và</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[13.9px] top-[57.5px] w-[236.9px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">hệ thống chính trị trong sạch, vững</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[14.6px] top-[81.5px] w-[39.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">mạnh</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3px] pt-[4px] relative w-full">
        <Link6 />
      </div>
    </div>
  );
}

function Article5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[17px] right-[20px] top-[188px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#f2dfce] border-b border-solid inset-0 pointer-events-none" />
      <Heading2 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1bd0ab00} fill="var(--fill-0, #A30000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container26 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p163fe440} fill="var(--fill-0, #A30000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container28 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 top-[-1px]" data-name="Container">
      <Container25 />
      <Container27 />
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[67px] relative shrink-0 w-[238.41px]" data-name="Link">
      <Container24 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-[52px] text-[#1a1a1a] text-[14.1px] top-[9.5px] w-[172.84px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">[Infographic] Các chỉ tiêu</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[14px] top-[33.5px] w-[238.61px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">chủ yếu về phát triển kinh tế-xã hội</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[14.6px] top-[57.5px] w-[150.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">giai đoạn 2026-2030</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3px] pt-[4px] relative w-full">
        <Link7 />
      </div>
    </div>
  );
}

function Article6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[17px] right-[20px] top-[319px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#f2dfce] border-b border-solid inset-0 pointer-events-none" />
      <Heading3 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p163fe440} fill="var(--fill-0, #A30000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon8 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container31 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[-1px]" data-name="Container">
      <Container30 />
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[91px] relative shrink-0 w-[246.92px]" data-name="Link">
      <Container29 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-[26px] text-[#1a1a1a] text-[14.1px] top-[9.5px] w-[221.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">[Infographic] Hội nghị toàn quốc</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[13.8px] top-[33.5px] w-[224.72px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">nghiên cứu, học tập, quán triệt và</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[14.1px] top-[57.5px] w-[234.93px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">triển khai thực hiện Nghị quyết Đại</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[14.3px] top-[81.5px] w-[118.29px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">hội XIV của Đảng</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3px] pt-[4px] relative w-full">
        <Link8 />
      </div>
    </div>
  );
}

function Article7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[17px] right-[20px] top-[426px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#f2dfce] border-b border-solid inset-0 pointer-events-none" />
      <Heading4 />
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] gap-px items-start leading-[0] relative shrink-0 text-[#1a1a1a] whitespace-nowrap" data-name="Link">
      <div className="flex flex-col justify-center relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">Nhận thức, tư duy mới về an ninh</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[14.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">trong Nghị quyết Đại hội XIV của</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[14.6px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">Đảng</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative w-full">
        <Link9 />
      </div>
    </div>
  );
}

function Article8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[17px] right-[20px] top-[557px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#f2dfce] border-b border-solid inset-0 pointer-events-none" />
      <Heading5 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p163fe440} fill="var(--fill-0, #A30000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container34 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[-1px]" data-name="Container">
      <Container33 />
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[43px] relative shrink-0 w-[243.16px]" data-name="Link">
      <Container32 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-[26px] text-[#1a1a1a] text-[14.1px] top-[9.5px] w-[217.36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">Nghị quyết Đại hội đại biểu toàn</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[14.1px] top-[33.5px] w-[181.93px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">quốc lần thứ XIV của Đảng</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3px] pt-[4px] relative w-full">
        <Link10 />
      </div>
    </div>
  );
}

function Article9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[17px] right-[20px] top-[662px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#f2dfce] border-b border-solid inset-0 pointer-events-none" />
      <Heading6 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p163fe440} fill="var(--fill-0, #A30000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container37 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[-1px]" data-name="Container">
      <Container36 />
    </div>
  );
}

function Link11() {
  return (
    <div className="h-[91px] relative shrink-0 w-[248.66px]" data-name="Link">
      <Container35 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-[26px] text-[#1a1a1a] text-[14.3px] top-[9.5px] w-[195.76px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">Chương trình hành động của</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[14.3px] top-[33.5px] w-[227.53px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">Ban Chấp hành Trung ương Đảng</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[14.1px] top-[57.5px] w-[217.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">thực hiện Nghị quyết Đại hội đại</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[14.1px] top-[81.5px] w-[248.86px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">biểu toàn quốc lần thứ XIV của Đảng</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3px] pt-[4px] relative w-full">
        <Link11 />
      </div>
    </div>
  );
}

function Article10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[17px] right-[20px] top-[745px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#f2dfce] border-b border-solid inset-0 pointer-events-none" />
      <Heading7 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p163fe440} fill="var(--fill-0, #A30000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon11 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container40 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[-1px]" data-name="Container">
      <Container39 />
    </div>
  );
}

function Link12() {
  return (
    <div className="h-[91px] relative shrink-0 w-[239.25px]" data-name="Link">
      <Container38 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-[26px] text-[#1a1a1a] text-[14.1px] top-[9.5px] w-[213.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">Báo cáo chính trị của Ban Chấp</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[14.1px] top-[33.5px] w-[239.26px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">hành Trung ương Đảng khóa XIII tại</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[14px] top-[57.5px] w-[227px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">Đại hội đại biểu toàn quốc lần thứ</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[14.4px] top-[81.5px] w-[93.93px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">XIV của Đảng</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3px] pt-[4px] relative w-full">
        <Link12 />
      </div>
    </div>
  );
}

function Article11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[17px] right-[20px] top-[876px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#f2dfce] border-b border-solid inset-0 pointer-events-none" />
      <Heading8 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p163fe440} fill="var(--fill-0, #A30000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon12 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container43 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[-1px]" data-name="Container">
      <Container42 />
    </div>
  );
}

function Link13() {
  return (
    <div className="h-[91px] relative shrink-0 w-[249.27px]" data-name="Link">
      <Container41 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-[26px] text-[#1a1a1a] text-[14.1px] top-[9.5px] w-[189.14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">Báo cáo tổng kết 15 năm thi</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[14.4px] top-[33.5px] w-[238.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">hành Điều lệ Đảng (2011-2025) và</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[13.9px] top-[57.5px] w-[249.47px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">đề xuất, định hướng bổ sung, sửa đổi</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[23px] justify-center leading-[0] left-0 text-[#1a1a1a] text-[14.1px] top-[81.5px] w-[87.93px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.4px]">Điều lệ Đảng</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[3px] pt-[4px] relative w-full">
        <Link13 />
      </div>
    </div>
  );
}

function Article12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[17px] right-[20px] top-[1007px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#f2dfce] border-b border-solid inset-0 pointer-events-none" />
      <Heading9 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[525px] max-h-[525px] overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="Container">
      <Article3 />
      <Article4 />
      <Article5 />
      <Article6 />
      <Article7 />
      <Article8 />
      <Article9 />
      <Article10 />
      <Article11 />
      <Article12 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="absolute bg-[#f2dfce] bottom-0 right-[-2.5px] rounded-[9999px] size-[5px]" data-name="Background" />
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[7px] items-start justify-self-stretch pb-[12.19px] relative row-1 self-start shrink-0" data-name="Container">
      <Link3 />
      <Container12 />
    </div>
  );
}

function CoverNhiemVuChuYeuJpgWebp() {
  return (
    <div className="aspect-[270/180] min-h-[180px] relative shrink-0 w-full" data-name="cover-nhiem-vu-chu-yeu.jpg.webp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCoverNhiemVuChuYeuJpgWebp} />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Container">
      <CoverNhiemVuChuYeuJpgWebp />
    </div>
  );
}

function Link14() {
  return (
    <div className="absolute bg-[#fff1e5] inset-0" data-name="Link">
      <Container46 />
    </div>
  );
}

function Figure3() {
  return (
    <div className="bg-[#fffcf4] h-[180px] overflow-clip relative shrink-0 w-full" data-name="Figure">
      <Link14 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[25px] relative w-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 25">
        <g id="Icon">
          <path d={svgPaths.p16d39cf0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col h-[25px] items-start relative shrink-0 w-[24px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon13 />
        </div>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(163,0,0,0.8)] content-stretch flex items-center justify-center pb-[8px] pt-[7px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container48 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[25px] relative w-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 25">
        <g id="Icon">
          <path d={svgPaths.p2f8cff80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col h-[25px] items-start relative shrink-0 w-[24px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon14 />
        </div>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(163,0,0,0.8)] content-stretch flex items-center justify-center pb-[8px] pt-[7px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container49 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bottom-[10px] content-stretch flex gap-[6px] items-center left-[10px]" data-name="Container">
      <Overlay2 />
      <Overlay3 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Figure3 />
      <Container47 />
    </div>
  );
}

function Heading3Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3 → Link">
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[22.4px] relative shrink-0 text-[#1a1a1a] text-[14.1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">[Infographic] Nhiệm vụ chủ yếu theo</p>
        <p className="mb-0">Chương trình hành động của Ban</p>
        <p>Chấp hành Trung ương Đảng</p>
      </div>
    </div>
  );
}

function Article13() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[14.905px] items-start justify-self-stretch pb-[44.81px] relative row-1 self-start shrink-0" data-name="Article">
      <Container45 />
      <Heading3Link3 />
    </div>
  );
}

function Bnd77388383JpgWebp() {
  return (
    <div className="aspect-[270/180] min-h-[180px] relative shrink-0 w-full" data-name="bnd-7738-8383.jpg.webp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBnd77388383JpgWebp} />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Container">
      <Bnd77388383JpgWebp />
    </div>
  );
}

function Link15() {
  return (
    <div className="absolute bg-[#fff1e5] inset-0" data-name="Link">
      <Container50 />
    </div>
  );
}

function Figure4() {
  return (
    <div className="bg-[#fffcf4] h-[180px] overflow-clip relative shrink-0 w-full" data-name="Figure">
      <Link15 />
    </div>
  );
}

function Heading3Link4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.72px] relative shrink-0 w-full" data-name="Heading 3 → Link">
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[22.4px] relative shrink-0 text-[#1a1a1a] text-[14.5px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Phát biểu của Tổng Bí thư Tô Lâm tại</p>
        <p className="mb-0">Hội nghị toàn quốc quán triệt và triển</p>
        <p className="mb-0">khai thực hiện Nghị quyết số 79-</p>
        <p className="mb-0">NQ/TW, Nghị quyết số 80-NQ/TW của</p>
        <p>Bộ Chính trị</p>
      </div>
    </div>
  );
}

function Article14() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[15.31px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Article">
      <Figure4 />
      <Heading3Link4 />
    </div>
  );
}

function Bnd7754JpgWebp() {
  return (
    <div className="aspect-[270/180] min-h-[180px] relative shrink-0 w-full" data-name="bnd-7754.jpg.webp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBnd7754JpgWebp} />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Container">
      <Bnd7754JpgWebp />
    </div>
  );
}

function Link16() {
  return (
    <div className="absolute bg-[#fff1e5] inset-0" data-name="Link">
      <Container51 />
    </div>
  );
}

function Figure5() {
  return (
    <div className="bg-[#fffcf4] h-[180px] overflow-clip relative shrink-0 w-full" data-name="Figure">
      <Link16 />
    </div>
  );
}

function Heading3Link5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.52px] relative shrink-0 w-full" data-name="Heading 3 → Link">
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[22.4px] relative shrink-0 text-[#1a1a1a] text-[14.5px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Hội nghị toàn quốc quán triệt, triển</p>
        <p className="mb-0">khai thực hiện Nghị quyết số 79-</p>
        <p className="mb-0">NQ/TW và Nghị quyết số 80-NQ/TW</p>
        <p>của Bộ Chính trị</p>
      </div>
    </div>
  );
}

function Article15() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[15.11px] items-start justify-self-stretch pb-[22.4px] relative row-1 self-start shrink-0" data-name="Article">
      <Figure5 />
      <Heading3Link5 />
    </div>
  );
}

function Bnd77388383JpgWebp1() {
  return (
    <div className="aspect-[270/180] min-h-[180px] relative shrink-0 w-full" data-name="bnd-7738-8383.jpg.webp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBnd77388383JpgWebp} />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Container">
      <Bnd77388383JpgWebp1 />
    </div>
  );
}

function Link17() {
  return (
    <div className="absolute bg-[#fff1e5] inset-0" data-name="Link">
      <Container53 />
    </div>
  );
}

function Figure6() {
  return (
    <div className="bg-[#fffcf4] h-[180px] overflow-clip relative shrink-0 w-full" data-name="Figure">
      <Link17 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[25px] relative w-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 25">
        <g id="Icon">
          <path d={svgPaths.p2f8cff80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col h-[25px] items-start relative shrink-0 w-[24px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon15 />
        </div>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(163,0,0,0.8)] content-stretch flex items-center justify-center pb-[8px] pt-[7px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container55 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[25px] relative w-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 25">
        <g id="Icon">
          <path d={svgPaths.p3e4c6700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col h-[25px] items-start relative shrink-0 w-[24px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon16 />
        </div>
      </div>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(163,0,0,0.8)] content-stretch flex items-center justify-center pb-[8px] pt-[7px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container56 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bottom-[10px] content-stretch flex gap-[6px] items-center left-[10px]" data-name="Container">
      <Overlay4 />
      <Overlay5 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Figure6 />
      <Container54 />
    </div>
  );
}

function Heading3Link6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.52px] relative shrink-0 w-full" data-name="Heading 3 → Link">
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[22.4px] relative shrink-0 text-[#1a1a1a] text-[14.1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">[Ảnh] Hội nghị toàn quốc nghiên cứu,</p>
        <p className="mb-0">học tập, quán triệt và triển khai thực</p>
        <p className="mb-0">hiện các Nghị quyết số 79 và số 80</p>
        <p>của Bộ Chính trị</p>
      </div>
    </div>
  );
}

function Article16() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[15.11px] items-start justify-self-stretch pb-[22.4px] relative row-1 self-start shrink-0" data-name="Article">
      <Container52 />
      <Heading3Link6 />
    </div>
  );
}

function Container44() {
  return (
    <div className="col-[1/span_4] gap-x-[30px] gap-y-[30px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_308.03px] h-[308.03px] justify-self-stretch relative row-2 shrink-0" data-name="Container">
      <Article13 />
      <Article14 />
      <Article15 />
      <Article16 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="gap-x-[30px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[__578.19px_308.03px] px-[20px] relative size-full" data-name="Container">
      <Container1 />
      <Article2 />
      <Container11 />
      <Container44 />
    </div>
  );
}