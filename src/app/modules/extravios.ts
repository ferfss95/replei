// src/app/modules/extravios.ts
//
// Módulo EXTRAVIOS — Análise de perdas, divergências e recuperação
// Mecânica idêntica ao módulo INDICADORES (reutiliza LOJA + PRODUTO como dimensões).
// Atributos: rede, tipo, estado, regional, cidade, loja, setor
//            + linha extra "Produto" com SALA…SABOR (PRODUTO_DOMAIN_ATTRIBUTE_DEFS).
// Métricas: prefixo ext_ — organizadas em 3 accordions próprios na sidebar
//           (Inventário, Divergência de Recebimento, Sucata).
// ─────────────────────────────────────────────────────────────

import {
  AlertTriangle,
  ArrowDownCircle,
  ArrowUpCircle,
  Boxes,
  CircleDollarSign,
  Wallet,
  Percent,
  PackageX,
  Recycle,
  TrendingDown,
  Building2,
  MapPin,
  Briefcase,
  Network,
  AlertOctagon,
  Warehouse,
} from 'lucide-react';
import {
  REDE_OPTIONS,
  CANAL_OPTIONS,
  ORIGEM_EXTRAVIOS_OPTIONS,
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

// ── IDs das seções da sidebar (referenciados em App.tsx para defaults abertos) ──
export const EXTRAVIOS_SIDEBAR_GROUP_IDS = {
  teste: 'teste_validacao',
  inventario: 'inventario',
  divergencia: 'divergencia_recebimento',
  sucata: 'sucata',
} as const;

// ── Configuração do módulo ────────────────────────────────────

export const extraviosModule: ModuleConfig = {
  id: 'EXTRAVIOS',
  label: 'EXTRAVIOS',
  domainSectionLabel: 'LOCALIZAÇÃO',

  // ── Atributos de domínio ──────────────────────────────────
  domainAttributes: [
    { id: 'rede',     label: 'REDE',     icon: Building2,  options: [] },
    { id: 'canal',    label: 'CANAL',    icon: Network,    options: [] },
    { id: 'origem',   label: 'ORIGEM DIVERGÊNCIA', icon: Warehouse, options: [] },
    { id: 'divergencia', label: 'TIPO DIVERGÊNCIA', icon: AlertOctagon, options: [] },
    { id: 'estado',   label: 'ESTADO',   icon: MapPin,     options: [] },
    { id: 'regional', label: 'REGIONAL', icon: Building2,  options: [] },
    { id: 'cidade',   label: 'CIDADE',   icon: MapPin,     options: [] },
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
      case 'origem':    return [...ORIGEM_EXTRAVIOS_OPTIONS];
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
  // Prefixo ext_ para isolamento total. Organizadas em 3 accordions
  // (Inventário, Divergência de Recebimento, Sucata) via metricSidebarExtraSections.
  metrics: [
    // ── Teste para validação ──
    { id: 'ext_teste_qtd_itens',     label: 'Qtd de itens',            icon: Boxes           },
    { id: 'ext_teste_valor',         label: 'Valor',                   icon: CircleDollarSign },
    // ── Inventário ──
    { id: 'ext_qtd_faltas',          label: 'Qtd Faltas',              icon: ArrowDownCircle },
    { id: 'ext_qtd_sobras',          label: 'Qtd Sobras',              icon: ArrowUpCircle   },
    { id: 'ext_qtd_total_inv',       label: 'Qtd Total Inventário',    icon: Boxes           },
    { id: 'ext_vlr_faltas',          label: 'Vlr Faltas',              icon: TrendingDown    },
    { id: 'ext_vlr_sobras',          label: 'Vlr Sobras',              icon: Wallet          },
    { id: 'ext_vlr_total_inv',       label: 'Vlr Total Inventário',    icon: CircleDollarSign },
    { id: 'ext_pct_acuracidade_inv', label: '% Acuracidade Inventário', icon: Percent        },
    // ── Divergência de Recebimento ──
    { id: 'ext_qtd_divergencias',    label: 'Qtd Divergências',        icon: AlertTriangle   },
    { id: 'ext_vlr_divergencias',    label: 'Vlr Divergências',        icon: CircleDollarSign },
    // ── Sucata ──
    { id: 'ext_qtd_sucatas',         label: 'Qtd Sucatas',             icon: PackageX        },
    { id: 'ext_vlr_sucatas',         label: 'Vlr Sucatas',             icon: Recycle         },
  ],

  metricDisplayOrder: [
    'ext_teste_qtd_itens',
    'ext_teste_valor',
    'ext_qtd_faltas',
    'ext_qtd_sobras',
    'ext_qtd_total_inv',
    'ext_vlr_faltas',
    'ext_vlr_sobras',
    'ext_vlr_total_inv',
    'ext_pct_acuracidade_inv',
    'ext_qtd_divergencias',
    'ext_vlr_divergencias',
    'ext_qtd_sucatas',
    'ext_vlr_sucatas',
  ],

  // ── Sidebar: 3 seções dedicadas (sem "Venda e Estoque" nem "Planejamento") ──
  // Todas as métricas ficam fora de venda_estoque para que esse accordion não apareça.
  metricsSidebarExcludeFromVendaEstoque: [
    'ext_teste_qtd_itens',
    'ext_teste_valor',
    'ext_qtd_faltas',
    'ext_qtd_sobras',
    'ext_qtd_total_inv',
    'ext_vlr_faltas',
    'ext_vlr_sobras',
    'ext_vlr_total_inv',
    'ext_pct_acuracidade_inv',
    'ext_qtd_divergencias',
    'ext_vlr_divergencias',
    'ext_qtd_sucatas',
    'ext_vlr_sucatas',
  ],

  metricSidebarExtraSections: [
    {
      title: 'Teste para validação',
      sidebarGroupId: EXTRAVIOS_SIDEBAR_GROUP_IDS.teste,
      groups: [
        {
          subtitle: '',
          metricIds: ['ext_teste_qtd_itens', 'ext_teste_valor'],
        },
      ],
    },
    {
      title: 'Inventário',
      sidebarGroupId: EXTRAVIOS_SIDEBAR_GROUP_IDS.inventario,
      groups: [
        {
          subtitle: '',
          metricIds: [
            'ext_qtd_faltas',
            'ext_qtd_sobras',
            'ext_qtd_total_inv',
            'ext_vlr_faltas',
            'ext_vlr_sobras',
            'ext_vlr_total_inv',
            'ext_pct_acuracidade_inv',
          ],
        },
      ],
    },
    {
      title: 'Recebimento',
      sidebarGroupId: EXTRAVIOS_SIDEBAR_GROUP_IDS.divergencia,
      groups: [
        {
          subtitle: '',
          metricIds: ['ext_qtd_divergencias', 'ext_vlr_divergencias'],
        },
      ],
    },
    {
      title: 'Sucata',
      sidebarGroupId: EXTRAVIOS_SIDEBAR_GROUP_IDS.sucata,
      groups: [
        {
          subtitle: '',
          metricIds: ['ext_qtd_sucatas', 'ext_vlr_sucatas'],
        },
      ],
    },
  ],

  // ── Títulos por modo de análise ───────────────────────────
  analysisTitles: {
    padrao:      'Análise Geral de Extravios',
    evolucao:    'Análise Evolutiva de Extravios',
    comparativo: 'Análise Comparativa de Extravios',
    horaahora:   'Análise hora a hora de Extravios',
  },
};
