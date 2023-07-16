import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBB1QXVtjdOA3QgQIsqG7BIgrzurBgxlNc",
    authDomain: "clone-82ed4.firebaseapp.com",
    projectId: "clone-82ed4",
    storageBucket: "clone-82ed4.appspot.com",
    messagingSenderId: "885157348922",
    appId: "1:885157348922:web:bcff4424839df9e9819703"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};