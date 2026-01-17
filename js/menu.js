class MeuMenu extends HTMLElement {
    connectedCallback() {
        // Injetamos apenas o HTML estrutural que o seu CSS já estiliza
        this.innerHTML = `
            <header class="header">
                <div class="logo">OFERTA MEGA</div>
                
                <button class="hamburger" id="hamburgerBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav class="menu" id="navMenu">
                    <a href="index.html">Início</a>
                    <a href="#produtos">Produtos</a>
                    <a href="#achadinhos">Achadinhos</a>
                    <a href="#cupons">Cupons</a>
                </nav>
            </header>
        `;

        // Ativa a lógica de clique
        this.initLogic();
    }

    initLogic() {
        const btn = this.querySelector('#hamburgerBtn');
        const menu = this.querySelector('#navMenu');

        if (btn && menu) {
            btn.addEventListener('click', () => {
                const isActive = menu.classList.toggle('active');
                btn.classList.toggle('active');
                
                // Gerencia o scroll do body
                document.body.style.overflow = isActive ? 'hidden' : 'auto';
            });

            // Fecha o menu ao clicar em um link (melhor UX)
            const links = menu.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.remove('active');
                    btn.classList.remove('active');
                    document.body.style.overflow = 'auto';
                });
            });
        }
    }
}

// Define a tag customizada
customElements.define('meu-menu', MeuMenu);