import svgPaths from "./svg-9amtcodwai";

function Text() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[#314158] text-[12px] top-0 tracking-[0.7px] whitespace-nowrap">Período 1</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[19px] relative shrink-0 w-[118.344px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between pr-[132.047px] relative shrink-0 w-[250.391px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container6() {
  return <div className="bg-[#314158] h-[2px] rounded-[4px] shrink-0 w-[8px]" data-name="Container" />;
}

function Container5() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] py-px relative size-full">
        <Container6 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[167px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Todos de 2026</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[167px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-0 not-italic text-[#90a1b9] text-[9px] top-0 whitespace-nowrap">1 de 4 selecionados</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="flex-[167_0_0] h-[33.5px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Text1 />
        <Text2 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[49.5px] items-center left-0 px-[12px] rounded-[10px] top-0 w-[237px]" data-name="Container">
      <Container5 />
      <Button />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[67.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Abril / 2026</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container8 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Icon">
          <path d={svgPaths.p3fc33700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#314158] relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#314158] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[2.5px] py-px relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[77.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#314158] text-[12px] top-0 whitespace-nowrap">Março / 2026</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container9 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[94.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Fevereiro / 2026</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container10 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[83.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Janeiro / 2026</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container11 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[126px] items-start left-[24px] top-[53.5px] w-[213px]" data-name="Container">
      <Label />
      <Label1 />
      <Label2 />
      <Label3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[179.5px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container7 />
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
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[167px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Todos de 2025</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="flex-[167_0_0] h-[18px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text7 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[34px] items-center left-0 px-[12px] rounded-[10px] top-0 w-[237px]" data-name="Container">
      <Container14 />
      <Button1 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Icon2 />
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

function Text8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[99.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Dezembro / 2025</p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container16 />
          <Text8 />
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

function Text9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[100.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Novembro / 2025</p>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container17 />
          <Text9 />
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

function Text10() {
  return (
    <div className="h-[18px] relative shrink-0 w-[87.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Outubro / 2025</p>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container18 />
          <Text10 />
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

function Text11() {
  return (
    <div className="h-[18px] relative shrink-0 w-[96.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Setembro / 2025</p>
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container19 />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[18px] relative shrink-0 w-[81.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Agosto / 2025</p>
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container20 />
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[18px] relative shrink-0 w-[72.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Julho / 2025</p>
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container21 />
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[18px] relative shrink-0 w-[76.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Junho / 2025</p>
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container22 />
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[18px] relative shrink-0 w-[68.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Maio / 2025</p>
      </div>
    </div>
  );
}

function Label11() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container23 />
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[18px] relative shrink-0 w-[67.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Abril / 2025</p>
      </div>
    </div>
  );
}

function Label12() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container24 />
          <Text16 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[18px] relative shrink-0 w-[76.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Março / 2025</p>
      </div>
    </div>
  );
}

function Label13() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container25 />
          <Text17 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[18px] relative shrink-0 w-[93.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Fevereiro / 2025</p>
      </div>
    </div>
  );
}

function Label14() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container26 />
          <Text18 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[18px] relative shrink-0 w-[83.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Janeiro / 2025</p>
      </div>
    </div>
  );
}

function Label15() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container27 />
          <Text19 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[382px] items-start left-[24px] top-[38px] w-[213px]" data-name="Container">
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
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[420px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container15 />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[167px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Todos de 2024</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="flex-[167_0_0] h-[18px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text20 />
      </div>
    </div>
  );
}

function Icon3() {
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

function Container28() {
  return (
    <div className="h-[34px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <Container29 />
          <Button2 />
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[167px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Todos de 2023</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="flex-[167_0_0] h-[18px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text21 />
      </div>
    </div>
  );
}

function Icon4() {
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

function Container30() {
  return (
    <div className="h-[34px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <Container31 />
          <Button3 />
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text22() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[167px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Todos de 2022</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="flex-[167_0_0] h-[18px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text22 />
      </div>
    </div>
  );
}

function Icon5() {
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

function Container32() {
  return (
    <div className="h-[34px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <Container33 />
          <Button4 />
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[167px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Todos de 2021</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="flex-[167_0_0] h-[18px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text23 />
      </div>
    </div>
  );
}

function Icon6() {
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

function Container34() {
  return (
    <div className="h-[34px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <Container35 />
          <Button5 />
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[218.5_0_0] flex-col gap-[4px] items-start min-h-px min-w-px overflow-clip pr-[10px] relative w-[247px]" data-name="Container">
      <Container3 />
      <Container12 />
      <Container28 />
      <Container30 />
      <Container32 />
      <Container34 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-h-px min-w-px relative">
      <Container />
      <Container2 />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[18px] relative shrink-0 w-[77px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[#314158] text-[12px] top-0 tracking-[0.7px] whitespace-nowrap">Período 2</p>
      </div>
    </div>
  );
}

function MdsaaToggle() {
  return (
    <div className="flex-[1_0_0] h-[13.5px] min-h-px min-w-px relative" data-name="MdsaaToggle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[13.5px] left-[18.5px] not-italic text-[#314158] text-[9px] text-center top-0 tracking-[0.225px] uppercase whitespace-nowrap">MDSAA</p>
      </div>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="bg-[#f1f5f9] h-[19.5px] relative rounded-[4px] shrink-0 w-[49.344px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[7px] py-px relative size-full">
        <MdsaaToggle />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[19px] relative shrink-0 w-[118.344px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Text24 />
        <SlotClone />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between pr-[132.047px] relative shrink-0 w-[250.391px]" data-name="Container">
      <Container37 />
    </div>
  );
}

function Container42() {
  return <div className="bg-[#314158] h-[2px] rounded-[4px] shrink-0 w-[8px]" data-name="Container" />;
}

function Container41() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] py-px relative size-full">
        <Container42 />
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[167px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Todos de 2026</p>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[167px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.5px] left-0 not-italic text-[#90a1b9] text-[9px] top-0 whitespace-nowrap">1 de 4 selecionados</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="flex-[167_0_0] h-[33.5px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Text25 />
        <Text26 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[49.5px] items-center left-0 px-[12px] rounded-[10px] top-0 w-[237px]" data-name="Container">
      <Container41 />
      <Button6 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[18px] relative shrink-0 w-[67.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Abril / 2026</p>
      </div>
    </div>
  );
}

function Label16() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container44 />
          <Text27 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Icon">
          <path d={svgPaths.p3fc33700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#314158] relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#314158] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[2.5px] py-px relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[18px] relative shrink-0 w-[77.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#314158] text-[12px] top-0 whitespace-nowrap">Março / 2026</p>
      </div>
    </div>
  );
}

function Label17() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container45 />
          <Text28 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[18px] relative shrink-0 w-[94.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Fevereiro / 2026</p>
      </div>
    </div>
  );
}

function Label18() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container46 />
          <Text29 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[18px] relative shrink-0 w-[83.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Janeiro / 2026</p>
      </div>
    </div>
  );
}

function Label19() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container47 />
          <Text30 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[126px] items-start left-[24px] top-[53.5px] w-[213px]" data-name="Container">
      <Label16 />
      <Label17 />
      <Label18 />
      <Label19 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[179.5px] relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container43 />
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text31() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[167px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Todos de 2025</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="flex-[167_0_0] h-[18px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text31 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[34px] items-center left-0 px-[12px] rounded-[10px] top-0 w-[237px]" data-name="Container">
      <Container50 />
      <Button7 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[18px] relative shrink-0 w-[99.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Dezembro / 2025</p>
      </div>
    </div>
  );
}

function Label20() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container52 />
          <Text32 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[18px] relative shrink-0 w-[100.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Novembro / 2025</p>
      </div>
    </div>
  );
}

function Label21() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container53 />
          <Text33 />
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[18px] relative shrink-0 w-[87.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Outubro / 2025</p>
      </div>
    </div>
  );
}

function Label22() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container54 />
          <Text34 />
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[18px] relative shrink-0 w-[96.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Setembro / 2025</p>
      </div>
    </div>
  );
}

function Label23() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container55 />
          <Text35 />
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[18px] relative shrink-0 w-[81.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Agosto / 2025</p>
      </div>
    </div>
  );
}

function Label24() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container56 />
          <Text36 />
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[18px] relative shrink-0 w-[72.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Julho / 2025</p>
      </div>
    </div>
  );
}

function Label25() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container57 />
          <Text37 />
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[18px] relative shrink-0 w-[76.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Junho / 2025</p>
      </div>
    </div>
  );
}

function Label26() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container58 />
          <Text38 />
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[18px] relative shrink-0 w-[68.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Maio / 2025</p>
      </div>
    </div>
  );
}

function Label27() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container59 />
          <Text39 />
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[18px] relative shrink-0 w-[67.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Abril / 2025</p>
      </div>
    </div>
  );
}

function Label28() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container60 />
          <Text40 />
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[18px] relative shrink-0 w-[76.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Março / 2025</p>
      </div>
    </div>
  );
}

function Label29() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container61 />
          <Text41 />
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[18px] relative shrink-0 w-[93.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Fevereiro / 2025</p>
      </div>
    </div>
  );
}

function Label30() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container62 />
          <Text42 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text43() {
  return (
    <div className="h-[18px] relative shrink-0 w-[83.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Janeiro / 2025</p>
      </div>
    </div>
  );
}

function Label31() {
  return (
    <div className="h-[30px] relative rounded-[10px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Container63 />
          <Text43 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[382px] items-start left-[24px] top-[38px] w-[213px]" data-name="Container">
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
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[420px] relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container51 />
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text44() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[167px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Todos de 2024</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="flex-[167_0_0] h-[18px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text44 />
      </div>
    </div>
  );
}

function Icon10() {
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

function Container64() {
  return (
    <div className="h-[34px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <Container65 />
          <Button8 />
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text45() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[167px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Todos de 2023</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="flex-[167_0_0] h-[18px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text45 />
      </div>
    </div>
  );
}

function Icon11() {
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

function Container66() {
  return (
    <div className="h-[34px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <Container67 />
          <Button9 />
          <Icon11 />
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text46() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[167px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Todos de 2022</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="flex-[167_0_0] h-[18px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text46 />
      </div>
    </div>
  );
}

function Icon12() {
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

function Container68() {
  return (
    <div className="h-[34px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <Container69 />
          <Button10 />
          <Icon12 />
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text47() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[167px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">Todos de 2021</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="flex-[167_0_0] h-[18px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text47 />
      </div>
    </div>
  );
}

function Icon13() {
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

function Container70() {
  return (
    <div className="h-[34px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <Container71 />
          <Button11 />
          <Icon13 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-[218.5_0_0] flex-col gap-[4px] items-start min-h-px min-w-px overflow-clip pr-[10px] relative w-[247px]" data-name="Container">
      <Container39 />
      <Container48 />
      <Container64 />
      <Container66 />
      <Container68 />
      <Container70 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-h-px min-w-px relative">
      <Container36 />
      <Container38 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative size-full">
      <Frame1 />
      <Frame />
    </div>
  );
}