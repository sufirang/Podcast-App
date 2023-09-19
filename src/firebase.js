// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbbPQmQNRR2yenvSxWFM3dg0Y2g3LAWMY",
  authDomain: "podcast-app-20147.firebaseapp.com",
  projectId: "podcast-app-20147",
  storageBucket: "podcast-app-20147.appspot.com",
  messagingSenderId: "955995492255",
  appId: "1:955995492255:web:470dc460bafb1859ce37aa",
  measurementId: "G-97V7EESE3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };