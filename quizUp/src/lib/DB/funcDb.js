import { get, ref, update, child } from "firebase/database";
import { db } from './firebase'


export let updateData = async (uid, field, value) => {
  if (!uid || !field) { // Controlla se `uid` e `field` sono validi
    console.error('UID o campo non forniti.');
    return;
  }

  console.log('creazione utente user:', uid);

  // Crea un oggetto che rappresenta l'aggiornamento nel database
  let updates = { [`users/${uid}/${field}`]: value };

  // Aggiorna i dati nel database Firebase
  await update(ref(db), updates)
    .then(() => {
      console.log('Dati aggiunti o aggiornati con successo');
    })
    .catch((e) => {
      if (e.code === 'PERMISSION_DENIED') {
        console.error('Permessi insufficienti per aggiornare i dati.');
      } else {
        console.error("Errore nell'assegnazione del ruolo:", e);
      }
    });
};


// Funzione per ottenere i dati di un utente specifico
export async function getUserData(uid) {
  let userData = [];
  try {
    const snapshot = await get(ref(db, `users/${uid}`)); // Recupera i dati dell'utente
    if (snapshot.exists()) {
      userData = snapshot.val();
    } else {
      console.error("Nessun dato trovato per questo utente");
      userData = null;
    }
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
  }
  return userData;
};