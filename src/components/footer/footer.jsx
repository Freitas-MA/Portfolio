import React from "react";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import githubIcon from "../../assets/github-icon.svg";
import './Footer.css'

export default function Footer() {
  return (
    <section className="footer">
      <footer id="footer">
        <div className="container">
          <a href="mailto:freitas.ma.1993@gmail.com" target="__blank">
            freitas.ma.1993@gmail.com
          </a>

          <div className="social">
            <a
              href="https://www.linkedin.com/in/freitas-marcos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/Freitas-MA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>

          <p>
            Copyright &copy; Marcos Freitas <span id="datee"></span>,
            All rights reserved --V.4.0--
          </p>
        </div>
      </footer>
    </section>
  );
}
