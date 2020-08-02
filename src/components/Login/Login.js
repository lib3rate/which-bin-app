import React from 'react';
import { Link } from "react-router-dom";

import Form from "../Form";
import Button from "../Button";

export default function Login() {
  return (
    <>
      <h2>Sign in</h2>
      <Form/>
      <Button
        onClick={() => console.log("Submitted")}
        children="Sign in"
      />
      <Link to="/register">Sign up</Link>
    </>
  )
}