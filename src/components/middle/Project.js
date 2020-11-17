import React, { useState } from "react";
import CloseIcon from "./close-icon.png";

const ProjectPreview = (props) => {
  const [open, setOpen] = useState(false);

  //Handles opening and closing modal
  const handleClick = () => {
    setOpen(!open);
  };

  //Handles click outside of modal box
  const handleModalClick = (e) => {
    if (e.target.className === "ProjectDetails") {
      setOpen(!open);
    }
  };

  return (
    <div className="Project">
      <div className="ProjectPreview" onClick={handleClick}>
        <img className="prev-img" src={props.preview} alt="" />
        <h1 className="prev-title">{props.name}</h1>
      </div>

      
      {open === true ? (
        <div className="ProjectDetails" onClick={handleModalClick}>
          <img
            className="details-close"
            src={CloseIcon}
            alt="X"
            onClick={handleClick}
          />
          <div className="details-wrapper">
            <h1 className="details-title">{props.name}</h1>
            <img className="details-img" src={props.fullimg} alt="img" />

            <div className="details-info">
              <p className="details-desc">{props.desc}</p>
              <div className="details-features">
                <div className="details-tech">
                  <h3 className="tech--title">Technologies used:</h3>
                  <ul className="tech--items">
                    {props.tech.map((ti, i) => {
                      return (
                        <li className="tech--item" key={i}>
                          {ti}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* END OF TECH */}
                <div className="details-notables">
                  <h3 className="notables--title">Notable features:</h3>
                  <ul className="notables--items">
                    {props.notables.map((n, i) => {
                      return (
                        <li className="notables--item" key={i}>
                          {n}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              {/* END OF FEATURES */}
            </div>
            <div className="details-links">
              <a className="link--live" href={props.live} target="_blank">
                LIVE PREVIEW
              </a>
              <a className="link--code" href={props.code} target="_blank">
                MY CODE
              </a>
            </div>
          </div>
          {/* END OF DETAILS WRAPPER */}
        </div>
      ) : (
        null
      )}
    </div>
  );
};

export default ProjectPreview;
