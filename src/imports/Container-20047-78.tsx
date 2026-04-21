import svgPaths from "./svg-uhrtk70h0w";

function Heading() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[240px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[21px] left-0 not-italic text-[#314158] text-[14px] top-0 tracking-[0.6px] uppercase whitespace-nowrap">DEFINIR PERÍODO</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[14px] top-[2.75px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p24a2b500} id="Vector" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 1.16667V3.5" id="Vector_2" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 5.83333H12.25" id="Vector_3" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M4.66667 1.16667V3.5" id="Vector_4" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.91667 8.16667H6.41667" id="Vector_5" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7.58333 10.5H4.08333" id="Vector_6" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M4.08333 8.16667H4.08917" id="Vector_7" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.91667 10.5H9.9225" id="Vector_8" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="flex-[1_0_0] h-[29.5px] min-h-px min-w-px relative" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#314158] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[73.5px] not-italic text-[#314158] text-[13px] text-center top-0 whitespace-nowrap">Data Início e Fim</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[14px] top-[2.75px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M4.66667 1.16667V3.5" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 1.16667V3.5" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24a2b500} id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 5.83333H12.25" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p16827b00} id="Vector_5" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[29.5px] relative shrink-0 w-[121.563px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[72px] not-italic text-[#90a1b9] text-[13px] text-center top-0 whitespace-nowrap">Dias da Semana</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[30.5px] items-center left-[240px] pb-px top-0 w-[269.969px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Button />
      <Button1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[30.5px] relative shrink-0 w-[891px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading />
        <Container2 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[200px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Selecionar por:</p>
      </div>
    </div>
  );
}

function Container7() {
  return <div className="bg-[#314158] rounded-[33554400px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container6() {
  return (
    <div className="bg-white relative rounded-[33554400px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#314158] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] py-[2px] relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[148px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#314158] text-[13px] top-0 whitespace-nowrap">Dia</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-[148px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12.5px] min-h-px min-w-px not-italic relative text-[#314158] text-[10px]">Seleção livre de datas</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[148_0_0] h-[34px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="bg-[#f1f5f9] h-[54px] relative rounded-[10px] shrink-0 w-[200px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
        <Container6 />
        <Container8 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[148px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#62748e] text-[13px] top-0 whitespace-nowrap">Mês</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-[148px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12.5px] min-h-px min-w-px not-italic relative text-[#90a1b9] text-[10px]">Meses completos</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[148_0_0] h-[34px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[54px] relative rounded-[10px] shrink-0 w-[200px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[148px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#62748e] text-[13px] top-0 whitespace-nowrap">Ano</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-[148px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12.5px] min-h-px min-w-px not-italic relative text-[#90a1b9] text-[10px]">Anos completos</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[148_0_0] h-[34px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-[200px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[178px] relative shrink-0 w-[200px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Label />
        <Label1 />
        <Label2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[252.5px] relative shrink-0 w-[220px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Paragraph />
        <Container5 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[15px] relative shrink-0 w-[32.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-[16.5px] not-italic text-[#90a1b9] text-[10px] text-center top-0 tracking-[0.25px] uppercase whitespace-nowrap">Início</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[89.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[45px] not-italic text-[#314158] text-[13px] text-center top-0 whitespace-nowrap">1 Abr. de 2026</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[130.5_0_0] h-[36.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Text6 />
        <Text7 />
      </div>
    </div>
  );
}

function DateRangePicker() {
  return (
    <div className="flex-[158.5_0_0] h-[52.5px] min-h-px min-w-px relative rounded-bl-[10px] rounded-tl-[10px]" data-name="DateRangePicker">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[14px] relative size-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function DateRangePicker1() {
  return <div className="bg-[#d5dbe3] h-[32px] shrink-0 w-px" data-name="DateRangePicker" />;
}

function Text8() {
  return (
    <div className="h-[15px] relative shrink-0 w-[18.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-[9.5px] not-italic text-[#90a1b9] text-[10px] text-center top-0 tracking-[0.25px] uppercase whitespace-nowrap">Fim</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[92.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[46px] not-italic text-[#314158] text-[13px] text-center top-0 whitespace-nowrap">8 Abr. de 2026</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[130.5_0_0] h-[36.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Text8 />
        <Text9 />
      </div>
    </div>
  );
}

function DateRangePicker2() {
  return (
    <div className="flex-[158.5_0_0] h-[52.5px] min-h-px min-w-px relative rounded-br-[10px] rounded-tr-[10px]" data-name="DateRangePicker">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[14px] relative size-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="bg-white h-[52px] relative rounded-[10px] shrink-0 w-[320px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#d5dbe3] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-px relative size-full">
        <DateRangePicker />
        <DateRangePicker1 />
        <DateRangePicker2 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[244.5px] relative shrink-0 w-[320px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <SlotClone />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[651_0_0] h-[252.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[22px] relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[252.5_0_0] min-h-px min-w-px relative w-[891px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-start relative size-full">
        <Container4 />
        <Container13 />
      </div>
    </div>
  );
}

function Container18() {
  return <div className="bg-[#90a1b9] rounded-[33554400px] shrink-0 size-[4px]" data-name="Container" />;
}

function Paragraph1() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-0 whitespace-nowrap">Faixa de horário fixa de 08h às 23h com atualização a cada 30min</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[356.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container18 />
        <Paragraph1 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start pb-[22px] pl-[22px] pr-px pt-[17px] relative rounded-[14px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d5dbe3] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.06)]" />
      <Container1 />
      <Container3 />
      <Container17 />
    </div>
  );
}