# PRD-002 — Atributos: Seleção, Agrupamento e Exclusão

**Status:** Draft  
**Versão:** 1.0  
**Módulo de referência no protótipo:** `AttributeGrid.tsx`, `useAttributeFilters.ts`, `SelectionView.tsx`, `modules/produto.ts`, `modules/loja.ts`, `modules/indicadores.ts`, `constants.ts`  
**Revisores:** Engenharia Frontend · Time de Dados · Product

\---

## 1\. Contexto

O fluxo de configuração de análise do REPLEI envolve três passos distintos de configuração de atributos antes de gerar o resultado:

* **Passo 1 — Seleção:** quais valores de atributos o usuário quer **incluir** na análise (filtro positivo).
* **Passo 2 — Agrupamento:** como os dados serão **agrupados hierarquicamente** nas linhas da tabela de resultado.
* **Passo 3 — Exclusão:** quais valores de atributos o usuário quer **retirar** da análise (filtro negativo).

Os três passos compartilham o mesmo conjunto de atributos disponíveis por módulo, mas com comportamentos distintos. A combinação dos três define a "consulta" que será executada na camada de dados.

\---

## 2\. Usabilidade e Interface

### 2.1 Grid de Atributos

* Os atributos são exibidos em cards organizados em linhas horizontais com scroll.
* Cada card exibe: ícone + label do atributo.
* Clicar em um card abre uma lista de opções (dropdown/popover) com os valores disponíveis para aquele atributo.
* O card fica visualmente marcado (highlighted) quando tem ao menos um valor selecionado.

### 2.2 Seções de atributos por módulo

**PRODUTO:**

* Seção "Produto": SALA, MESA, CATEGORIA, MODALIDADE, GRUPO, SUB-GRUPO, MARCA, FRANQUIA, MODELO, GÊNERO, FAIXA ETÁRIA, COR, TAMANHO, SABOR.
* Seção "Localização" (compartilhada): REDE, CANAL, TIPO, ESTADO, REGIONAL, CIDADE, LOJA, LOCALIZAÇÃO, VENDEDOR, ORIGEM.

**LOJA:**

* Seção "Localização": REDE, TIPO, ESTADO, REGIONAL, CIDADE, LOJA, SETOR, VENDEDOR.
* Seção extra "Produto" (linhas adicionais): SALA, MESA, CATEGORIA, MODALIDADE, GRUPO, SUB-GRUPO, MARCA, FRANQUIA, MODELO, GÊNERO, FAIXA ETÁRIA, COR, TAMANHO, SABOR.

**INDICADORES:** Mesma estrutura de atributos que LOJA.

**EXTRAVIOS:** Subconjunto de PRODUTO (sem métricas de exposição).

### 2.3 Passo 2 — Agrupamento

* O usuário seleciona **atributos** (não valores) para compor as dimensões das linhas da tabela.
* Cada atributo adicionado ao agrupamento cria um **nível hierárquico** na tabela de resultado.
* Máximo de **5 níveis de agrupamento** (`MAX\_GROUPING\_LEVELS = 5`).
* A ordem dos atributos no agrupamento define a hierarquia (pai → filho → neto...).
* O usuário pode reordenar os níveis via drag-and-drop (ou botões de seta).
* Um atributo já usado em seleção ainda pode ser usado em agrupamento (e vice-versa).

### 2.4 Passo 3 — Exclusão

* Mesma interface do Passo 1, mas o intuito é filtro negativo.
* Valores selecionados aqui são **excluídos** da análise, mesmo que estejam no filtro positivo.
* Se o mesmo valor está em seleção e em exclusão, a exclusão prevalece.

### 2.5 Resumo de configuração (AnalysisSummarySection)

* Exibido nos steps 1, 2 e 3, mostra um resumo em chips/tags do que está configurado: período, seleções, agrupamentos e exclusões.
* Funciona como "preview" da consulta que será executada.

\---

## 3\. Regras e Cálculos

### 3.1 Filtragem cruzada de opções (cross-attribute narrowing)

A lista de valores de um atributo se adapta dinamicamente às seleções já feitas em outros atributos relacionados. Hierarquias conhecidas:

**Geográficas (todos os módulos):**

```
ESTADO → filtra CIDADE (só cidades do estado selecionado)
CIDADE → filtra LOJA (só lojas da cidade selecionada)
ESTADO + CIDADE → filtra REGIONAL
ESTADO → filtra REGIONAL
```

**De produto (PRODUTO, LOJA, INDICADORES):**

```
CATEGORIA → filtra MODALIDADE (lista de modalidades válidas para a categoria)
MODALIDADE → filtra CATEGORIA (apenas categorias que contêm aquela modalidade)
GRUPO → filtra SUB-GRUPO
SUB-GRUPO → filtra GRUPO
SALA → filtra MESA (apenas mesas vinculadas à sala selecionada)

Regra especial Alimento:
  Grupo "Alimentos" → Categoria obrigatoriamente "Alimento"
  Categoria "Alimento" → Grupo obrigatoriamente "Alimentos"
```

### 3.2 Regra de filtragem no Agrupamento (Resultado)

Na tabela de resultado, os drilldowns também aplicam filtragem cruzada:

* Ao expandir um nó pai (ex.: Estado "SP"), as opções do nó filho (ex.: Cidade) mostram apenas valores vinculados àquele pai.
* Função de referência: `getFilteredGroupOptions` em `ModuleConfig`.

### 3.3 Isolamento de contexto entre módulos

* Ao trocar de módulo: seleções, exclusões e agrupamentos são completamente zerados.
* Não há persistência de filtros entre módulos.

### 3.4 Hierarquia de SALA → MESA

* MESA é dependente de SALA: se nenhuma SALA for selecionada, todas as MESAs são exibidas.
* Se uma ou mais SALAs forem selecionadas, apenas as MESAs vinculadas a essas SALAs aparecem.
* Função: `filterMesasBySalasOptions(MESA\_OPTIONS, selections\['sala'])` em `referenceData.ts`.

### 3.5 Ordenação de lojas por rede

* A lista de LOJAs é ordenada por REDE (`orderStoresByNetwork`) para facilitar a seleção.

\---

## 4\. Casos de Uso e Exemplos

**UC-002.1 — Seleção com filtragem cruzada**

> Analista está no módulo PRODUTO, seleciona CATEGORIA = "Calçados". Ao abrir o card MODALIDADE, a lista exibe apenas as modalidades vinculadas a "Calçados" (ex.: Tenis, Chuteiras, Sandálias), não todas as modalidades do sistema.

**UC-002.2 — Agrupamento multinível**

> Analista configura agrupamento com 3 níveis: \[ESTADO, CIDADE, LOJA]. A tabela de resultado exibe linhas expandíveis: Estado > Cidade > Loja, com totais em cada nível.

**UC-002.3 — Exclusão**

> Analista está analisando todos os produtos da categoria "Roupas", mas quer excluir a marca "XYZ". No passo 3, seleciona MARCA = "XYZ". A tabela de resultado não exibe dados dessa marca, mas o total geral da categoria exclui os valores dela também.

**UC-002.4 — Combinação seleção + exclusão**

> Analista seleciona ESTADO = "SP" (inclusão), exclui CIDADE = "Campinas" (exclusão). Resultado: dados de SP menos Campinas.

**UC-002.5 — SALA filtrando MESA**

> Analista seleciona SALA = "Futebol". Ao abrir o card MESA, apenas as mesas da sala Futebol aparecem (ex.: "Mesa 1 - Chuteiras", "Mesa 2 - Bolas"). Mesas de Corrida e Treino não aparecem.

\---

## 5\. Critérios de Aceite

* \[ ] Dado que o usuário selecionou ESTADO = "RJ", quando abrir o card CIDADE, então apenas cidades do Rio de Janeiro aparecem na lista.
* \[ ] Dado que o usuário selecionou CATEGORIA = "Calçados" e MODALIDADE = "Tênis", quando abrir CATEGORIA novamente, então apenas categorias que contenham modalidade "Tênis" aparecem.
* \[ ] Dado que o agrupamento já tem 5 níveis configurados, quando o usuário tentar adicionar um 6º, então o sistema bloqueia a adição com feedback visual.
* \[ ] Dado que o usuário está no passo 2 (Agrupamento), quando reordenar os níveis, então a tabela de resultado reflete a nova hierarquia.
* \[ ] Dado que o mesmo valor está em seleção e em exclusão, quando a análise é gerada, então o valor é excluído do resultado.
* \[ ] Dado que o usuário troca de módulo, quando a transição concluir, então seleções, agrupamentos e exclusões estão zerados.
* \[ ] Dado que nenhum atributo foi selecionado no passo 1, quando o usuário avançar para o resultado, então o resultado considera todos os valores disponíveis (sem filtro ativo).
* \[ ] Dado que a SALA "Futebol" é selecionada, quando o card MESA for aberto, então apenas mesas vinculadas à sala Futebol aparecem.

