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
        children="Sign up"
      />
      <Link to="/register">Sign in</Link>
    </>
  )
}