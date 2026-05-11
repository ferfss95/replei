# PRD-009: Motor de resultados tabulares (árvore, pivô temporal, filtros)

## 1. Contexto e Problema

Grandes volumes de dados de venda devem aparecer sintetizados em **linhas hierárquicas** e **colunas métrica × período**, sem inconsistência entre o que usuário filtrou e o que aparece no resultado.

## 2. Objetivo

Especificar o motor que **`useAnalysisData`** (e componentes correlatos) aplicam sobre **`selections` + `grouping` + `exclusions`** + períodos + métricas selecionadas, incluindo ordenação (**`sortAnalysisRowTree`**), filtros (**`applyParentContextToOptions`**) e **`METRIC_CONFIG`** para formato e valores base sintéticos até backend real.

## 3. Usuários Impactados

Todos no passo Resultado.

## 4. Requisitos Funcionais

- **RF-01:** A **primeira coluna** deve representar a **árvore de atributos** segundo agrupamentos e filtros conforme contrato atual de `useAnalysisData` (**comentários de não-mutabilidade** da árvore preservados salvo refactor aprovado).
- **RF-02:** Valores marcados como **exclusões** devem ser removidos da população de linhas e da agregação exibida, sem quebrar totais relativos aos critérios ativos (**paridade comportamental**).
- **RF-03:** `getFilteredGroupOptions` de domínio PRODUTO deve ser reutilizada em LOJA/INDICADORES para attrs de produto via delegação atual a `produtoModule`.
- **RF-04:** Cada métrica deve ler **`METRIC_CONFIG[metricId]`** para formato (`currency`, `percent`, etc.) quando existente.
- **RF-05:** Ordenação de linhas deve respeitar **`ANALYSIS_ATTRIBUTE_SORT_KEY`** e comparadores definidos em **`sortAnalysisRowTree.ts`**.

## 5. Requisitos Não Funcionais

- **RNF-01:** Limite máximo de linhas no cliente — **[DECISÃO PENDENTE]**; migração servidor exige paginação e cursores estáveis por ordenação escolhida.
- **RNF-02:** Seeds/hashes devem gerar mocks **determinísticos** para QA (`hashString`, etc.), até substituição por fatos reais.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? |
|-------|------|-------|--------------|
| `selectedMetrics`, `grouping`, `periods`, `selections`, `exclusions`, `periodType`, ranges | vários | wizard + hooks | Variável |

### Saídas

| Campo | Tipo | Destino | Formato |
|-------|------|---------|---------|
| Linhas tipadas para tabela/gráfico | objeto[] | AnalysisTable/Recharts | props memoizados |

## 7. Regras de Negócio

- **RN-01:** Quando dois atributos geram conjunto opcional sem interseção, o sistema deve sinalizar de forma tratável — **[DECISÃO PENDENTE: empty state obrigatório]**.
- **RN-02:** Rollup de métricas percentuais/medias deve seguir **`isPercentRatioAggregatedAverage`** até charter formal de BI.

## 8. Critérios de Aceite

- [ ] Dado mesmo conjunto de filtros/agrupamentos e período fixo mock, quando recarregar a página, então primeira coluna mantém ordenação esperada segundo regra atual.
- [ ] Dada exclusão de um valor específico, quando resultado renderizar, então esse valor não aparece em linha nem contribui aos subtotais exibidos.

## 9. Fora do Escopo

Cubo OLAP servidor ad hoc estilo ferramentas desktop de BI próprias do usuário.

## 10. Dependências

PRDs 004–008; PRD-006; `useAnalysisData.ts`; `METRIC_CONFIG`; `AnalysisTable.tsx`.

## 11. Métricas de Sucesso

Time-to-first-pixel do resultado sob volume real; erro de rollup detectado vs auditorias.

## 12. Aberto / Decisões Pendentes

Políticas formais agregação para cada família de métrica quando fatos chegarem granularidade diferente da exibida.
