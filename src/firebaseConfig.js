// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWjNntAj7cI7BcrryebyRnHZ6Gs2u2wBM",
  authDomain: "elbooks-ecc65.firebaseapp.com",
  projectId: "elbooks-ecc65",
  storageBucket: "elbooks-ecc65.appspot.com",
  messagingSenderId: "869295044685",
  appId: "1:869295044685:web:9e415acb562158e5240404",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);