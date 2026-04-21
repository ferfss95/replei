import svgPaths from "./svg-xgu2gec2in";

function ObjectsStore() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Objects / Store">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Objects / Store">
          <path d={svgPaths.p2d773940} fill="var(--fill-0, #111111)" id="Vetor" />
        </g>
      </svg>
    </div>
  );
}

export default function IconeMestre() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Ícone mestre">
      <ObjectsStore />
    </div>
  );
}