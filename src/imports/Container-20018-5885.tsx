function Heading() {
  return (
    <div className="h-[16px] relative shrink-0 w-[56.578px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">DEFINIR PERÍODO DA ANÁLISE</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[159px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function Container5() {
  return <div className="bg-[#314158] rounded-[33554400px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container4() {
  return (
    <div className="bg-white relative rounded-[33554400px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#314158] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] py-[2px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[107px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#314158] text-[13px] top-0 whitespace-nowrap">Dia</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-[107px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#62748e] text-[10px] whitespace-nowrap">Seleção livre de datas</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[107_0_0] h-[34px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex gap-[12px] h-[54px] items-center px-[12px] relative rounded-[10px] shrink-0 w-[159px]" data-name="Label">
      <Container4 />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[107px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#45556c] text-[13px] top-0 whitespace-nowrap">Mês</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-[107px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] min-h-px min-w-px not-italic relative text-[#62748e] text-[10px]">Meses completos</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[107_0_0] h-[34px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[54px] items-center px-[12px] relative rounded-[10px] shrink-0 w-[159px]" data-name="Label">
      <Container7 />
      <Container8 />
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

function Text4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[107px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#45556c] text-[13px] top-0 whitespace-nowrap">Ano</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-[107px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] min-h-px min-w-px not-italic relative text-[#62748e] text-[10px]">Anos completos</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[107_0_0] h-[34px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[12px] h-[54px] items-center px-[12px] relative rounded-[10px] shrink-0 w-[159px]" data-name="Label">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative">
        <Label />
        <Label1 />
        <Label2 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[270px] relative shrink-0 w-[205px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pr-px relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#62748e] text-[11px] whitespace-nowrap">SELECIONAR POR:</p>
        <Frame />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="flex-[1_0_0] h-[24.5px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[56.5px] not-italic text-[#62748e] text-[11px] text-center top-[4px] whitespace-nowrap">Período Fechado</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#314158] h-[24.5px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[108.25px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[54.5px] not-italic text-[11px] text-center text-white top-[4px] whitespace-nowrap">Dias da Semana</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex gap-[4px] h-[32.5px] items-center px-[4px] relative rounded-[10px] shrink-0 w-[233.047px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[32.891px]" data-name="Button">
      <p className="-translate-x-1/2 absolute decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[16.5px] not-italic text-[#62748e] text-[10px] text-center top-0 underline whitespace-nowrap">Limpar</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-[324px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container12 />
        <Button2 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#62748e] text-[11px] whitespace-nowrap">Seleção pontual de dias</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center relative w-full">
        <Frame1 />
        <Paragraph />
      </div>
    </div>
  );
}

function HeaderCellMonday() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[28px]" data-name="Header Cell - Monday">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[14.16px] not-italic text-[#90a1b9] text-[9px] text-center top-0 whitespace-nowrap">Seg</p>
      </div>
    </div>
  );
}

function HeaderCellTuesday() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[28px]" data-name="Header Cell - Tuesday">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[14.02px] not-italic text-[#90a1b9] text-[9px] text-center top-0 whitespace-nowrap">Ter</p>
      </div>
    </div>
  );
}

function HeaderCellWednesday() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[28px]" data-name="Header Cell - Wednesday">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[14.27px] not-italic text-[#90a1b9] text-[9px] text-center top-0 whitespace-nowrap">Qua</p>
      </div>
    </div>
  );
}

function HeaderCellThursday() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[28px]" data-name="Header Cell - Thursday">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[14.19px] not-italic text-[#90a1b9] text-[9px] text-center top-0 whitespace-nowrap">Qui</p>
      </div>
    </div>
  );
}

function HeaderCellFriday() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[28px]" data-name="Header Cell - Friday">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[14.03px] not-italic text-[#90a1b9] text-[9px] text-center top-0 whitespace-nowrap">Sex</p>
      </div>
    </div>
  );
}

function HeaderCellSaturday() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[28px]" data-name="Header Cell - Saturday">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[14.25px] not-italic text-[#90a1b9] text-[9px] text-center top-0 whitespace-nowrap">Sáb</p>
      </div>
    </div>
  );
}

function HeaderCellSunday() {
  return (
    <div className="flex-[1_0_0] h-[13.5px] min-h-px min-w-px relative" data-name="Header Cell - Sunday">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-[14.03px] not-italic text-[#90a1b9] text-[9px] text-center top-0 whitespace-nowrap">Dom</p>
      </div>
    </div>
  );
}

function HeadRow() {
  return (
    <div className="absolute content-stretch flex h-[13.5px] items-start left-0 top-0 w-[196px]" data-name="HeadRow">
      <HeaderCellMonday />
      <HeaderCellTuesday />
      <HeaderCellWednesday />
      <HeaderCellThursday />
      <HeaderCellFriday />
      <HeaderCellSaturday />
      <HeaderCellSunday />
    </div>
  );
}

function Head() {
  return (
    <div className="absolute h-[13.5px] left-0 top-0 w-[196px]" data-name="Head">
      <HeadRow />
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[28px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.13px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">30</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[28px] top-0" data-name="Container">
      <Button3 />
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[28px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.86px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">31</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[28px] size-[28px] top-0" data-name="Container">
      <Button4 />
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[28px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[13.75px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">1</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[56px] size-[28px] top-0" data-name="Container">
      <Button5 />
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[28px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.14px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">2</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[84px] size-[28px] top-0" data-name="Container">
      <Button6 />
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[28px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[13.59px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">3</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[112px] size-[28px] top-0" data-name="Container">
      <Button7 />
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[28px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.44px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">4</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[140px] size-[28px] top-0" data-name="Container">
      <Button8 />
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[28px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.23px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">5</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[168px] size-[28px] top-0" data-name="Container">
      <Button9 />
    </div>
  );
}

function Row() {
  return (
    <div className="absolute h-[28px] left-0 top-[2px] w-[196px]" data-name="Row">
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#314158] h-[28px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.08px] not-italic text-[11px] text-center text-white top-[5.75px] whitespace-nowrap">6</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#e2e8f0] content-stretch flex flex-col items-start left-0 rounded-[8px] size-[28px] top-0" data-name="Container">
      <Button10 />
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[28px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[14.33px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">7</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[28px] size-[28px] top-0" data-name="Container">
      <Button11 />
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.09px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">8</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[56px] size-[28px] top-0" data-name="Container">
      <Button12 />
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.08px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">9</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[84px] size-[28px] top-0" data-name="Container">
      <Button13 />
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.28px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">10</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[112px] size-[28px] top-0" data-name="Container">
      <Button14 />
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.02px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">11</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[140px] size-[28px] top-0" data-name="Container">
      <Button15 />
    </div>
  );
}

function Button16() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.41px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">12</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[168px] size-[28px] top-0" data-name="Container">
      <Button16 />
    </div>
  );
}

function Row1() {
  return (
    <div className="absolute h-[28px] left-0 top-[32px] w-[196px]" data-name="Row">
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Button17() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.86px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">13</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[28px] top-0" data-name="Container">
      <Button17 />
    </div>
  );
}

function Button18() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.7px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">14</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[28px] size-[28px] top-0" data-name="Container">
      <Button18 />
    </div>
  );
}

function Button19() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[13.5px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">15</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[56px] size-[28px] top-0" data-name="Container">
      <Button19 />
    </div>
  );
}

function Button20() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.34px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">16</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[84px] size-[28px] top-0" data-name="Container">
      <Button20 />
    </div>
  );
}

function Button21() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[13.64px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">17</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[112px] size-[28px] top-0" data-name="Container">
      <Button21 />
    </div>
  );
}

function Button22() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.36px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">18</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[140px] size-[28px] top-0" data-name="Container">
      <Button22 />
    </div>
  );
}

function Button23() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.34px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">19</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[168px] size-[28px] top-0" data-name="Container">
      <Button23 />
    </div>
  );
}

function Row2() {
  return (
    <div className="absolute h-[28px] left-0 top-[62px] w-[196px]" data-name="Row">
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Button24() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.17px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">20</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[28px] top-0" data-name="Container">
      <Button24 />
    </div>
  );
}

function Button25() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.41px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">21</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[28px] size-[28px] top-0" data-name="Container">
      <Button25 />
    </div>
  );
}

function Button26() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.28px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">22</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[56px] size-[28px] top-0" data-name="Container">
      <Button26 />
    </div>
  );
}

function Button27() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.23px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">23</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[84px] size-[28px] top-0" data-name="Container">
      <Button27 />
    </div>
  );
}

function Button28() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.17px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">24</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[112px] size-[28px] top-0" data-name="Container">
      <Button28 />
    </div>
  );
}

function Button29() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.38px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">25</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[140px] size-[28px] top-0" data-name="Container">
      <Button29 />
    </div>
  );
}

function Button30() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.23px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">26</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[168px] size-[28px] top-0" data-name="Container">
      <Button30 />
    </div>
  );
}

function Row3() {
  return (
    <div className="absolute h-[28px] left-0 top-[92px] w-[196px]" data-name="Row">
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
      <Container42 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Button31() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.03px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">27</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[28px] top-0" data-name="Container">
      <Button31 />
    </div>
  );
}

function Button32() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.23px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">28</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[28px] size-[28px] top-0" data-name="Container">
      <Button32 />
    </div>
  );
}

function Button33() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.23px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">29</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[56px] size-[28px] top-0" data-name="Container">
      <Button33 />
    </div>
  );
}

function Button34() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.13px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">30</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[84px] size-[28px] top-0" data-name="Container">
      <Button34 />
    </div>
  );
}

function Button35() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[13.75px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">1</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[112px] size-[28px] top-0" data-name="Container">
      <Button35 />
    </div>
  );
}

function Button36() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[14.14px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">2</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[140px] size-[28px] top-0" data-name="Container">
      <Button36 />
    </div>
  );
}

function Button37() {
  return (
    <div className="h-[28px] opacity-35 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[13.59px] not-italic text-[#314158] text-[11px] text-center top-[5.75px] whitespace-nowrap">3</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[168px] size-[28px] top-0" data-name="Container">
      <Button37 />
    </div>
  );
}

function Row4() {
  return (
    <div className="absolute h-[28px] left-0 top-[122px] w-[196px]" data-name="Row">
      <Container45 />
      <Container46 />
      <Container47 />
      <Container48 />
      <Container49 />
      <Container50 />
      <Container51 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[150px] left-0 top-[13.5px] w-[196px]" data-name="Table Body">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </div>
  );
}

function Table() {
  return (
    <div className="absolute h-[163.5px] left-0 top-[30.5px] w-[196px]" data-name="Table">
      <Head />
      <TableBody />
    </div>
  );
}

function CaptionLabel() {
  return (
    <div className="absolute h-[16.5px] left-[70.08px] top-[4px] w-[55.844px]" data-name="CaptionLabel">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#314158] text-[11px] top-0 whitespace-nowrap">Abril 2026</p>
    </div>
  );
}

function Navigation() {
  return <div className="absolute left-[125.92px] size-0 top-[12.25px]" data-name="Navigation" />;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 px-[4px] rounded-[8px] size-[24px] top-[0.25px]" data-name="Navigation">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Navigation2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[172px] px-[4px] rounded-[8px] size-[24px] top-[0.25px]" data-name="Navigation">
      <Icon1 />
    </div>
  );
}

function Caption() {
  return (
    <div className="absolute h-[26.5px] left-0 top-0 w-[196px]" data-name="Caption">
      <CaptionLabel />
      <Navigation />
      <Navigation1 />
      <Navigation2 />
    </div>
  );
}

function Month() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196px]" data-name="Month">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Table />
        <Caption />
      </div>
    </div>
  );
}

function Months() {
  return (
    <div className="h-[194px] relative shrink-0 w-[196px]" data-name="Months">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Month />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[210px] relative shrink-0 w-[212px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] pt-[8px] relative size-full">
        <Months />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[76.5px] relative shrink-0 w-[320px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[254px] relative shrink-0 w-[320px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[254px] relative shrink-0 w-[693px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function PopperContent() {
  return (
    <div className="h-[334px] relative shrink-0 w-[453px]" data-name="PopperContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
        <Container11 />
        <Container13 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-[893px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-start relative w-full">
        <Container3 />
        <PopperContent />
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