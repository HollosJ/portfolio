import React from "react";
import Intro from "./Intro";

import Arrow from "./down.svg";

export default function Top() {
  return (
    <div className="Top">
      <Intro />
      <a href="#about" className="projectBtn">
        <img src={Arrow} alt="" />
      </a>
    </div>
  );
}
