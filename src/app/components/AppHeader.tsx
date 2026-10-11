import React, { useState } from "react";
import { ChevronRight, ChevronDown, Trash2, LogOut } from "lucide-react";
import { motion } from "motion/react";
import * as Popover from "@radix-ui/react-popover";
import { MODULES, STEPS, type Step, type Module } from "../constants";
import { getModuleTitle } from "../constants/labels";
import { tint } from "../constants/uiTheme";
import { Logo } from "./Logo";
import { LockedTooltip } from "./LockedTooltip";
import { InteractiveMandala } from "./InteractiveMandala";
import {
  SELECTION_MENU_CONTENT_CLASS,
  SelectionMenuPanel,
  SelectionOptionCard,
} from "./SelectionOptionCard";
import type { AnalysisMode } from "../types/wizard";

interface AppHeaderProps {
  currentModule: Module;
  currentStep: Step;
  analysisMode: AnalysisMode;
  moduleColors: { primaryColor: string; highlightColor: string; iconColor?: string };
  isSelectionConfigured: boolean;
  isGroupingConfigured: boolean;
  isExclusionConfigured: boolean;
  /** Pelo menos uma métrica marcada no menu lateral (vale para todos os módulos). */
  hasAtLeastOneMetricSelected: boolean;
  isComparativoPeriodDefined: boolean;
  handleStepChange: (step: Step) => void;
  onClear: () => void;
  onExit?: () => void;
  /** Troca de módulo pelo seletor ao lado do nome (mesma ação da mandala). */
  onModuleChange?: (module: Module) => void;
  /** Troca de módulo só é permitida na etapa de seleção (igual à mandala). */
  canChangeModule?: boolean;
}

/** Descrição de cada módulo no menu "Alterar Módulo". */
const MODULE_DESCRIPTIONS: Record<Module, string> = {
  PRODUTO: "Desempenho de produtos e suas relações",
  LOJA: "Desempenho do varejo físico",
  EXTRAVIOS: "Gestão e localização de perdas",
  INDICADORES: "Principais KPIs da companhia",
};

const STEP_BTN_CLASS =
  "flex min-w-[130px] items-center justify-center rounded-[10px] px-5 py-[9px] text-[14px] font-bold transition-all duration-150";

export const AppHeader = React.memo<AppHeaderProps>(function AppHeader({
  currentModule,
  currentStep,
  analysisMode,
  moduleColors,
  isSelectionConfigured,
  isGroupingConfigured,
  isExclusionConfigured,
  hasAtLeastOneMetricSelected,
  isComparativoPeriodDefined,
  handleStepChange,
  onClear,
  onExit,
  onModuleChange,
  canChangeModule = false,
}: AppHeaderProps) {
  const [hoveredStep, setHoveredStep] = useState<Step | null>(null);
  const [hoveredAction, setHoveredAction] = useState<"clear" | "exit" | null>(null);
  const [moduleMenuOpen, setModuleMenuOpen] = useState(false);

  const { primaryColor, highlightColor } = moduleColors;
  const iconColor = moduleColors.iconColor ?? primaryColor;
  const highlightShadow = tint(highlightColor, 0.35);

  // ── Estilos dinâmicos para os botões do stepper ──────────────────────────
  const getStepStyle = (isActive: boolean, isLocked: boolean, isHovered: boolean) => {
    if (isLocked) {
      return {
        backgroundColor: "rgba(255,255,255,0.18)",
        color: "rgba(255,255,255,0.6)",
        border: "1px solid transparent",
        cursor: "not-allowed",
      } as React.CSSProperties;
    }
    if (isActive) {
      return {
        backgroundColor: "#FFFFFF",
        color: primaryColor,
        border: "1px solid #FFFFFF",
        boxShadow: isHovered ? `0 0 0 3px ${highlightShadow}` : "0 1px 2px rgba(0,0,0,0.08)",
        cursor: "pointer",
      } as React.CSSProperties;
    }
    // Default / Past
    return {
      backgroundColor: isHovered ? "rgba(255,255,255,0.12)" : "transparent",
      color: "#FFFFFF",
      border: "1px solid rgba(255,255,255,0.9)",
      boxShadow: isHovered ? `0 0 0 3px ${highlightShadow}` : undefined,
      cursor: "pointer",
    } as React.CSSProperties;
  };

  // ── Estilos dinâmicos para os botões de ação (Limpar / Sair) ─────────────
  const getActionStyle = (isHovered: boolean) =>
    ({
      backgroundColor: isHovered ? "rgba(255,255,255,0.14)" : "transparent",
      color: "#FFFFFF",
      cursor: "pointer",
    }) as React.CSSProperties;

  const moduleTitle = (
    <motion.div
      key={currentModule}
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-1.5"
    >
      <h1 className="text-[17px] font-medium uppercase tracking-[1px] text-white">
        {getModuleTitle(currentModule)}
      </h1>
      {onModuleChange && (
        <ChevronDown
          size={16}
          strokeWidth={2.25}
          className="text-white/90 transition-transform duration-200"
          style={{ transform: moduleMenuOpen ? "rotate(180deg)" : undefined }}
        />
      )}
    </motion.div>
  );

  return (
    <div className="flex-none px-1.5 pt-1.5">
      <header
        className="rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.12)]"
        style={{ backgroundColor: primaryColor }}
      >
        <div className="flex items-center justify-between px-6" style={{ height: 62 }}>
          {/* ── Esquerda: Logo + Módulo ── */}
          <div className="flex shrink-0 items-center gap-4">
            <Logo color="#FFFFFF" />
            <span className="shrink-0 text-[18px] font-light" style={{ color: "rgba(255,255,255,0.7)" }}>
              |
            </span>
            {onModuleChange ? (
              <Popover.Root open={moduleMenuOpen} onOpenChange={setModuleMenuOpen}>
                <Popover.Trigger asChild>
                  <button
                    type="button"
                    disabled={!canChangeModule}
                    className="rounded-md px-1 py-0.5 transition-colors enabled:hover:bg-white/10 disabled:cursor-default"
                    title={canChangeModule ? "Trocar módulo" : "A troca de módulo é feita na etapa de seleção"}
                  >
                    {moduleTitle}
                  </button>
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content
                    className={SELECTION_MENU_CONTENT_CLASS}
                    sideOffset={10}
                    align="start"
                  >
                    <SelectionMenuPanel title="Alterar Módulo">
                      {MODULES.map((m) => {
                        const active = m === currentModule;
                        return (
                          <SelectionOptionCard
                            key={m}
                            selected={active}
                            onClick={() => {
                              setModuleMenuOpen(false);
                              if (!active) onModuleChange(m);
                            }}
                            icon={
                              // Miniatura da mandala com a fatia do módulo destacada (cor do módulo).
                              <span className="pointer-events-none block h-[42px] w-[42px]" aria-hidden>
                                <InteractiveMandala selectedModule={m} onModuleSelect={() => {}} />
                              </span>
                            }
                            title={getModuleTitle(m)}
                            titleClassName="uppercase tracking-[0.3px]"
                            description={MODULE_DESCRIPTIONS[m]}
                            accentColor={primaryColor}
                            accentTextColor={iconColor}
                          />
                        );
                      })}
                    </SelectionMenuPanel>
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            ) : (
              moduleTitle
            )}
          </div>

          {/* ── Centro: Stepper ── */}
          <div className="flex flex-1 items-center justify-center">
            <div className="flex items-center" style={{ gap: 10 }}>
              {STEPS.map((step, index) => {
                const isActive = step.id === currentStep;
                const isAnalysisEnabled =
                  isSelectionConfigured &&
                  isGroupingConfigured &&
                  hasAtLeastOneMetricSelected &&
                  isComparativoPeriodDefined;
                const isLocked = step.id === "analysis" && !isAnalysisEnabled;
                const isHovered = hoveredStep === step.id;

                const lockedReqs: string[] = [];
                if (!isSelectionConfigured)
                  lockedReqs.push("selecionar ao menos um atributo");
                if (!isGroupingConfigured)
                  lockedReqs.push("definir um agrupamento");
                if (!hasAtLeastOneMetricSelected)
                  lockedReqs.push("selecionar ao menos uma métrica no menu lateral");
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
                        className={STEP_BTN_CLASS}
                        style={getStepStyle(isActive, isLocked, isHovered)}
                      >
                        {step.label}
                      </button>
                    </LockedTooltip>

                    {index < STEPS.length - 1 && (
                      <ChevronRight
                        size={15}
                        strokeWidth={2}
                        style={{ color: "rgba(255,255,255,0.55)", flexShrink: 0 }}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* ── Direita: ações ── */}
          <div className="flex shrink-0 items-center" style={{ gap: 8 }}>
            <button
              onClick={onClear}
              onMouseEnter={() => setHoveredAction("clear")}
              onMouseLeave={() => setHoveredAction(null)}
              className="flex items-center gap-1.5 rounded-lg px-3 py-[7px] text-[14px] font-bold transition-all duration-150"
              style={getActionStyle(hoveredAction === "clear")}
            >
              <Trash2 size={15} strokeWidth={2} />
              Limpar
            </button>

            <button
              onClick={onExit}
              onMouseEnter={() => setHoveredAction("exit")}
              onMouseLeave={() => setHoveredAction(null)}
              className="flex items-center gap-1.5 rounded-lg px-3 py-[7px] text-[14px] font-bold transition-all duration-150"
              style={getActionStyle(hoveredAction === "exit")}
            >
              <LogOut size={15} strokeWidth={2} />
              Sair
            </button>
          </div>
        </div>
      </header>
    </div>
  );
});
