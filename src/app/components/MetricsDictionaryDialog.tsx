import React from "react";
import { BookOpen, ChevronRight, LifeBuoy, Map, MessageCircle, Search } from "lucide-react";
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
import {
  HELP_FAQ_ITEMS,
  HELP_QUICK_LINKS,
  HELP_SPOTLIGHTS,
  helpFaqMatches,
  helpQuickLinkMatches,
  helpSpotlightMatches,
} from "../data/helpCenterMock";
import { cn } from "../utils";
import { stripAccents } from "../utils/searchNormalize";
import { buildMetricGlossarySections } from "../utils/metricGlossaryLayout";

function glossaryHaystack(
  def: MetricDef,
  dictionaryText: { description: string; formula: string },
): string {
  return stripAccents(
    [def.id, def.label, def.tooltip ?? "", dictionaryText.description, dictionaryText.formula]
      .join(" ")
      .toLowerCase(),
  );
}

const spotlightVariantClass: Record<
  (typeof HELP_SPOTLIGHTS)[number]["variant"],
  { card: string; iconWrap: string }
> = {
  orange: {
    card: "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-md shadow-orange-500/25",
    iconWrap: "bg-white/20 text-white",
  },
  teal: {
    card: "bg-gradient-to-br from-teal-600 to-teal-700 text-white shadow-md shadow-teal-600/25",
    iconWrap: "bg-white/20 text-white",
  },
  slate: {
    card: "bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-md shadow-slate-900/30",
    iconWrap: "bg-white/15 text-white",
  },
};

function SpotlightIcon({ variant }: { variant: (typeof HELP_SPOTLIGHTS)[number]["variant"] }) {
  const wrap = "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl";
  const cls = spotlightVariantClass[variant].iconWrap;
  if (variant === "orange") {
    return (
      <div className={cn(wrap, cls)} aria-hidden>
        <BookOpen size={20} strokeWidth={2} />
      </div>
    );
  }
  if (variant === "teal") {
    return (
      <div className={cn(wrap, cls)} aria-hidden>
        <Map size={20} strokeWidth={2} />
      </div>
    );
  }
  return (
    <div className={cn(wrap, cls)} aria-hidden>
      <LifeBuoy size={20} strokeWidth={2} />
    </div>
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
  const [helpSearchQuery, setHelpSearchQuery] = React.useState("");

  React.useEffect(() => {
    if (!open) setHelpSearchQuery("");
  }, [open]);

  React.useEffect(() => {
    setHelpSearchQuery("");
  }, [moduleConfig.id]);

  const sections = React.useMemo(() => buildMetricGlossarySections(moduleConfig), [moduleConfig]);

  const normQuery = React.useMemo(() => {
    const t = helpSearchQuery.trim();
    return t ? stripAccents(t.toLowerCase()) : "";
  }, [helpSearchQuery]);

  const matchesMetricSearch = React.useCallback(
    (metricId: string) => {
      if (!normQuery) return true;
      const def = moduleConfig.metrics.find((m) => m.id === metricId);
      if (!def) return false;
      const entry = getMetricDictionaryEntry(metricId);
      return glossaryHaystack(def, entry).includes(normQuery);
    },
    [moduleConfig, normQuery],
  );

  const visibleMetricSections = React.useMemo(() => {
    return sections
      .map((section) => ({
        ...section,
        metricIds: section.metricIds.filter((id) => matchesMetricSearch(id)),
      }))
      .filter((s) => s.metricIds.length > 0);
  }, [sections, matchesMetricSearch]);

  const filteredSpotlights = React.useMemo(
    () => HELP_SPOTLIGHTS.filter((s) => helpSpotlightMatches(s, normQuery)),
    [normQuery],
  );
  const filteredQuickLinks = React.useMemo(
    () => HELP_QUICK_LINKS.filter((l) => helpQuickLinkMatches(l, normQuery)),
    [normQuery],
  );
  const filteredFaq = React.useMemo(
    () => HELP_FAQ_ITEMS.filter((f) => helpFaqMatches(f, normQuery)),
    [normQuery],
  );

  const hasQuery = normQuery.length > 0;
  const hasAnySearchHit =
    visibleMetricSections.length > 0 ||
    filteredSpotlights.length > 0 ||
    filteredQuickLinks.length > 0 ||
    filteredFaq.length > 0;
  const emptySearch = hasQuery && !hasAnySearchHit;

  const renderMetricSectionsBlock = (heading: string) => (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-3 border-b border-slate-200 pb-2">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">{heading}</h2>
        <span className="text-[11px] font-medium text-slate-400">{moduleConfig.label}</span>
      </div>
      {visibleMetricSections.length === 0 ? (
        <p className="text-sm text-slate-500">
          {hasQuery ? "Nenhuma métrica corresponde à busca." : "Não há métricas para exibir neste módulo."}
        </p>
      ) : (
        visibleMetricSections.map((section) => (
          <section key={section.key} className="space-y-3">
            <div className="rounded-lg border border-slate-200 border-l-4 border-l-slate-600 bg-gradient-to-r from-slate-100 to-slate-50/80 px-3.5 py-3 shadow-sm">
              <h3 className="text-[15px] font-semibold text-slate-900">{section.title}</h3>
              {section.subtitle ? (
                <p className="mt-1.5 text-xs font-semibold leading-snug text-slate-700">{section.subtitle}</p>
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
          </section>
        ))
      )}
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "flex max-h-[min(90vh,820px)] w-[calc(100%-1.25rem)] max-w-3xl flex-col gap-0 overflow-hidden p-0 sm:max-w-3xl",
          "border-slate-200 shadow-xl",
        )}
        aria-describedby="help-center-main-desc"
      >
        <div className="h-1 w-full shrink-0" style={{ backgroundColor: accentColor }} aria-hidden />

        <DialogHeader className="shrink-0 space-y-3 border-b border-slate-100 px-6 pt-6 pb-5 text-center sm:text-left">
          <div
            className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-orange-400 via-amber-400 to-teal-500 sm:mx-0"
            aria-hidden
          />
          <DialogTitle className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Ajuda e suporte
          </DialogTitle>
          <DialogDescription
            id="help-center-main-desc"
            className="text-left text-sm leading-relaxed text-slate-600"
          >
            Central de ajuda do <span className="font-medium text-slate-800">REPLEI</span> neste
            protótipo: guias rápidos, perguntas frequentes e o{" "}
            <span className="font-medium text-slate-800">glossário de métricas</span> do módulo{" "}
            <span className="font-medium text-slate-800">{moduleConfig.label}</span>, com as mesmas
            seções do menu lateral. Use a busca para localizar tópicos ou indicadores.
          </DialogDescription>
        </DialogHeader>

        <div className="shrink-0 border-b border-slate-100 bg-slate-50/80 px-6 py-3">
          <div className="relative">
            <Search
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              aria-hidden
            />
            <Input
              value={helpSearchQuery}
              onChange={(e) => setHelpSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setHelpSearchQuery("");
              }}
              placeholder="Buscar na ajuda, guias ou métricas…"
              aria-label="Buscar na central de ajuda"
              className="h-10 border-slate-200 bg-white pl-10 text-sm shadow-none placeholder:text-slate-400 focus-visible:border-slate-400 focus-visible:ring-slate-200"
            />
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto bg-[#f8fafc] px-6 py-5">
          {emptySearch ? (
            <p className="py-12 text-center text-sm leading-relaxed text-slate-500">
              Nenhum resultado para &ldquo;{helpSearchQuery.trim()}&rdquo;. Tente outro termo ou limpe a
              busca para ver todos os tópicos.
            </p>
          ) : (
            <div className="space-y-10">
              {!hasQuery && (
                <>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {filteredSpotlights.map((card) => (
                      <div
                        key={card.id}
                        className={cn(
                          "flex min-h-[148px] flex-col rounded-2xl p-4 text-left transition-transform duration-200",
                          spotlightVariantClass[card.variant].card,
                        )}
                      >
                        <div className="mb-3 flex items-start justify-between gap-2">
                          <SpotlightIcon variant={card.variant} />
                        </div>
                        <h3 className="text-[15px] font-semibold leading-snug">{card.title}</h3>
                        <p className="mt-2 text-[13px] leading-relaxed text-white/90">{card.description}</p>
                        <span className="mt-auto pt-3 text-[11px] font-medium text-white/70">
                          Conteúdo ilustrativo · protótipo
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
                    <div className="border-b border-slate-100 px-4 py-3">
                      <h2 className="text-sm font-semibold text-slate-900">Ações rápidas</h2>
                      <p className="text-xs text-slate-500">Atalhos para temas comuns (dados mockados)</p>
                    </div>
                    <ul className="divide-y divide-slate-100">
                      {filteredQuickLinks.map((link) => (
                        <li key={link.id}>
                          <button
                            type="button"
                            className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-slate-50"
                            onClick={() => {
                              /* protótipo: sem navegação externa */
                            }}
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                              <MessageCircle size={18} strokeWidth={2} aria-hidden />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block text-sm font-medium text-slate-900">{link.title}</span>
                              <span className="mt-0.5 block text-xs leading-snug text-slate-500">
                                {link.subtitle}
                              </span>
                            </span>
                            <ChevronRight size={18} className="shrink-0 text-slate-300" aria-hidden />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {hasQuery && (filteredSpotlights.length > 0 || filteredQuickLinks.length > 0) && (
                <div className="space-y-3">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Guias e recursos
                  </h2>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {filteredSpotlights.map((card) => (
                      <div
                        key={card.id}
                        className={cn(
                          "rounded-xl p-3 text-left text-sm",
                          spotlightVariantClass[card.variant].card,
                        )}
                      >
                        <p className="font-semibold">{card.title}</p>
                        <p className="mt-1 text-[13px] leading-relaxed text-white/90">{card.description}</p>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-1.5">
                    {filteredQuickLinks.map((link) => (
                      <li
                        key={link.id}
                        className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm"
                      >
                        <ChevronRight className="mt-0.5 shrink-0 text-slate-400" size={16} aria-hidden />
                        <span>
                          <span className="font-medium text-slate-900">{link.title}</span>
                          <span className="mt-0.5 block text-xs text-slate-500">{link.subtitle}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(hasQuery ? filteredFaq.length > 0 : true) && (
                <div className="space-y-3">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Central de respostas
                  </h2>
                  <div className="space-y-2">
                    {(hasQuery ? filteredFaq : HELP_FAQ_ITEMS).map((item) => (
                      <details
                        key={item.id}
                        className="rounded-xl border border-slate-200 bg-white px-4 py-1 shadow-sm open:bg-white open:[&_summary_.faq-chevron]:rotate-90"
                      >
                        <summary className="cursor-pointer list-none py-3 text-sm font-medium text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden">
                          <span className="flex items-center justify-between gap-2">
                            {item.title}
                            <ChevronRight
                              size={18}
                              className="faq-chevron shrink-0 text-teal-600 transition-transform"
                              aria-hidden
                            />
                          </span>
                        </summary>
                        <p className="border-t border-slate-100 pb-3 pt-2 text-[13px] leading-relaxed text-slate-600">
                          {item.body}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {renderMetricSectionsBlock("Glossário de métricas")}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
});
