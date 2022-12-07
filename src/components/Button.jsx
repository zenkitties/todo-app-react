import React from 'react'

const Button = ({handleClick, logGoogleUser, ...props}) => <button className={props.text === 'Sign in' ? 'button disable-select': 'button'} type={props.type} onClick={props.text.includes('Google')? logGoogleUser : handleClick}>{props.text}</button>;

export default Button;