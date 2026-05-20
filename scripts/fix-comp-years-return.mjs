import fs from 'fs';

const path = 'src/app/components/steps/SelectionView.tsx';
let s = fs.readFileSync(path, 'utf8');
const nl = s.includes('\r\n') ? '\r\n' : '\n';

const returnSnippet = `${nl}                                                  return (${nl}                                                    <PeriodBlockedOptionTooltip${nl}                                                      key={year}${nl}                                                      blocked={yearBlocked}${nl}                                                    >${nl}                                                      {yearRow}${nl}                                                    </PeriodBlockedOptionTooltip>${nl}                                                  );`;

const brokenEnd = `                                                    </label>${nl}                                                  );${nl}                                                },${nl}                                              )}`;

const fixedEnd = `                                                    </label>${nl}                                                  );${returnSnippet}${nl}                                                },${nl}                                              )}`;

function fixBlock(startMarker, endMarker) {
  const start = s.indexOf(startMarker);
  const end = s.indexOf(endMarker, start);
  if (start === -1 || end === -1) return false;
  const block = s.slice(start, end);
  if (!block.includes('const yearRow =')) return false;
  if (block.includes('return (' + nl + '                                                    <PeriodBlockedOptionTooltip'))
    return false;
  const idx = s.indexOf(brokenEnd, start);
  if (idx === -1 || idx >= end) return false;
  s = s.slice(0, idx) + fixedEnd + s.slice(idx + brokenEnd.length);
  return true;
}

const n1 = fixBlock('compYears1.includes', 'Period 2 - Yearly multi-select');
const n2 = fixBlock('compYears2.includes', '{/* Footer com frases informativas */}');

fs.writeFileSync(path, s);
console.log('Fixed compYears1:', n1, 'compYears2:', n2);
