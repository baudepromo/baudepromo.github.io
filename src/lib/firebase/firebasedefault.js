import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
    import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
    import { getFirestore, doc, getDoc, updateDoc, arrayRemove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
    import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

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