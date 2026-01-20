import { c as createComponent, e as createAstro, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B1wTNOfG.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$MainLayout, a as $$Global } from '../chunks/MainLayout_Cxp42-Ip.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero-section"> <h1>As Melhores Ofertas do Dia!</h1> <p>Curadoria exclusiva de produtos, cupons e achadinhos da internet.</p> <div class="hero-buttons"> <a href="/achadinhos" class="pill-btn btn-white"> <i class="fa-solid fa-wand-magic-sparkles"></i> Achadinhos
</a> <a href="/produtos" class="pill-btn btn-black"> <i class="fa-solid fa-box-open"></i> Produtos
</a> <a href="/cupons" class="pill-btn btn-yellow"> <i class="fa-solid fa-ticket"></i> Cupons
</a> </div> </section> <main class="main-content"> <h2 class="section-title">Destaques da Semana</h2> <div class="cards-grid"> <a href="/achadinhos" class="card"> <img src="/assets/img/achadinhos.webp" alt="Achadinhos Shopee"> <h3>Achadinhos Shopee</h3> <span>Ver Coleção</span> </a> <a href="/produtos" class="card"> <img src="/assets/img/logistics.webp" alt="Produtos em Alta"> <h3>Ofertas Amazon</h3> <span>Ver Ofertas</span> </a> <a href="/cupons" class="card"> <img src="/assets/img/promo.webp" alt="Cupons de Desconto"> <h3>Cupons do Dia</h3> <span>Pegar Cupom</span> </a> <a href="/produtos" class="card"> <img src="https://via.placeholder.com/300x200?text=Viral+TikTok" alt="Viral"> <h3>Virais do TikTok</h3> <span>Ver Mais</span> </a> </div> </main> <section style="background: white; padding: 40px 20px; text-align: center; margin-top: 40px;"> <h2 style="font-size: 1.5rem; margin-bottom: 20px;">Dúvidas Frequentes</h2> <p style="max-width: 600px; margin: 0 auto; color: #666;">
O Baú de Promoções seleciona manualmente as melhores ofertas. Todos os links são verificados e direcionam para lojas oficiais como Shopee, Amazon e AliExpress.
</p> </section> ${renderComponent($$result2, "Global", $$Global, {})} ` })}`;
}, "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/pages/index.astro", void 0);

const $$file = "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
