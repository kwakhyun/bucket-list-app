// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK3lAASyaMkd8HlAEUt-p4-_1V90koFGs",
  authDomain: "react-prac-a20d4.firebaseapp.com",
  projectId: "react-prac-a20d4",
  storageBucket: "react-prac-a20d4.appspot.com",
  messagingSenderId: "440895659909",
  appId: "1:440895659909:web:8acd5dbf7d544292d5aeec",
  measurementId: "G-EE7QHPBX4E",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
export const db = getFirestore();
