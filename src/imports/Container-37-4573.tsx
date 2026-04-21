function Paragraph() {
  return (
    <div className="h-[16.25px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.25px] left-0 not-italic text-[#62748e] text-[10px] top-0 tracking-[0.1172px]">Seleção livre de dias corridos</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#f8fafc] h-[38px] relative rounded-[10px] shrink-0 w-[171.891px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[12px] py-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(15,23,43,0.5)]">01/02/2026</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[18.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px]">até</p>
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-[#f8fafc] h-[38px] relative rounded-[10px] shrink-0 w-[171.891px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[12px] py-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(15,23,43,0.5)]">Ontem</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[38px] items-center relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Text />
      <TextInput1 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Container">
      <Paragraph />
      <Container1 />
    </div>
  );
}