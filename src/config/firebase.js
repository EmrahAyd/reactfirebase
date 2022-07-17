import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth, createUserWithEmailAndPassword, updateCurrentUser, signInWithEmailAndPassword} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyClGGc52aGUJwrhRIEwrYmXIO8SOxncsqU",
    authDomain: "react-firebase-18bdc.firebaseapp.com",
    projectId: "react-firebase-18bdc",
    storageBucket: "react-firebase-18bdc.appspot.com",
    messagingSenderId: "1014481393863",
    appId: "1:1014481393863:web:0c9db785026229a60046e2"
  };

  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
  export const auth = getAuth(app);


 export const singUp = async (name, email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateCurrentUser(auth,{displayName: name})
  };


 export const singIn = async (email, password) => { await signInWithEmailAndPassword(auth, email, password);}

