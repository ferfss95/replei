# PRD-004 — Tabela de Resultado e Modos de Análise

**Status:** Draft  
**Versão:** 1.0  
**Módulo de referência no protótipo:** `AnalysisView.tsx`, `useAnalysisData.ts`, `AnalysisTable.tsx`, `AnalysisCells.tsx`, `calculations.ts`, `referenceData.ts`  
**Revisores:** Engenharia Frontend · Time de Dados · Product

---

## 1. Contexto

A Tabela de Resultado é o coração do REPLEI — onde os dados cruzados de atributos e métricas são exibidos. Ela suporta 4 modos de análise com comportamentos radicalmente diferentes:

- **Padrão:** dados do período P1 em formato agregado.
- **Evolução:** expansão temporal das métricas (colunas por período — dia, mês ou ano).
- **Comparativo:** dois períodos (P1 e P2) lado a lado com variação %.
- **Hora a Hora:** expansão temporal por hora do dia (00h–23h).

A tabela suporta expansão hierárquica de linhas (drill-down), ordenação por coluna e renderização de até 2.000 nós por sub-árvore.

---

## 2. Usabilidade e Interface

### 2.1 Estrutura da tabela

**Coluna de Atributos (1ª coluna — fixa, imutável):**
- Exibe a hierarquia de agrupamento configurada nos steps anteriores.
- Cada nível hierárquico tem indentação progressiva.
- Linhas expansíveis têm ícone de chevron (▶ / ▼).
- Linhas folha (sem filhos) não têm ícone.
- A coluna de atributos tem largura fixa e não é redimensionável pelo usuário (no protótipo).

**Colunas de métricas:**
- Uma ou mais colunas de dados numéricos.
- O header de cada coluna exibe a abreviação da métrica (`METRIC_ABBREVIATIONS`).
- Métricas de planejamento têm fundo de header diferenciado visualmente.

**Coluna TOTAL:**
- Última coluna à direita.
- Exibe a soma/agregação do período completo.
- No modo Evolução e Hora a Hora, tem fundo com cor de destaque do módulo.
- No modo Padrão/Comparativo, tem fundo neutro (`#F8FAFC`).

### 2.2 Modos de análise e layout de colunas

**Padrão:**
```
[Atributo] | [Métrica 1] | [Métrica 2] | ... | [TOTAL]
```

**Evolução (isTimeDrilldownEnabled = true):**
```
[Atributo] | [Dia1 / Mês1 / Ano1] | [Dia2 / Mês2 / Ano2] | ... | [TOTAL]
```
Cada período gera N colunas — uma por métrica selecionada × período no range.

**Comparativo:**
```
[Atributo] | [P1: Métrica1] | [P2: Métrica1] | [Δ%: Métrica1] | [P1: Métrica2] | ...
```
Cada métrica gera 3 colunas: valor P1, valor P2, variação percentual P1 vs P2.

**Hora a Hora:**
```
[Atributo] | [00h] | [01h] | ... | [23h] | [TOTAL]
```
24 colunas de hora + coluna total.

### 2.3 Expansão de linhas (drill-down)
- Clicar em uma linha expansível exibe os nós filhos com indentação.
- Linhas pai mostram valores agregados (soma dos filhos visíveis + excluídos).
- A expansão é incremental — o usuário pode expandir nível a nível.
- Estado de expansão é mantido localmente (`expandedRows: string[]`).
- Máximo de **2.000 nós por sub-árvore** (`MAX_SUBTREE_NODES = 2000`) — acima disso os nós são truncados.

### 2.4 Ordenação
- Qualquer coluna pode ser clicada para ordenar ascendente/descendente.
- Ordenação afeta apenas a ordem das linhas irmãs dentro de cada nível hierárquico.
- Estado de ordenação: `{ key: string; direction: 'asc' | 'desc' } | null`.
- Linha TOTAL é sempre fixada ao final, independente da ordenação.

### 2.5 Share %
- Toggle "Share %" ativa a exibição de participação percentual de cada linha em relação ao total pai.
- Disponível nos modos Padrão e Comparativo.
- Exibido como uma coluna adicional ao lado de cada métrica ou como substituição do valor absoluto (a definir).

### 2.6 Média por período
- Dropdown "Média" permite escolher: Dia, Mês, Ano.
- Ao ativar, os valores das células são divididos pelo número de períodos correspondentes do range.
- Ex.: Média por Dia: valor total ÷ nº de dias no range selecionado.

---

## 3. Regras e Cálculos

### 3.1 Formatação de valores por tipo de métrica

Cada métrica tem uma configuração em `METRIC_CONFIG` (`referenceData.ts`) com o campo `format`:

| Format | Exemplo de exibição |
|---|---|
| `currency` | R$ 1.234.567,89 |
| `integer` | 1.234 |
| `percent` | 45,3% |
| `percent1` | 45,3% (razão: 1 = 100%) |
| `decimal` | 12,5 |
| `days` | 12 dias |

Função: `formatMetricValue(value, format)` em `referenceData.ts`.

### 3.2 Variação % (modo Comparativo)
```
Δ% = (P1 - P2) / |P2| × 100
Se P2 = 0: exibir "—" ou "N/A"
Se P1 > P2: variação positiva (verde)
Se P1 < P2: variação negativa (vermelho)
```
Exceção: métricas de custo (CMV) têm sinalização invertida (queda de custo é positiva).

### 3.3 Snapshot de estoque
- Métricas de estoque (`qtd_estoque`, `vlr_estoque`, `dep`, `def`, `giro_estoque`) não são somadas ao longo do tempo — refletem um **snapshot** de posição.
- Regra de snapshot: usa o último dia do mês do período. Se o mês ainda está em aberto, usa D-1 (ontem).
- Implementação de referência: `stockSnapshotDateForCalendarMonth()`, `computeStandardStockIndexSalt()` em `stockSnapshot.ts`.
- No modo Evolução com múltiplos períodos, cada coluna temporal usa o snapshot do respectivo período.

### 3.4 Métricas percentuais — regra de agregação
- Métricas `format: 'percent'` e `format: 'percent1'` marcadas como `isPercentRatioAggregatedAverage` são **médias ponderadas** nos nós pai, não somas.
- Ex.: Margem Bruta de um nó pai = média ponderada das margens dos filhos (ponderada por ROB).

### 3.5 Cálculo de média por período
```
Média por Dia:
  valorCelula = valorTotal ÷ nº de dias no range (calculatePeriodCounts().days)

Média por Mês:
  valorCelula = valorTotal ÷ nº de meses (calculatePeriodCounts().months)

Média por Ano:
  valorCelula = valorTotal ÷ nº de anos (calculatePeriodCounts().years)
```
Funções em `calculations.ts`: `calculatePeriodCounts()`, `calculateDaysInMonth()`, `calculateDaysInYear()`.

### 3.6 Modo Hora a Hora — geração de valores
- Valores por hora são gerados a partir de curvas horárias determinísticas por categoria.
- Em produção: substituir pelo dado real de venda por hora da loja/produto.
- Referência: `generateHourlyValue()` em `dataGenerators.ts`.

### 3.7 Projeção de Venda — módulo LOJA (mês vigente)
Quando o período inclui o mês corrente:
```
realizedCurrentMonth = vendas de monthStart → hoje (inclusive)
dailyAverage = realizedCurrentMonth / daysElapsedInMonth
  (mínimo 1 dia no denominador)
projectedRemainder = dailyAverage × daysRemainingInMonth
vlrProjecaoVenda = realizedCurrentMonth + projectedRemainder
pctProjecaoRatio = vlrProjecaoVenda / monthlyGoal
```
Implementação: `computeLojaVendaProjectionMesVigente()` em `lojaProjection.ts`.  
⚠️ Em produção: `realizedCurrentMonth` vem de query independente (não do período da UI), com os mesmos filtros de atributos. A meta mensal vem de tabela de planejamento.

---

## 4. Casos de Uso e Exemplos

**UC-004.1 — Análise Padrão com drill-down**
> Analista configurou agrupamento [ESTADO, CIDADE, LOJA] e métricas [Venda, Margem]. Resultado: linhas de Estado com totais. Clica em "SP" → expande cidades. Clica em "São Paulo" → expande lojas. Cada nível exibe subtotais.

**UC-004.2 — Evolução mensal**
> Analista seleciona modo Evolução, granularidade Mensal, Jan/2025 a Mar/2025, métrica Venda. Tabela exibe: [Atributo] | [Jan/25] | [Fev/25] | [Mar/25] | [TOTAL]. Cada célula mostra o ROB daquele mês.

**UC-004.3 — Comparativo com variação**
> Analista seleciona Comparativo, P1 = Mai/2025, P2 = Mai/2024 (via LY), métrica Venda. Tabela: [Atributo] | [P1 Venda] | [P2 Venda] | [Δ% Venda]. Linha "São Paulo": P1 = R$ 500k, P2 = R$ 450k, Δ% = +11,1% (em verde).

**UC-004.4 — Hora a Hora**
> Analista seleciona Hora a Hora, data = hoje, loja "Loja SP Centro". Tabela exibe 24 colunas horárias + TOTAL. Célula 14h: R$ 45.000 (venda daquela hora).

**UC-004.5 — Média por Dia**
> Analista seleciona Padrão, período Jan/2025 (31 dias), Venda = R$ 310.000. Ativa Média por Dia. Tabela exibe R$ 10.000/dia.

**UC-004.6 — Estoque snapshot em Evolução**
> Analista seleciona Evolução Mensal, Jan–Mar/2025, métrica Qtd Estoque. Tabela exibe o estoque do último dia de cada mês (31/Jan, 28/Fev, 31/Mar), não a soma do período.

---

## 5. Critérios de Aceite

- [ ] Dado que o modo é Evolução com granularidade Mensal e 3 meses selecionados, quando a tabela for gerada com 2 métricas, então há 3×2 = 6 colunas de dados + coluna TOTAL.
- [ ] Dado que o modo é Comparativo com P1 e P2 definidos, quando a tabela for gerada com 2 métricas, então há 2×3 = 6 colunas (P1, P2, Δ% para cada métrica).
- [ ] Dado que uma linha pai está expandida, quando os filhos são exibidos, então o valor do pai é igual à soma/agregação dos valores dos filhos visíveis.
- [ ] Dado que uma métrica de estoque (DEP) está selecionada no modo Evolução Mensal, quando a tabela exibir os valores, então cada coluna mensal reflete o snapshot do último dia daquele mês, não a soma.
- [ ] Dado que a variação P1 vs P2 é positiva para uma métrica de venda, quando exibida na coluna Δ%, então o valor aparece em verde; negativa = vermelho.
- [ ] Dado que o usuário ativa Média por Dia com range de 30 dias, quando a tabela atualizar, então o valor de cada célula é o valor total dividido por 30.
- [ ] Dado que uma sub-árvore tem mais de 2.000 nós, quando expandida, então os nós são truncados e um indicador informa que o limite foi atingido.
- [ ] Dado que o usuário clica no header de uma coluna, quando a coluna for clicada uma vez, então a tabela ordena as linhas irmãs em ordem descendente; clicado novamente, ascendente.
