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


function MapView() {
  return (
    <div className="container">
      <p>This is the map view</p>
    </div>
  );
}

export default MapView;