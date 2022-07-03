import firebase from "firebase";
require ("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAiT7gdMyyMaou849CXfUhKnxe1u-YThyA",
    authDomain: "e-library-app-5a484.firebaseapp.com",
    projectId: "e-library-app-5a484",
    storageBucket: "e-library-app-5a484.appspot.com",
    messagingSenderId: "1080895428535",
    appId: "1:1080895428535:web:276b9fd0ab7d3a8c19fa32"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();