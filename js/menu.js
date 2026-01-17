<<<<<<< HEAD
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
=======
class MeuMenu extends HTMLElement {
    connectedCallback() {
        // 1. Inserimos o HTML e o CSS específico do Header aqui
        this.innerHTML = `
        <header class="header">
            <div class="logo">OFERTA MEGA</div>
            <button class="hamburger" id="hamburgerBtn">
                <span></span><span></span><span></span>
            </button>
            <nav class="menu" id="navMenu">
                <a href="index.html">Início</a>
                <a href="produtos.html">Produtos</a>
                <a href="#achadinhos">Achadinhos</a>
                <a href="#cupons">Cupons</a>
            </nav>
        </header>
        `;

        // 2. Chamamos a lógica do menu
        this.initMenu();
    }

    initMenu() {
        const btn = this.querySelector('#hamburgerBtn');
        const menu = this.querySelector('#navMenu');
        
        // Função que alterna as classes
        const toggle = () => {
            const isActive = menu.classList.toggle('active');
            btn.classList.toggle('active');
            document.body.style.overflow = isActive ? 'hidden' : 'auto';
        };

        btn.addEventListener('click', toggle);

        // Opcional: Fecha o menu ao clicar em qualquer link
        const links = this.querySelectorAll('.menu a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if(menu.classList.contains('active')) toggle();
            });
        });
    }
}

customElements.define('meu-menu', MeuMenu);
>>>>>>> 777ff7e (ss)
