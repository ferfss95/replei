function Text() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[17px] not-italic text-[#146829] text-[10px] text-center top-0 whitespace-nowrap">GERAL</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#eef4f1] content-stretch flex items-center px-[8px] relative rounded-[4px] size-full" data-name="Container">
      <Text />
    </div>
  );
}