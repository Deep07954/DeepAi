// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "deepai-562b3.firebaseapp.com",
  projectId: "deepai-562b3",
  storageBucket: "deepai-562b3.firebasestorage.app",
  messagingSenderId: "932020026299",
  appId: "1:932020026299:web:bed60bafc1f57fbf10e29e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()