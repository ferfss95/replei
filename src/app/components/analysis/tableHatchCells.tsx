import React from 'react';
import { TABLE_HATCH_FILL_STYLE } from '../../constants/tableModuleTheme';

/**
 * Faixa de hachura lateral: mesma altura da tabela (fit-content), largura mínima 100%.
 * O vazio abaixo das linhas fica com o fundo cinza do scroll (#F1F1F1), sem hachura.
 */
export const TABLE_HATCH_SURFACE_STYLE: React.CSSProperties = {
  minWidth: '100%',
  width: 'max-content',
  height: 'fit-content',
  ...TABLE_HATCH_FILL_STYLE,
};

export function TableHatchSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="shrink-0 align-top" style={TABLE_HATCH_SURFACE_STYLE}>
      {children}
    </div>
  );
}
