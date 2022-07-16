import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import billwLogo from './billwLogo.png';
import UserNav from './UserNav';
// ---------< MUI IMPORTS >----------------
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';



function Nav() {
    // ========< TOOLS >==============
    const history = useHistory();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    // =====< USESTATE >=============================
    // For the hamburger icon menu
    const [anchorElMenu, setAnchorElMenu] = useState(null);
    // =====< CLICK LISTENERS >=============================
    // OPEN the hamburger icon menu
    const handleOpenMenu = (event) => {
        setAnchorElMenu(event.currentTarget);
    };
    // CLOSE the hamburger icon menu
    const handleCloseMenu = () => {
        setAnchorElMenu(null);
    };
    // -------< PROFILE ICON >---------------
    const { first_name, last_name } = user;
    let initials = '';

    const getInitials = (firstName, lastName) => {
        let firstLetter = 'J';
        let secondLetter = '';

        if (firstName && lastName) {
            firstLetter = (firstName[0]).toUpperCase();
            secondLetter = (lastName[0]).toUpperCase();
        } else if (firstName) {
            firstLetter = (firstName[0]).toUpperCase();
            secondLetter = (firstName[1]);
        }
        initials = firstLetter + secondLetter;
        return true;
    }
    // GO Home
    const handleHome = () => {
        history.push("/welcome")
    };
    // GO to 12 Steps
    const handleSteps = () => {
        history.push("/steps")
    };
    // GO to Map
    const handleMap = () => {
        history.push("/map")
    };
    // GO to About
    const handleAbout = () => {
        history.push("/about")
    };
    // GO to Profile
    const handleProfile = () => {
        history.push("/user")
    };
    // SIGN OUT
    const handleSignOut = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/welcome');
    };


    return (
        <>
            {/* <div className="nav"> */}
                <div>

                    {/* If no user is logged in, show these links */}
                    {!user.id && (
                        // If there's no user, show login/registration links
                        <Link className="navLink" to="/login">
                            Login / Register
                        </Link>
                    )}

                    {/* If a user is logged in, show these links */}
                    {user.id && (
                        <UserNav />
                    )}
                </div>

            {/* </div> */}
        </>
    );
}

export default Nav;
