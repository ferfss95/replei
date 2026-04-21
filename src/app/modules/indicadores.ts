// src/app/modules/indicadores.ts
//
// Módulo INDICADORES — KPIs operacionais de loja
// Mecânica idêntica ao módulo LOJA.
// Atributos: mesmos do LOJA (rede, tipo, estado, regional, cidade, loja, setor, vendedor).
// Métricas: 14 KPIs com prefixo ind_ para evitar colisão com outros módulos.
//
// ── Guia de manutenção ───────────────────────────────────────
// Para adicionar uma nova métrica:
//   1. Adicionar entrada em `metrics` abaixo
//   2. Adicionar o id em `metricDisplayOrder` na posição desejada
//   3. Criar array MOCK_IND_* em referenceData.ts
//   4. Adicionar entrada em METRIC_CONFIG em referenceData.ts
//   5. Adicionar abreviação em METRIC_ABBREVIATIONS em referenceData.ts
//   Nenhuma outra alteração necessária.
//
// Para alterar nome no menu lateral: editar `label` em `metrics`
// Para alterar título na tabela: editar METRIC_ABBREVIATIONS em referenceData.ts
// Para reordenar colunas: editar `metricDisplayOrder`
// Para alterar atributos: editar `domainAttributes` + getDomainAttributeOptions
// ─────────────────────────────────────────────────────────────

import {
  TrendingUp,
  BarChart3,
  Percent,
  Users,
  Building2,
  Truck,
  MapPin,
  Briefcase,
  UserCircle,
  Activity,
  Star,
  Smartphone,
  Tag,
  ShoppingCart,
  Clock,
  Hash,
  Zap,
} from 'lucide-react';
import {
  REDE_OPTIONS,
  TIPO_OPTIONS,
  ESTADOS_LIST,
  REGIONAL_OPTIONS,
  LOJAS_LIST,
  CIDADES_BY_ESTADO,
  LOJAS_BY_CIDADE,
} from '../referenceData';
import type { ModuleConfig } from './types';

// ── Opções locais do módulo ───────────────────────────────────
// Sufixo _IND para que, se o módulo LOJA divergir no futuro,
// as listas possam ser editadas de forma independente.

const SETOR_OPTIONS_IND = ['Futebol', 'Corrida', 'Treino'];

const VENDEDOR_OPTIONS_IND = [
  'JUSSARA RIBEIRO - 105307',
  'CARLOS MENDES - 102145',
  'PATRICIA SANTOS - 108923',
  'RICARDO OLIVEIRA - 103456',
  'FERNANDA COSTA - 107892',
  'JULIANO FERREIRA - 104567',
  'MARIANA SOUZA - 109234',
  'RODRIGO ALMEIDA - 106789',
  'CLAUDIA PEREIRA - 101234',
  'BRUNO MARTINS - 108456',
  'AMANDA LIMA - 105678',
  'RAFAEL CAMPOS - 102890',
  'LUCIANA ROCHA - 107345',
  'GABRIEL SILVA - 104123',
  'RENATA CARDOSO - 109567',
  'MARCOS VIANA - 103789',
  'JULIANA BARBOSA - 106234',
  'THIAGO MOREIRA - 108901',
  'BEATRIZ GOMES - 105432',
  'ANDERSON FREITAS - 102567',
];

// ── Configuração do módulo ────────────────────────────────────

export const indicadoresModule: ModuleConfig = {
  id: 'INDICADORES',
  label: 'INDICADORES',
  domainSectionLabel: '',

  // ── Atributos de domínio ──────────────────────────────────
  // Idênticos ao módulo LOJA. Se precisar divergir no futuro,
  // edite apenas aqui — não afeta o módulo LOJA.
  domainAttributes: [
    { id: 'rede',     label: 'REDE',     icon: Building2,  options: [] },
    { id: 'tipo',     label: 'TIPO',     icon: Truck,      options: [] },
    { id: 'estado',   label: 'ESTADO',   icon: MapPin,     options: [] },
    { id: 'regional', label: 'REGIONAL', icon: Building2,  options: [] },
    { id: 'cidade',   label: 'CIDADE',   icon: MapPin,     options: [] },
    { id: 'loja',     label: 'LOJA',     icon: Building2,  options: [] },
    { id: 'setor',    label: 'SETOR',    icon: Briefcase,  options: [] },
    { id: 'vendedor', label: 'VENDEDOR', icon: UserCircle, options: [] },
  ],

  // ── Opções dinâmicas por atributo ────────────────────────
  getDomainAttributeOptions(attrId, selections) {
    switch (attrId) {
      case 'rede':     return REDE_OPTIONS;
      case 'tipo':     return TIPO_OPTIONS;
      case 'estado':   return ESTADOS_LIST;
      case 'regional': return REGIONAL_OPTIONS;
      case 'cidade': {
        const selectedEstados = selections['estado'] || [];
        if (selectedEstados.length === 0) {
          const allCidades = new Set<string>();
          Object.values(CIDADES_BY_ESTADO).flat().forEach((c: string) => allCidades.add(c));
          return Array.from(allCidades).sort();
        }
        const cidades = selectedEstados.flatMap(est => CIDADES_BY_ESTADO[est] || []);
        return Array.from(new Set(cidades)).sort();
      }
      case 'loja': {
        const selectedCidades = selections['cidade'] || [];
        if (selectedCidades.length === 0) return LOJAS_LIST;
        const lojas = selectedCidades.flatMap(cid => LOJAS_BY_CIDADE[cid] || []);
        return Array.from(new Set(lojas)).sort();
      }
      case 'setor':    return SETOR_OPTIONS_IND;
      case 'vendedor': return VENDEDOR_OPTIONS_IND;
      default:         return [];
    }
  },

  // ── Cross-filtering ────────────────────────────────────────
  // estado → filtra cidade; cidade → filtra loja
  getFilteredGroupOptions(attrId, options, selections) {
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

    return result;
  },

  // ── Métricas ──────────────────────────────────────────────
  // Prefixo ind_ em todos os IDs para isolamento total.
  // label = nome exibido no menu lateral da sidebar.
  // Para reordenar colunas na tabela, altere apenas metricDisplayOrder.
  metrics: [
    { id: 'ind_tkm',           label: 'Ticket Médio',             icon: ShoppingCart },
    { id: 'ind_pmi',           label: 'Preço Médio de Item',      icon: Tag          },
    { id: 'ind_ipc',           label: 'Itens por Cliente',        icon: Users        },
    { id: 'ind_paridade',      label: 'Paridade',                 icon: Activity     },
    { id: 'ind_cupons_mistos', label: 'Cupons Mistos',            icon: Percent      },
    { id: 'ind_fluxo',         label: 'Fluxo',                    icon: TrendingUp   },
    { id: 'ind_pmr',           label: 'PMR',                      icon: Clock        },
    { id: 'ind_nps',           label: 'NPS',                      icon: Star         },
    { id: 'ind_ruptura',       label: 'Ruptura',                  icon: Hash         },
    { id: 'ind_ee',            label: 'Encomenda Expressa (%)',   icon: Zap          },
    {
      id: 'ind_ppa',
      label: 'Alteração de Preço (PPA)',
      icon: BarChart3,
      tooltip:
        'Do total de alterações de preço necessárias para realizar, representa o percentual de alterações que foram feitas pela loja.',
    },
    { id: 'ind_cko_movel',     label: 'Utilização Cko Móvel',     icon: Smartphone   },
    { id: 'ind_conv_click',    label: 'Conversão Click & Retire', icon: Activity     },
    {
      id: 'ind_match_preco',
      label: 'Match de Preço',
      icon: Percent,
      tooltip:
        'Do total de vendas realizadas, representa o percentual de vendas feitas com desconto igualando o preço praticado no site.',
    },
  ],

  // ── Ordem das colunas na tabela de resultados ─────────────
  metricDisplayOrder: [
    'ind_tkm',
    'ind_pmi',
    'ind_ipc',
    'ind_paridade',
    'ind_cupons_mistos',
    'ind_fluxo',
    'ind_pmr',
    'ind_nps',
    'ind_ruptura',
    'ind_ee',
    'ind_ppa',
    'ind_cko_movel',
    'ind_conv_click',
    'ind_match_preco',
  ],

  // ── Títulos por modo de análise ───────────────────────────
  analysisTitles: {
    padrao:      'Análise Geral de Indicadores Operacionais',
    evolucao:    'Análise Evolutiva de Indicadores Operacionais',
    comparativo: 'Análise Comparativa de Indicadores Operacionais',
    horaahora:   'Análise hora a hora de Indicadores',
  },
};
