import svgPaths from "./svg-07a00batvl";

function Heading() {
  return (
    <div className="h-[16px] relative shrink-0 w-[73.531px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">Intervalo</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[745px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[66.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 uppercase whitespace-nowrap">Período</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[66.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[#62748e] text-[9px] whitespace-nowrap">Datas fechadas</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[29.5px] relative shrink-0 w-[66.031px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-px items-start relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white flex-[58_0_0] min-h-px min-w-px relative rounded-[12px] w-[195px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[14px] pr-[114.969px] py-[2px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[118.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 uppercase whitespace-nowrap">Dias da semana</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[12px] relative shrink-0 w-[118.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[#62748e] text-[9px] whitespace-nowrap">Dias específicos da semana</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[29.5px] relative shrink-0 w-[118.828px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-px items-start relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white flex-[58_0_0] min-h-px min-w-px relative rounded-[12px] w-[195px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[14px] pr-[62.172px] py-[2px] relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[112.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[#1a6db5] text-[11px] top-0 uppercase whitespace-nowrap">Mensal</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[12px] relative shrink-0 w-[112.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[#62748e] text-[9px] whitespace-nowrap">Múltipla seleção de meses</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[29.5px] relative shrink-0 w-[112.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-px items-start relative size-full">
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Icon">
          <path d={svgPaths.p247d1a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#1a6db5] relative rounded-[33554400px] shrink-0 size-[14px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#edf8ff] flex-[58_0_0] min-h-px min-w-px relative rounded-[12px] w-[195px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#0e97e8] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[14px] py-[2px] relative size-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[105.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 uppercase whitespace-nowrap">Anual</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[12px] relative shrink-0 w-[105.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[#62748e] text-[9px] whitespace-nowrap">Múltipla seleção de anos</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[29.5px] relative shrink-0 w-[105.609px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-px items-start relative size-full">
        <Text6 />
        <Text7 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white flex-[58_0_0] min-h-px min-w-px relative rounded-[12px] w-[195px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[14px] pr-[75.391px] py-[2px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[250px] relative shrink-0 w-[212px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start pr-px relative size-full">
        <Container4 />
        <Container6 />
        <Container8 />
        <Container11 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[#314158] text-[12px] top-0 tracking-[0.7px] whitespace-nowrap">Selecionar mês</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#f1f5f9] h-[19px] relative rounded-[33554400px] shrink-0 w-[53.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[8px] not-italic text-[#314158] text-[0px] text-[10px] top-[2px] tracking-[0.25px] whitespace-nowrap">
          <span className="leading-[15px]">1</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[15px]">{` selec.`}</span>
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[19px] relative shrink-0 w-[160px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text8 />
        <Text9 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[29.594px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[15px] not-italic text-[#90a1b9] text-[9px] text-center top-0 underline whitespace-nowrap">Limpar</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[250px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container16 />
        <Button />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Icon">
          <path d={svgPaths.p247d1a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#314158] relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#314158] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[2px] py-px relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[63.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#0f172b] text-[11px] top-0 whitespace-nowrap">Março 2026</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container18 />
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[79.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Fevereiro 2026</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container19 />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[69.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Janeiro 2026</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container20 />
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[84.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Dezembro 2025</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container21 />
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[84.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Novembro 2025</p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container22 />
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[73.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Outubro 2025</p>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container23 />
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[81.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Setembro 2025</p>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container24 />
          <Text16 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[67.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Agosto 2025</p>
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container25 />
          <Text17 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[59.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Julho 2025</p>
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container26 />
          <Text18 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[63.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Junho 2025</p>
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container27 />
          <Text19 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[55.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Maio 2025</p>
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container28 />
          <Text20 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[54.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Abril 2025</p>
      </div>
    </div>
  );
}

function Label11() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container29 />
          <Text21 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[63.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Março 2025</p>
      </div>
    </div>
  );
}

function Label12() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container30 />
          <Text22 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[79.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Fevereiro 2025</p>
      </div>
    </div>
  );
}

function Label13() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container31 />
          <Text23 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[69.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Janeiro 2025</p>
      </div>
    </div>
  );
}

function Label14() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container32 />
          <Text24 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[84.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Dezembro 2024</p>
      </div>
    </div>
  );
}

function Label15() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container33 />
          <Text25 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[85.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Novembro 2024</p>
      </div>
    </div>
  );
}

function Label16() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container34 />
          <Text26 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[73.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Outubro 2024</p>
      </div>
    </div>
  );
}

function Label17() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container35 />
          <Text27 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[81.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Setembro 2024</p>
      </div>
    </div>
  );
}

function Label18() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container36 />
          <Text28 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[68.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Agosto 2024</p>
      </div>
    </div>
  );
}

function Label19() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container37 />
          <Text29 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[59.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Julho 2024</p>
      </div>
    </div>
  );
}

function Label20() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container38 />
          <Text30 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[63.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Junho 2024</p>
      </div>
    </div>
  );
}

function Label21() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container39 />
          <Text31 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[56.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Maio 2024</p>
      </div>
    </div>
  );
}

function Label22() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container40 />
          <Text32 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[55.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Abril 2024</p>
      </div>
    </div>
  );
}

function Label23() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container41 />
          <Text33 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[63.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Março 2024</p>
      </div>
    </div>
  );
}

function Label24() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container42 />
          <Text34 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[79.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Fevereiro 2024</p>
      </div>
    </div>
  );
}

function Label25() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container43 />
          <Text35 />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[69.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Janeiro 2024</p>
      </div>
    </div>
  );
}

function Label26() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container44 />
          <Text36 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[84.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Dezembro 2023</p>
      </div>
    </div>
  );
}

function Label27() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container45 />
          <Text37 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[85.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Novembro 2023</p>
      </div>
    </div>
  );
}

function Label28() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container46 />
          <Text38 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[73.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Outubro 2023</p>
      </div>
    </div>
  );
}

function Label29() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container47 />
          <Text39 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[81.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Setembro 2023</p>
      </div>
    </div>
  );
}

function Label30() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container48 />
          <Text40 />
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[67.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Agosto 2023</p>
      </div>
    </div>
  );
}

function Label31() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container49 />
          <Text41 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[59.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Julho 2023</p>
      </div>
    </div>
  );
}

function Label32() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container50 />
          <Text42 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text43() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[63.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Junho 2023</p>
      </div>
    </div>
  );
}

function Label33() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container51 />
          <Text43 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text44() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[56.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Maio 2023</p>
      </div>
    </div>
  );
}

function Label34() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container52 />
          <Text44 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[54.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Abril 2023</p>
      </div>
    </div>
  );
}

function Label35() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container53 />
          <Text45 />
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[63.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Março 2023</p>
      </div>
    </div>
  );
}

function Label36() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container54 />
          <Text46 />
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[79.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Fevereiro 2023</p>
      </div>
    </div>
  );
}

function Label37() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container55 />
          <Text47 />
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text48() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[69.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Janeiro 2023</p>
      </div>
    </div>
  );
}

function Label38() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container56 />
          <Text48 />
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text49() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[84.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Dezembro 2022</p>
      </div>
    </div>
  );
}

function Label39() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container57 />
          <Text49 />
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text50() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[84.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Novembro 2022</p>
      </div>
    </div>
  );
}

function Label40() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container58 />
          <Text50 />
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text51() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[73.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Outubro 2022</p>
      </div>
    </div>
  );
}

function Label41() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container59 />
          <Text51 />
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[81.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Setembro 2022</p>
      </div>
    </div>
  );
}

function Label42() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container60 />
          <Text52 />
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text53() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[67.766px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Agosto 2022</p>
      </div>
    </div>
  );
}

function Label43() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container61 />
          <Text53 />
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text54() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[59.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Julho 2022</p>
      </div>
    </div>
  );
}

function Label44() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container62 />
          <Text54 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text55() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[63.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Junho 2022</p>
      </div>
    </div>
  );
}

function Label45() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container63 />
          <Text55 />
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text56() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[56.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Maio 2022</p>
      </div>
    </div>
  );
}

function Label46() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container64 />
          <Text56 />
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text57() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[54.859px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Abril 2022</p>
      </div>
    </div>
  );
}

function Label47() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container65 />
          <Text57 />
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text58() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[63.703px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Março 2022</p>
      </div>
    </div>
  );
}

function Label48() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container66 />
          <Text58 />
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text59() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[79.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Fevereiro 2022</p>
      </div>
    </div>
  );
}

function Label49() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container67 />
          <Text59 />
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text60() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[69.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Janeiro 2022</p>
      </div>
    </div>
  );
}

function Label50() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container68 />
          <Text60 />
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text61() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[82.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Dezembro 2021</p>
      </div>
    </div>
  );
}

function Label51() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container69 />
          <Text61 />
        </div>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text62() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[82.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Novembro 2021</p>
      </div>
    </div>
  );
}

function Label52() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container70 />
          <Text62 />
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text63() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[71.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Outubro 2021</p>
      </div>
    </div>
  );
}

function Label53() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container71 />
          <Text63 />
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text64() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[79.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Setembro 2021</p>
      </div>
    </div>
  );
}

function Label54() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container72 />
          <Text64 />
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text65() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[65.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Agosto 2021</p>
      </div>
    </div>
  );
}

function Label55() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container73 />
          <Text65 />
        </div>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text66() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[57.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Julho 2021</p>
      </div>
    </div>
  );
}

function Label56() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container74 />
          <Text66 />
        </div>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text67() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[60.984px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Junho 2021</p>
      </div>
    </div>
  );
}

function Label57() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container75 />
          <Text67 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text68() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[53.859px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Maio 2021</p>
      </div>
    </div>
  );
}

function Label58() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container76 />
          <Text68 />
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text69() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[52.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Abril 2021</p>
      </div>
    </div>
  );
}

function Label59() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative size-full">
          <Container77 />
          <Text69 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] flex-[214_0_0] min-h-px min-w-px relative rounded-[10px] w-[250px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pb-px pl-[7px] pr-[17px] pt-[7px] relative size-full">
          <Label />
          <Label1 />
          <Label2 />
          <Label3 />
          <Label4 />
          <Label5 />
          <Label6 />
          <Label7 />
          <Label8 />
          <Label9 />
          <Label10 />
          <Label11 />
          <Label12 />
          <Label13 />
          <Label14 />
          <Label15 />
          <Label16 />
          <Label17 />
          <Label18 />
          <Label19 />
          <Label20 />
          <Label21 />
          <Label22 />
          <Label23 />
          <Label24 />
          <Label25 />
          <Label26 />
          <Label27 />
          <Label28 />
          <Label29 />
          <Label30 />
          <Label31 />
          <Label32 />
          <Label33 />
          <Label34 />
          <Label35 />
          <Label36 />
          <Label37 />
          <Label38 />
          <Label39 />
          <Label40 />
          <Label41 />
          <Label42 />
          <Label43 />
          <Label44 />
          <Label45 />
          <Label46 />
          <Label47 />
          <Label48 />
          <Label49 />
          <Label50 />
          <Label51 />
          <Label52 />
          <Label53 />
          <Label54 />
          <Label55 />
          <Label56 />
          <Label57 />
          <Label58 />
          <Label59 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[513px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Container15 />
        <Container17 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[250px] relative shrink-0 w-[296px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[250_0_0] min-h-px min-w-px relative w-[745px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-start relative size-full">
        <Container3 />
        <Container13 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start pl-[21px] pr-px py-[21px] relative rounded-[14px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d5dbe3] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.06)]" />
      <Container1 />
      <Container2 />
    </div>
  );
}