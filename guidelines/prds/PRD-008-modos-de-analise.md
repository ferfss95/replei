# PRD-008: Modos de análise (Padrão, Evolução, Comparativo, Hora a hora)

## 1. Contexto e Problema

Cada tipo de decisão usa uma forma mental diferente de ver dados: **snapshot** atual, **tendência** em janela, **contraste entre dois períodos** ou comportamento **intradia**.

## 2. Objetivo

Suportar `AnalysisMode` tipado como **`'padrao' | 'evolucao' | 'comparativo' | 'horaahora'`** (`src/app/types/wizard.ts`) com comportamentos específicos: por exemplo **`isTimeDrilldownEnabled`** somente quando `analysisMode === 'evolucao'` em `App.tsx`.

## 3. Usuários Impactados

Todos; operações de loja (hora a hora); estratégia/planejamento (evolução e comparativo).

## 4. Requisitos Funcionais

- **RF-01:** Modo **Evolução** deve habilitar **drilldown temporal** onde o código define `isTimeDrilldownEnabled === true`.
- **RF-02:** Título exibível da análise deve usar chaves em **`analysisTitles`** do `moduleConfig`, por modo onde mapeado.
- **RF-03:** Modo **Comparativo** obedece às gates de dois períodos (PRD-007 / PRD-003).
- **RF-04:** Modo **Hora a hora** deve usar o eixo **`HORA_A_HORA_HOURS`** e o gerador **`generateHourlyValue`** em `dataGenerators.ts` onde integrado ao pipeline de resultado.

## 5. Requisitos Não Funcionais

- **RNF-01:** Alternar modo não deve deixar estado inconsistente de período — **[DECISÃO PENDENTE: se reset adicional de `AveragePeriodType` é necessário além da troca de módulo]**.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? | Observações |
|-------|------|-------|--------------|-------------|
| `analysisMode` | AnalysisMode | Estado App (`App.tsx`) | Sim após primeira escolha | Default conforme navegação |

### Saídas

| Campo | Tipo | Destino | Formato | Observações |
|-------|------|---------|---------|-------------|
| Modelo colunas período/granularidade | pivot | AnalysisTable/Recharts | Estrutura derivada | |

## 7. Regras de Negócio

- **RN-01:** Métricas excluídas de `% share` e variações com cor especial seguem conjuntos definidos em `AnalysisView` / `AnalysisTable` (**preservar** ao evoluir lógica).

## 8. Critérios de Aceite

- [ ] Dado modo **hora a hora**, quando resultado carregar eixo temporal, então buckets **00h…23h** aparecem na ordem de `constants.ts`.
- [ ] Dado modo **evolução**, quando ativo, então recurso condicionado por `isTimeDrilldownEnabled` fica disponível conforme código atual.

## 9. Fora do Escopo

Previsões (forecast) automáticas não fundamentadas em modelo aprovado.

## 10. Dependências

PRD-007; `AnalysisSelector` / componentes de escolha de modo; `wizard.ts`; `constants.ts`.

## 11. Métricas de Sucesso

Distribuição de uso por modo em telemetria; qualidade revisada de relatórios de tendência vs snapshot.

## 12. Aberto / Decisões Pendentes

Naming PT-BR unificado oficial para relatórios exportados e comunicação executiva.
