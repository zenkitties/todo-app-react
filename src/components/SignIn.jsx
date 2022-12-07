import React, {useState} from 'react'
import {signInWithGooglePopup} from '../utils/firebase/firebase.utils'
import SignInInput from './SignInInput';
import Button from './Button'

const SignIn = ({isRegistered}) => {
    const [name, setName] = useState({
        "fname": "",
        "lname": ""
    })

    const {fname, lname} = name;

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);

    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setName(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
        
    }

    return (
        <div className="sign-in">
            <h1>Hello {fname} {lname}</h1>
            <h2>{!isRegistered && `Let's get you registered.`}</h2>
            { !isRegistered &&
            <div className="register-container">
                <SignInInput  handleChange={handleChange} placeholder="First Name"  name="fname" type="text" />
                <SignInInput  handleChange={handleChange} placeholder="Last Name" name="lname" type="text" />
            </div> 
            }
            <div className="sign-in-container">
                <SignInInput placeholder="Email" name="email" type="email" />
                <SignInInput placeholder="Password" name="password" type="password" />
                <Button text={isRegistered ? "Sign in" : "Register"} />
            </div>
            <Button text="Sign in with Google" logGoogleUser={logGoogleUser}/>
            <h4>Only Google Sign-In works right now.</h4>
        </div>
    )
}

export default SignIn;