import type { ModuleConfig } from "../modules/types";

/**
 * Bloco do glossário alinhado às seções do menu lateral de métricas
 * (Venda e Estoque, seções extras, Planejamento; LOJA/INDICADORES: lista única «Métricas»).
 */
export type MetricGlossarySection = {
  key: string;
  title: string;
  subtitle?: string;
  metricIds: string[];
};

function orderIdsByDisplay(config: ModuleConfig, idSet: Set<string>): string[] {
  const ordered: string[] = [];
  for (const id of config.metricDisplayOrder) {
    if (idSet.has(id)) ordered.push(id);
  }
  for (const m of config.metrics) {
    if (idSet.has(m.id) && !ordered.includes(m.id)) ordered.push(m.id);
  }
  return ordered;
}

function orderPlanSectionIds(config: ModuleConfig): string[] {
  const planning = new Set(config.planningMetrics ?? []);
  const ordered: string[] = [];
  for (const id of config.metricDisplayOrder) {
    if (planning.has(id)) ordered.push(id);
  }
  for (const m of config.metrics) {
    if (planning.has(m.id) && !ordered.includes(m.id)) ordered.push(m.id);
  }
  const outras = config.metricsSidebarOutrasAfterPlanning ?? [];
  for (const id of outras) {
    if (!ordered.includes(id)) ordered.push(id);
  }
  return ordered;
}

export function buildMetricGlossarySections(config: ModuleConfig): MetricGlossarySection[] {
  const planning = new Set(config.planningMetrics ?? []);
  const excluded = new Set(config.metricsSidebarExcludeFromVendaEstoque ?? []);
  const vendaIdSet = new Set(
    config.metrics
      .filter((m) => !planning.has(m.id) && !excluded.has(m.id))
      .map((m) => m.id),
  );
  const isFlat = config.id === "LOJA" || config.id === "INDICADORES";

  const sections: MetricGlossarySection[] = [];

  if (vendaIdSet.size > 0) {
    sections.push({
      key: isFlat ? "metricas_flat" : "venda_estoque",
      title: isFlat ? "Métricas" : "Venda e Estoque",
      metricIds: orderIdsByDisplay(config, vendaIdSet),
    });
  }

  const extras = config.metricSidebarExtraSections ?? [];
  extras.forEach((sec, idx) => {
    const gid = sec.sidebarGroupId ?? `metric_extra_${idx}`;
    sec.groups.forEach((group) => {
      const idSet = new Set(group.metricIds);
      const metricIds = orderIdsByDisplay(config, idSet);
      if (metricIds.length > 0) {
        sections.push({
          key: `${gid}__${group.subtitle}`,
          title: sec.title,
          subtitle: group.subtitle,
          metricIds,
        });
      }
    });
  });

  const outrasPlanIds = config.metricsSidebarOutrasAfterPlanning ?? [];
  const hasPlanningBlock = planning.size > 0 || outrasPlanIds.length > 0;
  if (hasPlanningBlock && !isFlat) {
    const planIdSet = new Set<string>([...planning, ...outrasPlanIds]);
    const valid = new Set(config.metrics.map((m) => m.id));
    const planMetricIds = orderPlanSectionIds(config).filter(
      (id) => planIdSet.has(id) && valid.has(id),
    );
    if (planMetricIds.length > 0) {
      const planLabel = config.metricsSidebarPlanningGroupLabel ?? "Planejamento";
      sections.push({
        key: "planejamento",
        title: planLabel,
        metricIds: planMetricIds,
      });
    }
  }

  const assigned = new Set(sections.flatMap((s) => s.metricIds));
  const orphanIds = config.metrics.map((m) => m.id).filter((id) => !assigned.has(id));
  if (orphanIds.length > 0) {
    sections.push({
      key: "demais_metricas",
      title: "Demais métricas",
      metricIds: orderIdsByDisplay(config, new Set(orphanIds)),
    });
  }

  return sections;
}
