// src/app/modules/extravios.ts
//
// Módulo EXTRAVIOS — Análise de perdas, divergências e recuperação
// Mecânica idêntica ao módulo INDICADORES (reutiliza LOJA + PRODUTO como dimensões).
// Atributos: rede, tipo, estado, regional, cidade, loja, setor
//            + linha extra "Produto" com SALA…SABOR (PRODUTO_DOMAIN_ATTRIBUTE_DEFS).
// Métricas: prefixo ext_ — renderizadas direto na sidebar (flat, sem accordion).
// ─────────────────────────────────────────────────────────────

import {
  Boxes,
  CircleDollarSign,
  Building2,
  MapPin,
  Briefcase,
  Network,
  AlertOctagon,
  Warehouse,
  Percent,
  Package,
} from 'lucide-react';
import {
  REDE_OPTIONS,
  CANAL_OPTIONS,
  ORIGEM_EXTRAVIOS_GROUP_CD_IDS,
  ORIGEM_EXTRAVIOS_GROUP_CDS_IDS,
  ESTADOS_LIST,
  REGIONAL_OPTIONS,
  LOJAS_LIST,
  CIDADES_BY_ESTADO,
  LOJAS_BY_CIDADE,
  orderStoresByNetwork,
  filterCitiesByKnownLinks,
  filterRegionalsByKnownLinks,
  filterStatesByKnownLinks,
  filterStoresByKnownLinks,
} from '../referenceData';
import type { ModuleConfig } from './types';
import {
  PRODUTO_DOMAIN_ATTRIBUTE_DEFS,
  isProdutoDomainAttrId,
  produtoModule,
} from './produto';

// ── Opções locais do módulo ───────────────────────────────────

const SETOR_OPTIONS_EXT = ['Futebol', 'Corrida', 'Treino'];

const DIVERGENCIA_OPTIONS_EXT = [
  'Furto',
  'Deterioração',
  'Defeito de Fabricação',
  'Sucata',
  'Divergência de Recebimento',
];

// ── Configuração do módulo ────────────────────────────────────

export const extraviosModule: ModuleConfig = {
  id: 'EXTRAVIOS',
  label: 'EXTRAVIOS',
  domainSectionLabel: 'LOCALIZAÇÃO',

  // ── Atributos de domínio ──────────────────────────────────
  domainAttributes: [
    { id: 'rede',     label: 'REDE',     icon: Building2,  options: [] },
    { id: 'canal',    label: 'CANAL',    icon: Network,    options: [] },
    { id: 'divergencia', label: 'TIPO DIVERGÊNCIA', icon: AlertOctagon, options: [] },
    { id: 'estado',   label: 'ESTADO',   icon: MapPin,     options: [] },
    { id: 'regional', label: 'REGIONAL', icon: Building2,  options: [] },
    { id: 'cidade',   label: 'CIDADE',   icon: MapPin,     options: [] },
    { id: 'cd',       label: 'CD',       icon: Warehouse,  options: [] },
    { id: 'loja',     label: 'LOJA',     icon: Building2,  options: [] },
    { id: 'setor',    label: 'SETOR',    icon: Briefcase,  options: [] },
  ],

  domainAttributeExtraRows: [
    {
      sectionLabel: 'Produto',
      attributes: PRODUTO_DOMAIN_ATTRIBUTE_DEFS,
    },
  ],

  // ── Opções dinâmicas por atributo ────────────────────────
  getDomainAttributeOptions(attrId, selections) {
    switch (attrId) {
      case 'rede':     return REDE_OPTIONS;
      case 'canal':     return [...CANAL_OPTIONS];
      case 'cd':        return [...ORIGEM_EXTRAVIOS_GROUP_CD_IDS, ...ORIGEM_EXTRAVIOS_GROUP_CDS_IDS];
      case 'divergencia': return DIVERGENCIA_OPTIONS_EXT;
      case 'estado':
        return filterStatesByKnownLinks(ESTADOS_LIST, selections);
      case 'regional':
        return filterRegionalsByKnownLinks(REGIONAL_OPTIONS, selections);
      case 'cidade': {
        const selectedEstados = selections['estado'] || [];
        if (selectedEstados.length === 0) {
          const allCidades = new Set<string>();
          Object.values(CIDADES_BY_ESTADO).flat().forEach((c: string) => allCidades.add(c));
          return filterCitiesByKnownLinks(Array.from(allCidades).sort(), selections);
        }
        const cidades = selectedEstados.flatMap(est => CIDADES_BY_ESTADO[est] || []);
        return filterCitiesByKnownLinks(Array.from(new Set(cidades)).sort(), selections);
      }
      case 'loja': {
        const selectedCidades = selections['cidade'] || [];
        const baseLojas =
          selectedCidades.length === 0
            ? orderStoresByNetwork(LOJAS_LIST)
            : orderStoresByNetwork(
                selectedCidades.flatMap((cid) => LOJAS_BY_CIDADE[cid] || []),
              );
        return filterStoresByKnownLinks(baseLojas, selections);
      }
      case 'setor':    return SETOR_OPTIONS_EXT;
      default:
        if (isProdutoDomainAttrId(attrId)) {
          return produtoModule.getDomainAttributeOptions(attrId, selections);
        }
        return [];
    }
  },

  // ── Cross-filtering ────────────────────────────────────────
  getFilteredGroupOptions(attrId, options, selections, exclusions) {
    let result = options;

    if (attrId === 'cidade') {
      const selectedEstados = selections['estado'] || [];
      if (selectedEstados.length > 0) {
        const allowed = new Set<string>();
        selectedEstados.forEach(est => {
          (CIDADES_BY_ESTADO[est] || []).forEach((c: string) => allowed.add(c));
        });
        if (allowed.size > 0) result = result.filter(opt => allowed.has(opt));
      }
    }

    if (attrId === 'loja') {
      const selectedCidades = selections['cidade'] || [];
      if (selectedCidades.length > 0) {
        const allowed = new Set<string>();
        selectedCidades.forEach(cid => {
          (LOJAS_BY_CIDADE[cid] || []).forEach((l: string) => allowed.add(l));
        });
        if (allowed.size > 0) result = result.filter(opt => allowed.has(opt));
      }
    }

    if (
      isProdutoDomainAttrId(attrId) &&
      produtoModule.getFilteredGroupOptions
    ) {
      result = produtoModule.getFilteredGroupOptions(
        attrId,
        result,
        selections,
        exclusions,
      );
    }

    return result;
  },

  // ── Métricas ──────────────────────────────────────────────
  // Prefixo ext_ para isolamento total. Exibidas direto na sidebar (flat),
  // sem accordion (mesma renderização de LOJA/INDICADORES).
  metrics: [
    { id: 'ext_teste_qtd_itens',       label: 'Qtd de Perdas',           icon: Boxes            },
    { id: 'ext_vlr_custo',             label: 'Vlr Perda a Custo',       icon: CircleDollarSign },
    { id: 'ext_vlr_venda',             label: 'Vlr Perda a Venda',       icon: CircleDollarSign },
    { id: 'qtd_estoque',               label: 'Qtd Estoque',             icon: Package          },
    { id: 'ext_pct_perdas_custo_est',  label: 'Vlr Perda/Custo (P/C)',   icon: Percent          },
    { id: 'ext_pct_perdas_vendas',     label: 'Vlr Perda/Venda (P/V)',   icon: Percent          },
  ],

  metricDisplayOrder: [
    'ext_teste_qtd_itens',
    'ext_vlr_custo',
    'ext_vlr_venda',
    'qtd_estoque',
    'ext_pct_perdas_custo_est',
    'ext_pct_perdas_vendas',
  ],

  // ── Títulos por modo de análise ───────────────────────────
  analysisTitles: {
    padrao:      'Análise Geral de Extravios',
    evolucao:    'Análise Evolutiva de Extravios',
    comparativo: 'Análise Comparativa de Extravios',
    horaahora:   'Análise hora a hora de Extravios',
  },
};
