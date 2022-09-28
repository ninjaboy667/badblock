/* impliments sign in with redirect OPTIONAL
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'
*/
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import { 
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils'




const SignIn = () => {
    /* impliments sign in with redirect OPTIONAL
    useEffect( () => {
        async function fetchdata() {
            const response = await getRedirectResult(auth);
            if (response) {

                const userDocRef = await createUserDocumentFromAuth(response.user)
            }
        }
        fetchdata();
    }, []);
    */


    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
        const userDocRef = await createUserDocumentFromAuth(user)
    }

/* optional sign in with redirect
    const logGoogleRedirectUser = async () => {
        const { user } = await signInWithGoogleRedirect();
        console.log({ user })
    };
*/
    return (
        <div>
        <h1>Sign in Page</h1>
        <button onClick={logGoogleUser} >Sign In With Google</button>
        {/* <button onClick={logGoogleRedirectUser} >Sign In With Google Redirect</button> optional sign in with redirect*/}
        <SignUpForm />
        </div>
    );
}

export default SignIn