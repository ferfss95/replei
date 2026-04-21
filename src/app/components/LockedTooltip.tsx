/**
 * LockedTooltip Component
 * Mostra tooltip quando um elemento está bloqueado
 */

import React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { FigmaSafeDiv } from "./FigmaSafeDiv";

interface LockedTooltipProps {
  children: React.ReactNode;
  content: string;
  isLocked: boolean;
}

export const LockedTooltip = ({
  children,
  content,
  isLocked,
}: LockedTooltipProps) => {
  if (!isLocked) return <>{children}</>;

  return (
    <RadixTooltip.Root delayDuration={0}>
      <RadixTooltip.Trigger asChild>
        <FigmaSafeDiv className="h-full">
          {children}
        </FigmaSafeDiv>
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          className="z-50 bg-slate-900 text-white text-xs font-medium px-3 py-2 rounded shadow-lg animate-in fade-in zoom-in-95 max-w-[250px] text-center"
          sideOffset={5}
        >
          {content}
          <RadixTooltip.Arrow className="fill-slate-900" />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
};
