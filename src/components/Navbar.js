import React, { useState } from "react";
import "./Navbar.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home" className="navbar-logo">
            <img
              className="h-auto max-w-20"
              src="images/logo.png"
              alt="gps-logo"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                Hjem
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/AboutUs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Om oss
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Esport"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                GPS E-sport
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://tshirt.no/butikk/jokkimsen-shop/"
                target="_blank"
                className="nav-links-mobile"
              >
                GPS-butikk
              </Link>
            </li>
          </ul>
          {button && (
            <Link to="https://tshirt.no/butikk/jokkimsen-shop/" target="_blank">
              <Button buttonStyle="btn--outline">GPS-butikk</Button>
            </Link>
          )}
          <ul className="nav-item">
            <Link to="https://www.twitch.tv/Jokkimsen" target="_blank">
              <img
                className="nav-links object-contain max-w-max"
                src="/images/Jokkimsen.png"
                alt="sgtsatan"
              />
            </Link>
          </ul>
          <ul className="nav-item">
            <Link to="https://www.twitch.tv/sergeantsatanlive" target="_blank">
              <img
                className="nav-links object-contain max-w-max"
                src="/images/Disc_3_Clean.png"
                alt="sgtsatan"
              />
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
