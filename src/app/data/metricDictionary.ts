/**
 * Glossário de métricas (protótipo): descrições e fórmulas coerentes com o mock;
 * não substitui especificação oficial de BI/dados.
 */
export type MetricDictionaryEntry = {
  description: string;
  /** Texto legível; preferir notação simples (sem LaTeX obrigatório). */
  formula: string;
};

const FB: MetricDictionaryEntry = {
  description:
    'Métrica exibida neste módulo; no protótipo REPLEI o valor é simulado a partir de regras internas. A definição oficial virá da camada de dados.',
  formula: '— (protótipo / fonte a definir)',
};

/** Entradas por id de métrica (`MetricDef.id`). */
export const METRIC_DICTIONARY: Record<string, MetricDictionaryEntry> = {
  // ── PRODUTO (e EXTRAVIOS compartilham ids base) ─────────────
  venda: {
    description:
      'Receita de venda no período e filtros selecionados, em valores de venda líquida (ROB — conceito de “venda na régua”).',
    formula: 'ROB = Σ valor de venda por posição de análise',
  },
  qtd_venda: {
    description:
      'Número de transações ou cupons de venda agregados na célula da análise (contagem de vendas).',
    formula: 'Qtd de Vendas = Σ nº de vendas (ou contagem de cupons) no agrupamento',
  },
  qtd_itens: {
    description:
      'Quantidade total de itens (SKU × quantidade) vendidos no período, derivada no protótipo a partir da qtd. de vendas.',
    formula:
      'Qtd de Itens ≈ Qtd de Vendas × fator de itens por venda (mock: +10% a +17% por posição)',
  },
  sss: {
    description:
      'Evolução de venda em base comparável (mesmas lojas / mesma rede de referência), expressa em variação percentual.',
    formula: 'SSS (%) = (ROB período atual ÷ ROB período base comparável) − 1',
  },
  cmv: {
    description: 'Custo das mercadorias vendidas associado à receita de venda do período.',
    formula: 'CMV = Σ (custo unitário × quantidade vendida)',
  },
  cmv_comercial: {
    description:
      'CMV ajustado por políticas comerciais (promoções, devoluções alocadas, etc.) usado para margem “comercial”.',
    formula: 'CMV Comercial = CMV base ± ajustes comerciais alocados',
  },
  lucro_bruto: {
    description: 'Resultado bruto da mercadoria vendida antes de despesas operacionais.',
    formula: 'Lucro Bruto (LB) = ROB − CMV',
  },
  margem: {
    description: 'Participação do lucro bruto na receita; margem bruta percentual.',
    formula: 'Margem Bruta (MB) = (LB ÷ ROB) × 100%',
  },
  margem_liquida: {
    description:
      'Margem após componentes simulados de desconto/despesa direta na linha de produto (protótipo).',
    formula: 'Margem Líquida (ML) = MB − componentes simulados de linha',
  },
  qtd_estoque: {
    description: 'Unidades em estoque disponíveis na posição de análise (snapshot agregado).',
    formula: 'Qtd Estoque = Σ unidades em estoque',
  },
  vlr_estoque: {
    description: 'Valor monetário do estoque (custo ou preço de reposição, conforme política).',
    formula: 'Vlr Estoque = Σ (preço de custo médio × quantidade em estoque)',
  },
  dep: {
    description: 'Dias de estoque da posição — quanto tempo o estoque atual cobre a demanda.',
    formula: 'DEP = Qtd Estoque ÷ venda média diária (unidades/dia)',
  },
  def: {
    description: 'Dias de estoque em valor (estoque financeiro vs. venda diária em R$).',
    formula: 'DEF = Vlr Estoque ÷ (ROB diário médio)',
  },
  vlr_plano: {
    description: 'Meta de receita planejada para o período ou referência de planejamento.',
    formula: 'Vlr Plano = meta de receita planejada',
  },
  qtd_plano: {
    description: 'Meta de quantidade (unidades ou vendas) planejada.',
    formula: 'Qtd Plano = meta de quantidade planejada',
  },
  qtd_desvio_plano: {
    description: 'Diferença entre quantidade realizada e quantidade planejada.',
    formula: 'Qtd Desvio Plano = Qtd realizada − Qtd Plano',
  },
  vlr_desvio_plano: {
    description: 'Diferença entre receita realizada e valor planejado.',
    formula: 'Vlr Desvio Plano = ROB − Vlr Plano',
  },
  vlr_target: {
    description: 'Alvo de receita (target) distinto do “plano”, usado para acompanhamento.',
    formula: 'Vlr Target = alvo de receita definido',
  },
  qtd_target: {
    description: 'Alvo de quantidade para o período.',
    formula: 'Qtd Target = alvo de quantidade definido',
  },
  qtd_desvio_target: {
    description: 'Desvio da quantidade realizada em relação ao target.',
    formula: 'Qtd Desvio Target = Qtd realizada − Qtd Target',
  },
  vlr_desvio_target: {
    description: 'Desvio da receita realizada em relação ao target.',
    formula: 'Vlr Desvio Target = ROB − Vlr Target',
  },
  ppa: {
    description:
      'Percentual de alterações de preço efetivamente executadas face ao total necessário (aderência ao PPA).',
    formula: 'PPA (%) = (alterações realizadas ÷ alterações necessárias) × 100%',
  },
  match_preco: {
    description:
      'Participação de vendas em que o preço praticado foi equalizado ao preço do site (match de preço).',
    formula: 'Match de Preço (%) = (vendas com match ÷ total de vendas) × 100%',
  },
  exp_calc_clicks_tenis: {
    description: 'Contagem simulada de interações (clicks) em exposição de calçados tipo tênis.',
    formula: 'Soma de eventos de click em posições “tênis” (mock)',
  },
  exp_calc_clicks_chuteiras: {
    description: 'Contagem simulada de clicks em exposição de chuteiras.',
    formula: 'Soma de eventos de click em posições “chuteira” (mock)',
  },
  exp_vest_bracos_araras: {
    description: 'Quantidade de braços de arara para vestuário na loja (capacidade de exposição).',
    formula: 'Contagem física de braços de exposição (cadastro / inventário de loja)',
  },
  exp_vest_mesas: {
    description: 'Mesas de exposição de vestuário disponíveis no PDV.',
    formula: 'Contagem de mesas de vestuário',
  },
  exp_meias_bracos: {
    description: 'Braços de arara dedicados a meias.',
    formula: 'Contagem de braços de meias',
  },
  exp_acc_torres_relogios: {
    description: 'Expositores (torres ou mesas) de relógios.',
    formula: 'Contagem de expositores de relógios',
  },
  exp_acc_torres_oculos: {
    description: 'Expositores de óculos.',
    formula: 'Contagem de expositores de óculos',
  },
  exp_acc_cestos_bolas: {
    description: 'Cestos para exposição de bolas.',
    formula: 'Contagem de cestos',
  },
  exp_checkstand_modulos: {
    description: 'Módulos de checkstand no ponto de venda.',
    formula: 'Contagem de módulos de checkstand',
  },
  exp_nut_geladeiras: {
    description: 'Geladeiras de exposição (nutrição/bebidas).',
    formula: 'Contagem de geladeiras de piso',
  },

  // ── LOJA ───────────────────────────────────────────────────
  rob: {
    description: 'Receita de venda da loja (ou agregação) no período — equivalente ao ROB do módulo Produto.',
    formula: 'ROB = Σ valor de venda',
  },
  qtd_vendas_loja: {
    description:
      'Quantidade de vendas no período; no protótipo é derivada de ROB e ticket médio para manter coerência.',
    formula: 'Qtd de Vendas ≈ ROB ÷ Ticket Médio (arredondado)',
  },
  qtd_itens_loja: {
    description: 'Itens vendidos na loja; no protótipo amplia a qtd. de vendas por um fator por posição.',
    formula: 'Qtd de Itens ≈ Qtd de Vendas × fator (+10% a +17% por posição, mock)',
  },
  margem_bruta: {
    description: 'Margem bruta da loja sobre a receita analisada.',
    formula: 'MB (%) = (ROB − CMV) ÷ ROB × 100%',
  },
  valor_meta: {
    description: 'Valor da meta de receita (ou KPI) configurado para a loja ou célula.',
    formula: 'Valor da Meta = meta cadastrada para o período',
  },
  vlr_projecao_venda: {
    description:
      'Projeção de fechamento do mês corrente: vendas já realizadas mais tendência linear até o fim do mês.',
    formula: 'Projeção = ROB(mês até hoje) + (média diária × dias restantes)',
  },
  pct_projecao_venda: {
    description: 'Percentual da meta mensal que a projeção indica que será atingida.',
    formula: '% Proj = (Vlr Projeção ÷ Valor da Meta mensal) × 100%',
  },
  desvio_meta_r: {
    description: 'Desvio monetário em relação à meta (realizado ou projetado vs. meta).',
    formula: 'Desvio $ = Valor realizado (ou projeção) − Meta',
  },
  desvio_meta_p: {
    description: 'Desvio percentual em relação à meta.',
    formula: 'Desvio % = (Valor ÷ Meta − 1) × 100%',
  },
  conversao: {
    description: 'Taxa de conversão de visitantes ou oportunidades em venda (definição operacional da loja).',
    formula: 'Conversão (%) = (vendas ÷ visitantes) × 100%',
  },
  conversao_vendex: {
    description: 'Indicador de conversão simulado no protótipo (faixa 35%–49%).',
    formula: 'Valor simulado (mock) para demonstração',
  },

  // ── INDICADORES (prefixo ind_) ──────────────────────────────
  ind_tkm: {
    description: 'Valor médio por venda (ticket).',
    formula: 'TKM = ROB ÷ Qtd de Vendas',
  },
  ind_pmi: {
    description: 'Preço médio praticado por item vendido.',
    formula: 'PMI = ROB ÷ Qtd de Itens',
  },
  ind_ipc: {
    description: 'Itens vendidos por cliente ou por cupom, conforme granularidade.',
    formula: 'IPC = Qtd de Itens ÷ Qtd de Clientes (ou cupons)',
  },
  ind_paridade: {
    description: 'Indicador de paridade de preço ou alinhamento à referência de mercado (mock).',
    formula: 'Índice de paridade (escala definida pelo negócio)',
  },
  ind_cupons_mistos: {
    description: 'Participação de cupons com mais de um tipo de pagamento ou mistura de categorias.',
    formula: 'Cupons Mistos (%) = (cupons mistos ÷ total de cupons) × 100%',
  },
  ind_fluxo: {
    description: 'Fluxo de pessoas ou movimento indexado na loja (protótipo).',
    formula: 'Índice de fluxo agregado no período',
  },
  ind_pmr: {
    description: 'Prazo médio de reposição ou permanência (definição operacional PMR).',
    formula: 'PMR = média ponderada dos prazos observados',
  },
  ind_nps: {
    description: 'Net Promoter Score ou proxy de satisfação agregado.',
    formula: 'NPS = % promotores − % detratores',
  },
  ind_ruptura: {
    description: 'Ocorrência de ruptura de estoque (linhas ou SKUs sem saldo à venda).',
    formula: 'Ruptura (%) = (SKUs em ruptura ÷ SKUs ativos) × 100%',
  },
  ind_ee: {
    description: 'Participação de vendas ou pedidos via encomenda expressa.',
    formula: 'EE (%) = (volume EE ÷ volume total) × 100%',
  },
  ind_ppa: {
    description: 'Mesmo conceito de PPA, no painel de indicadores operacionais.',
    formula: 'PPA (%) = (alterações realizadas ÷ necessárias) × 100%',
  },
  ind_cko_movel: {
    description: 'Uso do checkout móvel frente ao total de transações elegíveis.',
    formula: 'Cko Móvel (%) = (transações cko móvel ÷ transações elegíveis) × 100%',
  },
  ind_conv_click: {
    description: 'Conversão do funil click & retire (clique até retirada).',
    formula: 'Conv. (%) = (retiradas ÷ cliques) × 100%',
  },
  ind_match_preco: {
    description: 'Match de preço no recorte de indicadores.',
    formula: 'Match (%) = (vendas com match ÷ total de vendas) × 100%',
  },
  ind_qtd_personalizacoes: {
    description: 'Quantidade de serviços de personalização no período.',
    formula: 'Contagem de ordens de personalização',
  },
  ind_vlr_personalizacoes: {
    description: 'Valor total cobrado ou custeado em personalizações.',
    formula: 'Σ (qtd × preço unitário de personalização)',
  },
};

export function getMetricDictionaryEntry(metricId: string): MetricDictionaryEntry {
  return METRIC_DICTIONARY[metricId] ?? FB;
}
