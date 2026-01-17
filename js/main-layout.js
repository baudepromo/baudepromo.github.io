/* ===============================
   FOOTER GLOBAL
================================ */

document.addEventListener("DOMContentLoaded", () => {

    const footerTemplate = `
    <footer>
        <div class="footer-container">

            <div class="footer-brand">
                <h2>Baú de Promoções</h2>
                <p>
                    Sua curadoria de confiança para achadinhos da Shopee,
                    Amazon e AliExpress. Buscamos as melhores ofertas para
                    você economizar com segurança.
                </p>
            </div>

            <div class="footer-links">
                <h3>Navegação</h3>
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="/sobre/">Sobre</a></li>
                    <li><a href="/achadinhos/">Achadinhos</a></li>
                    <li><a href="/contatos/">Contato</a></li>
                </ul>
            </div>

            <div class="footer-links">
                <h3>Legal</h3>
                <ul>
                    <li><a href="/politica-de-privacidade/">Privacidade</a></li>
                    <li><a href="/termos-de-uso/">Termos</a></li>
                    <li><a href="/afiliados/">Afiliados</a></li>
                </ul>
            </div>

            <div class="footer-links">
                <h3>Siga-nos</h3>
                <ul>
                    <li><a href="https://www.instagram.com/baudepromocaos" target="_blank">Instagram</a></li>
                    <li><a href="https://www.tiktok.com/@baudepromocoes" target="_blank">TikTok</a></li>
                    <li><a href="https://x.com/baudepromocao" target="_blank">X</a></li>
                    <li><a href="https://www.youtube.com/@BaúdePromoções" target="_blank">YouTube</a></li>
                </ul>
            </div>

        </div>

        <div class="footer-bottom">
            <p>© 2026 Baú de Promoções • Todos os direitos reservados.</p>
            <p class="disclaimer">
                Participamos de programas de afiliados. Ao comprar através
                de nossos links, podemos receber comissão sem custo extra.
            </p>
        </div>
    </footer>
    `;

    const footer = document.getElementById("footer-placeholder");
    if (footer) {
        footer.innerHTML = footerTemplate;
    }
});


/* ===============================
   MENU GLOBAL (WEB COMPONENT)
================================ */

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
        const btn = this.querySelector(".hamburger");
        const menu = this.querySelector(".menu");

        btn.addEventListener("click", () => {
            btn.classList.toggle("active");
            menu.classList.toggle("active");

            document.body.style.overflow =
                menu.classList.contains("active") ? "hidden" : "auto";
        });

        this.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                btn.classList.remove("active");
                menu.classList.remove("active");
                document.body.style.overflow = "auto";
            });
        });
    }
}

customElements.define("meu-menu", MeuMenu);
