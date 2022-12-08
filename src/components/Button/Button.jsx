import React from 'react'

const Button = ({handleClick, onSubmit, signInWithGoogleUser, ...props}) => <button className='button' type={props.type} onSubmit={onSubmit} onClick={props.text.includes('Google')? signInWithGoogleUser : handleClick}>{props.text}</button>;

export default Button;