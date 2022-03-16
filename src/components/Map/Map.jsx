// ========================<THIS IS THE MAP VIEW>====================
import React, { Component } from 'react';
// To use the google maps JS API with react
import GoogleMap from 'google-map-react';
// To make POST requests to our backend server
import axios from 'axios';
// To enable realtime functionality with Pusher
import Pusher from 'pusher-js';
// To notify users when new users are online or go offline
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//=======<IMPORTS>=================================

//---<STYLING>------------------------
const mapStyles = {
    width: '100%',
    height: '100%'
}
const markerStyle = {
    height: '50px',
    width: '50px',
    marginTop: '-50px'
}
const imgStyle = {
    height: '100%'
}

//---<LOCATION OF USER>------------------------
const Marker = ({ title }) => (
    <div style={markerStyle}>
      <img style={imgStyle} src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png" alt={title} />
      <h3>{title}</h3>
    </div>
  );


function MapView() {
  return (
    <div className="container">
      <p>This is the map view</p>
    </div>
  );
}

export default MapView;