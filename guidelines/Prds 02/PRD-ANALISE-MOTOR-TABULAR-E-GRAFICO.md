# PRD Análise - Motor Tabular e Gráfico

# Objetivo
Definir o motor de resultado analítico (tabela + gráfico) com consistência entre filtros, agrupamentos, métricas e períodos.

# Contexto
O protótipo comprova a composição de resultados e visualizações. A versão produtiva precisa separar responsabilidades entre UI, cálculo e dados oficiais.

# Referência do Protótipo
- Tabela analítica com hierarquia.
- Gráfico sincronizado com o resultado.
- Opção de participação percentual (share).

# Usuários Impactados
- Heavy: analistas.
- Power: gestores.
- Light: supervisores de loja.

# Escopo
## Incluído
- Construção de linhas por agrupamento.
- Pivot de colunas por período/métrica.
- Renderização gráfica e share contextual.

## Não incluído
- Motor OLAP ad hoc completo.

# Fluxo Principal
1. Receber configuração válida de análise.
2. Processar dados conforme regras de agregação.
3. Montar estrutura tabular.
4. Gerar séries gráficas correspondentes.
5. Exibir e permitir exportação.

# Fluxos Alternativos
- Dataset vazio.
- Falha parcial (tabela renderiza e gráfico falha).
- Métrica sem dados para uma janela temporal.

# Regras de Negócio
- Tabela e gráfico devem refletir a mesma base de dados.
- Share percentual depende do universo filtrado visível.
- Regras de agregação variam por tipo de métrica.
- Ordenação e paginação não podem alterar totais.

# Estados e Edge Cases
- Respostas fora de ordem em consultas concorrentes.
- Grande volume de linhas e colunas.
- Alternância rápida de parâmetros durante render.

# Modelo Conceitual de Dados
- Entidades: ConsultaAnalítica, LinhaResultado, CélulaMétrica, SérieGráfica.
- Atributos: chaveHierárquica, período, valor, formatação, participação.

# Permissões e Segurança
- Resultado deve respeitar escopo de acesso do usuário.
- Exportação de dados agregados deve ser auditada.

# Integrações
- API de consulta analítica.
- Serviço de formatação e metadados de métrica.

# Analytics e Observabilidade
- Métrica de tempo de geração da tabela.
- Métrica de tempo de render gráfico.
- Taxa de erro por etapa (consulta/processamento/render).

# Requisitos Não Funcionais
- p95 de render final: [DECISÃO PENDENTE].
- Estratégia de paginação/virtualização para alta volumetria.
- Resiliência a falha parcial de componente visual.

# Dependências Técnicas
- Engine de agregação.
- Biblioteca de gráficos.
- Camada de memoização/cache.

# Gaps do Protótipo
- Cálculo baseado em mock.
- Sem garantia de paridade com backend real.
- Sem contrato formal de erro parcial.

# Riscos
- Inconsistência tabela vs gráfico.
- Performance degradada em análises de alta cardinalidade.

# Critérios de Aceite
- Tabela e gráfico devem permanecer sincronizados após qualquer alteração válida.
- Share deve ser calculado com regra explícita e previsível.
- Sistema deve tratar estado vazio e falha parcial com mensagens claras.

# Questões em Aberto
- Política de cache por combinação de filtros.
- Nível de detalhe permitido na interface para evitar overload.
