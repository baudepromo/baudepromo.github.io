document.addEventListener("DOMContentLoaded", () => {
    const itemsPerPage = 20;
    let currentPage = 1;
    let allProducts = [];

    const gridContainer = document.getElementById('achadinhos-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageInfo = document.getElementById('page-info');

    // 1. Função para embaralhar array (Fisher-Yates Shuffle)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // 2. Carregar dados do JSON
    fetch('/data/achadinhos.json')
        .then(response => response.json())
        .then(data => {
            // Embaralha assim que carrega
            allProducts = shuffleArray(data);
            renderPage(currentPage);
        })
        .catch(error => console.error('Erro ao carregar produtos:', error));

    // 3. Renderizar a página atual
    function renderPage(page) {
        gridContainer.innerHTML = ''; // Limpa os produtos atuais
        
        // Calcula índices
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageItems = allProducts.slice(start, end);

        // Cria os cards HTML
        pageItems.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.img}" alt="${product.nome}" loading="lazy">
                <p style="margin-top: 10px; color: #333;">${product.nome}</p>
                <span style="display:block; margin: 10px 0; font-weight:bold; color: var(--primary-color);">${product.preco}</span>
                <a href="${product.link}" target="_blank" style="display:block; background: var(--success-color); color: white; padding: 8px; border-radius: 5px; font-size: 0.9rem;">Ver Oferta</a>
            `;
            gridContainer.appendChild(card);
        });

        // Atualiza botões
        pageInfo.innerText = `Página ${currentPage}`;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = end >= allProducts.length;

        // Volta ao topo suavemente
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 4. Eventos dos botões
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