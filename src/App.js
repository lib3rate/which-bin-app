import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from "axios";

import './App.css';

import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import New from "./components/New/New";
import Forest from "./components/Forest/Forest";
import User from "./components/User/User";
import Navigation from './components/Navigation';

export default function App() {
  useEffect(() => {
    Promise.all([
      axios.get("/api/users"),
      axios.get("/api/bins"),
      axios.get("/api/user_bins")
    ]).then(all => {
      console.log(all);
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
            <New />
          </Route>
          <Route path="/users/:id">
            <User />
          </Route>
          <Route path="/forest">
            <Forest />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}