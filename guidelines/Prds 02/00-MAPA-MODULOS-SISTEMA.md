# Mapa de Módulos do Sistema

| Módulo | Finalidade | Estado atual no protótipo | Maturidade esperada para produção |
|---|---|---|---|
| Plataforma Base | Orquestrar jornada e análise | Funcional navegável | Alta |
| Produto | Performance por recorte de sortimento | Funcional com dados mock | Alta |
| Loja | Recortes territoriais/operacionais | Funcional com dados mock | Alta |
| Indicadores | KPIs operacionais | Funcional com dados mock | Média/Alta |
| Extravios | Domínio de perdas | Placeholder | Baixa (evolução necessária) |

## Relacionamentos
- Plataforma Base sustenta todos os módulos.
- Produto e Loja compartilham dimensões e regras de filtro.
- Indicadores reutiliza estrutura base e catálogo próprio.
- Extravios depende de definição de domínio e integração.

## Observações
- O protótipo valida UX e fluxo, não valida arquitetura de produção.
