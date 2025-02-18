import { writable } from "svelte/store";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { goto } from "$app/navigation";
import { base } from "$app/paths";

export let user = writable(null);
export let sign_up = writable(false);
export let visible = writable(false);

export const logOut = async () => {
  try {
    await signOut(auth);
    user.set(null); // Fix: Use the set method to update the writable store
    goto(`${base}/home`);
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

onAuthStateChanged(auth, (firebaseUser) => {
  if (firebaseUser) {
    let userData = {
      uid: firebaseUser.uid,
      displayName: firebaseUser.displayName,
      email: firebaseUser.email,
      photoURL: firebaseUser.photoURL,
    };

    console.log("USER STORE OK");
    user.set(userData); // Usa il metodo set per aggiornare lo store
  } else {
    console.log("USER STORE NULL");
    user.set(null); // Usa il metodo set per resettare lo store
  }
});