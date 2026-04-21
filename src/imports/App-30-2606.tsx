import svgPaths from "./svg-s60o7irayu";
import imgImageRepleiLogo from "figma:asset/0d7b6d8a9783d2c7c484ef6f7c04a0baf03184a5.png";

function ImageRepleiLogo() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Image (Replei Logo)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRepleiLogo} />
    </div>
  );
}

function Container2() {
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

function Logo() {
  return (
    <div className="h-full relative shrink-0 w-[63.994px]" data-name="LOGO">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Replei />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-full relative shrink-0 w-[3.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] left-[0.01px] not-italic text-[#cad5e2] text-[16px] top-[16px] tracking-[-0.3125px] w-[6px]">
          <p className="leading-[24px] whitespace-pre-wrap">|</p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[97.22px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.5">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[47.5px] not-italic text-[#62748e] text-[20px] text-center top-0 tracking-[-0.4492px]">PRODUTO</p>
        <Icon />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Logo />
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 w-[222px]" data-name="Container">
      <Button />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Container2 />
        <div className="flex flex-row items-center self-stretch">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[#f1f5f9] h-px left-[101.77px] top-[15.5px] w-[24px]" data-name="Container" />;
}

function Container7() {
  return (
    <div className="bg-white relative rounded-[33554400px] shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#0f172b] text-[10px] text-center tracking-[0.1172px]">1</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">Seleção</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#0f172b] content-stretch flex gap-[8px] h-[32px] items-center left-0 px-[12px] rounded-[33554400px] shadow-[0px_0px_0px_0px_white,0px_0px_0px_0px_#0f172b,0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[97.766px]" data-name="Button">
      <Container7 />
      <Text2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[32px] relative shrink-0 w-[129.766px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container6 />
        <Button1 />
      </div>
    </div>
  );
}

function Container9() {
  return <div className="absolute bg-[#f1f5f9] h-px left-[134.17px] top-[15.5px] w-[24px]" data-name="Container" />;
}

function Container10() {
  return (
    <div className="absolute bg-[#cad5e2] content-stretch flex items-center justify-center left-[12px] rounded-[33554400px] size-[20px] top-[6px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#45556c] text-[10px] text-center tracking-[0.1172px]">2</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[40px] top-[8px] w-[78.172px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] text-center">Agrupamento</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[32px] left-0 opacity-40 rounded-[33554400px] top-0 w-[130.172px]" data-name="Button">
      <Container10 />
      <Text3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container9 />
        <Button2 />
      </div>
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-[#f1f5f9] h-px left-[107.11px] top-[15.5px] w-[24px]" data-name="Container" />;
}

function Container13() {
  return (
    <div className="bg-[#cad5e2] relative rounded-[33554400px] shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#45556c] text-[10px] text-center tracking-[0.1172px]">3</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] text-center">Exclusão</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 opacity-40 px-[12px] rounded-[33554400px] top-0 w-[103.109px]" data-name="Button">
      <Container13 />
      <Text4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[32px] relative shrink-0 w-[135.109px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container12 />
        <Button3 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#cad5e2] relative rounded-[33554400px] shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#45556c] text-[10px] text-center tracking-[0.1172px]">4</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] text-center">Gerar análise</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 opacity-40 px-[12px] rounded-[33554400px] top-0 w-[94.031px]" data-name="Button">
      <Container15 />
      <Text5 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[32px] relative shrink-0 w-[94.031px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button4 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[32px] relative shrink-0 w-[533.078px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container5 />
        <Container8 />
        <Container11 />
        <Container14 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="Navigation">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.016px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[110.7px] top-0 w-[64.484px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px]">RESETAR ANALISE</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[16px] relative shrink-0 w-[219px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-0">LIMPAR ETAPA</p>
        <Text6 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[16px] relative shrink-0 w-[256px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-end relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
          <Container1 />
          <Navigation />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-px relative size-full" data-name="App">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container />
    </div>
  );
}