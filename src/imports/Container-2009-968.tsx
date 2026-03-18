import imgImage from "figma:asset/fb021212093e8fb39568a7614b69a59813ca28cd.png";
import imgBackground from "figma:asset/9c81e01a08ca42ffecc095d90db220f9b88089ec.png";
import imgBackground1 from "figma:asset/4d8cd56e7b46203211890a95b7c1456b1e162724.png";
import imgBackground2 from "figma:asset/19349bcf47fc4007dd70d6caf8078ff9b730b93d.png";

function Image() {
  return (
    <div className="h-[195px] min-h-[195px] relative shrink-0 w-full" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white uppercase w-full">
        <p className="leading-[normal]">CHƯƠNG TRÌNH CÔNG TÁC NĂM</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Link">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[20px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="content-stretch flex flex-col h-[195px] items-start justify-center min-h-[195px] overflow-clip relative shrink-0 w-full" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[106.15%] left-0 max-w-none top-0 w-full" src={imgBackground} />
      </div>
      <Link />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white uppercase w-full">
        <p className="leading-[normal] text-[15px]">SỔ TAY CHUYỂN ĐỔI SỐ</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[20px] relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="content-stretch flex flex-col h-[195px] items-start justify-center min-h-[195px] overflow-clip relative shrink-0 w-full" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[106.15%] left-0 max-w-none top-0 w-full" src={imgBackground1} />
      </div>
      <Link1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[normal] not-italic relative shrink-0 text-[15px] text-white uppercase w-full">
        <p className="mb-0">HỆ THỐNG THÔNG TIN ĐIỀU HÀNH</p>
        <p>TÁC NGHIỆP CÁC CƠ QUAN ĐẢNG</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Link">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[20px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="content-stretch flex flex-col h-[195px] items-start justify-center min-h-[195px] overflow-clip relative shrink-0 w-full" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[124.09%]" src={imgBackground2} />
      </div>
      <Link2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-0 right-0 top-0" data-name="Container">
      <Image />
      <Background />
      <Background1 />
      <Background2 />
    </div>
  );
}

function RegionScrollableContent() {
  return (
    <div className="absolute inset-[0_0_-0.2px_0] overflow-x-clip overflow-y-auto" data-name="Region - scrollable content">
      <Container1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[321px] left-0 right-0 top-0" data-name="Container">
      <div className="absolute bg-black inset-[2px] opacity-0 rounded-[7px]" data-name="Background" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bottom-[-0.2px] overflow-clip right-0 top-0 w-[11px]" data-name="Container">
      <Container6 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <RegionScrollableContent />
      <Container5 />
    </div>
  );
}