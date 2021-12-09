// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJuMwvCYlXmIBl1OtPzXcBHeVuepFhXA4",
  authDomain: "prueba-tecnica-6a87e.firebaseapp.com",
  projectId: "prueba-tecnica-6a87e",
  storageBucket: "prueba-tecnica-6a87e.appspot.com",
  messagingSenderId: "460796866730",
  appId: "1:460796866730:web:e00a37119e304e061560d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
