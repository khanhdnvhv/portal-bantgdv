import imgImage from "figma:asset/771a91d7cb9f564b5f1e4a3fbbd5485526f5c504.png";
import imgZ72955812799010Cca07E330917D7116C4Ef5F7Bacb4174227JpgWebp from "figma:asset/a133d10643cf8e866591923722d87cae0275fc44.png";
import img5317160111221252351809373121683636721185958590N5340JpgWebp from "figma:asset/7110425e0c240f65c8de56f2a609d24bb7d7a3de.png";
import imgZ7560835155710Ab116739457E3C5A62Bc6F703246A3B87788JpgWebp from "figma:asset/6f6eee82ef7b2d8e23fd8f7987ca802248b51e69.png";

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 min-w-[377.4200134277344px] top-[39px]" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#6f3706] text-[50px] text-center uppercase whitespace-nowrap">
        <p className="leading-[65px]">Đại hội XIII</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[-0.5px]" data-name="Container">
      <div className="absolute bg-[#6f3706] h-px left-[259.53px] top-[22.5px] w-[1920px]" data-name="Horizontal Divider" />
      <div className="flex flex-col font-['Playfair_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[30px] text-[rgba(26,26,26,0.9)] text-center whitespace-nowrap">
        <p className="leading-[39px]">Nhìn lại nhiệm kỳ</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex items-center justify-end right-[1.15px] top-[103.5px]" data-name="Container">
      <div className="absolute bg-[#6f3706] h-px right-[146.16px] top-[22.5px] w-[1920px]" data-name="Horizontal Divider" />
      <div className="flex flex-col font-['Playfair_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#a30000] text-[30px] text-center whitespace-nowrap">
        <p className="leading-[39px]">của Đảng</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="overflow-clip relative self-stretch shrink-0 w-[377.42px]" data-name="Link">
      <Heading />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 min-w-[376.69000244140625px] top-[39px]" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#6f3706] text-[50px] text-center uppercase whitespace-nowrap">
        <p className="leading-[65px]">Đại hội XIV</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[-0.5px]" data-name="Container">
      <div className="absolute bg-[#6f3706] h-px left-[151.53px] top-[22.5px] w-[1920px]" data-name="Horizontal Divider" />
      <div className="flex flex-col font-['Playfair_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[30px] text-[rgba(26,26,26,0.9)] text-center whitespace-nowrap">
        <p className="leading-[39px]">Hướng tới</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex items-center justify-end right-[1.16px] top-[103.5px]" data-name="Container">
      <div className="absolute bg-[#6f3706] h-px right-[146.16px] top-[22.5px] w-[1920px]" data-name="Horizontal Divider" />
      <div className="flex flex-col font-['Playfair_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#a30000] text-[30px] text-center whitespace-nowrap">
        <p className="leading-[39px]">của Đảng</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="overflow-clip relative self-stretch shrink-0 w-[376.69px]" data-name="Link">
      <Heading1 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[114px] h-[143px] items-start justify-end relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Z72955812799010Cca07E330917D7116C4Ef5F7Bacb4174227JpgWebp() {
  return (
    <div className="absolute aspect-[450/280.1300048828125] left-0 right-0 top-0" data-name="z7295581279901-0cca07e330917d7116c4ef5f7bacb417-4227.jpg.webp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgZ72955812799010Cca07E330917D7116C4Ef5F7Bacb4174227JpgWebp} />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Container">
      <Z72955812799010Cca07E330917D7116C4Ef5F7Bacb4174227JpgWebp />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute bg-[#fff1e5] inset-0" data-name="Link">
      <Container11 />
    </div>
  );
}

function Figure() {
  return (
    <div className="bg-[#fffcf4] h-[253.13px] overflow-clip relative shrink-0 w-full" data-name="Figure">
      <Link2 />
    </div>
  );
}

function Heading3Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3 → Link">
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[15.9px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[25.2px]">Xây dựng Tân Tây giàu đẹp, văn minh, nghĩa tình</p>
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className="content-stretch flex flex-col gap-[15.99px] items-start relative shrink-0 w-full" data-name="Article">
      <Figure />
      <Heading3Link />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[450px]" data-name="Container">
      <Article />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[294.33px] items-start justify-center pr-[30px] relative shrink-0 w-[480px]" data-name="Margin">
      <Container10 />
    </div>
  );
}

function Component5317160111221252351809373121683636721185958590N5340JpgWebp() {
  return (
    <div className="absolute aspect-[450/265.5] left-0 right-0 top-0" data-name="531716011-122125235180937312-1683636721185958590-n-5340.jpg.webp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img5317160111221252351809373121683636721185958590N5340JpgWebp} />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Container">
      <Component5317160111221252351809373121683636721185958590N5340JpgWebp />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bg-[#fff1e5] inset-0" data-name="Link">
      <Container13 />
    </div>
  );
}

function Figure1() {
  return (
    <div className="bg-[#fffcf4] h-[253.13px] overflow-clip relative shrink-0 w-full" data-name="Figure">
      <Link3 />
    </div>
  );
}

function Heading3Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3 → Link">
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[25.2px]">Xây dựng Rạch Kiến đạt chuẩn đô thị loại V</p>
      </div>
    </div>
  );
}

function Article1() {
  return (
    <div className="content-stretch flex flex-col gap-[15.99px] items-start relative shrink-0 w-full" data-name="Article">
      <Figure1 />
      <Heading3Link1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[450px]" data-name="Container">
      <Article1 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[294.33px] items-start justify-center pr-[30px] relative shrink-0 w-[480px]" data-name="Margin">
      <Container12 />
    </div>
  );
}

function Z7560835155710Ab116739457E3C5A62Bc6F703246A3B87788JpgWebp() {
  return (
    <div className="aspect-[450/253.1300048828125] min-h-[253.1300048828125px] relative shrink-0 w-full" data-name="z7560835155710-ab116739457e3c5a62bc6f703246a3b8-7788.jpg.webp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.34%] max-w-none top-0 w-[100.67%]" src={imgZ7560835155710Ab116739457E3C5A62Bc6F703246A3B87788JpgWebp} />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Container">
      <Z7560835155710Ab116739457E3C5A62Bc6F703246A3B87788JpgWebp />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute bg-[#fff1e5] inset-0" data-name="Link">
      <Container15 />
    </div>
  );
}

function Figure2() {
  return (
    <div className="bg-[#fffcf4] h-[253.13px] overflow-clip relative shrink-0 w-full" data-name="Figure">
      <Link4 />
    </div>
  );
}

function Heading3Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3 → Link">
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[25.2px]">Ngày mới ở biên giới Tân Đông</p>
      </div>
    </div>
  );
}

function Article2() {
  return (
    <div className="content-stretch flex flex-col gap-[15.99px] items-start relative shrink-0 w-full" data-name="Article">
      <Figure2 />
      <Heading3Link2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[450px]" data-name="Container">
      <Article2 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col h-[294.33px] items-start justify-center pr-[30px] relative shrink-0 w-[480px]" data-name="Margin">
      <Container14 />
    </div>
  );
}

function Margin3() {
  return <div className="self-stretch shrink-0 w-[480px]" data-name="Margin" />;
}

function Margin4() {
  return <div className="self-stretch shrink-0 w-[480px]" data-name="Margin" />;
}

function Margin5() {
  return <div className="self-stretch shrink-0 w-[480px]" data-name="Margin" />;
}

function Margin6() {
  return <div className="self-stretch shrink-0 w-[480px]" data-name="Margin" />;
}

function Margin7() {
  return <div className="h-[294.33px] shrink-0 w-[480px]" data-name="Margin" />;
}

function Margin8() {
  return <div className="self-stretch shrink-0 w-[480px]" data-name="Margin" />;
}

function Margin9() {
  return <div className="h-[294.33px] shrink-0 w-[480px]" data-name="Margin" />;
}

function Container9() {
  return (
    <div className="content-stretch flex items-start min-h-[319.5299987792969px] relative shrink-0 w-[4800px]" data-name="Container">
      <Margin />
      <Margin1 />
      <Margin2 />
      <Margin3 />
      <Margin4 />
      <Margin5 />
      <Margin6 />
      <Margin7 />
      <Margin8 />
      <Margin9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 overflow-clip top-0 w-[1243.11px]" data-name="Container">
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[0.01px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-full max-w-[1920px] relative shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[60px] h-full items-start max-w-[inherit] pl-[20px] pr-[375px] pt-[50px] relative">
        <Container2 />
        <Container7 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-start justify-end pb-[30px] relative size-full" data-name="Container">
      <div className="absolute h-[800px] left-[-178px] top-[18px] w-[938px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
        </div>
      </div>
      <Container1 />
    </div>
  );
}