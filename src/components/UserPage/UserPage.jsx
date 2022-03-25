// ========================<THIS IS THE USER PROFILE VIEW>====================
import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      {/* <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p> */}
      <h1>Uh Oh! There must've been an error in the WIFI! Page not rendering, try again tomorrow..</h1>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
