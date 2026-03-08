// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react'; // <--- Importe o React
import path from 'path';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@lib': path.resolve('./src/lib'),
      },
    },
  },
  site: 'https://baudepromocao.vercel.app',
  output: 'server',
  adapter: vercel({
    imageService: true, // Recomendado ativar para manipulação de imagem
  }),
  integrations: [sitemap(), // <--- Adicione aqui
  react(), partytown()],
});