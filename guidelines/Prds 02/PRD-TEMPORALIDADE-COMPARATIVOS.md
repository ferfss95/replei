# PRD Temporalidade - Comparativos e Janelas de Análise

# Objetivo
Garantir consistência temporal nas análises (diária, mensal, anual, comparativa e intradiária), com regras claras de baseline.

# Contexto
O protótipo já suporta múltiplas visões temporais e comparativas. Em produção, é necessário eliminar ambiguidades de calendário e critérios de comparação.

# Referência do Protótipo
- Seleção de tipo de período.
- Dois períodos para comparativo.
- Toggles de baseline (ex.: ano anterior e variantes).

# Usuários Impactados
- Heavy: planejamento e BI.
- Power: regionais e operações.

# Escopo
## Incluído
- Modelo temporal oficial.
- Regras de validação de período.
- Política de comparativo entre janelas.

## Não incluído
- Modelos de previsão estatística.

# Fluxo Principal
1. Usuário define tipo de período.
2. Para comparativo, define período base e período comparado.
3. Sistema valida coerência.
4. Motor calcula e exibe resultados por janela.

# Fluxos Alternativos
- Período incompleto.
- Intervalo inválido (início > fim).
- Calendário com exceção (bissexto, fuso, horário de verão histórico).

# Regras de Negócio
- Comparativo exige duas janelas válidas.
- Regras de “ano anterior” devem ser formalizadas e mutuamente exclusivas quando conflitam.
- Granularidade da métrica deve ser compatível com a granularidade temporal escolhida.

# Estados e Edge Cases
- Alteração de período com resultado já carregado.
- Troca de timezone no cliente.
- Janela sem dados em uma das séries.

# Modelo Conceitual de Dados
- Entidades: JanelaTemporal, TipoComparação, RegraBaseline.
- Atributos: inicio, fim, granularidade, timezone, calendário.

# Permissões e Segurança
- Sem restrição específica além da permissão de consulta.
- Auditoria de consultas comparativas em contextos sensíveis.

# Integrações
- Serviço de calendário corporativo.
- Motor de consulta temporal.

# Analytics e Observabilidade
- Evento de tipo temporal selecionado.
- Taxa de erro por invalidação de janela.
- Tempo de resposta por granularidade.

# Requisitos Não Funcionais
- Consistência de timezone ponta a ponta.
- Processamento eficiente para comparativos longos.

# Dependências Técnicas
- Biblioteca confiável de datas.
- Contrato de timezone por ambiente.

# Gaps do Protótipo
- Ausência de contrato formal de calendário.
- Regras comparativas parcialmente implícitas.

# Riscos
- Leitura equivocada de tendência por baseline incorreto.
- Divergência entre áreas por regra temporal distinta.

# Critérios de Aceite
- Regras de comparação devem ser explícitas e rastreáveis.
- Sistema deve bloquear combinações temporais inválidas.
- Resultado deve indicar claramente qual baseline foi usado.

# Questões em Aberto
- Calendário civil vs calendário fiscal.
- Regra padrão quando usuário não define baseline explicitamente.
