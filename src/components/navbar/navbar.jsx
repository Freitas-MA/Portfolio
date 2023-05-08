import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import devLogo from "../../assets/favicon/dev.svg";
import moon from "../../assets/moon-regular.svg";
import sun from "../../assets/sun-solid.svg";
import arrow from "../../assets/arrow-right-solid.svg";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const mobileMenu = () => {
    setActive(!active);
  };

  const closeMenu = () => {
    setActive(false);
  };

  const switchTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* <!-- Logo --> */}
        <h1 id="logo">
          <img src={devLogo} alt="Logo" />
        </h1>
        {/* <!-- Navbar links --> */}
        <ul className={`nav-menu ${active ? "active" : ""}`}>
          <li>
            <a className="nav-link" href="#" onClick={closeMenu}>
              About-me
            </a>
          </li>
          <li>
            <a className="nav-link" href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>

          <li>
            <a className="nav-link btn btn-primary" href="#">
              RESUME <img src="{arrow}" alt="Arrow" />
            </a>
          </li>

          {/* <!-- Toggle switch --> */}
          <div className="theme-switch">
            <input
              type="checkbox"
              id="switch"
              onChange={switchTheme}
              checked={theme === "dark"}
            />
            <label className="toggle-icons" htmlFor="switch">
              <img className="moon" src={moon} />
              <img className="sun" src={sun} />
            </label>
          </div>
        </ul>
        {/* <!-- Hamburger menu --> */}
        <div className={`hamburger ${active ? "active" : ""}`} onClick={mobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;