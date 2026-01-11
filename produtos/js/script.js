let activeTab = 'eletronicos';
const productGrid = document.getElementById('product-grid');

async function loadProducts() {
    const res = await fetch('products.json');
    const data = await res.json();
    renderProducts(data);
}

function renderProducts(products) {
    productGrid.innerHTML = '';
    const filtered = products.filter(p => p.category === activeTab);
    filtered.forEach(product => {
        const card = document.createElement('a');
        card.href = product.url;
        card.target = "_blank";
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.title}" class="product-img"/>
            <div class="product-info">
                <span class="store-badge badge-${product.store.toLowerCase()}">${product.store}</span>
                <h3 class="product-title">${product.title}</h3>
                <span class="product-price">${product.price}</span>
                <div class="btn-buy">Ver na Loja</div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeTab = btn.dataset.tab;
        loadProducts();
    });
});

loadProducts();
