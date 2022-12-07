import React, {useState} from 'react'
import LoginInput from './LoginInput';
import Button from './Button'

const Login = ({isRegistered}) => {
    const [name, setName] = useState({
        "fname": "",
        "lname": ""
    })
    const {fname, lname} = name;

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
        <div className="login">
            <h1>Hello {fname} {lname}</h1>
            <h2>{!isRegistered && `Let's get you registered.`}</h2>
            { !isRegistered &&
            <div className="register-container">
                <LoginInput  handleChange={handleChange} placeholder="First Name"  name="fname" type="text" />
                <LoginInput  handleChange={handleChange} placeholder="Last Name" name="lname" type="text" />
            </div> 
            }
            <div className="sign-in-container">
                <LoginInput placeholder="Email" name="email" type="email" />
                <LoginInput placeholder="Password" name="password" type="password" />
                <Button text={isRegistered ? "Sign in" : "Register"} />
            </div>
            <Button text="Sign in with Google"/>
            <h4>Only Google Sign-In works right now.</h4>
        </div>
    )
}

export default Login;