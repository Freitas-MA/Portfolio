import { useState, useEffect } from "react";
import devLogo from "../../assets/favicon/male-programmer-svgrepo-com.svg";
import moon from "../../assets/moon-regular.svg";
import sun from "../../assets/sun.svg";
import ModalCV from "../modal/ModalCV";
import { StyledNavbar } from "./StyledNavbar";


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
    <StyledNavbar>
      <div className="container">
        {/* <!-- Logo --> */}
        <h1 id="logo">
          <a href="#">
          <img src={devLogo} alt="Developer Logo" />
          </a>
        </h1>
        {/* <!-- Navbar links --> */}
        <ul className={`nav-menu ${active ? "active" : ""}`}>
          <li>
            <a className="nav-link" href="#" onClick={closeMenu}>
              About
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
            <ModalCV />
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
              <img className="moon" src={moon} alt="Moon Icon" />
              <img className="sun" src={sun} alt="Sun Icon" />
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
    </StyledNavbar>
  );
};

export default Navbar;