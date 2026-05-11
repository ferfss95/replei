# PRD-012: Módulo INDICADORES (KPIs operacionais de loja)

## 1. Contexto e Problema

Operação de lojas precisa monitorar **KPIs** alinhados a **cadastro territorial** e, quando necessário, ao **mix de produto** — sem usar o mesmo menu de métricas de venda fiscal detalhada do PRODUTO.

## 2. Objetivo

Expor métricas com prefixo **`ind_`** segundo o guia documentado em `src/app/modules/indicadores.ts`, reutilizando a **mesma mecânica** do LOJA (atributos de localização + bloco Produto) e mocks/configurações em `referenceData.ts` até integração BI.

## 3. Usuários Impactados

Operações regionais; gestão de loja; central de indicadores (**read-heavy** para lojas).

## 4. Requisitos Funcionais

- **RF-01:** Replicar domínio **LOCALIZAÇÃO** igual ao arquivo `indicadores.ts` (**REDE, TIPO, ESTADO, REGIONAL, CIDADE, LOJA, SETOR, VENDEDOR**).
- **RF-02:** Incluir **segunda linha** **`domainAttributeExtraRows`** com **`PRODUTO_DOMAIN_ATTRIBUTE_DEFS`** e rótulo de seção “Produto”.
- **RF-03:** Para qualquer `attrId` onde `isProdutoDomainAttrId(attrId)`, delegar `getDomainAttributeOptions` a **`produtoModule`** (paridade atual).
- **RF-04:** Novas métricas futuras devem obedecer o protocolo descrito nos comentários do próprio arquivo (lista em **`metrics`**, **`metricDisplayOrder`**, mocks `MOCK_IND_*`, **`METRIC_CONFIG`**, **`METRIC_ABBREVIATIONS`**).
- **RF-05:** Listas **`SETOR_OPTIONS_IND`** e **`VENDEDOR_OPTIONS_IND`** permitem divergência futura do LOJA sem acoplamento forçado.

## 5. Requisitos Não Funcionais

- **RNF-01:** Todo id de métrica neste módulo deve usar **prefixo `ind_`** para evitar colisão semântica e técnica com PRODUTO/LOJA — mandatório.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? |
|-------|------|-------|--------------|
| Definições de métricas e mocks | objeto/array | codebase | Sim até backend |

### Saídas

| Campo | Tipo | Destino |
|-------|------|---------|
| Colunas KPI | tabela/export | resultado |

Reutiliza entradas/saídas dimensionais conforme PRD-004, PRD-005 e PRD-006.

## 7. Regras de Negócio

- **RN-01:** Agregações percentuais seguem o **mesmo motor global** do restante do app (`METRIC_CONFIG`, funções de ratio agregado).
- **RN-02:** Cross-filter **estado→cidade→loja** em `getFilteredGroupOptions` permanece como em `indicadores.ts` (+ delegação produto).

## 8. Critérios de Aceite

- [ ] Dado qualquer métrica `ind_X` presente em `METRIC_CONFIG`, quando usuário seleciona e gera resultado, então formatação e abreviação exibida batem com configuração e dicionário.
- [ ] Dado filtro de FRANQUIA em bloco Produto no INDICADORES, quando opções forem listadas, então refletem `produtoModule` (PRD-005).

## 9. Fora do Escopo

Gamificação de ranking entre vendedores; metas individuais contratuais sem política aprovada.

## 10. Dependências

PRD-002; PRD-004; PRD-005; PRD-006; PRD-009; `referenceData.ts`.

## 11. Métricas de Sucesso

Substituição progressiva de planilhas paralelas de KPIs de loja; adoção do módulo vs MAU total.

## 12. Aberto / Decisões Pendentes

Catálogo oficial `ind_*` com **owner** de negócio por KPI; integração com data lake alvo.
