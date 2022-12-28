import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmWZcHVdbAgispv7RL70IecJtnaCs6lQY",
  authDomain: "tasteit-2ce5b.firebaseapp.com",
  projectId: "tasteit-2ce5b",
  storageBucket: "tasteit-2ce5b.appspot.com",
  messagingSenderId: "570928628531",
  appId: "1:570928628531:web:9eff62393e6669ec007446",
  measurementId: "G-HPJYWRZ22D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
