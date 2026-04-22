import React, { useState } from "react";
import { RotateCcw, LogOut, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { STEPS, type Step, type Module } from "../constants";
import { getModuleTitle } from "../constants/labels";
import { Logo } from "./Logo";
import { LockedTooltip } from "./LockedTooltip";
import type { AnalysisMode } from "../types/wizard";

// Converte hex (#RRGGBB) para rgba com opacidade
function hexToRgba(hex: string, alpha: number): string {
  const cleaned = hex.replace("#", "");
  const r = parseInt(cleaned.slice(0, 2), 16);
  const g = parseInt(cleaned.slice(2, 4), 16);
  const b = parseInt(cleaned.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

interface AppHeaderProps {
  currentModule: Module;
  currentStep: Step;
  analysisMode: AnalysisMode;
  moduleColors: { primaryColor: string; highlightColor: string };
  isSelectionConfigured: boolean;
  isGroupingConfigured: boolean;
  isExclusionConfigured: boolean;
  isComparativoPeriodDefined: boolean;
  handleStepChange: (step: Step) => void;
  onClear: () => void;
  onExit?: () => void;
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
  onExit,
}: AppHeaderProps) {
  const [hoveredStep, setHoveredStep] = useState<Step | null>(null);
  const [hoveredAction, setHoveredAction] = useState<"clear" | "exit" | null>(null);

  const { primaryColor, highlightColor } = moduleColors;
  const highlightShadow = hexToRgba(highlightColor, 0.3);

  // ── Estilos dinâmicos para os botões do stepper ──────────────────────────
  const getStepStyle = (isActive: boolean, isLocked: boolean, isHovered: boolean) => {
    if (isLocked) {
      return {
        backgroundColor: "transparent",
        color: "rgba(255,255,255,0.5)",
        border: "1px solid rgba(255,255,255,0.5)",
        cursor: "not-allowed",
      } as React.CSSProperties;
    }
    if (isActive) {
      return {
        backgroundColor: "#FFFFFF",
        color: primaryColor,
        border: `1px solid ${highlightColor}`,
        boxShadow: isHovered ? `0 0 0 3px ${highlightShadow}` : undefined,
        cursor: "pointer",
      } as React.CSSProperties;
    }
    // Default / Past
    return {
      backgroundColor: "transparent",
      color: "#FFFFFF",
      border: isHovered ? `1px solid ${highlightColor}` : "1px solid rgba(255,255,255,0.85)",
      boxShadow: isHovered ? `0 0 0 3px ${highlightShadow}` : undefined,
      cursor: "pointer",
    } as React.CSSProperties;
  };

  // ── Estilos dinâmicos para os botões de ação (Limpar / Sair) ─────────────
  const getActionStyle = (isHovered: boolean) => {
    if (isHovered) {
      return {
        backgroundColor: "#FFFFFF",
        color: primaryColor,
        border: `1px solid ${highlightColor}`,
        boxShadow: `0 0 0 3px ${highlightShadow}`,
        cursor: "pointer",
      } as React.CSSProperties;
    }
    return {
      backgroundColor: "transparent",
      color: "#FFFFFF",
      border: "none",
      cursor: "pointer",
    } as React.CSSProperties;
  };

  return (
    <header className="flex-none" style={{ backgroundColor: primaryColor }}>
      <div className="px-6 flex items-center justify-between" style={{ height: 64 }}>

        {/* ── Esquerda: Logo + Módulo ── */}
        <div className="flex items-center gap-3 shrink-0">
          <Logo color="#FFFFFF" />
          <span className="shrink-0 text-sm" style={{ color: "#D9D9D9" }}>|</span>
          <motion.div
            key={currentModule}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="font-bold text-[16px] text-white tracking-[1.2px] uppercase">
              {getModuleTitle(currentModule)}
            </h1>
          </motion.div>
        </div>

        {/* ── Centro: Stepper ── */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center" style={{ gap: 6 }}>
            {STEPS.map((step, index) => {
              const isActive = step.id === currentStep;
              const isAnalysisEnabled =
                isSelectionConfigured && isGroupingConfigured && isComparativoPeriodDefined;
              const isLocked = step.id === "analysis" && !isAnalysisEnabled;
              const isHovered = hoveredStep === step.id;

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

              return (
                <React.Fragment key={step.id}>
                  <LockedTooltip isLocked={isLocked} content={lockedMsg}>
                    <button
                      onClick={() => !isLocked && handleStepChange(step.id)}
                      disabled={isLocked}
                      onMouseEnter={() => !isLocked && setHoveredStep(step.id)}
                      onMouseLeave={() => setHoveredStep(null)}
                      className="flex items-center gap-2 px-4 py-[6px] rounded-lg text-sm font-medium transition-all duration-150"
                      style={getStepStyle(isActive, isLocked, isHovered)}
                    >
                      {step.label}
                    </button>
                  </LockedTooltip>

                  {index < STEPS.length - 1 && (
                    <ChevronRight
                      size={16}
                      strokeWidth={2}
                      style={{ color: highlightColor, flexShrink: 0 }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* ── Direita: Botões de Ação ── */}
        <div className="flex items-center shrink-0" style={{ gap: 12 }}>
          <button
            onClick={onClear}
            onMouseEnter={() => setHoveredAction("clear")}
            onMouseLeave={() => setHoveredAction(null)}
            className="flex items-center gap-2 px-3.5 py-[6px] rounded-lg text-sm font-medium transition-all duration-150"
            style={getActionStyle(hoveredAction === "clear")}
          >
            <RotateCcw size={14} />
            Limpar
          </button>

          <button
            onClick={onExit}
            onMouseEnter={() => setHoveredAction("exit")}
            onMouseLeave={() => setHoveredAction(null)}
            className="flex items-center gap-2 px-3.5 py-[6px] rounded-lg text-sm font-medium transition-all duration-150"
            style={getActionStyle(hoveredAction === "exit")}
          >
            <LogOut size={14} />
            Sair
          </button>
        </div>

      </div>
    </header>
  );
});
