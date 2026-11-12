/**
 * Feedback da análise (protótipo).
 *
 * Ao sair de uma análise, o usuário responde se ela respondeu ao que ele estava
 * investigando e, quando não respondeu (ou respondeu em parte), o que faltou.
 * As respostas ficam no localStorage do navegador (protótipo) e podem ser
 * exportadas em CSV. Toda leitura/escrita passa por este arquivo, para que a
 * troca por um backend afete apenas este módulo.
 */

/** v2: modelo "respondeu + motivos" (a v1 usava nota 1–5 + expectativa). */
export const FEEDBACK_STORAGE_KEY = 'replei.feedback.v2';
export const FEEDBACK_COMMENT_MAX = 500;

/** "Esta análise respondeu ao que você estava investigando?" */
export type FeedbackRespondeu = 'sim' | 'parcial' | 'nao';

/** "O que faltou para responder?" (só quando `parcial` ou `nao`). */
export type FeedbackMotivo =
  | 'faltou_metrica_atributo'
  | 'periodo_recorte'
  | 'numeros_incorretos'
  | 'dificil_entender'
  | 'outro';

/** Contexto da análise calculada, capturado automaticamente. */
export interface AnalysisFeedbackContext {
  module: string;
  analysisMode: string;
  selectedMetrics: string[];
  grouping: string[];
  selections: Record<string, string[]>;
  exclusions: Record<string, string[]>;
  periodType: string;
  canalVisao: string;
  digitalModo: string | null;
  /** Campos de período serializados (datas, meses, anos, comparativos). */
  periodo: Record<string, unknown>;
}

/** `respondido`: usuário avaliou. `ignorado`: a pesquisa foi aberta e fechada sem resposta. */
export type FeedbackStatus = 'respondido' | 'ignorado';

export interface AnalysisFeedbackRecord {
  id: string;
  createdAt: string;
  /** Identificador do cálculo: no máximo um registro por análise gerada. */
  runId: number;
  status: FeedbackStatus;
  /** Indicador principal: a análise respondeu à investigação? */
  respondeu: FeedbackRespondeu | null;
  /** Diagnóstico quando `parcial`/`nao` (vazio quando `sim` ou ignorado). */
  motivos: FeedbackMotivo[];
  /** Texto livre opcional. */
  comentario: string;
  /** Tempo, em segundos, em que a análise ficou visível antes de sair. */
  tempoVisualizacaoS: number;
  contexto: AnalysisFeedbackContext;
}

/** Tempo mínimo de visualização para a pesquisa aparecer ao sair da análise. */
export const FEEDBACK_MIN_VIEW_MS = 10_000;

export const RESPONDEU_OPTIONS: FeedbackRespondeu[] = ['sim', 'parcial', 'nao'];

export const RESPONDEU_LABEL: Record<FeedbackRespondeu, string> = {
  sim: 'Sim, totalmente',
  parcial: 'Em parte',
  nao: 'Não',
};

export const MOTIVO_OPTIONS: FeedbackMotivo[] = [
  'faltou_metrica_atributo',
  'periodo_recorte',
  'numeros_incorretos',
  'dificil_entender',
  'outro',
];

export const MOTIVO_LABEL: Record<FeedbackMotivo, string> = {
  faltou_metrica_atributo: 'Faltou uma métrica ou um atributo',
  periodo_recorte: 'O período ou o recorte não era o que eu precisava',
  numeros_incorretos: 'Os números não parecem corretos ou não batem com outra fonte',
  dificil_entender: 'Não consegui entender ou ler o resultado',
  outro: 'Outro motivo',
};

/** Motivos só se aplicam quando a análise não respondeu totalmente. */
export function precisaMotivo(respondeu: FeedbackRespondeu | null): boolean {
  return respondeu === 'parcial' || respondeu === 'nao';
}

function newId(): string {
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
  } catch {
    // ignora e usa o fallback
  }
  return `fb_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

/** Lê todos os feedbacks salvos. Nunca lança: retorna [] se algo falhar. */
export function readFeedbacks(): AnalysisFeedbackRecord[] {
  try {
    const raw = window.localStorage.getItem(FEEDBACK_STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as AnalysisFeedbackRecord[]) : [];
  } catch {
    return [];
  }
}

/** Salva um novo feedback. Retorna false se o navegador bloquear o armazenamento. */
export function saveFeedback(
  input: Omit<AnalysisFeedbackRecord, 'id' | 'createdAt'>,
): boolean {
  const record: AnalysisFeedbackRecord = {
    ...input,
    motivos: precisaMotivo(input.respondeu) ? input.motivos : [],
    comentario: input.comentario.trim().slice(0, FEEDBACK_COMMENT_MAX),
    id: newId(),
    createdAt: new Date().toISOString(),
  };
  try {
    const current = readFeedbacks();
    window.localStorage.setItem(
      FEEDBACK_STORAGE_KEY,
      JSON.stringify([...current, record]),
    );
    return true;
  } catch {
    return false;
  }
}

const CSV_HEADERS = [
  'id',
  'data_hora',
  'run_id',
  'status',
  'tempo_visualizacao_s',
  'modulo',
  'modo_analise',
  'respondeu',
  'motivos',
  'comentario',
  'metricas',
  'agrupamento',
  'canal_visao',
  'digital_modo',
  'periodo_tipo',
  'selecoes_json',
  'exclusoes_json',
  'periodo_json',
];

function csvCell(value: unknown): string {
  const text = value === null || value === undefined ? '' : String(value);
  return `"${text.replace(/"/g, '""')}"`;
}

/** Gera CSV (separador ';', UTF-8 com BOM) para abrir direto no Excel pt-BR. */
export function feedbacksToCsv(records: AnalysisFeedbackRecord[]): string {
  const lines = records.map((r) => {
    const c = r.contexto;
    const cells: unknown[] = [
      r.id,
      r.createdAt,
      r.runId,
      r.status,
      r.tempoVisualizacaoS,
      c.module,
      c.analysisMode,
      r.respondeu ? RESPONDEU_LABEL[r.respondeu] : '',
      (r.motivos ?? []).map((m) => MOTIVO_LABEL[m] ?? m).join(' | '),
      r.comentario,
      c.selectedMetrics.join(' | '),
      c.grouping.join(' > '),
      c.canalVisao,
      c.digitalModo ?? '',
      c.periodType,
      JSON.stringify(c.selections),
      JSON.stringify(c.exclusions),
      JSON.stringify(c.periodo),
    ];
    return cells.map(csvCell).join(';');
  });
  return '﻿' + [CSV_HEADERS.join(';'), ...lines].join('\r\n');
}

/** Dispara o download do CSV com todos os feedbacks salvos. */
export function downloadFeedbacksCsv(): number {
  const records = readFeedbacks();
  const blob = new Blob([feedbacksToCsv(records)], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
  const link = document.createElement('a');
  link.href = url;
  link.download = `replei-feedback-analises-${stamp}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  return records.length;
}
