function Legend() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[357.67px] px-[20px] right-[357.69px] top-0" data-name="Legend">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737373] text-[18px] text-center tracking-[2px] whitespace-nowrap">
        <p className="leading-[18px]">TRÍCH DẪN TRONG NGÀY</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[101px] right-[101px] top-[56px]" data-name="Container">
      <div className="flex flex-col font-['Merriweather:Bold',sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#222] text-[18px] text-center whitespace-nowrap">
        <p className="mb-0">“Khi áp lực lớn đè nặng, các doanh nghiệp cần phải thay đổi, và họ sẽ thay đổi, kể cả</p>
        <p>những công ty lâu đời.”</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[101px] right-[101px] top-[120px]" data-name="Container">
      <div className="flex flex-col font-['Merriweather:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[normal]">—Krish Ramineni</p>
      </div>
    </div>
  );
}

function Fieldset() {
  return (
    <div className="h-[178px] relative shrink-0 w-full" data-name="Fieldset">
      <div className="absolute border border-[#333] border-solid inset-[9px_0_0_0]" data-name="Fieldset:styles" />
      <Legend />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Fieldset />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-wrap h-[178px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <Container1 />
    </div>
  );
}