import { isElementVisible } from "../functions";
import { useState, useEffect, useRef, Component } from "react";
import HeroTypewriter from "./HeroTypewriter";
import { StyledHero } from "./StyledHero";

export default function Hero({ props }) {
  const { title, subtitle, image, description, buttons, icons } = props;
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);


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
    <StyledHero ref={heroRef}>
      <section className={`header-container`}>
        <div className="hero-profile">
          <div className={`profile ${isVisible ? "popRight" : ""}`}>
            <img src={image.imageGif} alt={image.alt} />
          </div>

          <div className={`content-text ${isVisible ? "popLeft" : ""}`}>
            <h1>{title}</h1>
            <h3>
              <HeroTypewriter words={subtitle} />
            </h3>
            <h3>
              <p>
                {description.first}
                <br />
                {description.second}
              </p>
            </h3>
          </div>
        </div>
        <div className="btn-container">
          <a
            href="#contact"
            className={`btn btn-secondary ${isVisible ? "popUp" : ""}`}
          >
            <span>{buttons.second}</span>
          </a>
          <span
            className={`btn btn-secondary ${isVisible ? "popUp" : ""}`}
            onClick={() => {
              document.getElementById("modal").style.display = "flex";
            }}
          >
            {buttons.first}
          </span>
        </div>
      </section>

      <div className={`techIcons`}>
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`icon-container ${isVisible ? "animate" : ""}`}
          >
            <i className={icon.classes} title={icon.name}></i>
            <p>{icon.name}</p>
          </div>
        ))}
      </div>
    </StyledHero>
  );
}
