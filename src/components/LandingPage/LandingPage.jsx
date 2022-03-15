import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {

  // Welcome Statement
  const [heading, setHeading] = useState('Welcome to Hey Bill W.');
  // Project Overview
  const [firstParagraph, setFirstParagraph] = useState(`During the Covid-19 lockdown in March of 2020, everyone was affected to some extent from the stay-at-home order, especially the A.A. community. Which relies on mutual support from members of the community in order to follow the program. That's why I believe in this day and age, a virtual recovery experience is something that needs more attention. With my app, Hey Bill W, in honor of the founder of Alcoholics Anonymous. Those who are in A.A. will log in, and be greeted with a daily prayer and reminders of what they have to do that day. Be able to follow and update the choices they are making during their 12 Steps. Have access to The Big Book, and an interactive map of their location, as well as the location of other users when given their unique key. There will also be a page regarding the history of A.A. and Bill W, information about the program, and contact information for local treatment centers.`)

  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          
          <p>{firstParagraph}</p>

        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
