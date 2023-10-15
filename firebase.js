import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD99eTtThj6-BXJDXqN5hThpv8H_gWlLYs",
  authDomain: "telegram-clone-47b89.firebaseapp.com",
  projectId: "telegram-clone-47b89",
  storageBucket: "telegram-clone-47b89.appspot.com",
  messagingSenderId: "610219120605",
  appId: "1:610219120605:web:732bb8767bc70024834834"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const storage = getStorage(app);
