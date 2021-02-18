import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCTQxHou3qQfyJ-Ke8HargDhUAk2QJKLLw",
    authDomain: "spacex-db.firebaseapp.com",
    projectId: "spacex-db",
    storageBucket: "spacex-db.appspot.com",
    messagingSenderId: "197728801807",
    appId: "1:197728801807:web:87c4959e53f2c6e3993f7a"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;