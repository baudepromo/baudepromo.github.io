import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B1wTNOfG.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$MainLayout, a as $$Global } from '../chunks/MainLayout_Cxp42-Ip.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` <link rel="stylesheet" href="/styles/pages/contatos.css"> <link rel="stylesheet" href="/styles/variables.css"> <link rel="stylesheet" href="/styles/global.css"> <link rel="stylesheet" href="/styles/layout.css"> ${maybeRenderHead()}<div class="container"> <div class="contact-info"> <h1>Fale Conosco 💬</h1> <p>Tem alguma dúvida, sugestão de produto ou proposta de parceria? Escolha o canal de sua preferência ou nos envie uma mensagem.</p> <div class="social-links"> <a href="https://www.instagram.com/baudepromocaos" class="social-item" target="_blank"> <span>📸 Instagram</span> </a> <a href="https://www.tiktok.com/@baudepromocoes" class="social-item" target="_blank"> <span>🎵 TikTok</span> </a> <a href="https://x.com/baudepromocao" class="social-item" target="_blank"> <span>🐧 X (Twitter)</span> </a> <a href="https://www.youtube.com/@Ba%C3%BAdePromo%C3%A7%C3%B5es" class="social-item" target="_blank"> <span>▶️ Youtube</span> </a> <a href="mailto:baudepromocao@gmail.com" class="social-item"> <span>📧 baudepromocao@gmail.com</span> </a> </div> <a href="/" class="back-link">← Voltar para a vitrine</a> </div> <div class="contact-form"> <form action="https://formsubmit.co/baudepromocao@gmail.com" method="POST"> <input type="hidden" name="_captcha" value="false"> <input type="hidden" name="_next" value="./sucesso"> <div class="form-group"> <label for="name">Nome Completo</label> <input type="text" name="name" id="name" placeholder="Digite seu nome" required> </div> <div class="form-group"> <label for="email">E-mail</label> <input type="email" name="email" id="email" placeholder="seu@email.com" required> </div> <div class="form-group"> <label for="message">Mensagem</label> <textarea name="message" id="message" rows="5" placeholder="Como podemos ajudar?" required></textarea> </div> <button type="submit" class="btn-send">Enviar Mensagem</button> </form> </div> </div> ${renderComponent($$result2, "Global", $$Global, {})} ` })}`;
}, "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/pages/contatos/index.astro", void 0);

const $$file = "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/pages/contatos/index.astro";
const $$url = "/contatos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
