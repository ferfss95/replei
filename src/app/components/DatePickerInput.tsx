import React, { useState, useCallback } from 'react';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar as CalendarIcon } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

/** Parse DD/MM/YYYY string to Date object */
function parseDateBR(str: string): Date | undefined {
  if (!str) return undefined;
  const parts = str.split('/');
  if (parts.length !== 3) return undefined;
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);
  if (isNaN(day) || isNaN(month) || isNaN(year)) return undefined;
  const d = new Date(year, month, day);
  if (d.getDate() !== day || d.getMonth() !== month || d.getFullYear() !== year) return undefined;
  return d;
}

/** Format Date to DD/MM/YYYY */
function formatDateBR(date: Date): string {
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

/** Get today as Date (para permitir seleção do dia atual) */
function getToday(): Date {
  const d = new Date();
  d.setHours(23, 59, 59, 999);
  return d;
}

/** Localized month/day names in pt-BR */
const PT_BR_MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];
const PT_BR_WEEKDAYS_SHORT = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

interface DatePickerInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  displayValue?: string; // e.g. "Ontem" override
  className?: string;
}

export function DatePickerInput({
  value,
  onChange,
  disabled = false,
  placeholder = 'DD/MM/AAAA',
  displayValue,
  className,
}: DatePickerInputProps) {
  const [open, setOpen] = useState(false);

  const selectedDate = parseDateBR(value);

  const handleSelect = useCallback(
    (day: Date | undefined) => {
      if (day) {
        onChange(formatDateBR(day));
        setOpen(false);
      }
    },
    [onChange]
  );

  // Default month to show: selected date or yesterday
  const defaultMonth = selectedDate || yesterday;

  return (
    <Popover open={open} onOpenChange={disabled ? undefined : setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <button
          type="button"
          disabled={disabled}
          className={cn(
            "w-[172px] px-[10px] py-[8px] text-[12px] bg-[#f8fafc] border border-[#e2e8f0] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#314158] focus:bg-white h-[34px] text-left flex items-center justify-between gap-1",
            disabled ? "cursor-not-allowed text-slate-400" : "text-slate-700 cursor-pointer hover:border-slate-300",
            className
          )}
        >
          <span className={cn(!value && "text-slate-400")}>
            {displayValue || value || placeholder}
          </span>
          <CalendarIcon size={12} className="text-slate-400 shrink-0" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 bg-white shadow-xl border border-slate-200 rounded-xl"
        align="start"
        sideOffset={6}
      >
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleSelect}
          defaultMonth={defaultMonth}
          disabled={(date) => date > getToday()}
          classNames={{
            months: "flex flex-col",
            month: "flex flex-col gap-2",
            caption: "flex justify-center pt-2 pb-1 relative items-center w-full px-2",
            caption_label: "text-[13px] font-semibold text-[#314158]",
            nav: "flex items-center gap-1",
            nav_button:
              "inline-flex items-center justify-center rounded-md size-7 bg-transparent hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors",
            nav_button_previous: "absolute left-2",
            nav_button_next: "absolute right-2",
            table: "w-full border-collapse",
            head_row: "flex",
            head_cell: "text-[10px] font-medium text-slate-400 w-8 text-center",
            row: "flex w-full mt-1",
            cell: "relative p-0 text-center text-[12px] focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-blue-50 [&:has([aria-selected])]:rounded-md",
            day: "inline-flex items-center justify-center rounded-md size-8 p-0 font-normal text-[12px] text-slate-700 hover:bg-slate-100 transition-colors aria-selected:opacity-100",
            day_selected:
              "bg-[#314158] text-white hover:bg-[#314158] hover:text-white focus:bg-[#314158] focus:text-white",
            day_today: "font-semibold",
            day_outside: "text-slate-300",
            day_disabled: "text-[#A8BECE] opacity-35 hover:bg-transparent cursor-not-allowed",
            day_hidden: "invisible",
          }}
          formatters={{
            formatCaption: (date) => {
              return `${PT_BR_MONTHS[date.getMonth()]} ${date.getFullYear()}`;
            },
            formatWeekdayName: (date) => {
              return PT_BR_WEEKDAYS_SHORT[date.getDay()];
            },
          }}
        />
      </PopoverContent>
    </Popover>
  );
}