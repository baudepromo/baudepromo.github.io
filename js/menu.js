// ===============================
// MENU HAMBURGUER ANIMADO
// ===============================

// ===== HTML =====
const menuHTML = `
<div id="menuOverlay" class="menu-overlay" onclick="toggleMenu()"></div>

<nav id="sideMenu" class="mobile-menu">
    <button class="close-menu" onclick="toggleMenu()">×</button>

    <a href="/">🏠 Início</a>
    <a href="/achadinhos">✨ Achadinhos</a>
    <a href="/produtos">📦 Produtos</a>
    <a href="/cupons">🎟 Cupons</a>
    <a href="/cupons">🎟 Cupons</a>
    <hr>

    <a href="#" onclick="openAuthModal()">🔐 Entrar / Criar conta</a>
</nav>
`;

document.getElementById("menu-menu").innerHTML = menuHTML;

// ===== FUNÇÃO =====
window.toggleMenu = function () {
    document.getElementById("sideMenu").classList.toggle("active");
    document.getElementById("menuOverlay").classList.toggle("active");
};
