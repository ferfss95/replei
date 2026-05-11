# PRD Módulo - Indicadores Operacionais

# Objetivo
Disponibilizar um domínio analítico focado em saúde operacional de lojas com indicadores de execução e eficiência.

# Contexto
O protótipo já contém um módulo dedicado com catálogo próprio de indicadores e reuso de dimensões de localização/produto. Para produção, faltam definições de fonte oficial, periodicidade e ownership.

# Referência do Protótipo
- Módulo específico no seletor principal.
- Métricas de indicador com nomenclatura própria.
- Reuso de fluxo e filtros.

# Usuários Impactados
- Heavy: operações e planejamento comercial.
- Power: gestores regionais.
- Light: líderes de loja.

# Escopo
## Incluído
- Catálogo de indicadores operacionais.
- Regras de exibição e agrupamento.
- Compatibilidade com filtros territoriais e de produto.

## Não incluído
- Captura operacional transacional em tempo real.

# Fluxo Principal
1. Usuário seleciona o módulo de indicadores.
2. Configura recortes territoriais e de produto.
3. Seleciona indicadores relevantes.
4. Analisa resultado tabular/gráfico.

# Fluxos Alternativos
- Indicador indisponível para recorte escolhido.
- Falha de atualização de catálogo.

# Regras de Negócio
- Indicadores devem ter semântica independente das métricas financeiras do módulo de produto.
- Reuso de dimensões deve manter coerência de filtragem.
- Indicadores novos exigem definição formal antes de publicação.

# Estados e Edge Cases
- Indicador com denominador zero.
- Indicador sem cobertura de dados em parte da rede.

# Modelo Conceitual de Dados
- Entidades: IndicadorOperacional, DimensãoTerritorial, DimensãoProduto, FatoOperacional.
- Atributos: periodicidade, unidade, meta, fonte.

# Permissões e Segurança
- Escopo por território e função.
- Ocultação de indicadores sensíveis por perfil.

# Integrações
- Fonte operacional (ERP/PDV/CRM, a definir).
- Catálogo de indicadores.

# Analytics e Observabilidade
- Adoção por indicador.
- Cobertura de dados por indicador.
- Taxa de erro por fonte.

# Requisitos Não Funcionais
- Disponibilidade para rotina diária operacional.
- Atualização conforme janela de negócio (intra-day ou D+1).

# Dependências Técnicas
- PRDs de localização, produto, métricas, temporalidade e motor analítico.

# Gaps do Protótipo
- Dados fictícios.
- Ausência de SLA de atualização por indicador.

# Riscos
- Uso indevido de indicador fora do contexto de operação.
- Comparações injustas por ausência de normalização.

# Critérios de Aceite
- Indicadores devem respeitar filtros e permissões territoriais.
- Metadados de cada indicador devem estar completos.
- Resultado deve ser consistente entre tabela e gráfico.

# Questões em Aberto
- Fonte e latência alvo para cada indicador.
- Governança de inclusão/descontinuação de indicadores.
