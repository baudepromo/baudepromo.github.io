import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B1wTNOfG.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$MainLayout, a as $$Global } from '../chunks/MainLayout_Cxp42-Ip.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` <link rel="stylesheet" href="/styles/pages/sobre.css"> ${maybeRenderHead()}<div class="hero-section"> <h1>O Baú de Promoções <i class="fa-solid fa-box-open"></i></h1> <p>Sua curadoria inteligente de achadinhos em 2026.</p> </div> <div class="container"> <main class="content-grid"> <section class="about-card"> <h2><i class="fa-solid fa-bolt" style="color: #ff9000;"></i> O que fazemos?</h2> <p>O <strong>Baú de Promoções</strong> nasceu da necessidade de filtrar o caos da internet. Com milhares de produtos sendo lançados diariamente no TikTok, Instagram, Shopee e Amazon, é fácil se perder em ofertas falsas ou produtos de baixa qualidade.</p> <p>Nossa missão é vasculhar as maiores lojas online para encontrar aqueles "tesouros escondidos" que realmente valem o seu dinheiro. Testamos tendências, analisamos avaliações reais e só compartilhamos o que nós mesmos compraríamos.</p> <div class="mission-vision"> <div class="box"> <h3><i class="fa-solid fa-bullseye"></i> Missão</h3> <p>Economizar o seu tempo e dinheiro com indicações honestas e verificadas.</p> </div> <div class="box"> <h3><i class="fa-solid fa-heart"></i> Valores</h3> <p>Transparência total, segurança nos links e curadoria 100% humana.</p> </div> </div> </section> <section class="about-card" style="text-align: center;"> <h2><i class="fa-solid fa-shield-halved"></i> Por que confiar em nós?</h2> <p>Diferente de grupos automáticos de ofertas (robôs), cada item postado no Baú passa por uma verificação humana.</p> <p>Verificamos a reputação do vendedor, o histórico de preços e a veracidade dos cupons. Apoiamos a nossa comunidade e acreditamos que boas compras podem transformar o seu dia a dia.</p> <a href="/" class="pill-btn btn-action">
Voltar para as Ofertas <i class="fa-solid fa-arrow-right"></i> </a> </section> </main> </div> ${renderComponent($$result2, "Global", $$Global, {})} ` })}`;
}, "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/pages/sobre/index.astro", void 0);

const $$file = "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/pages/sobre/index.astro";
const $$url = "/sobre";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
