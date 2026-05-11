# Título da Feature

Módulo Extravios — estado atual do protótipo e roadmap para produto real

---

# 1. Contexto

## Objetivo

Reservar lente **Extravios** no ecossistema e definir **roadmap** para análises de perdas, divergências e recuperação, **sem** prometer escopo além do que o protótipo comprova hoje.

## Problema que resolve (futuro)

Dar visibilidade única a **perdas** com rastreabilidade e conciliação com estoque e financeiro.

## Estado atual do protótipo

- Módulo **navegável** com jornada semelhante às demais lentes.
- Escopo de métricas **reduzido** em relação à lente produto completa (placeholder de produto).
- Dados **fictícios**.

## Usuários impactados (futuro)

Prevenção de perdas, supply chain, controladoria, auditoria.

## Dependências

Definição de **fato de extravio**, workflow de conciliação, integrações de inventário — **[DECISÃO PENDENTE]**.

---

# 2. Usabilidade e Interface

## Comportamento atual

- Seleção do módulo no seletor principal.
- Mesma estrutura de etapas e resultado que outras lentes.

## Gaps de UX

- Falta narrativa específica (“o que é extravio aqui?”).
- Falta distinção visual de KPIs de perda vs venda.

## Melhorias sugeridas

- Wizard contextual com exemplos de uso de perdas.
- Painel de “status da investigação” — fora do MVP inicial.

---

# 3. Regras e Cálculos

## Baseline (protótipo)

- **RN-01:** Módulo não deve ser comunicado externamente como “concluído” até catálogo próprio existir.
- **RN-02:** Reutilização temporária de fluxo/métricas de outra lente é **aceitável só em fase de conceito**.

## Roadmap (produção)

- **RN-03:** Ocorrência deve ter: tipo, valor, quantidade, loja, produto, data, status, responsável — **[DECISÃO PENDENTE]**.
- **RN-04:** Conciliação com ajustes contábeis — **[DECISÃO PENDENTE]**.

## Edge cases

- Duplicidade de lançamento; correção retroativa; devolução que compensa perda.

---

# 4. Casos de Uso e Exemplos

| ID | Fase | Contexto | Ação | Esperado |
|----|------|----------|------|----------|
| CU-01 | Hoje | Demo interna | Navega módulo | Fluxo funcional sem promessa legal |
| CU-02 | Futuro | Perda confirmada | Filtra por causa | Ranking de causas |
| CU-03 | Futuro | Auditoria | Exporta | Trilha completa |
| CU-04 | Futuro | Inválido | Dado inconsistente | Bloqueio com fila de correção |
| CU-05 | Futuro | Integração off | Retry | Degradação segura |

---

# 5. Critérios de Aceite

### Fase conceito (hoje)

- [ ] **CA-01** Dado módulo Extravios selecionado, quando usuário percorrer jornada, então fluxo permanece **estável** sem erros de navegação bloqueantes conhecidos.

### Fase produto (futuro — quando aprovado)

- [ ] **CA-02** Dado catálogo de extravios publicado, quando usuário selecionar KPI de perda, então definição e fonte aparecem no dicionário.
- [ ] **CA-03** Dado ocorrência duplicada detectada, quando agregar, então sistema aplica **regra de deduplicação** aprovada.
- [ ] **CA-04** Dado exportação, quando ocorrer, então arquivo carrega **classificação de confidencialidade** obrigatória.
- [ ] **CA-05** Dado integração com estoque, quando houver divergência, então UI destaca **delta** explicável.
