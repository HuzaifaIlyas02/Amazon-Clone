import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Add this import for authentication

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfl9RqmQI8ZwsRclOWGcZZ0ocBcvIX2-o",
  authDomain: "clone-8ecbd.firebaseapp.com",
  projectId: "clone-8ecbd",
  storageBucket: "clone-8ecbd.appspot.com",
  messagingSenderId: "764280641292",
  appId: "1:764280641292:web:231f3775a6248886bd9b29",
  measurementId: "G-MBWQS6KYCN",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
const auth = firebase.auth();
// Use getAuth() for authentication

export { db, auth }; // exporting the database and authentication
