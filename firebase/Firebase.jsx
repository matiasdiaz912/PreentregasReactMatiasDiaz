import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBR2DdGXCVkayTCWfv1C9V9HzoI6j_Tloo",
  authDomain: "proyectofinal-react-7c4cb.firebaseapp.com",
  projectId: "proyectofinal-react-7c4cb",
  storageBucket: "proyectofinal-react-7c4cb.appspot.com",
  messagingSenderId: "822069235952",
  appId: "1:822069235952:web:798478e0775adb37d8b235"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

