function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[155.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-px tracking-[0.6px] uppercase">Atributos Disponíveis</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15px] relative shrink-0 w-[68.695px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#90a1b9] text-[10px] top-[0.5px] tracking-[0.1172px] uppercase">Modo Ativo:</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#eff6ff] flex-[1_0_0] h-[26px] min-h-px min-w-px relative rounded-[8px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[11px] not-italic text-[#1447e6] text-[12px] top-[6px] uppercase">Seleção</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[26px] relative shrink-0 w-[156.383px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text1 />
        <Text2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(248,250,252,0.8)] h-[51px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[24px] relative size-full">
          <Text />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-start px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center tracking-[-0.5004px] uppercase w-full whitespace-pre-wrap">REDE</p>
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-start px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center tracking-[-0.5004px] uppercase w-full whitespace-pre-wrap">CANAL</p>
    </div>
  );
}

function SlotClone2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-start px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center tracking-[-0.5004px] uppercase w-full whitespace-pre-wrap">ESTADO</p>
    </div>
  );
}

function SlotClone3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-start px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center tracking-[-0.5004px] uppercase w-full whitespace-pre-wrap">CIDADE</p>
    </div>
  );
}

function SlotClone4() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-start px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center tracking-[-0.5004px] uppercase w-full whitespace-pre-wrap">REGIONAL</p>
    </div>
  );
}

function SlotClone5() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-start px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center tracking-[-0.5004px] uppercase w-full whitespace-pre-wrap">LOJA</p>
    </div>
  );
}

function SlotClone6() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-start px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center tracking-[-0.5004px] uppercase w-full whitespace-pre-wrap">CD</p>
    </div>
  );
}

function SlotClone7() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-start px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center tracking-[-0.5004px] uppercase w-full whitespace-pre-wrap">STATUS</p>
    </div>
  );
}

function Atributos() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ATRIBUTOS">
      <SlotClone />
      <SlotClone1 />
      <SlotClone2 />
      <SlotClone3 />
      <SlotClone4 />
      <SlotClone5 />
      <SlotClone6 />
      <SlotClone7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Atributos />
    </div>
  );
}

function SlotClone8() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-start px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center tracking-[-0.5004px] uppercase w-full whitespace-pre-wrap">CATEGORIA</p>
    </div>
  );
}

function SlotClone9() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-start px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center tracking-[-0.5004px] uppercase w-full whitespace-pre-wrap">MODALIDADE</p>
    </div>
  );
}

function SlotClone10() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-start px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center tracking-[-0.5004px] uppercase w-full whitespace-pre-wrap">GRUPO</p>
    </div>
  );
}

function SlotClone11() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-start px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center tracking-[-0.5004px] uppercase w-full whitespace-pre-wrap">SUB-GRUPO</p>
    </div>
  );
}

function SlotClone12() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-start px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center tracking-[-0.5004px] uppercase w-full whitespace-pre-wrap">MARCA</p>
    </div>
  );
}

function SlotClone13() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-start px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center tracking-[-0.5004px] uppercase w-full whitespace-pre-wrap">GÊNERO</p>
    </div>
  );
}

function SlotClone14() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-start px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center tracking-[-0.5004px] uppercase w-full whitespace-pre-wrap">FAIXA ETÁRIA</p>
    </div>
  );
}

function SlotClone15() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-start px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center tracking-[-0.5004px] uppercase w-full whitespace-pre-wrap">MODELO</p>
    </div>
  );
}

function SlotClone16() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-start px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center tracking-[-0.5004px] uppercase w-full whitespace-pre-wrap">COR</p>
    </div>
  );
}

function SlotClone17() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-start px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center tracking-[-0.5004px] uppercase w-full whitespace-pre-wrap">TAMANHO</p>
    </div>
  );
}

function SlotClone18() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-start px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-center tracking-[-0.5004px] uppercase w-full whitespace-pre-wrap">SABOR</p>
    </div>
  );
}

function Atributos1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ATRIBUTOS">
      <SlotClone8 />
      <SlotClone9 />
      <SlotClone10 />
      <SlotClone11 />
      <SlotClone12 />
      <SlotClone13 />
      <SlotClone14 />
      <SlotClone15 />
      <SlotClone16 />
      <SlotClone17 />
      <SlotClone18 />
    </div>
  );
}

function Scroll() {
  return <div className="-translate-x-1/2 absolute bg-[#bdbdbd] h-[44px] left-[calc(50%-1px)] rounded-[4px] top-[4px] w-[7px]" data-name="Scroll" />;
}

function NativeBrowserScroll() {
  return (
    <div className="bg-[#eee] h-[1016px] relative w-[15px]" data-name="*Native Browser Scroll">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.12)] border-l border-solid inset-0 pointer-events-none" />
      <Scroll />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col gap-[24px] items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
      <Frame />
      <Atributos1 />
      <div className="absolute flex h-[15px] items-center justify-center left-0 top-[165px] w-[1016px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <NativeBrowserScroll />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative w-full">
          <Container1 />
          <Container3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex items-start pb-[24px] px-[24px] relative size-full">
      <Container />
    </div>
  );
}