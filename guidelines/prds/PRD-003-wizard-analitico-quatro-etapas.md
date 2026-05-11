# PRD-003: Wizard analítico (Seleção · Agrupamento · Exclusão · Resultado)

## 1. Contexto e Problema

Análises ad-hoc falham quando o usuário pula **definições** (filtro, agrupamento, exclusões). O wizard obriga uma cadência repetível da cultura analítica.

## 2. Objetivo

Padronizar a jornada em **quatro etapas** com **gates** claros até o resultado, garantindo navegação pelo header/stepper quando permitido pelo estado válido.

## 3. Usuários Impactados

Todos; **Light users** especialmente na seleção e no agrupamento.

## 4. Requisitos Funcionais

- **RF-01:** As etapas devem existir nesta ordem: **Seleção (1)** → **Agrupamento (2)** → **Exclusão (3)** → **Resultado (4)** — `STEPS` em `src/app/constants.ts`.
- **RF-02:** O sistema deve limitar níveis de agrupamento a **`MAX_GROUPING_LEVELS = 5`**.
- **RF-03:** O cabeçalho deve impedir (**locked**) avanços/voltas ilegais conforme pré-condições (`isSelectionConfigured`, `isGroupingConfigured`, `isExclusionConfigured`, `isComparativoPeriodDefined`).
- **RF-04:** Para modo **Comparativo**, o sistema só deve liberir resultado quando **dois períodos** estão definidos — estado `isComparativoPeriodDefined`.
- **RF-05:** Ações **Limpar** e **Sair** devem estar disponíveis no header (`onClear` / `onExit`) com comportamento documentado — **[DECISÃO PENDENTE: escopo exato do clear]**.

## 5. Requisitos Não Funcionais

- **RNF-01:** Recalcular opções de atributos após seleções deve manter latência perceptível aceitável — **[DECISÃO PENDENTE: budget ms no cliente]**.
- **RNF-02:** A lógica de filtros em **`useAttributeFilters`** está marcada como **homologada** no código — alterações só após QA formal ou revisão de produto.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? | Observações |
|-------|------|-------|--------------|-------------|
| `currentStep` | enum `Step` | Estado React | Sim | |
| `selections`, `grouping`, `exclusions` | mapas / vetores | Estado React | Variável por etapa | |

### Saídas

| Campo | Tipo | Destino | Formato | Observações |
|-------|------|---------|---------|-------------|
| Tela atual | UI | usuário | React | SelectionView → AttributeGrid → AnalysisView |

## 7. Regras de Negócio

- **RN-01:** Um atributo com **filtro inclusivo vazio** implica ausência de restrição naquele eixo, salvo onde regra de domínio (Produto/Localização) restrinja implicitamente opções disponíveis.
- **RN-02:** Agrupamento define a granularidade das **linhas** da primeira coluna no resultado.

## 8. Critérios de Aceite

- [ ] Dado modo comparativo sem Período 2 válido, quando usuário tentar ir ao resultado, então a navegação permanece bloqueada até períodos válidos (**paridade com código**).
- [ ] Dado cinco atributos no agrupamento, quando usuário tentar o sexto, então a interface deve impedir (**UI + estado**).

## 9. Fora do Escopo

Salvamento server-side de favoritos por usuário (roadmap possível).

## 10. Dependências

PRD-002; `src/app/App.tsx`; `SelectionView.tsx`; `AttributeGrid.tsx`; `AnalysisView.tsx`; `AppHeader.tsx`.

## 11. Métricas de Sucesso

Percentual de jornadas concluídas até Resultado; abandono por etapa.

## 12. Aberto / Decisões Pendentes

Se **Limpar** também zera intervalo temporal e métricas selecionadas — hoje não totalmente especificado apenas pelo nome do botão.
