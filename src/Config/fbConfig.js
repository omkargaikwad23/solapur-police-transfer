import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAXtViOsXDaH1q00jRQfFCTm1f7HRHInbo",
  authDomain: "spstaffdata.firebaseapp.com",
  projectId: "spstaffdata",
  storageBucket: "spstaffdata.appspot.com",
  messagingSenderId: "24247610762",
  appId: "1:24247610762:web:9deda0e9e62c6d623c2c73",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.firestore().settings({ timestampsInSnapshots: true });

export { db, firebase };
