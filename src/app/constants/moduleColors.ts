/**
 * Module Color Configuration
 * Define as cores específicas de cada módulo (PRODUTO, LOJA, EXTRAVIOS, INDICADORES)
 *
 * Paleta atualizada em P15 - Ajustes de Layout
 *
 * Referência de tokens por módulo:
 *   COR1 = Principal / BG Header / Steppers ativos
 *   COR2 = Complementar / Ícones
 *   COR3 = Destaque / Focus / Hover
 *   COR4 = Secundária
 *
 * Nem todos os tokens são aplicados imediatamente — os campos estão armazenados
 * aqui como fonte única de verdade para uso progressivo nos componentes.
 */

import type { Module } from '../constants';

// ─────────────────────────────────────────────────────────────────────────────
// Paleta Neutra — aplicada em TODO o sistema
// Usada para: backgrounds, tipografia, bordas, ícones de nav, elementos secundários
// ─────────────────────────────────────────────────────────────────────────────
export const NEUTRAL_PALETTE = {
  /** COR1 — Cinza padrão para títulos principais */
  title: '#314158',
  /** COR2 — Cinza claro para ícones e complementos */
  icon: '#566878',
  /** COR3 — Tom neutro para tipografias */
  text: '#2C2C2C',
  /** COR4 — Cinza para bordas */
  border: '#D9D9D9',
  /** COR5 — Fundo claro (BG Geral) */
  background: '#F1F1F1',
  /** COR6 — Textos e orientações com menos destaque */
  muted: '#808080',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Interface de cores por módulo
// ─────────────────────────────────────────────────────────────────────────────
export interface ModuleColors {
  /** COR1 — Principal / BG Header / Steppers ativos */
  primaryColor: string;
  /** COR2 — Complementar / cor de ícone */
  iconColor: string;
  /** COR3 — Destaque / Focus / Hover */
  highlightColor: string;
  /** COR4 — Secundária */
  accentColor: string;
  /** Cor de fundo geral do módulo (usada em badges e áreas de conteúdo) */
  backgroundColor: string;
  /**
   * @deprecated Use `iconColor` — mantido apenas para compatibilidade retroativa
   * com componentes que ainda referenciam `topBarColor`.
   */
  topBarColor: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Paletas por módulo
// ─────────────────────────────────────────────────────────────────────────────
export const MODULE_COLORS: Record<Module, ModuleColors> = {
  // ── PRODUTO (Azul) ─────────────────────────────────────────────────────────
  PRODUTO: {
    primaryColor: '#2563EB',    // COR1 — Principal / BG Header
    iconColor: '#1545C6',       // COR2 — Complementar / Ícone
    highlightColor: '#A6D0FF',  // COR3 — Destaque / Focus / Hover
    accentColor: '#A8BECE',     // COR4 — Secundária
    backgroundColor: '#F8FBFF', // COR5 — Fundo branco azulado
    topBarColor: '#1545C6',     // @deprecated — alias de iconColor
  },

  // ── LOJA (Verde) ───────────────────────────────────────────────────────────
  LOJA: {
    primaryColor: '#16A34A',    // COR1 — Principal / BG Header
    iconColor: '#146829',       // COR2 — Complementar / Ícone
    highlightColor: '#80EEA8',  // COR3 — Destaque / Focus / Hover
    accentColor: '#A8CCBC',     // COR4 — Secundária
    backgroundColor: '#FBFFF8', // COR5 — Fundo branco esverdeado
    topBarColor: '#146829',     // @deprecated — alias de iconColor
  },

  // ── INDICADORES (Amarelo/Dourado) ─────────────────────────────────────────
  INDICADORES: {
    primaryColor: '#DBA500',    // COR1 — Principal / BG Header
    iconColor: '#9D7F20',       // COR2 — Complementar / Ícone
    highlightColor: '#FFFF5C',  // COR3 — Destaque / Focus / Hover
    accentColor: '#DEDFB4',     // COR4 — Secundária
    backgroundColor: '#FEFFF8', // COR5 — Fundo branco amarelado
    topBarColor: '#9D7F20',     // @deprecated — alias de iconColor
  },

  // ── EXTRAVIOS (Vermelho/Quente — Motriz 3.0 Semantic Colors) ──────────────
  EXTRAVIOS: {
    primaryColor: '#D83915',    // COR1 — Module-brand (Header global, bordas ativas)
    iconColor: '#9B260C',       // COR2 — Module-brand-strong (texto destaque, hover)
    highlightColor: '#FEEFEF',  // COR3 — Module-surface-2 (hover de tabelas, estado ativo)
    accentColor: '#DDD7D6',     // COR4 — Module-surface-1 (subheader da tabela, cards)
    backgroundColor: '#FEEFEF', // COR5 — Module-surface-2 (fundo avermelhado claro)
    topBarColor: '#9B260C',     // @deprecated — alias de iconColor
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
export const getModuleColors = (module: Module): ModuleColors => {
  return MODULE_COLORS[module] ?? MODULE_COLORS.PRODUTO;
};
