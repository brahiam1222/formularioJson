// import firebase from "firebase/app";
// import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBa-ZRA1l2CG_I4omsDZNi1YabDQmE1AB8",
  authDomain: "dblibreria.firebaseapp.com",
  projectId: "dblibreria",
  storageBucket: "dblibreria.appspot.com",
  messagingSenderId: "883738329501",
  appId: "1:883738329501:web:8fa7fda64af6b19a692f74"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
