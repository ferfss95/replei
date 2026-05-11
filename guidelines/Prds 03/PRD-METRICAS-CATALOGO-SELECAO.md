# Título da Feature

Catálogo de métricas — grupos, seleção múltipla e ordem de exibição no resultado

---

# 1. Contexto

## Objetivo

Garantir **uma linguagem única** para indicadores financeiros e operacionais, com seleção guiada por **grupos** (venda/estoque, planejamento, exposição onde existir) e **metadados** (nome, significado, formato).

## Problema que resolve

Evita que o mesmo rótulo signifique cálculos diferentes entre squads e reduz erro na leitura executiva.

## Usuários impactados

Heavy (analista), power (gestor), light (loja com subset).

## Dependências

Dicionário de métricas; motor de formatação; permissões por sensibilidade (ex.: margem).

## Premissas

Protótipo: dados simulados; ordem de colunas segue **ordem de clique** — confirmar se é regra oficial em produção.

---

# 2. Usabilidade e Interface

## Comportamento

- Barra lateral com **accordions** por grupo.
- Seleção múltipla com checkbox; ícone e **tooltip** por métrica.
- Seções extras (ex.: exposição de produtos) apenas onde o módulo prever.

## Estados

| Estado | UI |
|--------|-----|
| Nenhuma métrica | Bloquear resultado ou avisar — **[DECISÃO PENDENTE]** |
| Métrica indisponível no módulo | Desabilitada com explicação |
| Tooltip | Texto curto + link “ver dicionário” opcional |

## Gaps

- Falta indicador “métrica beta/depreciada”.
- Falta limite máximo de métricas — **[DECISÃO PENDENTE]**.

## Melhorias

- Busca no catálogo; favoritos por usuário.

---

# 3. Regras e Cálculos

## Regras

- **RN-01:** Catálogo é **subconjunto** do módulo ativo; troca de módulo remove seleções inválidas.
- **RN-02:** Cada métrica possui **tipo de agregação** e **formato** (moeda, %, inteiro, variação) definidos no contrato.
- **RN-03:** Métricas de **planejamento** podem ter tratamento visual distinto (fundo) — manter acessibilidade (contraste WCAG).

## Cálculos

- Agregações de **percentuais** não são lineares; regras explícitas por métrica — **[DECISÃO PENDENTE: charter contábil]**.

## Permissões

Algumas métricas podem ser **restritas** a perfis (ex.: CMV).

---

# 4. Casos de Uso e Exemplos

| ID | Contexto | Ação | Esperado |
|----|------------|------|----------|
| CU-01 | Feliz | Seleciona 4 métricas em ordem A,B,C,D | Colunas na ordem A,B,C,D no resultado |
| CU-02 | Alternativo | Desmarca métrica no meio | Colunas atualizam após reprocessar |
| CU-03 | Inválido | Métrica não permitida no módulo | Não aparece ou aparece bloqueada |
| CU-04 | Extremo | 30 métricas | Degradação controlada ou limite |
| CU-05 | Versão | Métrica renomeada | Alias ou migração guiada |

---

# 5. Critérios de Aceite

- [ ] **CA-01** Dado módulo ativo, quando abrir catálogo, então **somente** métricas permitidas estão selecionáveis.
- [ ] **CA-02** Dado ordem de seleção definida como regra oficial, quando gerar resultado, então colunas respeitam essa ordem.
- [ ] **CA-03** Dado tooltip preenchido no dicionário, quando hover na métrica, então texto exibido coincide com versão publicada do dicionário.
- [ ] **CA-04** Dado métrica sensível sem permissão, quando usuário visualiza catálogo, então item **oculto** ou **desabilitado** com motivo.
- [ ] **CA-05** Dado exportação, quando métricas selecionadas, então cabeçalhos exportados usam **nomenclatura oficial** (não apelidos locais).
