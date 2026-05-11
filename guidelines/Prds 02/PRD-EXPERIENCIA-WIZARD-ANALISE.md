# PRD Experiência - Wizard de Análise

# Objetivo
Estruturar a jornada de análise em etapas guiadas para reduzir erro operacional e padronizar o processo decisório.

# Contexto
O protótipo já opera em fluxo sequencial (seleção, agrupamento, exclusão e resultado). A versão produtiva precisa formalizar validações, bloqueios, recuperação de estado e regras de transição.

# Referência do Protótipo
- Header com progressão por etapas.
- Cartões de atributos para seleção/exclusão/agrupamento.
- Bloqueio de navegação em estados inválidos.

# Usuários Impactados
- Heavy: analistas e planejamento.
- Power: gestão regional.
- Light: gestores de loja.

# Escopo
## Incluído
- Máquina de estados da jornada.
- Regras de navegação e bloqueio.
- Validações pré-resultado.

## Não incluído
- Persistência multi-dispositivo da jornada.
- Templates salvos por time.

# Fluxo Principal
1. Usuário escolhe módulo.
2. Configura filtros de seleção.
3. Define níveis de agrupamento.
4. Aplica exclusões específicas.
5. Gera resultado.

# Fluxos Alternativos
- Usuário volta etapa sem perder consistência.
- Limpeza total da jornada.
- Troca de módulo reinicia jornada.
- Comparativo sem período completo bloqueia progresso.

# Regras de Negócio
- Ordem das etapas é mandatória.
- Resultado só libera com pré-condições mínimas.
- Limite máximo de níveis de agrupamento.
- Alteração estrutural (módulo/período crítico) revalida etapas seguintes.

# Estados e Edge Cases
- Etapa marcada como concluída com estado inválido após alteração posterior.
- Conflito entre filtros inclusivos e exclusivos.
- Ação simultânea de navegação e processamento.

# Modelo Conceitual de Dados
- Entidades: Etapa, EstadoEtapa, ConfiguraçãoJornada.
- Atributos-chave: etapaAtual, concluída, bloqueada, motivoBloqueio.

# Permissões e Segurança
- Controle por ação (gerar/exportar).
- Auditoria de transições críticas da jornada.

# Integrações
- Validador de regras de negócio.
- Motor de consulta.

# Analytics e Observabilidade
- Eventos: avanço/retrocesso de etapa, bloqueio por validação, limpeza de jornada.
- KPI: taxa de conclusão do fluxo.

# Requisitos Não Funcionais
- Interações devem responder em tempo de UI fluida.
- Estado deve ser resiliente a refresh acidental quando política permitir.

# Dependências Técnicas
- Gerenciador de estado de sessão.
- Camada de validação declarativa.

# Gaps do Protótipo
- Ausência de contrato formal da máquina de estados.
- Mensagens de erro orientadas ao usuário ainda incompletas.

# Riscos
- Usuário avançar com premissa errada por feedback insuficiente.
- Regras implícitas não documentadas entre etapas.

# Critérios de Aceite
- Não deve ser possível chegar ao resultado com configuração inválida.
- Toda transição de etapa inválida deve exibir motivo claro.
- Troca de módulo deve invalidar a jornada anterior.

# Questões em Aberto
- Política de autosave da jornada.
- Critérios de “mínimo válido” por módulo.
