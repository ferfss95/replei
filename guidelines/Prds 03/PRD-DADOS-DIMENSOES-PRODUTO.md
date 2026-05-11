# Título da Feature

Dimensões de produto e sortimento — hierarquia, coerências e franquia

---

# 1. Contexto

## Objetivo

Representar o **sortimento** com hierarquia estável (sala → … → sabor, categoria, marca, **franquia**, modelo, etc.) e **coerências** entre atributos (ex.: categorias compatíveis com modalidade; alimentos vs não alimentos).

## Problema que resolve

Evita que compras e loja falem “categorias diferentes” para o mesmo recorte e reduz análises **semanticamente inválidas**.

## Contexto operacional

Planejamento de mix; análise de performance por linha comercial; cruzamento com território em módulos combinados.

## Usuários impactados

Heavy (compras/planejamento), power (category), light (gestor com foco em marca/linha).

## Dependências

PIM/MDM de produto; dicionário de **franquia** corporativo; regras de **marca × franquia** — **[DECISÃO PENDENTE]**.

## Relação com módulos

Em lentes com **bloco produto embutido**, as mesmas dimensões devem se comportar igual à lente produto pura.

---

# 2. Usabilidade e Interface

## Comportamento

- Cartões por atributo; busca textual nas listas longas.
- **Marca** com agrupamento visual (próprias/licenciadas vs demais) no protótipo — replicar só se negócio validar.
- **Franquia** como lista curta e fixa no protótipo; produção pode exigir catálogo dinâmico.

## Estados

| Estado | UI |
|--------|-----|
| Lista filtrada por coerência | Opções reduzidas com feedback “restrito por seleção anterior” |
| Conflito alimentar | Apenas combinações permitidas |

## Gaps

- Falta explicar ao usuário **por que** opções sumiram (educação in-product).
- Franquia independente de marca no protótipo — **pode gerar análises estranhas** se negócio exigir dependência.

## Melhorias

- “Sugerir próximo filtro” baseado em popularidade do recorte.

---

# 3. Regras e Cálculos

## Regras de negócio

- **RN-01:** Hierarquia oficial de atributos documentada pelo negócio; UI segue ordem aprovada.
- **RN-02:** Coerência **categoria ↔ modalidade** e **grupo ↔ subgrupo** conforme catálogo.
- **RN-03:** Regra **alimentos**: quando apenas universo alimentar aplica, restringir categorias/grupos compatíveis (lógica implícita do protótipo — validar com negócio).
- **RN-04:** **Sala ↔ mesa** por convenção de código (primeira letra) — documentar como regra oficial ou substituir por chave técnica em produção.

## Franquia (protótipo)

Lista canônica: Pegasus, Vomero, Metcon, Revolution, Downshifter, Airmax, Dunk, T90, Airforce — **ordem fixa** até catálogo dinâmico.

## Cálculos / derivações

- Descrição de **modelo** a partir de texto livre pode usar heurística de “texto após marca” — **[DECISÃO PENDENTE: manter, revisar ou remover em produção]**.

## Edge cases

- SKU sem marca; modelo ambíguo; mudança de taxonomia no meio do ano fiscal.

---

# 4. Casos de Uso e Exemplos

| ID | Contexto | Ação | Esperado |
|----|------------|------|----------|
| CU-01 | Feliz | Categoria A → modalidades válidas | Lista restrita corretamente |
| CU-02 | Feliz | Marca + Franquia | Resultado filtra ambos |
| CU-03 | Inválido | Combinação bloqueada por coerência | Opção não selecionável ou removida com aviso |
| CU-04 | Extremo | Catálogo gigante de modelo | Busca + performance |
| CU-05 | Dado ausente | Produto sem categoria | Linha em “não classificado” — **[DECISÃO PENDENTE]** |

---

# 5. Critérios de Aceite

- [ ] **CA-01** Dado seleção de grupo restritiva, quando abrir categorias, então apenas categorias **coerentes** aparecem.
- [ ] **CA-02** Dado lista de franquias oficial, quando abrir cartão Franquia, então opções batem o catálogo aprovado (fixo ou API).
- [ ] **CA-03** Dado regra sala/mesa vigente, quando filtrar mesas por salas selecionadas, então apenas mesas **válidas** pela convenção aparecem.
- [ ] **CA-04** Dado exportação, quando dimensões de produto presentes, então labels seguem **dicionário** corporativo.
- [ ] **CA-05** Dado mudança de versão de taxonomia, quando análise histórica for reaberta, então comportamento de **retrocompatibilidade** segue política aprovada — **[DECISÃO PENDENTE]**.
