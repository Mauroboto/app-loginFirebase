console.log("Firebase Loaded");
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNfpuNiyL-KhO8qWex2PWMaVZ0gbw8mxA",
  authDomain: "app-fisc-elecc2023.firebaseapp.com",
  projectId: "app-fisc-elecc2023",
  storageBucket: "app-fisc-elecc2023.appspot.com",
  messagingSenderId: "119440952629",
  appId: "1:119440952629:web:fe540fb8b6c0230b69107c",
  measurementId: "G-CH0X7RNCYP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
