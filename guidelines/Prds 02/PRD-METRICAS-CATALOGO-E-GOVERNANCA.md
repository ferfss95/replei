# PRD Métricas - Catálogo e Governança

# Objetivo
Criar um catálogo de métricas confiável, versionado e auditável, com semântica única para toda a organização.

# Contexto
O protótipo já possui agrupamento de métricas por contexto e exibição no menu lateral. A produtização exige definição formal de cálculo, periodicidade, granularidade e ownership.

# Referência do Protótipo
- Menu lateral de métricas com grupos.
- Seleção de múltiplas métricas.
- Exibição em tabela/gráfico e exportação.

# Usuários Impactados
- Heavy: BI e planejamento.
- Power: gestão regional.
- Light: liderança de loja.

# Escopo
## Incluído
- Dicionário de métricas com metadados.
- Regras de agrupamento e ordenação.
- Política de versionamento e depreciação.

## Não incluído
- Motor de cálculo final em data warehouse.

# Fluxo Principal
1. Usuário escolhe métricas no catálogo.
2. Sistema valida compatibilidade com módulo/modo temporal.
3. Resultado apresenta métricas na ordem definida.
4. Exportação carrega definições coerentes com o catálogo vigente.

# Fluxos Alternativos
- Métrica indisponível para o contexto selecionado.
- Métrica em depreciação (substituição recomendada).
- Mudança de definição entre versões.

# Regras de Negócio
- Toda métrica deve ter owner, definição e fórmula.
- Métricas incompatíveis com o contexto devem ser bloqueadas ou sinalizadas.
- Ordem de exibição deve ser determinística.
- Métricas derivadas exigem rastreabilidade dos componentes.

# Estados e Edge Cases
- Métrica selecionada removida em nova versão.
- Conflito entre métricas absolutas e percentuais no mesmo resumo.
- Falha de resolução de metadado em tempo de execução.

# Modelo Conceitual de Dados
- Entidades: Métrica, GrupoMétrica, DefiniçãoMétrica, VersãoMétrica, RegraCompatibilidade.
- Atributos: idNegócio, unidade, tipoAgregação, owner, status, validade.

# Permissões e Segurança
- Perfis de manutenção de catálogo separados de perfis de consumo.
- Auditoria de alteração de definição.

# Integrações
- Data catalog corporativo.
- Repositório de contratos semânticos.
- Pipeline de métricas no DWH/Lakehouse.

# Analytics e Observabilidade
- Evento de seleção de métrica.
- KPI de adoção por métrica.
- Alertas de quebra de compatibilidade.

# Requisitos Não Funcionais
- Consulta de catálogo em baixa latência.
- Versionamento backward-compatible quando possível.

# Dependências Técnicas
- Serviço de metadados.
- Validador de compatibilidade.

# Gaps do Protótipo
- Cálculo mockado.
- Sem owner formal por métrica.
- Sem política de depreciação.

# Riscos
- Decisão com definição divergente.
- Retrabalho por mudança de fórmula sem comunicação.

# Critérios de Aceite
- Toda métrica disponível deve conter metadados mínimos obrigatórios.
- Histórico de versões deve ser consultável.
- Incompatibilidades devem ser bloqueadas de forma explícita.

# Questões em Aberto
- Processo de aprovação para mudança de fórmula.
- SLA para publicação de novas métricas.
