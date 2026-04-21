import svgPaths from "./svg-5f43zofxka";
import imgImageRepleiLogo from "figma:asset/0d7b6d8a9783d2c7c484ef6f7c04a0baf03184a5.png";

function ImageRepleiLogo() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Image (Replei Logo)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRepleiLogo} />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Container">
      <ImageRepleiLogo />
    </div>
  );
}

function Replei() {
  return (
    <div className="h-[20px] relative shrink-0 w-[63.994px]" data-name="Replei">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.9942 19.9999">
        <g id="Replei">
          <path d={svgPaths.p52d3700} fill="var(--fill-0, #0F172B)" id="Vector" />
          <path d={svgPaths.p3465f0} fill="var(--fill-0, #0F172B)" id="Vector_2" />
          <path d={svgPaths.p98beb70} fill="var(--fill-0, #0F172B)" id="Vector_3" />
          <path d={svgPaths.p28dd6870} fill="var(--fill-0, #0F172B)" id="Vector_4" />
          <path d={svgPaths.p1ac694f0} fill="var(--fill-0, #0F172B)" id="Vector_5" />
          <path d={svgPaths.p24fbf100} fill="var(--fill-0, #0F172B)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0 w-[63.994px]" data-name="LOGO">
      <Replei />
    </div>
  );
}

export default function Logo() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative size-full" data-name="logo">
      <Container />
      <Logo1 />
    </div>
  );
}