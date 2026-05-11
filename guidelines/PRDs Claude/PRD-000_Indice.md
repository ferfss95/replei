# REPLEI — Índice de PRDs

**Projeto:** REPLEI — Ferramenta de Análise de Dados de Varejo  
**Protótipo:** https://replei.vercel.app  
**Repositório:** https://github.com/ferfss95/replei  
**Stack do protótipo:** React + TypeScript + Vite + Tailwind + shadcn/ui + Recharts  
**Versão do documento:** 1.0 — Mai/2026

---

## Mapa de PRDs

| # | PRD | Descrição | Status | Dependências |
|---|---|---|---|---|
| 001 | [Seleção de Módulo e Configuração de Período](PRD-001_Selecao_Modulo_Periodo.md) | Fluxo inicial: escolha do módulo, modo de análise e período (P1/P2, MDSAA, LY) | Draft | — |
| 002 | [Atributos: Seleção, Agrupamento e Exclusão](PRD-002_Atributos_Selecao_Agrupamento_Exclusao.md) | Filtros positivos, hierarquias de agrupamento e filtros negativos | Draft | PRD-001, PRD-006 |
| 003 | [Sidebar de Métricas](PRD-003_Sidebar_Metricas.md) | Painel lateral de seleção de métricas, accordions por grupo, dicionário | Draft | PRD-006 |
| 004 | [Tabela de Resultado e Modos de Análise](PRD-004_Tabela_Resultado_Modos_Analise.md) | Tabela com drill-down, ordenação, modos Padrão/Evolução/Comparativo/Hora a Hora | Draft | PRD-001, PRD-002, PRD-003 |
| 005 | [Exportação de Dados](PRD-005_Exportacao_Dados.md) | Exportação em XLSX, PNG e PDF | Draft | PRD-004 |
| 006 | [Módulos de Análise](PRD-006_Modulos_Analise.md) | Especificação de PRODUTO, LOJA, EXTRAVIOS e INDICADORES | Draft | — |

---

## Ordem de desenvolvimento recomendada

```
PRD-006 (Módulos)
  └─ PRD-001 (Período + Módulo)
       └─ PRD-002 (Atributos)
       └─ PRD-003 (Métricas)
            └─ PRD-004 (Tabela de Resultado)
                 └─ PRD-005 (Exportação)
```

---

## Decisões pendentes (consolidado)

| PRD | Decisão |
|---|---|
| PRD-004 | Sinalização de variação negativa para métricas de custo (invertida?) |
| PRD-005 | XLSX: exportar apenas linhas visíveis ou toda a árvore? |
| PRD-005 | PDF: estratégia de paginação para tabelas longas |
| PRD-005 | Nome padrão dos arquivos exportados |
| PRD-005 | Biblioteca XLSX a usar |
| PRD-006 | Métricas específicas de Extravios |
| PRD-006 | Lista definitiva de KPIs do módulo INDICADORES |
| PRD-006 | Fatores reais de escala de meta por atributo (módulo LOJA) |
| PRD-006 | Previsão de novos módulos |

---

## Glossário rápido

| Termo | Definição |
|---|---|
| P1 | Período principal de análise |
| P2 | Período comparativo (modo Comparativo) |
| MDSAA | Mesmo Dia Semana Ano Anterior |
| LY | Last Year (mesmo período do ano anterior) |
| ROB | Receita de venda na régua (Gross Revenue) |
| DEP | Dias de Estoque (em quantidade) |
| DEF | Dias de Estoque (em valor financeiro) |
| SSS | Same Store Sales (crescimento em base comparável) |
| CMV | Custo das Mercadorias Vendidas |
| LB | Lucro Bruto |
| MB | Margem Bruta |
| ML | Margem Líquida |
| D-1 | Ontem (dia anterior ao corrente) |
| Snapshot de estoque | Posição de estoque em data específica (não soma do período) |
| Drill-down | Expansão de linha pai para exibir filhos hierárquicos |
| Step | Passo do fluxo wizard (Seleção, Agrupamento, Exclusão, Resultado) |
