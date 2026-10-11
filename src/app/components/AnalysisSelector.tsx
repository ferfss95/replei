import React, { useState } from 'react';
import { ChevronDown, BarChart3, ScanSearch, CalendarSync, ArrowLeftRight, Clock } from 'lucide-react';
import * as Popover from '@radix-ui/react-popover';
import { cn } from '../utils';
import type { AnalysisMode } from '../types/wizard';
import {
  SELECTION_MENU_CONTENT_CLASS,
  SelectionMenuPanel,
  SelectionOptionCard,
} from './SelectionOptionCard';

interface AnalysisOption {
  id: AnalysisMode;
  label: string;
  Icon: React.ElementType;
  desc: string;
}

interface AnalysisSelectorProps {
  value: AnalysisMode;
  onChange: (mode: AnalysisMode) => void;
  supportsHoraAHora: boolean;
  supportsCapacidadeExposicao?: boolean;
  disabled?: boolean;
  /**
   * `box` (padrão): campo com rótulo "Tipo de Análise".
   * `title`: o próprio título da página vira o gatilho (texto grande + seta).
   */
  variant?: 'box' | 'title';
  /** Texto exibido no gatilho da variante `title` (ex.: "Análise Consolidada"). */
  titleLabel?: string;
  /** Cor de destaque da opção selecionada (cor do módulo). */
  accentColor?: string;
  /** Tom escuro do módulo para o texto da opção selecionada. */
  accentTextColor?: string;
}

/** Nomes, descrições e ícones dos tipos de análise (menu "Alterar tipo de análise"). */
export const ANALYSIS_OPTIONS: AnalysisOption[] = [
  { id: 'padrao', label: 'Análise Consolidada', Icon: ScanSearch, desc: 'Acompanhar o acumulado no período' },
  { id: 'capacidade_exposicao', label: 'Análise de Capacidade de Exposição', Icon: BarChart3, desc: 'Acompanhar a capacidade de exposição das lojas' },
  { id: 'evolucao', label: 'Análise de Evolução Temporal', Icon: CalendarSync, desc: 'Visualizar os dados por períodos sequenciais.' },
  { id: 'comparativo', label: 'Análise Comparativa de Períodos', Icon: ArrowLeftRight, desc: 'Confrontar 2 blocos de tempo diferentes.' },
  { id: 'horaahora', label: 'Análise por Hora', Icon: Clock, desc: 'Visualizar os dados no hora a hora.' },
];

export function AnalysisSelector({
  value,
  onChange,
  supportsHoraAHora,
  supportsCapacidadeExposicao = false,
  disabled = false,
  variant = 'box',
  titleLabel,
  accentColor = '#2563EB',
  accentTextColor,
}: AnalysisSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Filter options based on module support
  const availableOptions = ANALYSIS_OPTIONS.filter(opt => {
    if (opt.id === 'horaahora' && !supportsHoraAHora) return false;
    if (opt.id === 'capacidade_exposicao' && !supportsCapacidadeExposicao) return false;
    return true;
  });

  const selectedOption = availableOptions.find(opt => opt.id === value) || availableOptions[0];

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        {variant === 'title' ? (
          <button
            type="button"
            disabled={disabled}
            title="Alterar tipo de análise"
            className="group -mx-1.5 flex items-center gap-2 rounded-lg px-1.5 py-0.5 transition-colors enabled:hover:bg-black/[0.04] disabled:cursor-default"
          >
            <span className="text-[24px] font-bold leading-8 tracking-[-0.01em] text-[#1F2937]">
              {titleLabel ?? selectedOption.label}
            </span>
            <ChevronDown
              size={20}
              strokeWidth={2.25}
              className={cn(
                'shrink-0 text-[#52525B] transition-transform duration-200',
                isOpen && 'rotate-180',
              )}
            />
          </button>
        ) : (
        <button
          disabled={disabled}
          className={cn(
            'w-full h-[52px] px-3.5 flex items-center justify-between rounded-lg border transition-all',
            'bg-white text-[13px] font-medium text-[#314158]',
            disabled
              ? 'border-slate-200 bg-slate-50 cursor-not-allowed opacity-60'
              : 'border-[#d5dbe3] hover:border-[#314158] hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#314158]/20 focus:border-[#314158]',
            isOpen && 'border-[#314158] ring-2 ring-[#314158]/20'
          )}
        >
          <div className="flex flex-col items-start gap-0.5 min-w-0">
            <span
              className={cn(
                'text-[10px] font-semibold uppercase tracking-wide',
                isOpen ? 'text-[#314158]' : 'text-[#90A1B9]'
              )}
            >
              Tipo de Análise
            </span>
            <div className="flex items-center gap-2">
              <selectedOption.Icon size={14} className="text-[#314158] shrink-0" strokeWidth={1.5} />
              <span className="text-[13px] font-medium text-[#314158] truncate">
                {selectedOption.label}
              </span>
            </div>
          </div>
          <ChevronDown
            size={16}
            className={cn(
              "text-[#90A1B9] shrink-0 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>
        )}
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className={SELECTION_MENU_CONTENT_CLASS} sideOffset={8} align="start">
          <SelectionMenuPanel title="Alterar tipo de análise">
            {availableOptions.map(({ id, label, Icon, desc }) => (
              <SelectionOptionCard
                key={id}
                selected={value === id}
                onClick={() => {
                  onChange(id);
                  setIsOpen(false);
                }}
                icon={<Icon size={22} strokeWidth={1.5} />}
                title={label}
                description={desc}
                accentColor={accentColor}
                accentTextColor={accentTextColor}
              />
            ))}
          </SelectionMenuPanel>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
