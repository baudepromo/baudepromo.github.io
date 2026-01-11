let currentPage = 1;
const productsPerPage = 50;
let allProducts = [];

async function init() {
    try {
        // Tenta carregar o JSON (ajuste o caminho se necessário)
        const response = await fetch('data/products.json'); 
        if (!response.ok) throw new Error('Erro ao carregar JSON');

        allProducts = await response.json();
        // Embaralha os produtos para mostrar ofertas variadas
        allProducts.sort(() => Math.random() - 0.5);
        renderGrid();
    } catch (error) {
        console.error("Erro detalhado:", error);
        document.getElementById('grid').innerHTML =
            '<p class="empty" style="display:block;">Erro ao carregar o Baú. Verifique o console.</p>';
    }
}

function renderGrid() {
    const grid = document.getElementById('grid');
    const emptyMsg = document.getElementById('empty');
    const searchTerm = document.getElementById('search').value.toLowerCase();

    const filtered = allProducts.filter(p =>
        p.title.toLowerCase().includes(searchTerm)
    );

    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const paginated = filtered.slice(start, end);

    grid.innerHTML = '';

    if (filtered.length === 0) {
        emptyMsg.style.display = 'block';
        return;
    } else {
        emptyMsg.style.display = 'none';
    }

    paginated.forEach(product => {
        grid.innerHTML += `
        <div class="card">
            <div class="img-container">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
            </div>
            <div class="content">
                <h3>${product.title}</h3>
                <div class="price">
                    <div class="price-row">
                        ${product.oldPrice ? `<span class="old">${product.oldPrice}</span>` : ''}
                        <span class="current">${product.currentPrice}</span>
                    </div>
                    ${product.badge ? `<span class="badge">${product.badge}</span>` : ''}
                </div>
                <a href="${product.link}" class="btn" target="_blank">Ver na Shopee</a>
            </div>
        </div>`;
    });

    document.getElementById('pageIndicator').innerText = `Página ${currentPage}`;
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = end >= filtered.length;
    
    // Rola para o topo ao trocar de página
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function changePage(step) {
    currentPage += step;
    renderGrid();
}

document.getElementById('search').addEventListener('input', () => {
    currentPage = 1;
    renderGrid();
});

init();