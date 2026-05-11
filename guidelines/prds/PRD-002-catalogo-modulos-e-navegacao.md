# PRD-002: Catálogo de módulos analíticos e navegação

## 1. Contexto e Problema

> Por que essa funcionalidade existe? Qual dor resolve?

Diferentes questões de negócio exigem **lentes** diferentes (mix de produto, performance de pontos de venda, KPIs de loja). Sem módulos explícitos, a linguagem mistura dimensões incompatíveis.

## 2. Objetivo

> O que queremos alcançar com isso?

Garantir que o usuário escolha **um módulo** por jornada analítica, com **métricas e dimensões coerentes** com aquela lente e **isolamento de estado** ao trocar de módulo.

## 3. Usuários Impactados

> Quais perfis usam isso?

Todos os perfis; troca mais frequente em **Power users**.

## 4. Requisitos Funcionais

- **RF-01:** O sistema deve exibir exclusivamente os módulos **PRODUTO**, **LOJA**, **EXTRAVIOS** e **INDICADORES** no seletor, com rótulos oficiais.
- **RF-02:** Ao **alterar módulo**, o sistema deve **zerar** `selections`, `exclusions`, `grouping` e retornar o passo a **Seleção**.
- **RF-03:** Ao alterar módulo, o sistema deve **filtrar** `selectedMetrics` para ids válidos do módulo destino e resetar modo de análise para **padrão** e demais estados associados conforme política atual da aplicação.
- **RF-04:** O sistema deve aplicar identidade visual (cores primárias/destaque) específicas do módulo (`moduleColors`).
- **RF-05:** Para **EXTRAVIOS**, o sistema deve usar configuração **derivada do PRODUTO** sem métricas de exposição nem PPA/Match de preço — **comportamento atual do protótipo** (`produtoSemExposicao` em `src/app/modules/index.ts`).

## 5. Requisitos Não Funcionais

- **RNF-01:** Troca de módulo deve completar ciclo visual de transição em ≤ **2 s** no cliente — **[DECISÃO PENDENTE: opção de reduzir animação por acessibilidade]**.
- **RNF-02:** Lista de módulos deve poder ser atualizada por **release** sem alteração de URL.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? | Observações |
|-------|------|-------|--------------|-------------|
| `MODULE_REGISTRY` | config | codebase / backend futuro | Sim | `src/app/modules/index.ts` |

### Saídas

| Campo | Tipo | Destino | Formato | Observações |
|-------|------|---------|---------|-------------|
| `currentModuleConfig` | objeto | hooks/UI | TypeScript | Derivado do registro |

## 7. Regras de Negócio

- **RN-01:** Estado de um módulo **nunca** deve contaminar outro — **comportamento em `App.tsx`**.
- **RN-02:** Métricas inexistentes no módulo alvo devem ser removidas da seleção (**não** erro bloqueante).

## 8. Critérios de Aceite

- [ ] Dado usuário na etapa Agrupamento com filtros em PRODUTO, quando mudar para LOJA, então todos os filtros e agrupamentos devem ficar **vazios**.
- [ ] Dado EXTRAVIOS selecionado, quando abrir métricas, então não devem aparecer IDs `exp_*`, `ppa`, `match_preco`.

## 9. Fora do Escopo

Permitir dois módulos na mesma visão/tabulação (mixed lens).

## 10. Dependências

PRD-001; interface `ModuleConfig` (`src/app/modules/types.ts`).

## 11. Métricas de Sucesso

Redução de tickets de suporte por “filtro errado após mudar contexto”; NPS de clareza de módulo — **[DECISÃO PENDENTE]**.

## 12. Aberto / Decisões Pendentes

Comportamento futuro quando existir **persistência de jornadas** por URL ou bookmark.
