import imgLink from "figma:asset/47c03e65a0d324e001caafab26e66aa3d7bfb669.png";
import imgLink1 from "figma:asset/128ce081a9fa745fb8e841f1b6d1b7c8c79d029c.png";
import imgLink2 from "figma:asset/045e114fd8e22890a4269a86c59da4140f1ef08b.png";
import imgLink3 from "figma:asset/2b05dbb17fedfe3a8d0701e7b96f9ebd24a1eb33.png";
import imgLink4 from "figma:asset/4d31f4e128e2cbe4564ffcb8c48cc843d5e58487.png";
import imgLink5 from "figma:asset/81a27e27f69d15912adf92238387feaa538aa39c.png";
import imgLink6 from "figma:asset/7788ceff2366e886337195a47d679e4d0d7faa09.png";
import imgLink7 from "figma:asset/9c3c22fff02d5fe1ac82def7fc11e93e44f4a474.png";
import imgLink8 from "figma:asset/c7eb67349873862f45f82f1aa43168e2795db0b4.png";
import imgLink9 from "figma:asset/d1f48cc456b87ce93aa80b2026ada81746a4e07e.png";
import imgLink10 from "figma:asset/a52c5b8ebf8be8278fac03194d9138de3cf98305.png";

function Link() {
  return (
    <div className="h-[130.59px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLink} />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[130.59px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLink1} />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[130.59px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLink2} />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[130.59px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLink3} />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[130.59px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLink4} />
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[130.59px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLink5} />
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[130.59px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLink6} />
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[130.59px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLink7} />
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[130.59px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLink8} />
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[130.59px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLink9} />
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[130.59px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLink10} />
      </div>
    </div>
  );
}

function RegionScrollableContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Region - scrollable content">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
      <Link10 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[1637px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <RegionScrollableContent />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="Container">
      <Container1 />
    </div>
  );
}