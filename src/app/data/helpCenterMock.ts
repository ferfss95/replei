import { stripAccents } from "../utils/searchNormalize";

/** Cartões em destaque (protótipo) — inspirados em hubs de ajuda tipo Base44. */
export type HelpSpotlight = {
  id: string;
  title: string;
  description: string;
  variant: "orange" | "teal" | "slate";
};

export const HELP_SPOTLIGHTS: HelpSpotlight[] = [
  {
    id: "primeiros-passos",
    title: "Primeiros passos",
    description:
      "Escolha o módulo (Produto, Loja, Indicadores…), defina o período e selecione atributos para montar sua análise no assistente em quatro etapas.",
    variant: "orange",
  },
  {
    id: "jornada-analise",
    title: "Jornada de análise",
    description:
      "Fluxo Seleção → Agrupamento → Exclusão → Resultado: entenda o que cada etapa exige antes de liberar o relatório e as métricas do painel lateral.",
    variant: "teal",
  },
  {
    id: "dados-prototipo",
    title: "Dados e protótipo",
    description:
      "Valores exibidos são simulados para demonstração. Definições oficiais, SLAs e governança seguirão a camada de dados da operação.",
    variant: "slate",
  },
];

/** Ações rápidas (protótipo) — estilo lista Revolut / Medium. */
export type HelpQuickLink = {
  id: string;
  title: string;
  subtitle: string;
};

export const HELP_QUICK_LINKS: HelpQuickLink[] = [
  {
    id: "relatorios-salvos",
    title: "Relatórios salvos e compartilhamento",
    subtitle: "Em produção: exportação PDF, links compartilháveis e histórico de análises.",
  },
  {
    id: "agrupamento",
    title: "Boas práticas de agrupamento",
    subtitle: "Combine atributos de localização e produto com parcimônia para manter performance e leitura claras.",
  },
  {
    id: "contato-dados",
    title: "Fale com o time de dados",
    subtitle: "Canal interno (mock): dúvidas sobre definições de métricas, PII e acesso ao ambiente analítico.",
  },
];

/** Perguntas frequentes em texto corrido (protótipo). */
export type HelpFaqItem = {
  id: string;
  title: string;
  body: string;
};

export const HELP_FAQ_ITEMS: HelpFaqItem[] = [
  {
    id: "faq-metricas",
    title: "Por que preciso marcar ao menos uma métrica?",
    body: "O passo Resultado monta colunas e gráficos a partir das métricas escolhidas no menu lateral. Sem nenhuma métrica, não há o que agregar nem exportar — o sistema bloqueia a etapa até que exista ao menos uma seleção.",
  },
  {
    id: "faq-comparativo",
    title: "O que é obrigatório no modo comparativo?",
    body: "Além de seleção e agrupamento, é preciso informar o segundo período (ou conjunto de dias/meses) para que a comparação tenha base. O cabeçalho indica o que falta quando o botão Resultado está bloqueado.",
  },
  {
    id: "faq-modulos",
    title: "Os módulos EXTRAVIOS e INDICADORES estão completos?",
    body: "Nesta versão de protótipo, EXTRAVIOS reutiliza parte do catálogo de Produto sem métricas de exposição. INDICADORES possui conjunto próprio de KPIs — use o glossário na seção correspondente para ver descrições e fórmulas de referência.",
  },
  {
    id: "faq-busca-sidebar",
    title: "Como funciona a busca no menu de métricas?",
    body: "O campo ao lado do título Métricas filtra por nome, id ou dica de contexto (tooltip). Os resultados aparecem agrupados nas mesmas seções da sidebar (Venda e Estoque, Exposição, Planejamento, etc.) para você localizar o indicador certo com rapidez.",
  },
];

export function helpSearchHaystack(parts: string[]): string {
  return stripAccents(parts.join(" ").toLowerCase());
}

export function helpSpotlightMatches(spotlight: HelpSpotlight, normQuery: string): boolean {
  if (!normQuery) return true;
  return helpSearchHaystack([spotlight.title, spotlight.description, spotlight.id]).includes(normQuery);
}

export function helpQuickLinkMatches(link: HelpQuickLink, normQuery: string): boolean {
  if (!normQuery) return true;
  return helpSearchHaystack([link.title, link.subtitle, link.id]).includes(normQuery);
}

export function helpFaqMatches(item: HelpFaqItem, normQuery: string): boolean {
  if (!normQuery) return true;
  return helpSearchHaystack([item.title, item.body, item.id]).includes(normQuery);
}
