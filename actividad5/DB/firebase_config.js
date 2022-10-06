import { initializeApp } from "firebase/app";
import { firestore } from "firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB9v3ARFLXX2DDGwxXwNZv3mX_GLTODD64",
    authDomain: "https://optativavii22-default-rtdb.firebaseio.com/",
    projectId: "optativavii22",
    storageBucket: "optativavii22.appspot.com",
    messagingSenderId: "390489466583",
    appId: "1:390489466583:web:06ab66d7c6857f141c7292"
  }; 
  const app = initializeApp(firebaseConfig);
  export default db = firestore(app) 
