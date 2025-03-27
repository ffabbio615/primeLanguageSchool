import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeHmGofA_Uqk_I6qV6MvPijjSE4A4hAbw",
  authDomain: "testes-7268b.firebaseapp.com",
  projectId: "testes-7268b",
  storageBucket: "testes-7268b.firebasestorage.app",
  messagingSenderId: "42074069732",
  appId: "1:42074069732:web:292b5ed0c742beaf3caaf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);