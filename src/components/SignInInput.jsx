import React from 'react'

const SignInInput =({ handleChange, ...props}) => {

    return (
        <input className="sign-in-input disable-select" placeholder={props.placeholder} value={props.value} name={props.name} onChange={handleChange} />
    )      
};
export default SignInInput;