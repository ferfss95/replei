import type { ModuleConfig } from './types';
import { produtoModule } from './produto';
import { lojaModule } from './loja';
import { indicadoresModule } from './indicadores';
import { extraviosModule } from './extravios';

// ──────────────────────────────────────────────────────────────
// Module registry
// To enable a new module, create its config file (e.g. loja.ts)
// following the ModuleConfig interface, then add it here.
// ──────────────────────────────────────────────────────────────

export type ModuleId = 'PRODUTO' | 'LOJA' | 'EXTRAVIOS' | 'INDICADORES';

export const MODULE_REGISTRY: Record<ModuleId, ModuleConfig> = {
  PRODUTO:     produtoModule,
  LOJA:        lojaModule,
  EXTRAVIOS:   extraviosModule,
  INDICADORES: indicadoresModule,
};

export type { ModuleConfig };
