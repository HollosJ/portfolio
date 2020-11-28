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
        <a className="contact-link" href="mailto:hollosj99@gmail.com">
          <FontAwesomeIcon className="faIcon" icon={["fas", "at"]} />
          <span>Email</span>
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

      <form action="https://formspree.io/f/xpzodkpp" method="POST" className="contact-form">
        <label htmlFor="email">
          Your email:
          <input type="text" name="_replyto" id="email"/>
        </label>

        <label htmlFor="name">
          Your name:
          <input type="text" name="name" id="name"/>
        </label>

        <label htmlFor="message">
          Your message:
          <textarea name="message" id="message"></textarea>
        </label>

        <button type="submit" id="submit">Send</button>

      </form>

    </div>
  );
}