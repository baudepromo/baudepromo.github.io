document.addEventListener("DOMContentLoaded", function() {
    const globalUI = `
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
        <a href="/pages/achadinhos/" class="mobile-link">🛒 Achadinhos</a>
        <a href="/contatos" class="mobile-link">💬 Contato</a>
        <hr style="opacity: 0.1; margin: 15px 0;">
        
        <div class="user-auth-area" style="padding: 10px;">
            <button class="btn-primary" onclick="openAuthModal()" style="width:100%;">Entrar / Cadastrar</button>
        </div>
    </nav>

    <div id="authModal" class="modal-overlay-auth">
        <div class="modal-content" onclick="event.stopPropagation()">
            <span class="close-modal" onclick="closeAuthModal()">&times;</span>
            <h3 id="authTitle" style="color: #ff4b4b; margin-bottom:15px;">Fazer Login</h3>
            <div class="auth-form">
                <input type="email" id="authEmail" placeholder="Seu E-mail" class="auth-input">
                <input type="password" id="authPassword" placeholder="Sua Senha" class="auth-input">
                <button class="btn-primary" id="mainAuthBtn" onclick="handleEmailAuth()" style="width:100%; margin-top:10px;">Entrar</button>
                
                <div style="margin: 15px 0; font-size: 0.8rem; text-align:center; color: #999;">OU</div>
                
                <button onclick="signInWithGoogle()" class="google-btn">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18"> 
                    Entrar com Google
                </button>
                <p id="authToggle" style="cursor:pointer; color:#ff4b4b; font-size:0.85rem; margin-top:15px; text-align:center;" onclick="toggleAuthMode()">Não tem conta? Cadastre-se.</p>
            </div>
        </div>
    </div>
    `;

    const placeholder = document.getElementById('menu-menu');
    if (placeholder) {
        placeholder.innerHTML = globalUI;
    }
});

// --- FUNÇÕES DE CONTROLE ---

function toggleMenu() {
    document.getElementById('mobile-menu').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
}

function openAuthModal() {
    // Fecha o menu lateral se estiver aberto e abre o modal
    const menu = document.getElementById('mobile-menu');
    if(menu.classList.contains('active')) toggleMenu();
    
    document.getElementById('authModal').style.display = 'flex';
}

function closeAuthModal() {
    document.getElementById('authModal').style.display = 'none';
}

// Fecha o modal se clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('authModal');
    if (event.target == modal) {
        closeAuthModal();
    }
}