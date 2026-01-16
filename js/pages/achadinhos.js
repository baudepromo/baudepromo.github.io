const container = document.getElementById("products");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortDiscount");

const ITEMS_PER_LOAD = 8;
let allProducts = [];
let filteredProducts = [];
let index = 0;

/* FETCH JSON */
fetch("/data/achadinhos/achadinhos.json")
    .then(res => res.json())
    .then(data => {
        allProducts = data.map(p => ({
            ...p,
            discount: Math.round(
                ((p.oldPrice - p.newPrice) / p.oldPrice) * 100
            )
        }));
        filteredProducts = [...allProducts];
        render();
    });

/* RENDER */
function render(reset = false) {
    if (reset) {
        container.innerHTML = "";
        index = 0;
    }

    const slice = filteredProducts.slice(index, index + ITEMS_PER_LOAD);

    slice.forEach(p => {
        container.innerHTML += `
            <div class="product-card">
                <span class="discount">-${p.discount}% OFF</span>
                <img src="${p.image}" loading="lazy" alt="${p.name}">
                <h3>${p.name}</h3>
                <div class="old-price">R$ ${p.oldPrice.toFixed(2)}</div>
                <div class="new-price">R$ ${p.newPrice.toFixed(2)}</div>
                <a href="${p.link}" class="buy-btn">Ver oferta</a>
            </div>
        `;
    });

    index += ITEMS_PER_LOAD;
}

/* SEARCH */
searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();

    filteredProducts = allProducts.filter(p =>
        p.name.toLowerCase().includes(term)
    );

    applySort();
    render(true);
});

/* SORT */
sortSelect.addEventListener("change", () => {
    applySort();
    render(true);
});

function applySort() {
    if (sortSelect.value === "discount") {
        filteredProducts.sort((a, b) => b.discount - a.discount);
    } else {
        filteredProducts = [...filteredProducts];
    }
}

/* SCROLL INFINITO */
window.addEventListener("scroll", () => {
    if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
    ) {
        render();
    }
    const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});
});