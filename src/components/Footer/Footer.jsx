import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Footer.css';
import { Container } from "@material-ui/core";




function Footer() {

  return (
    <>
      <Container className="theFooter">
        {/* <WILL DISPLAY THE COPYRIGHT FOR PRIME> */}
        <footer> &copy; Webb Information Services Inc.</footer>

        {/* <WILL DISPLAY THE LOG OUT BUTTON> */}
        <LogOutButton className="navLink" />
      </Container>
    </>
  );
}

export default Footer;


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'