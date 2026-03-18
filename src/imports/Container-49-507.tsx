import svgPaths from "./svg-hy4dw1gk0f";
import imgImage from "figma:asset/59c7c4bec55305ba484e0f206690da9a3d69fe65.png";
import imgGiiPhapGiupHKinhDoanhKeKhaiThuDungAnTamTuanThPhatTrinBnVng from "figma:asset/ec51da1f99eb307114937378fdf8da71bea074bd.png";
import imgCongTacChunBChoNgayBuCCBnHoanThanh from "figma:asset/a9ec66ad75e4313880d5959563e06cdeabc50e99.png";
import imgBoDmCungngXangDuChoSnXutKinhDoanhVaTieuDungCaNgiDanDoanhNghip from "figma:asset/10e83c4f778d8702031f776247023f9e9f3b522c.png";
import imgQuyDnhVChcNangNhimVCaBanChDoTrungngVPhatTrinVanHoaVitNam from "figma:asset/ef973c841227057d46a18c0cf88f8f0e597655a0.png";
import imgTipTcThcHinChThCaBChinhTrVLanhDoCucBuCDiBiuQucHiKhoaXviVaBuCDiBiuHiDngNhanDanCacCpNhimK20262031 from "figma:asset/65e44dce6542c69681022799eb84a9920d21817f.png";
import imgThanhLpBanChDoTrungngVPhatTrinVanHoaVitNam from "figma:asset/143585ffb862275d9930f577bd17610d32fe118d.png";

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[18px] uppercase w-full">
          <p className="leading-[24px]">Vấn đề quan tâm</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-[#ededed] border-b border-solid border-t inset-0 pointer-events-none" />
      <Heading />
      <div className="absolute h-[24px] right-[10px] top-[11px] w-[25px]" data-name="Image">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
        </div>
      </div>
    </div>
  );
}

function GiiPhapGiupHKinhDoanhKeKhaiThuDungAnTamTuanThPhatTrinBnVng() {
  return (
    <div className="h-[208px] max-w-[328px] relative shrink-0 w-[312px]" data-name="Giải pháp giúp hộ kinh doanh kê khai thuế đúng, an tâm tuân thủ, phát triển bền vững">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGiiPhapGiupHKinhDoanhKeKhaiThuDungAnTamTuanThPhatTrinBnVng} />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <GiiPhapGiupHKinhDoanhKeKhaiThuDungAnTamTuanThPhatTrinBnVng />
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <Link />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] pt-[6px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold items-start leading-[0] not-italic relative shrink-0 text-[#101828] text-[18px] w-full whitespace-nowrap" data-name="Link">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Giải pháp giúp hộ kinh doanh kê</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">khai thuế đúng, an tâm tuân thủ,</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">phát triển bền vững</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="mb-0">(ĐCSVN) - Chiều 12/3, tại Hà Nội, Cổng</p>
        <p className="mb-0">Thông tin điện tử Chính phủ và Cục</p>
        <p className="mb-0">Thuế chủ trì, phối hợp với Công ty Cổ</p>
        <p>phần Công nghệ Sapo tổ chức Hội ...</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2c630800} fill="var(--fill-0, #515869)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
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

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#515869] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">ĐCSVN</p>
      </div>
      <Container9 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#515869] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">12/03/2026</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[12px] pr-[8px] relative size-full">
        <Link1 />
        <Container7 />
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
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-wrap gap-0 h-[240px] items-start justify-center left-[-8px] right-[-8px] top-0" data-name="Container">
      <Margin />
      <Margin1 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="h-[241px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
      <Container4 />
    </div>
  );
}

function CongTacChunBChoNgayBuCCBnHoanThanh() {
  return (
    <div className="h-[99px] max-w-[164px] relative shrink-0 w-[148px]" data-name="Công tác chuẩn bị cho Ngày bầu cử cơ bản hoàn thành">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCongTacChunBChoNgayBuCCBnHoanThanh} />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[10px] relative shrink-0" data-name="Link">
      <CongTacChunBChoNgayBuCCBnHoanThanh />
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <Link2 />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative self-stretch shrink-0 w-[164px]" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] relative size-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="leading-[24px]">Công tác chuẩn bị cho Ngày bầu cử cơ bản hoàn thành</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2c630800} fill="var(--fill-0, #515869)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
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

function Container14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#515869] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">ĐCSVN</p>
      </div>
      <Container15 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#515869] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">12/03/2026</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[11.5px] items-start px-[8px] relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative self-stretch shrink-0 w-[492px]" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] relative size-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-wrap gap-0 h-[115px] items-start justify-center left-[-8px] right-[-8px] top-0" data-name="Container">
      <Margin2 />
      <Margin3 />
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="h-[116px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
      <Container10 />
    </div>
  );
}

function BoDmCungngXangDuChoSnXutKinhDoanhVaTieuDungCaNgiDanDoanhNghip() {
  return (
    <div className="h-[99px] max-w-[164px] relative shrink-0 w-[148px]" data-name="Bảo đảm cung ứng xăng dầu cho sản xuất, kinh doanh và tiêu dùng của người dân, doanh nghiệp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBoDmCungngXangDuChoSnXutKinhDoanhVaTieuDungCaNgiDanDoanhNghip} />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[10px] relative shrink-0" data-name="Link">
      <BoDmCungngXangDuChoSnXutKinhDoanhVaTieuDungCaNgiDanDoanhNghip />
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <Link3 />
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative self-stretch shrink-0 w-[164px]" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] relative size-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[0] min-w-[476px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap" data-name="Link">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Bảo đảm cung ứng xăng dầu cho sản xuất, kinh doanh và tiêu</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">dùng của người dân, doanh nghiệp</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link4 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2c630800} fill="var(--fill-0, #515869)" id="Vector" />
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
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#515869] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">ĐCSVN</p>
      </div>
      <Container21 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#515869] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">12/03/2026</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[11.5px] items-start px-[8px] relative size-full">
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="relative self-stretch shrink-0 w-[492px]" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] relative size-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-wrap gap-0 h-[115px] items-start justify-center left-[-8px] right-[-8px] top-0" data-name="Container">
      <Margin4 />
      <Margin5 />
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="h-[116px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
      <Container16 />
    </div>
  );
}

function Article() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Article">
      <HorizontalBorder1 />
      <HorizontalBorder2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder />
      <Article />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[24px] px-[20px] relative w-full">
        <Container2 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[18px] uppercase w-full">
          <p className="leading-[24px]">Hướng dẫn công tác Đảng</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-[#ededed] border-b border-solid border-t inset-0 pointer-events-none" />
      <Heading1 />
      <div className="absolute h-[24px] right-[10px] top-[11px] w-[25px]" data-name="Image">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
        </div>
      </div>
    </div>
  );
}

function QuyDnhVChcNangNhimVCaBanChDoTrungngVPhatTrinVanHoaVitNam() {
  return (
    <div className="h-[208px] max-w-[328px] relative shrink-0 w-[312px]" data-name="Quy định về chức năng, nhiệm vụ của Ban Chỉ đạo Trung ương về phát triển văn hoá Việt Nam">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgQuyDnhVChcNangNhimVCaBanChDoTrungngVPhatTrinVanHoaVitNam} />
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <QuyDnhVChcNangNhimVCaBanChDoTrungngVPhatTrinVanHoaVitNam />
    </div>
  );
}

function Container26() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <Link5 />
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] pt-[6px] relative size-full">
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold items-start leading-[0] not-italic relative shrink-0 text-[#101828] text-[18px] w-full whitespace-nowrap" data-name="Link">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Quy định về chức năng, nhiệm vụ</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">của Ban Chỉ đạo Trung ương về</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">phát triển văn hoá Việt Nam</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="mb-0">(ĐCSVN) - Thay mặt Bộ Chính trị, đồng</p>
        <p className="mb-0">chí Trần Cẩm Tú, Ủy viên Bộ Chính trị,</p>
        <p className="mb-0">Thường trực Ban Bí thư đã ký ban hành</p>
        <p>Quy định số 08-QĐ/TW ngày ...</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2c630800} fill="var(--fill-0, #515869)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
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

function Container29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#515869] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">ĐCSVN</p>
      </div>
      <Container30 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#515869] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">06/03/2026</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[12px] pr-[8px] relative size-full">
        <Link6 />
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] relative size-full">
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-wrap gap-0 h-[240px] items-start justify-center left-[-8px] right-[-8px] top-0" data-name="Container">
      <Margin6 />
      <Margin7 />
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="h-[241px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
      <Container25 />
    </div>
  );
}

function TipTcThcHinChThCaBChinhTrVLanhDoCucBuCDiBiuQucHiKhoaXviVaBuCDiBiuHiDngNhanDanCacCpNhimK() {
  return (
    <div className="h-[99px] max-w-[164px] relative shrink-0 w-[148px]" data-name="Tiếp tục thực hiện Chỉ thị của Bộ Chính trị về lãnh đạo cuộc bầu cử đại biểu Quốc hội khoá XVI và bầu cử đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2026 - 2031">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTipTcThcHinChThCaBChinhTrVLanhDoCucBuCDiBiuQucHiKhoaXviVaBuCDiBiuHiDngNhanDanCacCpNhimK20262031} />
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[10px] relative shrink-0" data-name="Link">
      <TipTcThcHinChThCaBChinhTrVLanhDoCucBuCDiBiuQucHiKhoaXviVaBuCDiBiuHiDngNhanDanCacCpNhimK />
    </div>
  );
}

function Container32() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <Link7 />
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="relative self-stretch shrink-0 w-[164px]" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] relative size-full">
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[0] min-w-[476px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap" data-name="Link">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Tiếp tục thực hiện Chỉ thị của Bộ Chính trị về lãnh đạo cuộc</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">bầu cử đại biểu Quốc hội khoá XVI và bầu cử đại biểu Hội</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">đồng nhân dân các cấp nhiệm kỳ 2026 - 2031</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link8 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2c630800} fill="var(--fill-0, #515869)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
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

function Container35() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#515869] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">ĐCSVN</p>
      </div>
      <Container36 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#515869] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">26/02/2026</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[11.5px] items-start px-[8px] relative size-full">
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="relative self-stretch shrink-0 w-[492px]" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] relative size-full">
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-wrap gap-0 h-[124px] items-start justify-center left-[-8px] right-[-8px] top-0" data-name="Container">
      <Margin8 />
      <Margin9 />
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="h-[125px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
      <Container31 />
    </div>
  );
}

function ThanhLpBanChDoTrungngVPhatTrinVanHoaVitNam() {
  return (
    <div className="h-[99px] max-w-[164px] relative shrink-0 w-[148px]" data-name="Thành lập Ban Chỉ đạo Trung ương về phát triển văn hoá Việt Nam">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgThanhLpBanChDoTrungngVPhatTrinVanHoaVitNam} />
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[10px] relative shrink-0" data-name="Link">
      <ThanhLpBanChDoTrungngVPhatTrinVanHoaVitNam />
    </div>
  );
}

function Container38() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <Link9 />
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="relative self-stretch shrink-0 w-[164px]" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] relative size-full">
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[0] min-w-[476px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap" data-name="Link">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Thành lập Ban Chỉ đạo Trung ương về phát triển văn hoá Việt</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Nam</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link10 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2c630800} fill="var(--fill-0, #515869)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
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

function Container41() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#515869] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">ĐCSVN</p>
      </div>
      <Container42 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#515869] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">26/02/2026</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[11.5px] items-start px-[8px] relative size-full">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="relative self-stretch shrink-0 w-[492px]" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] relative size-full">
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-wrap gap-0 h-[115px] items-start justify-center left-[-8px] right-[-8px] top-0" data-name="Container">
      <Margin10 />
      <Margin11 />
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="h-[116px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
      <Container37 />
    </div>
  );
}

function Article1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Article">
      <HorizontalBorder4 />
      <HorizontalBorder5 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder3 />
      <Article1 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder1 />
      <Container24 />
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[24px] px-[20px] relative w-full">
        <Container23 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Container">
      <Container1 />
      <Container22 />
    </div>
  );
}