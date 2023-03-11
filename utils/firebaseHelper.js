//Below is for google firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optiona
export const getFirebaseApp = () => {
    const firebaseConfig = {
    apiKey: "AIzaSyDXXIxFVxnBHKQxYzTVA5i3wXaxjDwbl2Q",
    authDomain: "whaleschat.firebaseapp.com",
    projectId: "whaleschat",
    storageBucket: "whaleschat.appspot.com",
    messagingSenderId: "473610030178",
    appId: "1:473610030178:web:ee2ea11aac03ca3f17153b",
    measurementId: "G-27Q463JDF6"
    };

    // Initialize Firebase
    return initializeApp(firebaseConfig);
}