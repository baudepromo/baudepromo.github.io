const productGrid = document.getElementById("product-grid");
let products = [];

// Função para carregar produtos do JSON
async function loadProducts() {
    try {
        const response = await fetch("data/products.json");
        products = await response.json();
        displayProducts(); // Categoria padrão
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
        productGrid.innerHTML = "<p>Não foi possível carregar os produtos.</p>";
    }
}

function displayProducts(category = "eletronicos") {
    productGrid.innerHTML = "";
    const filtered = products.filter(p => p.category === category);
    filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${p.img}" alt="${p.title}" class="product-img">
            <div class="product-info">
                <span class="store-badge badge-${p.store}">${p.store}</span>
                <h3 class="product-title">${p.title}</h3>
                <p class="product-price">${p.price}</p>
                <a href="#" class="btn-buy">Comprar</a>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Inicializa produtos
loadProducts();

// Tabs
const tabButtons = document.querySelectorAll(".tab-btn");
tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        displayProducts(btn.dataset.tab);
    });
});
