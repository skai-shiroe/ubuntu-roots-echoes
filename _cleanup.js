const fs = require('fs');
const p = 'c:\\Users\\ksenou\\Desktop\\LABO_DEV\\ANTIGRAVITY\\afrikaviwo\\vite.config.ts';
let c = fs.readFileSync(p, 'utf8');
// Remove extra blank line (double blank line -> single blank line)
c = c.replace(/\n{3,}/g, '\n\n');
// Remove .filter(Boolean) since no conditional plugins remain
c = c.replace(/\)\],\s*\.filter\(Boolean\)/g, ')],');
fs.writeFileSync(p, c, 'utf8');
console.log('Done - cleaned vite.config.ts');
