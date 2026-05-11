# PRD-005: Dimensões do domínio Produto

## 1. Contexto e Problema

Planejamento e compras pensam em **hierarquia de sortimento**. Sem estrutura estável SALA → … → SABOR e atributos comerciais (marca, franquia, modelo), decisores utilizam nomenclaturas divergentes.

## 2. Objetivo

Unificar hierarquia e opções derivadas (**categoria ↔ modalidade**, **grupo ↔ subgrupo**, **sala ↔ mesa**, coerência Alimento / Alimentos) e garantir lista canônica de **FRANQUIA** logo após **MARCA**.

## 3. Usuários Impactados

Heavy (compras, planejamento); Power (category managers).

## 4. Requisitos Funcionais

- **RF-01:** O sistema deve declarar **`PRODUTO_DOMAIN_ATTRIBUTE_DEFS`** na seguinte ordem de ids: **sala, mesa, categoria, modalidade, grupo, subgrupo, marca, franquia, modelo, genero, faixa_etaria, cor, tamanho, sabor** — **`src/app/modules/produto.ts`**.
- **RF-02:** Opções **FRANQUIA** devem ser exatamente, nesta ordem: Pegasus, Vomero, Metcon, Revolution, Downshifter, Airmax, Dunk, T90, Airforce — constante **`FRANQUIA_OPTIONS`** em `referenceData.ts`.
- **RF-03:** O dropdown de **MARCA** deve exibir dois grupos: **Marcas Próprias e Licenciadas** e **Demais** (`MARCA_OPTION_GROUPS` em `referenceData.ts` + comportamento em `AttributeCard.tsx`).
- **RF-04:** `getDomainAttributeOptions` deve aplicar **`applyGroupCategoryCoherence`** quando categoria/subgrupo e grupo envolvem **Alimento** / **Alimentos** — comportamento atual em `produto.ts`.
- **RF-05:** **mesa** deve restringir-se por **primeira letra** do código alinhado à sala selecionada em contextos onde a regra sala↔mesa se aplica (**`filterMesasBySalasOptions`**, **`MESA_OPTIONS`**).

## 5. Requisitos Não Funcionais

- **RNF-01:** Resolução de listas deve ser **determinística**: mesmos `selections` → mesma lista ordenada.
- **RNF-02:** Funções **`modeloDescriptionAfterBrand`** e **`formatModeloListEntry`** preservam comportamento até definição de integração real — **[DECISÃO PENDENTE: se texto de modelo deve incorporar nome de FRANQUIA na heurística]**.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? | Observações |
|-------|------|-------|--------------|-------------|
| `selections` (map attrId → valores) | Record | wizard | Opcional por atributo | |

### Saídas

| Campo | Tipo | Destino | Formato | Observações |
|-------|------|---------|---------|-------------|
| Lista efetiva por atributo | string[] | cartões AttributeCard | ordenada | Via `getDomainAttributeOptions` |

## 7. Regras de Negócio

- **RN-01:** Quando apenas o domínio alimentício se aplica, apenas opções coerentes de categoria/grupo ficam disponíveis (regras atuais de `applyGroupCategoryCoherence`).
- **RN-02:** Para **mesa** vs **sala**, se nenhuma sala estiver selecionada no filtro de análise, o conjunto de mesas permite todas as mesas válidas (**paridade** com `getFilteredGroupOptions` em `produto.ts`).

## 8. Critérios de Aceite

- [ ] Dado o cartão MARCA em PRODUTO, quando abrir a lista, então dois blocos com rótulos oficiais aparecem e as opções batem `MARCA_OPTION_GROUPS`.
- [ ] Dado o cartão FRANQUIA, quando abrir a lista, então aparecem exatamente as nove opções definidas em `FRANQUIA_OPTIONS` nesta ordem.
- [ ] Dado apenas grupo Alimentos selecionado sem não-alimentício, quando abrir CATEGORIA, então **Alimento** é mantido disponível segundo regra vigente.

## 9. Fora do Escopo

MDM automatizado por temporada para lançamento de SKU; precificação.

## 10. Dependências

PRD-003; PRD-004 (LOJA/INDICADORES reusam `PRODUTO_DOMAIN_ATTRIBUTE_DEFS`); `produto.ts`; `referenceData.ts`; `AttributeCard.tsx`.

## 11. Métricas de Sucesso

Uso combinado MARCA + FRANQUIA em análises; redução de tickets de definição de sortimento inconsistente.

## 12. Aberto / Decisões Pendentes

Filtragem cruzada **MARCA × FRANQUIA** (hoje a lista FRANQUIA é fixa independente da marca).
