import React from "react";
import Intro from "./Intro";
import Tilt from "react-tilt";

export default function Top() {
  return (
    <div className="Top">
      <Tilt className="Tilt" options={{ max: 20, reverse: true }}>
        <Intro />
      </Tilt>
    </div>
  );
}
