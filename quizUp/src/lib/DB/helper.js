import { get, ref, child} from 'firebase/database'
import { db } from './firebase'
import { getUserData, updateData } from "./dbFuncs";

//funzione che aggiorna lo stato utente
export async function updateUser(uid) {
    let userData = await getUserData(uid);
    user.update((current) => ({ ...current, ...userData }));
  }
  
//funzione per creare un utente se non esiste 
export async function checkUser(uid, email, password) {
  let exists = await getUserData(uid);
  if (!exists) {
      await updateData(uid, "email", email);
      await updateData(uid, "password", password); // ⚠️ Pericoloso salvare password in chiaro
      await updateData(uid, "played", 0);
      await updateData(uid, "last", 0);
      await updateData(uid, "best", 0);
  }
  await updateUser(uid);
}

