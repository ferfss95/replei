/**
 * SecondaryHeader
 * Cabeçalho de conteúdo com padding 24px — sempre presente em todas as etapas.
 *
 * Esquerda : Ícone (24px, #566878) + Título da análise (#314158, bold 18px)
 * Direita  : Bolinha 4×4 + Texto orientador (etapas 1–3) | Slot para action buttons (etapa Resultado)
 */

import React from "react";
import { BarChart3, TrendingUp, ArrowLeftRight, Clock } from "lucide-react";
import type { Step } from "../constants";
import type { AnalysisMode } from "../types/wizard";

/** Títulos simplificados por modo de análise — exibidos no secondary header */
const ANALYSIS_TITLES: Record<AnalysisMode, string> = {
  padrao: "Análise Geral",
  evolucao: "Análise Evolutiva",
  comparativo: "Análise Comparativa",
  horaahora: "Análise Intraday",
};

interface SecondaryHeaderProps {
  currentStep: Step;
  analysisMode: AnalysisMode;
  /** Recebido mas não usado na exibição — título é derivado de analysisMode */
  title?: string;
  /** Callback que recebe o elemento DOM onde os action buttons do Resultado serão portados */
  onActionsMount: (el: HTMLDivElement | null) => void;
}

const STEP_GUIDANCE: Partial<Record<Step, string>> = {
  selection: "Quais dados deseja analisar?",
  grouping: "Quais atributos devem compor as linhas da tabela?",
  exclusion: "Quais dados devem ser desconsiderados?",
};

export const SecondaryHeader = React.memo(function SecondaryHeader({
  currentStep,
  analysisMode,
  onActionsMount,
}: SecondaryHeaderProps) {
  const isAnalysis = currentStep === "analysis";
  const guidanceText = STEP_GUIDANCE[currentStep];

  return (
    <div
      className="flex-none flex items-center justify-between h-14 px-6"
    >
      {/* ── Esquerda: Ícone + Título ── */}
      <div className="flex items-center" style={{ gap: 8 }}>
        {analysisMode === "padrao" && (
          <BarChart3 size={20} strokeWidth={1.75} style={{ color: "#566878", flexShrink: 0 }} />
        )}
        {analysisMode === "evolucao" && (
          <TrendingUp size={20} strokeWidth={1.75} style={{ color: "#566878", flexShrink: 0 }} />
        )}
        {analysisMode === "comparativo" && (
          <ArrowLeftRight size={20} strokeWidth={1.75} style={{ color: "#566878", flexShrink: 0 }} />
        )}
        {analysisMode === "horaahora" && (
          <Clock size={20} strokeWidth={1.75} style={{ color: "#566878", flexShrink: 0 }} />
        )}

        <span
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#314158",
            lineHeight: "28px",
            letterSpacing: "-0.01em",
          }}
        >
          {ANALYSIS_TITLES[analysisMode]}
        </span>
      </div>

      {/* ── Direita: texto orientador (etapas 1–3) | slot de actions (Resultado) ── */}
      {isAnalysis ? (
        <div ref={onActionsMount} className="flex items-center gap-2 shrink-0" />
      ) : (
        <div className="flex items-center gap-2 shrink-0">
          <span
            aria-hidden
            className="rounded-full"
            style={{
              width: 4,
              height: 4,
              backgroundColor: "#808080",
            }}
          />
          <span
            style={{
              fontSize: 12,
              color: "#808080",
              lineHeight: "16px",
              textAlign: "right",
            }}
          >
            {guidanceText}
          </span>
        </div>
      )}
    </div>
  );
});
