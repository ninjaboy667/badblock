/* impliments sign in with redirect OPTIONAL
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'
*/
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.scss'


const Authentication = () => {
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



/* optional sign in with redirect
    const logGoogleRedirectUser = async () => {
        const { user } = await signInWithGoogleRedirect();
        console.log({ user })
    };
*/
    return (
        <div className='authentication-container'>
        <SignInForm/>
        <SignUpForm />
        </div>
    );
}

export default Authentication