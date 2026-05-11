# PRD Dados - Dimensões de Produto

# Objetivo
Definir o modelo dimensional de produto com hierarquia, coerência semântica e filtros cruzados para análises de sortimento e performance.

# Contexto
O protótipo já demonstra múltiplos atributos de produto, inclusive categoria, marca e franquia. Para produção, é necessário formalizar contratos de domínio e regras de consistência.

# Referência do Protótipo
- Cartões de atributos de produto.
- Regras de dependência entre pares de atributos.
- Organização visual diferenciada de alguns atributos.

# Usuários Impactados
- Heavy: compras, planejamento de portfólio.
- Power: category managers.
- Light: gestão de loja com foco tático.

# Escopo
## Incluído
- Catálogo de atributos de produto.
- Regras de coerência entre atributos.
- Política de ordenação e agrupamento de opções.

## Não incluído
- Cadastro e manutenção de produto no sistema.
- Preço, promoção e ciclo de vida completo de SKU.

# Fluxo Principal
1. Usuário seleciona atributos de produto relevantes.
2. Sistema aplica dependências entre atributos.
3. Usuário combina filtros e agrupamentos.
4. Resultado apresenta visão consolidada por recorte escolhido.

# Fluxos Alternativos
- Atributos sem correspondência em catálogo.
- Regras de coerência com conflito (sem interseção).
- Atributo opcional não preenchido na fonte.

# Regras de Negócio
- Hierarquia de produto deve seguir ordem oficial definida por negócio.
- Coerências entre grupos de atributos devem ser aplicadas automaticamente.
- Listas de referência (ex.: franquias) devem seguir catálogo corporativo.
- Diferenciação visual de grupos especiais pode existir sem alterar semântica.

# Estados e Edge Cases
- Produto sem categoria definida.
- Marca sem mapeamento para franquia.
- Mudança de catálogo entre início e fim da sessão.

# Modelo Conceitual de Dados
- Entidades: CategoriaProduto, LinhaProduto, GrupoProduto, SubgrupoProduto, Marca, Franquia, Modelo, Gênero, FaixaEtária, Cor, Tamanho.
- Relações:
  - Grupo 1:N Subgrupo
  - Marca N:N Franquia (a confirmar)
  - Categoria 1:N Modalidade (a confirmar)

# Permissões e Segurança
- Acesso ao catálogo integral pode variar por área.
- Dados estratégicos (mix e performance) exigem trilha de auditoria de exportação.

# Integrações
- PIM/MDM de produto.
- Dicionário corporativo de atributos.

# Analytics e Observabilidade
- Eventos de filtro por atributo de produto.
- Métrica de conflito de coerência entre atributos.
- Monitoramento de cobertura cadastral por atributo.

# Requisitos Não Funcionais
- Atualização de catálogo sem downtime.
- Resposta rápida mesmo com alta cardinalidade de modelos.

# Dependências Técnicas
- Serviço de catálogo de produto.
- Motor de validação de coerência.

# Gaps do Protótipo
- Sem integração com fonte oficial de produto.
- Regras de coerência parcialmente implícitas.
- Ausência de versionamento formal do catálogo.

# Riscos
- Interpretação divergente entre times por taxonomia incompleta.
- Quebra de comparabilidade histórica ao alterar nomenclaturas.

# Critérios de Aceite
- Regras de coerência devem impedir combinações semanticamente inválidas.
- Catálogo deve suportar atualização controlada e rastreável.
- Filtros e agrupamentos devem refletir hierarquia oficial aprovada.

# Questões em Aberto
- Governança de taxonomia (quem aprova mudanças).
- Relação oficial entre marca e franquia.
