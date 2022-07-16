import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import billwLogo from './billwLogo.png';
// ---------< MUI IMPORTS >----------------
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';

function UserNav() {
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
            <AppBar position="fixed" sx={{ marginBottom: 1, flexDirection: 'row' }}>
                {/* <AppBar sx={{ marginBottom: 1 }}> */}

                {/* ------< HAMBURGER ICON >--------------- */}
                <Box sx={{ flexGrow: 1 }}>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        onClick={handleOpenMenu}
                        sx={{ mr: 2, color: "#ace23a" }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElMenu}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right', // <---- Where the drop down
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right', // <---- Where the drop down
                        }}
                        open={Boolean(anchorElMenu)}
                        onClose={handleCloseMenu}
                    >
                        <MenuItem onClick={handleCloseMenu}>
                            <Typography textAlign="center" onClick={handleProfile}>Profile</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseMenu}>
                            <Typography textAlign="center" onClick={handleSteps}>Steps</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseMenu}>
                            <Typography textAlign="center" onClick={handleMap}>Map</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseMenu}>
                            <Typography textAlign="center" onClick={handleAbout}>About</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseMenu}>
                            <Typography textAlign="center" onClick={handleSignOut}>Sign Out</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
                {/* ------< LOGO ICON >--------------- */}
                <Box sx={{ flexGrow: 1 }}>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="logo"
                        aria-controls="logo-appbar"
                        onClick={handleHome}
                        sx={{ mr: 2 }}
                    >
                        <Avatar alt="billwLogo" src={billwLogo} variant="square" />
                    </IconButton>
                </Box>
                {/* ------< USER ICON >--------------- */}
                <Box sx={{ flexGrow: 0 }}>
                    <IconButton
                        onClick={handleProfile}
                        sx={{ p: 0 }}
                    >
                        {
                            (function () {
                                if (user.profile_image) {
                                    return <Avatar src={user.profile_image} sx={{ border: 2, }} />
                                } else {
                                    return <div>
                                        {(getInitials(first_name, last_name)) && <Avatar sx={{}}>{initials}</Avatar>}
                                    </div>
                                }
                            })()
                        }
                    </IconButton>
                </Box>
            </AppBar>
        </>
    );
}

export default UserNav;