# PRD-013: Módulo EXTRAVIOS (placeholder e evolução)

## 1. Contexto e Problema

Compras, supply chain e compliance precisam analisar **perdas, divergências e extravios** com lente dedicada. O protótipo atual apenas **reserva** o módulo com configuração **derivada do PRODUTO** reduzida, sem desenho de negócio completo.

## 2. Objetivo

Documentar o **comportamento baseline** existente e delimitar o **MVP futuro** (dimensões, métricas, workflow de aprovação) sem bloquear releases atuais do ecossistema.

## 3. Usuários Impactados

**Futuro:** loss prevention, supply chain, compliance financeiro — **[DECISÃO PENDENTE: RACI]**. **Hoje:** nenhum fluxo exclusivo além do que PRODUTO reduzido já oferece.

## 4. Requisitos Funcionais

### Baseline (protótipo atual — deve ser mantido até substituição explícita)

- **RF-01:** O sistema deve registrar módulo com id **`EXTRAVIOS`** e rótulo correspondente em `MODULE_REGISTRY`.
- **RF-02:** Configuração efetiva deve ser **`produtoSemExposicao`**: PRODUTO **sem** métricas `exp_*`, **sem** `ppa`, **sem** `match_preco`, **sem** seções extras de sidebar de exposição — ver `src/app/modules/index.ts`.

### Evolução (não implementado — especificação alvo)

- **RF-03:** O sistema deve permitir dimensões específicas de extravio — **[DECISÃO PENDENTE: exemplos — tipo de ocorrência, canal de detecção, responsável, status workflow]**.
- **RF-04:** O sistema deve permitir métricas — **[DECISÃO PENDENTE: valor recuperado, qtd unidades, taxa % sobre venda, aging]** com definições em dicionário corporativo.
- **RF-05:** O sistema deve integrar com fonte de fatos — **[DECISÃO PENDENTE: ERP, WMS, inventário cíclico]**.

## 5. Requisitos Não Funcionais

- **RNF-01:** Até definição de carga real, **não** impor SLAs específicos além da plataforma (PRD-001).
- **RNF-02:** Quando fatos forem sensíveis (fraude), logs e exportações seguem classificação PRD-001 — **[DECISÃO PENDENTE]**.

## 6. Entradas e Saídas

### Entradas (futuro)

| Campo | Tipo | Fonte | Obrigatório? | Observações |
|-------|------|-------|--------------|-------------|
| Eventos de extravio | fato | **[DECISÃO PENDENTE]** | Sim no MVP real | Granularidade a definir |
| Cadastro produto/loja | dim | mesmos masters globais | Sim | Unificar linguagem |

### Saídas (futuro)

| Campo | Tipo | Destino | Formato | Observações |
|-------|------|---------|---------|-------------|
| Painéis e exportações | agregados | usuário | tabela/PDF | Reuso PRD-009–011 |

## 7. Regras de Negócio

- **RN-01:** Enquanto RF de evolução não existir, **nenhuma** promessa comercial de “módulo EXTRAVIOS completo” pode ser feita — apenas placeholder homologado.
- **RN-02:** Quando MVP for definido, totais de extravio **não** devem duplicar medidas de venda do PRODUTO sem chave de reconciliação — **[DECISÃO PENDENTE]**.

## 8. Critérios de Aceite

**Baseline**

- [ ] Dado EXTRAVIOS selecionado, quando abrir catálogo de métricas, então **não** aparecem `exp_*`, `ppa`, `match_preco`.

**MVP futuro (quando escopo aprovado)**

- [ ] **[DECISÃO PENDENTE]** checklist a recriar após workshop de negócio.

## 9. Fora do Escopo

Integração com CCTV; investigação criminal externa; bloqueio operacional automático de loja.

## 10. Dependências

PRD-002; PRD-006; baselines de PRODUTO; PRD-001 para classificação de dado sensível.

## 11. Métricas de Sucesso

N/A para placeholder; pós-MVP: redução de perdas auditáveis, tempo de fechamento de ocorrência — **[DECISÃO PENDENTE]**.

## 12. Aberto / Decisões Pendentes

Todo backlog EXTRAVIOS além do baseline; patrocinador executivo; prioridade no roadmap vs outros módulos.
