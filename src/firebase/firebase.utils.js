import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDBbes_1yN-P8gwBiBRtWcr0B2xQHNh1-s",
    authDomain: "crwn-db-ccc01.firebaseapp.com",
    projectId: "crwn-db-ccc01",
    storageBucket: "crwn-db-ccc01.appspot.com",
    messagingSenderId: "670385647007",
    appId: "1:670385647007:web:d5abe1cd01eba70e31e1aa"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;