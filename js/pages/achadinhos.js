let allProducts = [];
let filteredProducts = [];
const itemsPerPage = 8;
let currentPage = 1;

async function loadProducts() {
    try {
        const response = await fetch('/data/achadinhos.json');

        if (!response.ok) {
            throw new Error("JSON não encontrado");
        }

        allProducts = await response.json();

        allProducts.sort(() => Math.random() - 0.5);

        filteredProducts = [...allProducts];

        displayProducts();

    } catch (error) {
        console.error("Erro ao carregar JSON:", error);
    }
}

function displayProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = "";

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const produtosPagina = filteredProducts.slice(start, end);

    produtosPagina.forEach(item => {

        const precoAtual = Number(item.preco);
        const precoAntigo = Number(item.preco_antigo);

        let descontoHTML = "";
        let precoHTML = `<span class="current-price">R$ ${precoAtual.toFixed(2)}</span>`;

        if (!isNaN(precoAntigo) && precoAntigo > precoAtual) {
            const desconto = Math.round(
                ((precoAntigo - precoAtual) / precoAntigo) * 100
            );

            descontoHTML = `<span class="discount-badge">-${desconto}%</span>`;

            precoHTML = `
                <span class="old-price">R$ ${precoAntigo.toFixed(2)}</span>
                <span class="current-price">R$ ${precoAtual.toFixed(2)}</span>
            `;
        }

        grid.innerHTML += `
            <div class="product-card">
                ${descontoHTML}
                <img src="${item.imagem}" alt="${item.titulo}">
                <h4>${item.titulo}</h4>
                ${precoHTML}
                <a href="${item.link}" class="btn-buy" target="_blank">
                    Ver Oferta
                </a>
            </div>
        `;
    });

    setupPagination();
}

function setupPagination() {
    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
    const wrapper = document.getElementById('pagination');
    wrapper.innerHTML = "";

    for (let i = 1; i <= pageCount; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.className = "page-btn" + (i === currentPage ? " active" : "");

        btn.onclick = () => {
            currentPage = i;
            displayProducts();
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        wrapper.appendChild(btn);
    }
}

document.getElementById('searchInput').addEventListener('input', e => {
    const term = e.target.value.toLowerCase();
    filteredProducts = allProducts.filter(p =>
        p.titulo.toLowerCase().includes(term)
    );
    currentPage = 1;
    displayProducts();
});

loadProducts();