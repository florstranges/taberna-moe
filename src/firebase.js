import firebase from "firebase/app";

import "firebase/firestore";

const config = {
    apiKey: "AIzaSyCUfgJKkM7J2p8Lc29V9HdCGqtd1S97Yx0",
    authDomain: "taberna-moe-react.firebaseapp.com",
    projectId: "taberna-moe-react",
    storageBucket: "taberna-moe-react.appspot.com",
    messagingSenderId: "523964431413",
    appId: "1:523964431413:web:d22f481d17a4c5693bc57c"
};


//Esta funcion me da una instancia de la App ya inicializada
const app = firebase.initializeApp(config)


// Esta funcion me da una instancia de Firestore
//export const firestore = firebase.firestore(App)

export const getFirestore = () => {
    return firebase.firestore(app)
}