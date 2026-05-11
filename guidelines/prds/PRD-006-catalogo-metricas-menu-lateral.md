# PRD-006: Catálogo de métricas e menu lateral

## 1. Contexto e Problema

Métricas sem definição comum causam retrabalho e interpretações diferentes da “mesma” palavra. A barra lateral precisa agrupar indicadores segundo o modelo mental de trabalho (venda e estoque, planejamento, outros, exposição no PRODUTO).

## 2. Objetivo

Permitir **multi-seleção** de métricas com ícones e **tooltips** documentados; manter **`metricDisplayOrder` canônico** no módulo e refletir na UI a **ordem de clique** do usuário para colunas do resultado (**comportamento atual**).

## 3. Usuários Impactados

Todos; heavy users exploram todas as métricas do módulo.

## 4. Requisitos Funcionais

- **RF-01:** O sistema deve listar apenas métricas definidas em `moduleConfig.metrics` com ícone e `tooltip` opcional.
- **RF-02:** No **PRODUTO**, estado inicial dos accordions do sidebar deve alinhar a **`getMetricsSidebarDefaultsForModule`** em `App.tsx` (accordions conforme código: Venda/Estoque vs exposição).
- **RF-03:** Métricas de **exposição** (`EXPOSICAO_PRODUTO_METRIC_IDS`), **PPA** e **Match de Preço** devem aparecer apenas nas seções previstas (**`metricSidebarExtraSections`**, exclusões **`metricsSidebarExcludeFromVendaEstoque`**, **`metricsSidebarOutrasAfterPlanning`**).
- **RF-04:** Ao trocar módulo, a seleção de métricas deve ser filtrada para ids válidos (ver PRD-002).
- **RF-05:** O sistema deve oferecer acesso ao **dicionário** de métricas via `MetricsDictionaryDialog` e dados em **`src/app/data/metricDictionary.ts`**, mantendo texto alinhado ao negócio — **[DECISÃO PENDENTE: revisão texto por steward de métrica]**.

## 5. Requisitos Não Funcionais

- **RNF-01:** **[DECISÃO PENDENTE]** Limite máximo de métricas selecionadas simultaneamente ou estratégia de degradação de performance quando muitas colunas.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? | Observações |
|-------|------|-------|--------------|-------------|
| `selectedMetrics` | string[] | Estado App | Para resultado: ao menos uma se política assim definida | **[DECISÃO PENDENTE]** |

### Saídas

| Campo | Tipo | Destino | Formato | Observações |
|-------|------|---------|---------|-------------|
| Ordem efetiva de colunas métricas | string[] | AnalysisTable/gráficos | igual ordem de seleção no menu | comportamento atual |

## 7. Regras de Negócio

- **RN-01:** Métricas percentuais com regras de agregação especiais continuam usando **`METRIC_CONFIG`** / **`isPercentRatioAggregatedAverage`** — comportamento atual deve ser preservado ao migrar cálculos para servidor.
- **RN-02:** Métricas de planejamento usam tratamento visual de fundo conforme **`getPlanningBg`** (`dataGenerators.ts`).

## 8. Critérios de Aceite

- [ ] Dado usuário que clica primeiro em `qtd_estoque` e depois em `venda`, quando resultado exibir colunas, então a primeira coluna de métrica corresponde a `qtd_estoque`.
- [ ] Dado módulo EXTRAVIOS, quando abrir métricas, então não existe seção extra “Exposição de produtos” nem métricas `exp_*`.

## 9. Fora do Escopo

Editor self-service pelo usuário final para criar métricas calculadas novas dentro do cliente.

## 10. Dependências

PRD-004; PRD-005; `MetricsSidebar.tsx`; `produto.ts`; `referenceData.ts` (`METRIC_CONFIG`); PRD-002.

## 11. Métricas de Sucesso

Uso dos tooltips e do diálogo do dicionário; redução de erros ao comparar métricas diferentes com rótulos parecidos.

## 12. Aberto / Decisões Pendentes

Versão oficial PT-BR de cada definitional tooltip por métrica; owner de stewardship por métrica.
