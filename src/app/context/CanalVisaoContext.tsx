/**
 * Escolhas do CANAL compartilhadas entre o card CANAL, o resumo da análise e o
 * motor da tabela:
 * - visão Operacional / Corporativo (`enabled` é false nos módulos sem as regras
 *   CANAL × OMNI, ex.: EXTRAVIOS);
 * - leitura Origem / Destino do canal digital (`digitalAtivo` quando há canal
 *   digital selecionado, em qualquer módulo).
 */
import React from "react";
import { CANAL_VISAO_DEFAULT, type CanalVisao } from "../data/canalOmni";
import { DIGITAL_MODO_DEFAULT, type DigitalModo } from "../data/digitalOrigemDestino";

export interface CanalVisaoContextValue {
  enabled: boolean;
  /** Módulo ativo (PRODUTO não tem Encomenda Expressa (3P)). */
  moduleId: string;
  visao: CanalVisao;
  setVisao: (visao: CanalVisao) => void;
  digitalAtivo: boolean;
  digitalModo: DigitalModo;
  setDigitalModo: (modo: DigitalModo) => void;
}

const CanalVisaoContext = React.createContext<CanalVisaoContextValue>({
  enabled: false,
  moduleId: "",
  visao: CANAL_VISAO_DEFAULT,
  setVisao: () => {},
  digitalAtivo: false,
  digitalModo: DIGITAL_MODO_DEFAULT,
  setDigitalModo: () => {},
});

export const CanalVisaoProvider = CanalVisaoContext.Provider;

export function useCanalVisao(): CanalVisaoContextValue {
  return React.useContext(CanalVisaoContext);
}
