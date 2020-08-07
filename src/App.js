import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from "axios";

import './App.css';

import useApplicationData from "./helpers/helpers";
import feed from "./helpers/capture";

import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import New from "./components/New/New";
import Forest from "./components/Forest/Forest";
import User from "./components/User/User";
import Navigation from './components/Navigation';

export default function App() {
  const {
    state,
    setState,
    convertToArray,
    convertToObject,
    updateScore,
    ProcessImage
  } = useApplicationData();

  useEffect(() => {
    Promise.all([
      axios.get("/api/users"),
      axios.get("/api/user_bins")
    ]).then(all => {
      const user = convertToObject(all[0].data);
      const userBins = convertToArray(all[1].data);
      setState(prev => ({ ...prev, user, userBins }));
      feed();
    });
  }, []);

  return (
    <Router>
      <div>
        <Navigation/>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/new">
            <New
              recognition={state.recognition}
              ProcessImage={ProcessImage}
              updateScore={updateScore}
              user={state.user}
            />
          </Route>
          <Route path="/users/:id">
            <User
              user={state.user}
            />
          </Route>
          <Route path="/forest">
            <Forest 
              userBins={state.userBins}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}