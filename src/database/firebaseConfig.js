// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Initialize Cloud Firestore and get a reference to the service

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgGY2lZiqOrsrpw02uyGfmeGBUtBPxSHs",
  authDomain: "ronan-adm-aula.firebaseapp.com",
  projectId: "ronan-adm-aula",
  storageBucket: "ronan-adm-aula.appspot.com",
  messagingSenderId: "733024502771",
  appId: "1:733024502771:web:7bbbc5be25edd3ccc00886",
  measurementId: "G-5PBTCFJH3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);