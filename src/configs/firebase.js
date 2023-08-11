import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-kzQ8P9-USP3Y4PHV7-SbOsQ5X_ov9Ss",
  authDomain: "tarkhineh-9ade7.firebaseapp.com",
  projectId: "tarkhineh-9ade7",
  storageBucket: "tarkhineh-9ade7.appspot.com",
  messagingSenderId: "30538674122",
  appId: "1:30538674122:web:5463748fce81ab25122933",
  measurementId: "G-8D9G26NSC5",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
