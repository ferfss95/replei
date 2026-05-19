import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { Check, Info } from 'lucide-react';
import { cn } from '../utils';
import {
  getMetricOrientation,
  METRIC_INFO_ICON_COLOR,
  type MetricOrientationSource,
} from '../data/metricOrientation';

const TOOLTIP_CONTENT_CLASS =
  'z-[100] max-w-[300px] rounded-lg bg-slate-900 px-3.5 py-2.5 text-left shadow-lg animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95';

export function MetricOrientationTooltipBody({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <>
      <p className="text-[13px] font-semibold leading-snug text-white">{title}</p>
      {description ? (
        <p className="mt-1.5 text-[12px] font-normal leading-relaxed text-slate-200 whitespace-pre-line">
          {description}
        </p>
      ) : null}
    </>
  );
}

function MetricOrientationTooltipPortal({
  title,
  description,
  side = 'top',
}: {
  title: string;
  description?: string;
  side?: React.ComponentProps<typeof RadixTooltip.Content>['side'];
}) {
  return (
    <RadixTooltip.Portal>
      <RadixTooltip.Content className={TOOLTIP_CONTENT_CLASS} sideOffset={6} side={side}>
        <MetricOrientationTooltipBody title={title} description={description} />
        <RadixTooltip.Arrow className="fill-slate-900" />
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  );
}

type MetricOrientationTriggerProps = {
  metricId: string;
  metric?: MetricOrientationSource;
  delayDuration?: number;
  side?: React.ComponentProps<typeof RadixTooltip.Content>['side'];
};

/** Ícone (i) na sidebar — visível no hover do card; opacidade 50% → 100% no hover do ícone. */
export function MetricInfoIconTooltip({
  metricId,
  metric,
  delayDuration = 200,
  side = 'left',
}: MetricOrientationTriggerProps) {
  const [iconHovered, setIconHovered] = React.useState(false);
  const { title, description } = getMetricOrientation(metricId, metric);

  return (
    <RadixTooltip.Root delayDuration={delayDuration}>
      <RadixTooltip.Trigger asChild>
        <span
          role="img"
          aria-label={`Informações sobre ${title}`}
          className="inline-flex shrink-0 cursor-help rounded-sm p-0.5"
          onMouseEnter={() => setIconHovered(true)}
          onMouseLeave={() => setIconHovered(false)}
          onClick={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <Info
            size={14}
            aria-hidden
            style={{
              color: METRIC_INFO_ICON_COLOR,
              opacity: iconHovered ? 1 : 0.5,
              transition: 'opacity 150ms ease',
            }}
          />
        </span>
      </RadixTooltip.Trigger>
      <MetricOrientationTooltipPortal title={title} description={description} side={side} />
    </RadixTooltip.Root>
  );
}

/** Check (✓) na sidebar — tooltip ao passar o mouse sobre o ícone (métrica selecionada). */
export function MetricCheckIconTooltip({
  metricId,
  metric,
  iconColor,
  delayDuration = 200,
  side = 'left',
}: MetricOrientationTriggerProps & { iconColor: string }) {
  const { title, description } = getMetricOrientation(metricId, metric);

  return (
    <RadixTooltip.Root delayDuration={delayDuration}>
      <RadixTooltip.Trigger asChild>
        <span
          role="img"
          aria-label={`Informações sobre ${title}`}
          className="inline-flex shrink-0 cursor-help rounded-sm p-0.5"
          onClick={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <Check size={14} className="shrink-0" style={{ color: iconColor }} aria-hidden />
        </span>
      </RadixTooltip.Trigger>
      <MetricOrientationTooltipPortal title={title} description={description} side={side} />
    </RadixTooltip.Root>
  );
}

/** Cabeçalho de coluna de métrica na tabela (etapa Resultado) — hover no header inteiro. */
export function MetricColumnHeaderTooltip({
  metricId,
  metric,
  children,
  delayDuration = 300,
  side = 'top',
  className,
  style,
  colSpan,
}: MetricOrientationTriggerProps & {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  colSpan?: number;
}) {
  const { title, description } = getMetricOrientation(metricId, metric);

  return (
    <RadixTooltip.Root delayDuration={delayDuration}>
      <RadixTooltip.Trigger asChild>
        <th colSpan={colSpan} className={cn('cursor-help', className)} style={style}>
          {children}
        </th>
      </RadixTooltip.Trigger>
      <MetricOrientationTooltipPortal title={title} description={description} side={side} />
    </RadixTooltip.Root>
  );
}
