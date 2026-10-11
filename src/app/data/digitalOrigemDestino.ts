/**
 * CANAL Digital — Origem do faturamento × Destino do pedido.
 *
 * Quando um canal digital ou de Encomenda Expressa está selecionado (Digital
 * Centauro / Digital Nike / Encomenda Expressa 1P e 3P, em todos os módulos), o
 * usuário escolhe como ler os atributos de localização:
 * - ORIGEM: onde o item foi faturado — lojas (Ship from Store, Pickup…) + CDs.
 *   ESTADO/CIDADE/LOJA passam a incluir os CDs de faturamento.
 * - DESTINO (padrão): onde o pedido foi entregue ao cliente. ESTADO/CIDADE viram
 *   a praça de entrega (inclui cidades sem loja) e LOJA/REGIONAL/NACIONAL não se
 *   aplicam (ficam bloqueados).
 */
import { CIDADES_BY_ESTADO, ESTADOS_LIST, STATE_TO_UF } from "../referenceData";
import {
  CANAIS_DIGITAIS as CANAIS_DIGITAIS_LISTA,
  CANAL_CENTAURO_OPTIONS,
  CANAL_EE_1P,
  CANAL_EE_3P,
  CANAL_NIKE_OPTIONS,
} from "./canalOmni";

export type DigitalModo = "origem" | "destino";

/** Padrão com canal Digital marcado (só Encomenda Expressa → "origem", ver getDigitalModoPadrao). */
export const DIGITAL_MODO_DEFAULT: DigitalModo = "destino";

export const DIGITAL_MODO_LABEL: Record<DigitalModo, string> = {
  origem: "Origem",
  destino: "Destino",
};

export const DIGITAL_MODO_DESCRICAO: Record<DigitalModo, string> = {
  origem: "Origem do faturamento",
  destino: "Destino do pedido",
};

/** Canais que pedem a escolha Origem/Destino: Digital Centauro/Nike e Encomenda Expressa. */
const CANAIS_COM_ORIGEM_DESTINO = new Set([...CANAIS_DIGITAIS_LISTA, CANAL_EE_1P, CANAL_EE_3P]);

export function isCanalComOrigemDestino(canal: string): boolean {
  return CANAIS_COM_ORIGEM_DESTINO.has(canal);
}

export function isDigitalSelecionado(selections: Record<string, string[]>): boolean {
  return (selections.canal || []).some(isCanalComOrigemDestino);
}

const CANAIS_SOMENTE_DIGITAL = new Set(CANAIS_DIGITAIS_LISTA);

/**
 * Padrão da escolha enquanto o usuário não altera manualmente:
 * - com Digital Centauro / Digital Nike marcado → Destino;
 * - só Encomenda Expressa → Origem (a venda é atrelada à loja que fatura).
 */
export function getDigitalModoPadrao(selections: Record<string, string[]>): DigitalModo {
  const temDigital = (selections.canal || []).some((c) => CANAIS_SOMENTE_DIGITAL.has(c));
  return temDigital ? "destino" : "origem";
}

/** Atributos sem sentido para o destino de entrega (bloqueados no modo Destino). */
export const ATRIBUTOS_BLOQUEADOS_DESTINO: ReadonlySet<string> = new Set([
  "loja",
  "regional",
  "nacional",
]);

export function isAtributoBloqueadoDigital(
  attrId: string,
  ativo: boolean,
  modo: DigitalModo,
): boolean {
  return ativo && modo === "destino" && ATRIBUTOS_BLOQUEADOS_DESTINO.has(attrId);
}

// ── Origem: CDs que faturam pedidos digitais ──────────────────

interface CdFaturamento {
  nome: string;
  cidade: string;
  estado: string;
  rede: "Centauro" | "Fisia";
}

export const CDS_FATURAMENTO: CdFaturamento[] = [
  { nome: "CD Centauro - Jarinu", cidade: "Jarinu", estado: "São Paulo", rede: "Centauro" },
  { nome: "CD Centauro - Extrema", cidade: "Extrema", estado: "Minas Gerais", rede: "Centauro" },
  { nome: "CD Fisia - Extrema", cidade: "Extrema", estado: "Minas Gerais", rede: "Fisia" },
  { nome: "CDS Lapa - SP", cidade: "São Paulo", estado: "São Paulo", rede: "Centauro" },
  { nome: "CDS João Pessoa - PB", cidade: "João Pessoa", estado: "Paraíba", rede: "Centauro" },
  { nome: "CDS Rio - RJ", cidade: "Rio de Janeiro", estado: "Rio de Janeiro", rede: "Centauro" },
  { nome: "CDS Itajaí - SC", cidade: "Itajaí", estado: "Santa Catarina", rede: "Centauro" },
];

const CD_POR_NOME = new Map(CDS_FATURAMENTO.map((cd) => [cd.nome, cd]));

export function isCdFaturamento(value: string): boolean {
  return CD_POR_NOME.has(value);
}

// ── Destino: praças de entrega (inclui cidades sem loja) ──────

const CIDADES_ENTREGA_EXTRAS: Record<string, string[]> = {
  "Acre": ["Cruzeiro do Sul"],
  "Alagoas": ["Penedo", "Palmeira dos Índios"],
  "Amapá": ["Macapá", "Santana"],
  "Amazonas": ["Parintins", "Itacoatiara"],
  "Bahia": ["Ilhéus", "Barreiras", "Porto Seguro"],
  "Ceará": ["Sobral", "Crato"],
  "Distrito Federal": ["Ceilândia", "Águas Claras"],
  "Espírito Santo": ["Serra", "Cachoeiro de Itapemirim"],
  "Goiás": ["Rio Verde", "Catalão"],
  "Maranhão": ["Caxias", "Codó"],
  "Mato Grosso": ["Sinop", "Rondonópolis"],
  "Mato Grosso do Sul": ["Dourados", "Três Lagoas"],
  "Minas Gerais": ["Governador Valadares", "Poços de Caldas", "Teófilo Otoni"],
  "Pará": ["Marabá", "Altamira"],
  "Paraíba": ["Patos", "Sousa"],
  "Paraná": ["Guarapuava", "Paranaguá"],
  "Pernambuco": ["Garanhuns", "Serra Talhada"],
  "Piauí": ["Parnaíba", "Picos"],
  "Rio de Janeiro": ["Angra dos Reis", "Cabo Frio", "Petrópolis"],
  "Rio Grande do Norte": ["Caicó", "Parnamirim"],
  "Rio Grande do Sul": ["Uruguaiana", "Santa Rosa"],
  "Rondônia": ["Ji-Paraná", "Ariquemes"],
  "Roraima": ["Rorainópolis"],
  "Santa Catarina": ["Lages", "Jaraguá do Sul"],
  "Sergipe": ["Lagarto", "Itabaiana"],
  "São Paulo": ["Registro", "Ourinhos", "Botucatu"],
  "Tocantins": ["Araguaína", "Gurupi"],
};

const uniqSorted = (list: string[]) =>
  Array.from(new Set(list)).sort((a, b) => a.localeCompare(b, "pt-BR"));

/** Cidades de entrega por estado: cidades com loja + praças sem loja. */
export const CIDADES_DESTINO_BY_ESTADO: Record<string, string[]> = (() => {
  const out: Record<string, string[]> = {};
  const estados = new Set([
    ...Object.keys(CIDADES_BY_ESTADO),
    ...Object.keys(CIDADES_ENTREGA_EXTRAS),
  ]);
  estados.forEach((estado) => {
    out[estado] = uniqSorted([
      ...(CIDADES_BY_ESTADO[estado] || []),
      ...(CIDADES_ENTREGA_EXTRAS[estado] || []),
    ]);
  });
  return out;
})();

const ESTADOS_DESTINO = uniqSorted([...ESTADOS_LIST, ...Object.keys(CIDADES_DESTINO_BY_ESTADO)]);

const UF_EXTRAS: Record<string, string> = { "Amapá": "AP" };
const ufDe = (estado: string) => STATE_TO_UF[estado] || UF_EXTRAS[estado] || "";

/** Cidades com loja (praças conhecidas pelos filtros de loja/rede). */
const CIDADES_COM_LOJA = new Set(Object.values(CIDADES_BY_ESTADO).flat());

/** Cidades com loja ou CD (usadas para saber o que é exclusivo do Destino). */
const CIDADES_COM_LOJA_OU_CD = new Set([
  ...CIDADES_COM_LOJA,
  ...CDS_FATURAMENTO.map((cd) => cd.cidade),
]);

// ── Formato dos valores por módulo ────────────────────────────
// PRODUTO usa "Cidade - UF" / "Estado - UF"; demais módulos usam o nome puro.

const usaUf = (moduleId: string) => moduleId === "PRODUTO";

const fmtCidade = (moduleId: string, cidade: string, estado: string) =>
  usaUf(moduleId) ? `${cidade} - ${ufDe(estado)}` : cidade;

const fmtEstado = (moduleId: string, estado: string) =>
  usaUf(moduleId) ? `${estado} - ${ufDe(estado)}` : estado;

/** "Cidade - UF" → "Cidade"; "Estado - UF" → "Estado". */
const nomeBase = (value: string) => value.split(" - ")[0].trim();

const estadoDaCidadeDestino = (cidade: string): string[] =>
  Object.entries(CIDADES_DESTINO_BY_ESTADO)
    .filter(([, cidades]) => cidades.includes(cidade))
    .map(([estado]) => estado);

/** Cidade selecionada que só existe como praça de entrega (sem loja/CD). */
function isCidadeSoDestino(value: string): boolean {
  return !CIDADES_COM_LOJA_OU_CD.has(nomeBase(value));
}

// ── Seleções "neutras" para os filtros de loja/rede existentes ─

/**
 * Remove das seleções o que os filtros baseados em loja não conhecem:
 * - Origem: CDs no atributo LOJA e cidades que só têm CD (tratados à parte);
 * - Destino: a localização é do cliente (desacoplada de loja/rede).
 */
export function selecoesParaFiltrosDeLoja(
  selections: Record<string, string[]>,
  ativo: boolean,
  modo: DigitalModo,
): Record<string, string[]> {
  if (!ativo) return selections;
  if (modo === "origem") {
    const loja = selections.loja || [];
    const cidade = selections.cidade || [];
    const cidadeSoCd = (c: string) => !CIDADES_COM_LOJA.has(nomeBase(c));
    if (!loja.some(isCdFaturamento) && !cidade.some(cidadeSoCd)) return selections;
    return {
      ...selections,
      loja: loja.filter((l) => !isCdFaturamento(l)),
      cidade: cidade.filter((c) => !cidadeSoCd(c)),
    };
  }
  const { estado: _e, cidade: _c, loja: _l, regional: _r, nacional: _n, ...resto } =
    selections;
  return resto;
}

// ── Opções de ESTADO / CIDADE / LOJA no modo digital ──────────

const cdsCompativeis = (selections: Record<string, string[]>): CdFaturamento[] => {
  // CDs não pertencem a regional/nacional: qualquer seleção nesses atributos os exclui.
  if ((selections.regional || []).length > 0 || (selections.nacional || []).length > 0) {
    return [];
  }
  const redes = selections.rede || [];
  // Rede implícita no canal (Todos Centauro → Centauro; Todos NIKE → Fisia).
  const canais = selections.canal || [];
  const redesDoCanal = new Set<string>();
  canais.forEach((c) => {
    if (CANAL_CENTAURO_OPTIONS.includes(c)) redesDoCanal.add("Centauro");
    if (CANAL_NIKE_OPTIONS.includes(c)) redesDoCanal.add("Fisia");
  });
  const estados = new Set((selections.estado || []).map(nomeBase));
  const cidades = new Set((selections.cidade || []).map(nomeBase));
  return CDS_FATURAMENTO.filter(
    (cd) =>
      (redes.length === 0 || redes.includes(cd.rede)) &&
      (redesDoCanal.size === 0 || redesDoCanal.has(cd.rede)) &&
      (estados.size === 0 || estados.has(cd.estado)) &&
      (cidades.size === 0 || cidades.has(cd.cidade)),
  );
};

/**
 * Ajusta as opções já calculadas pelos filtros de loja (com
 * `selecoesParaFiltrosDeLoja`) para a leitura Origem/Destino do digital.
 */
export function ajustarOpcoesDigital(
  attrId: string,
  options: string[],
  selections: Record<string, string[]>,
  ativo: boolean,
  modo: DigitalModo,
  moduleId: string,
): string[] {
  if (!ativo) return options;

  if (modo === "destino") {
    if (ATRIBUTOS_BLOQUEADOS_DESTINO.has(attrId)) return [];
    if (attrId === "estado") {
      const cidadesSel = (selections.cidade || []).map(nomeBase);
      const estados = cidadesSel.length
        ? uniqSorted(cidadesSel.flatMap(estadoDaCidadeDestino))
        : ESTADOS_DESTINO;
      return estados.map((e) => fmtEstado(moduleId, e));
    }
    if (attrId === "cidade") {
      const estadosSel = (selections.estado || []).map(nomeBase);
      const estados = estadosSel.length ? estadosSel : Object.keys(CIDADES_DESTINO_BY_ESTADO);
      const out = estados.flatMap((e) =>
        (CIDADES_DESTINO_BY_ESTADO[e] || []).map((c) => fmtCidade(moduleId, c, e)),
      );
      return uniqSorted(out);
    }
    return options;
  }

  // Origem: lojas (já filtradas) + CDs de faturamento.
  const lojaSel = selections.loja || [];
  const cdsSel = lojaSel.filter(isCdFaturamento).map((n) => CD_POR_NOME.get(n)!);
  const lojasSel = lojaSel.filter((l) => !isCdFaturamento(l));
  const cidadesSel = (selections.cidade || []).map(nomeBase);
  // Só CDs na LOJA (ou só cidades sem loja, ex.: Jarinu): localização e rede se
  // restringem às praças desses CDs, e não há regional/nacional.
  const somenteCds =
    (cdsSel.length > 0 && lojasSel.length === 0) ||
    (cidadesSel.length > 0 && cidadesSel.every((c) => !CIDADES_COM_LOJA.has(c)));
  const cdsDaSelecao = cdsSel.length ? cdsSel : cdsCompativeis(selections);

  if (attrId === "loja") {
    const cds = cdsCompativeis(selections).map((cd) => cd.nome);
    return [...cds, ...(somenteCds ? [] : options.filter((o) => !isCdFaturamento(o)))];
  }
  if (attrId === "cidade") {
    const fonteCds = cdsSel.length ? cdsSel : cdsCompativeis({ ...selections, cidade: [] });
    const cdCidades = fonteCds.map((cd) => fmtCidade(moduleId, cd.cidade, cd.estado));
    return uniqSorted([...(somenteCds ? [] : options), ...cdCidades]);
  }
  if (attrId === "estado") {
    const fonteCds = cdsSel.length ? cdsSel : cdsCompativeis({ ...selections, estado: [] });
    const cdEstados = fonteCds.map((cd) => fmtEstado(moduleId, cd.estado));
    return uniqSorted([...(somenteCds ? [] : options), ...cdEstados]);
  }
  if (somenteCds) {
    if (attrId === "rede") {
      const redes = new Set(cdsDaSelecao.map((cd) => cd.rede));
      return options.filter((o) => redes.has(o));
    }
    if (attrId === "regional" || attrId === "nacional") return [];
  }
  return options;
}

/**
 * Drill da tabela no modo digital: restringe o filho pelo pai usando as relações
 * de Origem (CDs) ou Destino (praças de entrega). `opcoesPadrao` é o resultado de
 * `applyParentContextToOptions` (relações de loja), `opcoesBase` é a lista antes dele.
 */
export function aplicarContextoPaiDigital(
  childAttrId: string,
  parentContext: Record<string, string>,
  opcoesBase: string[],
  opcoesPadrao: string[],
  ativo: boolean,
  modo: DigitalModo,
): string[] {
  if (!ativo) return opcoesPadrao;
  const estadoPai = parentContext.estado ? nomeBase(parentContext.estado) : null;
  const cidadePai = parentContext.cidade ? nomeBase(parentContext.cidade) : null;

  if (modo === "destino") {
    // Localização do cliente: só a relação estado ↔ cidade vale.
    if (childAttrId === "cidade") {
      if (!estadoPai) return opcoesBase;
      const cidades = new Set(CIDADES_DESTINO_BY_ESTADO[estadoPai] || []);
      return opcoesBase.filter((o) => cidades.has(nomeBase(o)));
    }
    if (childAttrId === "estado") {
      if (!cidadePai) return opcoesBase;
      const estados = new Set(estadoDaCidadeDestino(cidadePai));
      return opcoesBase.filter((o) => estados.has(nomeBase(o)));
    }
    return opcoesPadrao;
  }

  // Origem: mantém as relações de loja e devolve os CDs/praças compatíveis com o pai.
  const cdPai = parentContext.loja ? CD_POR_NOME.get(parentContext.loja) : undefined;
  const cdAtende = (cd: CdFaturamento) =>
    (!estadoPai || cd.estado === estadoPai) &&
    (!cidadePai || cd.cidade === cidadePai) &&
    (!parentContext.rede || cd.rede === parentContext.rede) &&
    (!parentContext.canal ||
      (CANAL_CENTAURO_OPTIONS.includes(parentContext.canal)
        ? cd.rede === "Centauro"
        : CANAL_NIKE_OPTIONS.includes(parentContext.canal)
          ? cd.rede === "Fisia"
          : true)) &&
    !parentContext.regional &&
    !parentContext.nacional;

  // Pai é uma cidade sem loja (só CD, ex.: Jarinu): só os CDs dela.
  if (cidadePai && !CIDADES_COM_LOJA.has(cidadePai)) {
    const cdsDaCidade = CDS_FATURAMENTO.filter((cd) => cd.cidade === cidadePai);
    if (childAttrId === "loja") {
      const nomes = new Set(cdsDaCidade.map((cd) => cd.nome));
      return opcoesBase.filter((o) => nomes.has(o));
    }
    if (childAttrId === "rede") {
      const redes = new Set(cdsDaCidade.map((cd) => cd.rede));
      return opcoesBase.filter((o) => redes.has(o));
    }
    if (childAttrId === "regional" || childAttrId === "nacional") return [];
  }

  if (cdPai) {
    // Pai é um CD: só a própria praça/rede dele.
    if (childAttrId === "cidade") {
      return opcoesBase.filter((o) => nomeBase(o) === cdPai.cidade);
    }
    if (childAttrId === "estado") {
      return opcoesBase.filter((o) => nomeBase(o) === cdPai.estado);
    }
    if (childAttrId === "rede") return opcoesBase.filter((o) => o === cdPai.rede);
    if (childAttrId === "regional" || childAttrId === "nacional") return [];
  }

  if (childAttrId === "loja") {
    const cds = new Set(CDS_FATURAMENTO.filter(cdAtende).map((cd) => cd.nome));
    const padrao = new Set(opcoesPadrao);
    return opcoesBase.filter((o) => (isCdFaturamento(o) ? cds.has(o) : padrao.has(o)));
  }
  if (childAttrId === "cidade" || childAttrId === "estado") {
    const cdsDoPai = CDS_FATURAMENTO.filter(cdAtende);
    const extra = new Set(
      cdsDoPai.map((cd) => (childAttrId === "cidade" ? cd.cidade : cd.estado)),
    );
    const padrao = new Set(opcoesPadrao);
    return opcoesBase.filter((o) => padrao.has(o) || extra.has(nomeBase(o)));
  }
  return opcoesPadrao;
}

// ── Limpeza das seleções ao mudar de modo ─────────────────────

/**
 * Remove o que deixou de valer no modo atual:
 * - Destino: LOJA/REGIONAL/NACIONAL;
 * - fora do Origem: CDs no atributo LOJA;
 * - fora do Destino: cidades que só existem como praça de entrega.
 * Retorna o mesmo objeto quando nada muda.
 */
export function limparSelecoesDigital(
  values: Record<string, string[]>,
  ativo: boolean,
  modo: DigitalModo,
): Record<string, string[]> {
  const origem = ativo && modo === "origem";
  const destino = ativo && modo === "destino";
  let changed = false;
  const out: Record<string, string[]> = {};
  Object.entries(values).forEach(([attrId, vals]) => {
    let kept = vals;
    if (destino && ATRIBUTOS_BLOQUEADOS_DESTINO.has(attrId)) kept = [];
    else if (attrId === "loja" && !origem) kept = vals.filter((v) => !isCdFaturamento(v));
    else if (attrId === "cidade" && !destino) kept = vals.filter((v) => !isCidadeSoDestino(v));
    if (kept.length !== vals.length) changed = true;
    out[attrId] = kept;
  });
  return changed ? out : values;
}
