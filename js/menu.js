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