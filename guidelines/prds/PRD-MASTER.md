# REPLEI — Documento mestre de PRDs

Este arquivo consolida os 13 Product Requirement Documents.
Para edição pontual prefira os arquivos na pasta `guidelines/prds/` (um PRD por arquivo).

## Índice

| ID | Arquivo individual | Dependências principais |
|----|----------------------|---------------------------|
| PRD-001 | PRD-001-plataforma-fundacao-e-governanca.md | — |
| PRD-002 | PRD-002-catalogo-modulos-e-navegacao.md | PRD-001 |
| PRD-003 | PRD-003-wizard-analitico-quatro-etapas.md | PRD-002 |
| PRD-004 | PRD-004-dimensoes-localizacao.md | PRD-003 |
| PRD-005 | PRD-005-dimensoes-dominio-produto.md | PRD-003 |
| PRD-006 | PRD-006-catalogo-metricas-menu-lateral.md | PRD-004, PRD-005 |
| PRD-007 | PRD-007-definicao-temporal-comparativos.md | PRD-003 |
| PRD-008 | PRD-008-modos-de-analise.md | PRD-007 |
| PRD-009 | PRD-009-motor-resultados-tabulares.md | PRD-004–008, PRD-006 |
| PRD-010 | PRD-010-visualizacao-grafica-e-share.md | PRD-009 |
| PRD-011 | PRD-011-exportacao-resultados-pdf.md | PRD-009 |
| PRD-012 | PRD-012-modulo-indicadores.md | PRD-004–006 |
| PRD-013 | PRD-013-modulo-extravios.md | PRD-002, PRD-006 |

---



--------------------------------------------------------------------------------

# PRD-001: Fundação da plataforma REPLEI (dados únicos, NFRs, segurança)

## 1. Contexto e Problema

> Por que essa funcionalidade existe? Qual dor resolve?

A companhia precisa abandonar análises **fragmentadas** (planilhas, extratos locais, definições divergentes de métricas) por um ecossistema **centralizado** onde C-Level até loja use a **mesma semântica** e a **mesma fonte**.

## 2. Objetivo

> O que queremos alcançar com isso? (1–3 frases, mensuráveis se possível)

Definir requisitos transversais (performance, segurança, disponibilidade, auditoria e governança de dados) para que o REPLEI se torne **fonte de verdade** confiável. Meta de disponibilidade/erro: **[DECISÃO PENDENTE: SLA de disponibilidade e erro por trimestre]**.

## 3. Usuários Impactados

> Quais perfis usam isso? (Heavy / Power / Light user, área)

- **Heavy users**: Planejamento, Compras, BI (consumo intensivo).
- **Power users**: Gestores regionais / multi-loja.
- **Light users**: Equipe de loja (filtros rápidos, KPIs definidos).

## 4. Requisitos Funcionais

> O que o sistema DEVE fazer.

- **RF-01:** O sistema deve operar em **ambientes segregados**: desenvolvimento, homologação e produção, com dados de produção **não** replicados em dev sem anonimização.
- **RF-02:** O sistema deve suportar **controle de acesso por perfil** (visualização vs exportação) — **[DECISÃO PENDENTE: matriz RACI por módulo]**.
- **RF-03:** O sistema deve **registrar auditoria** mínima: usuário, módulo, intervalo solicitado e exportações — **[DECISÃO PENDENTE: retention]**.
- **RF-04:** O sistema deve publicar um **contrato semântico** (dicionário) de métricas e dimensões versionado junto aos releases.

## 5. Requisitos Não Funcionais

> Performance, segurança, escala, SLA

- **RNF-01:** Para consultas analíticas p95, tempo de **renderização servidor + transferência + render UI** deve ser inferior a **[DECISÃO PENDENTE: X s para Y linhas/colunas]** em produção.
- **RNF-02:** Dados sensíveis (PII de vendedor, se houver) devem obedecer **LGPD**: mascaramento e base legal — **[DECISÃO PENDENTE]**.
- **RNF-03:** Todas as comunicações cliente-servidor em produção devem usar **HTTPS** e tokens com **rotacionamento** — **[DECISÃO PENDENTE]**.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? | Observações |
|-------|------|--------|--------------|-------------|
| Políticas de segurança | texto/política | Segurança da Informação | Sim | Baseline |
| SLA corporativo | numérico | Operações | Não até definido | Para RNF |

### Saídas

| Campo | Tipo | Destino | Formato | Observações |
|-------|------|---------|---------|-------------|
| Matriz ambientes | documento | Engenharia | Markdown/Confluence | |
| Log de auditoria | evento | SIEM/S3 | JSON | **[DECISÃO PENDENTE]** |

## 7. Regras de Negócio

> Lógicas, validações, exceções e edge cases

- **RN-01:** Nenhum ambiente não-prod deve usar credenciais de produção persistidas em repositório.
- **RN-02:** Qualquer nova métrica deve ter **nome de negócio**, **definição** e **granularidade mínima** aprovados antes do deploy.

## 8. Critérios de Aceite

> Definição de "pronto".

- [ ] Dado usuário não autenticado, quando acessar a aplicação, então deve ser bloqueado ou redirecionado — **[DECISÃO PENDENTE: fluxo de auth]**.
- [ ] Dado release de novo dicionário, quando usuário consultar métrica, então o texto exibido deve coincidir com a versão do contrato datado — **[DECISÃO PENDENTE]**.

## 9. Fora do Escopo

Implementação técnica de cada módulo analítico isoladamente; design de marca.

## 10. Dependências

Segurança corporativa; IdP (Azure AD/Okta); Data Platform — **[DECISÃO PENDENTE]**.

## 11. Métricas de Sucesso

Redução de incidentes por definições divergentes; tempo médio para responder “qual é o número oficial de X?” — **[baseline a definir]**.

## 12. Aberto / Decisões Pendentes

Identity provider; SLAs numéricos; política de retenção de logs; nível de PII nos nomes de vendedores.


--------------------------------------------------------------------------------

# PRD-002: Catálogo de módulos analíticos e navegação

## 1. Contexto e Problema

> Por que essa funcionalidade existe? Qual dor resolve?

Diferentes questões de negócio exigem **lentes** diferentes (mix de produto, performance de pontos de venda, KPIs de loja). Sem módulos explícitos, a linguagem mistura dimensões incompatíveis.

## 2. Objetivo

> O que queremos alcançar com isso?

Garantir que o usuário escolha **um módulo** por jornada analítica, com **métricas e dimensões coerentes** com aquela lente e **isolamento de estado** ao trocar de módulo.

## 3. Usuários Impactados

> Quais perfis usam isso?

Todos os perfis; troca mais frequente em **Power users**.

## 4. Requisitos Funcionais

- **RF-01:** O sistema deve exibir exclusivamente os módulos **PRODUTO**, **LOJA**, **EXTRAVIOS** e **INDICADORES** no seletor, com rótulos oficiais.
- **RF-02:** Ao **alterar módulo**, o sistema deve **zerar** `selections`, `exclusions`, `grouping` e retornar o passo a **Seleção**.
- **RF-03:** Ao alterar módulo, o sistema deve **filtrar** `selectedMetrics` para ids válidos do módulo destino e resetar modo de análise para **padrão** e demais estados associados conforme política atual da aplicação.
- **RF-04:** O sistema deve aplicar identidade visual (cores primárias/destaque) específicas do módulo (`moduleColors`).
- **RF-05:** Para **EXTRAVIOS**, o sistema deve usar configuração **derivada do PRODUTO** sem métricas de exposição nem PPA/Match de preço — **comportamento atual do protótipo** (`produtoSemExposicao` em `src/app/modules/index.ts`).

## 5. Requisitos Não Funcionais

- **RNF-01:** Troca de módulo deve completar ciclo visual de transição em ≤ **2 s** no cliente — **[DECISÃO PENDENTE: opção de reduzir animação por acessibilidade]**.
- **RNF-02:** Lista de módulos deve poder ser atualizada por **release** sem alteração de URL.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? | Observações |
|-------|------|-------|--------------|-------------|
| `MODULE_REGISTRY` | config | codebase / backend futuro | Sim | `src/app/modules/index.ts` |

### Saídas

| Campo | Tipo | Destino | Formato | Observações |
|-------|------|---------|---------|-------------|
| `currentModuleConfig` | objeto | hooks/UI | TypeScript | Derivado do registro |

## 7. Regras de Negócio

- **RN-01:** Estado de um módulo **nunca** deve contaminar outro — **comportamento em `App.tsx`**.
- **RN-02:** Métricas inexistentes no módulo alvo devem ser removidas da seleção (**não** erro bloqueante).

## 8. Critérios de Aceite

- [ ] Dado usuário na etapa Agrupamento com filtros em PRODUTO, quando mudar para LOJA, então todos os filtros e agrupamentos devem ficar **vazios**.
- [ ] Dado EXTRAVIOS selecionado, quando abrir métricas, então não devem aparecer IDs `exp_*`, `ppa`, `match_preco`.

## 9. Fora do Escopo

Permitir dois módulos na mesma visão/tabulação (mixed lens).

## 10. Dependências

PRD-001; interface `ModuleConfig` (`src/app/modules/types.ts`).

## 11. Métricas de Sucesso

Redução de tickets de suporte por “filtro errado após mudar contexto”; NPS de clareza de módulo — **[DECISÃO PENDENTE]**.

## 12. Aberto / Decisões Pendentes

Comportamento futuro quando existir **persistência de jornadas** por URL ou bookmark.


--------------------------------------------------------------------------------

# PRD-003: Wizard analítico (Seleção · Agrupamento · Exclusão · Resultado)

## 1. Contexto e Problema

Análises ad-hoc falham quando o usuário pula **definições** (filtro, agrupamento, exclusões). O wizard obriga uma cadência repetível da cultura analítica.

## 2. Objetivo

Padronizar a jornada em **quatro etapas** com **gates** claros até o resultado, garantindo navegação pelo header/stepper quando permitido pelo estado válido.

## 3. Usuários Impactados

Todos; **Light users** especialmente na seleção e no agrupamento.

## 4. Requisitos Funcionais

- **RF-01:** As etapas devem existir nesta ordem: **Seleção (1)** → **Agrupamento (2)** → **Exclusão (3)** → **Resultado (4)** — `STEPS` em `src/app/constants.ts`.
- **RF-02:** O sistema deve limitar níveis de agrupamento a **`MAX_GROUPING_LEVELS = 5`**.
- **RF-03:** O cabeçalho deve impedir (**locked**) avanços/voltas ilegais conforme pré-condições (`isSelectionConfigured`, `isGroupingConfigured`, `isExclusionConfigured`, `isComparativoPeriodDefined`).
- **RF-04:** Para modo **Comparativo**, o sistema só deve liberir resultado quando **dois períodos** estão definidos — estado `isComparativoPeriodDefined`.
- **RF-05:** Ações **Limpar** e **Sair** devem estar disponíveis no header (`onClear` / `onExit`) com comportamento documentado — **[DECISÃO PENDENTE: escopo exato do clear]**.

## 5. Requisitos Não Funcionais

- **RNF-01:** Recalcular opções de atributos após seleções deve manter latência perceptível aceitável — **[DECISÃO PENDENTE: budget ms no cliente]**.
- **RNF-02:** A lógica de filtros em **`useAttributeFilters`** está marcada como **homologada** no código — alterações só após QA formal ou revisão de produto.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? | Observações |
|-------|------|-------|--------------|-------------|
| `currentStep` | enum `Step` | Estado React | Sim | |
| `selections`, `grouping`, `exclusions` | mapas / vetores | Estado React | Variável por etapa | |

### Saídas

| Campo | Tipo | Destino | Formato | Observações |
|-------|------|---------|---------|-------------|
| Tela atual | UI | usuário | React | SelectionView → AttributeGrid → AnalysisView |

## 7. Regras de Negócio

- **RN-01:** Um atributo com **filtro inclusivo vazio** implica ausência de restrição naquele eixo, salvo onde regra de domínio (Produto/Localização) restrinja implicitamente opções disponíveis.
- **RN-02:** Agrupamento define a granularidade das **linhas** da primeira coluna no resultado.

## 8. Critérios de Aceite

- [ ] Dado modo comparativo sem Período 2 válido, quando usuário tentar ir ao resultado, então a navegação permanece bloqueada até períodos válidos (**paridade com código**).
- [ ] Dado cinco atributos no agrupamento, quando usuário tentar o sexto, então a interface deve impedir (**UI + estado**).

## 9. Fora do Escopo

Salvamento server-side de favoritos por usuário (roadmap possível).

## 10. Dependências

PRD-002; `src/app/App.tsx`; `SelectionView.tsx`; `AttributeGrid.tsx`; `AnalysisView.tsx`; `AppHeader.tsx`.

## 11. Métricas de Sucesso

Percentual de jornadas concluídas até Resultado; abandono por etapa.

## 12. Aberto / Decisões Pendentes

Se **Limpar** também zera intervalo temporal e métricas selecionadas — hoje não totalmente especificado apenas pelo nome do botão.


--------------------------------------------------------------------------------

# PRD-004: Dimensões de Localização (rede até origem conforme contexto)

## 1. Contexto e Problema

Decisões de loja e compras exigem recortes hierárquicos (por exemplo rede → loja ou estado → cidade) com **coerência** entre níveis físicos e canais.

## 2. Objetivo

Disponibilizar **atributos de localização** com listas **derivadas** de cadastros (ou mocks até integração) e **filtragem cruzada** conhecida, unificando a linguagem de pontos físicos e canais/logística.

## 3. Usuários Impactados

Planejamento, operações regionais; lojas nos módulos **LOJA** e **INDICADORES** (visão territorial).

## 4. Requisitos Funcionais

- **RF-01:** Na visão **PRODUTO**, o sistema deve usar `LOCATION_ATTRIBUTES` de `constants.ts`, **incluindo** CANAL e ORIGEM.
- **RF-02:** Nos módulos **LOJA** e **INDICADORES**, o primeiro bloco deve ser **`LOCALIZAÇÃO`** com atributos: REDE, TIPO, ESTADO, REGIONAL, CIDADE, LOJA, SETOR e VENDEDOR — **paridade com** `src/app/modules/loja.ts` e `indicadores.ts`.
- **RF-03:** O sistema deve ordenar/normalizar lista de lojas conforme **`orderStoresByNetwork`** onde aplicável em `referenceData`.
- **RF-04:** O sistema deve filtrar cidade/regional/loja usando funções `filter*` quando seleções pai restringirem grafos válidos (`referenceData` + `useAttributeFilters`).
- **RF-05:** O atributo **LOCALIZAÇÃO** (CD/status) deve exibir **agrupamentos visuais** no dropdown usando `LOCALIZACAO_OPTION_GROUPS` e tratamento especial em `AttributeCard`.

## 5. Requisitos Não Funcionais

- **RNF-01:** Para catálogo muito grande (milhares de lojas), listas devem vir a ser paginadas ou virtualizadas — **[DECISÃO PENDENTE: hoje lista completa carregada no cliente]**.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? | Observações |
|-------|------|-------|--------------|-------------|
| Listas mestre (redes, lojas, cidades, regionais…) | array de string | `referenceData.ts` → futuro backend | Sim | |

### Saídas

| Campo | Tipo | Destino | Formato | Observações |
|-------|------|---------|---------|-------------|
| `selections[attrId]` para ids de localização | string[] | wizard / resultado | Estado | |

## 7. Regras de Negócio

- **RN-01:** Se a interseção de filtros pai-filho resultar conjunto **vazio**, o comportamento esperado deve incluir **feedback ao usuário** — **[DECISÃO PENDENTE: UX e mensagens]**.
- **RN-02:** Formato de cidade **"Nome - UF"** no PRODUTO deve manter compatibilidade com o parsing em `useAttributeFilters`.

## 8. Critérios de Aceite

- [ ] Dados dois estados marcados na LOJA, quando o usuário abrir CIDADE, então apenas cidades pertencentes a um dos estados selecionados aparecem disponíveis.
- [ ] Dado PRODUTO com LOCALIZAÇÃO aberta, quando o usuário buscar dentro do grupo CD/status, então apenas opções compatíveis com o filtro de busca aparecem, mantendo agrupamento visual.

## 9. Fora do Escopo

Cadastro self-service de nova loja dentro do próprio REPLEI (fonte mestre externa ao app).

## 10. Dependências

PRD-003; `useAttributeFilters.ts`; `referenceData.ts`; `constants.ts`; `AttributeCard.tsx`.

## 11. Métricas de Sucesso

Redução de consultas com combinações geográficas impossíveis; feedback qualitativo de regional/planejamento.

## 12. Aberto / Decisões Pendentes

Sincronização tempo real com ERP vs snapshot diário; timezone e “loja válida na data”.


--------------------------------------------------------------------------------

# PRD-005: Dimensões do domínio Produto

## 1. Contexto e Problema

Planejamento e compras pensam em **hierarquia de sortimento**. Sem estrutura estável SALA → … → SABOR e atributos comerciais (marca, franquia, modelo), decisores utilizam nomenclaturas divergentes.

## 2. Objetivo

Unificar hierarquia e opções derivadas (**categoria ↔ modalidade**, **grupo ↔ subgrupo**, **sala ↔ mesa**, coerência Alimento / Alimentos) e garantir lista canônica de **FRANQUIA** logo após **MARCA**.

## 3. Usuários Impactados

Heavy (compras, planejamento); Power (category managers).

## 4. Requisitos Funcionais

- **RF-01:** O sistema deve declarar **`PRODUTO_DOMAIN_ATTRIBUTE_DEFS`** na seguinte ordem de ids: **sala, mesa, categoria, modalidade, grupo, subgrupo, marca, franquia, modelo, genero, faixa_etaria, cor, tamanho, sabor** — **`src/app/modules/produto.ts`**.
- **RF-02:** Opções **FRANQUIA** devem ser exatamente, nesta ordem: Pegasus, Vomero, Metcon, Revolution, Downshifter, Airmax, Dunk, T90, Airforce — constante **`FRANQUIA_OPTIONS`** em `referenceData.ts`.
- **RF-03:** O dropdown de **MARCA** deve exibir dois grupos: **Marcas Próprias e Licenciadas** e **Demais** (`MARCA_OPTION_GROUPS` em `referenceData.ts` + comportamento em `AttributeCard.tsx`).
- **RF-04:** `getDomainAttributeOptions` deve aplicar **`applyGroupCategoryCoherence`** quando categoria/subgrupo e grupo envolvem **Alimento** / **Alimentos** — comportamento atual em `produto.ts`.
- **RF-05:** **mesa** deve restringir-se por **primeira letra** do código alinhado à sala selecionada em contextos onde a regra sala↔mesa se aplica (**`filterMesasBySalasOptions`**, **`MESA_OPTIONS`**).

## 5. Requisitos Não Funcionais

- **RNF-01:** Resolução de listas deve ser **determinística**: mesmos `selections` → mesma lista ordenada.
- **RNF-02:** Funções **`modeloDescriptionAfterBrand`** e **`formatModeloListEntry`** preservam comportamento até definição de integração real — **[DECISÃO PENDENTE: se texto de modelo deve incorporar nome de FRANQUIA na heurística]**.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? | Observações |
|-------|------|-------|--------------|-------------|
| `selections` (map attrId → valores) | Record | wizard | Opcional por atributo | |

### Saídas

| Campo | Tipo | Destino | Formato | Observações |
|-------|------|---------|---------|-------------|
| Lista efetiva por atributo | string[] | cartões AttributeCard | ordenada | Via `getDomainAttributeOptions` |

## 7. Regras de Negócio

- **RN-01:** Quando apenas o domínio alimentício se aplica, apenas opções coerentes de categoria/grupo ficam disponíveis (regras atuais de `applyGroupCategoryCoherence`).
- **RN-02:** Para **mesa** vs **sala**, se nenhuma sala estiver selecionada no filtro de análise, o conjunto de mesas permite todas as mesas válidas (**paridade** com `getFilteredGroupOptions` em `produto.ts`).

## 8. Critérios de Aceite

- [ ] Dado o cartão MARCA em PRODUTO, quando abrir a lista, então dois blocos com rótulos oficiais aparecem e as opções batem `MARCA_OPTION_GROUPS`.
- [ ] Dado o cartão FRANQUIA, quando abrir a lista, então aparecem exatamente as nove opções definidas em `FRANQUIA_OPTIONS` nesta ordem.
- [ ] Dado apenas grupo Alimentos selecionado sem não-alimentício, quando abrir CATEGORIA, então **Alimento** é mantido disponível segundo regra vigente.

## 9. Fora do Escopo

MDM automatizado por temporada para lançamento de SKU; precificação.

## 10. Dependências

PRD-003; PRD-004 (LOJA/INDICADORES reusam `PRODUTO_DOMAIN_ATTRIBUTE_DEFS`); `produto.ts`; `referenceData.ts`; `AttributeCard.tsx`.

## 11. Métricas de Sucesso

Uso combinado MARCA + FRANQUIA em análises; redução de tickets de definição de sortimento inconsistente.

## 12. Aberto / Decisões Pendentes

Filtragem cruzada **MARCA × FRANQUIA** (hoje a lista FRANQUIA é fixa independente da marca).


--------------------------------------------------------------------------------

# PRD-006: Catálogo de métricas e menu lateral

## 1. Contexto e Problema

Métricas sem definição comum causam retrabalho e interpretações diferentes da “mesma” palavra. A barra lateral precisa agrupar indicadores segundo o modelo mental de trabalho (venda e estoque, planejamento, outros, exposição no PRODUTO).

## 2. Objetivo

Permitir **multi-seleção** de métricas com ícones e **tooltips** documentados; manter **`metricDisplayOrder` canônico** no módulo e refletir na UI a **ordem de clique** do usuário para colunas do resultado (**comportamento atual**).

## 3. Usuários Impactados

Todos; heavy users exploram todas as métricas do módulo.

## 4. Requisitos Funcionais

- **RF-01:** O sistema deve listar apenas métricas definidas em `moduleConfig.metrics` com ícone e `tooltip` opcional.
- **RF-02:** No **PRODUTO**, estado inicial dos accordions do sidebar deve alinhar a **`getMetricsSidebarDefaultsForModule`** em `App.tsx` (accordions conforme código: Venda/Estoque vs exposição).
- **RF-03:** Métricas de **exposição** (`EXPOSICAO_PRODUTO_METRIC_IDS`), **PPA** e **Match de Preço** devem aparecer apenas nas seções previstas (**`metricSidebarExtraSections`**, exclusões **`metricsSidebarExcludeFromVendaEstoque`**, **`metricsSidebarOutrasAfterPlanning`**).
- **RF-04:** Ao trocar módulo, a seleção de métricas deve ser filtrada para ids válidos (ver PRD-002).
- **RF-05:** O sistema deve oferecer acesso ao **dicionário** de métricas via `MetricsDictionaryDialog` e dados em **`src/app/data/metricDictionary.ts`**, mantendo texto alinhado ao negócio — **[DECISÃO PENDENTE: revisão texto por steward de métrica]**.

## 5. Requisitos Não Funcionais

- **RNF-01:** **[DECISÃO PENDENTE]** Limite máximo de métricas selecionadas simultaneamente ou estratégia de degradação de performance quando muitas colunas.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? | Observações |
|-------|------|-------|--------------|-------------|
| `selectedMetrics` | string[] | Estado App | Para resultado: ao menos uma se política assim definida | **[DECISÃO PENDENTE]** |

### Saídas

| Campo | Tipo | Destino | Formato | Observações |
|-------|------|---------|---------|-------------|
| Ordem efetiva de colunas métricas | string[] | AnalysisTable/gráficos | igual ordem de seleção no menu | comportamento atual |

## 7. Regras de Negócio

- **RN-01:** Métricas percentuais com regras de agregação especiais continuam usando **`METRIC_CONFIG`** / **`isPercentRatioAggregatedAverage`** — comportamento atual deve ser preservado ao migrar cálculos para servidor.
- **RN-02:** Métricas de planejamento usam tratamento visual de fundo conforme **`getPlanningBg`** (`dataGenerators.ts`).

## 8. Critérios de Aceite

- [ ] Dado usuário que clica primeiro em `qtd_estoque` e depois em `venda`, quando resultado exibir colunas, então a primeira coluna de métrica corresponde a `qtd_estoque`.
- [ ] Dado módulo EXTRAVIOS, quando abrir métricas, então não existe seção extra “Exposição de produtos” nem métricas `exp_*`.

## 9. Fora do Escopo

Editor self-service pelo usuário final para criar métricas calculadas novas dentro do cliente.

## 10. Dependências

PRD-004; PRD-005; `MetricsSidebar.tsx`; `produto.ts`; `referenceData.ts` (`METRIC_CONFIG`); PRD-002.

## 11. Métricas de Sucesso

Uso dos tooltips e do diálogo do dicionário; redução de erros ao comparar métricas diferentes com rótulos parecidos.

## 12. Aberto / Decisões Pendentes

Versão oficial PT-BR de cada definitional tooltip por métrica; owner de stewardship por métrica.


--------------------------------------------------------------------------------

# PRD-007: Definição temporal, comparativos, MDSAA e LY

## 1. Contexto e Problema

Comparativos deixam de ser confiáveis quando as **bases de calendário** divergem — por exemplo segundo-feira atual vs segunda do ano anterior, ou mesmo intervalo civil LY vs outro intervalo não espelhado.

## 2. Objetivo

Permitir Diário/Mensal/Anual e variantes (**meses, anos específicos, dias específicos, semanal**) com **dois períodos** no comparativo e toggles **MDSAA** (**mesmo dia da semana do ano anterior**) e **LY** (**mesmo intervalo civil no ano anterior**), mantendo **paridade** com `useDateRange`, `MdsaaToggle` e `LyToggle`.

## 3. Usuários Impactados

Todos; maior impacto em planejamento e regional em análises **Comparativo** e **mensal**.

## 4. Requisitos Funcionais

- **RF-01:** O sistema deve suportar granularidades e sub-tipos definidos pelo hook **`useDateRange`** (incluindo `periodType`, `dailySubType`, períodos compostos mensais/anuais/semanais) — **enum completo conforme código** **[DECISÃO PENDENTE: documentação formal em anexo]**.
- **RF-02:** No modo comparativo, o sistema deve manter dois conjuntos de parâmetros **simétricos** (ranges P1/P2, meses, anos, dias específicos, semanal e weekdays associados onde aplicável).
- **RF-03:** Toggle **MDSAA** deve refletir se a linha base de “ano anterior” considera **alinhamento pelo dia da semana**, conforme textos dos tooltips em **`MdsaaToggle.tsx`**.
- **RF-04:** Toggle **LY** deve preencher/espelhar o **Período 2** com as mesmas datas do **Período 1** deslocadas para o ano civil anterior, conforme **`LyToggle.tsx`**.

## 5. Requisitos Não Funcionais

- **RNF-01:** Parsing e exibição de datas deve usar fuso oficial — **[DECISÃO PENDENTE: exemplo America/São_Paulo]**.
- **RNF-02:** Quando backend existir, geração de lista de meses (equivalente a `MONTHS_OPTIONS`) deve respeitar “data atual de servidor”, não apenas relógio do cliente.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? | Observações |
|-------|------|-------|--------------|-------------|
| `mdsaaActive` | boolean | usuário | Não | |
| `lyActive` | boolean | usuário | Não | |
| Escolhas de período | vários | `SelectionView` / date pickers | Sim para gerar resultado | |

### Saídas

| Campo | Tipo | Destino | Formato | Observações |
|-------|------|---------|---------|-------------|
| Vetor de períodos efetivos | string[] ou equivalente | `useAnalysisData` | Array | Derivado |

## 7. Regras de Negócio

- **RN-01:** Se **MDSAA** e **LY** estiverem ativos ao mesmo tempo e sua semântica conflitar, **precedência** e mensagem devem estar definidas — **[DECISÃO PENDENTE]**.
- **RN-02:** Modo comparativo exige períodos válidos em ambos os lados antes de liberar resultado (gateway PRD-003).

## 8. Critérios de Aceite

- [ ] Dado LY ativo e Período 1 válido, quando acionar comportamento do toggle LY, então Período 2 reflete mesmo intervalo no ano anterior com **casos ano bissexto** cobertos por testes — **[DECISÃO PENDENTE: casos teste automatizados]**.
- [ ] Dado modo comparativo, quando apenas um período estiver válido, então passo resultado permanece travado até correção (**paridade atual**).

## 9. Fora do Escopo

Calendário de feriados municipais ou aberturas excepcionais de loja integrado ao motor.

## 10. Dependências

PRD-003; `useDateRange.ts`; `SelectionView.tsx`; `SecondaryHeader.tsx` **[se aplicável]**; gates em `AppHeader`.

## 11. Métricas de Sucesso

Redução de divergências “LY errado”; incidentes auditados contra planilhas de controle manual.

## 12. Aberto / Decisões Pendentes

Conflitos MDSAA × LY; calendário fiscal da companhia vs civil; semanaISO vs semana comercial.


--------------------------------------------------------------------------------

# PRD-008: Modos de análise (Padrão, Evolução, Comparativo, Hora a hora)

## 1. Contexto e Problema

Cada tipo de decisão usa uma forma mental diferente de ver dados: **snapshot** atual, **tendência** em janela, **contraste entre dois períodos** ou comportamento **intradia**.

## 2. Objetivo

Suportar `AnalysisMode` tipado como **`'padrao' | 'evolucao' | 'comparativo' | 'horaahora'`** (`src/app/types/wizard.ts`) com comportamentos específicos: por exemplo **`isTimeDrilldownEnabled`** somente quando `analysisMode === 'evolucao'` em `App.tsx`.

## 3. Usuários Impactados

Todos; operações de loja (hora a hora); estratégia/planejamento (evolução e comparativo).

## 4. Requisitos Funcionais

- **RF-01:** Modo **Evolução** deve habilitar **drilldown temporal** onde o código define `isTimeDrilldownEnabled === true`.
- **RF-02:** Título exibível da análise deve usar chaves em **`analysisTitles`** do `moduleConfig`, por modo onde mapeado.
- **RF-03:** Modo **Comparativo** obedece às gates de dois períodos (PRD-007 / PRD-003).
- **RF-04:** Modo **Hora a hora** deve usar o eixo **`HORA_A_HORA_HOURS`** e o gerador **`generateHourlyValue`** em `dataGenerators.ts` onde integrado ao pipeline de resultado.

## 5. Requisitos Não Funcionais

- **RNF-01:** Alternar modo não deve deixar estado inconsistente de período — **[DECISÃO PENDENTE: se reset adicional de `AveragePeriodType` é necessário além da troca de módulo]**.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? | Observações |
|-------|------|-------|--------------|-------------|
| `analysisMode` | AnalysisMode | Estado App (`App.tsx`) | Sim após primeira escolha | Default conforme navegação |

### Saídas

| Campo | Tipo | Destino | Formato | Observações |
|-------|------|---------|---------|-------------|
| Modelo colunas período/granularidade | pivot | AnalysisTable/Recharts | Estrutura derivada | |

## 7. Regras de Negócio

- **RN-01:** Métricas excluídas de `% share` e variações com cor especial seguem conjuntos definidos em `AnalysisView` / `AnalysisTable` (**preservar** ao evoluir lógica).

## 8. Critérios de Aceite

- [ ] Dado modo **hora a hora**, quando resultado carregar eixo temporal, então buckets **00h…23h** aparecem na ordem de `constants.ts`.
- [ ] Dado modo **evolução**, quando ativo, então recurso condicionado por `isTimeDrilldownEnabled` fica disponível conforme código atual.

## 9. Fora do Escopo

Previsões (forecast) automáticas não fundamentadas em modelo aprovado.

## 10. Dependências

PRD-007; `AnalysisSelector` / componentes de escolha de modo; `wizard.ts`; `constants.ts`.

## 11. Métricas de Sucesso

Distribuição de uso por modo em telemetria; qualidade revisada de relatórios de tendência vs snapshot.

## 12. Aberto / Decisões Pendentes

Naming PT-BR unificado oficial para relatórios exportados e comunicação executiva.


--------------------------------------------------------------------------------

# PRD-009: Motor de resultados tabulares (árvore, pivô temporal, filtros)

## 1. Contexto e Problema

Grandes volumes de dados de venda devem aparecer sintetizados em **linhas hierárquicas** e **colunas métrica × período**, sem inconsistência entre o que usuário filtrou e o que aparece no resultado.

## 2. Objetivo

Especificar o motor que **`useAnalysisData`** (e componentes correlatos) aplicam sobre **`selections` + `grouping` + `exclusions`** + períodos + métricas selecionadas, incluindo ordenação (**`sortAnalysisRowTree`**), filtros (**`applyParentContextToOptions`**) e **`METRIC_CONFIG`** para formato e valores base sintéticos até backend real.

## 3. Usuários Impactados

Todos no passo Resultado.

## 4. Requisitos Funcionais

- **RF-01:** A **primeira coluna** deve representar a **árvore de atributos** segundo agrupamentos e filtros conforme contrato atual de `useAnalysisData` (**comentários de não-mutabilidade** da árvore preservados salvo refactor aprovado).
- **RF-02:** Valores marcados como **exclusões** devem ser removidos da população de linhas e da agregação exibida, sem quebrar totais relativos aos critérios ativos (**paridade comportamental**).
- **RF-03:** `getFilteredGroupOptions` de domínio PRODUTO deve ser reutilizada em LOJA/INDICADORES para attrs de produto via delegação atual a `produtoModule`.
- **RF-04:** Cada métrica deve ler **`METRIC_CONFIG[metricId]`** para formato (`currency`, `percent`, etc.) quando existente.
- **RF-05:** Ordenação de linhas deve respeitar **`ANALYSIS_ATTRIBUTE_SORT_KEY`** e comparadores definidos em **`sortAnalysisRowTree.ts`**.

## 5. Requisitos Não Funcionais

- **RNF-01:** Limite máximo de linhas no cliente — **[DECISÃO PENDENTE]**; migração servidor exige paginação e cursores estáveis por ordenação escolhida.
- **RNF-02:** Seeds/hashes devem gerar mocks **determinísticos** para QA (`hashString`, etc.), até substituição por fatos reais.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? |
|-------|------|-------|--------------|
| `selectedMetrics`, `grouping`, `periods`, `selections`, `exclusions`, `periodType`, ranges | vários | wizard + hooks | Variável |

### Saídas

| Campo | Tipo | Destino | Formato |
|-------|------|---------|---------|
| Linhas tipadas para tabela/gráfico | objeto[] | AnalysisTable/Recharts | props memoizados |

## 7. Regras de Negócio

- **RN-01:** Quando dois atributos geram conjunto opcional sem interseção, o sistema deve sinalizar de forma tratável — **[DECISÃO PENDENTE: empty state obrigatório]**.
- **RN-02:** Rollup de métricas percentuais/medias deve seguir **`isPercentRatioAggregatedAverage`** até charter formal de BI.

## 8. Critérios de Aceite

- [ ] Dado mesmo conjunto de filtros/agrupamentos e período fixo mock, quando recarregar a página, então primeira coluna mantém ordenação esperada segundo regra atual.
- [ ] Dada exclusão de um valor específico, quando resultado renderizar, então esse valor não aparece em linha nem contribui aos subtotais exibidos.

## 9. Fora do Escopo

Cubo OLAP servidor ad hoc estilo ferramentas desktop de BI próprias do usuário.

## 10. Dependências

PRDs 004–008; PRD-006; `useAnalysisData.ts`; `METRIC_CONFIG`; `AnalysisTable.tsx`.

## 11. Métricas de Sucesso

Time-to-first-pixel do resultado sob volume real; erro de rollup detectado vs auditorias.

## 12. Aberto / Decisões Pendentes

Políticas formais agregação para cada família de métrica quando fatos chegarem granularidade diferente da exibida.


--------------------------------------------------------------------------------

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


--------------------------------------------------------------------------------

# PRD-011: Exportação de resultados (PDF / captura DOM)

## 1. Contexto e Problema

Insights precisam ser **compartilhados fora da ferramenta** (comitês, e-mail corporativo), com evidência visual da configuração e dos números.

## 2. Objetivo

Permitir geração de **PDF** a partir da captura de **DOM renderizado**, usando **`html-to-image`** e **`jsPDF`** como na implementação em `AnalysisView.tsx`, definindo também metadados mínimos obrigatórios no arquivo — **[DECISÃO PENDENTE: capa institucional, rodapé, QR]**.

## 3. Usuários Impactados

Gestores; planejamento; compliance de compartilhamento interno.

## 4. Requisitos Funcionais

- **RF-01:** Ação rotulada **Exportar** disponível à vista resultado (UI atual na área da análise).
- **RF-02:** PDF final deve incluir **metadados mínimos textualmente reconhecíveis**: módulo, modo de análise, intervalos — **[DECISÃO PENDENTE: formato exato primeira página]**.
- **RF-03:** Export deve respeitar CSS ativo (**tema** claro atual) para evitar recortes graves de contraste **[DECISÃO PENDENTE: tema escuro]**.
- **RF-04:** Evitar disparos simultâneos do mesmo usuário até término do job cliente — estado de loading / bloqueio — **[DECISÃO PENDENTE]**.

## 5. Requisitos Não Funcionais

- **RNF-01:** Para canvas típico (resoluções alvo **[DECISÃO PENDENTE: 1366×768 e 1920×1080]**), geração deve completar dentro de **[DECISÃO PENDENTE: segundos]** no p95.
- **RNF-02:** Tamanho máximo arquivo — **[DECISÃO PENDENTE]** antes de migração para geração server-side.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? |
|-------|------|-------|--------------|
| Regiões DOM snapshot | HTMLElement | página resultado | Sim |
| Nome arquivo sugerido | string | política UX | Opcional |

### Saídas

| Campo | Tipo | Destino |
|-------|------|---------|
| Arquivo `.pdf` | binário | download usuário |

## 7. Regras de Negócio

- **RN-01:** Export local **não** persiste no servidor até haver recurso autorizado por privacidade; qualquer nova telemetria de upload deve passar jurídico.

## 8. Critérios de Aceite

- [ ] Dado resultado com tabela e gráfico visível, quando **Exportar** concluído com sucesso, então elementos principais aparecem **sem corte grave** nos viewports definidos nos testes.
- [ ] Dado falha por memória/imagem grande, quando erro, então mensagem tratável aparece **[DECISÃO PENDENTE: copy oficial]**.

## 9. Fora do Escopo

Agendar envios automáticos por e-mail; relatórios agendados em servidor enterprise.

## 10. Dependências

PRD-009 e opcionalmente PRD-010; pacotes `jspdf`, `html-to-image`; browser suportados.

## 11. Métricas de Sucesso

Volume exportações/usuários ativos; taxa falha cliente; reclamações de qualidade impressão.

## 12. Aberto / Decisões Pendentes

Marca d’água e classificação de confidencialidade; multi-página com tabela longa; geração server-side para segurança.


--------------------------------------------------------------------------------

# PRD-012: Módulo INDICADORES (KPIs operacionais de loja)

## 1. Contexto e Problema

Operação de lojas precisa monitorar **KPIs** alinhados a **cadastro territorial** e, quando necessário, ao **mix de produto** — sem usar o mesmo menu de métricas de venda fiscal detalhada do PRODUTO.

## 2. Objetivo

Expor métricas com prefixo **`ind_`** segundo o guia documentado em `src/app/modules/indicadores.ts`, reutilizando a **mesma mecânica** do LOJA (atributos de localização + bloco Produto) e mocks/configurações em `referenceData.ts` até integração BI.

## 3. Usuários Impactados

Operações regionais; gestão de loja; central de indicadores (**read-heavy** para lojas).

## 4. Requisitos Funcionais

- **RF-01:** Replicar domínio **LOCALIZAÇÃO** igual ao arquivo `indicadores.ts` (**REDE, TIPO, ESTADO, REGIONAL, CIDADE, LOJA, SETOR, VENDEDOR**).
- **RF-02:** Incluir **segunda linha** **`domainAttributeExtraRows`** com **`PRODUTO_DOMAIN_ATTRIBUTE_DEFS`** e rótulo de seção “Produto”.
- **RF-03:** Para qualquer `attrId` onde `isProdutoDomainAttrId(attrId)`, delegar `getDomainAttributeOptions` a **`produtoModule`** (paridade atual).
- **RF-04:** Novas métricas futuras devem obedecer o protocolo descrito nos comentários do próprio arquivo (lista em **`metrics`**, **`metricDisplayOrder`**, mocks `MOCK_IND_*`, **`METRIC_CONFIG`**, **`METRIC_ABBREVIATIONS`**).
- **RF-05:** Listas **`SETOR_OPTIONS_IND`** e **`VENDEDOR_OPTIONS_IND`** permitem divergência futura do LOJA sem acoplamento forçado.

## 5. Requisitos Não Funcionais

- **RNF-01:** Todo id de métrica neste módulo deve usar **prefixo `ind_`** para evitar colisão semântica e técnica com PRODUTO/LOJA — mandatório.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? |
|-------|------|-------|--------------|
| Definições de métricas e mocks | objeto/array | codebase | Sim até backend |

### Saídas

| Campo | Tipo | Destino |
|-------|------|---------|
| Colunas KPI | tabela/export | resultado |

Reutiliza entradas/saídas dimensionais conforme PRD-004, PRD-005 e PRD-006.

## 7. Regras de Negócio

- **RN-01:** Agregações percentuais seguem o **mesmo motor global** do restante do app (`METRIC_CONFIG`, funções de ratio agregado).
- **RN-02:** Cross-filter **estado→cidade→loja** em `getFilteredGroupOptions` permanece como em `indicadores.ts` (+ delegação produto).

## 8. Critérios de Aceite

- [ ] Dado qualquer métrica `ind_X` presente em `METRIC_CONFIG`, quando usuário seleciona e gera resultado, então formatação e abreviação exibida batem com configuração e dicionário.
- [ ] Dado filtro de FRANQUIA em bloco Produto no INDICADORES, quando opções forem listadas, então refletem `produtoModule` (PRD-005).

## 9. Fora do Escopo

Gamificação de ranking entre vendedores; metas individuais contratuais sem política aprovada.

## 10. Dependências

PRD-002; PRD-004; PRD-005; PRD-006; PRD-009; `referenceData.ts`.

## 11. Métricas de Sucesso

Substituição progressiva de planilhas paralelas de KPIs de loja; adoção do módulo vs MAU total.

## 12. Aberto / Decisões Pendentes

Catálogo oficial `ind_*` com **owner** de negócio por KPI; integração com data lake alvo.


--------------------------------------------------------------------------------

# PRD-013: Módulo EXTRAVIOS (placeholder e evolução)

## 1. Contexto e Problema

Compras, supply chain e compliance precisam analisar **perdas, divergências e extravios** com lente dedicada. O protótipo atual apenas **reserva** o módulo com configuração **derivada do PRODUTO** reduzida, sem desenho de negócio completo.

## 2. Objetivo

Documentar o **comportamento baseline** existente e delimitar o **MVP futuro** (dimensões, métricas, workflow de aprovação) sem bloquear releases atuais do ecossistema.

## 3. Usuários Impactados

**Futuro:** loss prevention, supply chain, compliance financeiro — **[DECISÃO PENDENTE: RACI]**. **Hoje:** nenhum fluxo exclusivo além do que PRODUTO reduzido já oferece.

## 4. Requisitos Funcionais

### Baseline (protótipo atual — deve ser mantido até substituição explícita)

- **RF-01:** O sistema deve registrar módulo com id **`EXTRAVIOS`** e rótulo correspondente em `MODULE_REGISTRY`.
- **RF-02:** Configuração efetiva deve ser **`produtoSemExposicao`**: PRODUTO **sem** métricas `exp_*`, **sem** `ppa`, **sem** `match_preco`, **sem** seções extras de sidebar de exposição — ver `src/app/modules/index.ts`.

### Evolução (não implementado — especificação alvo)

- **RF-03:** O sistema deve permitir dimensões específicas de extravio — **[DECISÃO PENDENTE: exemplos — tipo de ocorrência, canal de detecção, responsável, status workflow]**.
- **RF-04:** O sistema deve permitir métricas — **[DECISÃO PENDENTE: valor recuperado, qtd unidades, taxa % sobre venda, aging]** com definições em dicionário corporativo.
- **RF-05:** O sistema deve integrar com fonte de fatos — **[DECISÃO PENDENTE: ERP, WMS, inventário cíclico]**.

## 5. Requisitos Não Funcionais

- **RNF-01:** Até definição de carga real, **não** impor SLAs específicos além da plataforma (PRD-001).
- **RNF-02:** Quando fatos forem sensíveis (fraude), logs e exportações seguem classificação PRD-001 — **[DECISÃO PENDENTE]**.

## 6. Entradas e Saídas

### Entradas (futuro)

| Campo | Tipo | Fonte | Obrigatório? | Observações |
|-------|------|-------|--------------|-------------|
| Eventos de extravio | fato | **[DECISÃO PENDENTE]** | Sim no MVP real | Granularidade a definir |
| Cadastro produto/loja | dim | mesmos masters globais | Sim | Unificar linguagem |

### Saídas (futuro)

| Campo | Tipo | Destino | Formato | Observações |
|-------|------|---------|---------|-------------|
| Painéis e exportações | agregados | usuário | tabela/PDF | Reuso PRD-009–011 |

## 7. Regras de Negócio

- **RN-01:** Enquanto RF de evolução não existir, **nenhuma** promessa comercial de “módulo EXTRAVIOS completo” pode ser feita — apenas placeholder homologado.
- **RN-02:** Quando MVP for definido, totais de extravio **não** devem duplicar medidas de venda do PRODUTO sem chave de reconciliação — **[DECISÃO PENDENTE]**.

## 8. Critérios de Aceite

**Baseline**

- [ ] Dado EXTRAVIOS selecionado, quando abrir catálogo de métricas, então **não** aparecem `exp_*`, `ppa`, `match_preco`.

**MVP futuro (quando escopo aprovado)**

- [ ] **[DECISÃO PENDENTE]** checklist a recriar após workshop de negócio.

## 9. Fora do Escopo

Integração com CCTV; investigação criminal externa; bloqueio operacional automático de loja.

## 10. Dependências

PRD-002; PRD-006; baselines de PRODUTO; PRD-001 para classificação de dado sensível.

## 11. Métricas de Sucesso

N/A para placeholder; pós-MVP: redução de perdas auditáveis, tempo de fechamento de ocorrência — **[DECISÃO PENDENTE]**.

## 12. Aberto / Decisões Pendentes

Todo backlog EXTRAVIOS além do baseline; patrocinador executivo; prioridade no roadmap vs outros módulos.

