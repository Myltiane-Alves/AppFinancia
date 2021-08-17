import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBe9dvYZ6q2vin2HFnkYsKT1uY8XnPKHsQ",
    authDomain: "financa-edf58.firebaseapp.com",
    projectId: "financa-edf58",
    storageBucket: "financa-edf58.appspot.com",
    messagingSenderId: "83658629417",
    appId: "1:83658629417:web:d6b90b1c8c38cdcfb65738",
    measurementId: "G-KXHF2L0EMS"
};
if (!firebase.apps.length){
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export default firebase;