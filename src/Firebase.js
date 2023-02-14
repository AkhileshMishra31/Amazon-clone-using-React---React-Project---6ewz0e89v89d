import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAt417umO1lQw1jVntFFsrB6zvK1UZdyLQ",
    authDomain: "mainclone.firebaseapp.com",
    projectId: "mainclone",
    storageBucket: "mainclone.appspot.com",
    messagingSenderId: "76709071250",
    appId: "1:76709071250:web:9ff97b906845ffb4b5194b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };