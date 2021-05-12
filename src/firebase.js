import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDbgsUI5t_i25TcUzEVtLxhl5zUg2FmZZc",
    authDomain: "netflix-434f3.firebaseapp.com",
    projectId: "netflix-434f3",
    storageBucket: "netflix-434f3.appspot.com",
    messagingSenderId: "300453716613",
    appId: "1:300453716613:web:7e4a6d83f882ab1e00ffec"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;