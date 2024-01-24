// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-33287.firebaseapp.com",
  projectId: "mern-estate-33287",
  storageBucket: "mern-estate-33287.appspot.com",
  messagingSenderId: "1095860990584",
  appId: "1:1095860990584:web:3c3cc1ba8e299d361f738d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);