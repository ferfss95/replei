# Título da Feature

Dimensões de localização e canal — filtros, dependências e coerência territorial

---

# 1. Contexto

## Objetivo

Permitir recortes confiáveis por **rede, território, loja, canal e origem** (conforme módulo), com **listas dependentes** coerentes (ex.: cidade coerente com estado).

## Problema que resolve

Evita análises com **combinações impossíveis** (loja fora da cidade selecionada) e alinha linguagem entre áreas.

## Contexto operacional

Regionais analisam performance por cluster; loja foca no próprio ponto; planejamento cruza canal e território.

## Áreas impactadas

Operações, comercial, dados (cadastro), TI (API de território).

## Usuários impactados

| Perfil | Uso |
|--------|-----|
| Heavy | Cruzamentos multi-estado, multi-loja |
| Power | Comparar cidades dentro da regional |
| Light | Filtrar “minha loja” |

## Dependências

Cadastro mestre de lojas; política de **visibilidade por território** do usuário.

## Premissas

Protótipo demonstra dependências; produção exige **fonte única** e **autorização**.

---

# 2. Usabilidade e Interface

## Comportamento

- Cartões por dimensão (rede, tipo, estado, regional, cidade, loja, etc.).
- Listas **reordenadas/filtradas** ao mudar seleção “pai”.
- Algumas dimensões com **agrupamento visual** no dropdown (ex.: status físico / CD) — manter semântica em produção.

## Estados

| Estado | Comportamento |
|--------|----------------|
| Nenhum pai selecionado | Filha mostra universo permitido ao usuário |
| Pai selecionado | Filha restringe |
| Interseção vazia | Empty + sugestão de relaxar pai |

## Gaps UX

- Mensagem quando **cadastro** está incompleto (loja sem regional).
- Indicador “dados de catálogo com defasagem de D+n” — **[DECISÃO PENDENTE]**.

## Responsividade

Desktop principal; listas longas podem precisar **virtualização** — **[DECISÃO PENDENTE]**.

---

# 3. Regras e Cálculos

## Regras de negócio

- **RN-01:** Opções da dimensão filha ⊆ universo válido dado o contexto dos pais **e** permissões do usuário.
- **RN-02:** Formato canônico de exibição de cidade/UF deve ser **único** na empresa — **[DECISÃO PENDENTE: padrão oficial]**.
- **RN-03:** Ordenação de lojas por **rede** ou critério comercial — manter decisão explícita em produção.

## Origem dos dados

Protótipo: listas internas. Produção: **serviço de catálogo** + **cache** com TTL.

## Edge cases

- Loja fechada no período analisado — incluir ou não — **[DECISÃO PENDENTE]**.
- Mudança de nome de loja no meio do período — regra de **surrogate key** vs nome.

## Permissões

Usuário só vê territórios **autorizados**; exportação respeita mesmo recorte.

---

# 4. Casos de Uso e Exemplos

| ID | Contexto | Ação | Resultado esperado |
|----|------------|------|---------------------|
| CU-01 | Feliz | Estado X → cidade lista só filhas | Lista coerente |
| CU-02 | Alternativo | Remove estado após escolher cidade | Cidade resetada ou mantida se ainda válida — **[DECISÃO PENDENTE]** |
| CU-03 | Inválido | Usuário sem acesso à loja Z | Loja Z invisível |
| CU-04 | Extremo | 10k lojas | Performance aceitável ou busca obrigatória |
| CU-05 | Integração off | Catálogo indisponível | Degradação com retry |

---

# 5. Critérios de Aceite

- [ ] **CA-01** Dado seleção de estado válida, quando abrir lista de cidades, então **nenhuma** cidade fora do estado aparece para o usuário autorizado.
- [ ] **CA-02** Dado interseção vazia por conflito de filtros, quando usuário tentar gerar resultado, então sistema exibe **empty state** com causa provável.
- [ ] **CA-03** Dado perfil regional, quando listar lojas, então **apenas** lojas do território do usuário aparecem.
- [ ] **CA-04** Dado alteração de cadastro mestre, quando usuário reabrir lista, então vê versão atualizada dentro do **TTL** definido.
- [ ] **CA-05** Dado formato canônico de cidade/UF aprovado, quando exportar resultado, então labels seguem o **mesmo** padrão da tela.
