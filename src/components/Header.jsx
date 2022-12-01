import React from 'react'
import ListAltIcon from '@mui/icons-material/ListAlt';

const Header = () => {
    return (
        <div className="todo-header">
            
            <h2 className="heading-text"><ListAltIcon fontSize="large" className="icon"/> Todo App</h2>
            <span className="login-register">Login / Register</span>
        </div>
    );
};

export default Header;