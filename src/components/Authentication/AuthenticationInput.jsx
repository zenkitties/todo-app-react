import React from 'react'

const AuthenticationInput =({ handleChange, ...props}) => {

    return (
        <input style={{fontSize: props.value.length > 20 && '16px' }} className="sign-in-input" type={props.type} placeholder={props.placeholder} value={props.value} name={props.name} onChange={handleChange} required/>
    )      
};
export default AuthenticationInput;