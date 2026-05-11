# PRD-003 — Sidebar de Métricas

**Status:** Draft  
**Versão:** 1.0  
**Módulo de referência no protótipo:** `MetricsSidebar.tsx`, `MetricsDictionaryDialog.tsx`, `modules/produto.ts`, `modules/loja.ts`, `modules/indicadores.ts`, `modules/types.ts`  
**Revisores:** Engenharia Frontend · Time de Dados · Product

---

## 1. Contexto

A Sidebar de Métricas é o painel lateral direito do REPLEI. Ela permite ao usuário escolher quais métricas aparecerão como colunas na tabela de resultado. O painel é modular: cada módulo (PRODUTO, LOJA, EXTRAVIOS, INDICADORES) tem seu próprio conjunto de métricas agrupadas em categorias.

A sidebar é persistente durante toda a sessão de análise — o usuário pode expandir/recolher e selecionar métricas a qualquer momento, inclusive após gerar o resultado.

---

## 2. Usabilidade e Interface

### 2.1 Layout e colapso
- A sidebar ocupa uma largura fixa de **288px** (classe `mr-72`) no estado expandido.
- Pode ser recolhida para **48px** (classe `mr-12`), exibindo apenas o ícone de reabertura.
- O toggle de expansão/colapso fica no topo da sidebar.
- A animação de expansão/colapso usa o componente `motion` (Framer Motion).

### 2.2 Grupos de métricas (Accordions)

Cada grupo é um accordion com título e lista de métricas. Estrutura por módulo:

**PRODUTO e EXTRAVIOS:**
- Accordion **"Venda e Estoque"** (aberto por padrão): Venda (ROB), Qtd de Vendas, Qtd de Itens, SSS, CMV, CMV Comercial, Lucro Bruto (LB), Margem Bruta (MB), Margem Líquida (ML), Qtd Estoque, Vlr Estoque, DEP, DEF.
- Accordion **"Planejamento"** (fechado por padrão): Vlr Plano, Qtd Plano, Qtd Desvio Plano, Vlr Desvio Plano, Vlr Target, Qtd Target, Qtd Desvio Target, Vlr Desvio Target, PPA, Match de Preço.
- Accordion **"Exposição de Produtos"** (apenas PRODUTO, fechado por padrão): Qtd de clicks tênis, Qtd de clicks chuteiras, Qtd braços de exposição, Qtd mesas, Qtd braços de meias, Qtd expositores de relógios, Qtd expositores de óculos, Qtd cestos de bolas, Qtd módulos checkstand, Qtd geladeiras.

**LOJA e INDICADORES:**
- Lista plana (sem accordion "Venda e Estoque"): métricas exibidas diretamente.
- Accordion "Planejamento" (quando existente).

### 2.3 Seleção de métricas
- Cada métrica é um item clicável com checkbox visual.
- Ao clicar, a métrica é adicionada/removida da lista de métricas selecionadas.
- A ordem das colunas na tabela segue **a ordem em que o usuário clicou nas métricas** (não a ordem da sidebar).
- Não há limite explícito de métricas selecionáveis simultaneamente.
- Métricas do módulo atual que não existem no módulo anterior são removidas ao trocar de módulo.

### 2.4 Hover e Tooltip
- Ao passar o mouse sobre uma métrica, um tooltip exibe o texto descritivo da métrica (campo `tooltip` em `MetricDef`).
- O tooltip usa `RadixTooltip` com delay padrão.

### 2.5 Dicionário de Métricas
- Botão no rodapé da sidebar abre um **Dialog** de dicionário de métricas.
- O dialog exibe todas as métricas do módulo atual com: nome, descrição e fórmula.
- Dados vêm de `metricDictionary.ts` (mapeados por `MetricDef.id`).
- O dialog é modal e fecha pelo botão X ou clique fora.

---

## 3. Regras e Cálculos

### 3.1 Ordem de exibição das colunas na tabela
```
Coluna de atributo (primeira, imutável)
  + métricas na ordem em que foram ativadas pelo usuário
  + [se modo evolução/horaahora] colunas de período expandidas
  + coluna TOTAL (sempre à direita, se aplicável)
```
A ordem canônica por módulo está definida em `metricDisplayOrder` no `ModuleConfig`, mas esse campo serve como referência — a ordem de exibição real respeita o clique do usuário.

### 3.2 Métricas de Planejamento — visualização diferenciada
- Métricas de planejamento têm **fundo visual diferente** na tabela (faixa colorida ou borda).
- Definidas pelo array `planningMetrics` em `ModuleConfig`.
- Função `isPlanningMetric(metricId)` em `dataGenerators.ts` verifica o pertencimento.

### 3.3 Métricas de exposição — apenas PRODUTO
- As métricas do grupo "Exposição de Produtos" só existem no módulo PRODUTO.
- São excluídas automaticamente do módulo EXTRAVIOS (mesmo que herde a base de PRODUTO).
- IDs: `EXPOSICAO_PRODUTO_METRIC_IDS` em `produto.ts`.

### 3.4 Proteção de consistência ao trocar de módulo
```
Ao trocar módulo:
  validMetricIds = conjunto de ids do novo módulo
  selectedMetrics = selectedMetrics.filter(id => validMetricIds.has(id))
```
Métricas que não existem no novo módulo são silenciosamente removidas.

---

## 4. Casos de Uso e Exemplos

**UC-003.1 — Seleção de métricas e ordem das colunas**
> Analista clica em "Venda (ROB)", depois "Margem Bruta (MB)", depois "Qtd Estoque". A tabela exibe as colunas nessa ordem: Atributo | Venda (ROB) | Margem Bruta (MB) | Qtd Estoque.

**UC-003.2 — Dicionário de métricas**
> Analista clica no botão "Dicionário" no rodapé da sidebar. O dialog exibe: nome "SSS", descrição "Evolução de venda em base comparável...", fórmula "SSS (%) = (ROB período atual ÷ ROB período base comparável) − 1".

**UC-003.3 — Recolhimento da sidebar**
> Analista clica no toggle de colapso. A sidebar recolhe para 48px, exibindo apenas um ícone. A tabela de resultado expande para usar o espaço liberado.

**UC-003.4 — Troca de módulo com métricas selecionadas**
> Analista está no módulo PRODUTO com "Exposição de Produtos" selecionadas. Ao trocar para LOJA, essas métricas são removidas automaticamente porque não existem no módulo LOJA.

**UC-003.5 — Tooltip de métrica**
> Analista passa o mouse sobre "DEP". Tooltip exibe: "Dias de estoque da posição — quanto tempo o estoque atual cobre a demanda."

---

## 5. Critérios de Aceite

- [ ] Dado que o usuário seleciona métricas A, B, C nessa ordem, quando a tabela for gerada, então as colunas aparecem na ordem A, B, C (não na ordem canônica do módulo).
- [ ] Dado que a sidebar está expandida, quando o usuário clicar no toggle de colapso, então ela recolhe para 48px com animação suave, e a área da tabela se expande proporcionalmente.
- [ ] Dado que o usuário está no módulo PRODUTO com métricas de exposição selecionadas, quando trocar para LOJA, então as métricas de exposição são removidas e as demais (ex.: Venda) são mantidas se existirem em LOJA.
- [ ] Dado que o usuário clica em "Dicionário", quando o dialog abrir, então todas as métricas do módulo atual são listadas com descrição e fórmula.
- [ ] Dado que o usuário passa o mouse sobre uma métrica com tooltip definido, quando o hover permanecer por mais de [X]ms, então o tooltip é exibido com o texto descritivo.
- [ ] Dado que o accordion "Venda e Estoque" está aberto por padrão no módulo PRODUTO, quando o usuário trocar para o módulo INDICADORES, então a sidebar reconfigura para exibição plana (sem accordion "Venda e Estoque").
