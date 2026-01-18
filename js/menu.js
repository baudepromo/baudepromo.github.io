// ===============================
// MENU HAMBURGUER ANIMADO
// ===============================

// ===== CSS =====
const style = document.createElement("style");
style.innerHTML = `
.menu-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;
    z-index: 2500;
}

.menu-overlay.active {
    opacity: 1;
    pointer-events: auto;
}

.mobile-menu {
    position: fixed;
    top: 0;
    right: -320px;
    width: 320px;
    height: 100%;
    background: #fff;
    box-shadow: -5px 0 25px rgba(0,0,0,.2);
    transition: right 0.35s ease;
    z-index: 3000;
    padding: 80px 25px;
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.mobile-menu.active {
    right: 0;
}

.mobile-menu a {
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    color: #222;
}

.mobile-menu a:hover {
    color: #ff4b4b;
}

.close-menu {
    position: absolute;
    top: 18px;
    right: 20px;
    font-size: 30px;
    background: none;
    border: none;
    cursor: pointer;
}

.modal-overlay-auth {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.55);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 4000;
    animation: fadeIn .3s;
}

.modal-overlay-auth.active {
    display: flex;
}

.modal-content {
    background: #fff;
    width: 90%;
    max-width: 380px;
    border-radius: 18px;
    padding: 30px;
    animation: scaleIn .25s ease;
    position: relative;
}

.close-modal {
    position: absolute;
    top: 12px;
    right: 16px;
    font-size: 26px;
    cursor: pointer;
}

.auth-input {
    width: 100%;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 8px;
    border: 1px solid #ddd;
}

.google-btn {
    width: 100%;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
}

@keyframes fadeIn {
    from { opacity: 0 }
    to { opacity: 1 }
}

@keyframes scaleIn {
    from { transform: scale(.9); opacity: 0 }
    to { transform: scale(1); opacity: 1 }
}

`;
document.head.appendChild(style);

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
