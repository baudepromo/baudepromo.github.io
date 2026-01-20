import { c as createComponent, r as renderTemplate, e as createAstro, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_B1wTNOfG.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$MainLayout, a as $$Global } from '../../chunks/MainLayout_Cxp42-Ip.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
    import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
    import { getFirestore, doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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
    const db = getFirestore(app);
    const provider = new GoogleAuthProvider();

    // --- FUN\xC7\xC3O DE LOGIN ---
    const btnLogin = document.getElementById('btn-google-login');
    if(btnLogin) {
        btnLogin.addEventListener('click', async () => {
            try {
                const result = await signInWithPopup(auth, provider);
                document.getElementById('login-modal').style.display = 'none';
                showToast(\`Bem-vindo, \${result.user.displayName.split(' ')[0]}!\`);
            } catch (error) {
                console.error("Erro login:", error);
                showToast("Erro ao fazer login");
            }
        });
    }

    // --- TOGGLE COLLECTIONS ---
    async function toggleCollection(collectionName, productId, elementId, activeClass, successMsg, removedMsg) {
        if (!auth.currentUser) {
            document.getElementById('login-modal').style.display = 'flex';
            return;
        }

        const btn = document.getElementById(elementId);
        const userRef = doc(db, collectionName, auth.currentUser.uid);
        const wasActive = btn.classList.contains('active');

        try {
            btn.classList.toggle('active'); 
            
            const snap = await getDoc(userRef);
            
            if (!wasActive) {
                if (!snap.exists()) {
                    await setDoc(userRef, { email: auth.currentUser.email, items: [String(productId)], updatedAt: new Date() });
                } else {
                    await updateDoc(userRef, { items: arrayUnion(String(productId)) });
                }
                showToast(successMsg);
            } else {
                await updateDoc(userRef, { items: arrayRemove(String(productId)) });
                showToast(removedMsg);
            }
        } catch (e) {
            console.error(\`Erro em \${collectionName}:\`, e);
            btn.classList.toggle('active');
            showToast("Erro na opera\xE7\xE3o.");
        }
    }

    window.toggleWishlist = (pid, eid) => toggleCollection("wishlists", pid, eid, "active", "Salvo nos favoritos \u2764\uFE0F", "Removido dos favoritos");
    window.toggleAlert = (pid, eid) => toggleCollection("alerts", pid, eid, "active", "Alerta criado! \u{1F514}", "Alerta removido");

    // --- SHARE LINK ---
    window.shareLink = async (title, url) => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Ba\xFA de Promo\xE7\xF5es',
                    text: \`Olha essa oferta: \${title}\`,
                    url: url
                });
            } catch (err) { console.log('Share cancelado'); }
        } else {
            try {
                await navigator.clipboard.writeText(url);
                showToast("Link copiado! \u{1F4CB}");
            } catch (err) { showToast("Erro ao copiar link."); }
        }
    };

    // --- CARREGAMENTO DO PRODUTO (LAYOUT NOVO) ---
async function loadProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const encodedId = params.get('id');
    const contentArea = document.getElementById("content-area");

    if (!encodedId) {
        console.error("ID n\xE3o encontrado na URL");
        return;
    }

    try {
        // Decodifica\xE7\xE3o mais simples e robusta
        const productId = decodeURIComponent(atob(encodedId)).trim();
        
        console.log("ID Decodificado:", productId); // DEBUG: Veja se o ID sai limpo aqui

        const res = await fetch('/data/produtos.json');
        const products = await res.json();

        console.log("Primeiro produto do JSON:", products[0]?.id); // DEBUG: Veja o formato do ID no JSON

        // Buscando o produto (convertendo ambos para String e removendo espa\xE7os)
        const product = products.find(p => String(p.id).trim() === productId);

        if (!product) {
            console.warn("Produto n\xE3o encontrado no array de produtos.");
            contentArea.innerHTML =
                "<div class='loading-container'><h2>Oferta expirada ou n\xE3o encontrada!</h2><p>O ID " + productId + " n\xE3o est\xE1 no banco de dados.</p></div>";
            return;
        }

        // Se encontrou, gera o layout (mantenha seu c\xF3digo de innerHTML abaixo...)
        const safeId = btoa(encodeURIComponent(productId)).replace(/[^a-zA-Z0-9]/g, '');
        const heartId = "heart_" + safeId;
        const alertId = "alert_" + safeId;

        contentArea.innerHTML = \`
            <div class="img-side">
                <div class="floating-actions">
                    <button id="\${heartId}" class="icon-btn heart-btn" onclick="toggleWishlist('\${product.id}', '\${heartId}')">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                    <button id="\${alertId}" class="icon-btn alert-btn" onclick="toggleAlert('\${product.id}', '\${alertId}')">
                        <i class="fa-solid fa-bell"></i>
                    </button>
                    <button class="icon-btn" onclick="shareLink('\${product.title.replace(/'/g, "\\\\'")}', location.href)">
                        <i class="fa-solid fa-share-nodes"></i>
                    </button>
                </div>
                <img src="\${product.img}" alt="\${product.title}">
            </div>
            <div class="info-side">
                <span class="store-tag"><i class="fa-solid fa-shop"></i> \${product.store}</span>
                <h1>\${product.title}</h1>
                <div class="price-wrapper">
                    <p class="price-label">Melhor pre\xE7o encontrado:</p>
                    <div class="price-tag"><span>R$</span> \${product.price}</div>
                </div>
                <div class="benefits-grid">
                    <div class="benefit-item"><i class="fa-solid fa-truck-fast"></i> Frete Gr\xE1tis</div>
                    <div class="benefit-item"><i class="fa-solid fa-shield-check"></i> Compra Segura</div>
                    <div class="benefit-item"><i class="fa-solid fa-credit-card"></i> Parcelamento</div>
                    <div class="benefit-item"><i class="fa-solid fa-check-circle"></i> Original</div>
                </div>
                <a href="\${product.link}" target="_blank" class="cta-button">
                    Ir para a Loja <i class="fa-solid fa-arrow-up-right-from-square" style="margin-left:8px"></i>
                </a>
            </div>
        \`;

        if (auth.currentUser) {
            checkStatus("wishlists", productId, heartId);
            checkStatus("alerts", productId, alertId);
        }

    } catch (e) {
        console.error("Erro Cr\xEDtico:", e);
        contentArea.innerHTML = "<div class='loading-container'><h2>Erro ao carregar oferta.</h2></div>";
    }
}



    async function checkStatus(collectionName, productId, elementId) {
        if(!auth.currentUser) return;
        try {
            const snap = await getDoc(doc(db, collectionName, auth.currentUser.uid));
            if (snap.exists() && snap.data().items?.includes(String(productId))) {
                document.getElementById(elementId)?.classList.add('active');
            }
        } catch(e) { console.log(e); }
    }

    window.showToast = (msg) => {
        const toast = document.getElementById('toast-box');
        toast.innerHTML = \`<i class="fa-solid fa-info-circle"></i> \${msg}\`;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    };

    onAuthStateChanged(auth, (user) => { 
        loadProductDetails(); 
    });

<\/script>`], [`<script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
    import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
    import { getFirestore, doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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
    const db = getFirestore(app);
    const provider = new GoogleAuthProvider();

    // --- FUN\xC7\xC3O DE LOGIN ---
    const btnLogin = document.getElementById('btn-google-login');
    if(btnLogin) {
        btnLogin.addEventListener('click', async () => {
            try {
                const result = await signInWithPopup(auth, provider);
                document.getElementById('login-modal').style.display = 'none';
                showToast(\\\`Bem-vindo, \\\${result.user.displayName.split(' ')[0]}!\\\`);
            } catch (error) {
                console.error("Erro login:", error);
                showToast("Erro ao fazer login");
            }
        });
    }

    // --- TOGGLE COLLECTIONS ---
    async function toggleCollection(collectionName, productId, elementId, activeClass, successMsg, removedMsg) {
        if (!auth.currentUser) {
            document.getElementById('login-modal').style.display = 'flex';
            return;
        }

        const btn = document.getElementById(elementId);
        const userRef = doc(db, collectionName, auth.currentUser.uid);
        const wasActive = btn.classList.contains('active');

        try {
            btn.classList.toggle('active'); 
            
            const snap = await getDoc(userRef);
            
            if (!wasActive) {
                if (!snap.exists()) {
                    await setDoc(userRef, { email: auth.currentUser.email, items: [String(productId)], updatedAt: new Date() });
                } else {
                    await updateDoc(userRef, { items: arrayUnion(String(productId)) });
                }
                showToast(successMsg);
            } else {
                await updateDoc(userRef, { items: arrayRemove(String(productId)) });
                showToast(removedMsg);
            }
        } catch (e) {
            console.error(\\\`Erro em \\\${collectionName}:\\\`, e);
            btn.classList.toggle('active');
            showToast("Erro na opera\xE7\xE3o.");
        }
    }

    window.toggleWishlist = (pid, eid) => toggleCollection("wishlists", pid, eid, "active", "Salvo nos favoritos \u2764\uFE0F", "Removido dos favoritos");
    window.toggleAlert = (pid, eid) => toggleCollection("alerts", pid, eid, "active", "Alerta criado! \u{1F514}", "Alerta removido");

    // --- SHARE LINK ---
    window.shareLink = async (title, url) => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Ba\xFA de Promo\xE7\xF5es',
                    text: \\\`Olha essa oferta: \\\${title}\\\`,
                    url: url
                });
            } catch (err) { console.log('Share cancelado'); }
        } else {
            try {
                await navigator.clipboard.writeText(url);
                showToast("Link copiado! \u{1F4CB}");
            } catch (err) { showToast("Erro ao copiar link."); }
        }
    };

    // --- CARREGAMENTO DO PRODUTO (LAYOUT NOVO) ---
async function loadProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const encodedId = params.get('id');
    const contentArea = document.getElementById("content-area");

    if (!encodedId) {
        console.error("ID n\xE3o encontrado na URL");
        return;
    }

    try {
        // Decodifica\xE7\xE3o mais simples e robusta
        const productId = decodeURIComponent(atob(encodedId)).trim();
        
        console.log("ID Decodificado:", productId); // DEBUG: Veja se o ID sai limpo aqui

        const res = await fetch('/data/produtos.json');
        const products = await res.json();

        console.log("Primeiro produto do JSON:", products[0]?.id); // DEBUG: Veja o formato do ID no JSON

        // Buscando o produto (convertendo ambos para String e removendo espa\xE7os)
        const product = products.find(p => String(p.id).trim() === productId);

        if (!product) {
            console.warn("Produto n\xE3o encontrado no array de produtos.");
            contentArea.innerHTML =
                "<div class='loading-container'><h2>Oferta expirada ou n\xE3o encontrada!</h2><p>O ID " + productId + " n\xE3o est\xE1 no banco de dados.</p></div>";
            return;
        }

        // Se encontrou, gera o layout (mantenha seu c\xF3digo de innerHTML abaixo...)
        const safeId = btoa(encodeURIComponent(productId)).replace(/[^a-zA-Z0-9]/g, '');
        const heartId = "heart_" + safeId;
        const alertId = "alert_" + safeId;

        contentArea.innerHTML = \\\`
            <div class="img-side">
                <div class="floating-actions">
                    <button id="\\\${heartId}" class="icon-btn heart-btn" onclick="toggleWishlist('\\\${product.id}', '\\\${heartId}')">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                    <button id="\\\${alertId}" class="icon-btn alert-btn" onclick="toggleAlert('\\\${product.id}', '\\\${alertId}')">
                        <i class="fa-solid fa-bell"></i>
                    </button>
                    <button class="icon-btn" onclick="shareLink('\\\${product.title.replace(/'/g, "\\\\\\\\'")}', location.href)">
                        <i class="fa-solid fa-share-nodes"></i>
                    </button>
                </div>
                <img src="\\\${product.img}" alt="\\\${product.title}">
            </div>
            <div class="info-side">
                <span class="store-tag"><i class="fa-solid fa-shop"></i> \\\${product.store}</span>
                <h1>\\\${product.title}</h1>
                <div class="price-wrapper">
                    <p class="price-label">Melhor pre\xE7o encontrado:</p>
                    <div class="price-tag"><span>R$</span> \\\${product.price}</div>
                </div>
                <div class="benefits-grid">
                    <div class="benefit-item"><i class="fa-solid fa-truck-fast"></i> Frete Gr\xE1tis</div>
                    <div class="benefit-item"><i class="fa-solid fa-shield-check"></i> Compra Segura</div>
                    <div class="benefit-item"><i class="fa-solid fa-credit-card"></i> Parcelamento</div>
                    <div class="benefit-item"><i class="fa-solid fa-check-circle"></i> Original</div>
                </div>
                <a href="\\\${product.link}" target="_blank" class="cta-button">
                    Ir para a Loja <i class="fa-solid fa-arrow-up-right-from-square" style="margin-left:8px"></i>
                </a>
            </div>
        \\\`;

        if (auth.currentUser) {
            checkStatus("wishlists", productId, heartId);
            checkStatus("alerts", productId, alertId);
        }

    } catch (e) {
        console.error("Erro Cr\xEDtico:", e);
        contentArea.innerHTML = "<div class='loading-container'><h2>Erro ao carregar oferta.</h2></div>";
    }
}



    async function checkStatus(collectionName, productId, elementId) {
        if(!auth.currentUser) return;
        try {
            const snap = await getDoc(doc(db, collectionName, auth.currentUser.uid));
            if (snap.exists() && snap.data().items?.includes(String(productId))) {
                document.getElementById(elementId)?.classList.add('active');
            }
        } catch(e) { console.log(e); }
    }

    window.showToast = (msg) => {
        const toast = document.getElementById('toast-box');
        toast.innerHTML = \\\`<i class="fa-solid fa-info-circle"></i> \\\${msg}\\\`;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    };

    onAuthStateChanged(auth, (user) => { 
        loadProductDetails(); 
    });

<\/script>`])));
}, "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/components/produtos/info.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` <link rel="stylesheet" href="/styles/variables.css"> <link rel="stylesheet" href="/styles/global.css"> <link rel="stylesheet" href="/styles/layout.css"> <link rel="stylesheet" href="/styles/pages/produtos/info.css"> ${maybeRenderHead()}<div class="back-navigation"> <button onclick="window.history.back()" class="btn-back"> <i class="fa-solid fa-arrow-left"></i> <span>Voltar</span> </button> </div> <div class="main-container"> <div id="content-area" class="detail-card"> <div class="loading-container"> <i class="fas fa-circle-notch fa-spin" style="font-size: 3rem; color: #ff4b4b;"></i> <p style="margin-top: 10px; color: var(--text-muted); font-weight: 600;">Carregando melhor oferta...</p> </div> </div> </div> <div id="toast-box" class="toast"></div> <div id="login-modal" class="modal-overlay"> <div style="background: white; padding: 40px; border-radius: 25px; text-align: center; max-width: 380px; width: 90%; box-shadow: 0 25px 50px rgba(0,0,0,0.2);"> <div style="width: 70px; height: 70px; background: #fff0f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;"> <i class="fa-solid fa-user-lock" style="color: #ff4b4b; font-size: 2rem;"></i> </div> <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 10px; color: #1a1a1a;">Faça Login</h2> <p style="color: var(--text-muted); line-height: 1.5; margin-bottom: 30px; font-size: 0.95rem;">Para salvar favoritos e criar alertas, precisamos saber quem é você.</p> <button id="btn-google-login" style="width: 100%; background: #1a1a1a; color: white; border: none; padding: 15px; border-radius: 50px; font-weight: 600; font-size: 1rem; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 12px; transition: 0.3s; box-shadow: 0 5px 15px rgba(0,0,0,0.2);"> <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" alt="Google">
Entrar com Google
</button> <button onclick="document.getElementById('login-modal').style.display='none'" style="background: transparent; border: none; color: #666; margin-top: 20px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">
Cancelar
</button> </div> </div> ${renderComponent($$result2, "Info", $$Info, {})} ${renderComponent($$result2, "Global", $$Global, {})} ` })}`;
}, "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/pages/produtos/info/index.astro", void 0);

const $$file = "C:/Users/joaos/OneDrive/Documents/baudepromo/radiant-radiation/src/pages/produtos/info/index.astro";
const $$url = "/produtos/info";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
