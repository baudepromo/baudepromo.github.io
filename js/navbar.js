document.addEventListener("DOMContentLoaded", function() {
    // 1. Definimos todo o HTML do menu (Barra Superior + Menu Lateral + Overlay)
    const menuHTML = `
    <header class="top-bar">
        <a href="/" class="logo">
            <img src="/assets/img/logo.png" alt="Logo" style="width:40px; border-radius:50%;">
            <span>Baú de Promo</span>
        </a>
        <button class="hamburger-btn" onclick="toggleMenu()">
            <i class="fa-solid fa-bars"></i>
        </button>
    </header>

    <div class="mobile-overlay" id="overlay" onclick="toggleMenu()"></div>
    
    <nav class="mobile-menu" id="mobile-menu">
        <button class="close-menu" onclick="toggleMenu()">&times;</button>
        <a href="/" class="mobile-link">Início</a>
        <a href="/pages/achadinhos/" class="mobile-link">🛒 Achadinhos Shopee</a>
        <a href="/pages/cupons/" class="mobile-link">🎟️ Cupons</a>
        <a href="/pages/produtos/" class="mobile-link">🔥 Melhores Produtos</a>
        <hr style="opacity: 0.1; margin: 10px 0;">
        <a href="/contatos" class="mobile-link">💬 Contato</a>

        <div class="user-auth-area">
            <button id="loginBtn" class="btn-primary" onclick="openAuthModal()">Entrar / Cadastrar</button>
        </div>
    </nav>
    `;

    // 2. Injetamos tudo de uma vez no placeholder
    const placeholder = document.getElementById('menu-menu');
    if (placeholder) {
        placeholder.innerHTML = menuHTML;
    }
});

// 3. Função de Abrir/Fechar (fora do DOMContentLoaded para ser global)
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');
    
    if (menu && overlay) {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}