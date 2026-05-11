# Título da Feature

Exportação de resultados analíticos — PDF/captura e governança de compartilhamento

---

# 1. Contexto

## Objetivo

Permitir **compartilhar evidências** da análise (reuniões, comitês, auditoria) com **metadados mínimos** e **controle de acesso** em produção.

## Problema que resolve

Reduz retrabalho de “print solto” sem contexto e mitiga vazamento de informação sem trilha.

## Usuários impactados

Power (gestores), heavy (analistas que anexam a atas).

## Dependências

Permissões; biblioteca de geração de documento; política de marca d’água — **[DECISÃO PENDENTE]**.

---

# 2. Usabilidade e Interface

## Comportamento

- Ação **Exportar** visível no resultado.
- Feedback de **progresso** e **sucesso/erro**.
- Pré-visualização opcional — **[DECISÃO PENDENTE]**.

## Estados

| Estado | UI |
|--------|-----|
| Gerando | Botão desabilitado + spinner |
| Sucesso | Download iniciado + toast |
| Falha | Mensagem + retry |
| Conteúdo grande | Aviso de multi-página ou recorte — **[DECISÃO PENDENTE]** |

## Gaps

- Metadados mínimos no arquivo ainda genéricos.
- Sem classificação de confidencialidade no rodapé.

## Melhorias

- Escolha de orientação página e inclusão/exclusão de gráfico.

---

# 3. Regras e Cálculos

## Regras

- **RN-01:** Export reflete **instantâneo** da análise no momento da solicitação.
- **RN-02:** Usuário sem permissão **não** vê ação ou recebe erro 403 amigável.
- **RN-03:** Auditoria: quem, quando, módulo, período, conjunto de dimensões — **[DECISÃO PENDENTE: granularidade]**.

## Edge cases

- Duplo clique; cancelamento; falta de memória no cliente; fontes web não carregadas na captura.

## Idempotência

- Múltiplos cliques geram múltiplos arquivos com **timestamp** distinto ou bloqueio — **[DECISÃO PENDENTE]**.

---

# 4. Casos de Uso e Exemplos

| ID | Contexto | Ação | Esperado |
|----|------------|------|----------|
| CU-01 | Feliz | Exporta após resultado | PDF coerente |
| CU-02 | Sem permissão | Tenta exportar | Bloqueio |
| CU-03 | Falha | Rede cai | Erro + retry |
| CU-04 | Grande | Muitas colunas | Completo ou política de divisão |
| CU-05 | Auditoria | Exporta | Log registrado |

---

# 5. Critérios de Aceite

- [ ] **CA-01** Dado resultado visível, quando exportar, então arquivo contém **módulo**, **período** e **timestamp** de geração no padrão aprovado.
- [ ] **CA-02** Dado usuário sem permissão, quando acionar exportação, então ação **não** conclui e mensagem é clara.
- [ ] **CA-03** Dado falha técnica, quando exportação abortar, então **não** é exibido arquivo corrompido parcial sem aviso.
- [ ] **CA-04** Dado ambiente produtivo, quando exportar, então evento de auditoria é persistido — **[DECISÃO PENDENTE: destino do log]**.
- [ ] **CA-05** Dado conteúdo sensível, quando política exigir, então **marca d’água** aparece — **[DECISÃO PENDENTE]**.
