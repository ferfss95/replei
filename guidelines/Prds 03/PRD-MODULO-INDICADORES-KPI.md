# Título da Feature

Módulo Indicadores — KPIs operacionais de loja

---

# 1. Contexto

## Objetivo

Oferecer lente dedicada a **indicadores operacionais** (execução, produtividade, qualidade) com **mesma jornada** da análise principal, porém com **catálogo próprio** de KPIs.

## Problema que resolve

Separa “**saúde operacional**” de “**performance financeira detalhada**”, reduzindo ruído para times de campo.

## Usuários impactados

Operações, regional, loja (leitura), controladoria operacional.

## Dependências

Fontes operacionais (PDV, ERP, checklists) — **[DECISÃO PENDENTE por KPI]**; território e produto como recortes.

---

# 2. Usabilidade e Interface

## Comportamento

- Mesma jornada em etapas do protótipo.
- Catálogo lateral com **nomes e ícones** específicos de KPI.
- Tooltips com definição operacional.

## Estados

- KPI sem cobertura em parte da rede — indicador de “dado parcial”.
- KPI com denominador zero — exibir “n/d” com política única.

## Gaps

- Falta “última atualização do dado” por KPI.

## Melhorias

- Metas e semáforo (verde/amarelo/vermelho) — roadmap.

---

# 3. Regras e Cálculos

## Regras

- **RN-01:** Cada KPI possui **definição**, **frequência** e **unidade** aprovadas.
- **RN-02:** Prefixo/namespacing de identificadores para evitar colisão com outras lentes — **[DECISÃO PENDENTE: padrão de id]**.
- **RN-03:** Agregação de taxas não é soma simples; aplicar regra por KPI.

## Origem dos dados

Protótipo: simulação. Produção: pipeline operacional com SLA por indicador.

---

# 4. Casos de Uso e Exemplos

| ID | Contexto | Ação | Esperado |
|----|------------|------|----------|
| CU-01 | Operações | Filtra regional + KPI X | Série por loja |
| CU-02 | Comparativo | Duas janelas | Delta do KPI |
| CU-03 | Sem dado | Loja nova | n/d ou zero com legenda |
| CU-04 | Permissão | KPI restrito | Oculto |
| CU-05 | Exporta | PDF | KPIs listados com definição curta |

---

# 5. Critérios de Aceite

- [ ] **CA-01** Dado catálogo de KPI publicado, quando usuário abrir módulo Indicadores, então **apenas** KPIs ativos aparecem.
- [ ] **CA-02** Dado KPI com fórmula dependente de denominador, quando denominador for zero, então UI segue **política única** aprovada.
- [ ] **CA-03** Dado recorte territorial, quando KPI não tiver cobertura em alguma loja, então resultado indica **parcialidade** de forma explícita.
- [ ] **CA-04** Dado mesma jornada que outros módulos, quando trocar de módulo, então regra de **reset de estado** se aplica.
- [ ] **CA-05** Dado exportação, quando ocorrer, então lista de KPIs exportados inclui **versão** do dicionário — **[DECISÃO PENDENTE]**.
