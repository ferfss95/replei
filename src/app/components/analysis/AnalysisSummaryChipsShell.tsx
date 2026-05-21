import React from "react";

/**
 * Container fixo das chips do resumo — sem card.
 * A faixa superior reserva altura para metadados (ex.: Intraday) e evita “tremida” ao trocar etapa/módulo.
 */
export function AnalysisSummaryChipsShell({
  metaSlot,
  children,
}: {
  metaSlot?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex-none w-full">
      {metaSlot ? (
        <div className="mb-2 flex min-h-[21px] items-center justify-end">{metaSlot}</div>
      ) : null}
      <div className="flex min-h-[30px] flex-wrap items-center gap-2">{children}</div>
    </div>
  );
}
