import imgBannerWeb293E28Png from "figma:asset/c88c8fcb05fe005ff55eded587daf13d62afe845.png";

function BannerWeb293E28Png() {
  return (
    <div className="h-[100px] max-w-[1320px] relative shrink-0 w-[1320px]" data-name="banner_web_2_93e28.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBannerWeb293E28Png} />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <BannerWeb293E28Png />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <Link />
    </div>
  );
}