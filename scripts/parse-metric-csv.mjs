import fs from 'fs';
import path from 'path';

const csvPath =
  process.argv[2] ||
  'c:/Users/Odyssey/Downloads/[Métricas] Lista Geral (1).csv';

function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') inQuotes = false;
      else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\r') continue;
    else if (c === '\n') {
      row.push(field);
      if (row.some((x) => x.trim())) rows.push(row);
      row = [];
      field = '';
    } else field += c;
  }
  if (field || row.length) {
    row.push(field);
    if (row.some((x) => x.trim())) rows.push(row);
  }
  return rows;
}

function normalizeNome(n) {
  return n.trim().replace(/\s+/g, ' ').toLowerCase();
}

/** Espelha `summarizeMetricDefinition` em metricOrientation.ts */
function summarizeDefinition(text, maxLen = 220) {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  if (cleaned.length <= maxLen) return cleaned;

  const sentences = cleaned.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [cleaned];
  let out = '';
  for (const s of sentences) {
    const next = (out ? `${out} ` : '') + s.trim();
    if (next.length > maxLen) break;
    out = next;
  }
  if (out.length >= 40) return out.trim();

  const cut = cleaned.slice(0, maxLen - 1).trimEnd();
  const lastSpace = cut.lastIndexOf(' ');
  return `${lastSpace > 80 ? cut.slice(0, lastSpace) : cut}…`;
}

const raw = fs.readFileSync(csvPath, 'utf8');
const rows = parseCSV(raw);
const header = rows[0].map((h) => h.trim().toUpperCase());
const nomeIdx = header.indexOf('NOME');
const defIdx = header.indexOf('DEFINIÇÃO');

console.error('rows parsed:', rows.length, 'nomeIdx', nomeIdx, 'defIdx', defIdx);

const byNome = new Map();
for (let i = 1; i < rows.length; i++) {
  const nome = (rows[i][nomeIdx] || '').trim().replace(/\s+/g, ' ');
  const def = (rows[i][defIdx] || '').trim().replace(/\s+/g, ' ');
  if (!nome || !def) continue;
  byNome.set(normalizeNome(nome), def);
}
console.error('byNome size', byNome.size);

const namingPath = path.resolve('src/app/data/metricNaming.ts');
const namingSrc = fs.readFileSync(namingPath, 'utf8');

function parseMetricNamingEntries(src) {
  const entries = [];
  const blocks = src.split(/(?=^\s+\w+:\s*\{)/m);
  for (const block of blocks) {
    const m = block.match(/^\s+(\w+):\s*\{[\s\S]*?sidebar:\s*'([^']+)'/);
    if (m) entries.push([m[1], m[2]]);
  }
  return entries;
}

const idSidebarPairs = parseMetricNamingEntries(namingSrc);

const definitions = {};
const missing = [];
for (const [id, sidebar] of idSidebarPairs) {
  const key = normalizeNome(sidebar);
  let def = byNome.get(key);
  if (!def) {
    // try without trailing punctuation variants
    for (const [k, v] of byNome) {
      if (k === key || k.replace(/\s/g, '') === key.replace(/\s/g, '')) {
        def = v;
        break;
      }
    }
  }
  if (!def) {
    missing.push({ id, sidebar });
    continue;
  }
  definitions[id] = summarizeDefinition(def);
}

const outPath = path.resolve('src/app/data/metricDefinitions.ts');
const lines = [
  '/**',
  ' * Definições oficiais das métricas (coluna DEFINIÇÃO — [Métricas] Lista Geral.csv).',
  ' * Textos longos são resumidos para exibição na tooltip da sidebar.',
  ' */',
  '',
  "export const METRIC_DEFINITIONS: Record<string, string> = {",
];
for (const [id, text] of Object.entries(definitions).sort(([a], [b]) => a.localeCompare(b))) {
  const escaped = text.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  lines.push(`  ${id}: '${escaped}',`);
}
lines.push('};', '');
fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
console.error('Wrote', outPath, Object.keys(definitions).length, 'definitions');
if (missing.length) console.error('Missing:', missing.map((m) => m.id).join(', '));
