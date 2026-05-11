# Título da Feature

Temporalidade — tipos de período, janelas comparativas e baselines (ex.: ano anterior)

---

# 1. Contexto

## Objetivo

Definir **como o tempo entra na análise**: agregação diária/mensal/anual, comparativo entre duas janelas, visão **evolutiva** e recorte **hora a hora**, com regras explícitas de baseline.

## Problema que resolve

Evita comparações **ambíguas** (“cresceu vs o quê?”) e reduz discussões sem base comum.

## Usuários impactados

Heavy (BI), power (regional), light (acompanhamento diário).

## Dependências

Motor temporal; calendário corporativo; fuso horário oficial.

## Premissas

Protótipo oferece toggles de baseline; produção deve **formalizar precedência** entre regras conflitantes.

---

# 2. Usabilidade e Interface

## Comportamento

- Seletores de período por tipo (diário, mensal, anual, etc.).
- Comparativo com **dois painéis** simétricos de configuração.
- Toggles de baseline (ex.: **mesmo dia da semana ano anterior** vs **mesmo intervalo civil ano anterior**).

## Estados

| Estado | UI |
|--------|-----|
| Janela incompleta | Destaque de campo obrigatório |
| Janela inválida (fim < início) | Erro inline |
| Sem dados em uma janela | Indicador na série correspondente |

## Gaps

- Explicar ao usuário **qual baseline está ativo** no título/resumo.
- Tratamento de fuso e horário de verão — **[DECISÃO PENDENTE]**.

## Melhorias

- “Pré-visualização” do tamanho da janela (nº de dias úteis).

---

# 3. Regras e Cálculos

## Regras

- **RN-01:** Comparativo exige **duas janelas válidas** antes do resultado.
- **RN-02:** Granularidade da métrica deve ser **compatível** com granularidade temporal escolhida — **[DECISÃO PENDENTE: matriz de compatibilidade]**.
- **RN-03:** Se dois baselines forem mutuamente exclusivos, apenas **um** ativo ou precedência documentada.

## Fórmulas (exemplo comparativo)

- Variação absoluta: `V2 - V1`
- Variação percentual: `(V2 - V1) / nullif(V1,0)` com regra para `V1=0` — **[DECISÃO PENDENTE]**
- Arredondamento: **meia par** ou truncamento — **[DECISÃO PENDENTE]**

## Edge cases

- Ano bissexto em espelhamento de datas.
- Semana parcial vs semana ISO.
- Intradia com loja que não opera em todos os horários.

---

# 4. Casos de Uso e Exemplos

| ID | Contexto | Ação | Esperado |
|----|------------|------|----------|
| CU-01 | Feliz | Define P1 e P2 válidos | Comparativo renderiza |
| CU-02 | Alternativo | Ativa baseline automático | P2 preenchido conforme regra |
| CU-03 | Inválido | P2 vazio | Bloqueio |
| CU-04 | Extremo | Troca fuso no SO | Resultado consistente com servidor |
| CU-05 | Dados | Uma janela sem vendas | Série com zero/ausência explícita |

---

# 5. Critérios de Aceite

- [ ] **CA-01** Dado modo comparativo, quando uma janela estiver incompleta, então resultado **não** é gerado e o usuário vê **lista de pendências**.
- [ ] **CA-02** Dado baseline ativo, quando resultado for exibido, então **rótulo/resumo** indica claramente a regra aplicada.
- [ ] **CA-03** Dado variação percentual com denominador zero, então UI aplica política aprovada (n/d, infinito, ocultar) — **[DECISÃO PENDENTE]**.
- [ ] **CA-04** Dado hora a hora, quando eixo temporal for montado, então buckets seguem definição oficial (ex.: 24 horas) sem buracos não explicados.
- [ ] **CA-05** Dado processamento servidor, quando consulta ultrapassar timeout, então erro **não** mistura dados de duas janelas.
