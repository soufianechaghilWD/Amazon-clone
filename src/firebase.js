import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBfmE-5bTrWDinATN9U1zZPnbQEzSPP0H8",
    authDomain: "a-clone1.firebaseapp.com",
    databaseURL: "https://a-clone1.firebaseio.com",
    projectId: "a-clone1",
    storageBucket: "a-clone1.appspot.com",
    messagingSenderId: "661818726411",
    appId: "1:661818726411:web:301c0edb20b7b27fb7cf0e",
    measurementId: "G-TS1G12NX6T"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {  auth };
