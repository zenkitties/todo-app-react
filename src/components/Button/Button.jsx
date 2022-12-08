import React from 'react'

const Button = ({handleClick, onSubmit, logGoogleUser, ...props}) => <button className='button' type={props.type} onSubmit={onSubmit} onClick={props.text.includes('Google')? logGoogleUser : handleClick}>{props.text}</button>;

export default Button;