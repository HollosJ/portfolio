import React from "react";
import Projects from "./Projects";

export default function Middle() {
  return (
    <div className="Middle" id="middle">
      <div className="Header">
        <h1>My Projects</h1>
      </div>
      <h1 className="instruction">Click on a project to see more info...</h1>
      <Projects />
    </div>
  );
}
