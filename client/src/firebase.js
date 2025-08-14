// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-14ec5.firebaseapp.com",
  projectId: "real-estate-14ec5",
  storageBucket: "real-estate-14ec5.firebasestorage.app",
  messagingSenderId: "260905930465",
  appId: "1:260905930465:web:d961e44beb9f06ba3f31a0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
