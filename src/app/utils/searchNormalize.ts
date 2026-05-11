/** Normaliza texto para busca insensível a acentos (pt-BR). */
export function stripAccents(value: string): string {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
