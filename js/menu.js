document.addEventListener("DOMContentLoaded", function() {
    const menuTemplate = `
    <header>
        <div class="menu-toggle" id="btn-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="logo">
            <a href="index.html" style="color: white; text-decoration: none;">BAÚ DE PROMOÇÃO</a>
        </div>
        <div style="width: 25px;"></div> <nav id="main-nav">
            <ul>
                <li><a href="index.html">🏠 Início</a></li>
                <li><a href="achadinhos.html">✨ Achadinhos</a></li>
                <li><a href="#">🎟️ Cupons</a></li>
                <li><a href="#">🔥 Mais Vendidos</a></li>
                <li><a href="politica-privacidade.html">📄 Privacidade</a></li>
            </ul>
        </nav>
    </header>
    `;

    const placeholder = document.getElementById('menu-placeholder');
    if (placeholder) {
        placeholder.innerHTML = menuTemplate;

        // Lógica para abrir/fechar o menu
        const btnMenu = document.getElementById('btn-menu');
        const nav = document.getElementById('main-nav');

        btnMenu.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});