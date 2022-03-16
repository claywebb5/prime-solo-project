
import React from 'react';
import {useSelector} from 'react-redux';

function Welcome() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
      <>
        <div className="container">
            <h2>Welcome, {user.username}!</h2>
            <p>Your ID is: {user.id}</p>
        </div>
        <div>
            <h3>Daily Prayer</h3>
        </div>
        <div>
            <h3>Daily Updates</h3>
        </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default Welcome;