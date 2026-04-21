import React from 'react';
import svgPaths from "../../imports/svg-z98vsnusc";
import mandalaBase from "figma:asset/0576bd219306fd2b7abdc047be7226558a56ecf1.png";
import ResultadoText from "../../imports/Group40";

type Module = 'PRODUTO' | 'LOJA' | 'INDICADORES' | 'EXTRAVIOS';

interface InteractiveMandalaProps {
  selectedModule: Module;
  onModuleSelect: (module: Module) => void;
}

export function InteractiveMandala({ selectedModule, onModuleSelect }: InteractiveMandalaProps) {
  const [hoveredModule, setHoveredModule] = React.useState<Module | null>(null);
  const [tooltipPosition, setTooltipPosition] = React.useState({ x: 0, y: 0 });

  const isActive = (module: Module) => selectedModule === module || hoveredModule === module;

  const handleModuleClick = (module: Module) => {
    if (module === 'PRODUTO' || module === 'LOJA' || module === 'INDICADORES') {
      onModuleSelect(module);
    }
  };

  const handleMouseEnter = (module: Module, event: React.MouseEvent) => {
    setHoveredModule(module);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const isModuleDisabled = (module: Module) => {
    return module === 'EXTRAVIOS';
  };

  return (
    <div className="relative size-full" data-name="MANDALA">
      <div className="absolute inset-[-5.01%]">
        <img 
          src={mandalaBase} 
          alt="Mandala base" 
          className="block size-full"
          style={{ 
            imageRendering: '-webkit-optimize-contrast',
            userSelect: 'none',
            pointerEvents: 'none',
            transform: 'scale(0.96)',
            transformOrigin: 'center'
          }}
        />
      </div>

      <div className="absolute contents inset-[4.14%_4.61%_4.36%_4.39%]">
        
        {/* Centro - Resultado */}
        <div className="absolute contents inset-[34.85%_34.82%_34.82%_34.85%]" data-name="Resultado">
          {/* Texto RESULTADO centralizado */}
          <div className="absolute inset-[43.37%_41.82%_44.55%_42.37%] z-20 pointer-events-none">
            <ResultadoText />
          </div>
        </div>

        {/* Botão Indicadores (esquerda) */}
        <div 
          className={`absolute block inset-[20.06%_64.01%_20.37%_4.39%] transition-opacity duration-200 pointer-events-none ${isActive('INDICADORES') ? 'z-10 opacity-100' : 'z-0 opacity-0'}`} 
          data-name="Indicadores"
        >
          <div className="absolute inset-[-8.42%_-15.86%]">
            <svg className="block size-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 166.112 277.656">
              {/* FORMAS COM FILTROS */}
              <g 
                filter="url(#filter0_i_indicadores)"
                className="pointer-events-auto cursor-pointer hover:opacity-90"
                onMouseEnter={() => setHoveredModule('INDICADORES')}
                onMouseLeave={() => setHoveredModule(null)}
                onClick={() => handleModuleClick('INDICADORES')}
              >
                <g filter="url(#filter1_d_indicadores)">
                  <path d={svgPaths.p3bda1980} fill="var(--fill-0, #FDC002)" />
                  <path d={svgPaths.p3bda1980} fill="url(#paint0_linear_indicadores)" />
                </g>
                <g filter="url(#filter2_d_indicadores)">
                  <path d={svgPaths.p277e1f40} fill="url(#paint1_linear_indicadores)" />
                </g>
              </g>
              
              {/* TEXTOS SEM FILTROS - CAMADA SEPARADA */}
              <g 
                className="pointer-events-none"
                style={{ shapeRendering: 'geometricPrecision' }}
              >
                <path d={svgPaths.p377b8900} fill="var(--fill-0, white)" />
                <path d={svgPaths.p79fad00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p1862a800} fill="var(--fill-0, white)" />
                <path d={svgPaths.p17026100} fill="var(--fill-0, white)" />
                <path d={svgPaths.p159a70a0} fill="var(--fill-0, white)" />
                <path d={svgPaths.p2dfd8800} fill="var(--fill-0, white)" />
                <path d={svgPaths.p39030d00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p3ea4b080} fill="var(--fill-0, white)" />
                <path d={svgPaths.p4c5b280} fill="var(--fill-0, white)" />
                <path d={svgPaths.p1cb8500} fill="var(--fill-0, white)" />
                <path d={svgPaths.p3a8a9580} fill="var(--fill-0, white)" />
                <path d={svgPaths.p1a660200} fill="var(--fill-0, white)" />
              </g>
              
              <defs>
                <filter colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%" id="filter0_i_indicadores">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="-1" dy="-4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="shape" mode="normal" result="effect1_innerShadow_indicadores" />
                </filter>
                <filter colorInterpolationFilters="sRGB" x="-8%" y="-8%" width="116%" height="116%" id="filter1_d_indicadores">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.8" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_indicadores" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_indicadores" mode="normal" result="shape" />
                </filter>
                <filter colorInterpolationFilters="sRGB" x="-8%" y="-8%" width="116%" height="116%" id="filter2_d_indicadores">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.8" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_indicadores" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_indicadores" mode="normal" result="shape" />
                </filter>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_indicadores" x1="64.4998" x2="83.4998" y1="42.9435" y2="239.443">
                  <stop stopColor="#FFEF00" stopOpacity="0.6" />
                  <stop offset="1" stopColor="#F3D061" stopOpacity="0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_indicadores" x1="41.4998" x2="133" y1="108.443" y2="146.943">
                  <stop stopColor="#FFEF00" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#9D7F20" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Botão Produto (topo) */}
        <div 
          className={`absolute block inset-[4.14%_20.12%_64.26%_20.31%] transition-opacity duration-200 pointer-events-none ${isActive('PRODUTO') ? 'z-10 opacity-100' : 'z-0 opacity-0'}`} 
          data-name="Produto"
        >
          <div className="absolute inset-[-15.86%_-8.42%]">
            <svg className="block size-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 277.653 166.112">
              {/* FORMAS COM FILTROS */}
              <g 
                filter="url(#filter0_i_produto)"
                className="pointer-events-auto cursor-pointer hover:opacity-90"
                onMouseEnter={() => setHoveredModule('PRODUTO')}
                onMouseLeave={() => setHoveredModule(null)}
                onClick={() => handleModuleClick('PRODUTO')}
              >
                <g filter="url(#filter1_d_produto)">
                  <path d={svgPaths.p237c3c00} fill="var(--fill-0, #446BDF)" />
                  <path d={svgPaths.p237c3c00} fill="url(#paint0_linear_produto)" />
                </g>
                <g filter="url(#filter2_d_produto)">
                  <path d={svgPaths.p3303e080} fill="url(#paint1_linear_produto)" />
                </g>
              </g>
              
              {/* TEXTOS SEM FILTROS - CAMADA SEPARADA */}
              <g 
                className="pointer-events-none"
                style={{ shapeRendering: 'geometricPrecision' }}
              >
                <path d={svgPaths.p209b2600} fill="var(--fill-0, white)" />
                <path d={svgPaths.p10093d80} fill="var(--fill-0, white)" />
                <path d={svgPaths.p14a55800} fill="var(--fill-0, white)" />
                <path d={svgPaths.p211c8800} fill="var(--fill-0, white)" />
                <path d={svgPaths.p2fd5c300} fill="var(--fill-0, white)" />
                <path d={svgPaths.p330c200} fill="var(--fill-0, white)" />
                <path d={svgPaths.p3a48c100} fill="var(--fill-0, white)" />
                <path d={svgPaths.p39d47880} fill="var(--fill-0, white)" />
              </g>
              
              <defs>
                <filter colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%" id="filter0_i_produto">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="-2" dy="-4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="shape" mode="normal" result="effect1_innerShadow_produto" />
                </filter>
                <filter colorInterpolationFilters="sRGB" x="-8%" y="-8%" width="116%" height="116%" id="filter1_d_produto">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.8" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_produto" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_produto" mode="normal" result="shape" />
                </filter>
                <filter colorInterpolationFilters="sRGB" x="-8%" y="-8%" width="116%" height="116%" id="filter2_d_produto">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.8" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_produto" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_produto" mode="normal" result="shape" />
                </filter>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_produto" x1="69.9438" x2="183.444" y1="45.5" y2="134.5">
                  <stop offset="0.1" stopColor="#3369FF" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#1E3D92" stopOpacity="0.25" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_produto" x1="67.4438" x2="175.944" y1="50.5" y2="133">
                  <stop stopColor="#95A3F4" />
                  <stop offset="1" stopColor="#1F336A" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Botão Loja (direita) */}
        <div 
          className={`absolute block inset-[20.06%_4.61%_20.37%_63.78%] transition-opacity duration-200 pointer-events-none ${isActive('LOJA') ? 'z-10 opacity-100' : 'z-0 opacity-0'}`} 
          data-name="Loja"
        >
          <div className="absolute inset-[-8.42%_-15.86%]">
            <svg className="block size-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 166.112 277.653">
              {/* FORMAS COM FILTROS */}
              <g 
                filter="url(#filter0_i_loja)"
                className="pointer-events-auto cursor-pointer hover:opacity-90"
                onMouseEnter={() => setHoveredModule('LOJA')}
                onMouseLeave={() => setHoveredModule(null)}
                onClick={() => handleModuleClick('LOJA')}
              >
                <g filter="url(#filter1_d_loja)">
                  <path d={svgPaths.p39d89b00} fill="var(--fill-0, #1EAD43)" />
                  <path d={svgPaths.p39d89b00} fill="url(#paint0_linear_loja)" />
                </g>
                <g filter="url(#filter2_d_loja)">
                  <path d={svgPaths.p3f074740} fill="url(#paint1_linear_loja)" />
                </g>
              </g>
              
              {/* TEXTOS SEM FILTROS - CAMADA SEPARADA */}
              <g 
                className="pointer-events-none"
                style={{ shapeRendering: 'geometricPrecision' }}
              >
                <path d={svgPaths.p33613c00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p3e62bc00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p11935f00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p1fab1700} fill="var(--fill-0, white)" />
                <path d={svgPaths.p29a90000} fill="var(--fill-0, white)" />
              </g>
              
              <defs>
                <filter colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%" id="filter0_i_loja">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="1" dy="-4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="shape" mode="normal" result="effect1_innerShadow_loja" />
                </filter>
                <filter colorInterpolationFilters="sRGB" x="-8%" y="-8%" width="116%" height="116%" id="filter1_d_loja">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.8" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_loja" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_loja" mode="normal" result="shape" />
                </filter>
                <filter colorInterpolationFilters="sRGB" x="-8%" y="-8%" width="116%" height="116%" id="filter2_d_loja">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.8" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_loja" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_loja" mode="normal" result="shape" />
                </filter>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_loja" x1="39.5" x2="135.5" y1="133.943" y2="138.943">
                  <stop stopColor="#33FF63" stopOpacity="0.3" />
                  <stop offset="1" stopColor="#063D14" stopOpacity="0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_loja" x1="39.5" x2="140" y1="133.943" y2="126.943">
                  <stop stopColor="#33FF63" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#063D14" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Botão Extravios (embaixo) */}
        <div 
          className={`absolute block inset-[64.04%_20.12%_4.36%_20.31%] transition-opacity duration-200 pointer-events-none ${isActive('EXTRAVIOS') ? 'z-10 opacity-100' : 'z-0 opacity-0'}`} 
          data-name="Extravios"
        >
          <div className="absolute inset-[-15.86%_-8.42%]">
            <svg className="block size-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 277.653 166.114">
              {/* FORMAS COM FILTROS */}
              <g 
                filter="url(#filter0_i_extravios)"
                className="pointer-events-auto cursor-pointer hover:opacity-90"
                onMouseEnter={() => setHoveredModule('EXTRAVIOS')}
                onMouseLeave={() => setHoveredModule(null)}
                onClick={() => handleModuleClick('EXTRAVIOS')}
              >
                <g filter="url(#filter1_d_extravios)">
                  <path d={svgPaths.p4fb5970} fill="var(--fill-0, #E35335)" />
                  <path d={svgPaths.p4fb5970} fill="url(#paint0_linear_extravios)" />
                </g>
                <g filter="url(#filter2_d_extravios)">
                  <path d={svgPaths.p39cd6300} fill="url(#paint1_linear_extravios)" />
                </g>
              </g>
              
              {/* TEXTOS SEM FILTROS - CAMADA SEPARADA */}
              <g 
                className="pointer-events-none"
                style={{ shapeRendering: 'geometricPrecision' }}
              >
                <path d={svgPaths.p12336800} fill="var(--fill-0, white)" />
                <path d={svgPaths.p3cf55300} fill="var(--fill-0, white)" />
                <path d={svgPaths.p1d3a3300} fill="var(--fill-0, white)" />
                <path d={svgPaths.pa277c00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p1cd08970} fill="var(--fill-0, white)" />
                <path d={svgPaths.p30485d70} fill="var(--fill-0, white)" />
                <path d={svgPaths.p18852400} fill="var(--fill-0, white)" />
                <path d={svgPaths.p3cf3f300} fill="var(--fill-0, white)" />
                <path d={svgPaths.p17860800} fill="var(--fill-0, white)" />
              </g>
              
              <defs>
                <filter colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%" id="filter0_i_extravios">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="-4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="shape" mode="normal" result="effect1_innerShadow_extravios" />
                </filter>
                <filter colorInterpolationFilters="sRGB" x="-8%" y="-8%" width="116%" height="116%" id="filter1_d_extravios">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.8" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_extravios" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_extravios" mode="normal" result="shape" />
                </filter>
                <filter colorInterpolationFilters="sRGB" x="-8%" y="-8%" width="116%" height="116%" id="filter2_d_extravios">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.8" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_extravios" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_extravios" mode="normal" result="shape" />
                </filter>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_extravios" x1="92.4438" x2="194.945" y1="21.5" y2="127.499">
                  <stop offset="0.115385" stopColor="#F53528" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#702515" stopOpacity="0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_extravios" x1="101.444" x2="175.944" y1="32" y2="120.5">
                  <stop stopColor="#E39567" />
                  <stop offset="1" stopColor="#702515" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* CAMADAS DE INTERAÇÃO INVISÍVEIS - sempre visíveis para capturar hover/click */}
        {/* Indicadores */}
        <div
          className="absolute inset-[20.06%_64.01%_20.37%_4.39%] z-[5] cursor-pointer"
          onMouseEnter={(event) => handleMouseEnter('INDICADORES', event)}
          onMouseLeave={() => setHoveredModule(null)}
          onMouseMove={handleMouseMove}
          onClick={() => handleModuleClick('INDICADORES')}
          style={{ clipPath: 'polygon(18% 10%, 40% 50%, 18% 90%, 0% 50%)' }}
        />
        
        {/* Produto */}
        <div
          className="absolute inset-[4.14%_20.12%_64.26%_20.31%] z-[5] cursor-pointer"
          onMouseEnter={(event) => handleMouseEnter('PRODUTO', event)}
          onMouseLeave={() => setHoveredModule(null)}
          onMouseMove={handleMouseMove}
          onClick={() => handleModuleClick('PRODUTO')}
          style={{ clipPath: 'polygon(20% 15%, 50% 0%, 80% 15%, 65% 50%, 35% 50%)' }}
        />
        
        {/* Loja */}
        <div
          className="absolute inset-[20.06%_4.61%_20.37%_63.78%] z-[5] cursor-pointer"
          onMouseEnter={(event) => handleMouseEnter('LOJA', event)}
          onMouseLeave={() => setHoveredModule(null)}
          onMouseMove={handleMouseMove}
          onClick={() => handleModuleClick('LOJA')}
          style={{ clipPath: 'polygon(65% 50%, 85% 15%, 100% 50%, 85% 85%)' }}
        />
        
        {/* Extravios */}
        <div
          className="absolute inset-[64.04%_20.12%_4.36%_20.31%] z-[5] cursor-pointer"
          onMouseEnter={(event) => handleMouseEnter('EXTRAVIOS', event)}
          onMouseLeave={() => setHoveredModule(null)}
          onMouseMove={handleMouseMove}
          onClick={() => handleModuleClick('EXTRAVIOS')}
          style={{ clipPath: 'polygon(35% 50%, 65% 50%, 80% 85%, 50% 100%, 20% 85%)' }}
        />

      </div>

      {/* Tooltip para módulos desabilitados */}
      {hoveredModule && isModuleDisabled(hoveredModule) && (
        <div
          className="fixed z-[9999] px-3 py-2 bg-[#314158] text-white text-[12px] font-normal rounded-md shadow-lg pointer-events-none"
          style={{
            left: tooltipPosition.x + 12,
            top: tooltipPosition.y + 12,
          }}
        >
          Módulo ainda não habilitado
        </div>
      )}
    </div>
  );
}