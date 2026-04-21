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

function Container4() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[107px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#45556c] text-[13px] top-0 whitespace-nowrap">Dias</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-[107px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#62748e] text-[10px] whitespace-nowrap">Intervalo livre</p>
      </div>
    </div>
  );
}

function Container5() {
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
    <div className="h-[54px] relative rounded-[10px] shrink-0 w-[159px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
        <Container4 />
        <Container5 />
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

function Text2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[107px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#314158] text-[13px] top-0 whitespace-nowrap">Mês</p>
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
    <div className="bg-[#f1f5f9] h-[54px] relative rounded-[10px] shrink-0 w-[159px]" data-name="Label">
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
    <div className="h-[54px] relative rounded-[10px] shrink-0 w-[159px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[270px] relative shrink-0 w-[200px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pr-px relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#62748e] text-[11px] whitespace-nowrap">SELECIONAR POR:</p>
        <Label />
        <Label1 />
        <Label2 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#314158] content-stretch flex items-center justify-center px-[15px] py-[4px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Selecionar mês</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[15px] relative shrink-0 w-[32.891px]" data-name="Button">
      <p className="-translate-x-1/2 absolute decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[16.5px] not-italic text-[#62748e] text-[10px] text-center top-0 underline whitespace-nowrap">Limpar</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-full">
        <Frame />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[97px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap">Mês / ano</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[32px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container13 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[97px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap">Mês / ano</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[32px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container14 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[97px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap">Mês / ano</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[32px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container15 />
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[97px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap">Mês / ano</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[32px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container16 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[97px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap">Mês / ano</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[32px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container17 />
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[97px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap">Mês / ano</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[32px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container18 />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[97px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap">Mês / ano</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[32px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container19 />
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[712px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pt-[8px] relative size-full">
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function PopperContent() {
  return (
    <div className="h-[334px] relative shrink-0 w-[247px]" data-name="PopperContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip relative rounded-[inherit] size-full">
        <Container11 />
        <Container12 />
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