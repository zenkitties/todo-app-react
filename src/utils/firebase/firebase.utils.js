import {initializeApp} from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBuxwiKFr_kMVelLNiZJF6SevsXwHm1WUA",
    authDomain: "todo-db-5baa2.firebaseapp.com",
    projectId: "todo-db-5baa2",
    storageBucket: "todo-db-5baa2.appspot.com",
    messagingSenderId: "78636881370",
    appId: "1:78636881370:web:30a98eae26974892115ce3",
    measurementId: "G-HX4RDGETRY"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);