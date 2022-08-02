import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// import dotenv from 'dotenv';
// dotenv.config();

// const {
//   REACT_APP_API_KEY,
//   REACT_APP_AUHT_DOMAIN,
//   REACT_APP_PROJECT_ID,
//   REACT_APP_STORAGE_BUCKET,
//   REACT_APP_MESSAGING_SENDER_ID,
//   REACT_APP_APP_ID,
//   // REACT_APP_MEASUREMENT_ID,
// } = process.env;

const firebaseConfig = {
  apiKey: 'AIzaSyCLfgswqMEOBpqgJwTE4SXMLm7GaDfVNbc',
  authDomain: "plenna-4d51e.firebaseapp.com",
  projectId:  "plenna-4d51e",
  storageBucket: "plenna-4d51e.appspot.com",
  messagingSenderId: "704844534449",
  appId: "1:704844534449:web:e1e5ac181e29ed33a8c890",
  measurementId: "G-0PV1B3YN63"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



export const login = async (email, password) => {
  console.log(email, password);
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log('usuario logueado');
  } catch (error) {
    const errorMessage = error.message;
    console.log(errorMessage);
  }
}






