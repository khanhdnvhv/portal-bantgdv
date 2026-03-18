import imgA1Ec175Jpg from "figma:asset/f9180de52a714d88a30abc8bfd3600be7a9a4dba.png";
import imgA2Ec998Jpg from "figma:asset/96bf77a37cba30d43bd299fb66bc196f31be04eb.png";
import imgA3C6DbcJpg from "figma:asset/13a924604e18a0f5161956e7e81ab97e2d591df8.png";

function A1Ec175Jpg() {
  return (
    <div className="h-[103.16px] max-w-[448px] relative shrink-0 w-[424px]" data-name="a1_ec175.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgA1Ec175Jpg} />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <A1Ec175Jpg />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <Link />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[10px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function A2Ec998Jpg() {
  return (
    <div className="h-[102.91px] max-w-[448px] relative shrink-0 w-[424px]" data-name="a2_ec998.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgA2Ec998Jpg} />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <A2Ec998Jpg />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <Link1 />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[10px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function A3C6DbcJpg() {
  return (
    <div className="h-[103.16px] max-w-[448px] relative shrink-0 w-[424px]" data-name="a3_c6dbc.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgA3C6DbcJpg} />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <A3C6DbcJpg />
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <Link2 />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[10px] relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 items-start justify-center relative size-full" data-name="Container">
      <Margin />
      <Margin1 />
      <Margin2 />
    </div>
  );
}