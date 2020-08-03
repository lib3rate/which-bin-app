import React from "react";

export default function Status(props) {
  return (
    <main className="analyze-status">
      <img
        className="analyze-status-image"
        src="images/status.png"
        alt="Analyzing"
      />
      <h3>{props.text}</h3>
    </main>
  );
}