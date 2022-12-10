import React, {useContext} from 'react'
import { UserContext } from '../../contexts/User';

import {signOutUser}  from '../../utils/firebase/firebase.utils';


import ListAltIcon from '@mui/icons-material/ListAlt';

const Header = ({setSignedUp, setSignedIn, signedIn}) => {

    const {currentUser} = useContext(UserContext);

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
            { !currentUser ?
            <div className="sign-in-options">
                <span className="sign-in-link" onClick={handleSignIn}>Sign In</span>
                <span>&nbsp; / &nbsp;</span>
                <span className="sign-up-link" onClick={handleSignUp}>Sign Up</span>
            </div>
            :
            <div className="log-out-option">
                <span className="log-out-link"  onClick={signOutUser}>Sign Out</span>
            </div>
            }
        </div>
    );
};

export default Header;