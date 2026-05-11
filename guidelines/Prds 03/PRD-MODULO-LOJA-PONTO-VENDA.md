# Título da Feature

Módulo Loja — análise por território e operação com visão de produto embutida

---

# 1. Contexto

## Objetivo

Priorizar recortes **territoriais e operacionais** (rede, regional, cidade, loja, setor, vendedor) mantendo acesso ao **bloco de produto** para análises de mix **no contexto da loja**.

## Problema que resolve

Permite resposta rápida a “**o que está acontecendo na minha base de lojas**” sem trocar de ferramenta.

## Usuários impactados

Power (regional), heavy (operações comerciais), light (gestor de loja com escopo reduzido).

## Dependências

Cadastro de lojas; política de visibilidade; mesmas dimensões de produto do PRD de produto (comportamento espelhado no protótipo).

---

# 2. Usabilidade e Interface

## Comportamento

- Primeira seção: **localização/operação da loja**.
- Segunda seção: **produto** (mesmos atributos da lente produto, para consistência de linguagem).

## Estados

- Filtros dependentes território (estado → cidade → loja).
- Empty quando usuário não tem lojas no recorte.

## Gaps

- Diferenciar visualmente “**contexto loja**” vs “**mix**” para evitar leitura errada de métricas.

## Melhorias

- Atalhos: “minha regional”, “minhas lojas”.

---

# 3. Regras e Cálculos

## Regras

- **RN-01:** Hierarquia territorial deve respeitar cadastro e permissões.
- **RN-02:** Bloco produto reutiliza **mesmas regras de coerência** da lente produto.
- **RN-03:** Métricas exibidas são as do **catálogo do módulo Loja** — **[DECISÃO PENDENTE: paridade total ou subset vs Produto]**.

## Edge cases

- Vendedor com nome sensível — LGPD.
- Loja temporariamente sem faturamento no período.

---

# 4. Casos de Uso e Exemplos

| ID | Contexto | Ação | Esperado |
|----|------------|------|----------|
| CU-01 | Regional | Filtra 5 lojas + categoria | Resultado agregado e drill por loja |
| CU-02 | Loja | Filtra uma loja + marca | Série única ou poucas linhas |
| CU-03 | Permissão | Tenta loja fora do escopo | Bloqueio |
| CU-04 | Produto | Usa franquia | Coerência com PRD de produto |
| CU-05 | Exporta | PDF | Contexto loja explícito |

---

# 5. Critérios de Aceite

- [ ] **CA-01** Dado perfil regional, quando listar lojas, então apenas lojas **autorizadas** aparecem.
- [ ] **CA-02** Dado bloco produto ativo, quando aplicar coerência de categoria/modalidade, então comportamento é **idêntico** ao da lente produto.
- [ ] **CA-03** Dado resultado com hierarquia territorial, quando ordenar por venda, então ordenação reflete **valores agregados** corretos por nível.
- [ ] **CA-04** Dado atributo pessoal (vendedor), quando exportar, então política de **mascaramento** é aplicada se exigida.
- [ ] **CA-05** Dado troca para módulo Produto após configurar Loja, então estado anterior **não** persiste (regra de plataforma).
