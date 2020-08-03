import React from "react";

import { ProcessImage } from "../../helpers/helpers";

import Input from "../Input";

export default function Upload(props) {
  return (
    <>
      <h2>Submit a photo</h2>
      <Input
        onChange={(event) => ProcessImage()}
      />
    </>
  );
}