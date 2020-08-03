import React from 'react';
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <img src="images/tree1.jpg" alt="Logo"/>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/new">Capture a photo</Link>
        </li>
        <li>
          <Link to="/forest">Forest</Link>
        </li>
        <li>
          <Link to="/users/1">Your userpage</Link>
        </li>
      </ul>
    </>
  );
}