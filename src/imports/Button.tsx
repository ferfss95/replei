function Text() {
  return (
    <div className="h-[21px] relative shrink-0 w-[171px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[21px] left-0 not-italic text-[#314158] text-[14px] top-0 tracking-[1.2px] uppercase whitespace-nowrap">RESULTADO DE LOJA</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[17px] not-italic text-[10px] text-center text-white top-0 whitespace-nowrap">GERAL</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#146829] h-[21px] relative rounded-[4px] shrink-0 w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="content-stretch flex gap-[10px] items-start py-[6px] relative rounded-[8px] size-full" data-name="Button">
      <Text />
      <Container />
    </div>
  );
}