# PRD-011: Exportação de resultados (PDF / captura DOM)

## 1. Contexto e Problema

Insights precisam ser **compartilhados fora da ferramenta** (comitês, e-mail corporativo), com evidência visual da configuração e dos números.

## 2. Objetivo

Permitir geração de **PDF** a partir da captura de **DOM renderizado**, usando **`html-to-image`** e **`jsPDF`** como na implementação em `AnalysisView.tsx`, definindo também metadados mínimos obrigatórios no arquivo — **[DECISÃO PENDENTE: capa institucional, rodapé, QR]**.

## 3. Usuários Impactados

Gestores; planejamento; compliance de compartilhamento interno.

## 4. Requisitos Funcionais

- **RF-01:** Ação rotulada **Exportar** disponível à vista resultado (UI atual na área da análise).
- **RF-02:** PDF final deve incluir **metadados mínimos textualmente reconhecíveis**: módulo, modo de análise, intervalos — **[DECISÃO PENDENTE: formato exato primeira página]**.
- **RF-03:** Export deve respeitar CSS ativo (**tema** claro atual) para evitar recortes graves de contraste **[DECISÃO PENDENTE: tema escuro]**.
- **RF-04:** Evitar disparos simultâneos do mesmo usuário até término do job cliente — estado de loading / bloqueio — **[DECISÃO PENDENTE]**.

## 5. Requisitos Não Funcionais

- **RNF-01:** Para canvas típico (resoluções alvo **[DECISÃO PENDENTE: 1366×768 e 1920×1080]**), geração deve completar dentro de **[DECISÃO PENDENTE: segundos]** no p95.
- **RNF-02:** Tamanho máximo arquivo — **[DECISÃO PENDENTE]** antes de migração para geração server-side.

## 6. Entradas e Saídas

### Entradas

| Campo | Tipo | Fonte | Obrigatório? |
|-------|------|-------|--------------|
| Regiões DOM snapshot | HTMLElement | página resultado | Sim |
| Nome arquivo sugerido | string | política UX | Opcional |

### Saídas

| Campo | Tipo | Destino |
|-------|------|---------|
| Arquivo `.pdf` | binário | download usuário |

## 7. Regras de Negócio

- **RN-01:** Export local **não** persiste no servidor até haver recurso autorizado por privacidade; qualquer nova telemetria de upload deve passar jurídico.

## 8. Critérios de Aceite

- [ ] Dado resultado com tabela e gráfico visível, quando **Exportar** concluído com sucesso, então elementos principais aparecem **sem corte grave** nos viewports definidos nos testes.
- [ ] Dado falha por memória/imagem grande, quando erro, então mensagem tratável aparece **[DECISÃO PENDENTE: copy oficial]**.

## 9. Fora do Escopo

Agendar envios automáticos por e-mail; relatórios agendados em servidor enterprise.

## 10. Dependências

PRD-009 e opcionalmente PRD-010; pacotes `jspdf`, `html-to-image`; browser suportados.

## 11. Métricas de Sucesso

Volume exportações/usuários ativos; taxa falha cliente; reclamações de qualidade impressão.

## 12. Aberto / Decisões Pendentes

Marca d’água e classificação de confidencialidade; multi-página com tabela longa; geração server-side para segurança.
