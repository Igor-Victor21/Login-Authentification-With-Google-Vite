
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHnto91LbbMEph1dqTcK33RH685I0fK-0",
  authDomain: "login-authentification-3b8a6.firebaseapp.com",
  projectId: "login-authentification-3b8a6",
  storageBucket: "login-authentification-3b8a6.firebasestorage.app",
  messagingSenderId: "324480633469",
  appId: "1:324480633469:web:245e6a2758a4265c547f14",
  measurementId: "G-MLTQSLDNZ3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;