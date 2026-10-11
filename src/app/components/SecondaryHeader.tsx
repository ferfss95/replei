/**
 * SecondaryHeader
 * Cabeçalho de conteúdo — sempre presente em todas as etapas.
 *
 * Esquerda : Ícone + Título da análise (na etapa de seleção o título é o próprio
 *            seletor de tipo de análise — `titleSlot`)
 * Direita  : Bolinha + Texto orientador (etapas 1–3) | Slot para action buttons (etapa Resultado)
 */

import React from "react";
import { BarChart3, ScanSearch, CalendarSync, ArrowLeftRight, Clock } from "lucide-react";
import type { Step } from "../constants";
import type { AnalysisMode } from "../types/wizard";
import { UI } from "../constants/uiTheme";

/** Títulos simplificados por modo de análise — exibidos no secondary header */
export const ANALYSIS_TITLES: Record<AnalysisMode, string> = {
  padrao: "Análise Consolidada",
  capacidade_exposicao: "Análise de Capacidade de Exposição",
  evolucao: "Análise de Evolução Temporal",
  comparativo: "Análise Comparativa de Períodos",
  horaahora: "Análise por Hora",
};

interface SecondaryHeaderProps {
  currentStep: Step;
  analysisMode: AnalysisMode;
  /** Recebido mas não usado na exibição — título é derivado de analysisMode */
  title?: string;
  /** Substitui o título fixo (ex.: seletor de tipo de análise na etapa de seleção). */
  titleSlot?: React.ReactNode;
  /** Callback que recebe o elemento DOM onde os action buttons do Resultado serão portados */
  onActionsMount: (el: HTMLDivElement | null) => void;
}

const STEP_GUIDANCE: Partial<Record<Step, string>> = {
  selection: "Quais dados deseja analisar?",
  grouping: "Quais atributos devem compor as linhas da tabela?",
  exclusion: "Quais dados devem ser desconsiderados?",
};

const ICON_PROPS = {
  size: 22,
  strokeWidth: 1.75,
  style: { color: "#52525B", flexShrink: 0 },
} as const;

export const SecondaryHeader = React.memo(function SecondaryHeader({
  currentStep,
  analysisMode,
  titleSlot,
  onActionsMount,
}: SecondaryHeaderProps) {
  const isAnalysis = currentStep === "analysis";
  const guidanceText = STEP_GUIDANCE[currentStep];

  return (
    <div className="flex h-[60px] flex-none items-center justify-between px-6">
      {/* ── Esquerda: Ícone + Título ── */}
      <div className="flex min-w-0 items-center" style={{ gap: 10 }}>
        {analysisMode === "padrao" && <ScanSearch {...ICON_PROPS} />}
        {analysisMode === "capacidade_exposicao" && (
          <BarChart3 {...ICON_PROPS} />
        )}
        {analysisMode === "evolucao" && <CalendarSync {...ICON_PROPS} />}
        {analysisMode === "comparativo" && <ArrowLeftRight {...ICON_PROPS} />}
        {analysisMode === "horaahora" && <Clock {...ICON_PROPS} />}

        {titleSlot ?? (
          <span
            className="truncate"
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: UI.title,
              lineHeight: "32px",
              letterSpacing: "-0.01em",
            }}
          >
            {ANALYSIS_TITLES[analysisMode]}
          </span>
        )}
      </div>

      {/* ── Direita: texto orientador (etapas 1–3) | slot de actions (Resultado) ── */}
      {isAnalysis ? (
        <div ref={onActionsMount} className="flex shrink-0 items-center gap-2" />
      ) : (
        <div className="flex shrink-0 items-center gap-2">
          <span
            aria-hidden
            className="rounded-full"
            style={{ width: 4, height: 4, backgroundColor: UI.muted }}
          />
          <span style={{ fontSize: 15, color: "#52525B", lineHeight: "20px", textAlign: "right" }}>
            {guidanceText}
          </span>
        </div>
      )}
    </div>
  );
});
