# PRD-001 — Seleção de Módulo e Configuração de Período

**Status:** Draft  
**Versão:** 1.0  
**Módulo de referência no protótipo:** `SelectionView.tsx`, `useModuleNavigator.ts`, `useDateRange.ts`, `constants.ts`  
**Revisores:** Engenharia Frontend · Time de Dados · Product

\---

## 1\. Contexto

O REPLEI é uma ferramenta de análise de dados de varejo que opera em torno de um fluxo de 4 passos (Seleção → Agrupamento → Exclusão → Resultado). O **Passo 1 — Seleção** é o ponto de entrada do usuário: ele escolhe qual módulo quer analisar (PRODUTO, LOJA, EXTRAVIOS, INDICADORES) e configura o período de análise que vai balizar todos os dados exibidos no resultado.

A configuração do período é transversal: afeta a geração de dados em todos os módulos e modos de análise. Erros aqui contaminam toda a análise downstream.

\---

## 2\. Usabilidade e Interface

### 2.1 Seletor de Módulo (Mandala)

* A troca de módulo é feita por um componente visual chamado **Mandala Interativa** (`InteractiveMandala.tsx`).
* Ao clicar em um módulo diferente, dispara uma **animação de transição** (`ModuleTransition.tsx`) com duração total de \~1,5 segundo (1s de animação + 0,5s de fadeout).
* Durante a transição, toda a interface fica bloqueada para interação.
* Após a transição, o módulo ativo muda e os filtros/agrupamentos/exclusões são **zerados automaticamente** (sem confirmação do usuário).
* A cor temática da interface muda por módulo (definida em `moduleColors.ts`).

### 2.2 Seletor de Modo de Análise

* Quatro modos disponíveis, exibidos como botões de seleção única: **Padrão**, **Evolução**, **Comparativo**, **Hora a Hora**.
* Ao selecionar **Hora a Hora**, o período é fixado automaticamente em "Diário → Período → data de hoje".

### 2.3 Granularidade de Período

* Três granularidades: **Diário**, **Mensal**, **Anual**.
* A seleção de granularidade altera dinamicamente o componente de seleção de datas exibido.
* **Diário** tem sub-tipo: `"periodo"` (range de datas livre) ou `"diasdasemana"` (seleção por dias da semana).

### 2.4 Componentes de seleção de datas por granularidade

|Granularidade|Sub-tipo|Componente|
|-|-|-|
|Diário|`periodo`|DateRangePicker (início/fim)|
|Diário|`diasdasemana`|Seletor de dias da semana (D·S·T·Q·Q·S·S) + range limitado a 20 dias|
|Mensal|—|Lista multi-seleção de meses (60 meses históricos, mais recentes primeiro)|
|Anual|—|Lista multi-seleção de anos (2022–2026)|

### 2.5 MDSAA e LY (modo Comparativo)

* No modo **Comparativo**, surgem dois toggles: **MDSAA** e **LY**.
* **MDSAA** (Mesmo Dia Semana Ano Anterior): P2 é calculado automaticamente deslocando P1 para os mesmos dias de semana do ano anterior.
* **LY** (Last Year): P2 é calculado automaticamente como o mesmo período do ano anterior (deslocamento fixo de -1 ano).
* Se nenhum toggle estiver ativo, o usuário define P2 manualmente.
* Os dois toggles são mutuamente exclusivos: ativar um desativa o outro.
* No modo comparativo, o botão "Gerar Resultado" só é habilitado quando P2 está definido (automático ou manual).

### 2.6 Cabeçalho de navegação de passos

* 4 steps visíveis: Seleção (1), Agrupamento (2), Exclusão (3), Resultado (4).
* Os steps funcionam como breadcrumb clicável: o usuário pode navegar livremente entre 1, 2 e 3.
* Avançar para o step 4 ("Resultado") dispara um **loading overlay** de 3 segundos antes de exibir a tabela.

\---

## 3\. Regras e Cálculos

### 3.1 Cálculo automático do P2 — MDSAA

```
Para cada data D1 em P1:
  Encontrar a semana de D1 no ano corrente (nº da semana ISO)
  Encontrar o mesmo dia da semana na mesma semana do ano anterior
  Se ambas as datas forem dias úteis → adicionar à lista de P2
```

Implementação de referência: `getMDSAA()`, `getMDSAARange()`, `getMDSAAMonths()`, `getMDSAAYears()` em `dateUtils.ts`.

### 3.2 Cálculo automático do P2 — LY

```
Para range de datas:
  P2.start = P1.start - 1 ano (mesmo dia/mês)
  P2.end   = P1.end - 1 ano

Para meses:
  P2 = lista de meses de P1 deslocados -1 ano
  Ex.: \["Maio 2025"] → \["Maio 2024"]

Para anos:
  P2 = lista de anos de P1 deslocados -1
```

Implementação de referência: `getLYRange()`, `getLYSpecificDays()`, `getLYMonths()`, `getLYYears()` em `dateUtils.ts`.

### 3.3 Limite de dias da semana

* Modo `diasdasemana`: máximo de **20 dias selecionáveis** no range (`MAX\_WEEKLY\_DAYS = 20`).
* A contagem é feita pelos dias que realmente caem nos weekdays selecionados dentro do range.

### 3.4 Validação de período

* P1 deve ter `start ≤ end`.
* Datas futuras **não são permitidas** em P1.
* Meses/anos futuros podem estar na lista mas não devem ser selecionáveis (regra de negócio a confirmar com dados).
* No modo Comparativo, P2 deve ser definido antes do step 4 ser habilitado.

### 3.5 Isolamento entre módulos

* Ao trocar de módulo: seleções, agrupamentos e exclusões são zerados.
* Métricas selecionadas que não existem no novo módulo são removidas automaticamente.
* O período **não é zerado** na troca de módulo (persiste entre módulos).

### 3.6 Defaults por granularidade

|Granularidade|P1 default|
|-|-|
|Diário / `periodo`|1º dia do mês corrente → ontem (D-1)|
|Diário / `diasdasemana`|Dias da semana corrente até ontem|
|Mensal|Mês anterior|
|Anual|Ano corrente|

\---

## 4\. Casos de Uso e Exemplos

**UC-001.1 — Seleção básica para análise Padrão**

> Analista seleciona módulo PRODUTO, modo Padrão, granularidade Mensal, seleciona "Abril 2025" e "Maio 2025". Clica em Resultado. Sistema exibe tabela com dados agregados para os dois meses.

**UC-001.2 — Comparativo com LY**

> Analista seleciona Comparativo, período Diário, P1 = 01/05/2025 → 31/05/2025, ativa toggle LY. Sistema automaticamente define P2 = 01/05/2024 → 31/05/2024. A tabela exibe colunas P1 e P2 lado a lado.

**UC-001.3 — Comparativo com MDSAA**

> Analista seleciona Comparativo, período Diário, P1 = 05/05/2025 (segunda-feira). MDSAA define P2 = 06/05/2024 (segunda-feira da mesma semana do ano anterior).

**UC-001.4 — Troca de módulo**

> Analista está no módulo LOJA com filtro "Estado = SP" e agrupamento por "Cidade". Clica em PRODUTO. Sistema dispara animação de transição, zera filtros e agrupamentos, mantém o período configurado.

**UC-001.5 — Hora a Hora**

> Analista seleciona modo Hora a Hora. Sistema automaticamente define granularidade Diário, sub-tipo Período, datas = hoje/hoje. Campos de período ficam desabilitados para edição enquanto Hora a Hora estiver ativo.

\---

## 5\. Critérios de Aceite

* \[ ] Dado que o usuário está no módulo PRODUTO, quando selecionar o módulo LOJA, então a animação de transição ocorre por \~1,5s, filtros e agrupamentos são zerados e o período é mantido.
* \[ ] Dado que o modo é Comparativo e MDSAA está ativo, quando o usuário alterar P1, então P2 é recalculado automaticamente sem interação adicional.
* \[ ] Dado que o modo é Comparativo e P2 não está definido, quando o usuário tentar ir para o Resultado, então o botão "Gerar Resultado" permanece desabilitado.
* \[ ] Dado que a granularidade é Diário/diasdasemana, quando o range selecionado gerar mais de 20 dias válidos nos weekdays escolhidos, então o sistema limita/avisa o usuário.
* \[ ] Dado que o modo é Hora a Hora, quando selecionado, então granularidade=Diário, sub-tipo=período e data=hoje são definidos automaticamente e os campos de período ficam bloqueados.
* \[ ] Dado que o usuário clica em Gerar Resultado, quando validações passam, então o loading overlay aparece por 3 segundos antes da tabela ser exibida.
* \[ ] Dado que o usuário está no step 4 (Resultado) e clica em step 1, então retorna para a tela de seleção sem perder as configurações atuais.

