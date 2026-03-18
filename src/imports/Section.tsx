import imgContainer from "figma:asset/946d2cc7f80da0d513b0c3c5ddd062bc6e165b1f.png";
import imgContainer1 from "figma:asset/c4a08a3040b1f26ec084b5ca94d7fe5d850de0c1.png";
import imgContainer2 from "figma:asset/5c33fea94ac9a91154dc31cc837ac43a13246038.png";
import imgContainer3 from "figma:asset/14014738289fad25004c8c9a0b1e226fa1ed0e08.png";
import imgContainer4 from "figma:asset/51ba6fc55d95397c456e9429d6da24523b72191a.png";
import imgContainer5 from "figma:asset/c7132adc8e22e55bdea45ba237b6876a7fde292e.png";
import imgContainer6 from "figma:asset/8570baf431a87b6b19489371bc9fd1c85b889798.png";
import imgContainer7 from "figma:asset/f94a54b920cf1705633d5fc0267259282d6cfc0b.png";
import imgContainer8 from "figma:asset/55198c5299e28cc060bf3a747aecb1213b2beb37.png";

function Container4() {
  return (
    <div className="h-[200px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[15px] relative shrink-0 w-[200px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e5262d] text-[12px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Trưởng ban</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5262d] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Đồng chí Trịnh Văn Quyết</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Ủy viên Bộ Chính trị, Bí thư Trung ương Đảng</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[275px]" data-name="Container">
      <Container6 />
      <Container9 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[203px] min-w-[125px] relative self-stretch shrink-0 w-[203px]" data-name="Container">
      <Container3 />
      <Container5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[272px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="absolute bg-[#1259a0] border-4 border-solid border-white left-[-11.52px] rounded-[40px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.35)] size-[24px] top-[27px]" data-name="Background+Border+Shadow">
      <div className="absolute border-[#aaa] border-dashed border-l-2 h-[30px] left-[7px] top-[-33px] w-[2px]" data-name="Vertical Divider" />
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="absolute bg-[#1259a0] border-4 border-solid border-white right-[-13.2px] rounded-[40px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.35)] size-[24px] top-[27px]" data-name="Background+Border+Shadow">
      <div className="absolute border-[#aaa] border-dashed border-l-2 h-[30px] left-[7px] top-[-33px] w-[2px]" data-name="Vertical Divider" />
    </div>
  );
}

function HorizontalDivider() {
  return (
    <div className="-translate-x-1/2 absolute border-[#aaa] border-dashed border-t-2 h-[2px] left-1/2 top-[45px] w-[612px]" data-name="Horizontal Divider">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[100px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute border-[#aaa] border-dashed border-l-2 h-[30px] left-[691px] top-0 w-[2px]" data-name="Vertical Divider" />
      <HorizontalDivider />
      <div className="absolute bg-[#ce1126] border-4 border-solid border-white left-[680px] rounded-[40px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.35)] size-[24px] top-[33px]" data-name="Background+Border+Shadow" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container10 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[130px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer1} />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[15px] relative shrink-0 w-[130px]" data-name="Container">
      <Container14 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e5262d] text-[12px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Phó trưởng ban</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5262d] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Đồng chí Phạm Tất Thắng</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Ủy viên Trung ương Đảng</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[157px]" data-name="Container">
      <Container16 />
      <Container19 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[203px] min-w-[125px] relative self-stretch shrink-0 w-[203px]" data-name="Container">
      <Container13 />
      <Container15 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[130px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer2} />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[15px] relative shrink-0 w-[130px]" data-name="Container">
      <Container22 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e5262d] text-[12px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Phó trưởng ban</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5262d] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Đồng chí Ngô Đông Hải</p>
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

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Ủy viên Trung ương Đảng</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[157px]" data-name="Container">
      <Container24 />
      <Container27 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[203px] min-w-[125px] relative self-stretch shrink-0 w-[203px]" data-name="Container">
      <Container21 />
      <Container23 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[130px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer3} />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[15px] relative shrink-0 w-[130px]" data-name="Container">
      <Container30 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e5262d] text-[12px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Phó trưởng ban</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5262d] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Đồng chí Nguyễn Quang Đức</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Ủy viên Trung ương Đảng</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start min-w-[183.77999877929688px] relative shrink-0 w-[183.78px]" data-name="Container">
      <Container32 />
      <Container35 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[203px] min-w-[125px] relative self-stretch shrink-0 w-[203px]" data-name="Container">
      <Container29 />
      <Container31 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[130px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer4} />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[15px] relative shrink-0 w-[130px]" data-name="Container">
      <Container38 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e5262d] text-[12px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Phó trưởng ban</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5262d] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Đồng chí Trần Thanh Lâm</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Ủy viên Trung ương Đảng</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[157px]" data-name="Container">
      <Container40 />
      <Container43 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[203px] min-w-[125px] relative self-stretch shrink-0 w-[203px]" data-name="Container">
      <Container37 />
      <Container39 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[20px] h-[202px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container20 />
      <Container28 />
      <Container36 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[130px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer5} />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[15px] relative shrink-0 w-[130px]" data-name="Container">
      <Container47 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e5262d] text-[12px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Phó trưởng ban</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5262d] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Đồng chí Triệu Tài Vinh</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0 w-[146.63px]" data-name="Container">
      <Container49 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[203px] min-w-[125px] relative self-stretch shrink-0 w-[203px]" data-name="Container">
      <Container46 />
      <Container48 />
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[130px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer6} />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[15px] relative shrink-0 w-[130px]" data-name="Container">
      <Container54 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e5262d] text-[12px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Phó trưởng ban</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5262d] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Đồng chí Phan Xuân Thuỷ</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0 w-[163.94px]" data-name="Container">
      <Container56 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[203px] min-w-[125px] relative self-stretch shrink-0 w-[203px]" data-name="Container">
      <Container53 />
      <Container55 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[130px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer7} />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[15px] relative shrink-0 w-[130px]" data-name="Container">
      <Container61 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e5262d] text-[12px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Phó trưởng ban</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5262d] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Đồng chí Vũ Thanh Mai</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Container65 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0 w-[147.25px]" data-name="Container">
      <Container63 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[203px] min-w-[125px] relative self-stretch shrink-0 w-[203px]" data-name="Container">
      <Container60 />
      <Container62 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[130px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer8} />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[15px] relative shrink-0 w-[130px]" data-name="Container">
      <Container68 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e5262d] text-[12px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Phó trưởng ban</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5262d] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Đồng chí Đinh Thị Mai</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0 w-[138.81px]" data-name="Container">
      <Container70 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[203px] min-w-[125px] relative self-stretch shrink-0 w-[203px]" data-name="Container">
      <Container67 />
      <Container69 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[20px] h-[186px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Container52 />
      <Container59 />
      <Container66 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative size-full" data-name="Section">
      <Container />
      <Container11 />
      <Container44 />
    </div>
  );
}