import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import New from "./components/New/New";
import Forest from "./components/Forest/Forest";
import User from "./components/User/User";
import Navigation from './components/Navigation';

export default function App() {
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