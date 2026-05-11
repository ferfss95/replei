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
