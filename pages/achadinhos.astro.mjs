import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B1wTNOfG.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$MainLayout, a as $$Global } from '../chunks/MainLayout_Cxp42-Ip.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Achadinhos = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<script>
        // --- L\xD3GICA DOS PRODUTOS (JSON) ---
        let allProducts = [];
        let filteredProducts = [];
        let currentPage = 1;
        const PER_PAGE = 12;

        async function loadProducts() {
            try {
                const res = await fetch('/data/achadinhos.json');
                if (!res.ok) throw new Error("Erro ao buscar JSON");
                const data = await res.json();
                allProducts = data.sort(() => Math.random() - 0.5);
                filteredProducts = [...allProducts];
                render();
            } catch (err) {
                document.getElementById('grid').innerHTML = '<p style="grid-column:1/-1; text-align:center;">Erro ao carregar ofertas.</p>';
            }
        }

        function render() {
            const grid = document.getElementById('grid');
            grid.innerHTML = '';
            const start = (currentPage - 1) * PER_PAGE;
            const end = start + PER_PAGE;

            filteredProducts.slice(start, end).forEach(p => {
                let displayPrice = p.currentPrice || p.price || "0,00";
                grid.insertAdjacentHTML('beforeend', \`
                    <a href="\${p.link}" class="card" target="_blank">
                        <span class="badge">\${p.badge || '\u{1F525} OFERTA'}</span>
                        <div class="card-img-wrapper">
                            <img src="\${p.image || p.img}" alt="\${p.title}" loading="lazy">
                        </div>
                        <div class="card-info">
                            <h3 class="card-title">\${p.title}</h3>
                            <div class="price-box">
                                <span class="current-price">\${displayPrice}</span>
                            </div>
                            <span class="btn-view">VER OFERTA</span>
                        </div>
                    </a>
                \`);
            });
            document.getElementById('page').innerText = currentPage;
            document.getElementById('prev').disabled = currentPage === 1;
            document.getElementById('next').disabled = end >= filteredProducts.length;
        }

        // Eventos de clique
        document.getElementById('prev').onclick = () => { if(currentPage > 1) { currentPage--; render(); window.scrollTo(0,0); } };
        document.getElementById('next').onclick = () => { if((currentPage * PER_PAGE) < filteredProducts.length) { currentPage++; render(); window.scrollTo(0,0); } };

        loadProducts();
    <\/script>`], [`<script>
        // --- L\xD3GICA DOS PRODUTOS (JSON) ---
        let allProducts = [];
        let filteredProducts = [];
        let currentPage = 1;
        const PER_PAGE = 12;

        async function loadProducts() {
            try {
                const res = await fetch('/data/achadinhos.json');
                if (!res.ok) throw new Error("Erro ao buscar JSON");
                const data = await res.json();
                allProducts = data.sort(() => Math.random() - 0.5);
                filteredProducts = [...allProducts];
                render();
            } catch (err) {
                document.getElementById('grid').innerHTML = '<p style="grid-column:1/-1; text-align:center;">Erro ao carregar ofertas.</p>';
            }
        }

        function render() {
            const grid = document.getElementById('grid');
            grid.innerHTML = '';
            const start = (currentPage - 1) * PER_PAGE;
            const end = start + PER_PAGE;

            filteredProducts.slice(start, end).forEach(p => {
                let displayPrice = p.currentPrice || p.price || "0,00";
                grid.insertAdjacentHTML('beforeend', \\\`
                    <a href="\\\${p.link}" class="card" target="_blank">
                        <span class="badge">\\\${p.badge || '\u{1F525} OFERTA'}</span>
                        <div class="card-img-wrapper">
                            <img src="\\\${p.image || p.img}" alt="\\\${p.title}" loading="lazy">
                        </div>
                        <div class="card-info">
                            <h3 class="card-title">\\\${p.title}</h3>
                            <div class="price-box">
                                <span class="current-price">\\\${displayPrice}</span>
                            </div>
                            <span class="btn-view">VER OFERTA</span>
                        </div>
                    </a>
                \\\`);
            });
            document.getElementById('page').innerText = currentPage;
            document.getElementById('prev').disabled = currentPage === 1;
            document.getElementById('next').disabled = end >= filteredProducts.length;
        }

        // Eventos de clique
        document.getElementById('prev').onclick = () => { if(currentPage > 1) { currentPage--; render(); window.scrollTo(0,0); } };
        document.getElementById('next').onclick = () => { if((currentPage * PER_PAGE) < filteredProducts.length) { currentPage++; render(); window.scrollTo(0,0); } };

        loadProducts();
    <\/script>`])));
}, "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/components/achadinhos.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` <link rel="stylesheet" href="/styles/pages/achadinhos.css"> ${maybeRenderHead()}<section class="hero-mini"> <h1>Ofertas & Achadinhos</h1> <p style="font-size: 0.9rem; opacity: 0.9;">Curadoria diária das melhores promoções.</p> <div class="search-wrapper"> <i class="fa-solid fa-search"></i> <input type="text" id="search" placeholder="O que você procura hoje?"> </div> </section> <main class="grid-container"> <div class="grid" id="grid"> <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;"> <i class="fa-solid fa-spinner fa-spin fa-2x"></i><br><br>Carregando ofertas...
</div> </div> <nav class="pagination"> <button id="prev"><i class="fa-solid fa-chevron-left"></i></button> <span id="page">1</span> <button id="next"><i class="fa-solid fa-chevron-right"></i></button> </nav> </main> ${renderComponent($$result2, "Achadinhos", $$Achadinhos, {})} ${renderComponent($$result2, "Global", $$Global, {})} ` })}`;
}, "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/pages/achadinhos/index.astro", void 0);

const $$file = "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/pages/achadinhos/index.astro";
const $$url = "/achadinhos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
