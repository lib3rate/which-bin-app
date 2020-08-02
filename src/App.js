import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Register from "./components/Register";
import Login from "./components/Login";
import New from "./components/New";
import Forest from "./components/Forest";
import User from "./components/User";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
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