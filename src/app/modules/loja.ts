import {
  DollarSign,
  Target,
  TrendingUp,
  BarChart3,
  Percent,
  ShoppingCart,
  Hash,
  Users,
  Building2,
  Receipt,
  Truck,
  MapPin,
  Briefcase,
  UserCircle,
  Tag,
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

// ──────────────────────────────────────────────────────────────
// LOJA module configuration
// ──────────────────────────────────────────────────────────────

// Novos atributos específicos do módulo Loja
const SETOR_OPTIONS = ['Futebol', 'Corrida', 'Treino'];

const VENDEDOR_OPTIONS = [
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

export const lojaModule: ModuleConfig = {
  id: 'LOJA',
  label: 'LOJA',
  domainSectionLabel: '', // Sem linha segmentadora

  // ── Domain attributes (todos em uma única linha) ──────────
  domainAttributes: [
    { id: 'rede',      label: 'REDE',      icon: Building2,  options: [] },
    { id: 'tipo',      label: 'TIPO',      icon: Truck,      options: [] },
    { id: 'estado',    label: 'ESTADO',    icon: MapPin,     options: [] },
    { id: 'regional',  label: 'REGIONAL',  icon: Building2,  options: [] },
    { id: 'cidade',    label: 'CIDADE',    icon: MapPin,     options: [] },
    { id: 'loja',      label: 'LOJA',      icon: Building2,  options: [] },
    { id: 'setor',     label: 'SETOR',     icon: Briefcase,  options: [] },
    { id: 'vendedor',  label: 'VENDEDOR',  icon: UserCircle, options: [] },
  ],

  // ── Dynamic options per domain attribute ──────────────────
  getDomainAttributeOptions(attrId, selections) {
    switch (attrId) {
      case 'rede':      return REDE_OPTIONS;
      case 'tipo':      return TIPO_OPTIONS;
      case 'estado':    return ESTADOS_LIST;
      case 'regional':  return REGIONAL_OPTIONS;
      case 'cidade': {
        // Se há estados selecionados, filtrar cidades
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
        // Se há cidades selecionadas, filtrar lojas
        const selectedCidades = selections['cidade'] || [];
        if (selectedCidades.length === 0) return LOJAS_LIST;
        const lojas = selectedCidades.flatMap(cid => LOJAS_BY_CIDADE[cid] || []);
        return Array.from(new Set(lojas)).sort();
      }
      case 'setor':     return SETOR_OPTIONS;
      case 'vendedor':  return VENDEDOR_OPTIONS;
      default:          return [];
    }
  },

  // ── Cross-attribute filter (opcional) ─────────────────────
  getFilteredGroupOptions(attrId, options, selections) {
    let result = options;

    // estado ↔ cidade
    if (attrId === 'cidade') {
      const selectedEstados = selections['estado'] || [];
      if (selectedEstados.length > 0) {
        const allowed = new Set<string>();
        selectedEstados.forEach(est => {
          const cidades = CIDADES_BY_ESTADO[est] || [];
          cidades.forEach((c: string) => allowed.add(c));
        });
        if (allowed.size > 0) result = result.filter(opt => allowed.has(opt));
      }
    }

    // cidade ↔ loja
    if (attrId === 'loja') {
      const selectedCidades = selections['cidade'] || [];
      if (selectedCidades.length > 0) {
        const allowed = new Set<string>();
        selectedCidades.forEach(cid => {
          const lojas = LOJAS_BY_CIDADE[cid] || [];
          lojas.forEach((l: string) => allowed.add(l));
        });
        if (allowed.size > 0) result = result.filter(opt => allowed.has(opt));
      }
    }

    return result;
  },

  // ── Metrics (na ordem especificada) ───────────────────────
  metrics: [
    { id: 'rob',           label: 'Venda (ROB)',        icon: DollarSign   },
    {
      id: 'qtd_vendas_loja',
      label: 'Qtd de Vendas',
      icon: Hash,
      tooltip:
        'Quantidade de vendas realizadas (proxy baseado em ROB dividido pelo Ticket Médio).',
    },
    { id: 'sss',           label: 'SSS',                icon: BarChart3    },
    { id: 'margem_bruta',  label: 'Margem Bruta (MB)',  icon: Percent      },
    { id: 'valor_meta',    label: 'Valor da Meta',      icon: Target       },
    { id: 'desvio_meta_r', label: 'Desvio Meta $',      icon: TrendingUp   },
    { id: 'desvio_meta_p', label: 'Desvio Meta %',      icon: TrendingUp   },
    { id: 'conversao',     label: 'Conversão',          icon: Percent      },
    {
      id: 'match_preco',
      label: 'Match de Preço',
      icon: Tag,
      tooltip:
        'Do total de vendas realizadas, representa o percentual de vendas feitas com desconto igualando o preço praticado no site.',
    },
  ],

  metricDisplayOrder: [
    'rob',
    'qtd_vendas_loja',
    'sss',
    'margem_bruta',
    'valor_meta',
    'desvio_meta_r',
    'desvio_meta_p',
    'conversao',
    'match_preco',
  ],

  // ── Analysis titles ───────────────────────────────────────
  analysisTitles: {
    padrao:      'Análise Geral de Performance de Lojas',
    evolucao:    'Análise Evolutiva de Performance de Lojas',
    comparativo: 'Análise Comparativa de Performance de Lojas',
    horaahora:   'Análise hora a hora de Lojas',
  },
};