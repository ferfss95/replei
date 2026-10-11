import React, { useState } from "react";
import { motion } from "motion/react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { cn } from "./utils";
import { ModuleTransition } from "./components/ModuleTransition";
import {
  getWeekdayDatesInRange,
  MAX_WEEKLY_DAYS,
  type Module,
  type Step,
} from "./constants";
import {
  getDefaultsForPeriodType,
  getFirstDayOfMonthUntilYesterday,
  getTodayFormatted,
  getYesterdayFormatted,
  getCurrentWeekDatesUntilYesterday,
  getCurrentYearString,
  getLastMonthString,
} from "./dateUtils";
import { AnalysisView } from "./components/analysis/AnalysisView";
import { SelectionView } from "./components/steps/SelectionView";
import { AttributeGrid } from "./components/steps/AttributeGrid";
import { MetricsSidebar } from "./components/MetricsSidebar";
import { AppHeader } from "./components/AppHeader";
import { SecondaryHeader, ANALYSIS_TITLES } from "./components/SecondaryHeader";
import { AnalysisSelector } from "./components/AnalysisSelector";
import { UI } from "./constants/uiTheme";
import { AnalysisSummarySection } from "./components/AnalysisSummarySection";
import { IntradaySyncMetadata } from "./components/IntradaySyncMetadata";
import { getModuleColors } from "./constants/moduleColors";
import { useDateRange } from "./hooks/useDateRange";
import {
  getDefaultSelectedMetricsForModule,
  useModuleNavigator,
} from "./hooks/useModuleNavigator";
import { useAttributeFilters } from "./hooks/useAttributeFilters";
import type { AnalysisMode, AveragePeriodType, SharePctMode } from "./types/wizard";
import { CanalVisaoProvider, type CanalVisaoContextValue } from "./context/CanalVisaoContext";
import {
  CANAL_VISAO_DEFAULT,
  isCanalOmniModule,
  pruneOmniForVisao,
  type CanalVisao,
} from "./data/canalOmni";
import {
  ATRIBUTOS_BLOQUEADOS_DESTINO,
  getDigitalModoPadrao,
  isDigitalSelecionado,
  limparSelecoesDigital,
  type DigitalModo,
} from "./data/digitalOrigemDestino";

/** Defaults do accordion de métricas (alinhado a MetricsSidebar). Em PRODUTO só "Venda e Estoque" vem aberto. */
function getMetricsSidebarDefaultsForModule(module: Module): Record<string, boolean> {
  const base: Record<string, boolean> = {
    venda_estoque: true,
    planejamento: false,
  };
  if (module === "PRODUTO") {
    return { ...base, exposicao_produtos: false };
  }
  if (module === "EXTRAVIOS") {
    // EXTRAVIOS renderiza métricas flat (sem accordion).
    return {};
  }
  return { ...base };
}

export default function App() {
  // ─── UI/Step State ─────────────────────────────────────────────
  const [currentStep, setCurrentStep] = useState<Step>("selection");
  const [metricsCollapsed, setMetricsCollapsed] = useState(false);
  const [metricsGroupExpanded, setMetricsGroupExpanded] = useState<Record<string, boolean>>(() =>
    getMetricsSidebarDefaultsForModule("PRODUTO"),
  );
  const [analysisMode, setAnalysisMode] = useState<AnalysisMode>("padrao");
  const [averagePeriodType, setAveragePeriodType] = useState<AveragePeriodType>(null);
  const [averageDropdownOpen, setAverageDropdownOpen] = useState(false);
  const [sharePctMode, setSharePctMode] = useState<SharePctMode>("off");
  const [isGenerating, setIsGenerating] = useState(false);
  /** Métricas ativadas nas etapas 1–3; na etapa 4 a sidebar só lista este universo. */
  const [resultMetricCatalog, setResultMetricCatalog] = useState<string[]>([]);
  /** Etapa Calcular: seleção de métricas ainda não aplicada à tabela (null = sem alterações). */
  const [metricsDraft, setMetricsDraft] = useState<string[] | null>(null);
  /** Flag do CANAL (Operacional / Corporativo) — PRODUTO, LOJA e INDICADORES. */
  const [canalVisao, setCanalVisaoState] = useState<CanalVisao>(CANAL_VISAO_DEFAULT);
  /**
   * Origem do faturamento × Destino do pedido escolhido manualmente pelo usuário.
   * `null` = padrão pelo canal marcado (Digital → Destino; só Encomenda Expressa → Origem).
   */
  const [digitalModoEscolhido, setDigitalModoEscolhido] = useState<DigitalModo | null>(null);

  // ─── Module Navigation ─────────────────────────────────────────
  const {
    currentModule,
    currentModuleConfig,
    moduleTransitionKey,
    isTransitioning,
    selectedMetrics,
    setSelectedMetrics,
    handleModuleChange,
  } = useModuleNavigator({
    onAnalysisModeChange: setAnalysisMode,
    onAveragePeriodTypeChange: setAveragePeriodType,
  });

  const selectedMetricsRef = React.useRef(selectedMetrics);
  selectedMetricsRef.current = selectedMetrics;

  // ─── Date Range & MDSAA ────────────────────────────────────────
  const {
    periodType, setPeriodType, dailySubType, setDailySubType,
    dateRange, setDateRange,
    selectedMonths, setSelectedMonths,
    selectedYears, setSelectedYears,
    selectedSpecificDays, setSelectedSpecificDays,
    expandedYears, setExpandedYears,
    compDateRange1, setCompDateRange1,
    compDateRange2, setCompDateRange2,
    compMonths1, setCompMonths1,
    compMonths2, setCompMonths2,
    compYears1, setCompYears1,
    compYears2, setCompYears2,
    compSpecificDays1, setCompSpecificDays1,
    compSpecificDays2, setCompSpecificDays2,
    compExpandedYears1, setCompExpandedYears1,
    compExpandedYears2, setCompExpandedYears2,
    weeklyMode,
    weeklyDateRange,
    selectedWeekdays,
    compWeeklyRange1,
    compWeeklyRange2,
    compWeekdays1,
    compWeekdays2,
    mdsaaActive, setMdsaaActive,
    lyActive, setLyActive,
    monthsP2ScrollRef,
    handleManualP2DateRangeChange,
    handleManualP2SpecificDaysChange,
    handleManualP2MonthsChange,
    handleManualP2YearsChange,
  } = useDateRange({ analysisMode });

  // ─── Attribute Filters ─────────────────────────────────────────
  const {
    selections, setSelections,
    grouping, setGrouping,
    exclusions, setExclusions,
    getAttributeOptions,
    handleAttributeClick,
  } = useAttributeFilters({
    currentModuleConfig,
    currentStep,
    currentModule,
    analysisMode,
    canalVisao,
    digitalModoEscolhido,
  });

  // Digital Origem/Destino: ao mudar o modo (ou marcar/desmarcar o digital), descarta
  // o que deixou de valer — no Destino, LOJA/REGIONAL/NACIONAL ficam bloqueados.
  const digitalAtivo = isDigitalSelecionado(selections);
  const digitalModo: DigitalModo = digitalModoEscolhido ?? getDigitalModoPadrao(selections);
  const setDigitalModo = React.useCallback((modo: DigitalModo) => {
    setDigitalModoEscolhido(modo);
  }, []);
  // Desmarcou todos os canais digitais/EE: a próxima escolha volta ao padrão do canal.
  React.useEffect(() => {
    if (!digitalAtivo) setDigitalModoEscolhido(null);
  }, [digitalAtivo]);
  React.useEffect(() => {
    setSelections((prev) => limparSelecoesDigital(prev, digitalAtivo, digitalModo));
    setExclusions((prev) => limparSelecoesDigital(prev, digitalAtivo, digitalModo));
    if (digitalAtivo && digitalModo === "destino") {
      setGrouping((prev) =>
        prev.some((id) => ATRIBUTOS_BLOQUEADOS_DESTINO.has(id))
          ? prev.filter((id) => !ATRIBUTOS_BLOQUEADOS_DESTINO.has(id))
          : prev,
      );
    }
  }, [digitalAtivo, digitalModo, setSelections, setExclusions, setGrouping]);

  // Troca de visão: descarta OMNI que não existe mais para os canais escolhidos.
  const setCanalVisao = React.useCallback(
    (next: CanalVisao) => {
      setCanalVisaoState(next);
      setSelections((prev) => pruneOmniForVisao(prev, next, currentModule));
      setExclusions((prev) => pruneOmniForVisao(prev, next, currentModule));
    },
    [currentModule, setSelections, setExclusions],
  );

  const canalVisaoContext = React.useMemo<CanalVisaoContextValue>(
    () => ({
      enabled: isCanalOmniModule(currentModule),
      moduleId: currentModule,
      visao: canalVisao,
      setVisao: setCanalVisao,
      digitalAtivo,
      digitalModo,
      setDigitalModo,
    }),
    [currentModule, canalVisao, setCanalVisao, digitalAtivo, digitalModo, setDigitalModo],
  );

  // Regra de isolamento entre módulos:
  // ao trocar módulo, zera filtros/agrupamentos para evitar "vazamento" de contexto
  // (ex.: valores formatados de PRODUTO contaminando LOJA/INDICADORES).
  const previousModuleRef = React.useRef<Module | null>(null);
  React.useEffect(() => {
    if (previousModuleRef.current === null) {
      previousModuleRef.current = currentModule;
      return;
    }

    if (previousModuleRef.current !== currentModule) {
      setSelections({});
      setExclusions({});
      setGrouping([]);
      setCurrentStep("selection");
      setResultMetricCatalog([]);
      setMetricsGroupExpanded(getMetricsSidebarDefaultsForModule(currentModule));
    }

    previousModuleRef.current = currentModule;
  }, [currentModule, setSelections, setExclusions, setGrouping, setCurrentStep]);

  // Proteção extra: remove métricas inválidas ao trocar de módulo (default = nenhuma selecionada).
  React.useEffect(() => {
    const validMetricIds = new Set(currentModuleConfig.metrics.map((metric) => metric.id));

    setSelectedMetrics((prev) => prev.filter((metricId) => validMetricIds.has(metricId)));
  }, [currentModuleConfig, setSelectedMetrics]);

  // ─── Derived State ─────────────────────────────────────────────
  const isTimeDrilldownEnabled = analysisMode === "evolucao";
  const isPeriodEditable = currentStep === "selection";
  const currentAnalysisDisplayName =
    currentModuleConfig.analysisTitles[analysisMode] || "Análise de Venda e Estoque";
  const isSelectionConfigured = Object.keys(selections).some(
    (key) => selections[key]?.length > 0,
  );
  const isGroupingConfigured = grouping.length > 0;
  const isExclusionConfigured = Object.keys(exclusions).some(
    (key) => exclusions[key]?.length > 0,
  );

  const weeklyComputedDays = React.useMemo(
    () =>
      weeklyMode === "weekday"
        ? getWeekdayDatesInRange(weeklyDateRange.start, weeklyDateRange.end, selectedWeekdays)
        : [],
    [weeklyMode, weeklyDateRange, selectedWeekdays],
  );

  const compWeeklyComputedDays1 = React.useMemo(
    () => getWeekdayDatesInRange(compWeeklyRange1.start, compWeeklyRange1.end, compWeekdays1),
    [compWeeklyRange1, compWeekdays1],
  );
  const compWeeklyComputedDays2 = React.useMemo(
    () => getWeekdayDatesInRange(compWeeklyRange2.start, compWeeklyRange2.end, compWeekdays2),
    [compWeeklyRange2, compWeekdays2],
  );

  const isComparativoPeriodDefined =
    analysisMode !== "comparativo" ||
    (periodType === "Diário"
      ? dailySubType === "periodo"
        ? !!(compDateRange1.start && compDateRange1.end && compDateRange2.start && compDateRange2.end)
        : compSpecificDays1.length > 0 && compSpecificDays2.length > 0
      : periodType === "Mensal"
        ? compMonths1.length > 0 && compMonths2.length > 0
        : compYears1.length > 0 && compYears2.length > 0);

  // ─── Module theme colors ────────────────────────────────────────
  const moduleColors = getModuleColors(currentModule);

  // ─── Secondary Header: container para portal dos action buttons ─
  const [actionsContainer, setActionsContainer] = React.useState<HTMLDivElement | null>(null);
  const handleActionsMount = React.useCallback(
    (el: HTMLDivElement | null) => setActionsContainer(el),
    [],
  );

  // ─── Handlers ──────────────────────────────────────────────────
  const toggleMetricsGroup = (groupId: string) => {
    setMetricsGroupExpanded((prev) => ({ ...prev, [groupId]: !prev[groupId] }));
  };

  const toggleMetric = (metricId: string) => {
    const metricExistsInModule = currentModuleConfig.metrics.some((metric) => metric.id === metricId);
    if (!metricExistsInModule) return;

    // Etapa Calcular: marca/desmarca num rascunho; a tabela só muda em "Aplicar alterações".
    if (currentStep === "analysis") {
      setMetricsDraft((prev) => {
        const base = prev ?? selectedMetrics;
        return base.includes(metricId)
          ? base.filter((m) => m !== metricId)
          : [...base, metricId];
      });
      return;
    }

    setSelectedMetrics((prev) => {
      if (prev.includes(metricId)) {
        setResultMetricCatalog((catalog) => catalog.filter((id) => id !== metricId));
        return prev.filter((m) => m !== metricId);
      }
      setResultMetricCatalog((catalog) =>
        catalog.includes(metricId) ? catalog : [...catalog, metricId],
      );
      return [...prev, metricId];
    });
  };

  // Rascunho de métricas vale só enquanto o usuário está no Calcular do mesmo módulo.
  React.useEffect(() => {
    setMetricsDraft(null);
  }, [currentStep, currentModule]);

  /** Há diferença entre o rascunho e as métricas da tabela? */
  const hasPendingMetricChanges =
    metricsDraft !== null &&
    (metricsDraft.length !== selectedMetrics.length ||
      metricsDraft.some((id) => !selectedMetrics.includes(id)));

  /** Aplica o rascunho: inclui/remove as colunas de métricas da tabela. */
  const applyMetricsDraft = () => {
    if (!metricsDraft || metricsDraft.length === 0) return;
    const draft = metricsDraft;
    // Mantém a ordem das colunas existentes e acrescenta as novas ao final.
    const next = [
      ...selectedMetrics.filter((id) => draft.includes(id)),
      ...draft.filter((id) => !selectedMetrics.includes(id)),
    ];
    setSelectedMetrics(next);
    setResultMetricCatalog((catalog) => [...new Set([...catalog, ...next])]);
    setMetricsDraft(null);
  };

  const handleAnalysisModeChange = (mode: AnalysisMode) => {
    setAnalysisMode(mode);

    // Intraday sempre parte do dia corrente por padrão.
    if (mode === "horaahora") {
      const today = getTodayFormatted();
      setPeriodType("Diário");
      setDailySubType("periodo");
      setDateRange({ start: today, end: today });
    }

    // PRODUTO + Capacidade de Exposição: já vem com as 3 métricas dedicadas +
    // 2 colunas calculadas pelo sistema (% Capacidade Modelo/Cor e
    // % Capacidade Modelo/Cor/Tamanho) marcadas.
    if (mode === "capacidade_exposicao" && currentModule === "PRODUTO") {
      setSelectedMetrics([
        "cap_qtd_expositores",
        "cap_qtd_modelo_cor",
        "cap_pct_capacidade_mod_cor",
        "cap_qtd_modelo_cor_tam",
        "cap_pct_capacidade_mod_cor_tam",
      ]);
    }
  };

  const handleStepChange = (targetStep: Step) => {
    if (targetStep === currentStep) return;
    if (targetStep === "analysis") {
      const canOpenAnalysis =
        isSelectionConfigured &&
        isGroupingConfigured &&
        selectedMetrics.length > 0 &&
        isComparativoPeriodDefined;
      if (!canOpenAnalysis) return;

      setIsGenerating(true);
      setResultMetricCatalog((catalog) => [
        ...new Set([...catalog, ...selectedMetricsRef.current]),
      ]);
      setTimeout(() => {
        setIsGenerating(false);
        setCurrentStep("analysis");
        // Menu de Métricas fica aberto no Calcular para incluir/remover colunas.
        setMetricsCollapsed(false);
        setSharePctMode("off");
        setAveragePeriodType(null);
      }, 3000);
      return;
    }
    if (currentStep === "analysis") {
      setMetricsCollapsed(false);
    }
    setCurrentStep(targetStep);
  };

  const handleClear = () => {
    if (isSelectionConfigured || isGroupingConfigured || isExclusionConfigured) {
      setSelections({});
      setGrouping([]);
      setExclusions({});
      setCurrentStep("selection");
      setAnalysisMode("padrao");
      setSelectedMetrics(getDefaultSelectedMetricsForModule(currentModule));
      setResultMetricCatalog([]);
      setMetricsCollapsed(false);
      setMetricsGroupExpanded(getMetricsSidebarDefaultsForModule(currentModule));
      setAveragePeriodType(null);
      setAverageDropdownOpen(false);
      setSharePctMode("off");
      setCanalVisaoState(CANAL_VISAO_DEFAULT);
      setDigitalModoEscolhido(null);

      const resetDefaults = getDefaultsForPeriodType("Diário");
      const fallbackRange = {
        start: getFirstDayOfMonthUntilYesterday(),
        end: getYesterdayFormatted(),
      };
      setDateRange(resetDefaults.dateRange || fallbackRange);
      setPeriodType("Diário");
      setDailySubType("periodo");
      setSelectedMonths([getLastMonthString()]);
      setSelectedYears([getCurrentYearString()]);
      setCompDateRange1(resetDefaults.dateRange || fallbackRange);
      setCompDateRange2({ start: "", end: "" });
      setCompMonths1([getLastMonthString()]);
      setCompMonths2([]);
      setCompYears1([getCurrentYearString()]);
      setCompYears2([]);

      const fallbackDays = getCurrentWeekDatesUntilYesterday();
      setSelectedSpecificDays(resetDefaults.selectedSpecificDays || fallbackDays);
      setCompSpecificDays1(resetDefaults.selectedSpecificDays || fallbackDays);
      setCompSpecificDays2([]);
    }
  };

  return (
    <CanalVisaoProvider value={canalVisaoContext}>
    <RadixTooltip.Provider>
      {isTransitioning && <ModuleTransition />}
      <div
        className="h-screen overflow-hidden text-slate-900 font-sans flex flex-col"
        style={{ backgroundColor: UI.pageBg }}
      >
        <AppHeader
          currentModule={currentModule}
          currentStep={currentStep}
          analysisMode={analysisMode}
          moduleColors={moduleColors}
          isSelectionConfigured={isSelectionConfigured}
          isGroupingConfigured={isGroupingConfigured}
          isExclusionConfigured={isExclusionConfigured}
          hasAtLeastOneMetricSelected={selectedMetrics.length > 0}
          isComparativoPeriodDefined={isComparativoPeriodDefined}
          handleStepChange={handleStepChange}
          onClear={handleClear}
          onModuleChange={handleModuleChange}
          canChangeModule={currentStep === "selection"}
        />

        <motion.div
          className="flex-1 flex flex-col overflow-hidden relative"
          key={moduleTransitionKey}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
              {/* ── Secondary Header: largura total, fora da área de scroll ── */}
              <SecondaryHeader
                currentStep={currentStep}
                analysisMode={analysisMode}
                title={currentAnalysisDisplayName}
                titleSlot={
                  currentStep === "selection" ? (
                    <AnalysisSelector
                      variant="title"
                      titleLabel={ANALYSIS_TITLES[analysisMode]}
                      value={analysisMode}
                      onChange={(mode) => isPeriodEditable && handleAnalysisModeChange(mode)}
                      supportsHoraAHora={
                        currentModule === "LOJA" ||
                        currentModule === "INDICADORES" ||
                        currentModule === "PRODUTO"
                      }
                      supportsCapacidadeExposicao={false}
                      disabled={!isPeriodEditable}
                      accentColor={moduleColors.primaryColor}
                      accentTextColor={moduleColors.iconColor}
                    />
                  ) : undefined
                }
                onActionsMount={handleActionsMount}
              />

              <div className="flex-none px-6 pb-4">
                <AnalysisSummarySection
                  moduleConfig={currentModuleConfig}
                  selections={selections}
                  exclusions={exclusions}
                  grouping={grouping}
                  analysisMode={analysisMode}
                  periodType={periodType}
                  dateRange={dateRange}
                  selectedMonths={selectedMonths}
                  selectedYears={selectedYears}
                  weeklyMode={weeklyMode}
                  weeklyComputedDays={weeklyComputedDays}
                  selectedSpecificDays={selectedSpecificDays}
                  compDateRange1={compDateRange1}
                  compDateRange2={compDateRange2}
                  compMonths1={compMonths1}
                  compMonths2={compMonths2}
                  compYears1={compYears1}
                  compYears2={compYears2}
                  compSpecificDays1={compSpecificDays1}
                  compSpecificDays2={compSpecificDays2}
                  compWeeklyComputedDays1={compWeeklyComputedDays1}
                  compWeeklyComputedDays2={compWeeklyComputedDays2}
                  metaSlot={
                    currentStep === "analysis" && analysisMode === "horaahora" ? (
                      <IntradaySyncMetadata />
                    ) : undefined
                  }
                />
              </div>

          {/* ── Conteúdo (cards) + menu de Métricas lado a lado ── */}
          <div
            className={cn(
              "flex min-h-0 flex-1 gap-4 px-6",
              currentStep === "analysis" ? "pb-2" : "pb-4",
            )}
          >
          <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
              <div
                className={cn(
                  "w-full flex-1 flex flex-col gap-4",
                  currentStep === "analysis"
                    ? "min-h-0 overflow-hidden pb-0"
                    : "overflow-y-auto pb-1",
                )}
              >
                {/* Config Panel - Modo de Análise + Período */}
                {currentStep === "selection" && (
                  <SelectionView
                    isPeriodEditable={isPeriodEditable}
                    analysisMode={analysisMode}
                    setAnalysisMode={handleAnalysisModeChange}
                    currentModule={currentModule}
                    handleModuleChange={handleModuleChange}
                    moduleColors={moduleColors}
                    periodType={periodType}
                    setPeriodType={setPeriodType}
                    dailySubType={dailySubType}
                    setDailySubType={setDailySubType}
                    dateRange={dateRange}
                    setDateRange={setDateRange}
                    selectedMonths={selectedMonths}
                    setSelectedMonths={setSelectedMonths}
                    selectedYears={selectedYears}
                    setSelectedYears={setSelectedYears}
                    expandedYears={expandedYears}
                    setExpandedYears={setExpandedYears}
                    selectedSpecificDays={selectedSpecificDays}
                    setSelectedSpecificDays={setSelectedSpecificDays}
                    compDateRange1={compDateRange1}
                    setCompDateRange1={setCompDateRange1}
                    compMonths1={compMonths1}
                    setCompMonths1={setCompMonths1}
                    compYears1={compYears1}
                    setCompYears1={setCompYears1}
                    compSpecificDays1={compSpecificDays1}
                    setCompSpecificDays1={setCompSpecificDays1}
                    compExpandedYears1={compExpandedYears1}
                    setCompExpandedYears1={setCompExpandedYears1}
                    compDateRange2={compDateRange2}
                    compMonths2={compMonths2}
                    compYears2={compYears2}
                    compSpecificDays2={compSpecificDays2}
                    compExpandedYears2={compExpandedYears2}
                    setCompExpandedYears2={setCompExpandedYears2}
                    mdsaaActive={mdsaaActive}
                    setMdsaaActive={setMdsaaActive}
                    lyActive={lyActive}
                    setLyActive={setLyActive}
                    monthsP2ScrollRef={monthsP2ScrollRef}
                    handleManualP2DateRangeChange={handleManualP2DateRangeChange}
                    handleManualP2SpecificDaysChange={handleManualP2SpecificDaysChange}
                    handleManualP2MonthsChange={handleManualP2MonthsChange}
                    handleManualP2YearsChange={handleManualP2YearsChange}
                  />
                )}

                {/* Grid de Atributos */}
                {currentStep !== "analysis" && (
                  <AttributeGrid
                    currentStep={currentStep}
                    currentModule={currentModule}
                    currentModuleConfig={currentModuleConfig}
                    moduleColors={moduleColors}
                    selections={selections}
                    setSelections={setSelections}
                    grouping={grouping}
                    exclusions={exclusions}
                    setExclusions={setExclusions}
                    getAttributeOptions={getAttributeOptions}
                    handleAttributeClick={handleAttributeClick}
                    analysisMode={analysisMode}
                  />
                )}

                {/* Analysis View */}
                {currentStep === "analysis" && (
                  <div className="flex min-h-0 flex-1 flex-col">
                  <AnalysisView
                    actionsContainer={actionsContainer}
                    moduleConfig={currentModuleConfig}
                    moduleColors={moduleColors}
                    selectedMetrics={selectedMetrics}
                    grouping={grouping}
                    getAttributeOptions={getAttributeOptions}
                    selections={selections}
                    exclusions={exclusions}
                    periodType={periodType}
                    dateRange={dateRange}
                    selectedMonths={selectedMonths}
                    selectedYears={selectedYears}
                    isTimeDrilldownEnabled={isTimeDrilldownEnabled}
                    analysisMode={analysisMode}
                    compDateRange1={compDateRange1}
                    compDateRange2={compDateRange2}
                    compMonths1={compMonths1}
                    compMonths2={compMonths2}
                    compYears1={compYears1}
                    compYears2={compYears2}
                    customTitle={currentAnalysisDisplayName}
                    weeklyMode={weeklyMode}
                    weeklyComputedDays={weeklyComputedDays}
                    selectedSpecificDays={selectedSpecificDays}
                    compWeeklyComputedDays1={compWeeklyComputedDays1}
                    compWeeklyComputedDays2={compWeeklyComputedDays2}
                    compSpecificDays1={compSpecificDays1}
                    compSpecificDays2={compSpecificDays2}
                    averagePeriodType={averagePeriodType}
                    setAveragePeriodType={setAveragePeriodType}
                    averageDropdownOpen={averageDropdownOpen}
                    setAverageDropdownOpen={setAverageDropdownOpen}
                    sharePctMode={sharePctMode}
                    setSharePctMode={setSharePctMode}
                  />
                  </div>
                )}
              </div>
          </main>

          <MetricsSidebar
            currentStep={currentStep}
            resultMetricCatalog={resultMetricCatalog}
            pendingSelectedMetrics={currentStep === "analysis" ? metricsDraft : null}
            hasPendingMetricChanges={currentStep === "analysis" && hasPendingMetricChanges}
            onApplyMetricChanges={applyMetricsDraft}
            metricsCollapsed={metricsCollapsed}
            setMetricsCollapsed={setMetricsCollapsed}
            metricsGroupExpanded={metricsGroupExpanded}
            toggleMetricsGroup={toggleMetricsGroup}
            selectedMetrics={selectedMetrics}
            toggleMetric={toggleMetric}
            currentModule={currentModule}
            currentModuleConfig={currentModuleConfig}
            moduleColors={moduleColors}
            analysisMode={analysisMode}
          />
          </div>
        </motion.div>

        {/* Loading Overlay */}
        {isGenerating && (
          <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/95 backdrop-blur-md animate-in fade-in duration-300">
            <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-500">
              <div className="flex items-center gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-5 h-5 bg-slate-800 rounded-[4px]"
                    animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Carregando relatório
                </h3>
                <p className="text-base text-slate-500 font-medium">
                  Aguarde, em breve a tabela será exibida!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </RadixTooltip.Provider>
    </CanalVisaoProvider>
  );
}
