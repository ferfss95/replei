# Título da Feature

Resultado analítico — tabela hierárquica, gráfico e participação relativa

---

# 1. Contexto

## Objetivo

Apresentar o **mesmo recorte decisório** em formato tabular e gráfico, com opção de ver **participação relativa** entre linhas quando fizer sentido.

## Problema que resolve

Reduz interpretação divergente entre “número na tabela” e “forma da curva”; acelera storytelling em reuniões.

## Usuários impactados

Todos após configurar análise; heavy usa ordenação/paginação intensamente.

## Dependências

Motor de agregação; biblioteca de gráficos; regras de formatação por métrica.

---

# 2. Usabilidade e Interface

## Comportamento

- **Tabela** com hierarquia na primeira coluna; colunas dinâmicas por período e métrica.
- **Gráfico** sincronizado com seleção de séries visíveis na tabela (quando aplicável).
- Controle de **participação percentual** por coluna (share) com exclusões para métricas que já são taxas — comportamento do protótipo a **formalizar por produto**.

## Estados

| Estado | UI |
|--------|-----|
| Carregando | Skeleton ou overlay |
| Uma linha apenas | Share desabilitado ou oculto (evita 100% trivial) |
| Erro parcial gráfico | Tabela intacta + aviso no gráfico |

## Gaps

- Legenda e unidades no gráfico vs tabela — alinhar.
- Acessibilidade (cores + padrões, não só cor).

## Melhorias

- Drill-down controlado por permissão.

---

# 3. Regras e Cálculos

## Regras

- **RN-01:** Tabela e gráfico consomem o **mesmo conjunto** de fatos filtrados.
- **RN-02:** **Share** calculado sobre **total visível** do recorte (não universo global) — documentar para treinamento.
- **RN-03:** Ordenação e paginação **não** alteram totais globais do recorte (apenas exibição).

## Cálculos

- Totais e subtotais conforme tipo de métrica (soma, média ponderada, taxa não aditiva) — charter por métrica.

## Edge cases

- Respostas fora de ordem (concorrência).
- Grande número de colunas (scroll horizontal, congelar primeira coluna).

---

# 4. Casos de Uso e Exemplos

| ID | Contexto | Ação | Esperado |
|----|------------|------|----------|
| CU-01 | Feliz | Gera com 3 métricas e 2 períodos | Tabela e gráfico alinhados |
| CU-02 | Share | Liga participação | Colunas % coerentes com exclusões |
| CU-03 | Uma linha | Tenta share | Bloqueado ou oculto |
| CU-04 | Concorrência | Altera filtro durante render | Sem misturar séries |
| CU-05 | Extremo | 200 colunas | UX não quebra (scroll/limit) |

---

# 5. Critérios de Aceite

- [ ] **CA-01** Dado resultado válido, quando alternar entre tabela e gráfico, então **valores** exibidos para a mesma combinação linha×métrica×período são **iguais** (dentro da tolerância de arredondamento definida).
- [ ] **CA-02** Dado share ativo, quando métrica estiver na lista de exclusão de participação, então **não** surge coluna % adicional para ela.
- [ ] **CA-03** Dado ordenação por coluna, quando usuário ordenar, então ordem das linhas muda sem alterar **definição** do recorte.
- [ ] **CA-04** Dado falha apenas no gráfico, quando ocorrer, então tabela permanece utilizável e mensagem indica indisponibilidade do gráfico.
- [ ] **CA-05** Dado exportação (PRD de exportação), quando exportar após share ativo, então PDF reflete **exatamente** o estado visual da tela acordado.
