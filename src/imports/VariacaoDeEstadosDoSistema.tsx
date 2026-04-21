import imgLoaderRemix11 from "figma:asset/72eeba983658f813916959aa94770ff939780bb6.png";

function Copy() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-[#111] text-center w-full whitespace-pre-wrap" data-name="Copy">
      <p className="font-['Roboto:Bold',sans-serif] leading-[1.2] relative shrink-0 text-[20px] w-[543px]">Carregando análise</p>
      <p className="font-['Roboto:Regular',sans-serif] leading-[16px] min-w-full relative shrink-0 text-[14px] w-[min-content]">Aguarde, em breve a tabela será exibida!</p>
    </div>
  );
}

export default function VariacaoDeEstadosDoSistema() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center py-[16px] relative size-full" data-name="variação de estados do sistema">
      <div className="h-[115px] relative shrink-0 w-[111px]" data-name="Loader-[remix] (1) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[151.42%] left-[-54.9%] max-w-none top-[-24.01%] w-[209.8%]" src={imgLoaderRemix11} />
        </div>
      </div>
      <Copy />
    </div>
  );
}