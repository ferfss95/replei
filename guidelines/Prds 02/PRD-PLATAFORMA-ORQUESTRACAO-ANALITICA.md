# PRD Plataforma - Orquestração Analítica

# Objetivo
Definir a fundação do produto analítico corporativo: uma camada única para seleção de contexto, execução de análise e apresentação de resultado com governança, segurança e escalabilidade.

# Contexto
O protótipo já comprova viabilidade de navegação e composição de análises. Porém, para operação real, faltam definições de produção: autenticação, auditoria, gestão de configuração, contratos de dados e SLOs.

# Referência do Protótipo
- Tela principal com navegação por módulos.
- Cabeçalho com progresso por etapas.
- Área central com filtros, agrupamentos e resultados.
- Barra lateral de métricas e painéis de análise.

# Usuários Impactados
- Heavy users: planejamento, BI, compras.
- Power users: gestão regional e coordenação operacional.
- Light users: liderança de loja.
- Áreas impactadas: Comercial, Operações, Dados, TI, Segurança.

# Escopo
## Incluído
- Framework de módulos analíticos.
- Orquestração de estados da jornada.
- Base de governança funcional e técnica.

## Não incluído
- Cálculo financeiro oficial no backend.
- Pipeline de ingestão final de dados.
- IAM corporativo definitivo.

# Fluxo Principal
1. Usuário acessa a plataforma e escolhe um domínio analítico.
2. Plataforma carrega configuração de filtros, métricas e modos permitidos.
3. Usuário configura análise e solicita resultado.
4. Sistema processa e renderiza visão tabular/gráfica.
5. Usuário exporta e compartilha quando necessário.

# Fluxos Alternativos
- Troca de módulo durante configuração: estado deve ser isolado e reinicializado.
- Sessão expirada: preservar rascunho local quando permitido.
- Falha de carregamento de catálogo: fallback com aviso e retry.

# Regras de Negócio
- Apenas um módulo ativo por sessão de análise.
- Configuração de análise deve ser semanticamente válida antes de gerar resultado.
- Versões de catálogo (dimensões/métricas) devem ser rastreáveis.
- Mudança de módulo invalida contexto anterior.

# Estados e Edge Cases
- Estado parcial salvo sem conectividade.
- Conflito de filtros que gera conjunto vazio.
- Seleção de métricas incompatíveis com modo temporal.
- Timeout de consulta e retorno tardio (evitar sobrescrever estado novo com resposta antiga).

# Modelo Conceitual de Dados
- Entidades: SessãoAnalítica, MóduloAnalítico, ConfiguraçãoFiltro, ConfiguraçãoMétrica, ResultadoAnalítico, Exportação.
- Relacionamentos:
  - SessãoAnalítica 1:N ConfiguraçãoFiltro
  - SessãoAnalítica 1:N ConfiguraçãoMétrica
  - SessãoAnalítica 1:N ResultadoAnalítico
  - ResultadoAnalítico 1:N Exportação
- Ownership:
  - Produto: regras funcionais.
  - Dados: semântica de métricas/dimensões.
  - Engenharia: execução e performance.

# Permissões e Segurança
- Perfis mínimos: visualizador, analista, gestor, administrador.
- Controle por domínio e por ação (ex.: exportar).
- Auditoria obrigatória para geração de resultado e exportação.
- LGPD: mascaramento para atributos pessoais.

# Integrações
- Futuro backend analítico (API de consulta).
- Catálogo de metadados e dicionário de negócio.
- Identidade corporativa (SSO).
- Observabilidade (logs/métricas/traces).

# Analytics e Observabilidade
- Eventos: módulo selecionado, análise gerada, exportação solicitada, erro de consulta.
- Logs: parâmetros normalizados, tempo de execução, origem da falha.
- KPIs: tempo de geração, taxa de sucesso, abandono por etapa.

# Requisitos Não Funcionais
- p95 de geração de resultado: [DECISÃO PENDENTE].
- Disponibilidade mensal: [DECISÃO PENDENTE].
- Criptografia em trânsito e em repouso.
- Escalabilidade horizontal da camada de consulta.

# Dependências Técnicas
- Camada de API analítica.
- Camada de autenticação/autorização.
- Catálogo versionado de métricas e dimensões.
- Infraestrutura de cache e observabilidade.

# Gaps do Protótipo
- Sem autenticação real.
- Sem persistência de sessão.
- Sem integração com dados oficiais.
- Sem política formal de erros e recuperação.

# Riscos
- Técnico: acoplamento excessivo entre UI e regras de negócio.
- Operacional: divergência entre definição de métrica e uso no campo.
- Produto: expectativa de “número oficial” sem governança.
- Dados: inconsistência temporal entre fontes.

# Critérios de Aceite
- Plataforma deve carregar um módulo com estado limpo e válido.
- Geração de resultado deve validar pré-condições de configuração.
- Ações críticas devem estar auditadas.
- Política de erro/retry deve ser previsível para o usuário.

# Questões em Aberto
- SLO/SLA finais por tipo de consulta.
- Estratégia de persistência de sessão (cliente, servidor, híbrida).
- Modelo de autorização por área e território.
