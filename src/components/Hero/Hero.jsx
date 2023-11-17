import homeGif from "../../assets/programer.gif";
import { isElementVisible } from "../functions";
import { useState, useEffect, useRef } from "react";
import HeroTypewriter from "./HeroTypewriter";
import "./Hero.css";
import { useModal } from "../modal/ModalCV";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  const { modalSwitch } = useModal();

  const handleScroll = () => {
    const elements = document.querySelectorAll(
      ".popRight, .popLeft, .animate, .popUp"
    );
    let allVisible = true;
    elements.forEach((element) => {
      if (!isElementVisible(element, document.body)) {
        allVisible = false;
      }
    });
    if (allVisible) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const handleLoad = () => {
      const elements = document.querySelectorAll(
        ".popRight, .popLeft, .animate, .popUp"
      );
      let allVisible = true;
      elements.forEach((element) => {
        if (!isElementVisible(element, document.body)) {
          allVisible = false;
        }
      });
      if (allVisible) {
        setIsVisible(true);
      }
    };

    handleLoad();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="hero" ref={heroRef}>
      <section className={`header-container`}>
        <div className="hero-profile">
          <div className={`profile ${isVisible ? "popRight" : ""}`}>
            <img src={homeGif} alt="" />
          </div>

          <div className={`content-text ${isVisible ? "popLeft" : ""}`}>
            <h1>Hi, I&apos;m Marcos Freitas </h1>
            <h2>
              <HeroTypewriter />
            </h2>
            <h3>
              I&apos;m able to deal with your projects and deliver a very good
              result in a short time!
            </h3>
            <p>
              Skilled and passionate web developer, I possess a solid foundation
              in HTML, CSS, and JavaScript, and excel at problem-solving, clear
              communication, and collaboration with stakeholders.
            </p>
          </div>
        </div>
        <div className="btn-container">
          <a
            href="#contact"
            className={`btn btn-secondary ${isVisible ? "popUp" : ""}`}
          >
            <span>Connect With Me</span>
          </a>
          <span
            className={`btn btn-secondary ${isVisible ? "popUp" : ""}`}
            onClick={modalSwitch}
          >
            Checkout my resume!
          </span>
        </div>
      </section>

      <div className={`techIcons`}>
        <div>
          <i className="devicon devicon-html5-plain"></i>
          <p>HTML5</p>
        </div>
        <div>
          <i className="devicon devicon-css3-plain"></i>
          <p>CSS3</p>
        </div>
        <div>
          <i className="devicon devicon-bootstrap-plain"></i>
          <p>Bootstrap</p>
        </div>
        <div>
          <i className="devicon devicon-javascript-plain"></i>
          <p>Javascript</p>
        </div>
        <div>
          <i className="devicon devicon-react-original"></i>
          <p>ReactJS</p>
        </div>
        <div>
          <i className="devicon devicon-nextjs-original"></i>
          <p>NextJS</p>
        </div>
      </div>
    </div>
  );
}
