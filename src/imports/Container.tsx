function Heading() {
  return (
    <div className="h-[16px] relative shrink-0 w-[178.375px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] tracking-[1.2px] uppercase">Atributos Disponíveis</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#90a1b9] text-[10px] top-0 tracking-[0.1172px] uppercase">Modo Ativo:</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[56.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#0f172b] text-[12px] uppercase">Seleção</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white h-[26px] relative rounded-[33554400px] shrink-0 w-[165.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[13px] py-px relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(248,250,252,0.3)] h-[59px] relative shrink-0 w-[1197px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-px px-[24px] relative size-full">
        <Heading />
        <Container2 />
      </div>
    </div>
  );
}

function Container6() {
  return <div className="bg-[#f1f5f9] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Container" />;
}

function Text2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[82.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#90a1b9] text-[10px] top-0 tracking-[1.1172px] uppercase">Localização</p>
      </div>
    </div>
  );
}

function Container7() {
  return <div className="bg-[#f1f5f9] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Container" />;
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[15px] items-center left-0 top-0 w-[1149px]" data-name="Container">
      <Container6 />
      <Text2 />
      <Container7 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[51.67px] top-[29px] w-[34.641px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center tracking-[0.6px] uppercase">REDE</p>
    </div>
  );
}

function Container10() {
  return <div className="absolute left-[130px] size-0 top-[8px]" data-name="Container" />;
}

function AttributeCard() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[80px] left-0 rounded-[10px] top-0 w-[140px]" data-name="AttributeCard">
      <Text3 />
      <Container10 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[46.22px] top-[29px] w-[45.563px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center tracking-[0.6px] uppercase">CANAL</p>
    </div>
  );
}

function Container11() {
  return <div className="absolute left-[130px] size-0 top-[8px]" data-name="Container" />;
}

function AttributeCard1() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[80px] left-[156px] rounded-[10px] top-0 w-[140px]" data-name="AttributeCard">
      <Text4 />
      <Container11 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[42.3px] top-[29px] w-[53.391px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center tracking-[0.6px] uppercase">ESTADO</p>
    </div>
  );
}

function Container12() {
  return <div className="absolute left-[130px] size-0 top-[8px]" data-name="Container" />;
}

function AttributeCard2() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[80px] left-[312px] rounded-[10px] top-0 w-[140px]" data-name="AttributeCard">
      <Text5 />
      <Container12 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[43.92px] top-[29px] w-[50.141px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center tracking-[0.6px] uppercase">CIDADE</p>
    </div>
  );
}

function Container13() {
  return <div className="absolute left-[130px] size-0 top-[8px]" data-name="Container" />;
}

function AttributeCard3() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[80px] left-[468px] rounded-[10px] top-0 w-[140px]" data-name="AttributeCard">
      <Text6 />
      <Container13 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[34.94px] top-[29px] w-[68.125px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center tracking-[0.6px] uppercase">REGIONAL</p>
    </div>
  );
}

function Container14() {
  return <div className="absolute left-[130px] size-0 top-[8px]" data-name="Container" />;
}

function AttributeCard4() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[80px] left-[624px] rounded-[10px] top-0 w-[140px]" data-name="AttributeCard">
      <Text7 />
      <Container14 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[51.72px] top-[29px] w-[34.547px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center tracking-[0.6px] uppercase">LOJA</p>
    </div>
  );
}

function Container15() {
  return <div className="absolute left-[130px] size-0 top-[8px]" data-name="Container" />;
}

function AttributeCard5() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[80px] left-[780px] rounded-[10px] top-0 w-[140px]" data-name="AttributeCard">
      <Text8 />
      <Container15 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[59.45px] top-[29px] w-[19.078px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center tracking-[0.6px] uppercase">CD</p>
    </div>
  );
}

function Container16() {
  return <div className="absolute left-[130px] size-0 top-[8px]" data-name="Container" />;
}

function AttributeCard6() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[80px] left-[936px] rounded-[10px] top-0 w-[140px]" data-name="AttributeCard">
      <Text9 />
      <Container16 />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[43.13px] top-[29px] w-[51.75px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center tracking-[0.6px] uppercase">STATUS</p>
    </div>
  );
}

function Container17() {
  return <div className="absolute left-[130px] size-0 top-[8px]" data-name="Container" />;
}

function AttributeCard7() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[80px] left-[1092px] rounded-[10px] top-0 w-[140px]" data-name="AttributeCard">
      <Text10 />
      <Container17 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <AttributeCard />
      <AttributeCard1 />
      <AttributeCard2 />
      <AttributeCard3 />
      <AttributeCard4 />
      <AttributeCard5 />
      <AttributeCard6 />
      <AttributeCard7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[102px] items-start left-[-24px] overflow-clip pl-[24px] pr-[-59px] top-[27px] w-[1197px]" data-name="Container">
      <Container9 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[129px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container8 />
    </div>
  );
}

function Container20() {
  return <div className="bg-[#f1f5f9] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Container" />;
}

function Text11() {
  return (
    <div className="h-[15px] relative shrink-0 w-[57.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#90a1b9] text-[10px] top-0 tracking-[1.1172px] uppercase">Produto</p>
      </div>
    </div>
  );
}

function Container21() {
  return <div className="bg-[#f1f5f9] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Container" />;
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[15px] items-center left-0 top-0 w-[1149px]" data-name="Container">
      <Container20 />
      <Text11 />
      <Container21 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[30.59px] top-[29px] w-[76.813px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center tracking-[0.6px] uppercase">CATEGORIA</p>
    </div>
  );
}

function Container24() {
  return <div className="absolute left-[130px] size-0 top-[8px]" data-name="Container" />;
}

function AttributeCard8() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[80px] left-0 rounded-[10px] top-0 w-[140px]" data-name="AttributeCard">
      <Text12 />
      <Container24 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[24.75px] top-[29px] w-[88.484px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center tracking-[0.6px] uppercase">MODALIDADE</p>
    </div>
  );
}

function Container25() {
  return <div className="absolute left-[130px] size-0 top-[8px]" data-name="Container" />;
}

function AttributeCard9() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[80px] left-[156px] rounded-[10px] top-0 w-[140px]" data-name="AttributeCard">
      <Text13 />
      <Container25 />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[45.44px] top-[29px] w-[47.109px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center tracking-[0.6px] uppercase">GRUPO</p>
    </div>
  );
}

function Container26() {
  return <div className="absolute left-[130px] size-0 top-[8px]" data-name="Container" />;
}

function AttributeCard10() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[80px] left-[312px] rounded-[10px] top-0 w-[140px]" data-name="AttributeCard">
      <Text14 />
      <Container26 />
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[28.56px] top-[29px] w-[80.875px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center tracking-[0.6px] uppercase">SUB-GRUPO</p>
    </div>
  );
}

function Container27() {
  return <div className="absolute left-[130px] size-0 top-[8px]" data-name="Container" />;
}

function AttributeCard11() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[80px] left-[468px] rounded-[10px] top-0 w-[140px]" data-name="AttributeCard">
      <Text15 />
      <Container27 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[44.78px] top-[29px] w-[48.422px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center tracking-[0.6px] uppercase">MARCA</p>
    </div>
  );
}

function Container28() {
  return <div className="absolute left-[130px] size-0 top-[8px]" data-name="Container" />;
}

function AttributeCard12() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[80px] left-[624px] rounded-[10px] top-0 w-[140px]" data-name="AttributeCard">
      <Text16 />
      <Container28 />
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[41.67px] top-[29px] w-[54.656px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center tracking-[0.6px] uppercase">GÊNERO</p>
    </div>
  );
}

function Container29() {
  return <div className="absolute left-[130px] size-0 top-[8px]" data-name="Container" />;
}

function AttributeCard13() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[80px] left-[780px] rounded-[10px] top-0 w-[140px]" data-name="AttributeCard">
      <Text17 />
      <Container29 />
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[23.31px] top-[29px] w-[91.359px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center tracking-[0.6px] uppercase">FAIXA ETÁRIA</p>
    </div>
  );
}

function Container30() {
  return <div className="absolute left-[130px] size-0 top-[8px]" data-name="Container" />;
}

function AttributeCard14() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[80px] left-[936px] rounded-[10px] top-0 w-[140px]" data-name="AttributeCard">
      <Text18 />
      <Container30 />
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[40.64px] top-[29px] w-[56.703px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center tracking-[0.6px] uppercase">MODELO</p>
    </div>
  );
}

function Container31() {
  return <div className="absolute left-[130px] size-0 top-[8px]" data-name="Container" />;
}

function AttributeCard15() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[80px] left-[1092px] rounded-[10px] top-0 w-[140px]" data-name="AttributeCard">
      <Text19 />
      <Container31 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <AttributeCard8 />
      <AttributeCard9 />
      <AttributeCard10 />
      <AttributeCard11 />
      <AttributeCard12 />
      <AttributeCard13 />
      <AttributeCard14 />
      <AttributeCard15 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col h-[102px] items-start left-[-24px] overflow-clip pl-[24px] pr-[-59px] top-[27px] w-[1197px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[129px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container22 />
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1197px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[24px] px-[24px] relative rounded-[inherit] size-full">
        <Container4 />
        <Container18 />
      </div>
    </div>
  );
}

function Container33() {
  return <div className="absolute bg-[#90a1b9] left-[24px] rounded-[33554400px] size-[6px] top-[18px]" data-name="Container" />;
}

function Container32() {
  return (
    <div className="bg-[#f8fafc] h-[41px] relative shrink-0 w-[1197px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container33 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[38px] not-italic text-[#62748e] text-[12px] top-[13px]">Clique nos cards para filtrar atributos específicos.</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white relative rounded-[10px] size-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container1 />
        <Container3 />
        <Container32 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}