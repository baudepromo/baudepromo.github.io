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

// ==========================================
// BANNER DE COOKIES (LGPD)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    
    // Verifica se já foi aceito
    if (!localStorage.getItem("cookiesAceitos")) {
        criarBannerCookies();
    }

    function criarBannerCookies() {
        // 1. Criar o elemento HTML do banner
        const banner = document.createElement("div");
        banner.id = "cookie-banner";
        banner.innerHTML = `
            <div class="cookie-content">
                <p>
                    🍪 <strong>Cookies:</strong> Usamos cookies e tecnologias semelhantes para melhorar sua experiência e analisar nosso tráfego. 
                    Ao continuar navegando, você concorda com nossa <a href="/pages/privacidade.html" target="_blank">Política de Privacidade</a>.
                </p>
                <button id="btn-aceitar-cookies">Aceitar e Continuar</button>
            </div>
        `;

        // 2. Adicionar o CSS do banner dinamicamente
        const style = document.createElement("style");
        style.innerHTML = `
            #cookie-banner {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                width: 90%;
                max-width: 1100px;
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                padding: 20px;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                z-index: 9999; /* Bem alto para ficar por cima de tudo */
                border: 1px solid rgba(0,0,0,0.05);
                animation: slideUpFade 0.5s ease-out forwards;
            }

            .cookie-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
            }

            .cookie-content p {
                font-size: 14px;
                color: #333;
                margin: 0;
                line-height: 1.5;
                flex: 1;
            }

            .cookie-content a {
                color: #ff4d5a; /* Sua cor primária */
                font-weight: bold;
                text-decoration: underline;
            }

            #btn-aceitar-cookies {
                background: #ff4d5a; /* Sua cor primária */
                color: white;
                border: none;
                padding: 12px 25px;
                border-radius: 50px;
                font-weight: bold;
                cursor: pointer;
                white-space: nowrap;
                transition: transform 0.2s, background 0.2s;
                box-shadow: 0 4px 15px rgba(255, 77, 90, 0.3);
            }

            #btn-aceitar-cookies:hover {
                transform: scale(1.05);
                background: #e63e4b;
            }

            @keyframes slideUpFade {
                from { opacity: 0; transform: translate(-50%, 50px); }
                to { opacity: 1; transform: translate(-50%, 0); }
            }

            /* Responsividade para celular */
            @media (max-width: 768px) {
                .cookie-content {
                    flex-direction: column;
                    text-align: center;
                }
                
                #btn-aceitar-cookies {
                    width: 100%;
                }
            }
        `;

        // 3. Inserir no DOM
        document.head.appendChild(style);
        document.body.appendChild(banner);

        // 4. Lógica do botão Aceitar
        document.getElementById("btn-aceitar-cookies").addEventListener("click", function() {
            // Salva a preferência no navegador do usuário
            localStorage.setItem("cookiesAceitos", "true");
            
            // Remove o banner com uma animaçãozinha de saída
            banner.style.opacity = "0";
            banner.style.transform = "translate(-50%, 20px)";
            banner.style.transition = "all 0.5s ease";
            
            setTimeout(() => {
                banner.remove();
            }, 500);
        });
    }
});