# Título da Feature

Módulo Produto — análise de venda e estoque por sortimento e localização

---

# 1. Contexto

## Objetivo

Permitir análises de **performance comercial** e **estoques** com recorte por **sortimento** e, quando necessário, por **localização logística** (rede, canal, loja, etc. conforme catálogo do módulo).

## Problema que resolve

Centraliza visão de **mix** com **números de venda/estoque** sem depender de planilhas paralelas.

## Áreas impactadas

Compras, planejamento, trade, financeiro (leitura).

## Usuários impactados

Heavy (mix profundo), power (linha/marca), light (KPIs principais).

## Relação com outros PRDs

Dimensões locais e de produto; métricas; temporalidade; resultado; exportação.

## Premissas

Protótipo inclui blocos adicionais de métricas (ex.: exposição, planejamento) — validar o que entra no **MVP corporativo**.

---

# 2. Usabilidade e Interface

## Comportamento

- Primeira área: **localização e canais** conforme desenho do protótipo.
- Segunda área: **atributos de produto** (hierarquia e marca/franquia).
- Sidebar com grupos de métricas; divisores visuais para planejamento e blocos especiais.

## Estados

- Métricas de exposição agrupadas em seção dedicada (se mantida).
- Accordion fechado por padrão em seções secundárias — revisar com UX.

## Gaps

- Explicar diferença entre “métricas de exposição física” vs “venda” para evitar interpretação errada.

## Melhorias

- Perfil “executivo” com subset de métricas sugeridas.

---

# 3. Regras e Cálculos

## Regras

- **RN-01:** Catálogo de métricas do módulo é **fechado**; não misturar KPIs operacionais de outros módulos.
- **RN-02:** Combinações **local × produto** devem respeitar chaves de fatos disponíveis na modelagem.
- **RN-03:** Métricas percentuais e de variação seguem charter específico.

## Cálculos

- Exposição pode ser contagem física mockada — em produção definir **fonte** e **periodicidade**.

## Permissões

- Métricas sensíveis (margem, CMV) com controle por perfil.

---

# 4. Casos de Uso e Exemplos

| ID | Contexto | Ação | Esperado |
|----|------------|------|----------|
| CU-01 | Planejamento | Filtra franquia + região | Resultado coerente |
| CU-02 | Trade | Cruza marca com canal | Lista e números alinhados |
| CU-03 | Loja | Filtra “minha loja” + categoria | Agregação correta |
| CU-04 | Inválido | Cruza dimensão sem fato | Empty explicativo |
| CU-05 | Exporta | PDF com duas áreas de contexto | Metadados claros |

---

# 5. Critérios de Aceite

- [ ] **CA-01** Dado módulo Produto ativo, quando usuário listar métricas, então **não** aparecem indicadores exclusivos de outros módulos (ex.: KPI operacional próprio de outra lente).
- [ ] **CA-02** Dado filtros locais e de produto aplicados, quando gerar resultado, então totais batem com a **mesma** consulta repetida (idempotência de consulta).
- [ ] **CA-03** Dado seção opcional de métricas especiais habilitada no catálogo, quando usuário não expandir accordion, então métricas internas **não** são selecionadas por engano — **[DECISÃO PENDENTE: UX]**.
- [ ] **CA-04** Dado tooltip de métrica, quando exibido, então conteúdo segue dicionário corporativo.
- [ ] **CA-05** Dado combinação sem fatos no período, quando gerar, então empty state orienta ajuste de período ou filtros.
