# PRD Módulo - Extravios e Perdas (Evolução)

# Objetivo
Estruturar a evolução do módulo de extravios para um domínio analítico completo de perdas, divergências e recuperação.

# Contexto
No protótipo, o módulo existe como placeholder funcional derivado de outro domínio. A versão produtiva requer desenho próprio de métricas, processo e responsabilidades.

# Referência do Protótipo
- Módulo disponível no seletor.
- Fluxo de análise reutilizado da plataforma.
- Escopo de métricas reduzido.

# Usuários Impactados
- Heavy: prevenção de perdas, supply chain, controladoria.
- Power: gestão regional e operações.

# Escopo
## Incluído
- Definição do domínio de extravios.
- Catálogo inicial de indicadores de perda.
- Regras de recorte por território e produto.

## Não incluído
- Workflow investigativo completo (caso, evidência, sanção).

# Fluxo Principal
1. Usuário seleciona módulo de extravios.
2. Aplica filtros de território/produto.
3. Seleciona indicadores de perda.
4. Analisa tendências e pontos críticos.

# Fluxos Alternativos
- Dados ainda indisponíveis por integração pendente.
- Filtros resultam em conjunto vazio.
- Indicador temporariamente indisponível.

# Regras de Negócio
- Módulo de extravios possui semântica própria e não deve herdar indefinidamente regras de outros domínios.
- Indicadores de perda precisam separar evento, valor e recuperabilidade.
- Conciliação com outras visões financeiras deve ser rastreável.

# Estados e Edge Cases
- Registro duplicado de ocorrência.
- Ocorrência sem data de referência.
- Divergência entre estoque físico e sistêmico.

# Modelo Conceitual de Dados
- Entidades: OcorrênciaPerda, TipoPerda, StatusPerda, AçãoCorretiva, ValorRecuperado.
- Relações:
  - OcorrênciaPerda N:1 Loja
  - OcorrênciaPerda N:1 Produto
  - OcorrênciaPerda 1:N AçãoCorretiva

# Permissões e Segurança
- Dados sensíveis com acesso restrito.
- Auditoria detalhada de exportações e consultas.
- Eventual anonimização por compliance.

# Integrações
- Sistemas de inventário, WMS, ERP financeiro.
- Eventual integração com auditoria interna.

# Analytics e Observabilidade
- KPI de taxa de perda por período.
- KPI de recuperação por causa.
- Alertas de picos anormais.

# Requisitos Não Funcionais
- Integridade e reconciliação com fechamento contábil.
- Histórico auditável por período longo.

# Dependências Técnicas
- Pipeline de perdas com qualidade mínima.
- Catálogo de causas e status.

# Gaps do Protótipo
- Não há modelo completo de extravios.
- Métricas e regras ainda não formalizadas.

# Riscos
- Decisões punitivas com base em dado inconsistente.
- Sobrecarga de interpretações sem classificação de causa.

# Critérios de Aceite
- Módulo deve ter catálogo próprio de indicadores de perda.
- Deve haver rastreabilidade de origem e conciliação.
- Permissões de acesso devem ser aplicadas por perfil e território.

# Questões em Aberto
- Definição do processo alvo (detecção, confirmação, tratamento).
- Prioridade no roadmap frente a outros domínios.
