import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyADMUSUdnXCyPnnOVNsIVr0rRzyj67OERw",
    authDomain: "gaamy-7096c.firebaseapp.com",
    projectId: "gaamy-7096c",
    storageBucket: "gaamy-7096c.appspot.com",
    messagingSenderId: "489776321538",
    appId: "1:489776321538:web:3e0a90783c74eacae3431b"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
  
export default firebase