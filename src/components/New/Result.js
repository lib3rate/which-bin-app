import React from "react";

import MyButton from "../Button";

export default function Result(props) {
  return (
    <>
      {/* <p id="opResult"></p>
      <h3 id="bin"></h3> */}
      <MyButton
        onClick={() => console.log("Trashed!")}
        children="Trashed!"
      />
    </>
  );
}