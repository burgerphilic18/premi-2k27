import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://burgerphilic18.github.io',
  base: '/premi-2k27/',
  output: 'static',
  integrations: [
    tailwind()
  ]
});
