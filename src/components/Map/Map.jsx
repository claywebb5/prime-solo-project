// ========================<THIS IS THE MAP VIEW>================================
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
import './Map.css';

//====================<IMPORTS>=================================

//------------<STYLING>-----------------------------
const mapStyles = {
    width: '100%',
    height: '50vh'
}
const markerStyle = {
    height: '50px',
    width: '50px',
    marginTop: '50px'
}
const imgStyle = {
    height: '50%'
}

// // Return map bounds based on list of places
// const getMapBounds = (map, maps, places) => {
//     const bounds = new maps.LatLngBounds();
  
//     places.forEach((place) => {
//       bounds.extend(new maps.LatLng(
//         place.geometry.location.lat,
//         place.geometry.location.lng,
//       ));
//     });
//     return bounds;
//   };

// // Re-center map when resizing the window
// const bindResizeListener = (map, maps, bounds) => {
//     maps.event.addDomListenerOnce(map, 'idle', () => {
//       maps.event.addDomListener(window, 'resize', () => {
//         map.fitBounds(bounds);
//       });
//     });
//   };

//   // Fit map to its bounds after the api is loaded
// const apiIsLoaded = (map, maps, places) => {
//     // Get bounds by our places
//     const bounds = getMapBounds(map, maps, places);
//     // Fit map to bounds
//     map.fitBounds(bounds);
//     // Bind the resize listener
//     bindResizeListener(map, maps, bounds);
//   };

//---<LOCATION OF USER>------------------------
const Marker = ({ title }) => (
    <div style={markerStyle}>
        <img style={imgStyle} src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png" alt={title} />
        <h3>{title}</h3>
    </div>
);

// =================<CREATE A CLASS COMPONENT>=============================
class MapView extends Component {

    //----<ADD STATES TO COMPONENT TO TRACK>----------------------------------
    constructor(props) {
        super(props)
        this.state = {
            // The map center
            center: { lat: 44.972044, lng: -93.264819 },
            // Location for other online users
            locations: {},
            // Users currently online
            users_online: {},
            // Username of current user
            current_user: ''
        }
    } //----<END STATE>-------

    //----<LIFECYCLE METHOD>----------------------------------------
    // Pusher object binding the front & back end listening for:
    componentDidMount() {
        let pusher = new Pusher("89062ebb8b009df054e1", {
            authEndpoint: "http://localhost:5000/pusher/auth",
            cluster: "us2"
        })
        // Subscribe to presence channel
        this.presenceChannel = pusher.subscribe('presence-channel');

        // Event triggered from the backend server when a user successfully
        // subscribes to a presence channel
        this.presenceChannel.bind('pusher:subscription_succeeded', members => {
            this.setState({
                users_online: members.members,
                current_user: members.myID
            });
            this.getLocation();
            this.notify();
        })

        // Event triggered when another user's location is updated
        this.presenceChannel.bind('location-update', body => {
            this.setState((prevState, props) => {
                const newState = { ...prevState }
                newState.locations[`${body.username}`] = body.location;
                return newState;
            });
        });

        // Event triggered when another user goes offline
        this.presenceChannel.bind('pusher:member_removed', member => {
            this.setState((prevState, props) => {
                const newState = { ...prevState };
                // remove member location once they go offline
                delete newState.locations[`${member.id}`];
                // delete member from the list of online users
                delete newState.users_online[`${member.id}`];
                return newState;
            })
            this.notify()
        })

        // Event triggered when a new user comes online
        this.presenceChannel.bind('pusher:member_added', member => {
            this.notify();
        })

    } //----<END LIFECYCLE METHOD>--------

    //---<GET LOCATION METHOD>----------------------------
    getLocation = () => {
        // Check if the app can access the geolocation property
        // of the browser and alerts the user if it can't
        if ("geolocation" in navigator) {
            // Get the users' location as the user moves and then updates
            // the component states with the latest location
            navigator.geolocation.watchPosition(position => {
                let location = { lat: position.coords.latitude, lng: position.coords.longitude };
                this.setState((prevState, props) => {
                    let newState = { ...prevState };
                    newState.center = location;
                    newState.locations[`${prevState.current_user}`] = location;
                    return newState;
                });
                // Trigger a location update event
                axios.post("http://localhost:5000/update-location", {
                    username: this.state.current_user,
                    location: location
                }).then(res => {
                    if (res.status === 200) {
                        console.log("new location updated successfully");
                    }
                });
            })
        } else {
            alert("Sorry, geolocation is not available on your device. You need that to use this app");
        }
    } //----<END getLocation METHOD>---------

    //----<NOTIFY METHOD>----------------------------------------------------
    notify = () => toast(`Users online : ${Object.keys(this.state.users_online).length}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type: 'info'
    }); //----<END NOTIFY METHOD>------------------

    // =========================<RENDER>===========================================
    render() {

        
        
        // -----<Creates a list of Marker's for each online user>----------
        let locationMarkers = Object.keys(this.state.locations).map((username, id) => {
            // -----<RETURN THE USERS LOCATION>----------
            return (
                
                <Marker
                    key={id}
                    title={`${username === this.state.current_user ? 'My location' : username + "'s location"}`}
                    lat={this.state.locations[`${username}`].lat}
                    lng={this.state.locations[`${username}`].lng}
                >
                </Marker>
            ); // ------<END USER LOCATION RETURN>-------
        }); // ----------------<END locationMarkers>--------------------

        // -----<RETURN THE ACTUAL GOOGLE MAP API>-----------------------------------
        return (
            <div style={mapStyles}>
                <GoogleMap
                    // Enter in your API key
                    bootstrapURLKeys={{ key: 'AIzaSyCm4Rm_ufmh4QQpWaohfbJLXSsbPTwDurQ' }}
                    center={this.state.center}
                    defaultZoom={10}
                    yesIWantToUseGoogleMapApiInternal={true} // To prevent bugs from internal api objects
                    // onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, places)}
                >
                    {locationMarkers}
                </GoogleMap>
            </div>
        ) // END RETURN>-----------------------------------------------

        // -------------<TOAST NOTIFICATIONS OF OTHER USERS>---------------------------
        // ------< * Needs to be fixed * >---------------
        // return (
        //     <div>
        //         <ToastContainer />
        //     </div>
        // );

    } // ===========<END RENDER>================================================
} // =======================<END CLASS COMPONENT>================================================

export default MapView;