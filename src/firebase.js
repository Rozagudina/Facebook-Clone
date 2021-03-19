// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSIIbLyxioNjTh5AWkk022xPrKcowf7ws",
  authDomain: "facebook-clone-28728.firebaseapp.com",
  databaseURL: "https://facebook-clone-28728-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-28728",
  storageBucket: "facebook-clone-28728.appspot.com",
  messagingSenderId: "765124541582",
  appId: "1:765124541582:web:acb86fa88c450785499ddf",
  measurementId: "G-YZT47YM307"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;