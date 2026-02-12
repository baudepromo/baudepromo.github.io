// lib/firebase/firebase.js

// 1. Configuração
const firebaseConfig = {
    apiKey: "AIzaSyAltYkTpdrIShVv7wJXsszQqvOZXTC45Wg",
    authDomain: "baudepromocao-oficial.firebaseapp.com",
    projectId: "baudepromocao-oficial",
    storageBucket: "baudepromocao-oficial.firebasestorage.app",
    messagingSenderId: "743146859125",
    appId: "1:743146859125:web:6d1f5331e22b8ce981263c"
};

// Variáveis de estado internas do módulo
let app, auth, provider;
let authModule, appModule;
let isFirebaseLoaded = false;

/**
 * Inicializa o Firebase e configura o observador de estado.
 * @param {Function} onAuthStateChangedCallback - Função que será chamada quando o usuário logar/deslogar
 */
export async function initFirebase(onAuthStateChangedCallback) {
    if (isFirebaseLoaded) return { auth, authModule };

    console.log("⏳ Baixando Firebase (Módulo Separado)...");

    try {
        // Importação Dinâmica
        [appModule, authModule] = await Promise.all([
            import("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"),
            import("https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js")
        ]);

        // Inicialização
        app = appModule.initializeApp(firebaseConfig);
        auth = authModule.getAuth(app);
        provider = new authModule.GoogleAuthProvider();
        
        // Configura o listener de mudança de estado
        if (onAuthStateChangedCallback) {
            authModule.onAuthStateChanged(auth, onAuthStateChangedCallback);
        }

        // Aguarda a verificação inicial
        await auth.authStateReady();
        
        isFirebaseLoaded = true;
        console.log("✅ Firebase Service inicializado!");
        
        return { auth, authModule, provider };

    } catch (error) {
        console.error("Erro crítico no Firebase Service:", error);
        throw error;
    }
}

// --- Funções de Autenticação Exportadas ---

export async function loginWithGoogle() {
    await ensureInitialized();
    return authModule.signInWithPopup(auth, provider);
}

export async function loginWithEmail(email, password) {
    await ensureInitialized();
    return authModule.signInWithEmailAndPassword(auth, email, password);
}

export async function registerWithEmail(email, password) {
    await ensureInitialized();
    return authModule.createUserWithEmailAndPassword(auth, email, password);
}

export async function logoutUser() {
    await ensureInitialized();
    return authModule.signOut(auth);
}

// Função auxiliar interna para garantir que o Firebase carregou antes de tentar usar
async function ensureInitialized() {
    if (!isFirebaseLoaded) {
        await initFirebase();
    }
}