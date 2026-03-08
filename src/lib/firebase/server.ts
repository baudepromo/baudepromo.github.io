import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const serviceAccount = {
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  clientEmail: import.meta.env.FIREBASE_CLIENT_EMAIL,
  // O replace é essencial para chaves que vêm do .env
  privateKey: import.meta.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

export const serverApp = getApps().length === 0 
  ? initializeApp({ credential: cert(serviceAccount) })
  : getApps()[0];

export const serverAuth = getAuth(serverApp);