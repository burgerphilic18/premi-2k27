import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://premi27.iiit-bh.ac.in',
  output: 'static',
  integrations: [
    tailwind()
  ]
});
