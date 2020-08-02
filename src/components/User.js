import React from 'react';
import { useParams } from "react-router-dom";

import Navigation from "./Navigation";

export default function User() {
  let { id } = useParams();

  return (
    <>
      <Navigation/>
      <h2>Requested user ID: {id}</h2>;
    </>
  )
}