/**
 * CANAL × OMNI × Visão (flag Operacional / Corporativo)
 *
 * Fonte única das regras usadas em PRODUTO, LOJA e INDICADORES:
 * - opções de CANAL (por módulo, agrupadas em Todos Centauro / Todos NIKE) e de
 *   OMNI (antigo atributo TIPO; id `tipo` mantido);
 * - quais modalidades OMNI pertencem a cada canal, conforme a visão escolhida;
 * - tipo de data considerada (pagamento × faturamento);
 * - fatores aplicados ao mock para que as duas visões gerem números diferentes.
 *
 * Modelo: toda venda pertence a um "fluxo" (modalidade OMNI + tipo de canal + rede).
 * Cada fluxo é atribuído a um canal diferente conforme a visão — ex.: OMS Pickup/SFS
 * contam para Loja Física (Centauro / NVS / NDIS) na visão Operacional e para o
 * Digital da rede na Corporativa. Relação canal ↔ OMNI e valores das métricas
 * derivam todos desta mesma tabela.
 *
 * EXTRAVIOS usa os mesmos canais Centauro/Nike (sem Encomenda Expressa) e não
 * usa a flag Operacional/Corporativo.
 */

export type CanalVisao = 'operacional' | 'corporativo';
type TipoDataVenda = 'pagamento' | 'faturamento';

export const CANAL_VISAO_DEFAULT: CanalVisao = 'operacional';

export const CANAL_VISAO_LABEL: Record<CanalVisao, string> = {
  operacional: 'Operacional',
  corporativo: 'Corporativo',
};

/** Descritivo exibido no modal CANAL abaixo da escolha da visão. */
export const CANAL_VISAO_DESCRITIVO: Record<CanalVisao, string[]> = {
  operacional: [
    'Visão Gestão Lojas',
    'Venda Loja: LF + EE + OMS SFS + OMS Pickup',
    'Venda Digital: Convencional + Click e Retire',
    'Data Pagamento para LF e EE, Data Faturamento para OMS',
  ],
  corporativo: [
    'Visão Backoffice',
    'Visão Gestão Lojas',
    'Venda Loja: LF + EE',
    'Venda Digital: Convencional + Click e Retire + OMS SFS + OMS Pickup',
    'Data Faturamento para LF, EE, Convencional e OMS',
  ],
};

/** Módulos em que CANAL/OMNI seguem estas regras (e exibem a flag). */
const CANAL_OMNI_MODULE_IDS = new Set(['PRODUTO', 'LOJA', 'INDICADORES']);

export function isCanalOmniModule(moduleId: string | undefined): boolean {
  return !!moduleId && CANAL_OMNI_MODULE_IDS.has(moduleId);
}

// ── Canais ────────────────────────────────────────────────────

export const CANAL_LOJA_FISICA_CENTAURO = 'Loja Física Centauro';
export const CANAL_EE_1P = 'Encomenda Expressa (1P)';
export const CANAL_EE_3P = 'Encomenda Expressa (3P)';
export const CANAL_DIGITAL_CENTAURO = 'Digital Centauro';
export const CANAL_NVS = 'NVS';
export const CANAL_NDIS = 'NDIS';
export const CANAL_DIGITAL_NIKE = 'Digital Nike';

/** Todos Centauro (ordem do modal). */
export const CANAL_CENTAURO_OPTIONS: readonly string[] = [
  CANAL_LOJA_FISICA_CENTAURO,
  CANAL_EE_1P,
  CANAL_EE_3P,
  CANAL_DIGITAL_CENTAURO,
];

/** Todos NIKE (ordem do modal). */
export const CANAL_NIKE_OPTIONS: readonly string[] = [
  CANAL_NVS,
  CANAL_NDIS,
  CANAL_DIGITAL_NIKE,
];

export const CANAL_OPTIONS_LOJA: string[] = [...CANAL_CENTAURO_OPTIONS, ...CANAL_NIKE_OPTIONS];

/** PRODUTO não possui Encomenda Expressa (3P). */
export const CANAL_OPTIONS_PRODUTO: string[] = CANAL_OPTIONS_LOJA.filter((c) => c !== CANAL_EE_3P);

export const CANAL_OPTIONS_INDICADORES: string[] = [...CANAL_OPTIONS_LOJA];

export function getCanalOptionsForModule(moduleId: string | undefined): string[] {
  if (moduleId === 'PRODUTO') return CANAL_OPTIONS_PRODUTO;
  if (moduleId === 'INDICADORES') return CANAL_OPTIONS_INDICADORES;
  return CANAL_OPTIONS_LOJA;
}

/** Canais digitais (Centauro e Nike). */
export const CANAIS_DIGITAIS: readonly string[] = [CANAL_DIGITAL_CENTAURO, CANAL_DIGITAL_NIKE];

// ── OMNI (antigo TIPO) ────────────────────────────────────────

export const OMNI_COMPRA_DIGITAL = 'Compra Digital - Convencional';
export const OMNI_CLICK_RETIRE = 'Click & Retire';
export const OMNI_OMS_PICKUP = 'OMS - Pickup';
export const OMNI_OMS_SFS = 'OMS - Ship from Store';
export const OMNI_COMPRA_LOJA = 'Compra Loja Física';

/** Mesma lista em PRODUTO, LOJA e INDICADORES. */
export const OMNI_OPTIONS: string[] = [
  OMNI_COMPRA_DIGITAL,
  OMNI_CLICK_RETIRE,
  OMNI_OMS_PICKUP,
  OMNI_OMS_SFS,
  OMNI_COMPRA_LOJA,
];

// ── Fluxos de venda ───────────────────────────────────────────

/** Tipo de canal da regra de negócio (independe da rede). */
type TipoCanal = 'digital' | 'loja_fisica' | 'ee_1p' | 'ee_3p';

interface FluxoVenda {
  id: string;
  omni: string;
  tipoCanal: Record<CanalVisao, TipoCanal>;
  /** Participação no volume de venda (mock). */
  peso: number;
  /** Data considerada na visão Operacional (na Corporativa é sempre faturamento). */
  dataOperacional: TipoDataVenda;
  /**
   * Valor apurado por data de faturamento ÷ valor por data de pagamento no mesmo
   * recorte. Só pesa em fluxos cuja data muda entre as visões (Operacional usa
   * pagamento → Corporativo usa faturamento): parte do que é pago no período só
   * é faturado depois (ex.: Encomenda Expressa entregue dias após a compra).
   */
  razaoFaturamento: number;
  /** Ticket relativo (TKM / IPC / PMI) do fluxo. */
  perfilTicket: number;
  /** Margem relativa do fluxo. */
  perfilMargem: number;
}

const FLUXOS_VENDA: FluxoVenda[] = [
  {
    id: 'digital_convencional',
    omni: OMNI_COMPRA_DIGITAL,
    tipoCanal: { operacional: 'digital', corporativo: 'digital' },
    peso: 18,
    dataOperacional: 'faturamento',
    razaoFaturamento: 1,
    perfilTicket: 1.18,
    perfilMargem: 0.9,
  },
  {
    id: 'digital_click_retire',
    omni: OMNI_CLICK_RETIRE,
    tipoCanal: { operacional: 'digital', corporativo: 'digital' },
    peso: 7,
    dataOperacional: 'faturamento',
    razaoFaturamento: 1,
    perfilTicket: 1.1,
    perfilMargem: 0.94,
  },
  {
    id: 'loja_fisica',
    omni: OMNI_COMPRA_LOJA,
    tipoCanal: { operacional: 'loja_fisica', corporativo: 'loja_fisica' },
    peso: 52,
    dataOperacional: 'pagamento',
    razaoFaturamento: 0.96,
    perfilTicket: 0.94,
    perfilMargem: 1.05,
  },
  {
    id: 'oms_pickup',
    omni: OMNI_OMS_PICKUP,
    tipoCanal: { operacional: 'loja_fisica', corporativo: 'digital' },
    peso: 6,
    dataOperacional: 'faturamento',
    razaoFaturamento: 1,
    perfilTicket: 1.04,
    perfilMargem: 0.98,
  },
  {
    id: 'oms_sfs',
    omni: OMNI_OMS_SFS,
    tipoCanal: { operacional: 'loja_fisica', corporativo: 'digital' },
    peso: 5,
    dataOperacional: 'faturamento',
    razaoFaturamento: 1,
    perfilTicket: 1.08,
    perfilMargem: 0.95,
  },
  // Encomenda Expressa: sempre contabilizada para uma loja física (há loja atrelada).
  {
    id: 'ee1p_click_retire',
    omni: OMNI_CLICK_RETIRE,
    tipoCanal: { operacional: 'ee_1p', corporativo: 'ee_1p' },
    peso: 3,
    dataOperacional: 'pagamento',
    razaoFaturamento: 0.86,
    perfilTicket: 1.12,
    perfilMargem: 1,
  },
  {
    id: 'ee1p_pickup',
    omni: OMNI_OMS_PICKUP,
    tipoCanal: { operacional: 'ee_1p', corporativo: 'ee_1p' },
    peso: 3,
    dataOperacional: 'pagamento',
    razaoFaturamento: 0.84,
    perfilTicket: 1.1,
    perfilMargem: 1,
  },
  {
    id: 'ee1p_sfs',
    omni: OMNI_OMS_SFS,
    tipoCanal: { operacional: 'ee_1p', corporativo: 'ee_1p' },
    peso: 2,
    dataOperacional: 'pagamento',
    razaoFaturamento: 0.82,
    perfilTicket: 1.14,
    perfilMargem: 0.98,
  },
  {
    id: 'ee3p_digital',
    omni: OMNI_COMPRA_DIGITAL,
    tipoCanal: { operacional: 'ee_3p', corporativo: 'ee_3p' },
    peso: 4,
    dataOperacional: 'pagamento',
    razaoFaturamento: 0.8,
    perfilTicket: 1.22,
    perfilMargem: 0.86,
  },
];

/** Participação de cada rede nos fluxos de loja/digital (EE só existe na Centauro). */
const PARTICIPACAO_CENTAURO = 0.8;
const PARTICIPACAO_NIKE = 0.2;
/** Divisão das lojas físicas Nike entre NVS e NDIS. */
const PARTICIPACAO_NVS = 0.7;
const PARTICIPACAO_NDIS = 0.3;

/** Fluxo desdobrado por rede/canal: é a unidade usada nas relações e no mock. */
interface FluxoCanal {
  fluxo: FluxoVenda;
  canal: Record<CanalVisao, string>;
  peso: number;
}

const canalCentauro = (tipo: TipoCanal): string =>
  tipo === 'digital'
    ? CANAL_DIGITAL_CENTAURO
    : tipo === 'loja_fisica'
      ? CANAL_LOJA_FISICA_CENTAURO
      : tipo === 'ee_1p'
        ? CANAL_EE_1P
        : CANAL_EE_3P;

const FLUXOS_CANAL: FluxoCanal[] = FLUXOS_VENDA.flatMap((f) => {
  const ehEE = f.tipoCanal.operacional === 'ee_1p' || f.tipoCanal.operacional === 'ee_3p';
  const centauro: FluxoCanal = {
    fluxo: f,
    canal: {
      operacional: canalCentauro(f.tipoCanal.operacional),
      corporativo: canalCentauro(f.tipoCanal.corporativo),
    },
    peso: f.peso * (ehEE ? 1 : PARTICIPACAO_CENTAURO),
  };
  if (ehEE) return [centauro];
  // Nike: loja física se divide entre NVS e NDIS; digital é o Digital Nike.
  const nike = (lojaFisica: string, parte: number): FluxoCanal => ({
    fluxo: f,
    canal: {
      operacional:
        f.tipoCanal.operacional === 'digital' ? CANAL_DIGITAL_NIKE : lojaFisica,
      corporativo:
        f.tipoCanal.corporativo === 'digital' ? CANAL_DIGITAL_NIKE : lojaFisica,
    },
    peso: f.peso * PARTICIPACAO_NIKE * parte,
  });
  return [centauro, nike(CANAL_NVS, PARTICIPACAO_NVS), nike(CANAL_NDIS, PARTICIPACAO_NDIS)];
});

function fluxosDoModulo(moduleId: string | undefined): FluxoCanal[] {
  const canais = new Set(getCanalOptionsForModule(moduleId));
  return FLUXOS_CANAL.filter(
    (fc) => canais.has(fc.canal.operacional) && canais.has(fc.canal.corporativo),
  );
}

const tipoDataDoFluxo = (f: FluxoVenda, visao: CanalVisao): TipoDataVenda =>
  visao === 'corporativo' ? 'faturamento' : f.dataOperacional;

// ── Relação CANAL ↔ OMNI ──────────────────────────────────────

function omniPermitidosPorCanais(
  canais: string[],
  visao: CanalVisao,
  moduleId?: string,
): Set<string> {
  const set = new Set(canais);
  return new Set(
    fluxosDoModulo(moduleId)
      .filter((fc) => set.has(fc.canal[visao]))
      .map((fc) => fc.fluxo.omni),
  );
}

function canaisPermitidosPorOmni(
  omnis: string[],
  visao: CanalVisao,
  moduleId?: string,
): Set<string> {
  const set = new Set(omnis);
  return new Set(
    fluxosDoModulo(moduleId)
      .filter((fc) => set.has(fc.fluxo.omni))
      .map((fc) => fc.canal[visao]),
  );
}

/**
 * Restringe as opções de CANAL (pelas OMNI selecionadas) ou de OMNI (pelos canais
 * selecionados) conforme a visão. Demais atributos passam sem alteração.
 */
export function filterCanalOmniOptionsBySelections(
  attrId: string,
  options: string[],
  selections: Record<string, string[]>,
  visao: CanalVisao,
  moduleId?: string,
): string[] {
  if (attrId === 'tipo') {
    const canais = selections.canal || [];
    if (canais.length === 0) return options;
    const allowed = omniPermitidosPorCanais(canais, visao, moduleId);
    return options.filter((o) => allowed.has(o));
  }
  if (attrId === 'canal') {
    const omnis = selections.tipo || [];
    if (omnis.length === 0) return options;
    const allowed = canaisPermitidosPorOmni(omnis, visao, moduleId);
    return options.filter((o) => allowed.has(o));
  }
  return options;
}

/** Mesma regra no drill da tabela: filho OMNI sob um canal (e vice-versa). */
export function applyCanalOmniParentContext(
  childAttrId: string,
  parentContext: Record<string, string>,
  options: string[],
  visao: CanalVisao,
  moduleId?: string,
): string[] {
  if (childAttrId === 'tipo' && parentContext.canal) {
    const allowed = omniPermitidosPorCanais([parentContext.canal], visao, moduleId);
    return options.filter((o) => allowed.has(o));
  }
  if (childAttrId === 'canal' && parentContext.tipo) {
    const allowed = canaisPermitidosPorOmni([parentContext.tipo], visao, moduleId);
    return options.filter((o) => allowed.has(o));
  }
  return options;
}

/**
 * Ao trocar a visão, remove seleções/exclusões de OMNI que deixaram de existir
 * para os canais escolhidos (ex.: Digital Centauro + OMS - Pickup só existe no
 * Corporativo).
 */
export function pruneOmniForVisao(
  values: Record<string, string[]>,
  visao: CanalVisao,
  moduleId?: string,
): Record<string, string[]> {
  const omni = values.tipo || [];
  const canais = values.canal || [];
  if (omni.length === 0 || canais.length === 0) return values;
  const allowed = omniPermitidosPorCanais(canais, visao, moduleId);
  const kept = omni.filter((o) => allowed.has(o));
  if (kept.length === omni.length) return values;
  return { ...values, tipo: kept };
}

// ── Mock: fatores por linha da tabela ─────────────────────────

/** Restrição efetiva de canal/OMNI de uma linha (null = sem restrição). */
export interface CanalOmniRestricao {
  canais: Set<string> | null;
  omnis: Set<string> | null;
}

function restringir(
  attrId: 'canal' | 'tipo',
  selections: Record<string, string[]>,
  exclusions: Record<string, string[]>,
  rowContext: Record<string, string>,
): Set<string> | null {
  let set: Set<string> | null = null;
  const sel = selections[attrId] || [];
  if (sel.length > 0) set = new Set(sel);
  const pathValue = rowContext[attrId];
  if (pathValue) {
    set = set ? new Set([...set].filter((v) => v === pathValue)) : new Set([pathValue]);
  }
  const exc = exclusions[attrId] || [];
  if (exc.length > 0) {
    if (!set) {
      const universo = attrId === 'canal' ? CANAL_OPTIONS_LOJA : OMNI_OPTIONS;
      set = new Set(universo);
    }
    exc.forEach((v) => set!.delete(v));
  }
  return set;
}

export function resolveCanalOmniRestricao(
  selections: Record<string, string[]>,
  exclusions: Record<string, string[]>,
  rowContext: Record<string, string>,
): CanalOmniRestricao {
  return {
    canais: restringir('canal', selections, exclusions, rowContext),
    omnis: restringir('tipo', selections, exclusions, rowContext),
  };
}

/** Métricas de volume: escalam pela participação dos fluxos da linha. */
const METRICAS_VOLUME = new Set([
  'venda',
  'cmv',
  'lucro_bruto',
  'qtd_venda',
  'qtd_itens',
  'match_preco_valor',
  'rob',
  'qtd_vendas_loja',
  'qtd_itens_loja',
  'qtd_tickets',
  'ind_match_preco_valor',
  'ind_qtd_personalizacoes',
  'ind_vlr_personalizacoes',
]);

/** Métricas de razão: variam pelo mix de fluxos (perfil médio ponderado). */
const METRICAS_MIX: Record<string, (f: FluxoVenda) => number> = {
  tkm: (f) => f.perfilTicket,
  ipc: (f) => f.perfilTicket,
  ind_tkm: (f) => f.perfilTicket,
  ind_pmi: (f) => f.perfilTicket,
  ind_ipc: (f) => f.perfilTicket,
  margem: (f) => f.perfilMargem,
  margem_bruta: (f) => f.perfilMargem,
  margem_liquida: (f) => f.perfilMargem,
  // % Encomenda Expressa = participação dos fluxos EE no volume da linha.
  ind_ee: (f) =>
    f.tipoCanal.operacional === 'ee_1p' || f.tipoCanal.operacional === 'ee_3p' ? 1 : 0,
};

const pesoNaVisao = (fc: FluxoCanal, visao: CanalVisao) =>
  fc.peso *
  (tipoDataDoFluxo(fc.fluxo, visao) === fc.fluxo.dataOperacional
    ? 1
    : fc.fluxo.razaoFaturamento);

const fluxoAtende = (fc: FluxoCanal, r: CanalOmniRestricao, visao: CanalVisao) =>
  (!r.canais || r.canais.has(fc.canal[visao])) && (!r.omnis || r.omnis.has(fc.fluxo.omni));

/**
 * Participação de alocação (sem efeito de data) — usada para distribuir metas
 * entre canais/OMNI sem que a troca de data altere o alvo.
 */
export function getCanalOmniAlocacao(
  r: CanalOmniRestricao,
  visao: CanalVisao,
  moduleId?: string,
): number {
  if (!r.canais && !r.omnis) return 1;
  const fluxos = fluxosDoModulo(moduleId);
  const total = fluxos.reduce((a, fc) => a + fc.peso, 0);
  const parte = fluxos
    .filter((fc) => fluxoAtende(fc, r, visao))
    .reduce((a, fc) => a + fc.peso, 0);
  return total > 0 ? parte / total : 1;
}

/**
 * Multiplicador do valor mock de uma métrica para a linha.
 * Referência (= 1): visão Operacional, sem restrição de canal/OMNI — ou seja,
 * os números de hoje permanecem idênticos nesse cenário.
 */
export function getCanalOmniMultiplier(
  metricId: string,
  r: CanalOmniRestricao,
  visao: CanalVisao,
  moduleId?: string,
): number {
  const isVolume = METRICAS_VOLUME.has(metricId);
  const perfil = METRICAS_MIX[metricId];
  if (!isVolume && !perfil) return 1;

  const fluxos = fluxosDoModulo(moduleId);
  const pesoRef = fluxos.reduce((a, fc) => a + fc.peso, 0);
  if (pesoRef <= 0) return 1;
  const atendidos = fluxos.filter((fc) => fluxoAtende(fc, r, visao));
  const pesoLinha = atendidos.reduce((a, fc) => a + pesoNaVisao(fc, visao), 0);

  if (isVolume) return pesoLinha / pesoRef;

  if (pesoLinha <= 0) return 0;
  const mediaLinha =
    atendidos.reduce((a, fc) => a + pesoNaVisao(fc, visao) * perfil(fc.fluxo), 0) /
    pesoLinha;
  const mediaRef =
    fluxos.reduce((a, fc) => a + fc.peso * perfil(fc.fluxo), 0) / pesoRef;
  return mediaRef > 0 ? mediaLinha / mediaRef : 1;
}
