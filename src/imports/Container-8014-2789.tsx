import svgPaths from "./svg-3v6rb7ext6";

function Span() {
  return (
    <div className="h-[16px] relative shrink-0 w-[145.859px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#45556c] text-[18px] top-0 tracking-[0.0105px]">Gráfico evolutivo</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[15px] top-[7.5px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.pbf88a00} id="Vector" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M11.25 10.625V5.625" id="Vector_2" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M8.125 10.625V3.125" id="Vector_3" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M5 10.625V8.75" id="Vector_4" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e2e8f0] h-[30px] relative shrink-0 w-[76.219px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[49.5px] not-italic text-[#314158] text-[12px] text-center top-[6px]">Barra</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[15px] top-[7.5px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.pbf88a00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p1b7ad580} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[49.5px] not-italic text-[#90a1b9] text-[12px] text-center top-[6px]">Linha</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[10px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Button />
        <Button1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[310.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Span />
        <Container4 />
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div className="h-[15px] relative shrink-0 w-[310.313px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#90a1b9] text-[10px] top-0 tracking-[0.2372px]">Visualização de uma métrica por vez</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[51px] relative shrink-0 w-[310.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container3 />
        <Span1 />
      </div>
    </div>
  );
}

function Span2() {
  return <div className="absolute bg-[#314158] left-[14px] rounded-[33554400px] size-[8px] top-[12px]" data-name="span" />;
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] border border-[#314158] border-solid h-[34px] left-0 rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[118.266px]" data-name="button">
      <Span2 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[65px] not-italic text-[#314158] text-[12px] text-center top-[7px]">Venda (ROB)</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[34px] relative shrink-0 w-[118.266px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[51px] items-start justify-between left-[16px] top-[12px] w-[1198px]" data-name="Container">
      <Container2 />
      <Container5 />
    </div>
  );
}

function Span3() {
  return (
    <div className="absolute h-[17.875px] left-0 top-[4px] w-[58.563px]" data-name="span">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[17.875px] left-0 not-italic text-[#45556c] text-[11px] top-0 tracking-[0.0645px] uppercase">REGIONAL</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[21.875px] relative shrink-0 w-full" data-name="Container">
      <Span3 />
    </div>
  );
}

function Span4() {
  return <div className="bg-[#6366f1] rounded-[6px] shrink-0 size-[12px]" data-name="span" />;
}

function Span5() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[54.5px] not-italic text-[#45556c] text-[11px] text-center top-0 tracking-[0.0645px]">Esquadrão 40 graus</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[20.5px] items-center left-[280.22px] px-[4px] rounded-[8px] top-[4px] w-[133.703px]" data-name="button">
      <Span4 />
      <Span5 />
    </div>
  );
}

function Span6() {
  return <div className="bg-[#06b6d4] rounded-[6px] shrink-0 size-[12px]" data-name="span" />;
}

function Span7() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[46.5px] not-italic text-[#45556c] text-[11px] text-center top-0 tracking-[0.0645px]">Flechas do Norte</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[20.5px] items-center left-[429.92px] px-[4px] rounded-[8px] top-[4px] w-[117.156px]" data-name="button">
      <Span6 />
      <Span7 />
    </div>
  );
}

function Span8() {
  return <div className="bg-[#f59e0b] rounded-[6px] shrink-0 size-[12px]" data-name="span" />;
}

function Span9() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[29px] not-italic text-[#45556c] text-[11px] text-center top-0 tracking-[0.0645px]">Ultra Hight</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[20.5px] items-center left-[563.08px] px-[4px] rounded-[8px] top-[4px] w-[84.422px]" data-name="button">
      <Span8 />
      <Span9 />
    </div>
  );
}

function Span10() {
  return <div className="bg-[#10b981] rounded-[6px] shrink-0 size-[12px]" data-name="span" />;
}

function Span11() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[44.5px] not-italic text-[#45556c] text-[11px] text-center top-0 tracking-[0.0645px]">Gigante Paulista</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[20.5px] items-center left-[663.5px] px-[4px] rounded-[8px] top-[4px] w-[113.063px]" data-name="button">
      <Span10 />
      <Span11 />
    </div>
  );
}

function Span12() {
  return <div className="bg-[#ef4444] rounded-[6px] shrink-0 size-[12px]" data-name="span" />;
}

function Span13() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[50.5px] not-italic text-[#45556c] text-[11px] text-center top-0 tracking-[0.0645px]">Águias do Cerrado</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[20.5px] items-center left-[792.56px] px-[4px] rounded-[8px] top-[4px] w-[125.219px]" data-name="button">
      <Span12 />
      <Span13 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[1.67%_1.67%_30%_5.84%]" data-name="Group">
      <div className="absolute inset-[-0.24%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1108 206">
          <g id="Group">
            <path d="M0 205.5H1108" id="Vector" stroke="var(--stroke-0, #F1F5F9)" strokeDasharray="3 3" />
            <path d="M0 154.25H1108" id="Vector_2" stroke="var(--stroke-0, #F1F5F9)" strokeDasharray="3 3" />
            <path d="M0 103H1108" id="Vector_3" stroke="var(--stroke-0, #F1F5F9)" strokeDasharray="3 3" />
            <path d="M0 51.75H1108" id="Vector_4" stroke="var(--stroke-0, #F1F5F9)" strokeDasharray="3 3" />
            <path d="M0 0.5H1108" id="Vector_5" stroke="var(--stroke-0, #F1F5F9)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[1.67%_1.67%_30%_5.84%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[72.2%_89.71%_18.61%_7.99%]" data-name="Group">
      <div className="absolute flex inset-[72.2%_89.71%_18.61%_7.99%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[27px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">01/02</p>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[72.2%_89.71%_18.61%_7.99%]" data-name="Group">
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[72.2%_82.01%_18.14%_15.57%]" data-name="Group">
      <div className="absolute flex inset-[72.2%_82.01%_18.14%_15.57%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[29px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">02/02</p>
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[72.2%_82.01%_18.14%_15.57%]" data-name="Group">
      <Group7 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[72.2%_74.3%_18.14%_23.28%]" data-name="Group">
      <div className="absolute flex inset-[72.2%_74.3%_18.14%_23.28%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[29px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">03/02</p>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[72.2%_74.3%_18.14%_23.28%]" data-name="Group">
      <Group9 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[72.2%_66.59%_18.14%_30.99%]" data-name="Group">
      <div className="absolute flex inset-[72.2%_66.59%_18.14%_30.99%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[29px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">04/02</p>
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[72.2%_66.59%_18.14%_30.99%]" data-name="Group">
      <Group11 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[72.2%_58.88%_18.14%_38.7%]" data-name="Group">
      <div className="absolute flex inset-[72.2%_58.88%_18.14%_38.7%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[29px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">05/02</p>
        </div>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[72.2%_58.88%_18.14%_38.7%]" data-name="Group">
      <Group13 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[72.2%_51.18%_18.14%_46.4%]" data-name="Group">
      <div className="absolute flex inset-[72.2%_51.18%_18.14%_46.4%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[29px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">06/02</p>
        </div>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[72.2%_51.18%_18.14%_46.4%]" data-name="Group">
      <Group15 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[72.2%_43.47%_18.38%_54.17%]" data-name="Group">
      <div className="absolute flex inset-[72.2%_43.47%_18.38%_54.17%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[28px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">07/02</p>
        </div>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[72.2%_43.47%_18.38%_54.17%]" data-name="Group">
      <Group17 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[72.2%_35.76%_18.14%_61.82%]" data-name="Group">
      <div className="absolute flex inset-[72.2%_35.76%_18.14%_61.82%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[29px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">08/02</p>
        </div>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[72.2%_35.76%_18.14%_61.82%]" data-name="Group">
      <Group19 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[72.2%_28.05%_18.14%_69.53%]" data-name="Group">
      <div className="absolute flex inset-[72.2%_28.05%_18.14%_69.53%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[29px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">09/02</p>
        </div>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[72.2%_28.05%_18.14%_69.53%]" data-name="Group">
      <Group21 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[72.2%_20.35%_18.61%_77.35%]" data-name="Group">
      <div className="absolute flex inset-[72.2%_20.35%_18.61%_77.35%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[27px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">10/02</p>
        </div>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[72.2%_20.35%_18.61%_77.35%]" data-name="Group">
      <Group23 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[72.2%_12.64%_18.85%_85.12%]" data-name="Group">
      <div className="absolute flex inset-[72.2%_12.64%_18.85%_85.12%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[26px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">11/02</p>
        </div>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[72.2%_12.64%_18.85%_85.12%]" data-name="Group">
      <Group25 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[72.2%_4.93%_18.61%_92.77%]" data-name="Group">
      <div className="absolute flex inset-[72.2%_4.93%_18.61%_92.77%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[27px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">12/02</p>
        </div>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[72.2%_4.93%_18.61%_92.77%]" data-name="Group">
      <Group27 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[72.2%_4.93%_18.14%_7.99%]" data-name="Group">
      <Group4 />
      <Group6 />
      <Group8 />
      <Group10 />
      <Group12 />
      <Group14 />
      <Group16 />
      <Group18 />
      <Group20 />
      <Group22 />
      <Group24 />
      <Group26 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[72.2%_4.93%_18.14%_7.99%]" data-name="Group">
      <Group3 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[67.85%_94.82%_28.15%_4.59%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[67.85%_94.82%_28.15%_4.59%] leading-[normal] not-italic text-[#64748b] text-[10px] text-right">0</p>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[50.77%_94.82%_45.23%_3.01%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[50.77%_94.82%_45.23%_3.01%] leading-[normal] not-italic text-[#64748b] text-[10px] text-right">850K</p>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[33.68%_94.82%_62.32%_3.34%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[33.68%_94.82%_62.32%_3.34%] leading-[normal] not-italic text-[#64748b] text-[10px] text-right">1.7M</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[16.6%_94.82%_79.4%_3.17%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[16.6%_94.82%_79.4%_3.17%] leading-[normal] not-italic text-[#64748b] text-[10px] text-right">2.5M</p>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[0.35%_94.82%_95.65%_3.09%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.35%_94.82%_95.65%_3.09%] leading-[normal] not-italic text-[#64748b] text-[10px] text-right">3.4M</p>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[0.35%_94.82%_28.15%_3.01%]" data-name="Group">
      <Group30 />
      <Group31 />
      <Group32 />
      <Group33 />
      <Group34 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[0.35%_94.82%_28.15%_3.01%]" data-name="Group">
      <Group29 />
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute inset-[27.05%_92.47%_30%_6.61%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 128.85">
        <g id="Group">
          <path d={svgPaths.p911cc80} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute inset-[63.79%_84.76%_30%_14.32%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 18.6213">
        <g id="Group">
          <path d={svgPaths.p15147500} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute inset-[15.73%_77.05%_30%_22.03%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 162.811">
        <g id="Group">
          <path d={svgPaths.p15835700} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute inset-[62.59%_69.35%_30%_29.74%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 22.2449">
        <g id="Group">
          <path d={svgPaths.p332ff080} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute inset-[65.01%_61.64%_30%_37.44%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14.9775">
        <g id="Group">
          <path d={svgPaths.p273a00} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute inset-[62.69%_53.93%_30%_45.15%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 21.9445">
        <g id="Group">
          <path d={svgPaths.p3e9fd400} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute inset-[64.76%_46.22%_30%_52.86%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 15.7291">
        <g id="Group">
          <path d={svgPaths.pc881f00} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute inset-[62.77%_38.52%_30%_60.56%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 21.6967">
        <g id="Group">
          <path d={svgPaths.p15645900} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute inset-[64.07%_30.81%_30%_68.27%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 17.7828">
        <g id="Group">
          <path d={svgPaths.p12c9da00} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute inset-[64.07%_23.1%_30%_75.98%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 17.7828">
        <g id="Group">
          <path d={svgPaths.p12c9da00} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute inset-[13.3%_15.4%_30%_83.69%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 170.099">
        <g id="Group">
          <path d={svgPaths.p651e0c0} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute inset-[64.04%_7.69%_30%_91.39%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 17.8857">
        <g id="Group">
          <path d={svgPaths.p38761f00} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[13.3%_7.69%_30%_6.61%]" data-name="Group">
      <Group38 />
      <Group39 />
      <Group40 />
      <Group41 />
      <Group42 />
      <Group43 />
      <Group44 />
      <Group45 />
      <Group46 />
      <Group47 />
      <Group48 />
      <Group49 />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[13.3%_7.69%_30%_6.61%]" data-name="Group">
      <Group37 />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[13.3%_7.69%_30%_6.61%]" data-name="Group">
      <Group36 />
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute inset-[23.16%_91.22%_30%_7.87%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 140.521">
        <g id="Group">
          <path d={svgPaths.p3345df80} fill="var(--fill-0, #06B6D4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute inset-[13.3%_83.51%_30%_15.57%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 170.099">
        <g id="Group">
          <path d={svgPaths.p651e0c0} fill="var(--fill-0, #06B6D4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute inset-[62.88%_75.8%_30%_23.28%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 21.3497">
        <g id="Group">
          <path d={svgPaths.p28d86f00} fill="var(--fill-0, #06B6D4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute inset-[62.69%_68.09%_30%_30.99%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 21.9445">
        <g id="Group">
          <path d={svgPaths.p3e9fd400} fill="var(--fill-0, #06B6D4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute inset-[15.73%_60.39%_30%_38.7%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 162.811">
        <g id="Group">
          <path d={svgPaths.p28d6ad00} fill="var(--fill-0, #06B6D4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute inset-[3.02%_52.68%_30%_46.4%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 200.926">
        <g id="Group">
          <path d={svgPaths.p35d56a80} fill="var(--fill-0, #06B6D4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute inset-[63.2%_44.97%_30%_54.11%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 20.3893">
        <g id="Group">
          <path d={svgPaths.p50ac300} fill="var(--fill-0, #06B6D4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute inset-[63.65%_37.26%_30%_61.82%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 19.0378">
        <g id="Group">
          <path d={svgPaths.p7a5b080} fill="var(--fill-0, #06B6D4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute inset-[65.91%_29.56%_30%_69.52%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12.2671">
        <g id="Group">
          <path d={svgPaths.p26d3b000} fill="var(--fill-0, #06B6D4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group62() {
  return (
    <div className="absolute inset-[14.95%_21.85%_30%_77.23%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 165.16">
        <g id="Group">
          <path d={svgPaths.p38746200} fill="var(--fill-0, #06B6D4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group63() {
  return (
    <div className="absolute inset-[62.69%_14.14%_30%_84.94%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 21.9445">
        <g id="Group">
          <path d={svgPaths.p341f3b80} fill="var(--fill-0, #06B6D4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute inset-[63.2%_6.44%_30%_92.65%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 20.3893">
        <g id="Group">
          <path d={svgPaths.p3ead9380} fill="var(--fill-0, #06B6D4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute contents inset-[3.02%_6.44%_30%_7.87%]" data-name="Group">
      <Group53 />
      <Group54 />
      <Group55 />
      <Group56 />
      <Group57 />
      <Group58 />
      <Group59 />
      <Group60 />
      <Group61 />
      <Group62 />
      <Group63 />
      <Group64 />
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents inset-[3.02%_6.44%_30%_7.87%]" data-name="Group">
      <Group52 />
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents inset-[3.02%_6.44%_30%_7.87%]" data-name="Group">
      <Group51 />
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute inset-[27.89%_89.96%_30%_9.12%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 126.324">
        <g id="Group">
          <path d={svgPaths.p37b89871} fill="var(--fill-0, #F59E0B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group69() {
  return (
    <div className="absolute inset-[62.77%_82.26%_30%_16.83%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 21.6967">
        <g id="Group">
          <path d={svgPaths.p15645900} fill="var(--fill-0, #F59E0B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group70() {
  return (
    <div className="absolute inset-[64.04%_74.55%_30%_24.53%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 17.8857">
        <g id="Group">
          <path d={svgPaths.p303f71f0} fill="var(--fill-0, #F59E0B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute inset-[69.86%_66.84%_30%_32.24%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 0.412979">
        <g id="Group">
          <path d={svgPaths.p4f64e40} fill="var(--fill-0, #F59E0B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group72() {
  return (
    <div className="absolute inset-[27.57%_59.13%_30%_39.95%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 127.293">
        <g id="Group">
          <path d={svgPaths.p30e1b300} fill="var(--fill-0, #F59E0B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group73() {
  return (
    <div className="absolute inset-[62.59%_51.43%_30%_47.65%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 22.2449">
        <g id="Group">
          <path d={svgPaths.p332ff080} fill="var(--fill-0, #F59E0B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group74() {
  return (
    <div className="absolute inset-[27.05%_43.72%_30%_55.36%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 128.85">
        <g id="Group">
          <path d={svgPaths.p3c777100} fill="var(--fill-0, #F59E0B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group75() {
  return (
    <div className="absolute inset-[23.16%_36.01%_30%_63.07%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 140.521">
        <g id="Group">
          <path d={svgPaths.p3e1d9f00} fill="var(--fill-0, #F59E0B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group76() {
  return (
    <div className="absolute inset-[63.84%_28.31%_30%_70.78%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 18.4906">
        <g id="Group">
          <path d={svgPaths.p2a302780} fill="var(--fill-0, #F59E0B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group77() {
  return (
    <div className="absolute inset-[65.34%_20.6%_30%_78.48%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13.9847">
        <g id="Group">
          <path d={svgPaths.pebe3500} fill="var(--fill-0, #F59E0B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group78() {
  return (
    <div className="absolute inset-[29.83%_12.89%_30%_86.19%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 120.512">
        <g id="Group">
          <path d={svgPaths.p1c4a6f80} fill="var(--fill-0, #F59E0B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group79() {
  return (
    <div className="absolute inset-[62.43%_5.18%_30%_93.9%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 22.7141">
        <g id="Group">
          <path d={svgPaths.pbc78000} fill="var(--fill-0, #F59E0B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group67() {
  return (
    <div className="absolute contents inset-[23.16%_5.18%_30%_9.12%]" data-name="Group">
      <Group68 />
      <Group69 />
      <Group70 />
      <Group71 />
      <Group72 />
      <Group73 />
      <Group74 />
      <Group75 />
      <Group76 />
      <Group77 />
      <Group78 />
      <Group79 />
    </div>
  );
}

function Group66() {
  return (
    <div className="absolute contents inset-[23.16%_5.18%_30%_9.12%]" data-name="Group">
      <Group67 />
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute contents inset-[23.16%_5.18%_30%_9.12%]" data-name="Group">
      <Group66 />
    </div>
  );
}

function Group83() {
  return (
    <div className="absolute inset-[63.61%_88.71%_30%_10.37%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 19.1773">
        <g id="Group">
          <path d={svgPaths.pf5ccd80} fill="var(--fill-0, #10B981)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group84() {
  return (
    <div className="absolute inset-[23.16%_81%_30%_18.08%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 140.521">
        <g id="Group">
          <path d={svgPaths.p3e1d9f00} fill="var(--fill-0, #10B981)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group85() {
  return (
    <div className="absolute inset-[63.79%_73.3%_30%_25.78%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 18.6213">
        <g id="Group">
          <path d={svgPaths.p15147500} fill="var(--fill-0, #10B981)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group86() {
  return (
    <div className="absolute inset-[29.03%_65.59%_30%_33.49%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 122.913">
        <g id="Group">
          <path d={svgPaths.p24c11b00} fill="var(--fill-0, #10B981)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group87() {
  return (
    <div className="absolute inset-[27.05%_57.88%_30%_41.2%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 128.85">
        <g id="Group">
          <path d={svgPaths.p19533000} fill="var(--fill-0, #10B981)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group88() {
  return (
    <div className="absolute inset-[64.76%_50.18%_30%_48.91%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 15.7291">
        <g id="Group">
          <path d={svgPaths.pc881f00} fill="var(--fill-0, #10B981)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group89() {
  return (
    <div className="absolute inset-[62.44%_42.47%_30%_56.61%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 22.6858">
        <g id="Group">
          <path d={svgPaths.p1eaa200} fill="var(--fill-0, #10B981)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group90() {
  return (
    <div className="absolute inset-[64.76%_34.76%_30%_64.32%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 15.7291">
        <g id="Group">
          <path d={svgPaths.pc881f00} fill="var(--fill-0, #10B981)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group91() {
  return (
    <div className="absolute inset-[14.95%_27.05%_30%_72.03%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 165.16">
        <g id="Group">
          <path d={svgPaths.p38746200} fill="var(--fill-0, #10B981)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group92() {
  return (
    <div className="absolute inset-[65.91%_19.35%_30%_79.74%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12.2671">
        <g id="Group">
          <path d={svgPaths.p26d3b000} fill="var(--fill-0, #10B981)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group93() {
  return (
    <div className="absolute inset-[29.83%_11.64%_30%_87.44%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 120.512">
        <g id="Group">
          <path d={svgPaths.p1c4a6f80} fill="var(--fill-0, #10B981)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group94() {
  return (
    <div className="absolute inset-[63.84%_3.93%_30%_95.15%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 18.4906">
        <g id="Group">
          <path d={svgPaths.p9ed9600} fill="var(--fill-0, #10B981)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group82() {
  return (
    <div className="absolute contents inset-[14.95%_3.93%_30%_10.37%]" data-name="Group">
      <Group83 />
      <Group84 />
      <Group85 />
      <Group86 />
      <Group87 />
      <Group88 />
      <Group89 />
      <Group90 />
      <Group91 />
      <Group92 />
      <Group93 />
      <Group94 />
    </div>
  );
}

function Group81() {
  return (
    <div className="absolute contents inset-[14.95%_3.93%_30%_10.37%]" data-name="Group">
      <Group82 />
    </div>
  );
}

function Group80() {
  return (
    <div className="absolute contents inset-[14.95%_3.93%_30%_10.37%]" data-name="Group">
      <Group81 />
    </div>
  );
}

function Group98() {
  return (
    <div className="absolute inset-[19.2%_87.46%_30%_11.62%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 152.401">
        <g id="Group">
          <path d={svgPaths.p23cfb080} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group99() {
  return (
    <div className="absolute inset-[25.76%_79.75%_30%_19.33%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 132.719">
        <g id="Group">
          <path d={svgPaths.pf348700} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group100() {
  return (
    <div className="absolute inset-[65.34%_72.05%_30%_27.04%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13.9847">
        <g id="Group">
          <path d={svgPaths.pebe3500} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group101() {
  return (
    <div className="absolute inset-[30.3%_64.34%_30%_34.74%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 119.102">
        <g id="Group">
          <path d={svgPaths.pca92b00} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group102() {
  return (
    <div className="absolute inset-[14.18%_56.63%_30%_42.45%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 167.471">
        <g id="Group">
          <path d={svgPaths.p9fa0500} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group103() {
  return (
    <div className="absolute inset-[62.77%_48.92%_30%_50.16%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 21.6967">
        <g id="Group">
          <path d={svgPaths.p15645900} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group104() {
  return (
    <div className="absolute inset-[25.76%_41.22%_30%_57.87%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 132.719">
        <g id="Group">
          <path d={svgPaths.pf348700} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group105() {
  return (
    <div className="absolute inset-[63.69%_33.51%_30%_65.57%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 18.9334">
        <g id="Group">
          <path d={svgPaths.p8c2300} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group106() {
  return (
    <div className="absolute inset-[30.3%_25.8%_30%_73.28%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 119.102">
        <g id="Group">
          <path d={svgPaths.pca92b00} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group107() {
  return (
    <div className="absolute inset-[65.91%_18.09%_30%_80.99%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12.2671">
        <g id="Group">
          <path d={svgPaths.p26d3b000} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group108() {
  return (
    <div className="absolute inset-[66.99%_10.39%_30%_88.7%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 9.02124">
        <g id="Group">
          <path d={svgPaths.p2988b080} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group109() {
  return (
    <div className="absolute inset-[63.84%_2.68%_30%_96.4%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 18.4906">
        <g id="Group">
          <path d={svgPaths.p9ed9600} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group97() {
  return (
    <div className="absolute contents inset-[14.18%_2.68%_30%_11.62%]" data-name="Group">
      <Group98 />
      <Group99 />
      <Group100 />
      <Group101 />
      <Group102 />
      <Group103 />
      <Group104 />
      <Group105 />
      <Group106 />
      <Group107 />
      <Group108 />
      <Group109 />
    </div>
  );
}

function Group96() {
  return (
    <div className="absolute contents inset-[14.18%_2.68%_30%_11.62%]" data-name="Group">
      <Group97 />
    </div>
  );
}

function Group95() {
  return (
    <div className="absolute contents inset-[14.18%_2.68%_30%_11.62%]" data-name="Group">
      <Group96 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[1198px]" data-name="Icon">
      <Group />
      <Group2 />
      <Group28 />
      <Group35 />
      <Group50 />
      <Group65 />
      <Group80 />
      <Group95 />
    </div>
  );
}

function BarChart() {
  return (
    <div className="h-[300px] relative shrink-0 w-full" data-name="BarChart">
      <Icon2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[382.375px] items-start left-[16px] top-0 w-[1198px]" data-name="Container">
      <Container8 />
      <Container9 />
      <BarChart />
    </div>
  );
}

function CalendarIcon() {
  return (
    <div className="absolute left-0 size-[12px] top-[2px]" data-name="CalendarIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="CalendarIcon">
          <path d="M4 1V3" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1V3" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Span14() {
  return (
    <div className="h-[16px] relative shrink-0 w-[136.859px]" data-name="span">
      <CalendarIcon />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[18px] not-italic text-[#90a1b9] text-[12px] top-0">{`Paginação de Períodos `}</p>
    </div>
  );
}

function Span15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[136.859px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[18px] not-italic text-[#90a1b9] text-[12px] top-0">1–12 de 29</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[26px] relative rounded-[8px] shrink-0 w-[32px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[16px] not-italic text-[#90a1b9] text-[12px] text-center top-[4px]">7</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#314158] h-[26px] relative rounded-[8px] shrink-0 w-[32px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[16.06px] not-italic text-[12px] text-center text-white top-[4px]">12</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[26px] relative rounded-[8px] shrink-0 w-[32px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[16.31px] not-italic text-[#90a1b9] text-[12px] text-center top-[4px]">15</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[26px] relative rounded-[8px] shrink-0 w-[32px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[16.27px] not-italic text-[#90a1b9] text-[12px] text-center top-[4px]">31</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] h-[26px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Button8 />
        <Button9 />
        <Button10 />
        <Button11 />
      </div>
    </div>
  );
}

function Container14() {
  return <div className="bg-[#e2e8f0] h-[16px] shrink-0 w-px" data-name="Container" />;
}

function ChevronLeft() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="ChevronLeft">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 8.16667">
            <path d={svgPaths.p15ba5180} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[22px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <ChevronLeft />
      </div>
    </div>
  );
}

function Span16() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[4px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px]">1 / 3</p>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="ChevronRight">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 8.16667">
            <path d={svgPaths.p3a6cd80} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[22px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <ChevronRight />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[22px] relative shrink-0 w-[85.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button12 />
        <Span16 />
        <Button13 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[12px] h-[26px] items-center relative shrink-0 w-[315.766px]" data-name="Container">
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[49px] items-center relative shrink-0">
      <Span15 />
      <Container12 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Span14 />
        <Frame />
      </div>
    </div>
  );
}

function CalendarIcon1() {
  return (
    <div className="absolute left-0 size-[12px] top-[2px]" data-name="CalendarIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="CalendarIcon">
          <path d="M4 1V3" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1V3" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Span17() {
  return (
    <div className="h-[16px] relative shrink-0 w-[136.859px]" data-name="span">
      <CalendarIcon1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[18px] not-italic text-[#90a1b9] text-[12px] top-0">Paginação de Atributos</p>
    </div>
  );
}

function Span18() {
  return (
    <div className="h-[16px] relative shrink-0 w-[136.859px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[18px] not-italic text-[#90a1b9] text-[12px] top-0">1–12 de 29</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[26px] relative rounded-[8px] shrink-0 w-[32px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[16px] not-italic text-[#90a1b9] text-[12px] text-center top-[4px]">7</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#314158] h-[26px] relative rounded-[8px] shrink-0 w-[32px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[16.06px] not-italic text-[12px] text-center text-white top-[4px]">12</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="h-[26px] relative rounded-[8px] shrink-0 w-[32px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[16.31px] not-italic text-[#90a1b9] text-[12px] text-center top-[4px]">15</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="h-[26px] relative rounded-[8px] shrink-0 w-[32px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[16.27px] not-italic text-[#90a1b9] text-[12px] text-center top-[4px]">31</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] h-[26px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Button14 />
        <Button15 />
        <Button16 />
        <Button17 />
      </div>
    </div>
  );
}

function Container18() {
  return <div className="bg-[#e2e8f0] h-[16px] shrink-0 w-px" data-name="Container" />;
}

function ChevronLeft1() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="ChevronLeft">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 8.16667">
            <path d={svgPaths.p15ba5180} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[22px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <ChevronLeft1 />
      </div>
    </div>
  );
}

function Span19() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[4px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px]">1 / 3</p>
      </div>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="ChevronRight">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 8.16667">
            <path d={svgPaths.p3a6cd80} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[22px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <ChevronRight1 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[22px] relative shrink-0 w-[85.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button18 />
        <Span19 />
        <Button19 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[12px] h-[26px] items-center relative shrink-0 w-[315.766px]" data-name="Container">
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[49px] items-center relative shrink-0">
      <Span18 />
      <Container16 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Span17 />
        <Frame3 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[93px] relative shrink-0 w-[1230px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-[7px] pt-[6px] px-[16px] relative size-full">
        <Frame1 />
        <Frame2 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[94px] items-start left-0 pt-px rounded-bl-[14px] rounded-br-[14px] top-[382.38px] w-[1230px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px]" />
      <Container11 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[476.375px] left-0 top-[75px] w-[1230px]" data-name="Container">
      <Container7 />
      <Container10 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white border border-[#e2e8f0] border-solid overflow-clip relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-full" data-name="Container">
      <Container1 />
      <Container6 />
    </div>
  );
}