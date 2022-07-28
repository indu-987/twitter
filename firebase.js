import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8KoJXK0uwuLj6qUCg_zCrSO3buuO1MvY",
    authDomain: "twitter-8233d.firebaseapp.com",
    projectId: "twitter-8233d",
    storageBucket: "twitter-8233d.appspot.com",
    messagingSenderId: "98408804586",
    appId: "1:98408804586:web:ff4aec2a227cf146ee2793",
    measurementId: "G-06QK09XJJS"
  };

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
