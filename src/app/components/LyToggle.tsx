/**
 * Toggle LY (Last Year) — análise comparativa:
 * preenche o Período 2 com as mesmas datas do Período 1 no ano civil anterior.
 */

import * as RadixTooltip from "@radix-ui/react-tooltip";
import { cn } from "../utils";

interface LyToggleProps {
  lyActive: boolean;
  setLyActive: (active: boolean) => void;
}

export const LyToggle = ({ lyActive, setLyActive }: LyToggleProps) => {
  const tooltipText = lyActive
    ? "Período 2 = mesmo intervalo de calendário do ano anterior (LY)."
    : "LY desativado. Ative para copiar o Período 1 para o Período 2 no ano anterior (mesmas datas civis).";

  return (
    <RadixTooltip.Root delayDuration={300}>
      <RadixTooltip.Trigger asChild>
        <button
          type="button"
          onClick={() => setLyActive(!lyActive)}
          className={cn(
            "inline-flex items-center gap-1 px-1.5 py-0.5 rounded transition-all cursor-pointer",
            lyActive
              ? "bg-[#f1f5f9] border border-[#cbd5e1] hover:bg-[#e2e8f0]"
              : "bg-white border border-slate-300 hover:bg-slate-50",
          )}
        >
          <span
            className={cn(
              "text-[9px] font-bold uppercase tracking-wide",
              lyActive ? "text-[#314158]" : "text-slate-400",
            )}
          >
            LY
          </span>
        </button>
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          className="z-[200] bg-slate-800 text-white text-xs px-3 py-2 rounded-lg shadow-lg max-w-[260px] text-center leading-snug"
          sideOffset={6}
        >
          {tooltipText}
          <RadixTooltip.Arrow className="fill-slate-800" />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
};
