
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAN1_nKHgi0Pv8ShDOAVY6BGp5N8V3dHPA",
  authDomain: "dinamitetienda.firebaseapp.com",
  projectId: "dinamitetienda",
  storageBucket: "dinamitetienda.appspot.com",
  messagingSenderId: "561897892334",
  appId: "1:561897892334:web:0b9d260c27725c9453c6ff"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);