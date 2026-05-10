import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import type { ModuleConfig } from "../modules/types";
import { getMetricDictionaryEntry } from "../data/metricDictionary";
import { cn } from "../utils";

function orderedMetricIds(config: ModuleConfig): string[] {
  const byId = new Map(config.metrics.map((m) => [m.id, m]));
  const seen = new Set<string>();
  const out: string[] = [];
  for (const id of config.metricDisplayOrder) {
    if (byId.has(id) && !seen.has(id)) {
      out.push(id);
      seen.add(id);
    }
  }
  for (const m of config.metrics) {
    if (!seen.has(m.id)) {
      out.push(m.id);
      seen.add(m.id);
    }
  }
  return out;
}

export interface MetricsDictionaryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  moduleConfig: ModuleConfig;
  /** Cor de destaque (módulo) para o cabeçalho */
  accentColor?: string;
}

export const MetricsDictionaryDialog = React.memo(function MetricsDictionaryDialog({
  open,
  onOpenChange,
  moduleConfig,
  accentColor = "#2563eb",
}: MetricsDictionaryDialogProps) {
  const ids = React.useMemo(() => orderedMetricIds(moduleConfig), [moduleConfig]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "flex max-h-[min(88vh,800px)] w-[calc(100%-1.5rem)] max-w-2xl flex-col gap-0 overflow-hidden p-0 sm:max-w-2xl",
          "border-slate-200 shadow-xl",
        )}
        aria-describedby="metrics-dictionary-desc"
      >
        <div
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: accentColor }}
          aria-hidden
        />
        <DialogHeader className="shrink-0 space-y-2 border-b border-slate-100 px-6 pt-6 pb-4 text-left">
          <DialogTitle className="text-lg font-semibold tracking-tight text-slate-900">
            Glossário de métricas
          </DialogTitle>
          <DialogDescription
            id="metrics-dictionary-desc"
            className="text-left text-sm leading-relaxed text-slate-600"
          >
            <span className="font-medium text-slate-700">{moduleConfig.label}</span>
            {" — "}
            Nome, descrição resumida e fórmula de referência. Valores neste protótipo são simulados; o
            detalhamento contábil/BI final segue a governança de dados da operação.
          </DialogDescription>
        </DialogHeader>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-4">
          <ul className="space-y-6">
            {ids.map((metricId) => {
              const def = moduleConfig.metrics.find((m) => m.id === metricId);
              if (!def) return null;
              const entry = getMetricDictionaryEntry(metricId);
              return (
                <li
                  key={metricId}
                  className="rounded-lg border border-slate-100 bg-slate-50/60 p-4 shadow-sm"
                >
                  <h4 className="text-[15px] font-semibold text-slate-900">{def.label}</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{entry.description}</p>
                  <div className="mt-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Fórmula / definição
                    </p>
                    <pre className="mt-1.5 whitespace-pre-wrap rounded-md border border-slate-200/80 bg-white px-3 py-2 font-mono text-[12px] leading-snug text-slate-800">
                      {entry.formula}
                    </pre>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
});
