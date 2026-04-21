import svgPaths from "./svg-9chag18w8i";
import imgImageR from "figma:asset/0d7b6d8a9783d2c7c484ef6f7c04a0baf03184a5.png";

function ImageR() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Image (R)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageR} />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip rounded-[10px] size-[32px] top-[2px]" data-name="Container">
      <ImageR />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute h-[23px] left-[44px] top-[6.5px] w-[64px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 23">
        <g clipPath="url(#clip0_6025_2603)" id="Icon">
          <path d={svgPaths.p1acc4f00} fill="var(--fill-0, #0F172B)" id="Vector" />
          <path d={svgPaths.p11dd5880} fill="var(--fill-0, #0F172B)" id="Vector_2" />
          <path d={svgPaths.p27ba600} fill="var(--fill-0, #0F172B)" id="Vector_3" />
          <path d={svgPaths.p23fe480} fill="var(--fill-0, #0F172B)" id="Vector_4" />
          <path d={svgPaths.p3a8c1400} fill="var(--fill-0, #0F172B)" id="Vector_5" />
          <path d={svgPaths.p34460b00} fill="var(--fill-0, #0F172B)" id="Vector_6" />
        </g>
        <defs>
          <clipPath id="clip0_6025_2603">
            <rect fill="white" height="23" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[24px] left-[126px] top-[6px] w-[3.828px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#cad5e2] text-[16px] top-0 tracking-[-0.3125px]">|</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[39.5px] not-italic text-[#314158] text-[16px] text-center top-0 tracking-[-0.3125px]">PRODUTO</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[36px] items-center left-[141.83px] px-[10px] rounded-[8px] top-0 w-[118.172px]" data-name="Button">
      <Text1 />
      <Icon1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[260px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container3 />
        <Icon />
        <Text />
        <Button />
      </div>
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[#cad5e2] h-px left-[116.53px] top-[15.5px] w-[32px]" data-name="Container" />;
}

function Container7() {
  return (
    <div className="bg-white relative rounded-[33554400px] shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#314158] text-[10px] text-center tracking-[0.1172px]">1</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[27px] not-italic text-[14px] text-center text-white top-0 tracking-[-0.1504px]">Seleção</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#314158] content-stretch flex gap-[8px] h-[32px] items-center left-0 px-[14px] rounded-[8px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[110.531px]" data-name="Button">
      <Container7 />
      <Text2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[32px] relative shrink-0 w-[154.531px]" data-name="Container">
      <Container6 />
      <Button1 />
    </div>
  );
}

function Container9() {
  return <div className="absolute bg-[#cad5e2] h-px left-[151.55px] top-[15.5px] w-[32px]" data-name="Container" />;
}

function Container10() {
  return (
    <div className="absolute bg-[#90a1b9] content-stretch flex items-center justify-center left-[14px] rounded-[33554400px] size-[20px] top-[6px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[0.1172px]">2</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[20px] left-[42px] top-[6px] w-[89.547px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[45px] not-italic text-[#314158] text-[14px] text-center top-0 tracking-[-0.1504px]">Agrupamento</p>
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-[#45556c] left-[137.55px] rounded-[33554400px] shadow-[0px_0px_0px_0px_white] size-[10px] top-[-2px]" data-name="Container" />;
}

function Button2() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[32px] left-0 rounded-[8px] top-0 w-[145.547px]" data-name="Button">
      <Container10 />
      <Text3 />
      <Container11 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[32px] relative shrink-0 w-[183px]" data-name="Container">
      <Container9 />
      <Button2 />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-[#cad5e2] h-px left-[120.42px] top-[15.5px] w-[32px]" data-name="Container" />;
}

function Container14() {
  return (
    <div className="absolute bg-[#90a1b9] content-stretch flex items-center justify-center left-[14px] rounded-[33554400px] size-[20px] top-[6px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[0.1172px]">3</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[20px] left-[42px] top-[6px] w-[58.422px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[29.5px] not-italic text-[#314158] text-[14px] text-center top-0 tracking-[-0.1504px]">Exclusão</p>
    </div>
  );
}

function Container15() {
  return <div className="absolute bg-[#fb2c36] left-[106.42px] rounded-[33554400px] shadow-[0px_0px_0px_0px_white] size-[10px] top-[-2px]" data-name="Container" />;
}

function Button3() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[32px] left-0 rounded-[8px] top-0 w-[114.422px]" data-name="Button">
      <Container14 />
      <Text4 />
      <Container15 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[32px] relative shrink-0 w-[158.422px]" data-name="Container">
      <Container13 />
      <Button3 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#e2e8f0] relative rounded-[33554400px] shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#62748e] text-[10px] text-center tracking-[0.1172px]">4</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[33px] not-italic text-[#90a1b9] text-[14px] text-center top-0 tracking-[-0.1504px]">Resultado</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 px-[14px] rounded-[8px] top-0 w-[121.953px]" data-name="Button">
      <Container17 />
      <Text5 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[32px] relative shrink-0 w-[121.953px]" data-name="Container">
      <Button4 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Container5 />
        <Container8 />
        <Container12 />
        <Container16 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[12px] size-[15px] top-[8.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p63bb840} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[31.5px] relative rounded-[10px] shrink-0 w-[83.281px]" data-name="Button">
      <Icon2 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[52.5px] not-italic text-[#155dfc] text-[13px] text-center top-[6px] tracking-[-0.0762px]">Salvar</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[12px] size-[14px] top-[8.75px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M1.75 3.5H12.25" id="Vector" stroke="var(--stroke-0, #FC1515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p6d98680} id="Vector_2" stroke="var(--stroke-0, #FC1515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2f25b500} id="Vector_3" stroke="var(--stroke-0, #FC1515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 6.41667V9.91667" id="Vector_4" stroke="var(--stroke-0, #FC1515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M8.16667 6.41667V9.91667" id="Vector_5" stroke="var(--stroke-0, #FC1515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[32px] relative rounded-[10px] shrink-0 w-[97px]" data-name="Button">
      <Icon3 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[55.5px] not-italic text-[#fc1515] text-[13px] text-center top-[6px] tracking-[-0.0762px]">{`Limpar `}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[31.5px] relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-full items-center justify-end relative">
        <Button5 />
        <Button6 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[1578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] relative size-full">
        <Container2 />
        <Container4 />
        <Frame />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[15px] top-[8.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p5aee0f2} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[32px] relative rounded-[10px] shrink-0 w-[131px]" data-name="Button">
      <Icon4 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[70.5px] not-italic text-[#62748e] text-[13px] text-center top-[6px] tracking-[-0.0762px] w-[111px] whitespace-pre-wrap">Minhas análises</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px overflow-clip relative" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[#45556c] text-[0px] text-[12px] top-0 tracking-[0.0645px]">
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px]">Análise atual:</span>
        <span className="leading-[16.5px]">{` Nova análise padrão`}</span>
      </p>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-[441px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Button7 />
        <div className="flex items-center justify-center relative shrink-0 size-[14px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Icon5 />
          </div>
        </div>
        <Text6 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[45px] relative shrink-0 w-[1578px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pt-px px-[24px] relative size-full">
        <Container19 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container18 />
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-px relative size-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container />
    </div>
  );
}