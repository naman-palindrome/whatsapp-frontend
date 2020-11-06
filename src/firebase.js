import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDwa0N_ba666-7NeslkKXxP1kVUNeEZzoc",
  authDomain: "whatsapp-deployed.firebaseapp.com",
  databaseURL: "https://whatsapp-deployed.firebaseio.com",
  projectId: "whatsapp-deployed",
  storageBucket: "whatsapp-deployed.appspot.com",
  messagingSenderId: "30771264198",
  appId: "1:30771264198:web:368a9df1336f07341cb5c7",
  measurementId: "G-LZLZM9C41S",
});

const db = firebaseApp.firestore();
export default db;
