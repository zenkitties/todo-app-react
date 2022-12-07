import React from 'react'

const LoginInput =({ handleChange, ...props}) => {

    return (
        <input className="login-input disable-select" placeholder={props.placeholder} value={props.value} name={props.name} onChange={handleChange} />
    )      
};
export default LoginInput;