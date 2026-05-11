# PRD-004: Dimensões de Localização (rede até origem conforme contexto)

## 1. Contexto e Problema

Decisões de loja e compras exigem recortes hierárquicos (por exemplo rede → loja ou estado → cidade) com **coerência** entre níveis físicos e canais.

## 2. Objetivo

Disponibilizar **atributos de localização** com listas **derivadas** de cadastros (ou mocks até integração) e **filtragem cruzada** conhecida, unificando a linguagem de pontos físicos e canais/logística.

## 3. Usuários Impactados

Planejamento, operações regionais; lojas nos módulos **LOJA** e **INDICADORES** (visão territorial).

## 4. Requisitos Funcionais

- **RF-01:** Na visão **PRODUTO**, o sistema deve usar `LOCATION_ATTRIBUTES` de `constants.ts`, **incluindo** CANAL e ORIGEM.
- **RF-02:** Nos módulos **LOJA** e **INDICADORES**, o primeiro bloco deve ser **`LOCALIZAÇÃO`** com atributos: REDE, TIPO, ESTADO, REGIONAL, CIDADE, LOJA, SETOR e VENDEDOR — **paridade com** `src/app/modules/loja.ts` e `indicadores.ts`.
- **RF-03:** O sistema deve ordenar/normalizar lista de lojas conforme **`orderStoresByNetwork`** onde aplicável em `referenceData`.
- **RF-04:** O sistema deve filtrar cidade/regional/loja usando funções `filter*` quando seleções pai restringirem grafos válidos (`referenceData` + `useAttributeFilters`).
- **RF-05:** O atributo **LOCALIZAÇÃO** (CD/status) deve exibir **agrupamentos visuais** no dropdown usando `LOCALIZACAO_OPTION_GROUPS` e tratamento especial em `AttributeCard`.

## 5. Requisitos Não Funcionais

- **RNF-01:** Para catálogo muito grande (milhares de lojas), listas devem vir a ser paginadas ou virtualizadas — **[DECISÃO PENDENTE: hoje lista completa carregada no cliente]**.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? | Observações |
|-------|------|-------|--------------|-------------|
| Listas mestre (redes, lojas, cidades, regionais…) | array de string | `referenceData.ts` → futuro backend | Sim | |

### Saídas

| Campo | Tipo | Destino | Formato | Observações |
|-------|------|---------|---------|-------------|
| `selections[attrId]` para ids de localização | string[] | wizard / resultado | Estado | |

## 7. Regras de Negócio

- **RN-01:** Se a interseção de filtros pai-filho resultar conjunto **vazio**, o comportamento esperado deve incluir **feedback ao usuário** — **[DECISÃO PENDENTE: UX e mensagens]**.
- **RN-02:** Formato de cidade **"Nome - UF"** no PRODUTO deve manter compatibilidade com o parsing em `useAttributeFilters`.

## 8. Critérios de Aceite

- [ ] Dados dois estados marcados na LOJA, quando o usuário abrir CIDADE, então apenas cidades pertencentes a um dos estados selecionados aparecem disponíveis.
- [ ] Dado PRODUTO com LOCALIZAÇÃO aberta, quando o usuário buscar dentro do grupo CD/status, então apenas opções compatíveis com o filtro de busca aparecem, mantendo agrupamento visual.

## 9. Fora do Escopo

Cadastro self-service de nova loja dentro do próprio REPLEI (fonte mestre externa ao app).

## 10. Dependências

PRD-003; `useAttributeFilters.ts`; `referenceData.ts`; `constants.ts`; `AttributeCard.tsx`.

## 11. Métricas de Sucesso

Redução de consultas com combinações geográficas impossíveis; feedback qualitativo de regional/planejamento.

## 12. Aberto / Decisões Pendentes

Sincronização tempo real com ERP vs snapshot diário; timezone e “loja válida na data”.
