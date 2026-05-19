import React, { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import {
  formatTimeHHMM,
  getIntradaySyncTimes,
  INTRADAY_UPDATE_INTERVAL_MINUTES,
} from "../utils/intradaySyncTimes";

/** Metadados de sincronização Intraday (Etapa Resultado). */
export function IntradaySyncMetadata() {
  const [times, setTimes] = useState(() => getIntradaySyncTimes());

  useEffect(() => {
    const refresh = () => setTimes(getIntradaySyncTimes());
    refresh();
    const id = window.setInterval(
      refresh,
      INTRADAY_UPDATE_INTERVAL_MINUTES * 60 * 1000,
    );
    return () => window.clearInterval(id);
  }, []);

  const last = formatTimeHHMM(times.lastUpdate);
  const next = formatTimeHHMM(times.nextUpdate);

  return (
    <div
      className="flex items-center gap-1.5 shrink-0 text-[11px] font-normal text-[#62748e]"
      aria-live="polite"
    >
      <Clock size={12} className="text-[#90a1b9] shrink-0" strokeWidth={2} />
      <span>
        Última atualização: {last}
        <span className="mx-1.5 text-[#90a1b9]">|</span>
        Próxima atualização: {next}
      </span>
    </div>
  );
}
