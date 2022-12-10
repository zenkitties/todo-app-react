import {initializeApp} from 'firebase/app';
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalnformation) => {
   if (!userAuth) return;
   
    const userDocRef = doc(db, 'users', userAuth.uid);
    
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        const todos = [];

        try {
            await setDoc(userDocRef, {
                displayName, 
                email, 
                createdAt,
                todos,
                ...additionalnformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
    //if(!callback) return;

    onAuthStateChanged(auth, callback);
}
    