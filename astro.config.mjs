// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react'; // <--- Importe o React

// https://astro.build/config
export default defineConfig({
  site: 'https://baudepromocao.vercel.app',
  output: 'server',
  adapter: vercel({
    imageService: true, // Recomendado ativar para manipulação de imagem
  }),
  integrations: [
    sitemap(),
    react() // <--- Adicione aqui
  ],
});