import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
  

  return (
    <div className="nav">

      {/* <ON LOGIN / REGISTER VIEW - WHEN CLICKED BRINGS USER TO LANDING PAGE> */}
      <Link className="navTitle" to="/home">
        Hey Bill W.
      </Link>
      {/* ---------------------------------------------------------- */}

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
          <>
            {/* <WELCOME VIEW> */}
            <Link className="navLink" to="/welcome">
              Home
            </Link>

            {/* <THIS WILL BE THE INTERACTIVE 12 STEP PROGRAM> */}
            {/* <USED TO BE THE LINK FOR INFO> */}
            <Link className="navLink" to="/steps">
              12 Steps
            </Link>

            {/* <THIS WILL BE THE MAP> */}
            <Link className="navLink" to="/map">
              Map
            </Link>

            {/* <USER PAGE & LOG OUT BUTTON COMPONENTS> */}
            {/* <Link className="navLink" to="/user">
              Profile
            </Link> */}

          </>
        )}
        {/* <THIS WILL BE THE ABOUT PAGE COMPONENT> */}
        <Link className="navLink" to="/about">
          About
        </Link>

      </div>

    </div>
  );
}

export default Nav;
