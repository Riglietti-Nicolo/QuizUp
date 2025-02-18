import { initializeApp, GoogleAuthProvider } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measuramentId: import.meta.env.VITE_FIREBASE_MEASURAMENT_ID
};

// inizializzazione di Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app); // contiene il real time db
export const auth = getAuth(app); //contiene l'autenticazione
export const googleProvider = new GoogleAuthProvider();