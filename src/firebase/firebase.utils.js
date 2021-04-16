import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBwrru0d89V0F5LRBu9J821bXEcKoyNKBM',
  authDomain: 'crown-db-9eb90.firebaseapp.com',
  projectId: 'crown-db-9eb90',
  storageBucket: 'crown-db-9eb90.appspot.com',
  messagingSenderId: '246146857301',
  appId: '1:246146857301:web:d6da52046114807b3a17dc',
  measurementId: 'G-X2B4F1W4TQ',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
