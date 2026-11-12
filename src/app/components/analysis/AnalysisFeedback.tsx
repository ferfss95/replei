import React, { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "../ui/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  FEEDBACK_COMMENT_MAX,
  MOTIVO_LABEL,
  MOTIVO_OPTIONS,
  RESPONDEU_LABEL,
  RESPONDEU_OPTIONS,
  precisaMotivo,
  saveFeedback,
  type AnalysisFeedbackContext,
  type FeedbackMotivo,
  type FeedbackRespondeu,
} from "../../data/feedback";

/** Análise que acabou de ser consumida e aguarda avaliação. */
export interface PendingAnalysisFeedback {
  runId: number;
  context: AnalysisFeedbackContext;
  viewedMs: number;
}

interface AnalysisFeedbackDialogProps {
  /** Análise a avaliar; `null` mantém o diálogo fechado. */
  pending: PendingAnalysisFeedback | null;
  /** Chamado após responder ou pular, para limpar a pendência. */
  onDone: () => void;
  /** Cor de destaque do módulo. */
  accentColor: string;
}

/** Grava a pesquisa como aberta e fechada sem resposta. */
function registrarIgnorado(pending: PendingAnalysisFeedback) {
  saveFeedback({
    runId: pending.runId,
    status: "ignorado",
    respondeu: null,
    motivos: [],
    comentario: "",
    tempoVisualizacaoS: Math.round(pending.viewedMs / 1000),
    contexto: pending.context,
  });
}

/**
 * Pesquisa exibida ao sair da tela da análise.
 * 1. "Esta análise respondeu ao que você estava investigando?" (obrigatória)
 * 2. "O que faltou para responder?" — só para "Em parte"/"Não" (obrigatória, múltipla escolha)
 * 3. Comentário opcional, sempre visível.
 * Fechar sem responder (X, Esc, clique fora ou "Pular") grava como `ignorado`.
 */
export function AnalysisFeedbackDialog({
  pending,
  onDone,
  accentColor,
}: AnalysisFeedbackDialogProps) {
  return (
    <Dialog
      open={pending !== null}
      onOpenChange={(open) => {
        if (!open && pending) {
          registrarIgnorado(pending);
          onDone();
        }
      }}
    >
      {pending && (
        <FeedbackForm key={pending.runId} pending={pending} onDone={onDone} accentColor={accentColor} />
      )}
    </Dialog>
  );
}

function FeedbackForm({
  pending,
  onDone,
  accentColor,
}: {
  pending: PendingAnalysisFeedback;
  onDone: () => void;
  accentColor: string;
}) {
  const [respondeu, setRespondeu] = useState<FeedbackRespondeu | null>(null);
  const [motivos, setMotivos] = useState<FeedbackMotivo[]>([]);
  const [comentario, setComentario] = useState("");
  const [saveError, setSaveError] = useState(false);

  const mostrarMotivos = precisaMotivo(respondeu);
  const canSend = respondeu !== null && (!mostrarMotivos || motivos.length > 0);

  const toggleMotivo = (m: FeedbackMotivo) =>
    setMotivos((prev) => (prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]));

  const handleSend = () => {
    if (!canSend || respondeu === null) return;
    const ok = saveFeedback({
      runId: pending.runId,
      status: "respondido",
      respondeu,
      motivos,
      comentario,
      tempoVisualizacaoS: Math.round(pending.viewedMs / 1000),
      contexto: pending.context,
    });
    if (!ok) {
      setSaveError(true);
      return;
    }
    onDone();
  };

  const handleSkip = () => {
    registrarIgnorado(pending);
    onDone();
  };

  const placeholder =
    respondeu === "sim"
      ? "Algo que poderia melhorar?"
      : mostrarMotivos
        ? "O que você estava procurando e não encontrou?"
        : "Conte mais sobre a sua investigação, se quiser.";

  return (
    <DialogContent className="flex max-h-[90vh] flex-col gap-5 overflow-y-auto sm:max-w-xl">
      <DialogHeader>
        <DialogTitle>Como foi esta análise?</DialogTitle>
        <DialogDescription>
          Sua resposta ajuda a entender se as análises estão respondendo às suas investigações.
        </DialogDescription>
      </DialogHeader>

      {/* Pergunta 1 — indicador principal */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-[#1F2937]">
          Esta análise respondeu ao que você estava investigando?
        </span>
        <div className="flex flex-wrap items-center gap-1.5" role="radiogroup" aria-label="Respondeu à investigação">
          {RESPONDEU_OPTIONS.map((opt) => (
            <button
              key={opt}
              type="button"
              role="radio"
              aria-checked={respondeu === opt}
              onClick={() => setRespondeu(opt)}
              className={cn(
                "h-9 rounded-md border px-3 text-sm font-medium transition-colors",
                respondeu === opt ? "text-white" : "border-[#D9D9DE] bg-white text-[#3F3F46] hover:bg-[#F4F4F5]",
              )}
              style={respondeu === opt ? { backgroundColor: accentColor, borderColor: accentColor } : undefined}
            >
              {RESPONDEU_LABEL[opt]}
            </button>
          ))}
        </div>
      </div>

      {/* Pergunta 2 — diagnóstico (só para "Em parte" / "Não") */}
      {mostrarMotivos && (
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-[#1F2937]">
            O que faltou para responder?{" "}
            <span className="font-normal text-[#71717A]">(marque uma ou mais)</span>
          </span>
          <div className="flex flex-col gap-1.5" role="group" aria-label="O que faltou para responder">
            {MOTIVO_OPTIONS.map((m) => {
              const checked = motivos.includes(m);
              return (
                <button
                  key={m}
                  type="button"
                  role="checkbox"
                  aria-checked={checked}
                  onClick={() => toggleMotivo(m)}
                  className={cn(
                    "flex items-center gap-2.5 rounded-md border px-3 py-2 text-left text-sm transition-colors",
                    checked ? "text-[#1F2937]" : "border-[#D9D9DE] bg-white text-[#3F3F46] hover:bg-[#F4F4F5]",
                  )}
                  style={checked ? { borderColor: accentColor, backgroundColor: `${accentColor}14` } : undefined}
                >
                  <span
                    className={cn(
                      "flex h-4 w-4 shrink-0 items-center justify-center rounded border",
                      checked ? "text-white" : "border-[#A1A1AA] bg-white",
                    )}
                    style={checked ? { backgroundColor: accentColor, borderColor: accentColor } : undefined}
                  >
                    {checked && <Check size={12} strokeWidth={3} />}
                  </span>
                  {MOTIVO_LABEL[m]}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Comentário opcional — campo sempre visível */}
      <div className="flex flex-col gap-2">
        <label htmlFor="feedback-comentario" className="text-sm font-medium text-[#1F2937]">
          Comentário <span className="font-normal text-[#71717A]">(opcional)</span>
        </label>
        <textarea
          id="feedback-comentario"
          value={comentario}
          onChange={(e) => setComentario(e.target.value.slice(0, FEEDBACK_COMMENT_MAX))}
          rows={3}
          placeholder={placeholder}
          className="w-full resize-none rounded-md border border-[#D9D9DE] px-3 py-2 text-sm text-[#1F2937] outline-none focus:border-[#A1A1AA]"
        />
        <span className="self-end text-[11px] text-[#71717A]">
          {comentario.length}/{FEEDBACK_COMMENT_MAX}
        </span>
      </div>

      {saveError && (
        <p className="text-xs text-red-600">
          Não foi possível salvar neste navegador (armazenamento bloqueado).
        </p>
      )}

      <DialogFooter className="gap-2 sm:justify-between">
        <button
          type="button"
          onClick={handleSkip}
          className="h-9 rounded-md px-3 text-sm text-[#71717A] hover:text-[#1F2937]"
        >
          Pular
        </button>
        <button
          type="button"
          onClick={handleSend}
          disabled={!canSend}
          className="h-9 rounded-md px-4 text-sm font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
          style={{ backgroundColor: accentColor }}
        >
          Enviar
        </button>
      </DialogFooter>
    </DialogContent>
  );
}
