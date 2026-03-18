import svgPaths from "./svg-fcfupgu55t";
import imgHeader from "figma:asset/277a74e218e8afcde92d7dd3ea8b661ece1eb03d.png";
import imgLinkCngThongTinDinTDngCngSnVitNam from "figma:asset/086d4f71d1becf5a933dff60069dcd8c8b1946d2.png";
import imgCngThongTinDinTDngCngSnVitNam from "figma:asset/1a3f423932f8583bc5d89a018398de6bd7ce8f6c.png";
import imgMic from "figma:asset/b5e9f19b107be0066e10bca5062508ed0eed673f.png";
import imgBannerBauCu4C36BPng from "figma:asset/4892ae24ea058e0d96babad5d36927431c1bf6ca.png";

function LinkCngThongTinDinTDngCngSnVitNam() {
  return (
    <div className="h-[90px] relative shrink-0 w-[146px]" data-name="Link → Cổng thông tin điện tử Đảng Cộng sản Việt Nam">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLinkCngThongTinDinTDngCngSnVitNam} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkCngThongTinDinTDngCngSnVitNam />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c0891f] text-[28px] text-center uppercase whitespace-nowrap">
        <p className="leading-[39.2px]">Cổng thông tin điện tử</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#db0713] text-[40px] text-center uppercase whitespace-nowrap">
        <p className="leading-[56px]">Ban Tuyên giáo và Dân vận</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.01px] px-[48px] relative shrink-0 w-[649px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function CngThongTinDinTDngCngSnVitNam() {
  return (
    <div className="h-[100px] relative shrink-0 w-[177px]" data-name="Cổng thông tin điện tử Đảng Cộng sản Việt Nam">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCngThongTinDinTDngCngSnVitNam} />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <CngThongTinDinTDngCngSnVitNam />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
      <Container7 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-start py-[33px] relative shrink-0 w-full" data-name="Header">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[96.39%] left-[10.82%] max-w-none top-0 w-[78.37%]" src={imgHeader} />
      </div>
      <Container2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] relative shrink-0 w-[1360px]" data-name="Container">
      <Header />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Background">
      <Container1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#999] text-[16px] w-full">
        <p className="leading-[normal]">Tìm kiếm...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[36px] relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[12px] pr-[40px] py-[8px] relative size-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Mic() {
  return (
    <div className="absolute max-w-[1920px] right-0 size-[34px] top-0" data-name="mic">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMic} />
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <Input />
      <Mic />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start opacity-0 right-0 top-0 w-[200px]" data-name="Container">
      <Form />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[17px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Icon">
          <path d={svgPaths.p3b6e6a80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
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

function Link() {
  return (
    <div className="bg-[#ba0610] content-stretch flex flex-col h-[50px] items-start pb-[18px] pt-[15px] px-[12px] relative shrink-0" data-name="Link">
      <Container14 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Item">
      <Link />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col h-[51.22px] items-start pt-[1.22px] px-[8px] relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">
        <p className="leading-[50px]">Tin hoạt động</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col h-[51.22px] items-start pt-[1.22px] px-[8px] relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">
        <p className="leading-[50px]">Xây dựng Đảng</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col h-[51.22px] items-start pt-[1.22px] px-[8px] relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">
        <p className="leading-[50px]">Vấn đề quan tâm</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col h-[51.22px] items-start pt-[1.22px] px-[8px] relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">
        <p className="leading-[50px]">Trang tin Hồ Chí Minh</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col h-[51.22px] items-start pt-[1.22px] px-[8px] relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">
        <p className="leading-[50px]">Tư liệu văn kiện</p>
      </div>
    </div>
  );
}

function ItemLink() {
  return <div className="absolute border-[#dc143c] border-b border-dashed h-[35px] left-px right-[1.2px] top-px" data-name="Item → Link" />;
}

function List1() {
  return (
    <div className="absolute bg-[#f4f4f5] h-[2px] left-0 min-w-[200px] opacity-0 right-0 rounded-bl-[8px] rounded-br-[8px] top-[100px]" data-name="List">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ItemLink />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ec7d00] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col h-[51.22px] items-start pt-[1.22px] px-[8px] relative shrink-0" data-name="Item">
      <List1 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">
        <p className="leading-[50px]">Cơ quan đảng Trung ương</p>
      </div>
    </div>
  );
}

function ItemLink1() {
  return <div className="absolute border-[#dc143c] border-b border-dashed h-[35px] left-px right-[1.19px] top-px" data-name="Item → Link" />;
}

function List2() {
  return (
    <div className="absolute bg-[#f4f4f5] h-[2px] left-0 min-w-[200px] opacity-0 right-[-109.19px] rounded-bl-[8px] rounded-br-[8px] top-[100px]" data-name="List">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ItemLink1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ec7d00] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col h-[51.22px] items-start pt-[1.22px] px-[8px] relative shrink-0" data-name="Item">
      <List2 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">
        <p className="leading-[50px]">Bộ Ngành</p>
      </div>
    </div>
  );
}

function ItemLink2() {
  return <div className="absolute border-[#dc143c] border-b border-dashed h-[35px] left-px right-[0.92px] top-px" data-name="Item → Link" />;
}

function List3() {
  return (
    <div className="absolute bg-[#f4f4f5] h-[2px] left-0 min-w-[200px] opacity-0 right-[-68.92px] rounded-bl-[8px] rounded-br-[8px] top-[100px]" data-name="List">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ItemLink2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ec7d00] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col h-[51.22px] items-start pt-[1.22px] px-[8px] relative shrink-0" data-name="Item">
      <List3 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">
        <p className="leading-[50px]">Tỉnh, thành ủy</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[50px] items-start min-h-px min-w-px mr-[-2px] relative" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pa723a80} fill="var(--fill-0, white)" id="Vector" />
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
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-center pb-px relative shrink-0" data-name="Container">
      <Container16 />
    </div>
  );
}

function ButtonMenu() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-2px] relative self-stretch shrink-0 w-[24px]" data-name="Button - Menu">
      <Container15 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-start pr-[2px] relative shrink-0 w-[1267.23px]" data-name="Container">
      <List />
      <ButtonMenu />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Container13 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[21px] relative w-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
        <g id="Icon">
          <path d={svgPaths.p2e834800} fill="var(--fill-0, white)" id="Vector" />
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
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(229,141,144,0.5)] content-stretch flex items-start justify-center pb-[7px] pt-[8px] relative rounded-[20px] shrink-0 w-[36px]" data-name="Button">
      <Container18 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[21px] relative w-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
        <g id="Icon">
          <path d={svgPaths.p30e33e50} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
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

function ButtonMenu1() {
  return (
    <div className="bg-[rgba(229,141,144,0.5)] content-stretch flex items-start justify-center pb-[7px] pt-[8px] relative rounded-[20px] shrink-0 w-[36px]" data-name="Button menu">
      <Container19 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[6.77px] items-start justify-center relative shrink-0" data-name="Container">
      <Button />
      <ButtonMenu1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Margin">
      <Container17 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[50px] items-center relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container12 />
      <Margin />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1360px]" data-name="Container">
      <Container9 />
    </div>
  );
}

function NavThcDn() {
  return (
    <div className="bg-[#db0713] content-stretch flex flex-col h-[50px] items-center relative shrink-0 w-full" data-name="Nav - Thực đơn">
      <Container8 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p37450f00} fill="var(--fill-0, #101828)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
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

function Container23() {
  return (
    <div className="content-stretch flex items-start justify-center pb-px pt-[2px] relative shrink-0" data-name="Container">
      <Container24 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.72px] items-center px-[14.22px] relative w-full">
          <Container23 />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[44px]">Thứ sáu, 13/03/2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f4f4f5] relative shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[10px] relative w-full">
        <Container22 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-[215px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Background2 />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex items-start left-[556.66px] pl-[15px] right-[-248.94px] top-[-0.5px]" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[15px] whitespace-nowrap">
        <p className="leading-[44px]">[Megastory] Bài 5: Hướng về ngày bầu cử 15/3 - Khí thế ngày hội lớn lan tỏa từ đất liền đến biển đảo</p>
      </div>
      <div className="-translate-y-1/2 absolute bg-[#db0713] left-0 rounded-[3px] size-[6px] top-1/2" data-name="Background" />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[44px] overflow-clip relative shrink-0 w-[1069px]" data-name="Container">
      <Link1 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f4f4f5] h-[44px] relative shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[10px] relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-[1105px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <Background3 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center pb-[17px] relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <Container21 />
      <Container25 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[16px] relative shrink-0 w-[1360px]" data-name="Background">
      <Section />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Background1 />
    </div>
  );
}

function BannerBauCu4C36BPng() {
  return (
    <div className="h-[100px] max-w-[1320px] relative shrink-0 w-[1320px]" data-name="banner_bau_cu_4c36b.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBannerBauCu4C36BPng} />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <BannerBauCu4C36BPng />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Link2 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[16px] px-[20px] relative shrink-0 w-[1360px]" data-name="Background">
      <Container28 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Background4 />
    </div>
  );
}

const navMenuItems = [
  "Giới thiệu",
  "Tin tức, hoạt động",
  "Văn bản mới",
  "Xây dựng đảng",
  "NGHỊ QUYẾT 57-NQ/TW",
];

export { Container20, Container27 };

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <Background />
      {/* Custom Nav Menu */}
      <div className="bg-[#db0713] content-stretch flex flex-col h-[50px] items-center relative shrink-0 w-full" data-name="Nav - Thực đơn">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1360px]" data-name="Container">
          <div className="content-stretch flex h-[50px] items-center relative shrink-0 w-full" data-name="Container">
            {/* Search (hidden) */}
            <Container10 />
            {/* Menu items */}
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
              <div className="content-stretch flex items-start pr-[2px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-[1_0_0] h-[50px] items-start min-h-px min-w-px mr-[-2px] relative" data-name="List">
                  {/* Search icon item */}
                  <Item />
                  {/* Menu text items */}
                  {navMenuItems.map((label) => (
                    <div key={label} className="content-stretch flex flex-col h-[51.22px] items-start pt-[1.22px] px-[8px] relative shrink-0 cursor-pointer hover:bg-[#ba0610] transition-colors" data-name="Item">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">
                        <p className="leading-[50px]">{label}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <ButtonMenu />
              </div>
            </div>
            {/* Right buttons */}
            <Margin />
          </div>
        </div>
      </div>
    </div>
  );
}