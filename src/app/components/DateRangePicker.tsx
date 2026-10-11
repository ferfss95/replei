import React, { useState, useCallback } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Calendar as CalendarIcon, CalendarDays } from 'lucide-react';
import { Calendar } from './ui/calendar';
import { cn } from '../utils';
import type { AnalysisMode } from '../types/wizard';
import { isCalendarDayBlocked } from '../utils/dateSelectionRules';

interface DateRangePickerProps {
  startDate: string; // formato: DD/MM/YYYY
  endDate: string;
  onStartChange: (value: string) => void;
  onEndChange: (value: string) => void;
  disabled?: boolean;
  analysisMode?: AnalysisMode;
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onStartChange,
  onEndChange,
  disabled = false,
  analysisMode,
}) => {
  const [open, setOpen] = useState(false);
  const [clickPhase, setClickPhase] = useState<'start' | 'end'>('start');
  const [hoverDate, setHoverDate] = useState<Date | undefined>(undefined);

  // ─── Utilitários ─────────────────────────────────────────────────────────
  const parseDate = (dateStr: string): Date | undefined => {
    if (!dateStr) return undefined;
    const parts = dateStr.split('/');
    if (parts.length !== 3) return undefined;
    const d = new Date(+parts[2], +parts[1] - 1, +parts[0]);
    return isNaN(d.getTime()) ? undefined : d;
  };

  const formatDate = (date: Date): string => {
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
  };

  // Normaliza para meia-noite local (evita comparações com fuso)
  const toDay = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const formatDisplayDate = (dateStr: string): string => {
    const date = parseDate(dateStr);
    if (!date) return '';
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return `${date.getDate()} ${months[date.getMonth()]}. de ${date.getFullYear()}`;
  };

  const start = parseDate(startDate);
  const end   = parseDate(endDate);

  const defaultMonth = (() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() - 1, 1);
  })();

  // ─── Hover preview ────────────────────────────────────────────────────────
  // Ativo somente na fase 'end': âncora definida, sem fim ainda
  const isHoverActive = clickPhase === 'end' && !!start && !end;

  const previewFrom = isHoverActive && hoverDate
    ? (toDay(hoverDate) < toDay(start!) ? hoverDate : start!)
    : undefined;
  const previewTo = isHoverActive && hoverDate
    ? (toDay(hoverDate) < toDay(start!) ? start! : hoverDate)
    : undefined;

  const handleDayMouseEnter = useCallback((date: Date) => {
    if (isHoverActive) setHoverDate(date);
  }, [isHoverActive]);

  const handleDayMouseLeave = useCallback(() => {
    setHoverDate(undefined);
  }, []);

  // ─── Lógica de clique — totalmente manual, sem interferência do rdp ───────
  const handleDayClick = useCallback((date: Date, modifiers: Record<string, boolean>) => {
    // Ignora dias externos ao mês e dias desabilitados
    if (modifiers.outside || modifiers.disabled) return;
    if (analysisMode && isCalendarDayBlocked(date, analysisMode)) return;

    setHoverDate(undefined);
    const clicked = toDay(date);

    if (clickPhase === 'start') {
      // 1º clique: define início, limpa fim
      onStartChange(formatDate(clicked));
      onEndChange('');
      setClickPhase('end');
    } else {
      // 2º clique: define fim com auto-correção cronológica
      const anchor = start ? toDay(start) : clicked;

      if (clicked.getTime() === anchor.getTime()) {
        // Clicou na própria âncora: mantém âncora, aguarda 2º clique
        return;
      }

      if (clicked < anchor) {
        // Clicou antes da âncora: troca os papéis
        onStartChange(formatDate(clicked));
        onEndChange(formatDate(anchor));
      } else {
        onEndChange(formatDate(clicked));
      }
      setClickPhase('start');
    }
  }, [clickPhase, start, onStartChange, onEndChange, analysisMode]);

  // ─── Modificadores visuais ────────────────────────────────────────────────
  const startDay = start ? toDay(start) : undefined;
  const endDay   = end   ? toDay(end)   : undefined;

  const modifiers = {
    // Range confirmado
    range_start:  startDay ? [startDay] : [],
    range_end:    endDay   ? [endDay]   : [],
    range_middle: startDay && endDay
      ? (d: Date) => { const n = toDay(d); return n > startDay && n < endDay; }
      : [],
    // Preview hover
    hover_preview: previewFrom && previewTo
      ? (d: Date) => { const n = toDay(d); return n > toDay(previewFrom) && n < toDay(previewTo); }
      : [],
    hover_end:   previewTo   && (!start || toDay(previewTo).getTime()   !== toDay(start).getTime()) ? [previewTo]   : [],
    hover_start: previewFrom && (!start || toDay(previewFrom).getTime() !== toDay(start).getTime()) ? [previewFrom] : [],
  };

  const modifiersClassNames = {
    range_start:   'bg-[#314158] text-white hover:bg-[#314158] hover:text-white rounded-l-md rounded-r-none',
    range_end:     'bg-[#314158] text-white hover:bg-[#314158] hover:text-white rounded-r-md rounded-l-none',
    range_middle:  'bg-[#e2e8f0] text-[#314158] rounded-none hover:bg-[#cbd5e1]',
    hover_preview: 'bg-[#e2e8f0] text-[#314158] rounded-none',
    hover_end:     'bg-[#cbd5e1] text-[#314158] rounded-md',
    hover_start:   'bg-[#cbd5e1] text-[#314158] rounded-md',
  };

  return (
    <Popover.Root
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (isOpen) {
          setClickPhase('start');
          setHoverDate(undefined);
        }
      }}
    >
      <Popover.Trigger asChild>
        <button
          type="button"
          disabled={disabled}
          className={cn(
            'w-full h-[48px] pl-4 pr-2 flex items-center gap-3 rounded-[10px] border transition-all',
            'bg-white text-[14px] font-normal text-[#3F3F46]',
            disabled
              ? 'border-slate-200 bg-slate-50 cursor-not-allowed opacity-60'
              : 'border-[#E4E4E7] hover:border-[#A1A1AA] hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#314158]/15 focus:border-[#A1A1AA]'
          )}
        >
          <CalendarDays size={16} strokeWidth={1.75} className="shrink-0 text-[#52525B]" aria-hidden />

          {/* Início */}
          <span
            className={cn(
              'flex-1 rounded-md px-2 py-1 text-left whitespace-nowrap transition-colors',
              open && clickPhase === 'start' ? 'bg-[#F4F4F5]' : ''
            )}
          >
            <span className="sr-only">Início: </span>
            {startDate ? formatDisplayDate(startDate) : '—'}
          </span>

          {/* Divisor */}
          <span className="shrink-0 text-[#A1A1AA]" aria-hidden>—</span>

          {/* Fim */}
          <span
            className={cn(
              'flex-1 rounded-md px-2 py-1 text-left whitespace-nowrap transition-colors',
              open && clickPhase === 'end' ? 'bg-[#F4F4F5]' : ''
            )}
          >
            <span className="sr-only">Fim: </span>
            {endDate ? formatDisplayDate(endDate) : '—'}
          </span>
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="z-50 bg-white rounded-xl border border-[#d5dbe3] shadow-lg p-0 w-auto"
          align="start"
          sideOffset={4}
        >
          <div className="flex flex-col">
            {/* Hint de fase */}
            <div className="px-4 pt-3 pb-1">
              <span className="text-[11px] font-semibold text-[#314158] uppercase tracking-wide">
                {clickPhase === 'start'
                  ? '① Selecione a data de início'
                  : '② Selecione a data de fim'}
              </span>
            </div>

            {/* Calendar — mode="single" para desativar máquina de estado do rdp */}
            <div className="p-4">
              <Calendar
                mode="single"
                selected={undefined}
                onDayClick={handleDayClick}
                numberOfMonths={2}
                defaultMonth={defaultMonth}
                analysisMode={analysisMode}
                onDayMouseEnter={handleDayMouseEnter}
                onDayMouseLeave={handleDayMouseLeave}
                modifiers={modifiers}
                modifiersClassNames={modifiersClassNames}
                classNames={{
                  months:   'flex gap-4',
                  month:    'flex flex-col gap-2',
                  caption:  'flex justify-center pt-1 pb-2 relative items-center',
                  caption_label: 'text-sm font-semibold text-[#314158]',
                  nav:      'flex items-center gap-1',
                  nav_button:
                    'inline-flex items-center justify-center rounded-md size-7 bg-transparent hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors',
                  nav_button_previous: 'absolute left-0',
                  nav_button_next:     'absolute right-0',
                  table:     'border-collapse w-full',
                  head_row:  'flex',
                  head_cell: 'text-[10px] font-medium text-slate-400 w-9 text-center',
                  row:       'flex w-full mt-1',
                  cell:      'relative p-0 text-center text-sm focus-within:relative focus-within:z-20',
                  day: cn(
                    'inline-flex items-center justify-center rounded-md size-9 p-0 font-normal text-sm',
                    'text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer'
                  ),
                  day_today:    'font-semibold border border-[#314158]/30',
                  day_outside:  'invisible pointer-events-none',
                  day_disabled: 'text-slate-300 opacity-30 hover:bg-transparent cursor-not-allowed',
                  day_hidden:   'invisible',
                  // Sem day_selected: o rdp não gerencia seleção — nós gerenciamos via modifiers
                  day_selected: '',
                }}
                formatters={{
                  formatCaption: (date: Date) => {
                    const months = [
                      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
                    ];
                    return `${months[date.getMonth()]} ${date.getFullYear()}`;
                  },
                  formatWeekdayName: (date: Date) =>
                    ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][date.getDay()],
                }}
              />
            </div>

            {/* Footer */}
            <div className="px-4 pb-4 pt-2 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setOpen(false)}
                disabled={!startDate || !endDate}
                className={cn(
                  'px-6 py-2 text-[12px] font-medium rounded-lg transition-colors',
                  startDate && endDate
                    ? 'bg-[#314158] hover:bg-[#455a73] text-white cursor-pointer'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                )}
              >
                Aplicar
              </button>
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};