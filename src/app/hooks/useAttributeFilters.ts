/**
 * useAttributeFilters Hook
 * Gerencia estados e lógica de filtros de atributos (Seleção, Exclusão, Agrupamento)
 *
 * RESPONSABILIDADES:
 * - Manter states: selections, grouping, exclusions
 * - Fornecer opções dinâmicas para cada atributo (dependentes de seleções)
 * - Gerenciar lógica de toggle de agrupamento
 * - Calcular filtros ativos consolidados
 *
 * REGRA DE OURO: Esta lógica está homologada. Não altere o comportamento.
 */

import { useState, useCallback, useMemo } from 'react';
import {
  LOCATION_ATTRIBUTES,
  MAX_GROUPING_LEVELS,
  type Module,
  type Step,
} from '../constants';
import type { AnalysisMode } from '../types/wizard';
import {
  collectAllDomainAttributes,
  type ModuleConfig,
} from '../modules/types';
import {
  REDE_OPTIONS,
  TIPO_OPTIONS,
  REGIONAL_OPTIONS,
  NACIONAL_OPTIONS,
  VENDEDOR_OPTIONS,
  EXPOSITORES_OPTIONS,
  ORDERED_LOJAS_LIST,
  STATE_TO_UF,
  CIDADES_BY_ESTADO,
  ESTADOS_LIST,
  filterCitiesByKnownLinks,
  filterRegionalsByKnownLinks,
  filterNacionaisByKnownLinks,
  filterStatesByKnownLinks,
  filterStoresByKnownLinks,
  filterRedeByKnownLinks,
  filterCanalByKnownLinks,
} from '../referenceData';
import {
  CANAIS_DIGITAIS,
  filterCanalOmniOptionsBySelections,
  getCanalOptionsForModule,
  isCanalOmniModule,
  type CanalVisao,
} from '../data/canalOmni';
import {
  ajustarOpcoesDigital,
  getDigitalModoPadrao,
  isDigitalSelecionado,
  selecoesParaFiltrosDeLoja,
  type DigitalModo,
} from '../data/digitalOrigemDestino';

// ══════════════════════════════════════════════════════════════════
// TYPES
// ══════════════════════════════════════════════════════════════════

interface UseAttributeFiltersProps {
  currentModuleConfig: ModuleConfig;
  currentStep: Step;
  currentModule?: Module;
  analysisMode?: AnalysisMode;
  /** Visão do CANAL (Operacional / Corporativo) — define a relação CANAL ↔ OMNI. */
  canalVisao: CanalVisao;
  /** Canal digital: localização lida pela Origem do faturamento ou Destino do pedido. */
  digitalModoEscolhido: DigitalModo | null;
}

interface ActiveFilter {
  key: string;
  vals: string[];
  type: 'include' | 'exclude';
}

// ══════════════════════════════════════════════════════════════════
// HOOK
// ══════════════════════════════════════════════════════════════════

export const useAttributeFilters = (props: UseAttributeFiltersProps) => {
  const {
    currentModuleConfig,
    currentStep,
    currentModule,
    analysisMode,
    canalVisao,
    digitalModoEscolhido,
  } = props;
  const isProdutoCapacidadeExposicao =
    currentModule === 'PRODUTO' && analysisMode === 'capacidade_exposicao';

  // ─── STATES ───
  const [selections, setSelections] = useState<Record<string, string[]>>({});
  const [grouping, setGrouping] = useState<string[]>([]);
  const [exclusions, setExclusions] = useState<Record<string, string[]>>({});

  // Canal digital selecionado: os filtros de loja/rede recebem seleções "neutras"
  // (Origem: sem CDs; Destino: sem localização) e o resultado é ajustado depois.
  const digitalAtivo = isDigitalSelecionado(selections);
  // Escolha manual ou, sem ela, o padrão do canal (Digital → Destino; só EE → Origem).
  const digitalModo = digitalModoEscolhido ?? getDigitalModoPadrao(selections);
  const baseSelections = useMemo(
    () => selecoesParaFiltrosDeLoja(selections, digitalAtivo, digitalModo),
    [selections, digitalAtivo, digitalModo],
  );

  // ─── GET ATTRIBUTE OPTIONS (Dynamic options based on selections) ───
  const getBaseAttributeOptions = useCallback(
    (attrId: string) => {
      // First check if this attribute belongs to the current module's domain
      // (for Loja module, rede/tipo/estado/regional/cidade/loja are domain attributes)
      if (
        collectAllDomainAttributes(currentModuleConfig).some(
          (attr) => attr.id === attrId,
        )
      ) {
        return currentModuleConfig.getDomainAttributeOptions(attrId, baseSelections);
      }

      // Otherwise handle location attributes (for PRODUTO module)
      switch (attrId) {
        case 'rede':
          return filterRedeByKnownLinks(REDE_OPTIONS, baseSelections);
        case 'canal': {
          const canalOptions = getCanalOptionsForModule(currentModule);
          // Capacidade de Exposição avalia o ponto de venda: sem canais digitais.
          const baseCanal = isProdutoCapacidadeExposicao
            ? canalOptions.filter((c) => !CANAIS_DIGITAIS.includes(c))
            : canalOptions;
          return filterCanalByKnownLinks(baseCanal, baseSelections);
        }
        case 'tipo':
          return TIPO_OPTIONS;
        case 'regional':
          return filterRegionalsByKnownLinks(REGIONAL_OPTIONS, baseSelections);
        case 'nacional':
          return filterNacionaisByKnownLinks([...NACIONAL_OPTIONS], baseSelections);
        case 'vendedor':
          return VENDEDOR_OPTIONS;
        case 'expositores':
          return EXPOSITORES_OPTIONS;
        case 'loja':
          return filterStoresByKnownLinks(ORDERED_LOJAS_LIST, baseSelections);
        case 'estado': {
          const selectedCities = baseSelections['cidade'] || [];

          const formatState = (name: string) => `${name} - ${STATE_TO_UF[name] || ''}`;

          if (selectedCities.length === 0) {
            const allStates = ESTADOS_LIST.map(formatState).sort();
            return filterStatesByKnownLinks(allStates, baseSelections);
          }

          const states = new Set<string>();
          selectedCities.forEach((cityString) => {
            // Format is "City - UF"
            const parts = cityString.split(' - ');
            if (parts.length >= 2) {
              const uf = parts[parts.length - 1];
              const stateName = Object.keys(STATE_TO_UF).find(
                (key) => STATE_TO_UF[key] === uf,
              );
              if (stateName && ESTADOS_LIST.includes(stateName)) {
                states.add(formatState(stateName));
              }
            }
          });
          return filterStatesByKnownLinks(Array.from(states).sort(), baseSelections);
        }
        case 'cidade': {
          const selectedStates = baseSelections['estado'] || [];
          let formattedCities: string[] = [];

          const getRawState = (opt: string) => opt.split(' - ')[0];

          if (selectedStates.length === 0) {
            Object.entries(CIDADES_BY_ESTADO).forEach(([state, cities]) => {
              const uf = STATE_TO_UF[state];
              cities.forEach((city) => formattedCities.push(`${city} - ${uf}`));
            });
          } else {
            selectedStates.forEach((stateOpt) => {
              const rawState = getRawState(stateOpt);
              const cities = CIDADES_BY_ESTADO[rawState] || [];
              const uf = STATE_TO_UF[rawState];
              if (cities && uf) {
                cities.forEach((city) => formattedCities.push(`${city} - ${uf}`));
              }
            });
          }
          return filterCitiesByKnownLinks(
            Array.from(new Set(formattedCities)).sort(),
            baseSelections,
          );
        }
        // Domain-specific attributes — delegated to the active module config
        default:
          return currentModuleConfig.getDomainAttributeOptions(attrId, baseSelections);
      }
    },
    [baseSelections, currentModuleConfig, currentModule, isProdutoCapacidadeExposicao],
  );

  // CANAL ↔ OMNI dependem da visão (flag Operacional / Corporativo) e a
  // localização do digital, da leitura Origem / Destino.
  const getAttributeOptions = useCallback(
    (attrId: string) => {
      let options = ajustarOpcoesDigital(
        attrId,
        getBaseAttributeOptions(attrId),
        selections,
        digitalAtivo,
        digitalModo,
        currentModuleConfig.id,
      );
      if (isCanalOmniModule(currentModuleConfig.id)) {
        options = filterCanalOmniOptionsBySelections(
          attrId,
          options,
          selections,
          canalVisao,
          currentModuleConfig.id,
        );
      }
      return options;
    },
    [
      getBaseAttributeOptions,
      currentModuleConfig,
      selections,
      canalVisao,
      digitalAtivo,
      digitalModo,
    ],
  );

  // ─── HANDLE ATTRIBUTE CLICK (Grouping toggle) ───
  const handleAttributeClick = useCallback(
    (attrId: string) => {
      if (currentStep === 'grouping') {
        setGrouping((prev) => {
          if (prev.includes(attrId)) {
            // Remove this attribute from the hierarchy
            return prev.filter((id) => id !== attrId);
          } else {
            if (prev.length >= MAX_GROUPING_LEVELS) return prev;
            // Add at the end (next level)
            return [...prev, attrId];
          }
        });
      }
    },
    [currentStep],
  );

  // ─── ACTIVE FILTERS (Consolidated selections + exclusions) ───
  const activeFilters: ActiveFilter[] = useMemo(
    () => [
      ...(selections
        ? Object.entries(selections)
            .filter(([, vals]) => vals && vals.length > 0)
            .map(([k, v]) => ({
              key: k,
              vals: v,
              type: 'include' as const,
            }))
        : []),
      ...(exclusions
        ? Object.entries(exclusions)
            .filter(([, vals]) => vals && vals.length > 0)
            .map(([k, v]) => ({
              key: k,
              vals: v,
              type: 'exclude' as const,
            }))
        : []),
    ],
    [selections, exclusions],
  );

  return {
    // States
    selections,
    setSelections,
    grouping,
    setGrouping,
    exclusions,
    setExclusions,

    // Functions
    getAttributeOptions,
    handleAttributeClick,

    // Computed
    activeFilters,
  };
};
