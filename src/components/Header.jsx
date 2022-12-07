import React from 'react'
import ListAltIcon from '@mui/icons-material/ListAlt';

const Header = ({setIsRegistered, setLogin}) => {

    const handleLoginLink = () => {
        setIsRegistered(true);
    }

    const handleRegisterLink = () => {
        setIsRegistered(false);
        setLogin(false);
    }

    return (
        <div className="todo-header">
            <h2 className="heading-text"><ListAltIcon fontSize="large" className="icon"/> Todo App</h2>
            <div className="login-options">
                <span className="login-link" onClick={handleLoginLink}>Login</span>
                <span>&nbsp; / &nbsp;</span>
                <span className="register-link" onClick={handleRegisterLink}> Register</span>
            </div>
            
        </div>
    );
};

export default Header;