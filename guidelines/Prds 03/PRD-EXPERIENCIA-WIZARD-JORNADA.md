# Título da Feature

Jornada analítica guiada — seleção, agrupamento, exclusão e resultado

---

# 1. Contexto

## Objetivo

Guiar o usuário por uma **sequência fixa** de decisões (o que incluir → como quebrar → o que excluir → ver resultado), reduzindo erro operacional e padronizando ritos de análise.

## Problema que resolve

Evita saltos diretos para “número na tela” sem **contexto explícito** de filtros e recorte, comum em planilhas ad hoc.

## Contexto operacional

Usuários com maturidade analítica variável precisam do mesmo **ritual** (compras, regional, loja).

## Áreas impactadas

Todos os módulos analíticos; UX; treinamento; suporte.

## Usuários impactados

| Perfil | Impacto |
|--------|---------|
| Heavy | Domina atalhos; quer eficiência sem perder rigor |
| Power | Alterna recortes com frequência |
| Light | Depende de clareza de etapas e bloqueios |

## Dependências

Catálogo de dimensões/métricas; motor de validação; política de comparativos (PRD de temporalidade).

## Relação com outros módulos

A jornada é **transversal**; o conteúdo de cada etapa muda por módulo.

## Premissas

Protótipo valida UX; produção exige **mensagens** e **telemetria** por etapa.

---

# 2. Usabilidade e Interface

## Telas e componentes

- **Cabeçalho** com etapas clicáveis (comportamento de habilitação/bloqueio conforme estado).
- **Cartões** de atributo com busca interna, seleção múltipla e estados “selecionado / não selecionado”.
- **Área de agrupamento** com limite máximo de níveis (comportamento do protótipo).
- **Exclusão** com mesma família de cartões, semântica “tudo exceto”.
- **Resultado** com tabela, gráfico e ações secundárias (ex.: participação percentual, exportação).

## Navegação

- Avanço e retorno entre etapas.
- **Bloqueio** de resultado se pré-requisitos não atendidos (ex.: comparativo incompleto).

## Estados e feedbacks

| Estado | UI |
|--------|-----|
| Etapa válida | Etapa destacada; próxima habilitada |
| Etapa bloqueada | Tooltip ou texto explicando pré-requisito |
| Processando resultado | Loader global ou skeleton na tabela |
| Vazio | Empty state com sugestão de relaxar filtros |

## Fluxos alternativos

- **Limpar:** zera seleções da jornada — **[DECISÃO PENDENTE: inclui período ou não]**.
- **Sair:** encerra fluxo — comportamento a definir em produção (logout vs voltar home).

## Mobile / desktop

Protótipo desktop-first; mobile — **[DECISÃO PENDENTE]**.

## Gaps / inconsistências

- Falta padronização de **copy** para bloqueios.
- Falta indicador “última alteração não aplicada ao resultado”.

## Melhorias sugeridas

- Resumo lateral fixo (“painel de contexto”) com filtros ativos antes de gerar.

---

# 3. Regras e Cálculos

## Regras de negócio

- **RN-01:** Ordem obrigatória: configuração de **inclusões** → **agrupamentos** → **exclusões** → **resultado** (pode ser relaxada em produção apenas com decisão formal).
- **RN-02:** Agrupamento define **níveis da hierarquia** da primeira coluna do resultado.
- **RN-03:** Exclusão remove valores do universo **após** inclusões e **antes** de agregar.
- **RN-04:** Limite de níveis de agrupamento é **política de produto** — documentar valor oficial.

## Validações

- Comparativo: duas janelas válidas.
- Pelo menos uma métrica selecionada — **[DECISÃO PENDENTE: permitir só dimensão?]**

## Concorrência e idempotência

- Múltiplas solicitações de resultado: última configuração válida vence; respostas antigas descartadas.

## Persistência

- **[DECISÃO PENDENTE]** rascunho local vs servidor.

---

# 4. Casos de Uso e Exemplos

| ID | Contexto | Ação | Esperado |
|----|------------|------|----------|
| CU-01 | Feliz | Preenche etapas e gera | Tabela + gráfico coerentes |
| CU-02 | Alternativo | Volta da exclusão para seleção | Mantém coerência ou redefine — **[DECISÃO PENDENTE]** |
| CU-03 | Inválido | Pula comparativo incompleto | Bloqueio + mensagem |
| CU-04 | Extremo | 500 cliques rápidos em gerar | Sem travamento; uma fila clara |
| CU-05 | Ausência de dados | Filtros válidos mas sem fatos | Empty state explicativo |

---

# 5. Critérios de Aceite

- [ ] **CA-01** Dado etapa de resultado bloqueada por pré-requisito, quando usuário tentar acessá-la, então vê **motivo** e **ação sugerida**.
- [ ] **CA-02** Dado limite de agrupamento atingido, quando tentar adicionar nível extra, então UI **impede** e comunica o limite.
- [ ] **CA-03** Dado troca de módulo durante jornada, quando confirmar troca, então estado anterior **não** reaparece no novo módulo.
- [ ] **CA-04** Dado processamento de resultado em andamento, quando usuário alterar filtro crítico, então UI indica que o resultado exibido pode estar **desatualizado** até nova geração.
- [ ] **CA-05** Dado fluxo completo em desktop homologado, quando percorrer jornada, então **não** há dead-ends sem saída (sempre há voltar/limpar).
