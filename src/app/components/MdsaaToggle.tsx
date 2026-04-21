/**
 * MdsaaToggle Component
 * Toggle para ativar/desativar MDSAA (Mesmo Dia da Semana do Ano Anterior)
 */

import * as RadixTooltip from "@radix-ui/react-tooltip";
import { cn } from "../utils";

interface MdsaaToggleProps {
  mdsaaActive: boolean;
  setMdsaaActive: (active: boolean) => void;
}

export const MdsaaToggle = ({ mdsaaActive, setMdsaaActive }: MdsaaToggleProps) => {
  const tooltipText = mdsaaActive
    ? "Comparação baseada no mesmo dia da semana do ano anterior"
    : "MDSAA desativado. Clique para reativar e aplicar automaticamente o mesmo dia da semana do ano anterior.";

  return (
    <RadixTooltip.Root delayDuration={300}>
      <RadixTooltip.Trigger asChild>
        <button
          onClick={() => setMdsaaActive(!mdsaaActive)}
          className={cn(
            "inline-flex items-center gap-1 px-1.5 py-0.5 rounded transition-all cursor-pointer",
            mdsaaActive
              ? "bg-[#f1f5f9] border border-[#cbd5e1] hover:bg-[#e2e8f0]"
              : "bg-white border border-slate-300 hover:bg-slate-50",
          )}
        >
          <span
            className={cn(
              "text-[9px] font-bold uppercase tracking-wide",
              mdsaaActive
                ? "text-[#314158]"
                : "text-slate-400",
            )}
          >
            MDSAA
          </span>
        </button>
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          className="z-[200] bg-slate-800 text-white text-xs px-3 py-2 rounded-lg shadow-lg max-w-[240px] text-center leading-snug"
          sideOffset={6}
        >
          {tooltipText}
          <RadixTooltip.Arrow className="fill-slate-800" />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
};
