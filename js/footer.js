document.addEventListener("DOMContentLoaded", function() {
    const footerTemplate = `
    <footer>
        <div class="container">
            <div class="footer-top">
                <h2>Não perca nenhuma oferta!</h2>
                <a href="https://t.me/seucanal" class="footer-cta">Entrar no Grupo VIP</a>
            </div>

            <div class="footer-grid">
                <div class="footer-col">
                    <h3>Baú de Promoção</h3>
                    <p>Sua curadoria diária de ofertas. Tecnologia e economia desde 2024.</p>
                </div>

                <div class="footer-col">
                    <h3>Navegação</h3>
                    <ul>
                        <li><a href="index.html">Página Inicial</a></li>
                        <li><a href="achadinhos.html">Achadinhos</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h3>Institucional</h3>
                    <ul>
                        <li><a href="politica-privacidade.html">Privacidade</a></li>
                        <li><a href="#">Termos</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h3>Social</h3>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Telegram</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                &copy; 2026 Baú de Promoção - Todos os direitos reservados.
            </div>
        </div>
    </footer>
    `;

    // Injeta o conteúdo no elemento <div id="footer-placeholder"></div>
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.innerHTML = footerTemplate;
    }
});