# PRD-006 — Módulos de Análise: PRODUTO, LOJA, EXTRAVIOS, INDICADORES

**Status:** Draft  
**Versão:** 1.0  
**Módulo de referência no protótipo:** `modules/produto.ts`, `modules/loja.ts`, `modules/indicadores.ts`, `constants.ts`, `referenceData.ts`  
**Revisores:** Engenharia Frontend · Time de Dados · Product

---

## 1. Contexto

O REPLEI é organizado em 4 **módulos de análise**, cada um voltado para uma perspectiva diferente do negócio de varejo. A troca de módulo altera completamente o conjunto de atributos filtrosos, agrupamentos disponíveis e métricas exibidas.

Este PRD descreve as particularidades de cada módulo — quais atributos, métricas e regras específicas cada um tem — para que dados, engenharia e produto alinhem o que precisa ser construído em produção.

---

## 2. Usabilidade e Interface

### 2.1 Seletor de módulo (Mandala)
- Exibido como componente visual circular (`InteractiveMandala.tsx`).
- 4 módulos disponíveis: **PRODUTO**, **LOJA**, **EXTRAVIOS**, **INDICADORES**.
- Módulo ativo tem destaque visual (cor e estado selecionado).
- Cada módulo tem uma paleta de cores temática (`moduleColors.ts`).

### 2.2 Comportamento compartilhado entre módulos
- Todos os módulos usam o mesmo sistema de steps (Seleção → Agrupamento → Exclusão → Resultado).
- Todos compartilham os atributos de localização (REDE, CANAL, TIPO, ESTADO, REGIONAL, CIDADE, LOJA, LOCALIZAÇÃO, VENDEDOR, ORIGEM).
- LOJA e INDICADORES também incluem os atributos de produto como filtros adicionais.

---

## 3. Especificação por Módulo

### 3.1 Módulo PRODUTO

**Propósito:** análise de performance de produtos (SKU, categoria, marca, etc.) com dados de venda e estoque.

**Atributos de domínio (seção "Produto"):**
SALA, MESA, CATEGORIA, MODALIDADE, GRUPO, SUB-GRUPO, MARCA, FRANQUIA, MODELO, GÊNERO, FAIXA ETÁRIA, COR, TAMANHO, SABOR.

**Atributos de localização (seção "Localização"):**
REDE, CANAL, TIPO, ESTADO, REGIONAL, CIDADE, LOJA, LOCALIZAÇÃO, VENDEDOR, ORIGEM.

**Métricas — grupo "Venda e Estoque" (13 métricas):**
- Venda (ROB), Qtd de Vendas, Qtd de Itens, SSS, CMV, CMV Comercial, Lucro Bruto (LB), Margem Bruta (MB), Margem Líquida (ML), Qtd Estoque, Vlr Estoque, DEP, DEF.

**Métricas — grupo "Planejamento" (10 métricas):**
- Vlr Plano, Qtd Plano, Qtd Desvio Plano, Vlr Desvio Plano, Vlr Target, Qtd Target, Qtd Desvio Target, Vlr Desvio Target, PPA (Alteração de Preço), Match de Preço.

**Métricas — grupo "Exposição de Produtos" (10 métricas):**
- Qtd de clicks tênis, Qtd de clicks chuteiras, Qtd braços de exposição, Qtd mesas, Qtd braços de meias, Qtd expositores de relógios, Qtd expositores de óculos, Qtd cestos de bolas, Qtd módulos checkstand, Qtd geladeiras.

**Regras específicas:**
- Hierarquia SALA → MESA com filtragem cruzada.
- Hierarquia CATEGORIA ↔ MODALIDADE (bidirecional).
- Hierarquia GRUPO ↔ SUB-GRUPO (bidirecional).
- Regra especial Alimento: Grupo "Alimentos" ↔ Categoria "Alimento" (mutuamente exclusivo com outros).
- Métricas de exposição são exclusivas deste módulo (não existem em LOJA, EXTRAVIOS, INDICADORES).

---

### 3.2 Módulo LOJA

**Propósito:** análise de performance por unidade de loja — foco em métricas operacionais e comerciais por ponto de venda.

**Atributos de domínio (seção "Localização"):**
REDE, TIPO, ESTADO, REGIONAL, CIDADE, LOJA, SETOR, VENDEDOR.

**Atributos extras (seção "Produto" — linhas adicionais):**
SALA, MESA, CATEGORIA, MODALIDADE, GRUPO, SUB-GRUPO, MARCA, FRANQUIA, MODELO, GÊNERO, FAIXA ETÁRIA, COR, TAMANHO, SABOR.

**Métricas (22 métricas — lista plana, sem accordion "Venda e Estoque"):**

_Venda e performance:_
- Venda (ROB), Qtd de Vendas, Qtd de Itens, SSS, Ticket Médio, Conversão (%), Fluxo.

_Estoque:_
- Qtd Estoque, Vlr Estoque, Giro de Estoque, DEP, DEF.

_Margem:_
- CMV, CMV Comercial, Lucro Bruto (LB), Margem Bruta (MB).

_Planejamento:_
- Vlr Plano, Vlr Desvio Plano, Vlr Target, Vlr Desvio Target.

_Projeção:_
- Vlr Projeção de Venda, % Projeção vs Meta.

**Regras específicas:**
- Atributo SETOR (ex.: Futebol, Corrida, Treino) disponível apenas em LOJA e INDICADORES.
- Atributo VENDEDOR disponível com lista de vendedores da loja.
- **Projeção de Venda** (métricas `vlr_projecao_venda` e `pct_projecao_ratio`): calculadas apenas quando o período inclui o mês corrente. Ver PRD-004, seção 3.7.
- **Escala da meta mensal por atributo** (`metaMensalScaleByAttr`): a meta é proporcional ao nível de granularidade do agrupamento (ex.: Vendedor recebe 1/20 da meta de Loja).

---

### 3.3 Módulo EXTRAVIOS

**Propósito:** análise de perdas e extravios de estoque por produto/localização.

**Atributos:** mesmos do módulo PRODUTO (domínio produto + localização).

**Métricas:** subconjunto do módulo PRODUTO — apenas métricas de "Venda e Estoque" e "Planejamento". **Métricas de Exposição de Produtos são removidas** deste módulo.

**Regras específicas:**
- Sem accordion de Exposição de Produtos.
- Mesma lógica de filtragem cruzada de atributos que PRODUTO.
- Métricas específicas de extravio a serem definidas pelo time de dados (no protótipo usa base de PRODUTO sem exposição).

**DECISÃO PENDENTE:** Quais métricas específicas de extravio (ex.: Qtd Extravios, Vlr Extravios, % Extravios sobre Estoque) devem existir? Especificar com o time de dados.

---

### 3.4 Módulo INDICADORES

**Propósito:** KPIs operacionais de loja — indicadores de qualidade, atendimento e operação.

**Atributos:** mesmos do módulo LOJA (localização + produto como extra).

**Métricas (25 métricas — lista plana, com prefixo `ind_` para evitar colisão):**

_Atendimento:_
- ind_nps, ind_satisfacao, ind_tempo_atendimento, ind_taxa_retorno.

_Operação:_
- ind_ruptura, ind_acuracidade_estoque, ind_osf (On Shelf Fulfillment), ind_planograma.

_Vendas operacionais:_
- ind_conversao, ind_ticket_medio, ind_itens_por_venda, ind_venda_por_m2.

_Recursos humanos:_
- ind_absenteismo, ind_produtividade_vendedor, ind_horas_trabalhadas.

_Financeiro operacional:_
- ind_shrinkage, ind_perdas_operacionais, ind_custo_por_venda.

_Digital/Omni:_
- ind_click_collect, ind_ship_from_store, ind_taxa_devolucao.

_Meta e planejamento:_
- ind_meta_loja, ind_atingimento_meta, ind_desvio_meta, ind_ranking_loja.

**Nota:** os IDs acima são baseados no protótipo e precisam ser validados/alinhados com o time de dados antes da implementação.

---

## 4. Casos de Uso e Exemplos

**UC-006.1 — PRODUTO: análise de categoria com filtro por cor**
> Analista seleciona CATEGORIA = "Calçados", COR = "Preto". Agrupa por MARCA. Resultado: performance de calçados pretos por marca.

**UC-006.2 — LOJA: projeção do mês vigente**
> Analista no módulo LOJA seleciona período = mês corrente (mai/2025), métrica "Vlr Projeção de Venda". A célula da loja "São Paulo Centro" exibe a projeção calculada com base nos dias vendidos até hoje.

**UC-006.3 — EXTRAVIOS: análise por sub-grupo**
> Analista seleciona módulo EXTRAVIOS, agrupa por SUB-GRUPO. Resultado mostra métricas de extravio por sub-grupo de produto, sem a seção de Exposição de Produtos.

**UC-006.4 — INDICADORES: NPS por regional**
> Analista seleciona módulo INDICADORES, agrupa por REGIONAL. Resultado mostra ind_nps por regional com evolução temporal (modo Evolução Mensal).

**UC-006.5 — LOJA: escala de meta por vendedor**
> Analista agrupa por VENDEDOR no módulo LOJA. A métrica "Vlr Plano" exibida por vendedor é proporcional à meta da loja (escala 1/20), não a meta integral.

---

## 5. Critérios de Aceite

- [ ] Dado que o módulo PRODUTO está ativo, quando o usuário abrir a sidebar de métricas, então os três grupos (Venda e Estoque, Planejamento, Exposição de Produtos) são exibidos.
- [ ] Dado que o módulo EXTRAVIOS está ativo, quando o usuário abrir a sidebar, então o grupo "Exposição de Produtos" não aparece.
- [ ] Dado que o módulo LOJA está ativo, quando o usuário abrir a sidebar, então as métricas são exibidas em lista plana (sem accordion "Venda e Estoque"), e "Vlr Projeção de Venda" está disponível.
- [ ] Dado que o módulo INDICADORES está ativo, quando o usuário agrupar por REGIONAL, então os KPIs com prefixo `ind_` aparecem por regional na tabela de resultado.
- [ ] Dado que o usuário está no módulo LOJA com agrupamento por VENDEDOR e ativa a métrica Vlr Plano, quando a tabela for gerada, então o valor de Vlr Plano por vendedor é a meta da loja dividida pela escala de vendedor (ex.: ÷20).
- [ ] Dado que o módulo PRODUTO está ativo com SALA = "Futebol" selecionada, quando o card MESA for aberto, então apenas as mesas vinculadas à sala Futebol aparecem.

---

## Decisões Pendentes

- [ ] **EXTRAVIOS:** quais são as métricas específicas de extravio em produção? (ex.: Qtd Extravios, Vlr Extravios, %).
- [ ] **INDICADORES:** validar lista definitiva de KPIs com o time de dados e operações de loja.
- [ ] **Escala de meta (LOJA):** confirmar fatores de escala reais por atributo de agrupamento.
- [ ] **Módulos futuros:** há previsão de novos módulos além dos 4 atuais?
