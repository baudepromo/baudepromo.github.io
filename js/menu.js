class MeuMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <div class="logo">OFERTA MEGA</div>

                <button class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav class="menu">
                    <a href="/">Início</a>
                    <a href="/pages/produtos/">Produtos</a>
                    <a href="/pages/achadinhos/">Achadinhos</a>
                    <a href="/pages/cupons/">Cupons</a>
                </nav>
            </header>
        `;

        this.initLogic();
    }

    initLogic() {
        const btn = this.querySelector('.hamburger');
        const menu = this.querySelector('.menu');

        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            menu.classList.toggle('active');

            document.body.style.overflow =
                menu.classList.contains('active') ? 'hidden' : 'auto';
        });

        this.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                btn.classList.remove('active');
                menu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }
}

customElements.define('meu-menu', MeuMenu);
