import React from "react";
import { Download } from "lucide-react";
import { downloadFeedbacksCsv, readFeedbacks } from "../../data/feedback";

/**
 * Botão discreto para baixar o CSV com as respostas salvas neste navegador.
 * Fica fora da tela de análise, para não poluir o resultado.
 */
export function FeedbackExportButton({ refreshKey }: { refreshKey: unknown }) {
  // refreshKey força a recontagem quando uma nova resposta é salva.
  const count = React.useMemo(() => readFeedbacks().length, [refreshKey]);

  return (
    <button
      type="button"
      onClick={() => downloadFeedbacksCsv()}
      disabled={count === 0}
      title="Baixar as respostas de feedback salvas neste navegador"
      className="fixed bottom-3 left-3 z-40 flex items-center gap-1.5 rounded-md border border-[#D9D9DE] bg-white px-2.5 py-1.5 text-[11px] text-[#3F3F46] shadow-sm hover:bg-[#F4F4F5] disabled:cursor-not-allowed disabled:opacity-40"
    >
      <Download size={12} />
      Feedbacks ({count}) · CSV
    </button>
  );
}
