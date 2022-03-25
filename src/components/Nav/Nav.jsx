import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

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
            <Link className="navLink" to="/user">
              Profile
            </Link>

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
