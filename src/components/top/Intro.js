import React from "react";
import Tilt from "react-tilt";

export default function Intro() {
  return (
    <div className="Intro">
      <Tilt className="Tilt-top" options={{ max: 20, reverse: true }}>
        <h1>James Hollos</h1>
        <h3>Front-end developer</h3>
      </Tilt>
    </div>
  );
}
