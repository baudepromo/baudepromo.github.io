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
const $$Cupons = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<script>
let allCoupons = [];

// 1. Carregar os cupons ao abrir a p\xE1gina
async function loadCoupons() {
    const grid = document.querySelector('.coupons-grid');
    try {
        const response = await fetch('/data/cupons.json'); // Ajuste o caminho se necess\xE1rio
        allCoupons = await response.json();
        renderCoupons(allCoupons);
    } catch (error) {
        console.error("Erro ao carregar cupons:", error);
        grid.innerHTML = \`<p style="grid-column: 1/-1; text-align: center;">Erro ao carregar os cupons. Tente novamente mais tarde.</p>\`;
    }
}

// 2. Fun\xE7\xE3o para renderizar os cards no HTML
function renderCoupons(couponsList) {
    const grid = document.querySelector('.coupons-grid');
    grid.innerHTML = ""; // Limpa o grid

    couponsList.forEach(coupon => {
        const html = \`
            <div class="coupon-card" data-store="\${coupon.store}">
                <div class="coupon-header">
                    <div class="store-logo" style="color: \${coupon.logoColor};">
                        <i class="\${coupon.storeLogo}"></i>
                    </div>
                    <div>
                        <div class="offer-value">\${coupon.value}</div>
                        <div class="offer-label">\${coupon.label}</div>
                    </div>
                </div>
                <div class="coupon-body">
                    <p class="description">\${coupon.description}</p>
                    <div class="expiry"><i class="fa-regular fa-clock"></i> \${coupon.expiry}</div>
                    <div class="copy-container">
                        <span class="coupon-code">\${coupon.code}</span>
                        <button class="btn-copy" onclick="copyCode(this, '\${coupon.code}')">PEGAR</button>
                    </div>
                </div>
            </div>
        \`;
        grid.insertAdjacentHTML('beforeend', html);
    });
}

// 3. Fun\xE7\xE3o de Filtro (Atualizada para usar a lista do JSON)
function filterCoupons(event, category) {
    // Estilo dos bot\xF5es
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Filtragem l\xF3gica
    if (category === 'all') {
        renderCoupons(allCoupons);
    } else {
        const filtered = allCoupons.filter(c => c.store === category);
        renderCoupons(filtered);
    }
}

// 4. Fun\xE7\xE3o de Copiar (Mantida a sua l\xF3gica original)
function copyCode(btn, code) {
    const card = btn.closest('.coupon-card');
    card.classList.add('revealed');

    navigator.clipboard.writeText(code).then(() => {
        btn.innerText = "COPIADO";
        btn.classList.add('copied');

        const toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);

        setTimeout(() => {
            btn.innerText = "PEGAR";
            btn.classList.remove('copied');
        }, 3000);
    });
}

// Inicia o carregamento
loadCoupons();
<\/script>`], [`<script>
let allCoupons = [];

// 1. Carregar os cupons ao abrir a p\xE1gina
async function loadCoupons() {
    const grid = document.querySelector('.coupons-grid');
    try {
        const response = await fetch('/data/cupons.json'); // Ajuste o caminho se necess\xE1rio
        allCoupons = await response.json();
        renderCoupons(allCoupons);
    } catch (error) {
        console.error("Erro ao carregar cupons:", error);
        grid.innerHTML = \\\`<p style="grid-column: 1/-1; text-align: center;">Erro ao carregar os cupons. Tente novamente mais tarde.</p>\\\`;
    }
}

// 2. Fun\xE7\xE3o para renderizar os cards no HTML
function renderCoupons(couponsList) {
    const grid = document.querySelector('.coupons-grid');
    grid.innerHTML = ""; // Limpa o grid

    couponsList.forEach(coupon => {
        const html = \\\`
            <div class="coupon-card" data-store="\\\${coupon.store}">
                <div class="coupon-header">
                    <div class="store-logo" style="color: \\\${coupon.logoColor};">
                        <i class="\\\${coupon.storeLogo}"></i>
                    </div>
                    <div>
                        <div class="offer-value">\\\${coupon.value}</div>
                        <div class="offer-label">\\\${coupon.label}</div>
                    </div>
                </div>
                <div class="coupon-body">
                    <p class="description">\\\${coupon.description}</p>
                    <div class="expiry"><i class="fa-regular fa-clock"></i> \\\${coupon.expiry}</div>
                    <div class="copy-container">
                        <span class="coupon-code">\\\${coupon.code}</span>
                        <button class="btn-copy" onclick="copyCode(this, '\\\${coupon.code}')">PEGAR</button>
                    </div>
                </div>
            </div>
        \\\`;
        grid.insertAdjacentHTML('beforeend', html);
    });
}

// 3. Fun\xE7\xE3o de Filtro (Atualizada para usar a lista do JSON)
function filterCoupons(event, category) {
    // Estilo dos bot\xF5es
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Filtragem l\xF3gica
    if (category === 'all') {
        renderCoupons(allCoupons);
    } else {
        const filtered = allCoupons.filter(c => c.store === category);
        renderCoupons(filtered);
    }
}

// 4. Fun\xE7\xE3o de Copiar (Mantida a sua l\xF3gica original)
function copyCode(btn, code) {
    const card = btn.closest('.coupon-card');
    card.classList.add('revealed');

    navigator.clipboard.writeText(code).then(() => {
        btn.innerText = "COPIADO";
        btn.classList.add('copied');

        const toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);

        setTimeout(() => {
            btn.innerText = "PEGAR";
            btn.classList.remove('copied');
        }, 3000);
    });
}

// Inicia o carregamento
loadCoupons();
<\/script>`])));
}, "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/components/cupons.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` <link rel="stylesheet" href="/styles/pages/cupons.css"> ${maybeRenderHead()}<section class="hero-header"> <a href="/" class="back-btn"><i class="fa-solid fa-arrow-left"></i> Voltar</a> <h1>Central de Cupons</h1> <p>Os melhores códigos para você economizar hoje</p> </section> <div class="filter-container"> <button class="filter-btn active" onclick="filterCoupons(event, 'all')">Todos</button> <button class="filter-btn" onclick="filterCoupons(event, 'shopee')">Shopee</button> <button class="filter-btn" onclick="filterCoupons(event, 'amazon')">Amazon</button> <button class="filter-btn" onclick="filterCoupons(event, 'ali')">AliExpress</button> </div> <div class="coupons-grid"> <div class="coupon-card" data-store="shopee"></div> </div> <div id="toast" class="toast">✓ Cupom copiado com sucesso!</div> ${renderComponent($$result2, "Cupons", $$Cupons, {})} ${renderComponent($$result2, "Global", $$Global, {})} ` })}`;
}, "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/pages/cupons/index.astro", void 0);

const $$file = "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/pages/cupons/index.astro";
const $$url = "/cupons";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
