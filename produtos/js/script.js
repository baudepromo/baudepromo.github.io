let allProducts = [];

fetch("data/products.json")
    .then(res => res.json())
    .then(data => {
        renderProducts(data.categories);
    });

function renderProducts(categories) {
    const container = document.getElementById("productsContainer");
    container.innerHTML = "";

    categories.forEach(category => {
        const block = document.createElement("div");
        block.className = "category-block";

        block.innerHTML = `
            <div class="category-container" style="border-left-color:${category.color}">
                <div class="category-info">
                    <i class="fa-solid ${category.icon}"></i>
                    <h2 class="category-title">${category.name}</h2>
                </div>
            </div>
            <div class="product-grid"></div>
        `;

        const grid = block.querySelector(".product-grid");

        category.products.forEach(product => {
            grid.innerHTML += `
                <a href="${product.link}" class="product-card">
                    <img src="${product.image}" class="product-img">
                    <div class="product-info">
                        <span class="store-badge ${product.badge}">${product.store}</span>
                        <h3 class="product-title">${product.title}</h3>
                        <span class="product-price">${product.price}</span>
                        <div class="btn-buy">Ver Promoção</div>
                    </div>
                </a>
            `;
        });

        container.appendChild(block);
    });
}

function filterProducts() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".product-card");
    let visible = 0;

    cards.forEach(card => {
        const title = card.querySelector(".product-title").innerText.toLowerCase();
        const store = card.querySelector(".store-badge").innerText.toLowerCase();

        if (title.includes(input) || store.includes(input)) {
            card.style.display = "";
            visible++;
        } else {
            card.style.display = "none";
        }
    });

    document.getElementById("noResults").style.display =
        visible === 0 ? "block" : "none";
}

function shareMore() {
    if (navigator.share) {
        navigator.share({
            title: "Baú de Promoções",
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(window.location.href);
        const toast = document.getElementById("toast");
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2000);
    }
}
