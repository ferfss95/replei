import svgPaths from "./svg-gpk2ysuyq8";

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[209px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#45556c] text-[18px] top-0 tracking-[0.4496px]">Gráfico comparativo</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center relative size-full">
        <Text />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#90a1b9] text-[10px] tracking-[0.1172px]">Visualização de uma métrica por vez</p>
      </div>
    </div>
  );
}

function Text1() {
  return <div className="absolute bg-[#314158] left-[11px] rounded-[33554400px] size-[8px] top-[9.25px]" data-name="Text" />;
}

function Button() {
  return (
    <div className="bg-[rgba(49,65,88,0)] h-[26.5px] relative rounded-[8px] shrink-0 w-[104.797px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#314158] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Text1 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[59px] not-italic text-[#314158] text-[11px] text-center top-[5px] tracking-[0.0645px]">Venda (ROB)</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex h-[26.5px] items-center px-[11px] py-[5px] relative rounded-[8px] shrink-0 w-[97.719px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#45556c] text-[11px] text-center tracking-[0.0645px]">Margem Bruta</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container3 />
        <Frame1 />
      </div>
    </div>
  );
}

function Container4() {
  return <div className="shrink-0 size-0" data-name="Container" />;
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <Container2 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center pb-[6px] pt-[12px] relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[17.875px] relative shrink-0 w-[29.719px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[17.875px] left-0 not-italic text-[#45556c] text-[11px] top-0 tracking-[0.0645px] uppercase">LOJA</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Text2 />
    </div>
  );
}

function Text3() {
  return <div className="bg-[#94a3b8] rounded-[6px] shrink-0 size-[12px]" data-name="Text" />;
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#45556c] text-[11px] top-0 tracking-[0.0645px]">Fev/26</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16.5px] items-center relative shrink-0 w-[53.234px]" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return <div className="bg-[#6366f1] rounded-[6px] shrink-0 size-[12px]" data-name="Text" />;
}

function Text6() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#45556c] text-[11px] top-0 tracking-[0.0645px]">Jan/26</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16.5px] items-center relative shrink-0 w-[53.797px]" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[2px] relative shrink-0 w-[24px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#f59e0b] border-solid border-t-2 inset-0 pointer-events-none" />
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#45556c] text-[11px] top-0 tracking-[0.0645px]">Variação %</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16.5px] items-center relative shrink-0 w-[88.563px]" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-1/4 left-[5.84%] right-[9.18%] top-[1.67%]" data-name="Group">
      <div className="absolute inset-[-0.23%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1018 221">
          <g id="Group">
            <path d="M0 220.5H1018" id="Vector" stroke="var(--stroke-0, #F1F5F9)" strokeDasharray="3 3" />
            <path d="M0 165.5H1018" id="Vector_2" stroke="var(--stroke-0, #F1F5F9)" strokeDasharray="3 3" />
            <path d="M0 110.5H1018" id="Vector_3" stroke="var(--stroke-0, #F1F5F9)" strokeDasharray="3 3" />
            <path d="M0 55.5H1018" id="Vector_4" stroke="var(--stroke-0, #F1F5F9)" strokeDasharray="3 3" />
            <path d="M0 0.5H1018" id="Vector_5" stroke="var(--stroke-0, #F1F5F9)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-1/4 contents left-[5.84%] right-[9.18%] top-[1.67%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[77.2%_91.87%_1.83%_2.88%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_91.87%_1.83%_2.88%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[77px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE108 - GUAR…</p>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[77.2%_91.87%_1.83%_2.88%]" data-name="Group">
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[77.2%_88.47%_3.71%_6.75%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_88.47%_3.71%_6.75%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[69px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE312 - RIO …</p>
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[77.2%_88.47%_3.71%_6.75%]" data-name="Group">
      <Group7 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[77.2%_85.07%_2.53%_9.85%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_85.07%_2.53%_9.85%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[74px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE178 - PETR…</p>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[77.2%_85.07%_2.53%_9.85%]" data-name="Group">
      <Group9 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[77.2%_81.67%_2.77%_13.31%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_81.67%_2.77%_13.31%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[73px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE299 - ITAQ…</p>
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[77.2%_81.67%_2.77%_13.31%]" data-name="Group">
      <Group11 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[77.2%_78.27%_3.48%_16.89%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_78.27%_3.48%_16.89%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[70px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE217 - BETI…</p>
        </div>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[77.2%_78.27%_3.48%_16.89%]" data-name="Group">
      <Group13 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[77.2%_74.87%_2.53%_20.05%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_74.87%_2.53%_20.05%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[74px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE246 - CARI…</p>
        </div>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[77.2%_74.87%_2.53%_20.05%]" data-name="Group">
      <Group15 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[77.2%_71.47%_1.83%_23.27%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_71.47%_1.83%_23.27%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[77px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE294 - PORT…</p>
        </div>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[77.2%_71.47%_1.83%_23.27%]" data-name="Group">
      <Group17 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[77.2%_68.07%_2.06%_26.73%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_68.07%_2.06%_26.73%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[76px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE223 - ARAP…</p>
        </div>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[77.2%_68.07%_2.06%_26.73%]" data-name="Group">
      <Group19 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[77.2%_64.68%_2.3%_30.19%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_64.68%_2.3%_30.19%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[75px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE269 - IGUA…</p>
        </div>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[77.2%_64.68%_2.3%_30.19%]" data-name="Group">
      <Group21 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[77.2%_61.28%_2.3%_33.59%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_61.28%_2.3%_33.59%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[75px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE131 - BOUL…</p>
        </div>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[77.2%_61.28%_2.3%_33.59%]" data-name="Group">
      <Group23 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[77.2%_57.88%_2.3%_36.99%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_57.88%_2.3%_36.99%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[75px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE260 - PART…</p>
        </div>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[77.2%_57.88%_2.3%_36.99%]" data-name="Group">
      <Group25 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[77.2%_54.48%_3.71%_40.74%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_54.48%_3.71%_40.74%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[69px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE116 - BEIR…</p>
        </div>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[77.2%_54.48%_3.71%_40.74%]" data-name="Group">
      <Group27 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[77.2%_51.08%_2.77%_43.9%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_51.08%_2.77%_43.9%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[73px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE23 - BRASI…</p>
        </div>
      </div>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[77.2%_51.08%_2.77%_43.9%]" data-name="Group">
      <Group29 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[77.2%_47.68%_2.53%_47.24%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_47.68%_2.53%_47.24%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[74px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE115 - PRUD…</p>
        </div>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[77.2%_47.68%_2.53%_47.24%]" data-name="Group">
      <Group31 />
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[77.2%_44.28%_3.01%_50.76%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_44.28%_3.01%_50.76%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[72px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE25 - PARK …</p>
        </div>
      </div>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[77.2%_44.28%_3.01%_50.76%]" data-name="Group">
      <Group33 />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[77.2%_40.88%_1.83%_53.86%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_40.88%_1.83%_53.86%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[77px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE99 - GOIÂN…</p>
        </div>
      </div>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[77.2%_40.88%_1.83%_53.86%]" data-name="Group">
      <Group35 />
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[77.2%_37.48%_2.06%_57.32%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_37.48%_2.06%_57.32%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[76px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE142 - FRAN…</p>
        </div>
      </div>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[77.2%_37.48%_2.06%_57.32%]" data-name="Group">
      <Group37 />
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents inset-[77.2%_34.08%_2.53%_60.84%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_34.08%_2.53%_60.84%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[74px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE122 - MARÍ…</p>
        </div>
      </div>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[77.2%_34.08%_2.53%_60.84%]" data-name="Group">
      <Group39 />
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents inset-[77.2%_30.69%_2.53%_64.24%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_30.69%_2.53%_64.24%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[74px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE50 - BARIG…</p>
        </div>
      </div>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[77.2%_30.69%_2.53%_64.24%]" data-name="Group">
      <Group41 />
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents inset-[77.2%_27.29%_1.59%_67.4%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_27.29%_1.59%_67.4%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[78px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE245 - JÓQU…</p>
        </div>
      </div>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents inset-[77.2%_27.29%_1.59%_67.4%]" data-name="Group">
      <Group43 />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents inset-[77.2%_23.89%_2.3%_70.98%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_23.89%_2.3%_70.98%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[75px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE198 - RIOM…</p>
        </div>
      </div>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents inset-[77.2%_23.89%_2.3%_70.98%]" data-name="Group">
      <Group45 />
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents inset-[77.2%_20.49%_3.71%_74.73%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_20.49%_3.71%_74.73%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[69px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE82 - JUIZ …</p>
        </div>
      </div>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents inset-[77.2%_20.49%_3.71%_74.73%]" data-name="Group">
      <Group47 />
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents inset-[77.2%_17.09%_3.01%_77.95%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_17.09%_3.01%_77.95%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[72px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE55 - PÁTIO…</p>
        </div>
      </div>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents inset-[77.2%_17.09%_3.01%_77.95%]" data-name="Group">
      <Group49 />
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents inset-[77.2%_13.69%_3.48%_81.47%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_13.69%_3.48%_81.47%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[70px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE173 - ITAB…</p>
        </div>
      </div>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents inset-[77.2%_13.69%_3.48%_81.47%]" data-name="Group">
      <Group51 />
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute contents inset-[77.2%_10.29%_2.77%_84.69%]" data-name="Group">
      <div className="absolute flex inset-[77.2%_10.29%_2.77%_84.69%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[12px] w-[73px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#64748b] text-[10px] text-right">CE256 - VITÓ…</p>
        </div>
      </div>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute contents inset-[77.2%_10.29%_2.77%_84.69%]" data-name="Group">
      <Group53 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[77.2%_10.29%_1.59%_2.88%]" data-name="Group">
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
      <Group28 />
      <Group30 />
      <Group32 />
      <Group34 />
      <Group36 />
      <Group38 />
      <Group40 />
      <Group42 />
      <Group44 />
      <Group46 />
      <Group48 />
      <Group50 />
      <Group52 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[77.2%_10.29%_1.59%_2.88%]" data-name="Group">
      <Group3 />
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute contents inset-[72.85%_94.82%_23.15%_4.59%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[72.85%_94.82%_23.15%_4.59%] leading-[normal] not-italic text-[#64748b] text-[10px] text-right">0</p>
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute contents inset-[54.52%_94.82%_41.48%_3.17%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[54.52%_94.82%_41.48%_3.17%] leading-[normal] not-italic text-[#64748b] text-[10px] text-right">9.5M</p>
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute contents inset-[36.18%_94.82%_59.82%_2.75%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[36.18%_94.82%_59.82%_2.75%] leading-[normal] not-italic text-[#64748b] text-[10px] text-right">19.0M</p>
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute contents inset-[17.85%_94.82%_78.15%_2.67%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[17.85%_94.82%_78.15%_2.67%] leading-[normal] not-italic text-[#64748b] text-[10px] text-right">28.5M</p>
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute contents inset-[0.35%_94.82%_95.65%_2.67%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.35%_94.82%_95.65%_2.67%] leading-[normal] not-italic text-[#64748b] text-[10px] text-right">38.0M</p>
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute contents inset-[0.35%_94.82%_23.15%_2.67%]" data-name="Group">
      <Group56 />
      <Group57 />
      <Group58 />
      <Group59 />
      <Group60 />
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute contents inset-[0.35%_94.82%_23.15%_2.67%]" data-name="Group">
      <Group55 />
    </div>
  );
}

function Group63() {
  return (
    <div className="absolute contents inset-[72.85%_6.34%_23.15%_91.49%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[72.85%_6.34%_23.15%_91.49%] leading-[normal] not-italic text-[#94a3b8] text-[10px]">-45%</p>
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute contents inset-[54.52%_7.26%_41.48%_91.49%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[54.52%_7.26%_41.48%_91.49%] leading-[normal] not-italic text-[#94a3b8] text-[10px]">0%</p>
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute contents inset-[36.18%_6.18%_59.82%_91.49%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[36.18%_6.18%_59.82%_91.49%] leading-[normal] not-italic text-[#94a3b8] text-[10px]">+45%</p>
    </div>
  );
}

function Group66() {
  return (
    <div className="absolute contents inset-[17.85%_6.18%_78.15%_91.49%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[17.85%_6.18%_78.15%_91.49%] leading-[normal] not-italic text-[#94a3b8] text-[10px]">+90%</p>
    </div>
  );
}

function Group67() {
  return (
    <div className="absolute contents inset-[0.35%_5.84%_95.65%_91.49%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.35%_5.84%_95.65%_91.49%] leading-[normal] not-italic text-[#94a3b8] text-[10px]">+135%</p>
    </div>
  );
}

function Group62() {
  return (
    <div className="absolute contents inset-[0.35%_5.84%_23.15%_91.49%]" data-name="Group">
      <Group63 />
      <Group64 />
      <Group65 />
      <Group66 />
      <Group67 />
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute contents inset-[0.35%_5.84%_23.15%_91.49%]" data-name="Group">
      <Group62 />
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute inset-[56.67%_9.18%_43.33%_5.84%]" data-name="Group">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1018 1">
          <g id="Group">
            <path d="M1018 0.5H0" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group72() {
  return (
    <div className="absolute bottom-1/4 left-[5.84%] right-[92.65%] top-[24.01%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 152.97">
        <g id="Group">
          <path d={svgPaths.p973a200} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group73() {
  return (
    <div className="absolute bottom-1/4 left-[9.24%] right-[89.26%] top-[42.8%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 96.5905">
        <g id="Group">
          <path d={svgPaths.p32499f00} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group74() {
  return (
    <div className="absolute bottom-1/4 left-[12.64%] right-[85.86%] top-[20.46%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 163.613">
        <g id="Group">
          <path d={svgPaths.p10b53a72} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group75() {
  return (
    <div className="absolute bottom-1/4 left-[16.04%] right-[82.46%] top-[31.29%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 131.123">
        <g id="Group">
          <path d={svgPaths.p3dfb9a00} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group76() {
  return (
    <div className="absolute bottom-1/4 left-[19.44%] right-[79.06%] top-[15.62%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 178.137">
        <g id="Group">
          <path d={svgPaths.p20d1a880} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group77() {
  return (
    <div className="absolute bottom-1/4 left-[22.84%] right-[75.66%] top-[33.32%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 125.051">
        <g id="Group">
          <path d={svgPaths.p2ce7ae00} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group78() {
  return (
    <div className="absolute bottom-1/4 left-[26.24%] right-[72.26%] top-[29.47%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 136.595">
        <g id="Group">
          <path d={svgPaths.p18b0ec0} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group79() {
  return (
    <div className="absolute bottom-1/4 left-[29.64%] right-[68.86%] top-[15.28%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 179.175">
        <g id="Group">
          <path d={svgPaths.p36f701f0} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group80() {
  return (
    <div className="absolute bottom-1/4 left-[33.04%] right-[65.46%] top-[38.34%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 109.983">
        <g id="Group">
          <path d={svgPaths.p19b47900} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group81() {
  return (
    <div className="absolute bottom-1/4 left-[36.43%] right-[62.06%] top-[24.59%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 151.218">
        <g id="Group">
          <path d={svgPaths.p2edd25f0} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group82() {
  return (
    <div className="absolute bottom-1/4 left-[39.83%] right-[58.66%] top-[33.62%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 124.154">
        <g id="Group">
          <path d={svgPaths.p39048300} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group83() {
  return (
    <div className="absolute bottom-1/4 left-[43.23%] right-[55.27%] top-[39.92%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 105.237">
        <g id="Group">
          <path d={svgPaths.p372b7980} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group84() {
  return (
    <div className="absolute bottom-1/4 left-[46.63%] right-[51.87%] top-[42.27%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 98.1751">
        <g id="Group">
          <path d={svgPaths.p7b75300} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group85() {
  return (
    <div className="absolute bottom-1/4 left-[50.03%] right-[48.47%] top-[47.13%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 83.5974">
        <g id="Group">
          <path d={svgPaths.p36332e00} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group86() {
  return (
    <div className="absolute bottom-1/4 left-[53.43%] right-[45.07%] top-[38.86%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 108.431">
        <g id="Group">
          <path d={svgPaths.p29cf1b00} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group87() {
  return (
    <div className="absolute bottom-1/4 left-[56.83%] right-[41.67%] top-[17.66%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 172.029">
        <g id="Group">
          <path d={svgPaths.p81f5380} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group88() {
  return (
    <div className="absolute bottom-1/4 left-[60.23%] right-[38.27%] top-[23.12%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 155.649">
        <g id="Group">
          <path d={svgPaths.p273f0a00} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group89() {
  return (
    <div className="absolute bottom-1/4 left-[63.63%] right-[34.87%] top-[35.92%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 117.23">
        <g id="Group">
          <path d={svgPaths.ped2d980} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group90() {
  return (
    <div className="absolute bottom-1/4 left-[67.03%] right-[31.47%] top-[10.72%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 192.841">
        <g id="Group">
          <path d={svgPaths.p2256e8f0} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group91() {
  return (
    <div className="absolute bottom-1/4 left-[70.42%] right-[28.07%] top-[44.66%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 91.0266">
        <g id="Group">
          <path d={svgPaths.p5be380} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group92() {
  return (
    <div className="absolute bottom-1/4 left-[73.82%] right-[24.67%] top-[26.54%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 145.375">
        <g id="Group">
          <path d={svgPaths.p24736000} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group93() {
  return (
    <div className="absolute bottom-1/4 left-[77.22%] right-[21.28%] top-[29.63%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 136.122">
        <g id="Group">
          <path d={svgPaths.p6cbf00} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group94() {
  return (
    <div className="absolute bottom-1/4 left-[80.62%] right-[17.88%] top-[36.12%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 116.646">
        <g id="Group">
          <path d={svgPaths.pac41700} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group95() {
  return (
    <div className="absolute bottom-1/4 left-[84.02%] right-[14.48%] top-[16.51%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0001 175.461">
        <g id="Group">
          <path d={svgPaths.p300dbb80} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group96() {
  return (
    <div className="absolute bottom-1/4 left-[87.42%] right-[11.08%] top-[34.44%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 121.67">
        <g id="Group">
          <path d={svgPaths.p34c19200} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute bottom-1/4 contents left-[5.84%] right-[11.08%] top-[10.72%]" data-name="Group">
      <Group72 />
      <Group73 />
      <Group74 />
      <Group75 />
      <Group76 />
      <Group77 />
      <Group78 />
      <Group79 />
      <Group80 />
      <Group81 />
      <Group82 />
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
      <Group95 />
      <Group96 />
    </div>
  );
}

function Group70() {
  return (
    <div className="absolute bottom-1/4 contents left-[5.84%] right-[11.08%] top-[10.72%]" data-name="Group">
      <Group71 />
    </div>
  );
}

function Group69() {
  return (
    <div className="absolute bottom-1/4 contents left-[5.84%] right-[11.08%] top-[10.72%]" data-name="Group">
      <Group70 />
    </div>
  );
}

function Group100() {
  return (
    <div className="absolute bottom-1/4 left-[7.68%] right-[90.82%] top-[3.3%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 215.092">
        <g id="Group">
          <path d={svgPaths.p3c195af0} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group101() {
  return (
    <div className="absolute bottom-1/4 left-[11.08%] right-[87.42%] top-[6.86%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 204.423">
        <g id="Group">
          <path d={svgPaths.p2fe74800} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group102() {
  return (
    <div className="absolute bottom-1/4 left-[14.48%] right-[84.02%] top-[8.36%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 199.933">
        <g id="Group">
          <path d={svgPaths.p6052380} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group103() {
  return (
    <div className="absolute bottom-1/4 left-[17.88%] right-[80.62%] top-[8.51%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 199.484">
        <g id="Group">
          <path d={svgPaths.p270200} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group104() {
  return (
    <div className="absolute bottom-1/4 left-[21.28%] right-[77.22%] top-[8.85%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 198.448">
        <g id="Group">
          <path d={svgPaths.p283bc680} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group105() {
  return (
    <div className="absolute bottom-1/4 left-[24.67%] right-[73.82%] top-[9.45%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 196.653">
        <g id="Group">
          <path d={svgPaths.p1abb6b80} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group106() {
  return (
    <div className="absolute bottom-1/4 left-[28.07%] right-[70.42%] top-[10.01%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 194.972">
        <g id="Group">
          <path d={svgPaths.p3b822980} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group107() {
  return (
    <div className="absolute bottom-1/4 left-[31.47%] right-[67.03%] top-[10.09%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 194.729">
        <g id="Group">
          <path d={svgPaths.p2b622f00} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group108() {
  return (
    <div className="absolute bottom-1/4 left-[34.87%] right-[63.63%] top-[10.17%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 194.48">
        <g id="Group">
          <path d={svgPaths.p11db5af0} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group109() {
  return (
    <div className="absolute bottom-1/4 left-[38.27%] right-[60.23%] top-[10.71%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 192.875">
        <g id="Group">
          <path d={svgPaths.pbfa5000} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group110() {
  return (
    <div className="absolute bottom-1/4 left-[41.67%] right-[56.83%] top-[11.09%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 191.723">
        <g id="Group">
          <path d={svgPaths.p3fe3c00} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group111() {
  return (
    <div className="absolute bottom-1/4 left-[45.07%] right-[53.43%] top-[11.94%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 189.181">
        <g id="Group">
          <path d={svgPaths.pc206500} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group112() {
  return (
    <div className="absolute bottom-1/4 left-[48.47%] right-[50.03%] top-[12.01%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 188.983">
        <g id="Group">
          <path d={svgPaths.p4796700} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group113() {
  return (
    <div className="absolute bottom-1/4 left-[51.87%] right-[46.63%] top-[12.46%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 187.63">
        <g id="Group">
          <path d={svgPaths.p5c7a400} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group114() {
  return (
    <div className="absolute bottom-1/4 left-[55.27%] right-[43.23%] top-[12.63%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 187.121">
        <g id="Group">
          <path d={svgPaths.p6259000} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group115() {
  return (
    <div className="absolute bottom-1/4 left-[58.66%] right-[39.83%] top-[13.23%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 185.302">
        <g id="Group">
          <path d={svgPaths.p478eab0} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group116() {
  return (
    <div className="absolute bottom-1/4 left-[62.06%] right-[36.43%] top-[14.09%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 182.734">
        <g id="Group">
          <path d={svgPaths.paf50100} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group117() {
  return (
    <div className="absolute bottom-1/4 left-[65.46%] right-[33.04%] top-[14.43%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 181.719">
        <g id="Group">
          <path d={svgPaths.p3b8e2330} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group118() {
  return (
    <div className="absolute bottom-1/4 left-[68.86%] right-[29.64%] top-[14.52%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 181.435">
        <g id="Group">
          <path d={svgPaths.p2cdeaa00} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group119() {
  return (
    <div className="absolute bottom-1/4 left-[72.26%] right-[26.24%] top-[14.64%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 181.086">
        <g id="Group">
          <path d={svgPaths.p3c4b4100} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group120() {
  return (
    <div className="absolute bottom-1/4 left-[75.66%] right-[22.84%] top-[14.64%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 181.085">
        <g id="Group">
          <path d={svgPaths.p22e34d80} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group121() {
  return (
    <div className="absolute bottom-1/4 left-[79.06%] right-[19.44%] top-[14.64%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 181.067">
        <g id="Group">
          <path d={svgPaths.p29d6eeb0} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group122() {
  return (
    <div className="absolute bottom-1/4 left-[82.46%] right-[16.04%] top-[15.48%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 178.558">
        <g id="Group">
          <path d={svgPaths.p10a6f600} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group123() {
  return (
    <div className="absolute bottom-1/4 left-[85.86%] right-[12.64%] top-[15.98%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 177.071">
        <g id="Group">
          <path d={svgPaths.p3d7ff600} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group124() {
  return (
    <div className="absolute bottom-1/4 left-[89.26%] right-[9.24%] top-[16.02%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 176.935">
        <g id="Group">
          <path d={svgPaths.p32b63a00} fill="var(--fill-0, #6366F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group99() {
  return (
    <div className="absolute bottom-1/4 contents left-[7.68%] right-[9.24%] top-[3.3%]" data-name="Group">
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
      <Group110 />
      <Group111 />
      <Group112 />
      <Group113 />
      <Group114 />
      <Group115 />
      <Group116 />
      <Group117 />
      <Group118 />
      <Group119 />
      <Group120 />
      <Group121 />
      <Group122 />
      <Group123 />
      <Group124 />
    </div>
  );
}

function Group98() {
  return (
    <div className="absolute bottom-1/4 contents left-[7.68%] right-[9.24%] top-[3.3%]" data-name="Group">
      <Group99 />
    </div>
  );
}

function Group97() {
  return (
    <div className="absolute bottom-1/4 contents left-[7.68%] right-[9.24%] top-[3.3%]" data-name="Group">
      <Group98 />
    </div>
  );
}

function Group125() {
  return (
    <div className="absolute inset-[4.97%_10.63%_39.92%_7.29%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 983.28 165.328">
        <g id="Group">
          <path d={svgPaths.p16192b40} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeDasharray="6 3 6 3 6 3 6 3" strokeWidth="2" />
          <g id="Group_2">
            <path d={svgPaths.pb0d9100} fill="var(--fill-0, #F59E0B)" id="Vector_2" />
            <path d={svgPaths.p2db36f00} fill="var(--fill-0, #F59E0B)" id="Vector_3" />
            <path d={svgPaths.p3b32e700} fill="var(--fill-0, #F59E0B)" id="Vector_4" />
            <path d={svgPaths.p89f9e80} fill="var(--fill-0, #F59E0B)" id="Vector_5" />
            <path d={svgPaths.p35edf880} fill="var(--fill-0, #F59E0B)" id="Vector_6" />
            <path d={svgPaths.p14e92e00} fill="var(--fill-0, #F59E0B)" id="Vector_7" />
            <path d={svgPaths.p1ebf1b00} fill="var(--fill-0, #F59E0B)" id="Vector_8" />
            <path d={svgPaths.p1f443380} fill="var(--fill-0, #F59E0B)" id="Vector_9" />
            <path d={svgPaths.p27e8d070} fill="var(--fill-0, #F59E0B)" id="Vector_10" />
            <path d={svgPaths.pb2bd00} fill="var(--fill-0, #F59E0B)" id="Vector_11" />
            <path d={svgPaths.p1f9c0c00} fill="var(--fill-0, #F59E0B)" id="Vector_12" />
            <path d={svgPaths.p3abfb300} fill="var(--fill-0, #F59E0B)" id="Vector_13" />
            <path d={svgPaths.p19eab700} fill="var(--fill-0, #F59E0B)" id="Vector_14" />
            <path d={svgPaths.p8a63b00} fill="var(--fill-0, #F59E0B)" id="Vector_15" />
            <path d={svgPaths.pb505880} fill="var(--fill-0, #F59E0B)" id="Vector_16" />
            <path d={svgPaths.p23d1e300} fill="var(--fill-0, #F59E0B)" id="Vector_17" />
            <path d={svgPaths.p89d3700} fill="var(--fill-0, #F59E0B)" id="Vector_18" />
            <path d={svgPaths.p22e62500} fill="var(--fill-0, #F59E0B)" id="Vector_19" />
            <path d={svgPaths.p15635ac0} fill="var(--fill-0, #F59E0B)" id="Vector_20" />
            <path d={svgPaths.p37746480} fill="var(--fill-0, #F59E0B)" id="Vector_21" />
            <path d={svgPaths.p12b1b400} fill="var(--fill-0, #F59E0B)" id="Vector_22" />
            <path d={svgPaths.pe68bf00} fill="var(--fill-0, #F59E0B)" id="Vector_23" />
            <path d={svgPaths.p14caeb00} fill="var(--fill-0, #F59E0B)" id="Vector_24" />
            <path d={svgPaths.p26a33f00} fill="var(--fill-0, #F59E0B)" id="Vector_25" />
            <path d={svgPaths.peebc380} fill="var(--fill-0, #F59E0B)" id="Vector_26" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Surface() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[1198px]" data-name="Surface">
      <Group />
      <Group2 />
      <Group54 />
      <Group61 />
      <Group68 />
      <Group69 />
      <Group97 />
      <Group125 />
    </div>
  );
}

function ComposedChart() {
  return (
    <div className="h-[300px] relative shrink-0 w-full" data-name="ComposedChart">
      <Surface />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[358.375px] items-start left-[16px] top-0 w-[1198px]" data-name="Container">
      <Container7 />
      <Container8 />
      <ComposedChart />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[16px] top-[12px] w-[109.719px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px]">1–25 de 230 linhas</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Icon">
          <path d={svgPaths.p31491680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M6.5 10.2917V2.70833" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#314158] relative rounded-[4px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Icon">
          <path d="M6.5 2.70833V10.2917" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p31d31b20} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container15() {
  return <div className="bg-[#e2e8f0] h-[16px] shrink-0 w-px" data-name="Container" />;
}

function Text10() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px]">Linhas:</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[14.22px] not-italic text-[#62748e] text-[12px] text-center top-[4px]">10</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#314158] h-[24px] relative rounded-[4px] shrink-0 w-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[14.16px] not-italic text-[12px] text-center text-white top-[4px]">25</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[14.31px] not-italic text-[#62748e] text-[12px] text-center top-[4px]">50</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Text10 />
        <Button4 />
        <Button5 />
        <Button6 />
      </div>
    </div>
  );
}

function Container17() {
  return <div className="bg-[#e2e8f0] h-[16px] shrink-0 w-px" data-name="Container" />;
}

function Icon2() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
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

function Button7() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[22px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[4px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#62748e] text-[12px] whitespace-pre-wrap">1 / 10</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 8.16667">
            <path d={svgPaths.p3a6cd80} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[22px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[22px] relative shrink-0 w-[93.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button7 />
        <Text11 />
        <Button8 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[876.59px] top-[8px] w-[337.406px]" data-name="Container">
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-solid border-t h-[41px] left-0 rounded-bl-[14px] rounded-br-[14px] top-[370.38px] w-[1230px]" data-name="Container">
      <Text9 />
      <Container13 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[411.375px] relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container12 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white relative rounded-[14px] size-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Frame />
        <Container5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}