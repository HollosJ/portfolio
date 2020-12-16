import React from "react";
import "./App.scss";
import "./Fa";

import Top from "./components/top/Top";
import Middle from "./components/middle/Middle";
import About from "./components/about/About";
import Bottom from "./components/bottom/Bottom";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Top />
      <About />
      <Middle />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
