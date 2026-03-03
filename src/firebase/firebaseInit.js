import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "invoice-app-c100b.firebaseapp.com",
  projectId: "invoice-app-c100b",
  storageBucket: "invoice-app-c100b.firebasestorage.app",
  messagingSenderId: "138362209934",
  appId: "1:138362209934:web:9b79b58d6f5793c503ebdf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();