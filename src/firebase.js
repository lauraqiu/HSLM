import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC6uWEvrXS4nwB6hT_j7YIszb-mVMvETGg",
    authDomain: "hslm-a0f6a.firebaseapp.com",
    projectId: "hslm-a0f6a",
    storageBucket: "hslm-a0f6a.appspot.com",
    messagingSenderId: "123862185528",
    appId: "1:123862185528:web:15fc81b5abc09b4371d8cd",
    measurementId: "G-5CYV02B64V"
});

var db = firebaseApp.firestore();

export { db };