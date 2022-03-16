import React, { useEffect } from 'react';
import { HashRouter as Router, Redirect, Route, Switch, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';

import Welcome from '../Welcome/Welcome';
import UserPage from '../UserPage/UserPage';

import TwelveSteps from '../TwelveSteps/TwelveSteps';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import './App.css';



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
          
          {/* ========<>=================== */}
          <ProtectedRoute
            // logged in shows WELCOME VIEW else shows LoginPage
            exact
            path="/welcome"
          >
            <Welcome />
          </ProtectedRoute>

          {/* ========<TWELVE STEP PROGRAM>=================== */}
          <ProtectedRoute
            exact
            path="/steps"
          >
            <TwelveSteps />
          </ProtectedRoute>

          {/* ========<LITERATURE>=================== */}
          {/* <ProtectedRoute
            exact
            path="/"
          >
            < />
          </ProtectedRoute> */}

          {/* ========<MAP>=================== */}
          {/* <ProtectedRoute
            exact
            path="/"
          >
            < />
          </ProtectedRoute> */}

          {/* ========<PROFILE>=================== */}
          <ProtectedRoute
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          {/* ========<>=================== */}
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

          {/* ========<>=================== */}
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

          {/* ========<>=================== */}
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
