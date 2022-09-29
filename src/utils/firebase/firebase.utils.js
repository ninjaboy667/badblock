
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut } from 'firebase/auth';


import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1DvgWODP_XqpoEHbJ9kJ855DtK5sod6Y",
  authDomain: "crwn-clothing-db-ecf3d.firebaseapp.com",
  projectId: "crwn-clothing-db-ecf3d",
  storageBucket: "crwn-clothing-db-ecf3d.appspot.com",
  messagingSenderId: "453297513870",
  appId: "1:453297513870:web:d5dc22a7208b08b4dff0df"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={} ) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userDocRef
};

export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if (!email ||!password) return;

    return await createUserWithEmailAndPassword(auth,email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email,password) => {
    if (!email ||!password) return;

    return await signInWithEmailAndPassword(auth,email, password)
}

export const signOutUser = async () => await signOut(auth);


