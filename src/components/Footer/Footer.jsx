import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Footer.css';



function Footer() {

  return (
    <>
      {/* <WILL DISPLAY THE COPYRIGHT FOR PRIME> */}
      <footer> &copy; Prime Digital Academy</footer>

      {/* <WILL DISPLAY THE LOG OUT BUTTON> */}
      <LogOutButton className="navLink" />
    </>
  );
}

export default Footer;


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'