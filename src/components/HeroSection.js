import React from "react";
import "./HeroSection.css";
import "../App.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

//onClick={event=> window.location.href='/your-href'};//
// ^Vil denne fungere?

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/Streamvidutenstart.mp4" autoPlay loop muted />
      <div className="hero-text">
        <h1>VELKOMMEN TIL GPS!</h1>
        <h4>Er du klar til å bli med på moroa?</h4>
        <div className="hero-btns">
          <Link to="/AboutUs">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              OM OSS
            </Button>
          </Link>

          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={(event) => window.open("https://discord.gg/gps", "_blank")}
          >
            {" "}
            DISCORD <i className="fa-brands fa-discord" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
