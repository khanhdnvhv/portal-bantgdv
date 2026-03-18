import imgImage from "figma:asset/0bdcee6487ab433cbe3a4df44f4adc0cda96f2db.png";
import imgVngBcDiCDng from "figma:asset/7de2510bf34670e3956f8070434dcef68b84fa16.png";
import imgImageBlur from "figma:asset/c82e0790de4e09b7a5e4ab06438f463362e0794b.png";
import imgAvtFastnews159Aeb31Webp from "figma:asset/01cca6eaa9ff99c580d550388fe364c85bcedd59.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Playfair_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[26px]">Tổng Bí thư</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Protest_Strike:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f3706] text-[40px] uppercase whitespace-nowrap">
        <p className="leading-[48px]">Tô Lâm</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[170px] max-w-[170px] top-[40px] w-[124px]" data-name="Link">
      <Container1 />
      <Container2 />
    </div>
  );
}

function VngBcDiCDng() {
  return (
    <div className="h-[300px] relative shrink-0 w-full" data-name="Vững bước dưới cờ Đảng">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgVngBcDiCDng} />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Link">
      <VngBcDiCDng />
      <div className="absolute blur-[10px] inset-[-15px_-22.5px] opacity-0" data-name="Image+Blur">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.51%] max-w-none top-0 w-[101.01%]" src={imgImageBlur} />
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-[#fff1e5] content-stretch flex flex-col h-[300px] items-start right-[10.5px] top-[10px] w-[450px]" data-name="Link">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bg-[#fff1e5] bottom-[10px] content-stretch flex flex-col items-start pb-[20px] pl-[30px] pr-[20px] pt-[16px] right-[10px] w-[806px]" data-name="Link">
      <div className="flex flex-col font-['Barlow_Condensed:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-[rgba(26,26,26,0.9)] whitespace-nowrap">
        <p className="leading-[33px]">Vững bước dưới cờ Đảng</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <Link1 />
      <Link3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[816px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative w-full" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-center right-0 top-0 w-[816px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f2dfce] h-[360px] overflow-clip relative shrink-0 w-[1010px]" data-name="Background">
      <div className="absolute h-[635px] left-[-213px] top-[-30px] w-[634px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
        </div>
      </div>
      <Link />
      <Container3 />
    </div>
  );
}

function AvtFastnews159Aeb31Webp() {
  return (
    <div className="h-[393px] relative shrink-0 w-full" data-name="avt-fastnews.159aeb31.webp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvtFastnews159Aeb31Webp} />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Link">
      <AvtFastnews159Aeb31Webp />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col h-[392.88px] items-start left-[16px] w-[390px]" data-name="Container">
      <Link4 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[180px] pr-[20px] relative size-full" data-name="Container">
      <Background />
      <Container7 />
    </div>
  );
}