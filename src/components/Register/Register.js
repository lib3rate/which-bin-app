import React from 'react';
import { Link } from "react-router-dom";

import Form from "../Form";
import Button from "../Button";

export default function Register() {
  return (
    <>
      <h2>Register</h2>
      <Form/>
      <Button
        onClick={() => console.log("Submitted")}
        children="Sign up"
      />
      <Link to="/login">Sign in</Link>
    </>
  )
}