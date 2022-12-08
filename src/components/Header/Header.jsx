import React from 'react'
import ListAltIcon from '@mui/icons-material/ListAlt';

const Header = ({setSignedUp, setSignedIn}) => {

    const handleSignIn = () => {
        setSignedUp(true);
    }

    const handleSignUp = () => {
        setSignedUp(false);
        setSignedIn(false);
    }

    return (
        <div className="todo-header">
            <h2 className="heading-text"><ListAltIcon fontSize="large" className="icon"/> Todo App</h2>
            <div className="sign-in-options">
                <span className="sign-in-link" onClick={handleSignIn}>Sign In</span>
                <span>&nbsp; / &nbsp;</span>
                <span className="sign-up-link" onClick={handleSignUp}> Sign Up</span>
            </div>
            
        </div>
    );
};

export default Header;