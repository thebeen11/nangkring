import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//your firebase configuration goes here
//https://firebase.google.com/docs/web/learn-more?authuser=0&hl=en#modular-version


const firebaseConfig = {
  apiKey: "AIzaSyDSFntKVnOhjHzB3tuW5zGy2PgRV9LptBI",
  authDomain: "yuks-a5d95.firebaseapp.com",
  projectId: "yuks-a5d95",
  storageBucket: "yuks-a5d95.appspot.com",
  messagingSenderId: "154450100574",
  appId: "1:154450100574:web:bddca05911299fefc84fcf",
  measurementId: "G-N536YMZNNZ"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp);

