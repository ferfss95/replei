/**
 * Module Navigation Hook
 * Gerencia navegação entre módulos (PRODUTO, LOJA, EXTRAVIOS, INDICADORES)
 * e suas transições visuais
 */

import { useState, useEffect, useCallback } from 'react';
import type { Module } from '../constants';
import { MODULE_REGISTRY } from '../modules/index';
import type { AnalysisMode, AveragePeriodType } from '../types/wizard';

interface UseModuleNavigatorProps {
  onAnalysisModeChange: (mode: AnalysisMode) => void;
  onAveragePeriodTypeChange: (type: AveragePeriodType) => void;
}

interface UseModuleNavigatorReturn {
  currentModule: Module;
  currentModuleConfig: typeof MODULE_REGISTRY[Module];
  moduleTransitionKey: number;
  isTransitioning: boolean;
  selectedMetrics: string[];
  setSelectedMetrics: React.Dispatch<React.SetStateAction<string[]>>;
  handleModuleChange: (module: Module) => void;
}

export const useModuleNavigator = ({
  onAnalysisModeChange,
  onAveragePeriodTypeChange,
}: UseModuleNavigatorProps): UseModuleNavigatorReturn => {
  const [currentModule, setCurrentModule] = useState<Module>("PRODUTO");
  const [moduleTransitionKey, setModuleTransitionKey] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>(["venda"]);

  // Active module configuration
  const currentModuleConfig = MODULE_REGISTRY[currentModule];

  // Reset metrics and analysis mode when module changes
  useEffect(() => {
    if (currentModule === "PRODUTO") {
      setSelectedMetrics(["venda"]);
    } else if (currentModule === "LOJA") {
      setSelectedMetrics(["rob"]);
    } else if (currentModule === "INDICADORES") {
      // Ticket Médio é a métrica padrão ao entrar no módulo
      setSelectedMetrics(["ind_tkm"]);
    }
    onAnalysisModeChange("padrao"); // Reset to default analysis mode
    onAveragePeriodTypeChange(null); // Reset average selection
    setModuleTransitionKey((prev) => prev + 1); // Trigger animation
  }, [currentModule, onAnalysisModeChange, onAveragePeriodTypeChange]);

  // Handle module change with smooth transition
  const handleModuleChange = useCallback((module: Module) => {
    if (module === currentModule) return;

    setIsTransitioning(true);

    // Smooth transition with mandala animation (2.5 seconds total)
    setTimeout(() => {
      setCurrentModule(module);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 2000);
  }, [currentModule]);

  return {
    currentModule,
    currentModuleConfig,
    moduleTransitionKey,
    isTransitioning,
    selectedMetrics,
    setSelectedMetrics,
    handleModuleChange,
  };
};
