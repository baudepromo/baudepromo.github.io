import { c as createComponent, a as renderHead, d as renderScript, r as renderTemplate } from '../../chunks/astro/server_B1wTNOfG.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="pt-BR" data-astro-cid-imvse3jm> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Mensagem Enviada | Baú de Promoções</title><link rel="icon" href="/favicon.webp">${renderHead()}</head> <body data-astro-cid-imvse3jm> <div class="success-card" data-astro-cid-imvse3jm> <span class="icon-check" data-astro-cid-imvse3jm>✓</span> <h1 data-astro-cid-imvse3jm>Sucesso!</h1> <p data-astro-cid-imvse3jm>Sua mensagem foi enviada para o Baú de Promoções. Responderemos em breve no seu e-mail.</p> <a href="https://baudepromo.github.io/" class="btn-home" data-astro-cid-imvse3jm>Voltar para o Início</a> </div> <div id="footer-placeholder" data-astro-cid-imvse3jm></div> ${renderScript($$result, "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/pages/contatos/sucess/index.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/pages/contatos/sucess/index.astro", void 0);

const $$file = "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/pages/contatos/sucess/index.astro";
const $$url = "/contatos/sucess";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
