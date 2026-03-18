import imgBackground from "figma:asset/b27ec5d37cff4c48aed7c27a316a50622e9ec94d.png";
import imgLogo from "figma:asset/8c2368a33e17d2fd5c3f2943522a29ef905597e1.png";

function Logo() {
  return (
    <div className="h-[50px] relative shrink-0 w-[76.27px]" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLogo} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Logo />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c0891f] text-[0px] uppercase whitespace-nowrap">
        <p className="leading-[24px] text-[15px]">Cổng thông tin điện tử</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#db0713] text-[0px] uppercase whitespace-nowrap">
        <p className="leading-[24px] text-[20px]">Đảng Cộng Sản Việt Nam</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0 w-[293px]" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Textbox() {
  return (
    <div className="relative shrink-0 w-full" data-name="Textbox">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[10px] pr-[30px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
            <p className="leading-[22.86px]">-- Chọn liên kết --</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComboboxMenu() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[36px] items-start px-px py-[6.58px] relative rounded-[8px] shrink-0 w-full" data-name="Combobox menu">
      <div aria-hidden="true" className="absolute border border-[#9d9d9d] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Textbox />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[36px] right-[10px] top-px w-[10px]" data-name="Container">
      <div className="-translate-x-1/2 absolute border-[#888] border-l-4 border-r-4 border-solid border-t-5 h-[5px] left-1/2 top-[15.3px] w-[8px]" data-name="Border" />
    </div>
  );
}

function Aside() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Aside">
      <ComboboxMenu />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[24px]">Trụ sở: 1A Hùng Vương, Ba Đình, Hà Nội</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[24px]">E-mail: congdcsvn@vptw.dcs.vn</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Link />
      <Aside />
      <Container9 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px mr-[-3px] pb-[10px] px-[12px] relative shrink-0 w-[400px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[24px]">Tổng Bí thư</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="min-h-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[16px] px-[8px] relative w-full">
        <Link1 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[24px]">Chủ tịch nước</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="min-h-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[16px] px-[8px] relative w-full">
        <Link2 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[24px]">Thủ tướng Chính phủ</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="min-h-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[16px] px-[8px] relative w-full">
        <Link3 />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[24px]">Chủ tịch Quốc hội</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="min-h-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[16px] px-[8px] relative w-full">
        <Link4 />
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[24px]">Đồng chí Thường trực Ban Bí thư</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="min-h-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[16px] px-[8px] relative w-full">
        <Link5 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[246px]" data-name="Container">
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px pb-[24px] relative shrink-0 w-[243px]" data-name="Container">
      <Container15 />
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[24px]">Các Đảng uỷ Trung ương</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="min-h-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[16px] px-[8px] relative w-full">
        <Link6 />
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[24px]">Các cơ quan Đảng Trung ương</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="min-h-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[16px] px-[8px] relative w-full">
        <Link7 />
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[24px]">Bộ, ngành</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="min-h-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[16px] px-[8px] relative w-full">
        <Link8 />
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[24px]">Tỉnh, thành phố</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="min-h-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[16px] px-[8px] relative w-full">
        <Link9 />
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[24px]">Giới thiệu</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="min-h-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[16px] px-[8px] relative w-full">
        <Link10 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px pb-[24px] px-[4px] relative shrink-0 w-[240px]" data-name="Container">
      <Container22 />
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[24px]">Xây dựng Đảng</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="min-h-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[16px] px-[8px] relative w-full">
        <Link11 />
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[24px]">Diễn đàn xây dựng Đảng</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="min-h-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[16px] px-[8px] relative w-full">
        <Link12 />
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[24px]">Hướng dẫn công tác Đảng</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="min-h-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[16px] px-[8px] relative w-full">
        <Link13 />
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[24px]">Hỏi đáp trực tuyến</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="min-h-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[16px] px-[8px] relative w-full">
        <Link14 />
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[24px]">Văn bản mới</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="min-h-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[16px] px-[8px] relative w-full">
        <Link15 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[198px]" data-name="Container">
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px pb-[24px] pr-[3px] relative shrink-0 w-[192px]" data-name="Container">
      <Container29 />
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[24px]">Tin hoạt động</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="min-h-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[12px] px-[8px] relative w-full">
        <Link16 />
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="leading-[24px]">Vấn đề quan tâm</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="min-h-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[12px] px-[8px] relative w-full">
        <Link17 />
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="mb-0">Nghị quyết 57- Động lực phát triển, Đổi</p>
        <p>mới sáng tạo</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="min-h-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[12px] px-[8px] relative w-full">
        <Link18 />
      </div>
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">
        <p className="mb-0">Tiếp nhận phản ánh kiến nghị về Nghị</p>
        <p>quyết 57</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="min-h-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[12px] px-[8px] relative w-full">
        <Link19 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px pb-[24px] px-[4px] relative shrink-0 w-[288px]" data-name="Container">
      <Container36 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container21 />
      <Container28 />
      <Container35 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px mr-[-3px] relative shrink-0 w-[963px]" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-start pr-[3px] relative shrink-0 w-[1360px]" data-name="Container">
      <Container2 />
      <Container12 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[16px] pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#ffe5e5] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#676767] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[24px]">© Bản quyền thuộc Cục Chuyển đổi số - Cơ yếu.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center px-[12px] relative shrink-0 w-[1360px]" data-name="Container">
      <Container1 />
      <HorizontalBorder />
    </div>
  );
}

export default function Background() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[32px] relative size-full" data-name="Background">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#fffafa] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[95.85%] left-0 max-w-none top-0 w-full" src={imgBackground} />
        </div>
      </div>
      <Container />
    </div>
  );
}