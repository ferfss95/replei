import React from "react";
import {
  RotateCcw,
  TrendingUp,
  ArrowLeftRight,
  BarChart3,
  Clock,
  Lock,
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../utils";
import { STEPS, type Step, type Module } from "../constants";
import { getModuleTitle } from "../constants/labels";
import { Logo } from "./Logo";
import { LockedTooltip } from "./LockedTooltip";
import type { AnalysisMode } from "../types/wizard";

const MODE_LABELS: Record<AnalysisMode, string> = {
  padrao: "Geral",
  evolucao: "Evolutiva",
  comparativo: "Comparativa",
  horaahora: "Intraday",
};

interface AppHeaderProps {
  currentModule: Module;
  currentStep: Step;
  analysisMode: AnalysisMode;
  moduleColors: { primaryColor: string };
  isSelectionConfigured: boolean;
  isGroupingConfigured: boolean;
  isExclusionConfigured: boolean;
  isComparativoPeriodDefined: boolean;
  handleStepChange: (step: Step) => void;
  onClear: () => void;
}

export const AppHeader = React.memo<AppHeaderProps>(function AppHeader({
  currentModule,
  currentStep,
  analysisMode,
  moduleColors,
  isSelectionConfigured,
  isGroupingConfigured,
  isExclusionConfigured,
  isComparativoPeriodDefined,
  handleStepChange,
  onClear,
}: AppHeaderProps) {
  const hasAnyConfig = isSelectionConfigured || isGroupingConfigured || isExclusionConfigured;

  return (
    <header className="bg-white border-b border-[#d5dbe3] flex-none shadow-sm">
      <div className="w-full flex flex-col">
        {/* ── Row 1: Logo + Título | Stepper | Botão Limpar ── */}
        <div className="px-6 flex items-center justify-between" style={{ height: 64 }}>
          {/* Left: Logo + Título */}
          <div className="flex items-center gap-3 shrink-0">
            <Logo />
            <span className="text-[#cad5e2] shrink-0">|</span>
            <motion.div
              key={currentModule}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="w-[340px]"
            >
              <h1 className="font-bold text-[14px] text-[#314158] tracking-[1.2px] uppercase flex items-center gap-[10px]">
                {getModuleTitle(currentModule)}
                <span
                  className={`inline-flex items-center gap-[4px] px-[8px] h-[21px] rounded-[4px] font-bold text-[10px] ${
                    currentModule === "PRODUTO"
                      ? "bg-[#EDF0F4] text-[#1E3D92]"
                      : currentModule === "LOJA"
                        ? "bg-[#EEF4F1] text-[#146829]"
                        : currentModule === "EXTRAVIOS"
                          ? "bg-[#F4EFF0] text-[#7C2D3A]"
                          : currentModule === "INDICADORES"
                            ? "bg-[#FEF3C7] text-[#92400E]"
                            : "bg-[#F0F4F8] text-[#314158]"
                  }`}
                >
                  {analysisMode === "padrao" && (
                    <BarChart3 size={10} strokeWidth={2.5} />
                  )}
                  {analysisMode === "evolucao" && (
                    <TrendingUp size={10} strokeWidth={2.5} />
                  )}
                  {analysisMode === "comparativo" && (
                    <ArrowLeftRight size={10} strokeWidth={2.5} />
                  )}
                  {analysisMode === "horaahora" && (
                    <Clock size={10} strokeWidth={2.5} />
                  )}
                  {MODE_LABELS[analysisMode]?.toUpperCase() || "GERAL"}
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Center: Stepper */}
          <div className="flex-1 flex items-center justify-start pl-[70px] pr-[32px] py-[0px]">
            <div className="flex items-center gap-2">
              {STEPS.map((step, index) => {
                const isActive = step.id === currentStep;
                const currentIndex = STEPS.findIndex((s) => s.id === currentStep);
                const isPast = index < currentIndex;
                const isFilled =
                  (step.id === "selection" && isSelectionConfigured) ||
                  (step.id === "grouping" && isGroupingConfigured) ||
                  (step.id === "exclusion" && isExclusionConfigured);

                const isAnalysisEnabled =
                  isSelectionConfigured && isGroupingConfigured && isComparativoPeriodDefined;
                const isLocked = step.id === "analysis" && !isAnalysisEnabled;

                const lockedReqs: string[] = [];
                if (!isSelectionConfigured)
                  lockedReqs.push("selecionar ao menos um atributo");
                if (!isGroupingConfigured)
                  lockedReqs.push("definir um agrupamento");
                if (analysisMode === "comparativo" && !isComparativoPeriodDefined)
                  lockedReqs.push("informar o Período 2");
                const lockedMsg =
                  lockedReqs.length > 0
                    ? `Para gerar o relatório: ${lockedReqs.join(", ")}.`
                    : "";

                const stepActiveColors: Record<Step, { bgColor: string; numberTextColor: string }> = {
                  selection: {
                    bgColor: moduleColors.primaryColor,
                    numberTextColor: moduleColors.primaryColor,
                  },
                  grouping: {
                    bgColor: moduleColors.primaryColor,
                    numberTextColor: moduleColors.primaryColor,
                  },
                  exclusion: {
                    bgColor: moduleColors.primaryColor,
                    numberTextColor: moduleColors.primaryColor,
                  },
                  analysis: {
                    bgColor: moduleColors.primaryColor,
                    numberTextColor: moduleColors.primaryColor,
                  },
                };
                const activeColor = stepActiveColors[step.id];

                return (
                  <div key={step.id} className="flex items-center">
                    <LockedTooltip isLocked={isLocked} content={lockedMsg}>
                      <button
                        onClick={() => !isLocked && handleStepChange(step.id)}
                        disabled={isLocked}
                        className={cn(
                          "flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all duration-200 relative",
                          isActive
                            ? "text-white shadow-md"
                            : isFilled && !isActive
                              ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                              : "bg-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-50",
                          isLocked &&
                            "opacity-50 cursor-not-allowed hover:bg-transparent hover:text-slate-400",
                        )}
                        style={isActive ? { backgroundColor: activeColor.bgColor } : {}}
                      >
                        <div
                          className={cn(
                            "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-all",
                            isActive
                              ? "bg-white"
                              : isFilled && !isActive
                                ? "bg-[#90a1b9] text-white"
                                : "bg-slate-200 text-[#62748e]",
                          )}
                          style={isActive ? { color: activeColor.numberTextColor } : {}}
                        >
                          {step.number}
                        </div>
                        <span className={cn("text-sm font-medium", isActive && "font-bold")}>
                          {step.label}
                        </span>

                        {isFilled && !isActive && (
                          <div
                            className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full ring-2 ring-white"
                            style={{ backgroundColor: moduleColors.primaryColor }}
                          />
                        )}

                        {isLocked && (
                          <Lock
                            size={11}
                            className="absolute -top-0.5 -right-0.5 text-slate-400"
                          />
                        )}
                      </button>
                    </LockedTooltip>
                    {index < 3 && (
                      <div
                        className={cn(
                          "w-8 h-px mx-1.5",
                          isPast || isFilled ? "bg-[#cad5e2]" : "bg-slate-200",
                        )}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Clear */}
          <div className="flex items-center justify-end gap-3 shrink-0">
            <button
              onClick={onClear}
              className={cn(
                "flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                hasAnyConfig
                  ? "text-[#9B2C2C] hover:bg-[#FED7D7]"
                  : "text-[#90a1b9] cursor-default",
              )}
            >
              <RotateCcw size={14} />
              Limpar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
});
