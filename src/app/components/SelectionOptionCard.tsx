/**
 * Cartão de opção dos menus "Alterar tipo de análise" e "Alterar Módulo":
 * ícone/miniatura à esquerda, título + descrição e check quando selecionado.
 */
import React from "react";
import { Check } from "lucide-react";
import { cn } from "../utils";
import { UI, tint } from "../constants/uiTheme";

interface SelectionOptionCardProps {
  selected: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  description: string;
  /** Cor de destaque do estado selecionado (cor do módulo). */
  accentColor: string;
  /** Tom mais escuro para o texto selecionado (opcional). */
  accentTextColor?: string;
  titleClassName?: string;
}

export function SelectionOptionCard({
  selected,
  onClick,
  icon,
  title,
  description,
  accentColor,
  accentTextColor,
  titleClassName,
}: SelectionOptionCardProps) {
  const textAccent = accentTextColor ?? accentColor;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "group flex w-full items-center gap-3 rounded-[10px] border px-4 py-3 text-left outline-none transition-all duration-150",
        !selected && "hover:border-[#C4C4CC] hover:bg-[#FAFAFB]",
      )}
      style={{
        backgroundColor: selected ? tint(accentColor, 0.1) : "#FFFFFF",
        borderColor: selected ? accentColor : "#E4E4E7",
      }}
    >
      <span
        className="flex shrink-0 items-center justify-center"
        style={{ color: selected ? textAccent : UI.muted }}
      >
        {icon}
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span
          className={cn("text-[15px] leading-5", selected ? "font-semibold" : "font-normal", titleClassName)}
          style={{ color: selected ? textAccent : "#52525B" }}
        >
          {title}
        </span>
        <span
          className="text-[12px] leading-4"
          style={{ color: selected ? textAccent : UI.muted }}
        >
          {description}
        </span>
      </span>
      <span
        className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: selected ? accentColor : "transparent" }}
        aria-hidden
      >
        {selected && <Check size={12} strokeWidth={3} className="text-white" />}
      </span>
    </button>
  );
}

/** Moldura padrão dos menus (título com divisória + lista de cartões). */
export function SelectionMenuPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h3 className="border-b border-[#EDEDEF] px-4 pb-3 pt-3.5 text-[16px] font-bold" style={{ color: UI.title }}>
        {title}
      </h3>
      <div className="flex flex-col gap-2.5 p-4">{children}</div>
    </>
  );
}

/** Classe do container (Popover.Content) dos menus. */
export const SELECTION_MENU_CONTENT_CLASS =
  "z-[120] w-[420px] overflow-hidden rounded-[14px] border border-[#E7E7EA] bg-white shadow-[0_12px_32px_rgba(16,24,40,0.14)] animate-in fade-in zoom-in-95 duration-200";
