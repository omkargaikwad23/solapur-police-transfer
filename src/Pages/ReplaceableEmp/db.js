import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAXtViOsXDaH1q00jRQfFCTm1f7HRHInbo",
  authDomain: "spstaffdata.firebaseapp.com",
  projectId: "spstaffdata",
  storageBucket: "spstaffdata.appspot.com",
  messagingSenderId: "24247610762",
  appId: "1:24247610762:web:dd453b17580755383c2c73"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
export { db };
