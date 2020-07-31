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
            Hello! My name is James Hollos, I'm a 21-year old British front-end
            web developer.
          </p>
          <p>
            I have a firm grasp of HTML, CSS and JavaScript, as well as good
            knowledge of various frameworks, libraries and tools.
          </p>
          <p>
            Personally, I am a highly-motivated and productive fast learner who
            is always looking to learn something new and improve my current
            skillset. I have a technical background and have always been around
            computers. I have been coding for over 5 years now, mainly as a
            hobby but have decided to take the leap in making it a full time
            career!
          </p>
          <strong style={{ textAlign: "center" }}>
            My current technical skills:
          </strong>
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
