document.addEventListener("DOMContentLoaded", function() {
    const footerTemplate = `
    <footer>
    <div class="footer-container">
        <div class="footer-brand">
            <h2>Baú de Promoções</h2>
            <p>Sua curadoria de confiança para achadinhos da Shopee, Amazon e AliExpress. Buscamos as melhores ofertas para que você economize com segurança e praticidade.</p>
        </div>

        <div class="footer-links">
            <h3>Navegação</h3>
            <ul>
                <li><a href="https://baudepromo.github.io/">Início</a></li>
                <li><a href="https://baudepromo.github.io/sobre/">Sobre Nós</a></li>
                <li><a href="https://baudepromo.github.io/achadinhos/">Achadinhos</a></li>
                <li><a href="https://baudepromo.github.io/contatos/">Contato</a></li>
            </ul>
        </div>

        <div class="footer-links">
            <h3>Legal</h3>
            <ul>
                <li><a href="https://baudepromo.github.io/politica-de-privacidade/">Privacidade</a></li>
                <li><a href="https://baudepromo.github.io/termos-de-uso/">Termos de Uso</a></li>
                <li><a href="https://baudepromo.github.io/afiliados/">Afiliados</a></li>
            </ul>
        </div>

        <div class="footer-links">
            <h3>Siga-nos</h3>
            <ul>
                <li><a href="https://www.instagram.com/baudepromocaos" target="_blank">Instagram</a></li>
                <li><a href="https://www.tiktok.com/@baudepromocoes" target="_blank">TikTok</a></li>
                <li><a href="https://x.com/baudepromocao" target="_blank">X</a></li>
                <li><a href="https://www.youtube.com/@Ba%C3%BAdePromo%C3%A7%C3%B5es" target="_blank">YouTube</a></li>
            </ul>
        </div>
    </div>

    <div class="footer-bottom">
        <p>&copy; 2026 Baú de Promoções • Todos os direitos reservados.</p>
        <p class="disclaimer">
            <strong>Aviso:</strong> Participamos de programas de afiliados. Ao comprar através de nossos links, podemos receber uma comissão, sem nenhum custo adicional para você. Os preços e a disponibilidade podem variar conforme as lojas parceiras.
        </p>
    </div>
</footer>
    `;

    // Injeta o conteúdo no elemento <div id="footer-placeholder"></div>
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.innerHTML = footerTemplate;
    }
});