import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { LockedTooltip } from '../LockedTooltip';
import { INTRADAY_TODAY_TOOLTIP } from '../../utils/dateSelectionRules';

/** Tooltip preventiva para mês/ano corrente bloqueados (fora do Intraday). */
export function PeriodBlockedTooltip({
  blocked,
  children,
}: {
  blocked: boolean;
  children: React.ReactNode;
}) {
  if (!blocked) return <>{children}</>;

  return (
    <LockedTooltip content={INTRADAY_TODAY_TOOLTIP} isLocked>
      {children}
    </LockedTooltip>
  );
}

/** Tooltip em linha para opções desabilitadas no seletor de período. */
export function PeriodBlockedOptionTooltip({
  blocked,
  children,
  className,
}: {
  blocked: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  if (!blocked) {
    return <>{children}</>;
  }

  return (
    <RadixTooltip.Root delayDuration={200}>
      <RadixTooltip.Trigger asChild>
        <span className={className}>{children}</span>
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          className="z-[120] max-w-[260px] rounded-lg bg-slate-900 px-3.5 py-2.5 text-center text-[12px] font-medium leading-snug text-white shadow-lg"
          sideOffset={5}
        >
          {INTRADAY_TODAY_TOOLTIP}
          <RadixTooltip.Arrow className="fill-slate-900" />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
}
