import React, {useState} from "react";
import "./App.scss";
import "./Fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Top from "./components/top/Top";
import Middle from "./components/middle/Middle";
import About from "./components/about/About";
import Bottom from "./components/bottom/Bottom";
import Footer from "./components/Footer"

function App() {

  const [darkMode, setDarkMode] = useState(false);


  const toggleDarkmode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "App darkmode" : "App"}>
      <FontAwesomeIcon className="faIcon darkmode-toggle" icon={["fas", "moon"]} onClick={toggleDarkmode}/>
      <Top />
      <About />
      <Middle />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
