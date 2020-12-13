import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBFD0devGbKBVlGwKSJPsSBQtgIfn4y-04",
    authDomain: "evase-bfc45.firebaseapp.com",
    projectId: "evase-bfc45",
    storageBucket: "evase-bfc45.appspot.com",
    messagingSenderId: "950530571002",
    appId: "1:950530571002:web:78f1abbf0f6945a3b46743"
}

firebase.initializeApp(firebaseConfig);

export default firebase;