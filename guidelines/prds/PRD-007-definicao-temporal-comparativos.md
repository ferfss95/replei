# PRD-007: Definição temporal, comparativos, MDSAA e LY

## 1. Contexto e Problema

Comparativos deixam de ser confiáveis quando as **bases de calendário** divergem — por exemplo segundo-feira atual vs segunda do ano anterior, ou mesmo intervalo civil LY vs outro intervalo não espelhado.

## 2. Objetivo

Permitir Diário/Mensal/Anual e variantes (**meses, anos específicos, dias específicos, semanal**) com **dois períodos** no comparativo e toggles **MDSAA** (**mesmo dia da semana do ano anterior**) e **LY** (**mesmo intervalo civil no ano anterior**), mantendo **paridade** com `useDateRange`, `MdsaaToggle` e `LyToggle`.

## 3. Usuários Impactados

Todos; maior impacto em planejamento e regional em análises **Comparativo** e **mensal**.

## 4. Requisitos Funcionais

- **RF-01:** O sistema deve suportar granularidades e sub-tipos definidos pelo hook **`useDateRange`** (incluindo `periodType`, `dailySubType`, períodos compostos mensais/anuais/semanais) — **enum completo conforme código** **[DECISÃO PENDENTE: documentação formal em anexo]**.
- **RF-02:** No modo comparativo, o sistema deve manter dois conjuntos de parâmetros **simétricos** (ranges P1/P2, meses, anos, dias específicos, semanal e weekdays associados onde aplicável).
- **RF-03:** Toggle **MDSAA** deve refletir se a linha base de “ano anterior” considera **alinhamento pelo dia da semana**, conforme textos dos tooltips em **`MdsaaToggle.tsx`**.
- **RF-04:** Toggle **LY** deve preencher/espelhar o **Período 2** com as mesmas datas do **Período 1** deslocadas para o ano civil anterior, conforme **`LyToggle.tsx`**.

## 5. Requisitos Não Funcionais

- **RNF-01:** Parsing e exibição de datas deve usar fuso oficial — **[DECISÃO PENDENTE: exemplo America/São_Paulo]**.
- **RNF-02:** Quando backend existir, geração de lista de meses (equivalente a `MONTHS_OPTIONS`) deve respeitar “data atual de servidor”, não apenas relógio do cliente.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? | Observações |
|-------|------|-------|--------------|-------------|
| `mdsaaActive` | boolean | usuário | Não | |
| `lyActive` | boolean | usuário | Não | |
| Escolhas de período | vários | `SelectionView` / date pickers | Sim para gerar resultado | |

### Saídas

| Campo | Tipo | Destino | Formato | Observações |
|-------|------|---------|---------|-------------|
| Vetor de períodos efetivos | string[] ou equivalente | `useAnalysisData` | Array | Derivado |

## 7. Regras de Negócio

- **RN-01:** Se **MDSAA** e **LY** estiverem ativos ao mesmo tempo e sua semântica conflitar, **precedência** e mensagem devem estar definidas — **[DECISÃO PENDENTE]**.
- **RN-02:** Modo comparativo exige períodos válidos em ambos os lados antes de liberar resultado (gateway PRD-003).

## 8. Critérios de Aceite

- [ ] Dado LY ativo e Período 1 válido, quando acionar comportamento do toggle LY, então Período 2 reflete mesmo intervalo no ano anterior com **casos ano bissexto** cobertos por testes — **[DECISÃO PENDENTE: casos teste automatizados]**.
- [ ] Dado modo comparativo, quando apenas um período estiver válido, então passo resultado permanece travado até correção (**paridade atual**).

## 9. Fora do Escopo

Calendário de feriados municipais ou aberturas excepcionais de loja integrado ao motor.

## 10. Dependências

PRD-003; `useDateRange.ts`; `SelectionView.tsx`; `SecondaryHeader.tsx` **[se aplicável]**; gates em `AppHeader`.

## 11. Métricas de Sucesso

Redução de divergências “LY errado”; incidentes auditados contra planilhas de controle manual.

## 12. Aberto / Decisões Pendentes

Conflitos MDSAA × LY; calendário fiscal da companhia vs civil; semanaISO vs semana comercial.
