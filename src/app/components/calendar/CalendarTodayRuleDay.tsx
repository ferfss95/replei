import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { Day, type DayProps } from 'react-day-picker';
import type { AnalysisMode } from '../../types/wizard';
import {
  INTRADAY_TODAY_TOOLTIP,
  isCalendarDayBlocked,
  isSameCalendarDay,
} from '../../utils/dateSelectionRules';
import { getToday } from '../../dateUtils';

type CalendarTodayRuleDayProps = DayProps & {
  analysisMode?: AnalysisMode;
};

export function CalendarTodayRuleDay({
  analysisMode,
  date,
  displayMonth,
}: CalendarTodayRuleDayProps) {
  const showTodayTooltip =
    analysisMode != null &&
    isSameCalendarDay(date, getToday()) &&
    isCalendarDayBlocked(date, analysisMode);

  if (!showTodayTooltip) {
    return <Day date={date} displayMonth={displayMonth} />;
  }

  return (
    <RadixTooltip.Root delayDuration={200}>
      <RadixTooltip.Trigger asChild>
        <span className="inline-flex size-full items-center justify-center">
          <Day date={date} displayMonth={displayMonth} />
        </span>
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          className="z-[120] max-w-[260px] rounded-lg bg-slate-900 px-3.5 py-2.5 text-center text-[12px] font-medium leading-snug text-white shadow-lg animate-in fade-in-0 zoom-in-95"
          sideOffset={6}
        >
          {INTRADAY_TODAY_TOOLTIP}
          <RadixTooltip.Arrow className="fill-slate-900" />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
}

export function createCalendarTodayRuleComponents(analysisMode?: AnalysisMode) {
  if (!analysisMode) return undefined;

  return {
    Day: (props: DayProps) => (
      <CalendarTodayRuleDay {...props} analysisMode={analysisMode} />
    ),
  };
}
