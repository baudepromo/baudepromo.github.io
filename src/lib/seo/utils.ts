// src/lib/seo-utils.ts
import { SITE_CONFIG } from './constants';

/**
 * Cria uma URL absoluta baseada no domínio configurado.
 * Útil para og:image e canonical URLs.
 */
export function getAbsoluteUrl(path: string = '') {
  const baseUrl = SITE_CONFIG.siteUrl.replace(/\/$/, ''); // Remove barra final se houver
  const cleanPath = path.replace(/^\//, ''); // Remove barra inicial se houver
  return `${baseUrl}/${cleanPath}`;
}

/**
 * Gera o título final. Ex: "Sobre Mim | Meu Site Astro"
 */
export function getPageTitle(title?: string) {
  if (!title) return SITE_CONFIG.title;
  return `${title} | ${SITE_CONFIG.title}`;
}