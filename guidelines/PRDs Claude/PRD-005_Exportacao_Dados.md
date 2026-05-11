# PRD-005 — Exportação de Dados

**Status:** Draft  
**Versão:** 1.0  
**Módulo de referência no protótipo:** `AnalysisView.tsx` (seção de ações de exportação), dependências `jspdf`, `html-to-image`  
**Revisores:** Engenharia Frontend · Time de Dados · Product

---

## 1. Contexto

Após gerar a análise, o usuário precisa compartilhar ou salvar os resultados. O REPLEI oferece opções de exportação acessíveis via botões de ação no header secundário da tela de resultado.

Os formatos disponíveis no protótipo são: **XLSX** (planilha), **PNG** (imagem da tabela) e **PDF** (documento).

Estas exportações são críticas para analistas que precisam incluir dados em relatórios, apresentações e e-mails.

---

## 2. Usabilidade e Interface

### 2.1 Localização dos botões
- Os botões de exportação ficam no **SecondaryHeader** — área superior da tela de resultado.
- São renderizados via React Portal no elemento `actionsContainer` (montado no SecondaryHeader).
- Só aparecem no step "Resultado" (análise gerada).

### 2.2 Botões disponíveis

| Botão | Ícone | Ação |
|---|---|---|
| XLSX | FileSpreadsheet | Exporta tabela como planilha Excel |
| PNG | ImageIcon | Exporta tabela como imagem PNG |
| PDF | FileText | Exporta tabela como documento PDF |

### 2.3 Feedback durante exportação
- Durante a geração do arquivo, o botão deve exibir estado de loading (spinner ou desabilitado).
- Após conclusão, o download é iniciado automaticamente via link `<a download>`.
- Em caso de erro, exibir toast de notificação.

### 2.4 Nome dos arquivos exportados
- Padrão sugerido: `REPLEI_{MODULO}_{MODO}_{DATA_INICIO}_{DATA_FIM}.{ext}`
- Ex.: `REPLEI_PRODUTO_PADRAO_01-05-2025_31-05-2025.xlsx`

---

## 3. Regras e Cálculos

### 3.1 Exportação PNG
- Usa a biblioteca `html-to-image` para capturar o nó DOM da tabela como imagem.
- A captura inclui todos os dados **visíveis** na tela no momento da exportação.
- Linhas colapsadas (não expandidas) não são incluídas.
- Resolução: usar `pixelRatio` padrão do dispositivo ou fixo (ex.: 2x para alta resolução).
- Referência: `htmlToImage.toPng(element, options)`.

### 3.2 Exportação PDF
- Usa a biblioteca `jsPDF`.
- Fluxo:
  1. Capturar a tabela como imagem via `html-to-image`.
  2. Inserir a imagem no PDF com dimensionamento proporcional ao tamanho A4 ou paisagem.
  3. Adicionar cabeçalho com nome do módulo, modo de análise e período.
- Orientação: paisagem (landscape) para tabelas largas.
- Se a tabela for maior que uma página: paginar verticalmente.

### 3.3 Exportação XLSX
- Serializar os dados da tabela (inclusive nós expandidos) para o formato tabular.
- Estrutura das colunas: igual à tabela na tela (atributo + métricas na ordem do usuário).
- Hierarquia representada por: indentação nas células da coluna de atributo OU colunas separadas por nível.
- Linhas pai com subtotais devem ser incluídas com formatação distinta (negrito ou cor de fundo).
- Cabeçalho: primeira linha com nomes das colunas.
- Referência de biblioteca: `SheetJS (xlsx)` (disponível no projeto via `recharts` não — mas necessário adicionar).

### 3.4 Escopo dos dados exportados
- **PNG/PDF:** capturam o estado visual atual (apenas linhas expandidas visíveis).
- **XLSX:** pode exportar todos os dados da árvore completa (expandidos e colapsados), ou apenas os visíveis — **DECISÃO PENDENTE:** definir com Product qual é o comportamento esperado.

---

## 4. Casos de Uso e Exemplos

**UC-005.1 — Exportar PNG para apresentação**
> Analista gerou resultado e quer colocar a tabela em PowerPoint. Clica em PNG. O sistema captura a tabela visível e baixa o arquivo `REPLEI_PRODUTO_PADRAO_01-05-2025_31-05-2025.png`.

**UC-005.2 — Exportar PDF para relatório**
> Analista quer enviar resultado por e-mail. Clica em PDF. Sistema gera documento A4 paisagem com a tabela e baixa automaticamente.

**UC-005.3 — Exportar XLSX para análise adicional**
> Analista quer fazer análises extras no Excel. Clica em XLSX. O arquivo contém todas as colunas de métricas e atributos, com a hierarquia representada por indentação.

---

## 5. Critérios de Aceite

- [ ] Dado que o usuário está no step Resultado, quando clicar no botão PNG, então um arquivo .png é baixado com o conteúdo visual da tabela visível.
- [ ] Dado que o usuário está no step Resultado, quando clicar no botão PDF, então um arquivo .pdf é baixado em orientação paisagem com cabeçalho informativo e a tabela.
- [ ] Dado que o usuário está no step Resultado, quando clicar no botão XLSX, então um arquivo .xlsx é baixado com a estrutura tabular da análise, incluindo nomes de colunas no cabeçalho.
- [ ] Dado que a tabela tem agrupamento multinível, quando o XLSX for exportado, então a hierarquia é representada de forma clara (indentação ou colunas separadas por nível).
- [ ] Dado que a exportação está em andamento, quando o processo não terminou, então o botão fica desabilitado/loading para evitar dupla exportação.
- [ ] Dado que ocorre um erro durante a exportação, quando o erro acontecer, então uma mensagem de erro é exibida via toast e o botão retorna ao estado normal.

---

## Decisões Pendentes

- [ ] **XLSX — escopo dos dados:** exportar apenas linhas visíveis (expandidas) ou toda a árvore de dados?
- [ ] **PDF — paginação:** como tratar tabelas muito longas que excedem uma página?
- [ ] **Nome do arquivo:** confirmar convenção de nomenclatura com o time.
- [ ] **Biblioteca XLSX:** confirmar se SheetJS será adicionada ao projeto ou se há alternativa preferida pelo time de engenharia.
