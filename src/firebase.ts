import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8kJIT4rxxkPk69Iyf5BQ0KhHrHESoOz0",
  authDomain: "waspada-lp.firebaseapp.com",
  projectId: "waspada-lp",
  storageBucket: "waspada-lp.firebasestorage.app",
  messagingSenderId: "63952887719",
  appId: "1:63952887719:web:23d3d4e1aa9ef1944f2082",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
