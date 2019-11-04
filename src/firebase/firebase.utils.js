import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBxPzxSc_0dYcAgO64zpL4IpqxoA38g1EA",
  authDomain: "crwn-db-react19.firebaseapp.com",
  databaseURL: "https://crwn-db-react19.firebaseio.com",
  projectId: "crwn-db-react19",
  storageBucket: "crwn-db-react19.appspot.com",
  messagingSenderId: "681893568482",
  appId: "1:681893568482:web:72ecf78568d2c1764d23bb",
  measurementId: "G-7F3ZH5GRX4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;