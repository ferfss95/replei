/**
 * Nomenclatura oficial de métricas REPLEI.
 * Sidebar: nome descritivo completo (com sigla institucional entre parênteses quando aplicável).
 * Tabela: abreviação para cabeçalhos de coluna ([Métricas] Lista Geral.csv).
 */

export type MetricNamingEntry = {
  /** Menu lateral (etapas de preparação) */
  sidebar: string;
  /** Cabeçalho da tabela de resultado (etapa 4) */
  table: string;
};

/** Mapa por id de métrica no código (`modules/*.ts`). */
export const METRIC_NAMING: Record<string, MetricNamingEntry> = {
  // ── PRODUTO — Venda e estoque ─────────────────────────────────
  venda: { sidebar: 'Venda (ROB)', table: 'ROB' },
  qtd_venda: { sidebar: 'Qtd Vendas', table: 'Qtd Vendas' },
  qtd_itens: { sidebar: 'Qtd Itens', table: 'Qtd Itens' },
  sss: { sidebar: '% SSS', table: '% SSS' },
  cmv: { sidebar: 'CMV', table: 'CMV' },
  cap_qtd_expositores:            { sidebar: 'Qtd Expositores',                table: 'Qtd Expositores' },
  cap_qtd_modelo_cor:             { sidebar: 'Qtd Modelo/Cor',                 table: 'Qtd Mod/Cor' },
  cap_qtd_modelo_cor_tam:         { sidebar: 'Qtd Modelo/Cor/Tamanho',         table: 'Qtd Mod/Cor/Tam' },
  cap_pct_capacidade_mod_cor:     { sidebar: '% Capacidade Modelo/Cor',         table: '% CAP MOD/COR' },
  cap_pct_capacidade_mod_cor_tam: { sidebar: '% Capacidade Modelo/Cor/Tamanho', table: '% CAP MOD/COR/TAM' },
  lucro_bruto: { sidebar: 'Lucro Bruto (LB)', table: 'LB' },
  margem: { sidebar: '% Margem Bruta (MB)', table: '% MB' },
  margem_liquida: { sidebar: 'Margem Líquida (ML)', table: 'ML' },
  qtd_estoque: { sidebar: 'Qtd Estoque', table: 'Qtd Estoque' },
  vlr_estoque: { sidebar: 'Vlr Estoque', table: 'Vlr Estoque' },
  dep: { sidebar: 'DEP', table: 'DEP' },
  def: { sidebar: 'DEF', table: 'DEF' },
  giro_estoque: { sidebar: 'Giro Estoque', table: 'Giro Estoque' },

  // ── PRODUTO — Planejamento ────────────────────────────────────
  vlr_plano: { sidebar: 'Vlr Plano', table: 'Vlr Plano' },
  qtd_plano: { sidebar: 'Qtd Plano', table: 'Qtd Plano' },
  qtd_desvio_plano: { sidebar: 'Qtd Desvio Plano', table: 'Qtd Desvio Plano' },
  vlr_desvio_plano: { sidebar: 'Vlr Desvio Plano', table: 'Vlr Desvio Plano' },
  vlr_target: { sidebar: 'Vlr Target', table: 'Vlr Target' },
  qtd_target: { sidebar: 'Qtd Target', table: 'Qtd Target' },
  qtd_desvio_target: { sidebar: 'Qtd Desvio Target', table: 'Qtd Desv. Target' },
  vlr_desvio_target: { sidebar: 'Vlr Desvio Target', table: 'Vlr Desv. Target' },

  // ── PRODUTO — Preço / match ───────────────────────────────────
  ppa: { sidebar: 'Alteração de Preço (PPA)', table: 'PPA' },
  match_preco: { sidebar: '% Match de Preço', table: '% Match de Preço' },
  match_preco_valor: { sidebar: 'Vlr Match de Preço', table: 'Vlr Match' },

  // ── PRODUTO — Exposição ───────────────────────────────────────
  exp_calc_clicks_tenis: { sidebar: 'Qtd Clicks Tênis', table: 'Qtd Clicks Tênis' },
  exp_calc_clicks_chuteiras: { sidebar: 'Qtd Clicks Chuteiras', table: 'Qtd Clicks Chuteiras' },
  exp_vest_bracos_araras: { sidebar: 'Qtd Braços Exposição', table: 'Qtd Braços Exposição' },
  exp_vest_mesas: { sidebar: 'Qtd Mesas', table: 'Qtd Mesas' },
  exp_meias_bracos: { sidebar: 'Qtd Braços Meias', table: 'Qtd Braços Meias' },
  exp_acc_torres_relogios: { sidebar: 'Qtd Expositores Relógios', table: 'Qtd Exp. Relógios' },
  exp_acc_torres_oculos: { sidebar: 'Qtd Expositores Óculos', table: 'Qtd Exp. Óculos' },
  exp_acc_cestos_bolas: { sidebar: 'Qtd Cestos Bolas', table: 'Qtd Cestos Bolas' },
  exp_checkstand_modulos: { sidebar: 'Qtd Módulos Checkstand', table: 'Qtd Mód. Checkstand' },
  exp_nut_geladeiras: { sidebar: 'Qtd Geladeiras', table: 'Qtd Geladeiras' },

  // ── LOJA (ids distintos onde aplicável) ───────────────────────
  rob: { sidebar: 'Venda (ROB)', table: 'ROB' },
  qtd_vendas_loja: { sidebar: 'Qtd Vendas', table: 'Qtd Vendas' },
  qtd_itens_loja: { sidebar: 'Qtd Itens', table: 'Qtd Itens' },
  margem_bruta: { sidebar: '% Margem Bruta (MB)', table: '% MB' },
  valor_meta: { sidebar: 'Vlr Meta', table: 'Vlr Meta' },
  vlr_projecao_venda: {
    sidebar: 'Vlr Projeção Venda (mês vigente)',
    table: 'Vlr Proj. Venda',
  },
  pct_projecao_venda: { sidebar: '% Projeção Venda', table: '% Proj. Venda' },
  desvio_meta_r: { sidebar: 'Vlr Desvio Meta', table: 'Vlr Desvio Meta' },
  desvio_meta_p: { sidebar: '% Desvio Meta', table: '% Desvio Meta' },
  conversao: { sidebar: 'Conversão', table: 'Conversão' },
  conversao_vendex: { sidebar: 'Conversão Vendex', table: 'Conv. Vendex' },

  // ── INDICADORES (prefixo ind_) ────────────────────────────────
  ind_tkm: { sidebar: 'Ticket Médio (TKM)', table: 'TKM' },
  ind_pmi: { sidebar: 'Preço Médio Item (PMI)', table: 'PMI' },
  ind_ipc: { sidebar: 'Itens por Cliente (IPC)', table: 'IPC' },
  ind_paridade: { sidebar: 'Paridade', table: 'Paridade' },
  ind_cupons_mistos: { sidebar: 'Cupons Mistos', table: 'Cupons Mistos' },
  ind_fluxo: { sidebar: 'Fluxo', table: 'Fluxo' },
  ind_pmr: { sidebar: 'PMR', table: 'PMR' },
  ind_nps: { sidebar: 'NPS', table: 'NPS' },
  ind_ruptura: { sidebar: 'Ruptura', table: 'Ruptura' },
  ind_ee: { sidebar: '% Encomenda Expressa (EE)', table: '% EE' },
  ind_ppa: { sidebar: 'Alteração de Preço (PPA)', table: 'PPA' },
  ind_cko_movel: { sidebar: 'Utilização CKO Móvel', table: 'CKO Móvel' },
  ind_conv_click: { sidebar: 'Conversão Desconto Click', table: 'Conv. Desc. Click' },
  ind_match_preco: { sidebar: '% Match de Preço', table: '% Match de Preço' },
  ind_match_preco_valor: { sidebar: 'Vlr Match de Preço', table: 'Vlr Match' },
  ind_qtd_personalizacoes: { sidebar: 'Qtd Personalizações', table: 'Qtd Pers.' },
  ind_vlr_personalizacoes: { sidebar: 'Vlr Personalizações', table: 'Vlr Pers.' },

  // ── EXTRAVIOS (prefixo ext_) ──────────────────────────────────
  // Teste para validação
  ext_teste_qtd_itens:     { sidebar: 'Qtd de itens',            table: 'Qtd de itens' },
  ext_teste_valor:         { sidebar: 'Valor',                   table: 'Valor' },
  // Inventário
  ext_qtd_faltas:          { sidebar: 'Qtd Faltas Inv.',         table: 'Qtd Faltas Inv.' },
  ext_qtd_sobras:          { sidebar: 'Qtd Sobras Inv.',         table: 'Qtd Sobras Inv.' },
  ext_qtd_total_inv:       { sidebar: 'Qtd Total Inv.',          table: 'Qtd Total Inv.' },
  ext_vlr_faltas:          { sidebar: 'Vlr Faltas Inv.',         table: 'Vlr Faltas Inv.' },
  ext_vlr_sobras:          { sidebar: 'Vlr Sobras Inv.',         table: 'Vlr Sobras Inv.' },
  ext_vlr_total_inv:       { sidebar: 'Vlr Total Inv.',          table: 'Vlr Total Inv.' },
  ext_pct_acuracidade_inv: { sidebar: '% Acuracidade Inv.',      table: '% Acuracidade Inv.' },
  // Divergência de Recebimento
  ext_qtd_divergencias:    { sidebar: 'Qtd Divergências Rec.',   table: 'Qtd Divergências Rec.' },
  ext_vlr_divergencias:    { sidebar: 'Vlr Divergências Rec.',   table: 'Vlr Divergências Rec.' },
  // Sucata
  ext_qtd_sucatas:         { sidebar: 'Qtd Sucatas',             table: 'Qtd Sucatas' },
  ext_vlr_sucatas:         { sidebar: 'Vlr Sucatas',             table: 'Vlr Sucatas' },
};

export function getMetricSidebarLabel(metricId: string, fallback?: string): string {
  return METRIC_NAMING[metricId]?.sidebar ?? fallback ?? metricId;
}

export function getMetricTableLabel(metricId: string, fallback?: string): string {
  return METRIC_NAMING[metricId]?.table ?? fallback ?? metricId;
}

/** Mapa legado usado nos cabeçalhos da tabela (`METRIC_ABBREVIATIONS`). */
export const METRIC_ABBREVIATIONS: Record<string, string> = Object.fromEntries(
  Object.entries(METRIC_NAMING).map(([id, entry]) => [id, entry.table]),
);
