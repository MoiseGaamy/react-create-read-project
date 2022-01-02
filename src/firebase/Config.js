import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJN5oQd3myNkA3FM-HUkvsYLNRXEmnGpo",
  authDomain: "anotherone-56228.firebaseapp.com",
  projectId: "anotherone-56228",
  storageBucket: "anotherone-56228.appspot.com",
  messagingSenderId: "79784839013",
  appId: "1:79784839013:web:5843cd4ac5d577e507038c",
  measurementId: "G-T586TBQHVZ"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
  
export default firebase