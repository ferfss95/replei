# PRD Dados - Dimensões de Localização

# Objetivo
Padronizar dimensões territoriais e operacionais para garantir consistência entre filtros e agrupamentos de loja/região.

# Contexto
O protótipo apresenta filtros em cadeia (estado, cidade, loja etc.). Para produção, as relações precisam de contrato de dados, regras de prioridade e tratamento de inconsistência cadastral.

# Referência do Protótipo
- Cartões de localização no fluxo de seleção.
- Dependência entre filtros de território.
- Agrupamento por níveis geográficos.

# Usuários Impactados
- Heavy: planejamento e operações.
- Power: regionais.
- Light: gestão de loja.

# Escopo
## Incluído
- Catálogo de dimensões de localização.
- Regras de dependência entre dimensões.
- Ordenação e normalização de opções.

## Não incluído
- Gestão de cadastro mestre no REPLEI.

# Fluxo Principal
1. Usuário seleciona dimensões de localização.
2. Sistema recalcula opções válidas para dimensões dependentes.
3. Usuário agrupa por níveis desejados.
4. Resultado mantém coerência territorial.

# Fluxos Alternativos
- Resultado vazio por combinação sem interseção.
- Cadastro incompleto (ex.: loja sem regional).
- Duplicidade de chave territorial em fontes distintas.

# Regras de Negócio
- Dimensão filha só exibe valores válidos para o contexto pai.
- Se nenhum pai selecionado, filha exibe catálogo total autorizado.
- Normalização textual deve evitar duplicidade semântica.
- Ordenação deve ser estável e previsível.

# Estados e Edge Cases
- Cidade sem estado associado.
- Loja ativa sem vínculo territorial atualizado.
- Usuário aplica exclusão em nível superior após selecionar nível inferior.

# Modelo Conceitual de Dados
- Entidades: Rede, Canal, TipoOperação, Estado, Regional, Cidade, Loja, Setor, Vendedor.
- Relações:
  - Estado 1:N Cidade
  - Cidade 1:N Loja
  - Regional 1:N Loja
- Ownership: Dados mestres (Operações/MDM), semântica analítica (Dados/Produto).

# Permissões e Segurança
- Escopo territorial por perfil (ex.: regional vê apenas suas lojas).
- Atributos pessoais (vendedor) com restrição de exposição.

# Integrações
- MDM de lojas.
- ERP/CRM para hierarquia comercial.
- API de território autorizado por usuário.

# Analytics e Observabilidade
- Evento de filtro territorial aplicado.
- Métrica de “resultado vazio por conflito territorial”.
- Log de divergência de cadastro.

# Requisitos Não Funcionais
- Tempo de carga de opções dependentes: [DECISÃO PENDENTE].
- Suporte a catálogo de alta cardinalidade.

# Dependências Técnicas
- Serviço de catálogo dimensional.
- Serviço de autorização por escopo territorial.

# Gaps do Protótipo
- Dados mockados.
- Sem política de dados ausentes/inválidos.
- Sem validação de autorização territorial real.

# Riscos
- Decisões com recorte territorial incorreto.
- Quebra de confiança por cadastro desatualizado.

# Critérios de Aceite
- Dependências pai-filho devem ser respeitadas em seleção e agrupamento.
- Sistema deve sinalizar claramente quando não houver interseção válida.
- Usuário não deve visualizar dados fora do seu território autorizado.

# Questões em Aberto
- Fonte de verdade territorial final.
- Estratégia de atualização (near real-time vs batch).
