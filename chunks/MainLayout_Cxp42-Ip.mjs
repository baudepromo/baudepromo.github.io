import { c as createComponent, r as renderTemplate, f as renderSlot, a as renderHead } from './astro/server_B1wTNOfG.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Global = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1([`<script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

        // CONFIGURA\xC7\xC3O FIREBASE
        const firebaseConfig = {
            apiKey: "AIzaSyAltYkTpdrIShVv7wJXsszQqvOZXTC45Wg",
            authDomain: "baudepromocao-oficial.firebaseapp.com",
            projectId: "baudepromocao-oficial",
            storageBucket: "baudepromocao-oficial.firebasestorage.app",
            messagingSenderId: "743146859125",
            appId: "1:743146859125:web:6d1f5331e22b8ce981263c"
        };

        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();

        // -----------------------
        // L\xD3GICA DO MENU (Adicionada)
        // -----------------------
        window.toggleMenu = () => {
            const menu = document.getElementById('sideMenu');
            const overlay = document.getElementById('menuOverlay');
            menu.classList.toggle('active');
            overlay.classList.toggle('active');
        }

        // -----------------------
        // L\xD3GICA DO MODAL E AUTH
        // -----------------------
        let isSignUpMode = false;

        window.openAuthModal = () => {
            document.getElementById('authModal').style.display = 'flex';
            // Fecha o menu se estiver aberto no celular
            document.getElementById('sideMenu').classList.remove('active');
            document.getElementById('menuOverlay').classList.remove('active');
        };
        
        window.closeAuthModal = () => document.getElementById('authModal').style.display = 'none';

        window.toggleAuthMode = () => {
            isSignUpMode = !isSignUpMode;
            document.getElementById('authTitle').innerText = isSignUpMode ? 'Criar Conta' : 'Fazer Login';
            document.getElementById('mainAuthBtn').innerText = isSignUpMode ? 'Cadastrar' : 'Entrar';
            document.getElementById('authToggle').innerText = isSignUpMode ? 'J\xE1 tem conta? Login.' : 'N\xE3o tem conta? Cadastre-se.';
        };

        window.handleEmailAuth = async () => {
            const email = document.getElementById('authEmail').value;
            const password = document.getElementById('authPassword').value;
            try {
                if (isSignUpMode) await createUserWithEmailAndPassword(auth, email, password);
                else await signInWithEmailAndPassword(auth, email, password);
                closeAuthModal();
            } catch (e) { alert("Erro: " + e.message); }
        };

        window.signInWithGoogle = () => signInWithPopup(auth, provider).then(closeAuthModal).catch(console.error);
        window.logout = () => signOut(auth);

        // Monitora o estado do usu\xE1rio e atualiza o MENU
        onAuthStateChanged(auth, (user) => {
            const loginBtn = document.getElementById('loginBtn');
            const userInfo = document.getElementById('userInfo');
            
            if(loginBtn && userInfo) {
                if (user) {
                    // Usu\xE1rio LOGADO: Esconde bot\xE3o login, mostra perfil
                    loginBtn.style.display = 'none';
                    userInfo.style.display = 'flex';
                    document.getElementById('userName').innerText = user.displayName ? user.displayName.split(' ')[0] : 'Usu\xE1rio';
                    document.getElementById('userPhoto').src = user.photoURL || \`https://ui-avatars.com/api/?name=\${user.email}&background=random\`;
                } else {
                    // Usu\xE1rio DESLOGADO: Mostra bot\xE3o login, esconde perfil
                    loginBtn.style.display = 'block';
                    userInfo.style.display = 'none';
                }
            }
        });
		window.onclick = function(event) {
            const donationModal = document.getElementById('donationModal');
            const authModal = document.getElementById('authModal');
            const sideMenu = document.getElementById('sideMenu');
            
            if (event.target == donationModal) toggleModal();
            if (event.target == authModal) closeAuthModal();
            // Opcional: fechar menu ao clicar na parte escura se adicionar overlay ao menu
        }
    <\/script>`], [`<script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

        // CONFIGURA\xC7\xC3O FIREBASE
        const firebaseConfig = {
            apiKey: "AIzaSyAltYkTpdrIShVv7wJXsszQqvOZXTC45Wg",
            authDomain: "baudepromocao-oficial.firebaseapp.com",
            projectId: "baudepromocao-oficial",
            storageBucket: "baudepromocao-oficial.firebasestorage.app",
            messagingSenderId: "743146859125",
            appId: "1:743146859125:web:6d1f5331e22b8ce981263c"
        };

        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();

        // -----------------------
        // L\xD3GICA DO MENU (Adicionada)
        // -----------------------
        window.toggleMenu = () => {
            const menu = document.getElementById('sideMenu');
            const overlay = document.getElementById('menuOverlay');
            menu.classList.toggle('active');
            overlay.classList.toggle('active');
        }

        // -----------------------
        // L\xD3GICA DO MODAL E AUTH
        // -----------------------
        let isSignUpMode = false;

        window.openAuthModal = () => {
            document.getElementById('authModal').style.display = 'flex';
            // Fecha o menu se estiver aberto no celular
            document.getElementById('sideMenu').classList.remove('active');
            document.getElementById('menuOverlay').classList.remove('active');
        };
        
        window.closeAuthModal = () => document.getElementById('authModal').style.display = 'none';

        window.toggleAuthMode = () => {
            isSignUpMode = !isSignUpMode;
            document.getElementById('authTitle').innerText = isSignUpMode ? 'Criar Conta' : 'Fazer Login';
            document.getElementById('mainAuthBtn').innerText = isSignUpMode ? 'Cadastrar' : 'Entrar';
            document.getElementById('authToggle').innerText = isSignUpMode ? 'J\xE1 tem conta? Login.' : 'N\xE3o tem conta? Cadastre-se.';
        };

        window.handleEmailAuth = async () => {
            const email = document.getElementById('authEmail').value;
            const password = document.getElementById('authPassword').value;
            try {
                if (isSignUpMode) await createUserWithEmailAndPassword(auth, email, password);
                else await signInWithEmailAndPassword(auth, email, password);
                closeAuthModal();
            } catch (e) { alert("Erro: " + e.message); }
        };

        window.signInWithGoogle = () => signInWithPopup(auth, provider).then(closeAuthModal).catch(console.error);
        window.logout = () => signOut(auth);

        // Monitora o estado do usu\xE1rio e atualiza o MENU
        onAuthStateChanged(auth, (user) => {
            const loginBtn = document.getElementById('loginBtn');
            const userInfo = document.getElementById('userInfo');
            
            if(loginBtn && userInfo) {
                if (user) {
                    // Usu\xE1rio LOGADO: Esconde bot\xE3o login, mostra perfil
                    loginBtn.style.display = 'none';
                    userInfo.style.display = 'flex';
                    document.getElementById('userName').innerText = user.displayName ? user.displayName.split(' ')[0] : 'Usu\xE1rio';
                    document.getElementById('userPhoto').src = user.photoURL || \\\`https://ui-avatars.com/api/?name=\\\${user.email}&background=random\\\`;
                } else {
                    // Usu\xE1rio DESLOGADO: Mostra bot\xE3o login, esconde perfil
                    loginBtn.style.display = 'block';
                    userInfo.style.display = 'none';
                }
            }
        });
		window.onclick = function(event) {
            const donationModal = document.getElementById('donationModal');
            const authModal = document.getElementById('authModal');
            const sideMenu = document.getElementById('sideMenu');
            
            if (event.target == donationModal) toggleModal();
            if (event.target == authModal) closeAuthModal();
            // Opcional: fechar menu ao clicar na parte escura se adicionar overlay ao menu
        }
    <\/script>`])));
}, "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/components/global.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<html lang="pt-BR"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.webp"><link rel="stylesheet" href="public/styles/variables.css"><link rel="stylesheet" href="public/styles/global.css"><link rel="stylesheet" href="public/styles/layout.css"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"><script async src="https://www.googletagmanager.com/gtag/js?id=G-E553Y8KB45"><\/script><script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-E553Y8KB45');
  <\/script>`, '</head> <body> <header class="top-bar"> <a href="/" class="logo"><i class="fa-solid fa-box-open"></i> Ba\xFA de Promo</a> <button class="hamburger-btn" onclick="toggleMenu()"> <i class="fa-solid fa-bars"></i> </button> </header> <div id="menuOverlay" class="menu-overlay" onclick="toggleMenu()"></div> <nav id="sideMenu" class="mobile-menu"> <button class="close-menu" onclick="toggleMenu()">\xD7</button> <a href="/">\u{1F3E0} In\xEDcio</a> <a href="/achadinhos">\u2728 Achadinhos</a> <a href="/produtos">\u{1F4E6} Produtos</a> <a href="/cupons">\u{1F39F} Cupons</a> <hr style="width:100%; border:0; border-top:1px solid #eee; margin: 10px 0;"> <div id="authContainer"> <button id="loginBtn" class="btn-login-menu" onclick="openAuthModal()">\n\u{1F510} Entrar / Criar conta\n</button> <div id="userInfo" class="user-profile" style="display: none;"> <img id="userPhoto" src="" alt="Foto"> <div style="flex:1"> <small>Ol\xE1,</small> <strong id="userName" style="display:block; font-size: 0.9rem;">Visitante</strong> <button onclick="logout()" style="border:none; background:none; color:red; font-size:0.8rem; cursor:pointer; padding:0;">Sair</button> </div> </div> </div> </nav> ', ' <footer> <div class="footer-container"> <div class="footer-brand"> <h2>Ba\xFA de Promo\xE7\xF5es</h2> <p>Sua curadoria de confian\xE7a para achadinhos da Shopee, Amazon e AliExpress. Buscamos as melhores ofertas para que voc\xEA economize com seguran\xE7a e praticidade.</p> </div> <div class="footer-links"> <h3>Navega\xE7\xE3o</h3> <ul> <li><a href="https://baudepromo.github.io/">In\xEDcio</a></li> <li><a href="https://baudepromo.github.io/sobre/">Sobre N\xF3s</a></li> <li><a href="https://baudepromo.github.io/achadinhos/">Achadinhos</a></li> <li><a href="https://baudepromo.github.io/contatos/">Contato</a></li> </ul> </div> <div class="footer-links"> <h3>Legal</h3> <ul> <li><a href="https://baudepromo.github.io/politica-de-privacidade/">Privacidade</a></li> <li><a href="https://baudepromo.github.io/termos-de-uso/">Termos de Uso</a></li> <li><a href="https://baudepromo.github.io/afiliados/">Afiliados</a></li> </ul> </div> <div class="footer-links"> <h3>Siga-nos</h3> <ul> <li><a href="https://www.instagram.com/baudepromocaos" target="_blank">Instagram</a></li> <li><a href="https://www.tiktok.com/@baudepromocoes" target="_blank">TikTok</a></li> <li><a href="https://x.com/baudepromocao" target="_blank">X</a></li> <li><a href="https://www.youtube.com/@Ba%C3%BAdePromo%C3%A7%C3%B5es" target="_blank">YouTube</a></li> </ul> </div> </div> <div class="footer-bottom"> <p>&copy; 2026 Ba\xFA de Promo\xE7\xF5es \u2022 Todos os direitos reservados.</p> <p class="disclaimer"> <strong>Aviso:</strong> Participamos de programas de afiliados. Ao comprar atrav\xE9s de nossos links, podemos receber uma comiss\xE3o, sem nenhum custo adicional para voc\xEA. Os pre\xE7os e a disponibilidade podem variar conforme as lojas parceiras.\n</p> </div> </footer> <div id="authModal" class="modal-overlay"> <div class="modal-content"> <span style="position:absolute; top:10px; right:15px; cursor:pointer; font-size:20px;" onclick="closeAuthModal()">\xD7</span> <h3 id="authTitle">Fazer Login</h3> <input type="email" id="authEmail" class="auth-input" placeholder="Seu E-mail"> <input type="password" id="authPassword" class="auth-input" placeholder="Sua Senha"> <button id="mainAuthBtn" onclick="handleEmailAuth()" style="width:100%; padding:10px; background:#333; color:white; border:none; border-radius:5px; cursor:pointer;">Entrar</button> <div style="text-align:center; margin:15px 0; color:#999;">OU</div> <button class="google-btn" onclick="signInWithGoogle()"> <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18">\nEntrar com Google\n</button> <p id="authToggle" style="text-align:center; margin-top:15px; color:#ff6b00; cursor:pointer;" onclick="toggleAuthMode()">\nN\xE3o tem conta? Cadastre-se.\n</p> </div> </div> </body></html>'])), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, $$Global as a };
