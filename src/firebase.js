

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0wuqk2nEtP6SlAwqb4n_e6i9hm5x7y1s",
  authDomain: "square-polytechnic.firebaseapp.com",
  projectId: "square-polytechnic",
  storageBucket: "square-polytechnic.firebasestorage.app",
  messagingSenderId: "678617059771",
  appId: "1:678617059771:web:3a2ed103600c380f15b49e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;