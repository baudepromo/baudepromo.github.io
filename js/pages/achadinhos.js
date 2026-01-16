document.addEventListener("DOMContentLoaded", () => {
    const itemsPerPage = 20;
    let currentPage = 1;
    let allProducts = [];

    const gridContainer = document.getElementById('achadinhos-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageInfo = document.getElementById('page-info');

    // 1. Função para embaralhar os produtos (Shuffle)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // 2. Função para transformar "R$ 29,90" em um número real (29.90)
    const parsePrice = (str) => {
        if (!str) return 0;
        return parseFloat(str.replace('R$', '').replace('.', '').replace(',', '.').trim());
    };

    // 3. Função que desenha os produtos na tela
    function renderPage(page) {
        gridContainer.innerHTML = ''; 
        
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageItems = allProducts.slice(start, end);

        pageItems.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';

            let priceHtml = '';
            const currentPrice = parsePrice(product.preco);
            
            // Se tiver preço antigo, calcula a porcentagem do retângulo de desconto
            if (product.preco_antigo) {
                const oldPrice = parsePrice(product.preco_antigo);
                const discount = Math.round(((oldPrice - currentPrice) / oldPrice) * 100);
                
                priceHtml = `
                    <div class="price-container">
                        <div class="price-tags">
                            <span class="old-price">${product.preco_antigo}</span>
                            <span class="discount-badge">-${discount}% OFF</span>
                        </div>
                        <span class="new-price">${product.preco}</span>
                    </div>
                `;
            } else {
                priceHtml = `
                    <div class="price-container">
                        <span class="new-price">${product.preco}</span>
                    </div>
                `;
            }

            card.innerHTML = `
                <img src="${product.img}" alt="${product.nome}" loading="lazy">
                <p class="product-title">${product.nome}</p>
                ${priceHtml}
                <a href="${product.link}" target="_blank" class="buy-button">
                    Ver Oferta ➜
                </a>
            `;
            gridContainer.appendChild(card);
        });

        // Atualiza os textos e botões de página
        pageInfo.innerText = `Página ${currentPage}`;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = end >= allProducts.length;

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 4. Carregar os dados do arquivo JSON
    fetch('data/achadinhos.json')
        .then(response => response.json())
        .then(data => {
            allProducts = shuffleArray(data); // Embaralha ao carregar
            renderPage(currentPage);
        })
        .catch(error => {
            console.error('Erro ao carregar o JSON:', error);
            gridContainer.innerHTML = '<p>Erro ao carregar os produtos. Verifique se o arquivo data/achadinhos.json existe.</p>';
        });

    // 5. Comandos dos botões de Anterior e Próximo
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage);
        }
    });

    nextBtn.addEventListener('click', () => {
        if ((currentPage * itemsPerPage) < allProducts.length) {
            currentPage++;
            renderPage(currentPage);
        }
    });
});