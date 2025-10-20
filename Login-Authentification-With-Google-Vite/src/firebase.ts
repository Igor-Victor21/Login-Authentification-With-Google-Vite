
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "CHAVE_API",
  authDomain: "DOMINIO_DA_SUA_API",
  projectId: "ID_PROJETO",
  storageBucket: "ARMAZENAMENTO",
  messagingSenderId: "ID_DO_REMETENTE_DA_MENSAGEM",
  appId: "ID_DO_APP",
  measurementId: "ID_DE_MEDIÇÃO"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;