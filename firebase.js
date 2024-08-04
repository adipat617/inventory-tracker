// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAawjUZWqyc_gwHK8ZpB9rDVYHFRukYws",
  authDomain: "inventory-tracker-2ffe8.firebaseapp.com",
  projectId: "inventory-tracker-2ffe8",
  storageBucket: "inventory-tracker-2ffe8.appspot.com",
  messagingSenderId: "1055093974460",
  appId: "1:1055093974460:web:ce3099ee247d19249bb7b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}