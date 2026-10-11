/**
 * Seletores do CANAL: visão Operacional / Corporativo e, para o canal digital,
 * Origem do faturamento / Destino do pedido. Usados no modal CANAL e no resumo.
 */
import React from "react";
import { cn } from "../utils";
import type { ModuleColors } from "../constants/moduleColors";
import { CANAL_VISAO_LABEL, type CanalVisao } from "../data/canalOmni";
import {
  DIGITAL_MODO_DESCRICAO,
  DIGITAL_MODO_LABEL,
  type DigitalModo,
} from "../data/digitalOrigemDestino";

interface SegmentedToggleProps<T extends string> {
  value: T;
  options: readonly T[];
  labels: Record<T, string>;
  onChange: (value: T) => void;
  moduleColors: Pick<ModuleColors, "primaryColor">;
  ariaLabel: string;
}

function SegmentedToggle<T extends string>({
  value,
  options,
  labels,
  onChange,
  moduleColors,
  ariaLabel,
}: SegmentedToggleProps<T>) {
  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className="grid grid-cols-2 gap-1 rounded-lg bg-slate-100 p-1"
    >
      {options.map((opt) => {
        const active = opt === value;
        return (
          <button
            key={opt}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(opt)}
            className={cn(
              "rounded-md px-2 py-1.5 text-[11px] font-bold uppercase tracking-wide transition-all",
              active ? "bg-white shadow-sm" : "text-slate-500 hover:text-slate-700",
            )}
            style={active ? { color: moduleColors.primaryColor } : undefined}
          >
            {labels[opt]}
          </button>
        );
      })}
    </div>
  );
}

const VISOES: readonly CanalVisao[] = ["operacional", "corporativo"];

export function CanalVisaoToggle(props: {
  visao: CanalVisao;
  onChange: (visao: CanalVisao) => void;
  moduleColors: Pick<ModuleColors, "primaryColor">;
}) {
  return (
    <SegmentedToggle
      value={props.visao}
      options={VISOES}
      labels={CANAL_VISAO_LABEL}
      onChange={props.onChange}
      moduleColors={props.moduleColors}
      ariaLabel="Visão do canal"
    />
  );
}

const MODOS_DIGITAL: readonly DigitalModo[] = ["origem", "destino"];

/**
 * Escolha compacta exibida logo abaixo do canal marcado (Digital / Encomenda
 * Expressa) no modal CANAL — a localização segue a Origem ou o Destino.
 */
export function DigitalModoInline(props: {
  modo: DigitalModo;
  onChange: (modo: DigitalModo) => void;
  moduleColors: Pick<ModuleColors, "primaryColor">;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="Localização: origem do faturamento ou destino do pedido"
      className="mb-1 ml-10 flex items-center gap-1 text-[10px]"
    >
      <span className="text-slate-400">Localização:</span>
      {MODOS_DIGITAL.map((m) => {
        const active = m === props.modo;
        return (
          <button
            key={m}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => props.onChange(m)}
            title={DIGITAL_MODO_DESCRICAO[m]}
            className={cn(
              "rounded-full border px-2 py-px text-[10px] font-semibold leading-4 transition-colors",
              active ? "bg-white" : "border-slate-200 text-slate-500 hover:border-slate-300",
            )}
            style={
              active
                ? { color: props.moduleColors.primaryColor, borderColor: props.moduleColors.primaryColor }
                : undefined
            }
          >
            {DIGITAL_MODO_LABEL[m]}
          </button>
        );
      })}
    </div>
  );
}

export function DigitalModoToggle(props: {
  modo: DigitalModo;
  onChange: (modo: DigitalModo) => void;
  moduleColors: Pick<ModuleColors, "primaryColor">;
}) {
  return (
    <SegmentedToggle
      value={props.modo}
      options={MODOS_DIGITAL}
      labels={DIGITAL_MODO_DESCRICAO}
      onChange={props.onChange}
      moduleColors={props.moduleColors}
      ariaLabel="Canal digital: origem ou destino"
    />
  );
}
