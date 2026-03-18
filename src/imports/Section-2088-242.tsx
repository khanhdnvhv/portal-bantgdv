import imgContainer from "figma:asset/479b8b11fdceb8dd8e8b3a231157e5e6b0b07739.png";
import imgContainer1 from "figma:asset/e7030a48e25622fe856f20b82a1819395ebba7e0.png";
import imgContainer2 from "figma:asset/f6158e48d49b2c0e9fe6fbbd2ac8e8dddc5d34d2.png";

function Heading() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Heading 2">
      <div className="content-stretch flex flex-col h-full items-start pb-[8px] relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e5262d] text-[20px] uppercase whitespace-nowrap">
          <p className="leading-[normal]">TIN TỨC, SỰ KIỆN</p>
        </div>
        <div className="absolute bg-[#e10a0b] bottom-0 h-[3px] left-0 w-[60px]" data-name="Background" />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[52px] items-start pb-[20px] relative shrink-0 w-full" data-name="Container">
      <Heading />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start pl-[10px] relative shrink-0" data-name="Link">
      <div className="absolute bg-[#e10a0b] h-[14px] left-0 top-[1.5px] w-[4px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">
        <p className="leading-[normal]">KHOA HỌC, CÔNG NGHỆ</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] h-[259.95px] min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.9%] max-w-none top-0 w-[101.8%]" src={imgContainer} />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Link">
      <Container6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[3px] relative shrink-0 w-full" data-name="Container">
      <Link1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[30.8px] not-italic relative shrink-0 text-[#111322] text-[22px] w-full">
        <p className="mb-0">Ứng dụng di động Tuyên giáo và Dân</p>
        <p className="mb-0">vận: Sức lan tỏa mạnh mẽ trên không</p>
        <p>gian số</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[#5d6b98] text-[16px] w-full">
        <p className="mb-0">Từ khi ra mắt đến ngày 13/2, ứng dụng thu hút 8.611.334</p>
        <p className="mb-0">lượt request và 579.422 lượt click vào link tải ứng dụng;</p>
        <p>54.254 lượt tải trên ứng dụng App Store và 40.514 lượt…</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container8 />
    </div>
  );
}

function Article() {
  return (
    <div className="relative shrink-0 w-full" data-name="Article">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.305px] items-start relative w-full">
        <Container5 />
        <Container7 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[26px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(34,34,34,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <Article />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] max-w-[477.3328552246094px] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="content-stretch flex flex-col gap-[10px] items-start max-w-[inherit] min-h-[inherit] px-[24px] relative size-full">
        <Link />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start pl-[10px] relative shrink-0" data-name="Link">
      <div className="absolute bg-[#e10a0b] h-[14px] left-0 top-[1.5px] w-[4px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">
        <p className="leading-[normal]">Chính trị</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] h-[259.95px] min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.88%] max-w-none top-0 w-[101.76%]" src={imgContainer1} />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Link">
      <Container11 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[3px] relative shrink-0 w-full" data-name="Container">
      <Link3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[30.8px] not-italic relative shrink-0 text-[#111322] text-[22px] w-full">
        <p className="mb-0">100% cử tri nơi cư trú biểu quyết, nhất</p>
        <p className="mb-0">trí tín nhiệm đồng chí Trịnh Văn Quyết</p>
        <p className="mb-0">tham gia ứng cử đại biểu Quốc hội khóa</p>
        <p>XVI</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[#5d6b98] text-[16px] w-full">
        <p className="mb-0">(TGDV) - Ngày 8/2, tại Hà Nội, UBND, Ủy ban MTTQ Việt</p>
        <p className="mb-0">Nam phường Đại Mỗ, thành phố Hà Nội tổ chức Hội nghị</p>
        <p>lấy ý kiến nhận xét và tín nhiệm của cử tri nơi cư trú đố…</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[1.99px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container13 />
    </div>
  );
}

function Article1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Article">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.205px] items-start relative w-full">
        <Container10 />
        <Container12 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[26px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(34,34,34,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <Article1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[12.27px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[24px] not-italic relative shrink-0 text-[14px] text-black w-full">
          <p className="mb-0">Đồng chí Trịnh Văn Quyết giám sát, kiểm tra công tác bầu cử</p>
          <p>tại Gia Lai</p>
        </div>
      </div>
    </div>
  );
}

function Article2() {
  return (
    <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="Article">
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[7.1px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[24px] not-italic relative shrink-0 text-[14px] text-black w-full">
          <p className="mb-0">Hội nghị toàn quốc học tập, quán triệt các Nghị quyết số 79 và</p>
          <p>80 của Bộ Chính trị</p>
        </div>
      </div>
    </div>
  );
}

function Article3() {
  return (
    <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="Article">
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[17.66px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[24px] not-italic relative shrink-0 text-[14px] text-black w-full">
          <p className="mb-0">Những vấn đề mới, cốt lõi trong Nghị quyết 80 của Bộ Chính</p>
          <p>trị về phát triển văn hóa</p>
        </div>
      </div>
    </div>
  );
}

function Article4() {
  return (
    <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="Article">
      <Container17 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pt-[15px] relative shrink-0 w-full" data-name="Container">
      <Article2 />
      <Article3 />
      <Article4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] max-w-[477.3328552246094px] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="content-stretch flex flex-col gap-[10px] items-start max-w-[inherit] min-h-[inherit] px-[24px] relative size-full">
        <Link2 />
        <HorizontalBorder1 />
        <Container14 />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-start pl-[10px] relative shrink-0" data-name="Link">
      <div className="absolute bg-[#e10a0b] h-[14px] left-0 top-[1.5px] w-[4px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">
        <p className="leading-[normal]">Tin mới</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] h-[259.95px] min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.88%] max-w-none top-0 w-[101.76%]" src={imgContainer2} />
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Link">
      <Container20 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[3px] relative shrink-0 w-full" data-name="Container">
      <Link5 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[30.8px] not-italic relative shrink-0 text-[#111322] text-[22px] w-full">
        <p className="mb-0">Thống nhất 217 người của các cơ quan</p>
        <p className="mb-0">Trung ương đủ điều kiện lập danh sách</p>
        <p>ứng cử đại biểu Quốc hội khóa XVI</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[#5d6b98] text-[16px] w-full">
        <p className="mb-0">(ĐCSVN) - Ngày 11/2, tại Hà Nội, Đoàn Chủ tịch Ủy ban</p>
        <p className="mb-0">Trung ương MTTQ Việt Nam tổ chức Hội nghị hiệp</p>
        <p>thương lần thứ ba để thỏa thuận, lập danh sách những…</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container22 />
    </div>
  );
}

function Article5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Article">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.305px] items-start relative w-full">
        <Container19 />
        <Container21 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[26px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(34,34,34,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <Article5 />
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] max-w-[477.3328552246094px] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="content-stretch flex flex-col gap-[10px] items-start max-w-[inherit] min-h-[inherit] px-[24px] relative size-full">
        <Link4 />
        <HorizontalBorder2 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[730.145px] items-start justify-center left-[-24px] right-[-24px] top-0" data-name="Container">
      <Container4 />
      <Container9 />
      <Container18 />
    </div>
  );
}

function RegionScrollableContent() {
  return (
    <div className="h-[730px] max-h-[730px] overflow-x-auto overflow-y-clip relative shrink-0 w-full" data-name="Region - scrollable content">
      <Container3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Container">
      <RegionScrollableContent />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bottom-0 left-0 top-0 w-[1360px]" data-name="Container">
      <div className="absolute bg-black inset-[2px] opacity-0 rounded-[7px]" data-name="Background" />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bottom-0 h-[11px] left-0 overflow-clip right-0" data-name="Container">
      <Container24 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[730px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container23 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[30px] relative size-full" data-name="Section">
      <Container />
      <Container1 />
    </div>
  );
}