import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="contact-links">
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/jameshollos/"
          target="_blank"
        >
          <FontAwesomeIcon className="faIcon" icon={["fab", "linkedin"]} />
          <span>LinkedIn</span>
        </a>
        <a
          className="contact-link"
          href="https://github.com/HollosJ"
          target="_blank"
        >
          <FontAwesomeIcon className="faIcon" icon={["fab", "github-square"]} />
          <span>GitHub</span>
        </a>
        <a
          className="contact-link"
          href="https://codepen.io/HollosJ"
          target="_blank"
        >
          <FontAwesomeIcon className="faIcon" icon={["fab", "codepen"]} />
          <span>Codepen</span>
        </a>
        <a
          className="contact-link"
          href="https://drive.google.com/file/d/1025ja3ser6s5GgM5G2Btenl25hoAtggZ/view?usp=sharing"
          target="_blank"
        >
          <FontAwesomeIcon className="faIcon" icon={["fas", "file"]} />
          <span>Résumé/CV</span>
        </a>
      </div>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd46RQrqYCqz8lTyFu30WZ_urmtVe29sOLAGxZ05CZtUk6yWg/viewform?embedded=true"
        width="100%"
        height="1000px"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        className="contact-form"
      >
        Loading…
      </iframe>
    </div>
  );
}
