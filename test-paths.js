import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pageDataRegistry } from './src/data/pageContent.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST = path.join(__dirname, 'dist');

let errors = 0;
// Test homepage
if (!fs.existsSync(path.join(DIST, 'index.html'))) {
  console.error('Missing index.html');
  errors++;
} else {
  console.log('✓ Verified: / (index.html)');
}

// Test all routes
for (const route of Object.keys(pageDataRegistry)) {
  const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
  const p = path.join(DIST, cleanRoute, 'index.html');
  if (!fs.existsSync(p)) {
    console.error(`Missing file for route: ${route} (${p})`);
    errors++;
  } else {
    const stat = fs.statSync(p);
    console.log(`✓ Verified: ${route} (${stat.size} bytes)`);
  }
}

// Test styles.css
if (!fs.existsSync(path.join(DIST, 'styles.css'))) {
  console.error('Missing styles.css');
  errors++;
} else {
  console.log('✓ Verified: styles.css');
}

if (errors === 0) {
  console.log('\nAll 35+ routes and assets verified successfully!');
} else {
  process.exit(1);
}
