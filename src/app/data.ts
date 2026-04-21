import { LucideIcon } from "lucide-react";

export interface SalesData {
  id: string;
  rede: string;
  vlr_vd: number;
  cmv: number;
  lucro_bruto: number;
  margem: number;
}

export const MOCK_DATA: SalesData[] = [
  { id: "1", rede: "ALMAX SPORTS", vlr_vd: 117557.77, cmv: 59499.60, lucro_bruto: 58058.17, margem: 49.38 },
  { id: "2", rede: "BY TENNIS", vlr_vd: 2595647.86, cmv: 1359853.10, lucro_bruto: 1235794.76, margem: 47.61 },
  { id: "3", rede: "CENTAURO", vlr_vd: 35334865.41, cmv: 17240401.43, lucro_bruto: 18094463.98, margem: 51.21 },
  { id: "4", rede: "CENTAURO VIRTUAL", vlr_vd: 2692813.76, cmv: 1566997.16, lucro_bruto: 1125816.60, margem: 41.81 },
  { id: "5", rede: "NIKE STORE", vlr_vd: 849262.60, cmv: 414961.39, lucro_bruto: 434301.21, margem: 51.14 },
];

export const FILTERS = [
  "CATEGORIA", "MODALIDADE", "LINHA", "GRUPO", "SUBGRUPO", "CLASSE", "MARCA", "MODELO", "MATERIAL"
];

export const METRICS = [
  { id: "vlr_vd", label: "Vlr_Vd", name: "Valor Venda" },
  { id: "dolar", label: "Dolar", name: "Dólar" },
  { id: "qtd_itens", label: "Qtd_Itens", name: "Qtd. Itens" },
  { id: "cmv", label: "CMV", name: "Custo Merc. Vendida" },
  { id: "cmv_u", label: "CMV_U", name: "CMV Unitário" },
  { id: "vlr_md_itens", label: "Vlr_Md_Itens", name: "Vlr. Médio Itens" },
  { id: "lucro_bruto", label: "Lucro_Bruto", name: "Lucro Bruto" },
  { id: "resumo", label: "Resumo", name: "Resumo Geral" },
];
