import React from "react";
import "./App.scss";
import "./Fa";

import Top from "./components/top/Top";
import Middle from "./components/middle/Middle";
import About from "./components/about/About";
import Bottom from "./components/bottom/Bottom";

function App() {
  return (
    <div className="App">
      <Top />
      <About />
      <Middle />
      <Bottom />
    </div>
  );
}

export default App;
