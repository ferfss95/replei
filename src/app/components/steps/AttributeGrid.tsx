import React from "react";
import { Filter, Anchor, Ban } from "lucide-react";
import { cn } from "../../utils";
import { LOCATION_ATTRIBUTES, type Step, type Module } from "../../constants";
import { ScrollableRow } from "../ScrollableRow";
import { AttributeCard as SmartAttributeCard } from "../AttributeCard";
import type { ModuleConfig } from "../../modules/types";

interface AttributeGridProps {
  currentStep: Step;
  currentModule: Module;
  currentModuleConfig: ModuleConfig;
  selections: Record<string, string[]>;
  setSelections: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
  grouping: string[];
  exclusions: Record<string, string[]>;
  setExclusions: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
  getAttributeOptions: (attrId: string) => string[];
  handleAttributeClick: (attrId: string) => void;
}

export const AttributeGrid = React.memo<AttributeGridProps>(function AttributeGrid({
  currentStep,
  currentModule,
  currentModuleConfig,
  selections,
  setSelections,
  grouping,
  exclusions,
  setExclusions,
  getAttributeOptions,
  handleAttributeClick,
}: AttributeGridProps) {
  return (
    <div className="bg-white rounded-xl border border-[#d5dbe3] shadow-[0_1px_4px_rgba(0,0,0,0.06)] flex flex-col overflow-hidden shrink-0">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center gap-3 flex-none">
        {currentStep === "selection" && (
          <Filter size={16} className="text-[#90A1B9]" />
        )}
        {currentStep === "grouping" && (
          <Anchor size={16} className="text-[#90A1B9]" />
        )}
        {currentStep === "exclusion" && (
          <Ban size={16} className="text-[#90A1B9]" />
        )}
        <span className="text-[14px] font-bold uppercase text-[rgb(49,65,88)] tracking-[1.2px]">
          {currentStep === "selection" && "Selecionar Atributos"}
          {currentStep === "grouping" && "Agrupar Atributos"}
          {currentStep === "exclusion" && "Excluir Atributos"}
        </span>
      </div>

      {/* Description */}
      <div className="bg-white px-6 pb-3 flex items-center gap-2 flex-none">
        <div className="w-1 h-1 bg-slate-400 rounded-full flex-none" />
        <p className="text-[11px] text-slate-500">
          {currentStep === "selection" && "Quais dados deseja analisar?"}
          {currentStep === "grouping" &&
            "Por quais dados gostaria de visualizar o resultado? (Primeira coluna). No máximo 3 níveis de detalhamento."}
          {currentStep === "exclusion" && "Quais dados devem ser desconsiderados?"}
        </p>
      </div>

      {/* Content with ScrollableRow */}
      <div className="px-6 py-6">
        <div className="space-y-8">
          {/* Domain attributes */}
          <div>
            {currentModuleConfig.domainSectionLabel && (
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-medium uppercase tracking-[1.12px] text-slate-400">
                  {currentModuleConfig.domainSectionLabel}
                </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
            )}
            <ScrollableRow>
              {currentModuleConfig.domainAttributes.map((attr) => (
                <SmartAttributeCard
                  key={attr.id}
                  attribute={{ ...attr, options: getAttributeOptions(attr.id) }}
                  step={currentStep}
                  selectionCount={selections[attr.id]?.length || 0}
                  isGrouped={grouping.includes(attr.id)}
                  groupLevel={grouping.indexOf(attr.id) + 1}
                  exclusionCount={exclusions[attr.id]?.length || 0}
                  onToggleGroup={() => handleAttributeClick(attr.id)}
                  onUpdateSelection={(vals) =>
                    setSelections((prev) => ({ ...prev, [attr.id]: vals }))
                  }
                  onUpdateExclusion={(vals) =>
                    setExclusions((prev) => ({ ...prev, [attr.id]: vals }))
                  }
                  currentSelection={selections[attr.id] || []}
                  currentExclusion={exclusions[attr.id] || []}
                />
              ))}
            </ScrollableRow>
          </div>

          {/* Localização (only shown for modules that use separate location section) */}
          {currentModule === "PRODUTO" && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-medium uppercase tracking-[1.12px] text-slate-400">
                  Localização
                </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              <ScrollableRow>
                {LOCATION_ATTRIBUTES.map((attr) => (
                  <SmartAttributeCard
                    key={attr.id}
                    attribute={{ ...attr, options: getAttributeOptions(attr.id) }}
                    step={currentStep}
                    selectionCount={selections[attr.id]?.length || 0}
                    isGrouped={grouping.includes(attr.id)}
                    groupLevel={grouping.indexOf(attr.id) + 1}
                    exclusionCount={exclusions[attr.id]?.length || 0}
                    onToggleGroup={() => handleAttributeClick(attr.id)}
                    onUpdateSelection={(vals) =>
                      setSelections((prev) => ({ ...prev, [attr.id]: vals }))
                    }
                    onUpdateExclusion={(vals) =>
                      setExclusions((prev) => ({ ...prev, [attr.id]: vals }))
                    }
                    currentSelection={selections[attr.id] || []}
                    currentExclusion={exclusions[attr.id] || []}
                    tooltip={attr.tooltip || ""}
                  />
                ))}
              </ScrollableRow>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
