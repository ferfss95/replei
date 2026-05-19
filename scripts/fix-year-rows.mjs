import fs from 'fs';

const p =
  'c:/Users/Odyssey/Desktop/REPLEI/(P23) REPLEI - Ajustes pré-versionamento/src/app/components/steps/SelectionView.tsx';

let c = fs.readFileSync(p, 'utf8');

// compYears1: add return wrapper if yearRow exists without return
c = c.replace(
  /(const yearRow = \(\s*<label[\s\S]*?compYears1[\s\S]*?<\/label>\s*\);\s*)(return \(\s*<label)/,
  '$1',
);

// Fix compYears1 block ending: after yearRow closing ); before }, in compYears1 section
c = c.replace(
  /(const yearRow = \([\s\S]*?<\/label>\s*\);\s*)(\s*\);\s*\n\s*\},\s*\n\s*\)\}\s*\n\s*<\/div>\s*\n\s*<\/motion.div>\s*\n\s*\n\s*{\/\* Period 2 - Yearly)/,
  `$1
                                                  return (
                                                    <PeriodBlockedOptionTooltip
                                                      key={year}
                                                      blocked={yearBlocked}
                                                    >
                                                      {yearRow}
                                                    </PeriodBlockedOptionTooltip>
                                                  );
                                                },
                                              )}
                                            </div>
                                          </div>

                                          {/* Period 2 - Yearly`,
);

// compYears2: add yearBlocked + yearRow pattern
c = c.replace(
  /const isChecked =\s*compYears2\.includes\(\s*year,\s*\);\s*return \(\s*<label/g,
  `const isChecked =
                                                    compYears2.includes(
                                                      year,
                                                    );
                                                  const yearBlocked =
                                                    isYearPeriodBlocked(
                                                      year,
                                                      analysisMode,
                                                    );
                                                  const yearRow = (
                                                    <label`,
);

c = c.replace(
  /(compYears2\.includes[\s\S]*?onClick=\{[\s\S]*?e\.preventDefault\(\);\s*)if \(\s*isChecked\s*\)/,
  '$1if (yearBlocked) return;\n                                                          if (isChecked)',
);

fs.writeFileSync(p, c);
console.log('patched year rows');
