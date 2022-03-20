import React, { useEffect } from 'react';
import { HashRouter as Router, Redirect, Route, Switch, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Nav from '../Nav/Nav'; // Header & Nav Bar
import Footer from '../Footer/Footer'; // Footer
import AboutPage from '../AboutPage/AboutPage'; // "About" - Info Page
import Welcome from '../Welcome/Welcome'; // "Home" - Daily Prayer & Tasks
import UserPage from '../UserPage/UserPage'; // "Profile" - User info
import Literature from '../Literature/Literature'; // "Literature" - Big Book
import MapView from '../Map/Map'; // "Map" - The Map
import TwelveSteps from '../TwelveSteps/TwelveSteps'; // "12 Steps"
import LandingPage from '../LandingPage/LandingPage'; // "Register" - Register View
import LoginPage from '../LoginPage/LoginPage'; // "Login" - Login View
import RegisterPage from '../RegisterPage/RegisterPage'; // "Register" - Hosts the register form
import EditPrayer from '../EditPrayer/EditPrayer'; // "EDIT BUTTON" - Edit the specific Daily Prayer from Welcome View
import ManageTasks from '../ManageTasks/ManageTasks'; // "MANAGE TASKS BUTTON" - Manage all tasks
import EditTask from "../EditTask/EditTask";

// "MANAGE PRAYERS BUTTON" - Manage all prayers


function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);


  return (

    <Router>
      <div>
        <Nav />

        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}

          {/* ========<WELCOME VIEW>=================== */}
          <ProtectedRoute
            // logged in shows WELCOME VIEW else shows LoginPage
            exact
            path="/welcome"
          >
            <Welcome />
          </ProtectedRoute>

          {/* ========<EDIT PRAYER VIEW>=================== */}
          <ProtectedRoute
            // logged in shows edit prayer view else shows LoginPage
            exact
            path="/prayer-edit"
          >
            <EditPrayer />
          </ProtectedRoute>

          {/* ========<MANAGE TASKS VIEW>=================== */}
          <ProtectedRoute
            // logged in shows WELCOME VIEW else shows LoginPage
            exact
            path="/tasks"
          >
            <ManageTasks />
          </ProtectedRoute>

          {/* ========<EDIT TASKS VIEW>=================== */}
          <ProtectedRoute
            // logged in shows WELCOME VIEW else shows LoginPage
            exact
            path="/edit-task"
          >
            <EditTask />
          </ProtectedRoute>

          {/* ========<TWELVE STEP PROGRAM>=================== */}
          <ProtectedRoute
            exact
            path="/steps"
          >
            <TwelveSteps />
          </ProtectedRoute>

          {/* ========<LITERATURE>=================== */}
          <ProtectedRoute
            exact
            path="/literature"
          >
            <Literature />
          </ProtectedRoute>

          {/* ========<MAP>=================== */}
          <ProtectedRoute
            exact
            path="/map"
          >
            <MapView />
          </ProtectedRoute>

          {/* ========<PROFILE>=================== */}
          <ProtectedRoute
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          {/* ========<IF USER IS ALREADY LOGGED IN>=================== */}
          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the WELCOME VIEW page
              <Redirect to="/welcome" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          {/* ========<IF USER IS ALREADY LOGGED IN>=================== */}
          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the WELCOME VIEW page
              <Redirect to="/welcome" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          {/* ========<IF USER IS ALREADY LOGGED IN>=================== */}
          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the WELCOME VIEW page
              <Redirect to="/welcome" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* ========<IF NO ROUTES ARE FOUND>=================== */}
          <Route>
            <h1>404</h1>
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
