import type React from "react";

/** Superfície das chips do resumo (pill, fundo branco). */
export const ANALYSIS_SUMMARY_TAG_STYLE: React.CSSProperties = {
  backgroundColor: "#FFFFFF",
  color: "#1F2937",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "#ECECEF",
};

/** Rótulo em negrito (ex.: "PERÍODO:"); o valor usa `font-normal` no próprio span. */
export const ANALYSIS_SUMMARY_TAG_BTN_CLASS =
  "text-[13px] px-3.5 py-[7px] rounded-full flex items-center gap-1.5 font-bold hover:brightness-[0.98] transition-[filter] cursor-pointer shrink-0";
