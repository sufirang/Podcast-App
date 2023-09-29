import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDAK5AnMPtwgfwnr93gDGoiiwRtNJyRpaw",
  authDomain: "podcast-newplatform.firebaseapp.com",
  projectId: "podcast-newplatform",
  storageBucket: "podcast-newplatform.appspot.com",
  messagingSenderId: "157631706012",
  appId: "1:157631706012:web:d26bd8cf1bf8da37d3ce59"
};

//my
// const firebaseConfig = {
//   apiKey: "AIzaSyBFeTj1BmxpxEqja6bUqa0YWsEOOLY76is",
//   authDomain: "podcast-platform-75897.firebaseapp.com",
//   projectId: "podcast-platform-75897",
//   storageBucket: "podcast-platform-75897.appspot.com",
//   messagingSenderId: "117804743977",
//   appId: "1:117804743977:web:e0a7ead2929fc722700b38",
//   measurementId: "G-D555E1SNWC"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };

