// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlKg00pRRV8ZMsvxXhoH7SCTE8U-OeZUA",
  authDomain: "numnum-82afa.firebaseapp.com",
  projectId: "numnum-82afa",
  storageBucket: "numnum-82afa.firebasestorage.app",
  messagingSenderId: "544183028038",
  appId: "1:544183028038:web:01d9990e23b39511eafd47",
  measurementId: "G-V5DTZ8NEDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
