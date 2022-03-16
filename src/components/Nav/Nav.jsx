import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">

      {/* <ON LOGIN / REGISTER VIEW - WHEN CLICKED BRINGS USER TO LANDING PAGE> */}
      <Link to="/home">
        <h2 className="nav-title">Hey Bill W.</h2>
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
            {/* <USER PAGE & LOG OUT BUTTON COMPONENTS> */}
            <Link className="navLink" to="/user">
              Home
            </Link>
            
            {/* <THIS WILL BE THE INTERACTIVE 12 STEP PROGRAM> */}
            <Link className="navLink" to="/info">
              12 Steps
            </Link>

            {/* <LogOutButton className="navLink" /> */}
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>

      </div>

    </div>
  );
}

export default Nav;
