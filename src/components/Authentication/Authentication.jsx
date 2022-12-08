import React, {useState} from 'react'
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth, 
    createAuthUserWithEmailAndPassword,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils'

import AuthenticationInput from './AuthenticationInput';
import Button from '../Button/Button'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Authentication = ({signedUp, setSignedIn}) => {
    const [formFields, setFormFields] = useState(defaultFormFields)

    const {displayName, email, password, confirmPassword } = formFields;

    const resetFormFields =() => {
        setFormFields(defaultFormFields);
    }

    const logGoogleUser = async () => {
        const  { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormFields({...formFields, [name]: value})
    }

    const handleAuthentication =async (e) => {
        e.preventDefault();

       if(!signedUp && confirmPassword !== password ) {
            alert('passwords do not match');
            return;
       }

       if(signedUp) {
            try {
                const response = await signInAuthUserWithEmailAndPassword(email, password);
                console.log(response);
                setSignedIn(true);
                resetFormFields();
            } catch(error) {
                switch(error.code) {
                    case 'auth/user-not-found':
                        alert('User account was not found.');
                        break;
                    case 'auth/wrong-password':
                        alert('Incorrect password for email.');
                        break;
                    default:
                        console.log('There was an error with sign in', error);
                        alert('There was an error with sign in');
                        break;
                }
            }
        } else {
            try {
                    const {user} = await createAuthUserWithEmailAndPassword(email, password);
                    
                    await createUserDocumentFromAuth(user, { displayName });
                    resetFormFields();
                    
                } catch(error) {
                    if(error.code === 'auth/email-already-in-use') {
                        alert('Cannot create user, email already in use.')
                    } else {
                    console.log('There was an error with registering your user.', error);
                    }
                }
            }
    }

    return (
        <div className="sign-in">
            <h1>Hello {displayName}</h1>
            <h2>{!signedUp && `let's get you registered.`}</h2>
            <form className="sign-in-form" onSubmit={handleAuthentication}>
                { !signedUp &&
                <div className="register-container">
                    <AuthenticationInput  handleChange={handleChange} value={displayName} placeholder="Display Name"  name="displayName" type="text" />
                </div> 
                }
                <div className="sign-in-container">
                    <AuthenticationInput handleChange={handleChange} placeholder="Email" name="email" value={email} type="email" />
                    <AuthenticationInput handleChange={handleChange} placeholder="Password" name="password" value={password} type="password" />
                    { !signedUp &&
                    <AuthenticationInput handleChange={handleChange} placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} type="password" />
                    }
                    <Button type="submit "text={signedUp ? "Sign in" : "Sign up"}/>
                </div>
            </form>
            <Button type="button" text="Sign in with Google" logGoogleUser={logGoogleUser}/>
            <h4>Only Google Sign-In works right now.</h4>
        </div>
    )
}

export default Authentication;