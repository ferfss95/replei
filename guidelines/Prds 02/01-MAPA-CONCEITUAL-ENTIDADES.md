# Mapa Conceitual de Entidades

## Núcleo de Análise
- Sessão de Análise
- Configuração de Filtros
- Configuração de Agrupamento
- Configuração de Métricas
- Janela Temporal
- Resultado Analítico

## Dimensões
- Território (rede, estado, cidade, loja etc.)
- Produto (categoria, marca, franquia etc.)
- Tempo (dia, mês, ano, comparativo)

## Fatos
- Fato de Vendas/Estoque (futuro dado real)
- Fato Operacional (indicadores)
- Fato de Perdas (extravios, futuro)

## Governança
- Catálogo de Métricas
- Catálogo de Dimensões
- Versão de Definição
- Registro de Auditoria

## Relacionamentos-chave
- Sessão de Análise referencia um Módulo.
- Sessão possui N filtros, N métricas, 1 configuração temporal.
- Resultado é materialização da sessão em um instante.
- Exportação referencia exatamente um Resultado.
