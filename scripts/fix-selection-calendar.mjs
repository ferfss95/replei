import fs from 'fs';

const p =
  'c:/Users/Odyssey/Desktop/REPLEI/(P23) REPLEI - Ajustes pré-versionamento/src/app/components/steps/SelectionView.tsx';

let c = fs.readFileSync(p, 'utf8');
c = c.replaceAll('`n', '\n');
fs.writeFileSync(p, c);
console.log('Fixed calendar newlines in SelectionView.tsx');
