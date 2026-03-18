import imgTChcVaHotDngCaQuDiMiCongNghQucGia from "figma:asset/c86a01163ad6125935d48456e22136d1d46d513f.png";
import imgChDoDiuHanhCaChinhPhThTngChinhPhNgay1832026 from "figma:asset/3eeaeef6db46c3c2a709718bb8e6a9e55141e3ce.png";

function ListItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="List → Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2.59px] pt-[2px] relative w-full">
        <div className="flex flex-col font-['Merriweather:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#031739] text-[17px] uppercase w-full">
          <p className="leading-[21px]">Chỉ đạo điều hành</p>
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[13px] pt-[14px] relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid border-t-2 inset-0 pointer-events-none rounded-tl-[2px] rounded-tr-[2px]" />
      <ListItem />
    </div>
  );
}

function TChcVaHotDngCaQuDiMiCongNghQucGia() {
  return (
    <div className="absolute h-[172px] left-0 pointer-events-none top-0 w-[275px]" data-name="Tổ chức và hoạt động của Quỹ Đổi mới công nghệ quốc gia">
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-full left-[-0.05%] max-w-none top-0 w-[100.1%]" src={imgTChcVaHotDngCaQuDiMiCongNghQucGia} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0" />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Medium',sans-serif] font-medium gap-[0.8px] items-start leading-[0] relative shrink-0 text-[#031739] text-[18px] whitespace-nowrap" data-name="Link">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Tổ chức và hoạt động của Quỹ Đổi</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">mới công nghệ quốc gia</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[1.29px] pl-[290px] pr-[14.61px] right-0 top-0" data-name="Container">
      <Link />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal items-start leading-[0] left-0 pl-[290px] right-0 text-[#3b4e68] text-[14px] top-[59.6px] whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">(Chinhphu.vn) - Chính phủ ban hành Nghị định</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">số 77/2026/NĐ-CP ngày 17/3/2026 quy định</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">về tổ chức và hoạt động của Quỹ Đổi mới công</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">nghệ quốc gia.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[143.59px] relative shrink-0 w-full" data-name="Container">
      <TChcVaHotDngCaQuDiMiCongNghQucGia />
      <Container2 />
      <Paragraph />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pr-[9px] relative">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#62748d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22.4px]">23:59</p>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#eee] border-l border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pl-[12px] pr-[22.45px] relative">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[20px] relative shrink-0 text-[#182940] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="mb-0">Bảo đảm bộ máy chính quyền địa phương nhiệm kỳ 2026–2031 đi vào hoạt</p>
          <p>động chậm nhất ngày 1/4/2026</p>
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex h-[65px] items-start pb-[12px] pt-[13px] relative shrink-0 w-full" data-name="Item">
      <div aria-hidden="true" className="absolute border-[#eee] border-solid border-t inset-0 pointer-events-none" />
      <Container3 />
      <Link1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pr-[9px] relative">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#62748d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22.4px]">17:25</p>
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#eee] border-l border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pl-[12px] relative">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#182940] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Bổ nhiệm ông Tạ Anh Tuấn giữ chức Thứ trưởng Bộ Tài chính</p>
        </div>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex h-[48px] items-start pb-[12px] pt-[13px] relative shrink-0 w-full" data-name="Item">
      <div aria-hidden="true" className="absolute border-[#eee] border-solid border-t inset-0 pointer-events-none" />
      <Container4 />
      <Link2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pr-[9px] relative">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#62748d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22.4px]">17:24</p>
        </div>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#eee] border-l border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pl-[12px] pr-[2.04px] relative">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[20px] relative shrink-0 text-[#182940] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="mb-0">Kế hoạch hoạt động năm 2026 của BCĐ rà soát và tổ chức thực hiện việc xử lý</p>
          <p>vướng mắc trong hệ...</p>
        </div>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex h-[65px] items-start pb-[12px] pt-[13px] relative shrink-0 w-full" data-name="Item">
      <div aria-hidden="true" className="absolute border-[#eee] border-solid border-t inset-0 pointer-events-none" />
      <Container5 />
      <Link3 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[44.41px] items-start min-h-[300px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <List />
    </div>
  );
}

function Data() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start min-h-[402px] relative shrink-0 w-[580px]" data-name="Data">
      <Border />
      <Container />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List → Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2.59px] pt-[2px] relative w-full">
        <div className="flex flex-col font-['Merriweather:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#031739] text-[17px] uppercase w-full">
          <p className="leading-[21px]">Thông cáo báo chí</p>
        </div>
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[13px] pt-[14px] relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid border-t-2 inset-0 pointer-events-none rounded-tl-[2px] rounded-tr-[2px]" />
      <ListItem1 />
    </div>
  );
}

function ChDoDiuHanhCaChinhPhThTngChinhPhNgay() {
  return (
    <div className="absolute h-[172px] left-0 pointer-events-none top-0 w-[275px]" data-name="Chỉ đạo, điều hành của Chính phủ, Thủ tướng Chính phủ ngày 18/3/2026">
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-full left-[-0.1%] max-w-none top-0 w-[100.19%]" src={imgChDoDiuHanhCaChinhPhThTngChinhPhNgay1832026} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0" />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Medium',sans-serif] font-medium gap-[0.8px] items-start leading-[0] relative shrink-0 text-[#031739] text-[18px] whitespace-nowrap" data-name="Link">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Chỉ đạo, điều hành của Chính</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">phủ, Thủ tướng Chính phủ ngày</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">18/3/2026</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[1.29px] pl-[290px] pr-[20.06px] right-0 top-0" data-name="Container">
      <Link4 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal items-start leading-[0] left-0 pl-[290px] right-0 text-[#3b4e68] text-[14px] top-[84.39px] whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">(Chinhphu.vn) - Văn phòng Chính phủ vừa</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">có Thông cáo báo chí chỉ đạo, điều hành</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">của Chính phủ, Thủ tướng Chính phủ ngày</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">18/3/2026.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[168.39px] relative shrink-0 w-full" data-name="Container">
      <ChDoDiuHanhCaChinhPhThTngChinhPhNgay />
      <Container8 />
      <Paragraph1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pr-[9px] relative">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#62748d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22.4px]">23:58</p>
        </div>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#eee] border-l border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pl-[12px] pr-[15.32px] relative">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[20px] relative shrink-0 text-[#182940] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="mb-0">Chỉ thị của Thủ tướng Chính phủ về tổ chức kỳ họp thứ nhất của Hội đồng</p>
          <p>nhân dân các cấp nhiệm kỳ...</p>
        </div>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex h-[65px] items-start pb-[12px] pt-[13px] relative shrink-0 w-full" data-name="Item">
      <div aria-hidden="true" className="absolute border-[#eee] border-solid border-t inset-0 pointer-events-none" />
      <Container9 />
      <Link5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pr-[9px] relative">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#62748d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22.4px]">18:25</p>
        </div>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#eee] border-l border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pl-[12px] relative">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#182940] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Chỉ đạo, điều hành của Chính phủ, Thủ tướng Chính phủ ngày 17/3/2026</p>
        </div>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex h-[48px] items-start pb-[12px] pt-[13px] relative shrink-0 w-full" data-name="Item">
      <div aria-hidden="true" className="absolute border-[#eee] border-solid border-t inset-0 pointer-events-none" />
      <Container10 />
      <Link6 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pr-[9px] relative">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#62748d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22.4px]">21:54</p>
        </div>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#eee] border-l border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pl-[12px] pr-[11.28px] relative">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[20px] relative shrink-0 text-[#182940] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="mb-0">Công điện của Thủ tướng Chính phủ về một số nhiệm vụ, giải pháp để tiếp</p>
          <p>tục thúc đẩy xuất khẩu năm...</p>
        </div>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex h-[65px] items-start pb-[12px] pt-[13px] relative shrink-0 w-full" data-name="Item">
      <div aria-hidden="true" className="absolute border-[#eee] border-solid border-t inset-0 pointer-events-none" />
      <Container11 />
      <Link7 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[19.61px] items-start min-h-[300px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <List1 />
    </div>
  );
}

function Data1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start min-h-[402px] relative shrink-0 w-[560px]" data-name="Data">
      <Border1 />
      <Container6 />
    </div>
  );
}

export default function TableBodyRow() {
  return (
    <div className="content-stretch flex gap-[30px] items-start justify-center pb-[20px] relative size-full" data-name="Table → Body → Row">
      <Data />
      <Data1 />
    </div>
  );
}