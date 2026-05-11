import React from "react";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import type { MetricDef, ModuleConfig } from "../modules/types";
import { getMetricDictionaryEntry } from "../data/metricDictionary";
import { cn } from "../utils";
import { stripAccents } from "../utils/searchNormalize";
import { buildMetricGlossarySections } from "../utils/metricGlossaryLayout";

function glossaryHaystack(def: MetricDef, dictionaryText: { description: string; formula: string }): string {
  return stripAccents(
    [def.id, def.label, def.tooltip ?? "", dictionaryText.description, dictionaryText.formula]
      .join(" ")
      .toLowerCase(),
  );
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
  const [glossarySearchQuery, setGlossarySearchQuery] = React.useState("");

  React.useEffect(() => {
    if (!open) setGlossarySearchQuery("");
  }, [open]);

  React.useEffect(() => {
    setGlossarySearchQuery("");
  }, [moduleConfig.id]);

  const sections = React.useMemo(() => buildMetricGlossarySections(moduleConfig), [moduleConfig]);

  const normQuery = React.useMemo(() => {
    const t = glossarySearchQuery.trim();
    return t ? stripAccents(t.toLowerCase()) : "";
  }, [glossarySearchQuery]);

  const matchesSearch = React.useCallback(
    (metricId: string) => {
      if (!normQuery) return true;
      const def = moduleConfig.metrics.find((m) => m.id === metricId);
      if (!def) return false;
      const entry = getMetricDictionaryEntry(metricId);
      return glossaryHaystack(def, entry).includes(normQuery);
    },
    [moduleConfig, normQuery],
  );

  const visibleSections = React.useMemo(() => {
    return sections
      .map((section) => ({
        ...section,
        metricIds: section.metricIds.filter((id) => matchesSearch(id)),
      }))
      .filter((s) => s.metricIds.length > 0);
  }, [sections, matchesSearch]);

  const hasQuery = normQuery.length > 0;
  const emptySearch = hasQuery && visibleSections.length === 0;

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

        <div className="shrink-0 border-b border-slate-100 px-6 py-3">
          <div className="relative">
            <Search
              size={14}
              className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400"
              aria-hidden
            />
            <Input
              value={glossarySearchQuery}
              onChange={(e) => setGlossarySearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setGlossarySearchQuery("");
              }}
              placeholder="Buscar no glossário…"
              aria-label="Buscar métricas no glossário"
              className="h-9 border-slate-200 bg-white pl-8 text-sm shadow-none placeholder:text-slate-400 focus-visible:border-slate-400 focus-visible:ring-slate-200"
            />
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-4">
          {emptySearch ? (
            <p className="py-10 text-center text-sm leading-relaxed text-slate-500">
              Nenhum resultado para &ldquo;{glossarySearchQuery.trim()}&rdquo;.
            </p>
          ) : (
            <div className="space-y-8">
              {visibleSections.map((section) => (
                <section key={section.key} className="space-y-3">
                  <div className="rounded-lg border border-slate-200 border-l-4 border-l-slate-600 bg-gradient-to-r from-slate-100 to-slate-50/80 px-3.5 py-3 shadow-sm">
                    <h3 className="text-[15px] font-extrabold uppercase tracking-wide text-slate-900">
                      {section.title}
                    </h3>
                    {section.subtitle ? (
                      <p className="mt-1.5 text-xs font-bold leading-snug text-slate-700">
                        {section.subtitle}
                      </p>
                    ) : null}
                  </div>
                  <ul className="space-y-3">
                    {section.metricIds.map((metricId) => {
                      const def = moduleConfig.metrics.find((m) => m.id === metricId);
                      if (!def) return null;
                      const entry = getMetricDictionaryEntry(metricId);
                      return (
                        <li
                          key={metricId}
                          className="rounded-lg border border-slate-100 bg-slate-50/60 p-4 shadow-sm"
                        >
                          <h4 className="text-[15px] font-semibold text-slate-900">{def.label}</h4>
                          <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                            {entry.description}
                          </p>
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
                </section>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
});
