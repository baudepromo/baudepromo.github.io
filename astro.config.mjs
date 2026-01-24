// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Coloque seu domínio real aqui
  site: 'https://baudepromocao.vercel.app',

  integrations: [sitemap()]
});