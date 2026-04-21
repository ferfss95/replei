/**
 * FigmaSafeDiv Component
 * Wrapper que filtra props do Figma inspector (_fgT, _fgS, _fgB) antes de chegar ao DOM
 */

import React from "react";

export const FigmaSafeDiv = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { _fgT, _fgS, _fgB, ...cleanProps } = props as any;
  return <div ref={ref} {...cleanProps} />;
});

FigmaSafeDiv.displayName = "FigmaSafeDiv";
