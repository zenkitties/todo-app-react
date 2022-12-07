import React from 'react'

const Button = (props) => <button className={props.text === 'Sign in' ? 'button disable-select': 'button'} type={props.type}>{props.text}</button>;

export default Button;