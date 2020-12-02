import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PSLogo from "./ps-logo.svg";

const About = () => {
  return (
    <div className="About" id="about">
      <div className="Header">
        <h1>About me</h1>
      </div>
      <div className="Content">
        <div className="about-description">
          <p>
            Hello! I'm James - a front-end developer based in North-West England. 
          </p>
          <p>
            I have a firm grasp of HTML, CSS and JavaScript, as well as good knowledge of various frameworks, libraries and tools.
          </p>
          <p>
          I am a highly motivated and results driven individual always looking to work with the latest technologies to create fast and responsive web applications.
          </p>
          <p>Coding has been one of my hobbies for over 5 years and now I am ready to turn it into a full-time career!</p>
          <h1 className="instruction">My current technical skills:</h1>

        </div>
        <ul className="about-skills">
          <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">
            <li>
              <FontAwesomeIcon className="faIcon" icon={["fab", "html5"]} />
              HTML
            </li>
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
            target="_blank"
          >
            <li>
              <FontAwesomeIcon className="faIcon" icon={["fab", "css3"]} />
              CSS
            </li>
          </a>
          <a href="https://www.javascript.com/" target="_blank">
            <li>
              <FontAwesomeIcon className="faIcon" icon={["fab", "js"]} />
              JavaScript
            </li>
          </a>
          <a href="https://reactjs.org/" target="_blank">
            <li>
              <FontAwesomeIcon className="faIcon" icon={["fab", "react"]} />
              ReactJS
            </li>
          </a>
          <a href="https://sass-lang.com/" target="_blank">
            <li>
              <FontAwesomeIcon className="faIcon" icon={["fab", "sass"]} />
              Sass/SCSS
            </li>
          </a>
          <a href="https://gulpjs.com/" target="_blank">
            <li>
              <FontAwesomeIcon className="faIcon" icon={["fab", "gulp"]} />
              GulpJS
            </li>
          </a>
          <a href="https://getbootstrap.com/" target="_blank">
            <li>
              <FontAwesomeIcon className="faIcon" icon={["fab", "bootstrap"]} />
              Bootstrap
            </li>
          </a>
          <a href="https://www.adobe.com" target="_blank">
            <li>
              <img src={PSLogo} alt="" id="PSLogo" />
              Photoshop
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};
export default About;
