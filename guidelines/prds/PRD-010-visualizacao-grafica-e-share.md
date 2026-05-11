# PRD-010: Visualização gráfica e % de participação (share)

## 1. Contexto e Problema

Apresentações executivas precisam de **gráficos** rápidos; além disso usuários querem ver **proporção** entre linhas já filtradas (share por coluna), sem contaminar métricas que já são `%` ou variação segundo regras atuais.

## 2. Objetivo

Renderizar séries (**Recharts** em `AnalysisView`) consistentes com tabela ativa e expor **`showSharePct`**: colunas extras de **participação** exceto quando `metricId ∈ PCT_EXCLUDED_METRICS`; **não mostrar share** quando há **apenas uma linha de dados** (evita trivial 100%) — comportamento atual.

## 3. Usuários Impactados

Power users e executivos; apresentações.

## 4. Requisitos Funcionais

- **RF-01:** Botões “**Exibir** / **Remover % do share por coluna**” devem alternar **`showSharePct`** globais passados por `AnalysisView` / `AnalysisTable`.
- **RF-02:** Share só deve aparecer quando **≥ 2 linhas** de dados de acordo com lógica documentada no código (comentário “single row is always 100%”).
- **RF-03:** Cada série no gráfico deve usar **`dataKey` único** por tipo de série para evitar colisão no Recharts (`AnalysisView` comentário explícito).
- **RF-04:** Células de percentual de participação na tabela via **`AnalysisCells`** alinhadas ao mesmo conjunto de exclusões de métrica.

## 5. Requisitos Não Funcionais

- **RNF-01:** Render estável com até **N** séries — **[DECISÃO PENDENTE: definição de N e teste de performance no browser alvo]**.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? |
|-------|------|-------|--------------|
| `showSharePct` | boolean | Estado `App` → `AnalysisView` | Não |
| Linhas+métricas+períodos | estruturas | motor PRD-009 | Sim |

### Saídas

| Campo | Tipo | Destino |
|-------|------|---------|
| Gráficos SVG/layout | UI | usuário |

## 7. Regras de Negócio

- **RN-01:** Percentual share é calculado sobre **total das linhas e colunas atualmente consideradas pelo pivot**, não sobre universo global da companhia — documentar nos materiais de treinamento; **[DECISÃO PENDENTE: alternativa por total empresa]**.

## 8. Critérios de Aceite

- [ ] Dado share ativo e uma métrica listada como excluída de pct, quando renderizar, então **não** surge coluna % extra dessa métrica.
- [ ] Dada uma única linha de resultado, quando share estiver solicitado visualmente onde controles aparecem, então comportamento atual de **omitir/opressão** deve manter-se.

## 9. Fora do Escopo

Export vetorial standalone do só gráfico sem captura raster (vide PRD-011).

## 10. Dependências

PRD-009; `AnalysisView.tsx`; `AnalysisTable.tsx`; `AnalysisCells.tsx`.

## 11. Métricas de Sucesso

Frequência de uso do toggle share; pesquisas rápidas de clareza em apresentações.

## 12. Aberto / Decisões Pendentes

Definição contábil oficial se participação deve usar total global filtrado só por período ou também por todas as mesmas dims exceto agrupamento.
