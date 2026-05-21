import React from 'react';
import { TABLE_HATCH_FILL_STYLE } from '../../constants/tableModuleTheme';

/**
 * Superfície de hachura: acompanha a largura real da tabela (max-content)
 * e, no mínimo, 100% do viewport — evita ruptura quando há scroll horizontal.
 */
export const TABLE_HATCH_SURFACE_STYLE: React.CSSProperties = {
  minWidth: '100%',
  width: 'max-content',
  minHeight: '100%',
  ...TABLE_HATCH_FILL_STYLE,
};

export function TableHatchSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col" style={TABLE_HATCH_SURFACE_STYLE}>
      {children}
      <div className="min-h-[120px] flex-1 shrink-0" aria-hidden />
    </div>
  );
}
