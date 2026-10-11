import React from "react";
import { Filter, Anchor, Ban } from "lucide-react";
import {
  getVisibleLocationAttributes,
  MAX_GROUPING_LEVELS,
  type Module,
  type Step,
} from "../../constants";
import type { AnalysisMode } from "../../types/wizard";
import { ScrollableRow } from "../ScrollableRow";
import { AttributeCard as SmartAttributeCard } from "../AttributeCard";
import type { AttributeDef, ModuleConfig } from "../../modules/types";
import type { ModuleColors } from "../../constants/moduleColors";
import { UI, UI_CARD_CLASS } from "../../constants/uiTheme";

interface AttributeGridProps {
  currentStep: Step;
  currentModule: Module;
  currentModuleConfig: ModuleConfig;
  moduleColors: ModuleColors;
  selections: Record<string, string[]>;
  setSelections: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
  grouping: string[];
  exclusions: Record<string, string[]>;
  setExclusions: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
  getAttributeOptions: (attrId: string) => string[];
  handleAttributeClick: (attrId: string) => void;
  analysisMode?: AnalysisMode;
}

export const AttributeGrid = React.memo<AttributeGridProps>(function AttributeGrid({
  currentStep,
  currentModule,
  currentModuleConfig,
  moduleColors,
  selections,
  setSelections,
  grouping,
  exclusions,
  setExclusions,
  getAttributeOptions,
  handleAttributeClick,
  analysisMode,
}: AttributeGridProps) {
  const visibleLocationAttributes = getVisibleLocationAttributes(currentModule, analysisMode);
  /**
   * PRODUTO + "Capacidade de Exposição" oculta um subconjunto de atributos de
   * domínio (categoria, modalidade, subgrupo, marca, franquia, genero,
   * faixa_etaria, sabor).
   */
  const PRODUTO_CAPACIDADE_HIDDEN_DOMAIN_IDS = new Set([
    "categoria",
    "modalidade",
    "subgrupo",
    "marca",
    "franquia",
    "genero",
    "faixa_etaria",
    "sabor",
    "modelo",
    "cor",
    "tamanho",
  ]);
  const filterDomainForAnalysis = <T extends { id: string }>(attrs: T[]): T[] => {
    if (currentModule === "PRODUTO" && analysisMode === "capacidade_exposicao") {
      return attrs.filter((a) => !PRODUTO_CAPACIDADE_HIDDEN_DOMAIN_IDS.has(a.id));
    }
    return attrs;
  };
  const visibleDomainAttributes = filterDomainForAnalysis(
    currentModuleConfig.domainAttributes,
  );

  const renderCard = (attr: AttributeDef, tooltip?: string) => (
    <SmartAttributeCard
      key={attr.id}
      attribute={{ ...attr, options: getAttributeOptions(attr.id) }}
      step={currentStep}
      moduleColors={moduleColors}
      groupingLimitReached={
        currentStep === "grouping" && grouping.length >= MAX_GROUPING_LEVELS
      }
      selectionCount={selections[attr.id]?.length || 0}
      isGrouped={grouping.includes(attr.id)}
      groupLevel={grouping.indexOf(attr.id) + 1}
      exclusionCount={exclusions[attr.id]?.length || 0}
      onToggleGroup={() => handleAttributeClick(attr.id)}
      onUpdateSelection={(vals) => setSelections((prev) => ({ ...prev, [attr.id]: vals }))}
      onUpdateExclusion={(vals) => setExclusions((prev) => ({ ...prev, [attr.id]: vals }))}
      currentSelection={selections[attr.id] || []}
      currentExclusion={exclusions[attr.id] || []}
      tooltip={tooltip}
    />
  );

  /** Faixa com o rótulo da seção (PRODUTO / LOCALIZAÇÃO) + linha de pills. */
  const renderSection = (label: string, cards: React.ReactNode, key: string) => (
    <div key={key}>
      {label && (
      <div
        className="border-y px-6 py-3"
        style={{ backgroundColor: UI.sectionBand, borderColor: "#EFEFF1" }}
      >
        <span
          className="text-[13px] font-bold uppercase tracking-[0.4px]"
          style={{ color: moduleColors.iconColor }}
        >
          {label}
        </span>
      </div>
      )}
      <div className="px-6 py-4">
        <ScrollableRow wrap>{cards}</ScrollableRow>
      </div>
    </div>
  );

  return (
    <div className={`${UI_CARD_CLASS} flex shrink-0 flex-col overflow-hidden`}>
      {/* Header */}
      <div className="flex flex-none flex-wrap items-center gap-3 bg-white px-6 py-4">
        {currentStep === "selection" && (
          <Filter size={18} strokeWidth={2} style={{ color: UI.title }} />
        )}
        {currentStep === "grouping" && (
          <Anchor size={18} strokeWidth={2} style={{ color: UI.title }} />
        )}
        {currentStep === "exclusion" && (
          <Ban size={18} strokeWidth={2} style={{ color: UI.title }} />
        )}
        <span className="text-[16px] font-bold" style={{ color: UI.title }}>
          {currentStep === "selection" && "Selecionar atributos"}
          {currentStep === "grouping" && "Agrupar atributos"}
          {currentStep === "exclusion" && "Excluir atributos"}
        </span>
        {currentStep === "grouping" && (
          <span
            className="ml-1 rounded-full px-2 py-0.5 text-[12px] font-semibold tabular-nums"
            style={{ color: moduleColors.iconColor, backgroundColor: moduleColors.backgroundColor }}
            aria-live="polite"
          >
            {grouping.length}/{MAX_GROUPING_LEVELS}
          </span>
        )}
      </div>

      {/* Domain attributes */}
      {renderSection(
        currentModuleConfig.domainSectionLabel,
        visibleDomainAttributes.map((attr) => renderCard(attr)),
        "domain",
      )}

      {(currentModuleConfig.domainAttributeExtraRows ?? []).map((row, rowIdx) =>
        renderSection(
          row.sectionLabel,
          row.attributes.map((attr) => renderCard(attr)),
          `${row.sectionLabel}-${rowIdx}`,
        ),
      )}

      {/* Localização (only shown for modules that use separate location section) */}
      {currentModule === "PRODUTO" &&
        renderSection(
          "Localização",
          visibleLocationAttributes.map((attr) => renderCard(attr, attr.tooltip || "")),
          "localizacao",
        )}
    </div>
  );
});
