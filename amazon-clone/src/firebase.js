import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Add this import for authentication

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU-sG9ADhS1iGMja05dLTt92vXNAVT7c0",
  authDomain: "clone-1bb21.firebaseapp.com",
  projectId: "clone-1bb21",
  storageBucket: "clone-1bb21.appspot.com",
  messagingSenderId: "314027737621",
  appId: "1:314027737621:web:074c5b9d8226a781dc441c",
  measurementId: "G-9MWG52LEE1",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
const auth = firebase.auth();
// Use getAuth() for authentication

export { db, auth }; // exporting the database and authentication
